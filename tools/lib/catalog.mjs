// Loads the whole series: series.yaml plus every videos/<track>/<video>/script.md and its translations.
// Every tool reads the catalogue through here, so the files on disk stay the only source of truth.
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import YAML from "yaml";

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const rel = (p) => path.relative(ROOT, p).split(path.sep).join("/");

export const toMin = (t) => { const [m, s] = String(t).split(":").map(Number); return m + (s || 0) / 60; };
export const mmss = (m) => { const s = Math.round(m * 60); return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); };
export const hours = (m) => (m >= 60 ? Math.floor(m / 60) + " h " : "") + Math.round(m % 60) + " min";
export const slug = (s) => s.toLowerCase().replace(/[’']/g, "").replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
export const hash = (s) => crypto.createHash("sha1").update(s.trim().replace(/\s+/g, " ")).digest("hex").slice(0, 8);

// Narration speed at the voice's -4% rate, measured on the Staff Attendance takes.
export const WORDS_PER_SEC = 2.4;
export const speakSecs = (text) => text.trim().split(/\s+/).filter(Boolean).length / WORDS_PER_SEC;

export function splitFrontMatter(text, file) {
    const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
    if (!m) throw new Error(`${file}: missing front matter`);
    return { data: YAML.parse(m[1]) || {}, body: m[2] };
}

/** Top-level "## Name" sections of a script body. */
function sections(body) {
    const out = {};
    let cur = null;
    for (const line of body.split(/\r?\n/)) {
        const h = line.match(/^## (.+?)\s*$/);
        if (h) { cur = h[1].trim(); out[cur] = []; continue; }
        if (cur) out[cur].push(line);
    }
    for (const k in out) out[k] = out[k].join("\n").replace(/<!--[\s\S]*?-->/g, "").trim();
    return out;
}

/** Chapters ("### 1. Title") and scenes ("#### [1.1] label") with **Say:** / **Show:** / **Caption:** fields. */
export function parseScenes(text) {
    const chapters = [];
    const scenes = [];
    let chap = null, scene = null, field = null;
    for (const line of text.replace(/<!--(?!\s*en:)[\s\S]*?-->/g, "").split(/\r?\n/)) {
        const c = line.match(/^### (?:(\d+)\.\s*)?(.+?)\s*$/);
        if (c) { chap = { n: c[1] ? +c[1] : chapters.length + 1, title: c[2] }; chapters.push(chap); scene = null; continue; }
        const s = line.match(/^#### \[([\w.-]+)\]\s*(.*?)\s*(?:<!--\s*en:(\w+)\s*-->)?\s*$/);
        if (s) { scene = { id: s[1], label: s[2] || "", chapter: chap ? chap.title : "", enHash: s[3] || null, say: "", show: "", caption: "" }; scenes.push(scene); field = null; continue; }
        if (!scene) continue;
        const f = line.match(/^\*\*(Say|Show|Caption):\*\*\s*(.*)$/i);
        if (f) { field = f[1].toLowerCase(); scene[field] = f[2]; continue; }
        if (field && line.trim()) scene[field] += (scene[field] ? " " : "") + line.trim();
    }
    return { chapters, scenes };
}

export function loadSeries() {
    const series = YAML.parse(fs.readFileSync(path.join(ROOT, "series.yaml"), "utf8"));
    const tracks = Object.fromEntries(series.tracks.map((t) => [t.id, t]));
    const videos = [];
    const vdir = path.join(ROOT, "videos");
    for (const t of series.tracks) {
        const tdir = path.join(vdir, t.folder);
        if (!fs.existsSync(tdir)) continue;
        for (const name of fs.readdirSync(tdir).sort((a, b) => a.localeCompare(b, "en", { numeric: true }))) {
            const dir = path.join(tdir, name);
            const file = path.join(dir, "script.md");
            if (!fs.existsSync(file)) continue;
            const { data, body } = splitFrontMatter(fs.readFileSync(file, "utf8"), rel(file));
            const sec = sections(body);
            const { chapters, scenes } = parseScenes(sec["Script"] || "");
            const d = t.defaults || {};
            const v = {
                ...data,
                id: String(data.id),
                track: t.id,
                dir: rel(dir),
                file: rel(file),
                audience: data.audience || d.aud,
                stage: data.stage || d.stage,
                plan: data.plan || d.plan,
                switch: data.switch !== undefined ? data.switch : d.sw || null,
                platform: data.platform || d.plat,
                target: String(data.target),
                prereq: (data.prereq || []).map(String),
                flags: data.flags || [],
                covers: (sec["Covers"] || "").split("\n").map((l) => l.replace(/^-\s*/, "").trim()).filter(Boolean),
                goal: (sec["Goal"] || "").replace(/^_.*_$/, ""),
                needs: sec["You'll need"] || "",
                chapters,
                scenes,
                narrationSecs: scenes.reduce((a, s) => a + speakSecs(s.say), 0),
                translations: {},
            };
            const idir = path.join(dir, "i18n");
            if (fs.existsSync(idir)) {
                for (const f of fs.readdirSync(idir).filter((f) => f.endsWith(".md"))) {
                    const lf = path.join(idir, f);
                    const { data: ld, body: lb } = splitFrontMatter(fs.readFileSync(lf, "utf8"), rel(lf));
                    v.translations[f.replace(/\.md$/, "")] = { ...ld, file: rel(lf), ...parseScenes(lb) };
                }
            }
            videos.push(v);
        }
    }
    return { series, tracks, videos, byId: Object.fromEntries(videos.map((v) => [v.id, v])) };
}

/** Expands playlist ranges like "05.1-05.8" into IDs. */
export function expandIds(list) {
    const out = [];
    for (const tok of list) {
        const [a, b] = String(tok).split("-");
        if (!b) { out.push(a); continue; }
        const [tr, x] = a.split(".");
        const y = +b.split(".")[1];
        for (let i = +x; i <= y; i++) out.push(tr + "." + i);
    }
    return out;
}

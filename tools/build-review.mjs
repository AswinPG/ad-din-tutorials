// Builds one self-contained HTML page where the client can read and sign off every tutorial script.
// Shows the viewer-facing parts only (goal, audience, covers, chapters, narration, what's on screen).
// Internal notes (flags, demo data, review and prompt logs) are left out, and production asides are trimmed.
// Usage: node tools/build-review.mjs [out.html]
import fs from "node:fs";
import path from "node:path";
import { loadSeries, ROOT, mmss } from "./lib/catalog.mjs";

const out = path.resolve(process.argv[2] || path.join(ROOT, "out", "Ad-Din-Tutorial-Scripts-Review.html"));
const { series, videos } = loadSeries();

const LOGO = path.join(ROOT, "..", "addin-master-rec", "AdDin.Angular", "src", "assets", "assetv2", "logo.png");
const logo = fs.existsSync(LOGO) ? "data:image/png;base64," + fs.readFileSync(LOGO).toString("base64") : "";

// Production asides that are for the recording team, not the client.
const INTERNAL = /\b(app bug|known bug|a bug|miscounts?|as decided)\b/i;
// Camera directions that only make sense to the recording team (what to keep out of shot, test badges, stubs).
const CAMERA = /(\bkeep\b[^.;]*\bout of (the )?(shot|close-up|zooms?|focus)|don.t zoom|test-mode badge|crop the browser tab bar|\bstub state\b|reset the stub|which is the Routines tab)/i;
const tidyShow = (t) => {
    const bad = (x) => INTERNAL.test(x) || CAMERA.test(x);
    const end = (x) => (/[.!?)"”]$/.test(x) ? x : x + ".");
    let s = t.replace(/\s*\((?:[^()]*?)\)/g, (m) => (bad(m) ? "" : m)).replace(/,\s*out of focus/gi, "");
    s = s.split(/(?<=[.!?])\s+(?=[A-Z"“])/)
        .map((x) => { const cl = x.split(/;\s*/); const keep = cl.filter((c) => !bad(c)); return keep.length === cl.length ? x : keep.length ? end(keep.join("; ").replace(/[.;]\s*$/, "")) : ""; })
        .filter(Boolean).join(" ");
    return s.replace(/\s{2,}/g, " ").trim();
};

const ICONS = { "00": "waving_hand", "01": "app_registration", "02": "workspace_premium", "03": "corporate_fare", "04": "mosque", "05": "school", "06": "person_add", "07": "forum", "08": "event", "09": "language", "10": "co_present", "12": "assignment", "13": "badge", "14": "family_restroom", "15": "groups", "16": "event_repeat" };
const COLORS = { "00": "#7718aa", "01": "#3f51b5", "02": "#c99a06", "03": "#607d8b", "04": "#5c6bc0", "05": "#1e88e5", "06": "#43a047", "07": "#ef6c00", "08": "#c0ca33", "09": "#26a69a", "10": "#8e24aa", "12": "#3949ab", "13": "#00897b", "14": "#e65f8e", "15": "#2e7d32", "16": "#6d4c41" };

const live = videos.filter((v) => v.status !== "on-hold");
const tracks = series.tracks
    .filter((t) => t.status !== "on-hold" && live.some((v) => v.track === t.id))
    .map((t) => ({ id: t.id, part: t.part, name: t.name, icon: ICONS[t.id] || "play_circle", color: COLORS[t.id] || "#7718aa" }));
const parts = series.parts.filter((p) => tracks.some((t) => t.part === p.id)).map((p) => ({ id: p.id, name: p.name, sub: p.sub }));

const data = live.map((v) => ({
    id: v.id,
    t: v.track,
    title: v.title,
    goal: v.goal.trim(),
    aud: (v.audience || []).map((a) => (a === "Org Admin" ? "Organisation admin" : a)),
    plan: v.plan,
    target: v.target,
    est: mmss(v.narrationSecs / 60),
    pre: v.prereq.filter((p) => live.some((x) => x.id === p)),
    covers: v.covers,
    approved: v.status === "client-approved",
    ch: v.chapters.map((c) => ({
        n: c.n,
        title: c.title,
        sc: v.scenes.filter((s) => s.chapter === c.title).map((s) => {
            const cap = s.caption && s.caption.replace(/\*\*/g, "") !== s.say.replace(/\*\*/g, "") ? s.caption : "";
            return { id: s.id, l: s.label, say: s.say, show: tidyShow(s.show), cap };
        }),
    })),
}));

const totalScenes = data.reduce((a, v) => a + v.ch.reduce((b, c) => b + c.sc.length, 0), 0);
const built = new Date().toISOString().slice(0, 10);
const payload = JSON.stringify({ parts, tracks, videos: data, built, totalScenes }).replace(/</g, "\\u003c");
const html = fs.readFileSync(path.join(ROOT, "tools", "templates", "review.html"), "utf8")
    .replaceAll("__LOGO__", logo)
    .replace("__DATA__", () => payload);
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, html);
console.log(`${out}\n${data.length} videos · ${tracks.length} tracks · ${totalScenes} scenes · ${(html.length / 1024).toFixed(0)} KB`);

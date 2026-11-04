// Narration for the recorder: one clip per scene, made BEFORE recording so each scene lasts exactly as long as its clip.
//
//   node engine/voice.mjs <id> [<id> ...]   writes out/<id>/voice/en/lines.json, clones every line in the IP3-A voice
//                                            (voice-clone/batch_clone.py, speech-to-text checked) and word-aligns the clips
//   node engine/voice.mjs <id> --lines       only writes lines.json
//
// The clips live in out/<id>/voice/<lang>/ (git-ignored). The recorder reads them through loadClips().
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { loadSeries, ROOT } from "../tools/lib/catalog.mjs";
import { spoken } from "../tools/lib/voice.mjs";

export const CLONE = {
    dir: "C:/Fantacode/voice-clone",
    python: "C:/Fantacode/voice-clone/.venv-cb/Scripts/python.exe",
    script: "batch_clone.py",
    ref: "C:/Fantacode/voice-clone/voices/ip3.wav", // IP3-A: batch_clone's default settings
};
const HERE = path.dirname(fileURLToPath(import.meta.url));
export const plain = (t) => t.replace(/\*\*(.+?)\*\*/g, "$1").trim();
export const voiceDir = (id, lang = "en") => path.join(ROOT, "out", id, "voice", lang);

/** One line per scene that has narration: what the voice is sent, and the words it must be heard saying. */
export function buildLines(video, lang = "en", series = loadSeries().series) {
    return video.scenes.filter((s) => s.say.trim()).map((s) => ({ scene: s.id, say: spoken(s.say, lang, series), check: plain(s.say) }));
}

export function writeLines(video, lang = "en") {
    const dir = voiceDir(video.id, lang);
    fs.mkdirSync(dir, { recursive: true });
    const lines = buildLines(video, lang);
    const file = path.join(dir, "lines.json");
    // a changed line must be re-cloned: drop its manifest entry so batch_clone redoes it
    const mf = path.join(dir, "manifest.json");
    if (fs.existsSync(file) && fs.existsSync(mf)) {
        const old = JSON.parse(fs.readFileSync(file, "utf8"));
        const man = JSON.parse(fs.readFileSync(mf, "utf8"));
        const keep = {};
        lines.forEach((l, i) => { const o = old[i]; if (o && o.say === l.say && man[String(i + 1)]) keep[String(i + 1)] = man[String(i + 1)]; });
        fs.writeFileSync(mf, JSON.stringify(keep, null, 1));
    }
    fs.writeFileSync(file, JSON.stringify(lines, null, 1));
    return { file, lines };
}

export function clone(video, lang = "en") {
    const { file } = writeLines(video, lang);
    const out = voiceDir(video.id, lang);
    console.log(`cloning ${video.id} (${lang}) into ${path.relative(ROOT, out)}`);
    execFileSync(CLONE.python, [CLONE.script, CLONE.ref, file, out], { cwd: CLONE.dir, stdio: "inherit" });
    execFileSync(CLONE.python, [path.join(HERE, "align.py"), out], { cwd: CLONE.dir, stdio: "inherit" });
}

/**
 * The clips for a video, keyed by scene ID: {file, dur, score, cues: [{text, start, end}]} with cue times inside the clip.
 * Fails if a Say line changed since the clips were made.
 */
export function loadClips(video, lang = "en") {
    const dir = voiceDir(video.id, lang);
    const lines = JSON.parse(fs.readFileSync(path.join(dir, "lines.json"), "utf8"));
    const man = JSON.parse(fs.readFileSync(path.join(dir, "manifest.json"), "utf8"));
    const align = fs.existsSync(path.join(dir, "align.json")) ? JSON.parse(fs.readFileSync(path.join(dir, "align.json"), "utf8")) : {};
    const now = buildLines(video, lang);
    const out = {};
    now.forEach((l, i) => {
        const k = String(i + 1);
        const old = lines[i];
        if (!old || old.say !== l.say || !man[k]) throw new Error(`${video.id} [${l.scene}]: no current clip; run node engine/voice.mjs ${video.id}`);
        const scene = video.scenes.find((s) => s.id === l.scene);
        const text = plain(scene.caption || scene.say);
        out[l.scene] = { ...man[k], text, words: align[k] || null, cues: cues(text, man[k].dur, align[k]) };
    });
    return out;
}

/** Splits a caption into sentence cues timed from the clip's word timestamps (proportionally when none). */
function cues(text, dur, words) {
    const sents = text.match(/[^.!?]+[.!?]+["')]*|[^.!?]+$/g).map((s) => s.trim()).filter(Boolean);
    // merge very short sentences into their neighbour ("That's it.")
    const merged = [];
    for (const s of sents) { const l = merged[merged.length - 1]; if (l && (l.split(" ").length < 4 || s.split(" ").length < 3)) merged[merged.length - 1] = l + " " + s; else merged.push(s); }
    if (merged.length === 1) return [{ text: merged[0], start: 0, end: dur }];
    const count = (s) => s.split(/\s+/).filter(Boolean).length;
    const total = merged.reduce((a, s) => a + count(s), 0);
    const out = [];
    let acc = 0, start = 0;
    merged.forEach((s, i) => {
        acc += count(s);
        let end = dur;
        if (i < merged.length - 1) {
            if (words && words.length) {
                const idx = Math.min(words.length - 1, Math.max(0, Math.round((acc / total) * words.length) - 1));
                // the gap after that word is the sentence break
                end = words[idx + 1] ? (words[idx].end + words[idx + 1].start) / 2 : words[idx].end;
            } else end = (acc / total) * dur;
        }
        out.push({ text: s, start, end });
        start = end;
    });
    return out;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
    const args = process.argv.slice(2);
    const onlyLines = args.includes("--lines");
    const { byId } = loadSeries();
    for (const id of args.filter((a) => !a.startsWith("--"))) {
        const v = byId[id];
        if (!v) throw new Error("no video " + id);
        if (onlyLines) console.log(writeLines(v).file);
        else clone(v);
    }
}

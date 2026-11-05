// Builds the language tracks for a recorded video: the picture stays exactly as recorded, and each language's clips are
// placed at the English scenes' start times (out/<id>/timeline.json).
//
//   npm run tracks -- <id> [--langs ar,ur,bn,ms,id]
//
// Writes to out/<id>/: audio/<lang>.m4a, subs/<lang>.srt + .vtt (English too), tracks.log, and master-multi.mp4 (the
// video stream copied, English plus one AAC audio track and one mov_text subtitle track per language, language-tagged,
// English default). A clip longer than its scene is listed in tracks.log as an overflow; the fix is a tighter translation
// and a new clip. Only an overflow of at most 8% is fitted with atempo (the last resort).
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { loadSeries, ROOT } from "../tools/lib/catalog.mjs";
import { loadClips, loadClipsLang } from "./voice.mjs";

export const ISO3 = { en: "eng", ar: "ara", ur: "urd", bn: "ben", ms: "msa", id: "ind" };
const MAX_TEMPO = 1.08;
const GAP = 0.15; // a clip must end this long before the next scene starts

const ts = (t, sep = ",") => {
    const ms = Math.max(0, Math.round(t * 1000)), h = Math.floor(ms / 3600000), m = Math.floor((ms % 3600000) / 60000), s = Math.floor((ms % 60000) / 1000), r = ms % 1000;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}${sep}${String(r).padStart(3, "0")}`;
};
const wrap = (t) => {
    if (t.length <= 46) return t;
    const mid = t.length / 2;
    let best = -1;
    for (let i = 0; i < t.length; i++) if (t[i] === " " && (best < 0 || Math.abs(i - mid) < Math.abs(best - mid))) best = i;
    return best < 0 ? t : t.slice(0, best) + "\n" + t.slice(best + 1);
};
const probe = (file, stream = "") => parseFloat(execFileSync("ffprobe", ["-v", "error", ...(stream ? ["-select_streams", stream] : []), "-show_entries", stream ? "stream=duration" : "format=duration", "-of", "csv=p=0", file]).toString());

/** Places one language's clips on the English timeline. Returns placements, cues and log lines. */
export function place(video, lang, timeline) {
    const scenes = timeline.timeline.filter((e) => e.type === "scene");
    const clips = lang === "en" ? loadClips(video, "en") : loadClipsLang(video, lang);
    const placed = [], cues = [], log = [];
    scenes.forEach((e, i) => {
        const c = clips[e.id];
        if (!c) return;
        const start = e.vt;
        const slot = (i + 1 < scenes.length ? scenes[i + 1].vt : timeline.total) - start - GAP;
        let tempo = 1;
        if (c.dur > slot) {
            const need = c.dur / slot;
            if (need <= MAX_TEMPO) { tempo = Math.ceil(need * 1000) / 1000; log.push(`${lang} [${e.id}] atempo ${tempo} (clip ${c.dur.toFixed(2)} s, room ${slot.toFixed(2)} s)`); }
            else log.push(`${lang} [${e.id}] OVERFLOW clip ${c.dur.toFixed(2)} s, room ${slot.toFixed(2)} s (needs ${need.toFixed(2)}x)`);
        }
        placed.push({ scene: e.id, file: c.file, start, dur: c.dur / tempo, tempo, english: !!c.english });
        for (const q of c.cues) cues.push({ text: q.text, from: start + q.start / tempo, to: Math.min(start + q.end / tempo, start + c.dur / tempo) });
    });
    return { placed, cues, log };
}

export function writeSubs(cues, base) {
    fs.mkdirSync(path.dirname(base), { recursive: true });
    fs.writeFileSync(base + ".srt", cues.map((c, i) => `${i + 1}\n${ts(c.from)} --> ${ts(c.to)}\n${wrap(c.text)}\n`).join("\n"));
    fs.writeFileSync(base + ".vtt", "WEBVTT\n\n" + cues.map((c) => `${ts(c.from, ".")} --> ${ts(c.to, ".")}\n${wrap(c.text)}\n`).join("\n"));
}

export function writeAudio(placed, total, file, dir) {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    const inputs = [], filters = [];
    placed.forEach((p, i) => {
        inputs.push("-i", p.file);
        const ms = Math.round(p.start * 1000);
        filters.push(`[${i}:a]aresample=48000,aformat=channel_layouts=mono${p.tempo !== 1 ? `,atempo=${p.tempo}` : ""},adelay=${ms}|${ms}[a${i}]`);
    });
    const mix = placed.map((_, i) => `[a${i}]`).join("") + `amix=inputs=${placed.length}:normalize=0:dropout_transition=0,loudnorm=I=-16:TP=-1.5:LRA=11,aresample=48000,apad[aout]`;
    const script = path.join(dir, "mix-" + path.basename(file, path.extname(file)) + ".filter");
    fs.writeFileSync(script, filters.concat(mix).join(";"));
    execFileSync("ffmpeg", ["-y", "-v", "error", ...inputs, "-filter_complex_script", script, "-map", "[aout]", "-t", total.toFixed(3), "-c:a", "aac", "-b:a", "160k", file]);
}

export function buildTracks(video, langs) {
    const out = path.join(ROOT, "out", video.id);
    const timeline = JSON.parse(fs.readFileSync(path.join(out, "timeline.json"), "utf8"));
    const master = path.join(out, "master.mp4");
    const total = probe(master);
    const log = [`${video.id} ${video.title}: picture ${total.toFixed(2)} s; clips placed at the English scene starts`];
    const tracks = [], placements = {};
    for (const lang of ["en", ...langs]) {
        const { placed, cues, log: l } = place(video, lang, timeline);
        const tr = lang === "en" ? null : video.translations[lang];
        placements[lang] = placed.map((p) => ({ ...p, text: (lang === "en" || p.english ? video.scenes : tr.scenes).find((x) => x.id === p.scene).say.replace(/\*\*(.+?)\*\*/g, "$1") }));
        log.push(...(l.length ? l : [`${lang}: every clip fits its scene`]));
        writeSubs(cues, path.join(out, "subs", lang));
        const audio = path.join(out, "audio", lang + ".m4a");
        fs.mkdirSync(path.dirname(audio), { recursive: true });
        if (lang === "en") execFileSync("ffmpeg", ["-y", "-v", "error", "-i", master, "-map", "0:a", "-c", "copy", audio]);
        else writeAudio(placed, total, audio, out);
        tracks.push({ lang, audio, srt: path.join(out, "subs", lang + ".srt") });
    }
    // master-multi.mp4: the same video stream, six audio and six subtitle tracks
    const multi = path.join(out, "master-multi.mp4");
    const args = ["-y", "-v", "error", "-i", master];
    tracks.forEach((t) => args.push("-i", t.audio));
    tracks.forEach((t) => args.push("-i", t.srt));
    args.push("-map", "0:v");
    tracks.forEach((_, i) => args.push("-map", `${i + 1}:a`));
    tracks.forEach((_, i) => args.push("-map", `${i + 1 + tracks.length}:s`));
    args.push("-c:v", "copy", "-c:a", "copy", "-c:s", "mov_text");
    const names = Object.fromEntries(loadSeries().series.languages.map((l) => [l.code, l.name]));
    tracks.forEach((t, i) => {
        args.push(`-metadata:s:a:${i}`, `language=${ISO3[t.lang]}`, `-metadata:s:a:${i}`, `title=${names[t.lang]}`, `-disposition:a:${i}`, i === 0 ? "default" : "0");
        args.push(`-metadata:s:s:${i}`, `language=${ISO3[t.lang]}`, `-metadata:s:s:${i}`, `title=${names[t.lang]}`, `-disposition:s:${i}`, i === 0 ? "default" : "0");
    });
    args.push("-t", total.toFixed(3), "-movflags", "+faststart", multi);
    execFileSync("ffmpeg", args);
    // every audio track must run the full length
    const info = JSON.parse(execFileSync("ffprobe", ["-v", "error", "-show_entries", "stream=index,codec_type,duration:stream_tags=language", "-of", "json", multi]).toString());
    for (const st of info.streams) {
        const d = parseFloat(st.duration);
        const okLen = st.codec_type === "subtitle" || Math.abs(d - total) < 0.1;
        log.push(`stream ${st.index} ${st.codec_type} ${st.tags?.language || ""}: ${isNaN(d) ? "?" : d.toFixed(2)} s${okLen ? "" : "  SHORT"}`);
    }
    fs.writeFileSync(path.join(out, "tracks.log"), log.join("\n") + "\n");
    fs.writeFileSync(path.join(out, "tracks.json"), JSON.stringify({ total, langs: tracks.map((t) => t.lang), placements }, null, 1));
    console.log(log.join("\n"));
    return { multi, total };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
    const args = process.argv.slice(2);
    const li = args.indexOf("--langs");
    const langs = li >= 0 ? args.splice(li, 2)[1].split(",") : ["ar", "ur", "bn", "ms", "id"];
    const { byId } = loadSeries();
    for (const id of args) buildTracks(byId[id], langs);
}

// Records one video from its script.md (narration, chapters, scene IDs) and its record.mjs (what happens on screen).
//
//   npm run record -- <id>                    English master: out/<id>/master.mp4 + master.srt, narrated by the cloned
//                                             voice clips made with `npm run voice -- <id>` (each scene lasts exactly
//                                             as long as its clip)
//   npm run record -- <id> --voice edge       a quick draft with the edge-tts series voice instead of the clips
//   npm run record -- <id> --only 2.1,2.2     film only some scenes (draft; still writes master.mp4)
//
// The Ad-Din web app must be served from origin/master on http://127.0.0.1:4300 (see engine/README.md). Every API call
// is answered by the mocked demo world (engine/demo/world.mjs); no dev or production server is called.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { loadSeries, ROOT } from "../tools/lib/catalog.mjs";
import { speak } from "../tools/lib/voice.mjs";
import { createSession, assemble, probe, APP } from "./lib/engine.mjs";
import { loadClips, plain } from "./voice.mjs";
import { createWorld, session, DEMO, IDS } from "./demo/world.mjs";

const args = process.argv.slice(2);
const opt = (name, dflt) => { const i = args.indexOf("--" + name); return i >= 0 ? args.splice(i, 2)[1] : dflt; };
const voiceMode = opt("voice", "clips");
const onlyArg = opt("only", "");
const only = onlyArg ? new Set(onlyArg.split(",")) : null;
const id = args[0];
if (!id) { console.log("Usage: npm run record -- <id> [--voice clips|edge] [--only 1.1,1.2]"); process.exit(1); }

const { series, byId, tracks } = loadSeries();
const video = byId[id];
if (!video) throw new Error("no video " + id);
const recFile = path.join(ROOT, video.dir, "record.mjs");
if (!fs.existsSync(recFile)) throw new Error(`${video.dir}/record.mjs is missing`);
const rec = (await import(pathToFileURL(recFile).href)).default;

const OUT = path.join(ROOT, "out", id);
fs.mkdirSync(OUT, { recursive: true });
const logLines = [];
const log = (m) => { console.log(m); logLines.push(m); };

// ---- narration: one clip per scene ----
let clips;
if (voiceMode === "clips") clips = loadClips(video);
else {
    clips = {};
    const dir = path.join(OUT, "voice", "edge");
    for (const sc of video.scenes.filter((x) => x.say.trim())) {
        const file = path.join(dir, sc.id + ".mp3");
        if (!fs.existsSync(file)) speak(sc.say, "en", file);
        const dur = probe(file);
        const text = plain(sc.caption || sc.say);
        clips[sc.id] = { file, dur, text, words: null, cues: [{ text, start: 0, end: dur }] };
    }
}
const narr = Object.values(clips).reduce((a, c) => a + c.dur, 0);
log(`${id} ${video.title}: ${video.scenes.length} scenes, narration ${narr.toFixed(1)} s (${voiceMode})`);

// ---- session ----
const world = createWorld(rec.world ? rec.world({ DEMO, IDS }) : {});
const s = await createSession({
    mode: rec.mode || "browser",
    role: rec.role || "",
    brand: "Ad-Din · " + tracks[video.track].name,
    world,
    out: OUT,
    clock: rec.clock || "2026-11-10T15:00:00Z", // Tue 10 Nov 2026, 10:00 in Toronto
    geolocation: { latitude: DEMO.lat, longitude: DEMO.lng, accuracy: 10 },
    nativeFrames: rec.native || [], // e.g. ["#app2"]: that frame plays the Ad-Din app rather than a browser
    log,
});
Object.assign(s, { video, DEMO, IDS, world, session, APP });
s.page.setDefaultTimeout(8000);

try {
    // extra pages the video needs on the app origin (server pages, a demo inbox)
    if (rec.install) await rec.install(s);
    // off-camera set-up: sign in, warm the pages so lazy chunks are cached and loads are quick on camera
    if (rec.setup) await rec.setup(s);
    for (const p of rec.warm || []) await s.go(p.path || p, { wait: p.wait || 5000, frame: p.frame || "#app" });
    if (rec.start) await rec.start(s);
    if (only) await s.card(null); // a draft of some scenes: the opening card would cover them

    await s.startCapture();
    const total = video.chapters.length;
    let lastChapter = null;
    for (const sc of video.scenes) {
        if (only && !only.has(sc.id)) continue;
        const ci = video.chapters.findIndex((c) => c.title === sc.chapter);
        if (ci !== lastChapter) {
            lastChapter = ci;
            const ch = video.chapters[ci];
            const steps = video.scenes.filter((x) => x.chapter === ch.title && x.label).map((x) => x.label);
            await s.chapter(ci, total, `Part ${ch.n} of ${total}`, ch.title, steps.length > 1 ? steps : []);
        }
        const steps = video.scenes.filter((x) => x.chapter === sc.chapter && x.label);
        const si = steps.findIndex((x) => x.id === sc.id);
        if (si >= 0 && steps.length > 1) await s.stepIndex(si);
        const def = rec.scenes[sc.id];
        if (!def) log(`  no record.mjs entry for [${sc.id}]; holding the current shot`);
        const prep = def && typeof def === "object" ? def.prep : null;
        const run = def ? (typeof def === "function" ? def : def.run) : null;
        if (prep) await s.prep(() => s.soft(() => prep(s), "prep " + sc.id));
        log(`[${sc.id}] ${clips[sc.id] ? clips[sc.id].dur.toFixed(1) + " s" : "no narration"}`);
        await s.scene(sc.id, clips[sc.id], run, { pad: (def && def.pad) ?? 0.45 });
    }
    if (rec.end) await rec.end(s);
    await s.stopCapture();

    const file = path.join(OUT, "master.mp4");
    const r = assemble(s, file, { title: `${id} ${video.title}` });
    log(`wrote ${path.relative(ROOT, file)} (${r.total.toFixed(1)} s, ${r.frames} frames, ${r.clips} clips, ${r.cues} subtitle cues) and master.srt`);
} finally {
    const unmatched = [...new Set(s.mocks.unmatched)];
    if (unmatched.length) log("API calls the demo world did not answer:\n  " + unmatched.join("\n  "));
    const errs = s.errors.filter((e) => !/ERR_FAILED|ERR_BLOCKED/.test(e));
    if (errs.length) log("page errors:\n  " + [...new Set(errs)].slice(0, 30).join("\n  "));
    if (s.skipped.length) log(`${s.skipped.length} soft steps skipped (see above)`);
    fs.writeFileSync(path.join(OUT, "record.log"), logLines.join("\n") + "\n");
    await s.close();
}

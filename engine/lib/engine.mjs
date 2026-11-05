// Recording engine: a 1920x1080 stage page hosting the real Ad-Din app in an iframe (browser frame, phone frame, or both),
// an animated pointer, spotlights, captions and cards, CDP screencast capture, and a narration timeline built from
// pre-made voice clips. Ported from the Staff Attendance launch kit (staff-attendance-launch/video/lib/engine.mjs).
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { installMocks } from "./mock.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
export const APP = process.env.ADDIN_APP || "http://127.0.0.1:4300";
const STAGE = () => fs.readFileSync(path.join(HERE, "stage.html"), "utf8");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const APP_FRAME = new RegExp("^" + APP.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "/(?!__stage)");

export const probe = (file) => parseFloat(execFileSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", file]).toString());

/**
 * @param o.mode      "browser" | "phone" | "split"
 * @param o.world     the demo world ({ overrides, onUnmatched }) answering every API call
 * @param o.clock     fixed start time for the app's clock (Date or ISO string)
 */
export async function createSession({ mode = "browser", role = "", brand = "Ad-Din", world, out, clock, geolocation, timezoneId = "America/Toronto", css = "", nativeFrames = [], log = console.log }) {
    // headless Edge, or Chrome when Edge can't start (for example mid-update)
    let browser;
    for (const channel of [process.env.ADDIN_BROWSER || "msedge", "chrome"]) {
        try { browser = await chromium.launch({ channel, headless: true, args: ["--force-color-profile=srgb", "--hide-scrollbars"] }); break; }
        catch (e) { log(`  ${channel} did not start: ${String(e).split("\n")[0].slice(0, 120)}`); }
    }
    if (!browser) throw new Error("no browser could start");
    const context = await browser.newContext({
        viewport: { width: 1920, height: 1080 },
        deviceScaleFactor: 1,
        timezoneId,
        locale: "en-CA",
        geolocation: geolocation || { latitude: 43.6532, longitude: -79.3832, accuracy: 12 },
        permissions: ["geolocation"],
    });
    // hide scrollbars and the support widget inside the app frames
    await context.addInitScript((extra) => {
        const st = document.createElement("style");
        st.textContent = "::-webkit-scrollbar{width:0!important;height:0!important} #jsd-widget,iframe#jsd-widget{display:none!important}" + extra;
        document.addEventListener("DOMContentLoaded", () => document.head.appendChild(st));
    }, css);
    // frames that play the Ad-Din app (the MAUI shell): a stub of the native bridge it injects, so the web app takes its
    // in-app layout (native login header, drawer). Every call is a no-op; permissions read as granted.
    await context.addInitScript((ids) => {
        try {
            if (!window.frameElement || !ids.includes(window.frameElement.id)) return;
            const state = { notifications: "granted", location: "granted", locationAccuracy: "precise", locationServices: true };
            window.AdDinBridge = new Proxy({}, { get: (t, k) => k === "then" ? undefined : k === "getPermissions" || k === "requestPermission" ? (...a) => { const cb = a[a.length - 1]; if (typeof cb === "function") setTimeout(() => cb(state)); } : k === "getNativeInfo" ? () => JSON.stringify({ platform: "android", version: "2.0.52" }) : () => undefined });
        } catch (e) {}
    }, nativeFrames.map((x) => x.replace(/^#/, "")));
    if (clock) await context.clock.install({ time: new Date(clock) });
    const mocks = await installMocks(context, world || {});
    await context.route(APP + "/__stage/**", (r) => r.fulfill({ status: 200, contentType: "text/html", body: STAGE() }));
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", (e) => errors.push(String(e).slice(0, 300)));
    page.on("console", (m) => { if (m.type() === "error") errors.push("console: " + m.text().slice(0, 200)); });

    const s = {
        browser, context, page, mocks, errors, mode, out, log,
        timeline: [], frames: [], t0: 0, cdp: null, skipped: [],
        frameDir: path.resolve(out, "frames"),
    };
    fs.rmSync(s.frameDir, { recursive: true, force: true });
    fs.mkdirSync(s.frameDir, { recursive: true });
    await page.goto(APP + "/__stage/index.html");
    await page.evaluate(([m, r, b]) => { window.stage.mode(m, r); window.stage.brand(b); }, [mode, role, brand]);
    return Object.assign(s, api(s));
}

function api(s) {
    const { page } = s;
    const now = () => Date.now() / 1000 - s.t0;
    const st = (fn, ...a) => page.evaluate(([f, args]) => window.stage[f](...args), [fn, a]);

    const self = {
        /** The app inside the main frame (#app) or the phone of a split screen (#app2). */
        app: () => page.frameLocator("#app"),
        app2: () => page.frameLocator("#app2"),
        st,
        async setMode(m, role) { s.mode = m; await st("mode", m, role); },
        /** Sign the demo account in or out: the stage shares the app's origin, so it owns localStorage. */
        async signIn(session) { await page.evaluate((v) => localStorage.setItem("AdDinUser", v), JSON.stringify(session)); },
        async signOut() { await page.evaluate(() => { localStorage.removeItem("AdDinUser"); }); },
        /** Load an app path into a frame. Inside a scene the load is shown; between scenes use prep() so it is cut. */
        async go(appPath, { wait = 4000, frame = "#app", until } = {}) {
            await page.evaluate(([sel, u]) => (document.querySelector(sel).src = u), [frame, APP + appPath]);
            if (frame === "#app") await st("url", "portal.ad-din.ca" + appPath.split("?")[0]);
            if (until) await (frame === "#app" ? self.app() : self.app2()).locator(until).first().waitFor({ timeout: 20000 }).catch(() => s.log("  wait timed out: " + until));
            await sleep(wait);
        },
        /** Navigate inside the running SPA (no reload), like a click on an in-app link. */
        async nav(appPath, { wait = 1500, frame = "#app" } = {}) {
            await page.evaluate(([sel, u]) => { const w = document.querySelector(sel).contentWindow; w.history.pushState({}, "", u); w.dispatchEvent(new PopStateEvent("popstate")); }, [frame, appPath]);
            if (frame === "#app") await st("url", "portal.ad-din.ca" + appPath.split("?")[0]);
            await sleep(wait);
        },
        /** Everything inside fn is cut from the final video (page loads, set-up). */
        async prep(fn) {
            const c0 = s.t0 ? now() : null;
            await fn();
            if (c0 !== null) s.timeline.push({ type: "cut", from: c0, to: now() });
        },
        /** Run fn; a step that can't find its element is logged, never allowed to stall the take. */
        async soft(fn, what = "") {
            try { return await fn(); } catch (e) { const m = (what ? what + ": " : "") + String(e).split("\n")[0].slice(0, 160); s.skipped.push({ scene: s.sceneId, m }); s.log("  soft step skipped [" + s.sceneId + "] " + m); }
        },
        async box(locator, timeout = 6000) {
            await locator.scrollIntoViewIfNeeded({ timeout: 4000 }).catch(() => {});
            return locator.boundingBox({ timeout });
        },
        async zoom(locator, k = 1.35) {
            if (!locator) { await st("zoom", 0, 0, 1); await sleep(750); return; }
            const b = await locator.boundingBox({ timeout: 5000 }).catch(() => null);
            if (!b) return false;
            if (s.mode === "browser") {
                k = Math.max(1, Math.min(k, (1310 * 0.94) / b.width, (896 * 0.9) / b.height));
                if (k < 1.15) return false;
            }
            await st("zoom", b.x + b.width / 2, b.y + b.height / 2, k);
            await sleep(750);
            return true;
        },
        /** Spotlight one or more locators together (null clears). */
        async spot(locators, pad = 8) {
            if (!locators) return st("spots", null);
            const list = Array.isArray(locators) ? locators : [locators];
            const boxes = [];
            for (const l of list) { const b = await l.boundingBox({ timeout: 5000 }).catch(() => null); if (b) boxes.push(b); }
            if (boxes.length) await st("spots", boxes, pad);
            return boxes;
        },
        /** Move the pointer to an element (and click it). `quick` halves the travel time, for busy scenes. */
        async pointTo(locator, { click = false, offset, quick = false } = {}) {
            await locator.scrollIntoViewIfNeeded({ timeout: 5000 }).catch(() => {});
            await sleep(quick ? 80 : 200);
            const b = await locator.boundingBox({ timeout: 6000 });
            if (!b) throw new Error("no box for " + locator);
            const x = b.x + (offset ? offset.x : b.width / 2), y = b.y + (offset ? offset.y : b.height / 2);
            await st("cursorTo", s.mode === "phone" ? x : x - 6, s.mode === "phone" ? y : y - 4, true);
            await sleep(quick ? 420 : 760);
            if (click) {
                await st("tap", x, y);
                await locator.click({ force: true, timeout: 6000 });
            }
            return b;
        },
        async tap(locator, opts) { return self.pointTo(locator, { ...opts, click: true }); },
        async hover(locator) { const b = await self.pointTo(locator); await locator.hover({ force: true, timeout: 3000 }).catch(() => {}); return b; },
        async hideCursor() { await st("cursorTo", 960, 1200, false); },
        async typeInto(locator, text, delay = 70) {
            await self.tap(locator);
            await locator.pressSequentially(text, { delay });
        },
        async clear(locator) { await locator.fill(""); await locator.dispatchEvent("input"); },
        async callout(text, box, side = "right") {
            if (!text) return st("callout", null);
            const x = side === "right" ? box.x + box.width + 24 : side === "below" ? box.x : box.x - 440;
            const y = side === "below" ? box.y + box.height + 18 : box.y;
            return st("callout", text, Math.min(x, 1480), Math.min(y, 960));
        },
        card: (o) => st("card", o || null),
        caption: (t) => st("caption", t),
        statusTime: (t) => st("time", t),
        async scrollApp(y, frame = "#app") {
            await page.evaluate(([sel, yy]) => document.querySelector(sel).contentWindow.scrollTo({ top: yy, behavior: "smooth" }), [frame, y]);
            await sleep(700);
        },
        sleep,
        async startCapture() {
            s.cdp = await page.context().newCDPSession(page);
            let n = 0;
            s.cdp.on("Page.screencastFrame", async (f) => {
                const file = path.join(s.frameDir, String(++n).padStart(6, "0") + ".jpg");
                fs.writeFileSync(file, Buffer.from(f.data, "base64"));
                s.frames.push({ file, ts: f.metadata.timestamp });
                try { await s.cdp.send("Page.screencastFrameAck", { sessionId: f.sessionId }); } catch (e) {}
            });
            s.t0 = Date.now() / 1000;
            await s.cdp.send("Page.startScreencast", { format: "jpeg", quality: 92, maxWidth: 1920, maxHeight: 1080, everyNthFrame: 1 });
        },
        async stopCapture() {
            await sleep(400);
            await s.cdp.send("Page.stopScreencast");
            s.tEnd = Date.now() / 1000;
        },
        async chapter(n, total, kicker, title, steps) {
            await st("chapter", n, total, kicker, title, steps || []);
            s.timeline.push({ t: now(), type: "chapter", title });
        },
        stepIndex: (i) => st("step", i),
        /** Wait until `sec` seconds into the current scene's clip (no-op if already past). */
        async at(sec) { const left = s.sceneT0 + sec * 1000 - Date.now(); if (left > 0) await sleep(left); },
        /** Start time of the n-th caption sentence of the current clip (0-based), for syncing actions to words. */
        cue: (n) => (s.clip && s.clip.cues[n] ? s.clip.cues[n].start : 0),
        /** When the narration says `word` (first match), in seconds into the clip; proportional to the text when unaligned. */
        wordTime(word) {
            const c = s.clip; if (!c) return 0;
            const w = word.toLowerCase().split(/\s+/)[0].replace(/[^a-z0-9']/g, "");
            if (c.words) { const hit = c.words.find((x) => x.w.toLowerCase().replace(/[^a-z0-9']/g, "").startsWith(w)); if (hit) return hit.start; }
            const i = c.text.toLowerCase().indexOf(word.toLowerCase());
            return i < 0 ? 0 : (i / c.text.length) * c.dur;
        },
        /** Wait until the narration reaches `word`. */
        async atWord(word, early = 0.25) { await self.at(Math.max(0, self.wordTime(word) - early)); },
        /** Seconds left in the current clip. */
        left: () => (s.clip ? s.clip.dur - (Date.now() - s.sceneT0) / 1000 : 0),
        /**
         * One scene: its clip plays and its captions change at sentence breaks while `run` acts on screen.
         * The scene lasts exactly clip + pad; if the actions take longer it is logged as an overrun.
         */
        async scene(id, clip, run, { pad = 0.45 } = {}) {
            s.sceneId = id;
            s.clip = clip;
            s.sceneT0 = Date.now();
            const t = now();
            s.timeline.push({ t, type: "scene", id, dur: clip ? clip.dur : 0 });
            if (clip) {
                s.timeline.push({ t, type: "audio", scene: id, file: clip.file, dur: clip.dur, cues: clip.cues });
                await st("captions", clip.cues.map((c) => ({ text: c.text, start: c.start })));
            }
            const t1 = Date.now();
            if (run) await self.soft(() => run(s), "scene");
            const want = ((clip ? clip.dur : 1.5) + pad) * 1000;
            const used = Date.now() - t1;
            if (used > want + 300) s.log(`  overrun [${id}]: actions ${(used / 1000).toFixed(1)} s, clip ${(want / 1000).toFixed(1)} s`);
            if (used < want) await sleep(want - used);
            await st("caption", null);
        },
        async close() { await s.browser.close(); },
    };
    return self;
}

// ---------- assembly ----------
export function assemble(s, outFile, { title } = {}) {
    const dir = s.out;
    const frames = s.frames;
    if (!frames.length) throw new Error("no frames");
    const t0 = s.t0;
    const cuts = s.timeline.filter((e) => e.type === "cut" && e.to > e.from).map((c) => [c.from, c.to]).sort((a, b) => a[0] - b[0]);
    const merged = [];
    for (const c of cuts) { const l = merged[merged.length - 1]; if (l && c[0] <= l[1]) l[1] = Math.max(l[1], c[1]); else merged.push([...c]); }
    const overlap = (a, b) => merged.reduce((acc, [f, t]) => acc + Math.max(0, Math.min(b, t) - Math.max(a, f)), 0);
    const mapT = (t) => t - overlap(0, t);

    // a constant 30 fps schedule: for each output frame, the last captured frame at that moment (skipping the cuts);
    // runs of the same frame become one entry whose duration is an exact multiple of 1/30 s
    const total = mapT(s.tEnd - t0);
    const FPS = 30, n = Math.floor(total * FPS);
    const srcT = (T) => { let S = T; for (const [f, t] of merged) { if (S >= f) S += t - f; else break; } return S; };
    const runs = [];
    let fi = 0;
    for (let i = 0; i < n; i++) {
        const S = srcT(i / FPS);
        while (fi + 1 < frames.length && frames[fi + 1].ts - t0 <= S) fi++;
        const last = runs[runs.length - 1];
        if (last && last.f === fi) last.k++; else runs.push({ f: fi, k: 1 });
    }
    const lines = ["ffconcat version 1.0"];
    const fwd = (f) => f.split(path.sep).join("/");
    for (const r of runs) lines.push(`file '${fwd(frames[r.f].file)}'`, `duration ${(r.k / FPS).toFixed(6)}`);
    lines.push(`file '${fwd(frames[runs[runs.length - 1].f].file)}'`);
    const list = path.join(dir, "frames.ffconcat");
    fs.writeFileSync(list, lines.join("\n"));

    for (const e of s.timeline) if (e.t !== undefined) e.vt = mapT(e.t); // video time, after cuts
    const audio = s.timeline.filter((e) => e.type === "audio").map((e) => ({ ...e, t: e.vt }));
    const inputs = [];
    const filters = [];
    audio.forEach((a, i) => {
        inputs.push("-i", a.file);
        const ms = Math.round(a.t * 1000);
        filters.push(`[${i + 1}:a]aresample=48000,adelay=${ms}|${ms}[a${i}]`);
    });
    const mix = audio.map((_, i) => `[a${i}]`).join("") + `amix=inputs=${audio.length}:normalize=0:dropout_transition=0,loudnorm=I=-16:TP=-1.5:LRA=11,aresample=48000,apad[aout]`;
    fs.writeFileSync(path.join(dir, "audio.filter"), filters.concat(mix).join(";"));

    const chapters = s.timeline.filter((e) => e.type === "chapter");
    const meta = [";FFMETADATA1", "title=" + (title || path.basename(outFile, ".mp4"))];
    chapters.forEach((c, i) => {
        const start = Math.round(c.vt * 1000), end = Math.round((i + 1 < chapters.length ? chapters[i + 1].vt : total) * 1000);
        meta.push("[CHAPTER]", "TIMEBASE=1/1000", `START=${start}`, `END=${end}`, "title=" + c.title);
    });
    const metaFile = path.join(dir, "chapters.txt");
    fs.writeFileSync(metaFile, meta.join("\n"));

    // subtitles: one cue per sentence, timed from the clip's word alignment
    const cues = audio.flatMap((a) => a.cues.map((c) => ({ text: c.text, from: a.t + c.start, to: a.t + c.end })));
    const srt = cues.map((c, i) => `${i + 1}\n${ts(c.from)} --> ${ts(c.to)}\n${wrap(c.text)}\n`).join("\n");
    fs.writeFileSync(outFile.replace(/\.mp4$/, ".srt"), srt);

    const args = ["-y", "-v", "error", "-f", "concat", "-safe", "0", "-i", list, ...inputs, "-i", metaFile, "-filter_complex_script", path.join(dir, "audio.filter"), "-map", "0:v", "-map", "[aout]", "-map_metadata", String(audio.length + 1), "-map_chapters", String(audio.length + 1), "-r", "30", "-fps_mode", "cfr", "-c:v", "libx264", "-preset", "slow", "-crf", "18", "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "160k", "-t", total.toFixed(2), "-movflags", "+faststart", outFile];
    execFileSync("ffmpeg", args, { stdio: ["ignore", "ignore", "inherit"] });
    fs.writeFileSync(path.join(dir, "timeline.json"), JSON.stringify({ total, cuts: merged, timeline: s.timeline }, null, 1));
    return { total, frames: frames.length, clips: audio.length, cues: cues.length };
}

const ts = (t) => {
    const ms = Math.max(0, Math.round(t * 1000)), h = Math.floor(ms / 3600000), m = Math.floor((ms % 3600000) / 60000), sec = Math.floor((ms % 60000) / 1000), r = ms % 1000;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")},${String(r).padStart(3, "0")}`;
};
// two lines of at most ~45 characters
const wrap = (t) => {
    if (t.length <= 46) return t;
    const mid = t.length / 2;
    let best = -1;
    for (let i = 0; i < t.length; i++) if (t[i] === " " && (best < 0 || Math.abs(i - mid) < Math.abs(best - mid))) best = i;
    return best < 0 ? t : t.slice(0, best) + "\n" + t.slice(best + 1);
};

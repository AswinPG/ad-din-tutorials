// Checks every video file against the series rules. Exit code 1 on errors; warnings don't fail.
// Usage: npm run validate [-- <video id>]
import { loadSeries, toMin, mmss, hash, speakSecs, expandIds } from "./lib/catalog.mjs";

const { series, tracks, videos, byId } = loadSeries();
const only = process.argv[2];
const errors = [], warnings = [];
const err = (v, m) => errors.push(`${v ? v.id + " " : ""}${m}`);
const warn = (v, m) => warnings.push(`${v ? v.id + " " : ""}${m}`);

const seen = new Set();
const max = toMin(series.rules.max_length), enTarget = toMin(series.rules.english_target);
const langs = Object.fromEntries(series.languages.map((l) => [l.code, l]));

for (const v of videos) {
    if (seen.has(v.id)) err(v, "duplicate id"); seen.add(v.id);
    if (only && v.id !== only) continue;
    if (!v.dir.split("/").pop().startsWith(v.id + "-")) err(v, `folder name should start with "${v.id}-"`);
    if (v.id.split(".")[0] !== v.track) err(v, `id doesn't match its track folder (${v.track})`);
    if (!v.title) err(v, "missing title");
    if (!series.statuses.includes(v.status)) err(v, `unknown status "${v.status}" (use: ${series.statuses.join(", ")})`);
    if (!/^\d+:\d\d$/.test(v.target)) err(v, `target "${v.target}" must look like 4:30`);
    else if (toMin(v.target) > max) err(v, `target ${v.target} is over the ${series.rules.max_length} limit`);
    for (const p of v.prereq) if (!byId[p]) err(v, `prereq ${p} doesn't exist`);
    if (!v.audience?.length) err(v, "no audience");

    const scripted = v.scenes.length > 0;
    if (!scripted && !["planned", "on-hold"].includes(v.status)) err(v, `status is "${v.status}" but the script has no scenes`);
    const ids = new Set();
    for (const s of v.scenes) {
        if (ids.has(s.id)) err(v, `scene [${s.id}] appears twice`); ids.add(s.id);
        if (!s.say && !s.show) err(v, `scene [${s.id}] has neither Say nor Show`);
        if (s.say && speakSecs(s.say) > 20) warn(v, `scene [${s.id}] narration is long (${Math.round(speakSecs(s.say))} s); split it`);
    }
    if (scripted) {
        const secs = v.narrationSecs;
        if (secs / 60 > enTarget) warn(v, `English narration is about ${mmss(secs / 60)}, over the ${series.rules.english_target} English target (translations need room)`);
        if (!v.goal) warn(v, "Goal section is empty");
    }

    for (const [code, tr] of Object.entries(v.translations)) {
        if (!langs[code]) { err(v, `translation ${code}.md is not a language in series.yaml`); continue; }
        const tIds = new Set(tr.scenes.map((s) => s.id));
        for (const s of v.scenes) {
            const t = tr.scenes.find((x) => x.id === s.id);
            if (!t) { if (s.say) err(v, `${code}: scene [${s.id}] not translated`); continue; }
            if (s.say && !t.say) err(v, `${code}: scene [${s.id}] has no Say`);
            if (t.enHash && s.say && t.enHash !== hash(s.say)) warn(v, `${code}: scene [${s.id}] English changed since translation; update it`);
        }
        for (const id of tIds) if (!ids.has(id)) warn(v, `${code}: scene [${id}] no longer exists in English`);
        const secs = tr.scenes.reduce((a, s) => a + speakSecs(s.say || ""), 0);
        if (secs / 60 > max) warn(v, `${code}: narration about ${mmss(secs / 60)}, over ${series.rules.max_length}`);
    }
}

if (!only) {
    for (const t of series.tracks) if (!videos.some((v) => v.track === t.id)) warn(null, `track ${t.id} has no videos`);
    for (const [name, list] of Object.entries(series.playlists)) for (const id of expandIds(list)) if (!byId[id]) err(null, `playlist "${name}" lists ${id}, which doesn't exist`);
    for (const d of series.decisions || []) if (!["open", "decided"].includes(d.status)) err(null, `decision "${d.title}" has status "${d.status}" (open or decided)`);
    for (const d of series.decisions || []) if (d.status === "decided" && !d.answer) err(null, `decision "${d.title}" is decided but has no answer`);
}

for (const w of warnings) console.log("warn  " + w);
for (const e of errors) console.log("ERROR " + e);
console.log(`\n${only ? "1 video" : videos.length + " videos"} checked · ${errors.length} errors · ${warnings.length} warnings`);
process.exit(errors.length ? 1 : 0);

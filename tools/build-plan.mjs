// Rebuilds the series plan from the video files: the interactive page and the print page,
// and with --pdf the plan PDF as well.
// Usage: npm run plan   |   npm run plan:pdf
import fs from "node:fs";
import path from "node:path";
import { loadSeries, ROOT, toMin } from "./lib/catalog.mjs";
import { renderPrintPlan } from "./lib/print-plan.mjs";
import { htmlToPdf } from "./pdf.mjs";

const { series, videos } = loadSeries();
const date = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

// The shape both templates take.
const data = {
    PARTS: series.parts,
    TRACKS: series.tracks.map((t) => ({ id: t.id, part: t.part, name: t.name, d: t.defaults || {}, note: t.note })),
    V: videos.map((v) => [v.id, v.title, v.covers.join("; "), toMin(v.target), v.prereq.join(", "), {
        aud: v.audience, stage: v.stage, plan: v.plan, sw: v.switch || undefined, plat: v.platform,
        flag: [v.status === "on-hold" ? "On hold" : null, ...v.flags].filter(Boolean).join(" · ") || undefined,
    }]),
    PATHS: Object.fromEntries(Object.entries(series.playlists).map(([k, list]) => [k, list.join(" ")])),
    ISSUES: (series.decisions || []).filter((d) => d.status === "open").map((d) => [d.title, d.detail, d.videos]),
};

const out = path.join(ROOT, "plan");
const tpl = fs.readFileSync(path.join(ROOT, "tools/templates/interactive.html"), "utf8");
fs.writeFileSync(path.join(out, "tutorial-series.html"),
    tpl.replace("/*@DATA@*/null", JSON.stringify(data)).replace("<!--@DATE@-->", date));
fs.writeFileSync(path.join(out, "tutorial-series-print.html"), renderPrintPlan(data, { date }));
console.log("plan/tutorial-series.html and plan/tutorial-series-print.html written");

if (process.argv.includes("--pdf")) {
    htmlToPdf(path.join(out, "tutorial-series-print.html"), path.join(out, "Ad-Din-Tutorial-Series.pdf"));
    console.log("plan/Ad-Din-Tutorial-Series.pdf written");
}

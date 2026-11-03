// Checks that every **bold** label in the scripts exists in the Ad-Din app code.
// Usage: npm run labels [-- <id> ...] [--all]
// The app source is the commit named in series.yaml → app (exported once into out/app-src/<sha>/).
// Prints labels that are missing or differ in capitals; prints nothing for a clean video unless --all.
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { ROOT, loadSeries } from "./lib/catalog.mjs";

const { series, videos } = loadSeries();
const args = process.argv.slice(2);
const showAll = args.includes("--all");
const only = args.filter((a) => !a.startsWith("--"));
const app = series.app || {};
const git = (...a) => execFileSync("git", ["-C", app.repo, ...a], { encoding: "utf8" }).trim();

const sha = git("rev-parse", "--short", app.ref);
const src = path.join(ROOT, "out", "app-src", sha);
if (!fs.existsSync(src)) {
    // Relative names for tar: Git Bash's tar reads "C:..." as a remote host.
    const base = path.dirname(src), tmp = `${sha}.tmp`;
    fs.rmSync(path.join(base, tmp), { recursive: true, force: true });
    fs.mkdirSync(path.join(base, tmp), { recursive: true });
    execFileSync("git", ["-C", app.repo, "archive", "-o", path.join(base, `${sha}.tar`), app.ref, app.src]);
    execFileSync("tar", ["-xf", `${sha}.tar`, "-C", tmp], { cwd: base });
    fs.rmSync(path.join(base, `${sha}.tar`));
    fs.renameSync(path.join(base, tmp), src);
}

// One big text of every template, script and translation file, with HTML entities and spacing normalised.
const norm = (s) => s.replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, " ");
const parts = [];
(function walk(dir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, e.name);
        if (e.isDirectory()) walk(p);
        else if (/\.(html|ts|json)$/.test(e.name) && !e.name.endsWith(".spec.ts")) parts.push(fs.readFileSync(p, "utf8"));
    }
})(src);
const text = norm(parts.join("\n"));
const lower = text.toLowerCase();

let checked = 0, missing = 0, cased = 0;
for (const v of videos) {
    if (only.length && !only.includes(v.id)) continue;
    const issues = [];
    for (const s of v.scenes) {
        for (const m of `${s.say} ${s.caption}`.matchAll(/\*\*(.+?)\*\*/g)) {
            const label = norm(m[1]).trim();
            checked++;
            if (text.includes(label)) continue;
            if (lower.includes(label.toLowerCase())) { cased++; issues.push(`  [${s.id}] capitals differ: ${label}`); }
            else { missing++; issues.push(`  [${s.id}] not found: ${label}`); }
        }
    }
    if (issues.length || showAll) console.log(`${v.id} ${v.title}${issues.length ? "" : "  ok"}\n${[...new Set(issues)].join("\n")}`.trimEnd());
}
console.log(`\n${checked} labels checked against ${app.ref} (${sha}) · ${missing} not found · ${cased} capitals differ`);
console.log("Not found can still be right when the app builds the text in code (for example \"Sign Up & Continue\"); check those by hand.");

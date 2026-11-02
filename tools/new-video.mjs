// Adds a new video folder with script.md, prompts.md and i18n/, using the track folder from series.yaml.
// Usage: npm run new -- <id> "<title>" [--target 4:00] [--prereq 05.2,05.3]
import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";
import { loadSeries, ROOT, slug } from "./lib/catalog.mjs";

const args = process.argv.slice(2);
const opt = (name, dflt) => { const i = args.indexOf("--" + name); return i >= 0 ? args.splice(i, 2)[1] : dflt; };
const target = opt("target", "4:00");
const prereq = opt("prereq", "");
const [id, title] = args;
if (!/^\d\d\.\d+$/.test(id || "") || !title) { console.log('Usage: npm run new -- <id like 05.9> "<title>" [--target 4:00] [--prereq 05.2,05.3]'); process.exit(1); }

const { tracks, byId } = loadSeries();
if (byId[id]) { console.log(`${id} already exists: ${byId[id].file}`); process.exit(1); }
const t = tracks[id.split(".")[0]];
if (!t) { console.log(`No track ${id.split(".")[0]} in series.yaml; add the track there first.`); process.exit(1); }

const dir = path.join(ROOT, "videos", t.folder, `${id}-${slug(title)}`);
fs.mkdirSync(path.join(dir, "i18n"), { recursive: true });
const fm = { id, title, target, prereq: prereq ? prereq.split(",") : [], status: "planned" };
const body = fs.readFileSync(path.join(ROOT, "tools/templates/script.md"), "utf8")
    .replace("{{id}}", id).replace("{{title}}", title).replace("{{covers}}", "- ");
fs.writeFileSync(path.join(dir, "script.md"), "---\n" + YAML.stringify(fm, { lineWidth: 0 }) + "---\n\n" + body);
fs.writeFileSync(path.join(dir, "prompts.md"), `# Prompt log: ${id} ${title}\n\nEvery instruction given to Claude for this video, newest first, with the result.\nFormat: date · who · prompt (verbatim or summarised) · outcome / commit.\n\n_No prompts yet._\n`);
fs.writeFileSync(path.join(dir, "i18n", ".gitkeep"), "");
console.log(`Created ${path.relative(ROOT, dir)}\nNext: fill in Covers, add it to any playlists in series.yaml, then npm run validate.`);

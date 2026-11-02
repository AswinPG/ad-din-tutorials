// Starts or tops up a translation file (videos/.../i18n/<lang>.md) from the English script.
// Each scene is stamped with a fingerprint of its English text, so validate can flag
// translations that fall behind when the English changes. Existing translations are never overwritten.
// Usage: node tools/i18n.mjs <video id> <lang>   |   node tools/i18n.mjs <video id> <lang> --restamp <scene id>
import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";
import { loadSeries, ROOT, hash, splitFrontMatter, parseScenes } from "./lib/catalog.mjs";

const [id, lang, flag, sceneId] = process.argv.slice(2);
const { series, byId } = loadSeries();
const v = byId[id];
const L = series.languages.find((l) => l.code === lang);
if (!v || !L || L.source) { console.log("Usage: node tools/i18n.mjs <video id> <lang: " + series.languages.filter((l) => !l.source).map((l) => l.code).join("|") + ">"); process.exit(1); }
if (!v.scenes.length) { console.log(`${id} has no scenes yet; script it in English first.`); process.exit(1); }

const file = path.join(ROOT, v.dir, "i18n", `${lang}.md`);
let meta = { lang, language: L.name, voice: L.voice, status: "draft", translated_by: "Claude", reviewer: "" };
let existing = [];
if (fs.existsSync(file)) {
    const { data, body } = splitFrontMatter(fs.readFileSync(file, "utf8"), file);
    meta = { ...meta, ...data };
    existing = parseScenes(body).scenes;
}

const blocks = [];
let added = 0, restamped = 0;
for (const ch of v.chapters) {
    const scenes = v.scenes.filter((s) => s.chapter === ch.title);
    if (!scenes.length) continue;
    const old = existing.find((s) => scenes.some((x) => x.id === s.id));
    blocks.push(`### ${ch.n}. ${old?.chapter || ch.title}`);
    for (const s of scenes) {
        const t = existing.find((x) => x.id === s.id);
        let stamp = t?.enHash || hash(s.say || "");
        if (flag === "--restamp" && sceneId === s.id) { stamp = hash(s.say || ""); restamped++; }
        if (!t) added++;
        blocks.push(`#### [${s.id}] <!-- en:${stamp} -->\n**Say:** ${t?.say || "TRANSLATE: " + s.say}` + (t?.caption ? `\n**Caption:** ${t.caption}` : ""));
    }
}
fs.writeFileSync(file, "---\n" + YAML.stringify(meta, { lineWidth: 0 }) + "---\n\n" +
    `<!-- ${L.name} narration for ${id}. Keep scene IDs; translate only the Say/Caption text.\n` +
    `     On-screen button names stay in English, in bold. Islamic terms (Sabaq, Dour, Iqamah, Jumu'ah, Hifz) stay as they are.\n` +
    `     After updating a scene whose English changed, run: node tools/i18n.mjs ${id} ${lang} --restamp <scene id> -->\n\n` +
    blocks.join("\n\n") + "\n");
console.log(`${path.relative(ROOT, file)}: ${added} scenes added for translation${restamped ? `, ${restamped} restamped` : ""}`);

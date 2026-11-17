// Previews how a voice says something, with the pronunciation list applied.
// Usage: npm run say -- "Every masjid and madrasah" [--lang ur] [--voice en-GB-ThomasNeural] [--engine azure]
// Writes samples/say/<lang>-<n>.mp3 and prints exactly what the voice was sent.
import fs from "node:fs";
import path from "node:path";
import { ROOT } from "./lib/catalog.mjs";
import { speak, spoken } from "./lib/voice.mjs";

const args = process.argv.slice(2);
const opt = (name, dflt) => { const i = args.indexOf("--" + name); return i >= 0 ? args.splice(i, 2)[1] : dflt; };
const lang = opt("lang", "en");
const voice = opt("voice");
const engine = opt("engine", "edge");
const text = args.join(" ");
if (!text) { console.log('Usage: npm run say -- "<text>" [--lang en] [--voice <voice>]'); process.exit(1); }

const dir = path.join(ROOT, "samples", "say");
fs.mkdirSync(dir, { recursive: true });
const n = fs.readdirSync(dir).filter((f) => f.startsWith(lang + "-")).length + 1;
const file = path.join(dir, `${lang}-${String(n).padStart(3, "0")}${engine === "azure" ? "-azure" : ""}.mp3`);
speak(text, lang, file, { voice, engine });
console.log(`sent to voice: ${spoken(text, lang)}\nsaved: ${path.relative(ROOT, file)}`);

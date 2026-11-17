// Text-to-speech with the series voices and pronunciation list. The recorder will use this too,
// so a fix in series.yaml → pronunciations applies to every video in that language.
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { loadSeries, ROOT } from "./catalog.mjs";

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** The text as the voice should receive it: pronunciation respellings applied, bold markers removed. */
export function spoken(text, lang, series = loadSeries().series) {
    let out = text.replace(/\*\*(.+?)\*\*/g, "$1");
    const list = (series.pronunciations || {})[lang] || {};
    // longest first, so "Ad-Din" wins over a shorter key inside it
    for (const word of Object.keys(list).sort((a, b) => b.length - a.length)) {
        out = out.replace(new RegExp(`(?<![\\p{L}-])${escapeRe(word)}(?![\\p{L}-])`, "giu"), list[word]);
    }
    return out;
}

export function speak(text, lang, file, { voice, rate = "-4%", engine = "edge" } = {}) {
    const { series } = loadSeries();
    const L = series.languages.find((l) => l.code === lang);
    if (!L) throw new Error(`no language ${lang} in series.yaml`);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    if (engine === "azure") {
        // Azure Speech in Foundry: key and region come from the environment (see engine/azure_tts.py)
        const az = series.azure || {};
        const args = [path.join(ROOT, "engine", "azure_tts.py"), "--lang", lang, "--out", file, "--voice", voice || az.voice];
        if (az.rate) args.push("--rate", az.rate);
        execFileSync("python", [...args, spoken(text, lang, series)], { stdio: ["ignore", "ignore", "inherit"] });
        return file;
    }
    execFileSync("python", ["-m", "edge_tts", "--voice", voice || L.voice, `--rate=${rate}`, "--text", spoken(text, lang, series), "--write-media", file], { stdio: "ignore" });
    return file;
}

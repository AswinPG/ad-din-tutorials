// Prints an HTML file to PDF with headless Microsoft Edge (A4, no browser header/footer).
// Usage: npm run pdf -- <input.html> <output.pdf>
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { pathToFileURL, fileURLToPath } from "node:url";

const EDGE = ["C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe", "C:/Program Files/Microsoft/Edge/Application/msedge.exe"].find((p) => fs.existsSync(p));

export function htmlToPdf(input, output) {
    if (!EDGE) throw new Error("Microsoft Edge not found");
    // a throwaway profile, so an open Edge window doesn't swallow the headless run
    const profile = fs.mkdtempSync(path.join(os.tmpdir(), "edge-pdf-"));
    const r = spawnSync(EDGE, ["--headless=new", "--disable-gpu", "--no-pdf-header-footer", `--user-data-dir=${profile}`,
        "--virtual-time-budget=8000", `--print-to-pdf=${path.resolve(output)}`, pathToFileURL(path.resolve(input)).href], { stdio: "ignore" });
    fs.rmSync(profile, { recursive: true, force: true });
    if (r.status !== 0 || !fs.existsSync(output)) throw new Error(`Edge failed to print ${input}`);
    return output;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
    const [input, output] = process.argv.slice(2);
    if (!input || !output) { console.log("Usage: npm run pdf -- <input.html> <output.pdf>"); process.exit(1); }
    console.log("pdf:", htmlToPdf(input, output));
}

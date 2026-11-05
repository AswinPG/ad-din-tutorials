# Checks every language track of out/<id>/master-multi.mp4 (voice-clone venv):
#  - transcribes each line's window from the muxed track (multilingual faster-whisper "small", language set) and
#    compares it with the translation (share of the script's words heard; for ar and ur the native-script words);
#  - measures the level between lines, which should be silence (no leftover sound, repeats or clicks).
# Usage: python engine/verify_ml.py out/<id>   -> prints a summary, writes out/<id>/verify-ml.json
import difflib, json, os, re, subprocess, sys, tempfile, unicodedata
import numpy as np, soundfile
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
from faster_whisper import WhisperModel

out = sys.argv[1]
GOOD, SILENT_DB = 0.8, -45.0
tr = json.load(open(os.path.join(out, "tracks.json"), encoding="utf8"))
multi = os.path.join(out, "master-multi.mp4")
asr = WhisperModel("small", device="cpu", compute_type="int8")

AR_DIAC = re.compile(r"[ً-ٰٟۖ-ۭـ]")
def norm(s):
    s = AR_DIAC.sub("", unicodedata.normalize("NFKC", s.lower()))
    for a, b in (("أ", "ا"), ("إ", "ا"), ("آ", "ا"), ("ى", "ي"), ("ة", "ه"), ("ک", "ك"), ("ی", "ي"), ("ۃ", "ه"), ("ہ", "ه")): s = s.replace(a, b)
    s = re.sub(r"is(ation|ed|es|ing|e)\b", r"iz\1", s)
    return s
NAMES = {"udd", "ud", "din", "deen", "ad", "uddin", "addin", "adin", "اد", "دين", "الدين", "اددين", "ادين", "the"}
NUM = {"zero": "0", "oh": "0", "one": "1", "two": "2", "three": "3", "four": "4", "five": "5", "point": ""}
def words(s, so):
    s = re.sub(r"(\d)\.(\d)", r"\1 \2", norm(s).replace("-", " "))
    ws = [NUM.get(w, w) for w in re.findall(r"[\w']+", s)]
    out = []
    for w in ws:
        if not w or w in NAMES: continue
        if so and re.fullmatch(r"[a-z']+", w): continue
        out.extend(list(w) if w.isdigit() and len(w) > 1 else [w])
    return out

res = {"cues": {}, "summary": {}}
for i, lang in enumerate(tr["langs"]):
    wav = os.path.join(tempfile.gettempdir(), f"vml-{os.getpid()}-{lang}.wav")
    subprocess.run(["ffmpeg", "-y", "-v", "error", "-i", multi, "-map", f"0:a:{i}", "-ac", "1", "-ar", "16000", wav], check=True)
    y, sr = soundfile.read(wav)
    os.remove(wav)
    pl = tr["placements"][lang]
    so = lang in ("ar", "ur")
    scores, weak, noisy = [], [], []
    for k, p in enumerate(pl):
        a, b = p["start"], p["start"] + p["dur"]
        seg = y[max(0, int((a - 0.1) * sr)):int((b + 0.3) * sr)].astype(np.float32)
        wl = "en" if (lang == "en" or p.get("english")) else lang
        heard = " ".join(s.text for s in asr.transcribe(seg, language=wl, beam_size=5)[0]).strip()
        want, got = words(p["text"], so and wl != "en"), words(heard, so and wl != "en")
        sm = difflib.SequenceMatcher(None, want, got)
        sc = sum(m.size for m in sm.get_matching_blocks()) / max(1, len(want))
        scores.append(sc)
        if sc < GOOD: weak.append({"scene": p["scene"], "score": round(sc, 3), "text": p["text"], "heard": heard})
        # the gap after this line, up to the next line: should be silent
        g0 = b + 0.12
        g1 = (pl[k + 1]["start"] if k + 1 < len(pl) else tr["total"]) - 0.05
        if g1 - g0 > 0.1:
            gap = y[int(g0 * sr):int(g1 * sr)]
            if len(gap):
                win = max(1, int(0.05 * sr))
                rms = [np.sqrt(np.mean(gap[j:j + win] ** 2)) for j in range(0, len(gap) - win + 1, win)] or [0]
                peak = 20 * np.log10(max(rms) + 1e-9)
                if peak > SILENT_DB: noisy.append({"after": p["scene"], "from": round(g0, 2), "to": round(g1, 2), "peak_db": round(float(peak), 1)})
    res["cues"][lang] = {"weak": weak, "noisy_gaps": noisy, "scores": [round(s, 3) for s in scores]}
    res["summary"][lang] = {"lines": len(pl), "mean": round(float(np.mean(scores)), 3), "min": round(float(min(scores)), 3), "weak": [w["scene"] for w in weak], "noisy_gaps": [n["after"] for n in noisy]}
    print(f"{lang}: {len(pl)} lines, mean {np.mean(scores):.3f}, min {min(scores):.3f}, weak {[w['scene'] for w in weak]}, sound between lines after {[n['after'] for n in noisy]}", flush=True)
json.dump(res, open(os.path.join(out, "verify-ml.json"), "w", encoding="utf8"), ensure_ascii=False, indent=1)

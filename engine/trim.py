# Cuts trailing junk from English clips: Chatterbox sometimes repeats the last words of a line or adds sound after the
# final word. Runs after batch_clone.py and before align.py (voice.mjs does this).
# Usage (voice-clone venv): python engine/trim.py out/<id>/voice/en
# For each clip in manifest.json not yet checked: transcribe with word timestamps (faster-whisper small.en), then cut
#   - after the script's last word when words are heard beyond it (3 or more, or 1-2 that repeat the line's ending), or
#   - 0.3 s after the last heard word when sound runs on more than 0.6 s past it.
# Marks each entry "trimChecked" (batch_clone drops the mark when it redoes a line) and records "trimmed" and "tail".
import difflib, json, os, re, sys
import numpy as np, soundfile
from faster_whisper import WhisperModel

out = sys.argv[1]
mf = os.path.join(out, "manifest.json")
man = json.load(open(mf, encoding="utf8"))
lines = json.load(open(os.path.join(out, "lines.json"), encoding="utf8"))
asr = WhisperModel("small.en", device="cpu", compute_type="int8")
tok = lambda t: re.findall(r"[a-z0-9']+", t.lower().replace("-", " "))

for k, v in man.items():
    if v.get("trimChecked"):
        continue
    line = lines[int(k) - 1]
    want = tok(line["say"])  # the spoken form ("zero zero point four"), closer to what is heard than the script text
    y, sr = soundfile.read(v["file"])
    if y.ndim > 1: y = y.mean(axis=1)
    segs, _ = asr.transcribe(v["file"], language="en", word_timestamps=True)
    hw = [(w.word.strip(), w.start, w.end) for s in segs for w in s.words if tok(w.word)]
    end, why = None, ""
    if hw:
        heard = [tok(w)[0] for w, _, _ in hw]
        blocks = [m for m in difflib.SequenceMatcher(None, want, heard, autojunk=False).get_matching_blocks() if m.size]
        last_end = hw[-1][2]
        if blocks:
            last = blocks[-1]
            extra = len(heard) - (last.b + last.size)
            missing = len(want) - (last.a + last.size)
            if missing <= 1 and extra >= 1:
                tail_words = heard[last.b + last.size:]
                repeat = all(w in want[-4:] for w in tail_words)
                if extra >= 3 or repeat:
                    idx = min(len(hw) - 1, last.b + last.size - 1 + missing)
                    end, why = hw[idx][2], "extra words: " + " ".join(tail_words)
        if end is None and len(y) / sr - last_end > 0.6:
            end, why = last_end, f"sound {len(y) / sr - last_end:.2f} s after the last word"
    trimmed = False
    if end is not None:
        cut = min(len(y), int((end + 0.3) * sr))
        if len(y) - cut > int(0.15 * sr):
            y = y[:cut]
            trimmed = True
            n = min(len(y), int(0.04 * sr)); y[-n:] *= np.linspace(1, 0, n)  # fade so the cut never clicks
            soundfile.write(v["file"], y, sr)
    v.update({"dur": round(len(y) / sr, 3), "trimmed": trimmed, "tail": why if trimmed else "", "trimChecked": True})
    print(f"{k}: {'trimmed (' + why + ')' if trimmed else 'clean'}  {v['dur']:.2f} s", flush=True)
json.dump(man, open(mf, "w", encoding="utf8"), indent=1)
print("trimmed:", [k for k, v in man.items() if v.get("trimmed")])

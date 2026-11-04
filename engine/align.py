# Word timestamps for every clip in a voice folder, so captions can change at sentence breaks.
# Usage (voice-clone venv): python engine/align.py out/<id>/voice/en   -> writes align.json {n: [{w, start, end}]}
import json, os, sys
from faster_whisper import WhisperModel

out = sys.argv[1]
man = json.load(open(os.path.join(out, "manifest.json"), encoding="utf8"))
asr = WhisperModel("small.en", device="cpu", compute_type="int8")
res = {}
for k, v in man.items():
    segs, _ = asr.transcribe(v["file"], language="en", word_timestamps=True)
    res[k] = [{"w": w.word.strip(), "start": round(w.start, 3), "end": round(w.end, 3)} for s in segs for w in s.words]
json.dump(res, open(os.path.join(out, "align.json"), "w", encoding="utf8"), indent=1)
print("aligned", len(res), "clips")

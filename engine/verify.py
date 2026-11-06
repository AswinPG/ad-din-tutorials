# Checks a recorded master against its subtitles: transcribes the final audio (faster-whisper, word timestamps) and, for
# every SRT cue, measures how many of its words are heard inside the cue's time window (±0.4 s).
# Usage (voice-clone venv): python engine/verify.py out/<id>  -> prints per-cue scores, writes out/<id>/verify.json
import difflib, json, os, re, subprocess, sys, tempfile
from faster_whisper import WhisperModel

out = sys.argv[1]
SLACK, GOOD = 0.4, 0.8
# how the voice says Ad-Din ("Udd Din") and video numbers; ignored on both sides
NAME = {"udd", "ud", "ad", "add", "odd", "din", "deen", "dean", "dinn", "aldin", "uddin", "addin", "adin", "ahd", "the"}
NUM = {"zero": "0", "oh": "0", "one": "1", "two": "2", "three": "3", "four": "4", "five": "5", "six": "6", "seven": "7", "eight": "8", "nine": "9", "point": "", "dot": ""}

def words(s):
    s = s.lower().replace("-", " ").replace("@", " at ").replace("#", " hash ")
    s = re.sub(r"is(ation|ed|es|ing|e)\b", r"iz\1", s)  # British and American spellings count the same
    s = re.sub(r"(\d)\.(\d)", r"\1 \2", s)
    ws = [w for w in re.findall(r"[a-z0-9']+", s) if w not in NAME]
    ws = [NUM.get(w, w) for w in ws]
    out = []
    for w in ws:
        if not w: continue
        if w.isdigit() and len(w) > 1: out.extend(list(w))  # "00" -> 0 0
        elif w == "guid": out.extend("guid")  # said as the letters G-U-I-D
        else: out.append(w)
    return out

def ts(t):
    h, m, s = t.replace(",", ".").split(":")
    return int(h) * 3600 + int(m) * 60 + float(s)

cues = []
for block in open(os.path.join(out, "master.srt"), encoding="utf8").read().strip().split("\n\n"):
    lines = block.strip().split("\n")
    a, b = lines[1].split(" --> ")
    cues.append({"n": int(lines[0]), "start": ts(a), "end": ts(b), "text": " ".join(lines[2:])})

wav = os.path.join(tempfile.gettempdir(), "verify-%d.wav" % os.getpid())
subprocess.run(["ffmpeg", "-y", "-v", "error", "-i", os.path.join(out, "master.mp4"), "-vn", "-ac", "1", "-ar", "16000", wav], check=True)
asr = WhisperModel("small.en", device="cpu", compute_type="int8")
heard = [(w.word.strip(), w.start, w.end) for s in asr.transcribe(wav, language="en", word_timestamps=True)[0] for w in s.words]
os.remove(wav)

res, weak = [], []
for c in cues:
    inside = " ".join(w for w, a, b in heard if a >= c["start"] - SLACK and b <= c["end"] + SLACK)
    want, got = words(c["text"]), words(inside)
    sm = difflib.SequenceMatcher(None, want, got)
    covered = sum(m.size for m in sm.get_matching_blocks()) / max(1, len(want))
    r = {**c, "heard": inside, "covered": round(covered, 3)}
    res.append(r)
    if covered < GOOD: weak.append(r)
    print(f"{c['n']:>3} {c['start']:7.2f}-{c['end']:7.2f} {covered:5.2f}  {c['text'][:70]}")
json.dump({"cues": res, "weak": [w["n"] for w in weak]}, open(os.path.join(out, "verify.json"), "w", encoding="utf8"), indent=1)
print(f"{len(cues)} cues, {len(cues) - len(weak)} with at least {int(GOOD * 100)}% of their words heard inside the cue; weak: {[w['n'] for w in weak]}")
for w in weak: print(f"  cue {w['n']}: expected '{w['text']}'\n           heard '{w['heard']}'")

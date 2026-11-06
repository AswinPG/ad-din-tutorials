# Checks a finished master against its script, from the file alone:
#   1. streams: the video stream, the audio stream and the container have the same length, and it is 5:00 or under;
#   2. speech: each line's window (and each caption cue's window) is cut from the final audio and transcribed
#      (faster-whisper small.en), then compared with the line's text / the cue's text;
#   3. captions: frames are taken from the file across every cue (start, about every second, end) and read with the
#      Windows OCR engine (engine/ocr.ps1); the cue's caption must be on screen in each one.
# Usage (voice-clone venv): python engine/check.py out/<id>   -> prints a summary, writes out/<id>/check.json
import difflib, json, os, re, subprocess, sys, tempfile
import numpy as np, soundfile
from faster_whisper import WhisperModel

out = os.path.abspath(sys.argv[1])
HERE = os.path.dirname(os.path.abspath(__file__))
mp4 = os.path.join(out, "master.mp4")
GOOD_SPEECH, GOOD_CAP = 0.8, 0.8
NAME = {"udd", "ud", "ad", "add", "odd", "din", "deen", "dean", "dinn", "aldin", "uddin", "addin", "adin", "ahd", "the"}
NUM = {"zero": "0", "oh": "0", "one": "1", "two": "2", "three": "3", "four": "4", "five": "5", "six": "6", "seven": "7", "eight": "8", "nine": "9", "fifteen": "15", "point": "", "dot": "", "and": "", "or": ""}

def words(s):
    s = s.lower().replace("-", " ").replace("@", " at ").replace("#", " hash ").replace("&", " ").replace("’", "'")
    s = re.sub(r"is(ation|ed|es|ing|e)\b", r"iz\1", s)
    s = re.sub(r"(\d)\.(\d)", r"\1 \2", s)
    res = []
    for w in re.findall(r"[a-z0-9']+", s):
        if w in NAME: continue
        w = NUM.get(w, w)
        if not w: continue
        if w.isdigit() and len(w) > 1 and w != "15": res.extend(list(w))
        elif w == "guid": res.extend("guid")
        else: res.append(w)
    return res

def coverage(want, got, min_block=1):
    want, got = words(want), words(got)
    if not want: return 1.0
    sm = difflib.SequenceMatcher(None, want, got, autojunk=False)
    return sum(m.size for m in sm.get_matching_blocks() if m.size >= min(min_block, len(want))) / len(want)

def probe(args):
    return subprocess.run(["ffprobe", "-v", "error", *args, mp4], capture_output=True, text=True, check=True).stdout.strip()

# ---- 1. streams ----
fmt = float(probe(["-show_entries", "format=duration", "-of", "csv=p=0"]))
vpk = probe(["-select_streams", "v:0", "-count_packets", "-show_entries", "stream=nb_read_packets,r_frame_rate,duration", "-of", "json"])
vs = json.loads(vpk)["streams"][0]
num, den = map(int, vs["r_frame_rate"].split("/"))
vdur = int(vs["nb_read_packets"]) * den / num
adur = float(json.loads(probe(["-select_streams", "a:0", "-show_entries", "stream=duration", "-of", "json"]))["streams"][0]["duration"])
streams = {"container": round(fmt, 3), "video": round(vdur, 3), "audio": round(adur, 3)}
streams_ok = abs(vdur - adur) <= 0.1 and abs(vdur - fmt) <= 0.1 and fmt <= 300
print(f"streams: container {fmt:.2f} s, video {vdur:.2f} s ({vs['nb_read_packets']} frames), audio {adur:.2f} s -> {'OK' if streams_ok else 'MISMATCH'}{'' if fmt <= 300 else ' (over 5:00)'}")

# ---- lines and cues from the timeline ----
tl = json.load(open(os.path.join(out, "timeline.json"), encoding="utf8"))
lines_json = json.load(open(os.path.join(out, "voice", "en", "lines.json"), encoding="utf8"))
say = {l["scene"]: l["check"] for l in lines_json}
audio = [e for e in tl["timeline"] if e["type"] == "audio"]
scene_end = {}
scenes = [e for e in tl["timeline"] if e["type"] == "scene"]
for i, e in enumerate(scenes):
    scene_end[e["id"]] = scenes[i + 1]["vt"] if i + 1 < len(scenes) else tl["total"]

tmp = tempfile.mkdtemp(prefix="check-")
wav = os.path.join(tmp, "a.wav")
subprocess.run(["ffmpeg", "-y", "-v", "error", "-i", mp4, "-vn", "-ac", "1", "-ar", "16000", wav], check=True)
asr = WhisperModel("small.en", device="cpu", compute_type="int8")
pcm, SR = soundfile.read(wav)

def loud(a, b):
    """Loudest 50 ms of a stretch, in dBFS (silence between lines is far below -45)."""
    y = pcm[int(max(0, a) * SR):int(b * SR)]
    if len(y) < SR // 20: return -120.0
    n = SR // 20
    fr = y[: len(y) // n * n].reshape(-1, n)
    return float(20 * np.log10(np.sqrt((fr ** 2).mean(axis=1)).max() + 1e-9))

def hear(a, b):
    seg = os.path.join(tmp, "seg.wav")
    subprocess.run(["ffmpeg", "-y", "-v", "error", "-ss", f"{max(0, a):.3f}", "-to", f"{b:.3f}", "-i", wav, seg], check=True)
    return " ".join(s.text.strip() for s in asr.transcribe(seg, language="en", beam_size=5)[0])

# ---- 2. speech per line and per cue ----
res_lines, frames = [], []
for e in audio:
    t0, t1 = e["vt"], e["vt"] + e["dur"]
    heard = hear(t0 - 0.05, t1 + 0.15)
    cov = coverage(say.get(e["scene"], ""), heard)
    # speech after the line ends, before the next scene starts (a repeat or noise the trim missed)
    tail_end = scene_end.get(e["scene"], t1)
    tail = ""
    if tail_end - t1 > 0.3 and loud(t1 + 0.1, tail_end) > -40:
        tail = hear(t1 + 0.1, tail_end) or f"(sound, {loud(t1 + 0.1, tail_end):.0f} dBFS)"
    cues = []
    for c in e["cues"]:
        a, b = t0 + c["start"], t0 + c["end"]
        ch = hear(a - 0.15, b + 0.15) if len(e["cues"]) > 1 else heard
        cues.append({"text": c["text"], "start": round(a, 2), "end": round(b, 2), "heard": ch, "covered": round(coverage(c["text"], ch), 3)})
        n = max(2, int((b - a) // 1.0) + 1)
        for k in range(n):
            t = a + 0.12 + (b - a - 0.24) * k / (n - 1)
            frames.append({"scene": e["scene"], "cue": c["text"], "t": round(t, 3)})
    res_lines.append({"scene": e["scene"], "start": round(t0, 2), "end": round(t1, 2), "say": say.get(e["scene"], ""), "heard": heard, "covered": round(cov, 3), "tail": tail.strip(), "cues": cues})
    flag = "" if cov >= GOOD_SPEECH else "  WEAK"
    print(f"[{e['scene']:>5}] {t0:7.2f}-{t1:7.2f} {cov:5.2f}{flag}{'  TAIL: ' + tail.strip() if tail.strip() else ''}")

# ---- 3. burned-in captions ----
lst = os.path.join(tmp, "frames.txt")
with open(lst, "w", encoding="utf8") as f:
    for i, fr in enumerate(frames):
        p = os.path.join(tmp, f"f{i:05d}.png")
        subprocess.run(["ffmpeg", "-y", "-v", "error", "-ss", f"{fr['t']:.3f}", "-i", mp4, "-frames:v", "1", p], check=True)
        fr["file"] = p
        f.write(p + "\n")
ocr = {}
r = subprocess.run(["powershell", "-NoProfile", "-ExecutionPolicy", "Bypass", "-File", os.path.join(HERE, "ocr.ps1"), lst], capture_output=True, text=True, encoding="utf8", errors="replace")
for line in (r.stdout or "").splitlines():
    line = line.strip()
    if line.startswith("{"):
        o = json.loads(line); ocr[o["file"]] = o["text"]
bad_frames = []
for fr in frames:
    text = ocr.get(fr["file"], "")
    fr["covered"] = round(coverage(fr["cue"], text, min_block=2), 3)
    if fr["covered"] < GOOD_CAP:
        bad_frames.append({k: fr[k] for k in ("scene", "t", "cue", "covered")} | {"ocr": text.replace("\n", " | ")[-300:]})
for fr in frames: os.remove(fr["file"]); fr.pop("file")
os.remove(wav)

weak_lines = [l["scene"] for l in res_lines if l["covered"] < GOOD_SPEECH]
weak_cues = [(l["scene"], c["text"]) for l in res_lines for c in l["cues"] if c["covered"] < GOOD_SPEECH]
tails = [(l["scene"], l["tail"]) for l in res_lines if l["tail"]]
print(f"lines: {len(res_lines)}, weak (<{GOOD_SPEECH}): {weak_lines}")
print(f"cues: {sum(len(l['cues']) for l in res_lines)}, weak: {len(weak_cues)}")
for s, t in weak_cues: print(f"  [{s}] {t}")
print(f"speech after a line ends: {tails}")
print(f"caption frames: {len(frames)}, caption missing or wrong in {len(bad_frames)}")
for b in bad_frames[:40]: print(f"  [{b['scene']}] t={b['t']:.2f} cov={b['covered']:.2f} cue='{b['cue'][:60]}' ocr='{b['ocr'][-140:]}'")
json.dump({"streams": streams, "streams_ok": streams_ok, "lines": res_lines, "weak_lines": weak_lines, "tails": tails, "caption_frames": len(frames), "bad_frames": bad_frames}, open(os.path.join(out, "check.json"), "w", encoding="utf8"), indent=1)

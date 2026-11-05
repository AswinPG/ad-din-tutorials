# Voices translated narration and checks every clip with speech-to-text, then trims trailing junk.
# Usage (voice-clone venv): python engine/voice_ml.py <lines.json> <out-dir> <lang> <engine: chatterbox|edge> [voice]
#   lines.json: [{"scene", "say" (sent to the voice), "check" (the words it must say)}]
#   writes <out-dir>/<n>.wav, manifest.json {n: {file, dur, score, heard, tries, trimmed}} and align.json {n: [words]}
# Chatterbox: IP3-A (voices/ip3.wav, exaggeration 0.7, cfg 0.3, temperature 0.9). edge: an edge-tts voice (Brian).
# Checking uses the multilingual faster-whisper "small" model with the language set. A clip scoring under GOOD is redone
# (Chatterbox up to 4 tries; edge-tts is deterministic, so retries only cover network errors) and the best is kept.
import difflib, json, os, re, subprocess, sys, time, unicodedata
import numpy as np, soundfile
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
from faster_whisper import WhisperModel

lines_file, out, lang, engine = sys.argv[1:5]
voice = sys.argv[5] if len(sys.argv) > 5 else "en-US-BrianMultilingualNeural"
GOOD, TRIES = float(os.environ.get("VOICE_GOOD", 0.60 if lang == "bn" else 0.80)), 2
VC = "C:/Fantacode/voice-clone"
SR = 24000
os.makedirs(out, exist_ok=True)
lines = json.load(open(lines_file, encoding="utf8"))
asr = WhisperModel("small", device="cpu", compute_type="int8")
tts = None

AR_DIAC = re.compile(r"[\u064B-\u065F\u0670\u06D6-\u06ED\u0640]")
def norm(s):
    s = unicodedata.normalize("NFKC", s.lower())
    s = AR_DIAC.sub("", s)
    s = s.replace("أ", "ا").replace("إ", "ا").replace("آ", "ا").replace("ى", "ي").replace("ة", "ه").replace("ک", "ك").replace("ی", "ي").replace("ۃ", "ه").replace("ہ", "ه")
    return s

NAMES = {"udd", "ud", "din", "deen", "ad", "uddin", "addin", "adin", "اد", "دين", "الدين", "اددين", "ادين"}
def words(s, script_only):
    ws = re.findall(r"[\w']+", norm(s).replace("-", " "))
    if script_only:  # Arabic and Urdu: compare the native-script words; English button names are checked by ear
        ws = [w for w in ws if not re.fullmatch(r"[a-z0-9']+", w)]
    return [w for w in ws if w not in NAMES]

DEVA = re.compile(r"[ऀ-ॿ]")
def bn_chars(s):
    """Bangla as a string of letters; Devanagari (Whisper often writes Bangla speech in it) is mapped onto Bangla,
    since the two blocks share one layout."""
    s = DEVA.sub(lambda m: chr(ord(m.group(0)) + 0x80), s)
    return [c for c in s if "ঀ" <= c <= "৿" and unicodedata.category(c)[0] == "L"]

def score(check, heard):
    if lang == "bn":
        a, b = bn_chars(check), bn_chars(heard)
        if not a: return 1.0
        return sum(m.size for m in difflib.SequenceMatcher(None, a, b, autojunk=False).get_matching_blocks()) / len(a)
    so = lang in ("ar", "ur")
    a, b = words(check, so), words(heard, so)
    if not a: return 1.0
    sm = difflib.SequenceMatcher(None, a, b)
    return sum(m.size for m in sm.get_matching_blocks()) / len(a)

def transcribe(path, check=None):
    """Bangla is also tried as Hindi: Whisper small writes Bangla speech far better in Devanagari; the better one is kept."""
    best = None
    for l in ([lang, "hi"] if lang == "bn" else [lang]):
        segs, _ = asr.transcribe(path, language=l, word_timestamps=True, beam_size=5)
        ws = [(w.word.strip(), w.start, w.end) for s in segs for w in s.words]
        text = " ".join(w for w, _, _ in ws)
        sc = score(check, text) if check else 0
        if best is None or sc > best[0]: best = (sc, text, ws)
    return best[1], best[2]

def trim(path, check, ws):
    """Cut junk after the script's last word (Chatterbox sometimes repeats the end or adds sound). Conservative: it cuts
    only when 3+ words are heard beyond the script, or when sound runs on more than 0.6 s after the last heard word.
    Alignment uses every word, Ad-Din included, so a line ending on the name is never cut short."""
    y, sr = soundfile.read(path)
    if y.ndim > 1: y = y.mean(axis=1)
    tok = lambda t: re.findall(r"[\w']+", norm(t).replace("-", " "))
    want = tok(check)
    hw = [(w, a, b) for w, a, b in ws if tok(w)]
    end = None
    if hw:
        end = hw[-1][2]
        heard = [tok(w)[0] for w, _, _ in hw]
        blocks = [m for m in difflib.SequenceMatcher(None, want, heard, autojunk=False).get_matching_blocks() if m.size]
        if blocks:
            last = blocks[-1]
            extra = len(heard) - (last.b + last.size)
            if last.a + last.size >= len(want) - 1 and extra >= 3:
                end = hw[last.b + last.size - 1 + (len(want) - (last.a + last.size))][2]
        if len(y) / sr - end <= 0.6: end = None  # no long tail: keep the clip as it is
    trimmed = False
    if end is not None:
        cut = min(len(y), int((end + 0.3) * sr))
        if len(y) - cut > int(0.15 * sr):
            y = y[:cut]; trimmed = True
    n = min(len(y), int(0.04 * sr)); y[-n:] *= np.linspace(1, 0, n)  # fade so a cut never clicks
    soundfile.write(path, y, sr)
    return len(y) / sr, trimmed

def make(say, path):
    global tts
    if engine == "chatterbox":
        import torch
        from chatterbox.mtl_tts import ChatterboxMultilingualTTS
        if tts is None: tts = ChatterboxMultilingualTTS.from_pretrained(device="cpu")
        with torch.no_grad():
            wav = tts.generate(say, language_id=lang, audio_prompt_path=f"{VC}/voices/ip3.wav", exaggeration=0.7, cfg_weight=0.3, temperature=0.9)
        import librosa
        y = wav.squeeze(0).numpy(); y, _ = librosa.effects.trim(y, top_db=40)
        soundfile.write(path, y, tts.sr)
    else:
        mp3 = path[:-4] + ".mp3"
        for attempt in range(5):
            try:
                subprocess.run(["C:/Python314/python.exe", "-m", "edge_tts", "--voice", voice, "--text", say, "--write-media", mp3], check=True, capture_output=True, timeout=120)
                break
            except Exception as e:
                if attempt == 4: raise
                time.sleep(3 * (attempt + 1))
        subprocess.run(["ffmpeg", "-y", "-v", "error", "-i", mp3, "-af", "silenceremove=start_periods=1:start_threshold=-50dB", "-ac", "1", "-ar", str(SR), path], check=True)
        os.remove(mp3)

mf = os.path.join(out, "manifest.json")
manifest = json.load(open(mf, encoding="utf8")) if os.path.exists(mf) else {}
af = os.path.join(out, "align.json")
align = json.load(open(af, encoding="utf8")) if os.path.exists(af) else {}
ONLY = set(filter(None, os.environ.get("VOICE_ONLY", "").split(",")))  # redo just these scene IDs
for n, line in enumerate(lines, 1):
    k = str(n)
    if ONLY and line["scene"] not in ONLY and k in manifest:
        continue
    if ONLY and line["scene"] in ONLY:
        manifest.pop(k, None)
    if manifest.get(k, {}).get("say") == line["say"] and manifest[k].get("score", 0) >= GOOD and os.path.exists(manifest[k]["file"]):
        continue
    best = None
    for attempt in range(1, (TRIES if engine == "chatterbox" else 1) + 1):
        path = os.path.join(out, f"{n}.try{attempt}.wav")
        make(line["say"], path)
        heard, ws = transcribe(path, line["check"])
        sc = score(line["check"], heard)
        print(f"{lang} {n} [{line['scene']}] try {attempt}: {sc:.3f}", flush=True)
        if not best or sc > best["score"]:
            best = {"src": path, "score": round(sc, 3), "heard": heard, "tries": attempt, "ws": ws}
        if sc >= GOOD: break
    final = os.path.join(out, f"{n}.wav")
    os.replace(best.pop("src"), final)
    for f in os.listdir(out):
        if f.startswith(f"{n}.try"): os.remove(os.path.join(out, f))
    if engine == "chatterbox":  # edge-tts ends cleanly; only Chatterbox adds repeats or sound after the last word
        dur, trimmed = trim(final, line["check"], best.pop("ws"))
        heard, ws = transcribe(final, line["check"])  # re-align after trimming
    else:
        dur, trimmed, heard, ws = len(soundfile.read(final)[0]) / SR, False, best["heard"], best.pop("ws")
    manifest[k] = {"file": os.path.abspath(final), "dur": round(dur, 3), "score": best["score"], "heard": heard, "tries": best["tries"], "trimmed": trimmed, "say": line["say"], "scene": line["scene"]}
    align[k] = [{"w": w, "start": round(a, 3), "end": round(b, 3)} for w, a, b in ws]
    json.dump(manifest, open(mf, "w", encoding="utf8"), ensure_ascii=False, indent=1)
    json.dump(align, open(af, "w", encoding="utf8"), ensure_ascii=False, indent=1)
print(lang, "weak lines:", [f"{k} [{v['scene']}]" for k, v in manifest.items() if v["score"] < GOOD], flush=True)

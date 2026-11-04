# Ad-Din pronunciation options, spoken by one voice, each announced by its number.
# Run from the repo root: python tools/ad-din-samples.py [voice]
# Output: samples/pronunciation/ad-din/<n>.mp3 and samples/pronunciation/ad-din-<voice>.mp3 (all options in one file)
import os, subprocess, sys

VOICE = sys.argv[1] if len(sys.argv) > 1 else "en-US-BrianMultilingualNeural"
OPTIONS = [
    "Ad-Din", "Ad Din", "Ad-Deen", "Ad Deen", "Addeen", "Ad-Dean", "Ud-Deen", "Ahd-Deen",
    "Add Deen", "A-Deen", "Ad-Dheen", "الدين",
    "Adh-Dhin", "Adh Dhin", "Ad-Dhin",
    "Ad Dhin", "Add-Dhin", "Ad-Dhinn", "Ahd-Dhin", "Ad-Dhyn", "Ud-Dhin", "Ad-Dhihn", "Addhin",
    "Ath Din", "Ath-Din", "Ath Dhin", "Ath-Dhin",
]
SENTENCE = "Welcome to {w}. Open the {w} app on your phone."
out = "samples/pronunciation/ad-din"
os.makedirs(out, exist_ok=True)
tmp = os.path.join(out, "_parts")
os.makedirs(tmp, exist_ok=True)

def say(text, path):
    # the voice service fails now and then; retry before giving up
    for attempt in range(5):
        if subprocess.run(["python", "-m", "edge_tts", "--voice", VOICE, "--rate", "-4%", "--text", text, "--write-media", path]).returncode == 0:
            return
    raise RuntimeError(f"voice failed: {text}")

subprocess.run(["ffmpeg", "-v", "error", "-y", "-f", "lavfi", "-i", "anullsrc=r=24000:cl=mono", "-t", "0.8", "-c:a", "libmp3lame", os.path.join(tmp, "gap.mp3")], check=True)
parts = []
for n, w in enumerate(OPTIONS, 1):
    label, line = os.path.join(tmp, f"{n}-label.mp3"), os.path.join(tmp, f"{n}-line.mp3")
    say(f"Option {n}.", label)
    say(SENTENCE.format(w=w), line)
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", label, "-i", os.path.join(tmp, "gap.mp3"), "-i", line, "-filter_complex", "[0:a][1:a][2:a]concat=n=3:v=0:a=1", os.path.join(out, f"{n}.mp3")], check=True)
    parts += [os.path.join(out, f"{n}.mp3"), os.path.join(tmp, "gap.mp3"), os.path.join(tmp, "gap.mp3")]
    print(n, w)
inputs = sum((["-i", p] for p in parts), [])
name = VOICE.split("-")[2].replace("MultilingualNeural", "").replace("Neural", "").lower()
subprocess.run(["ffmpeg", "-v", "error", "-y", *inputs, "-filter_complex", "".join(f"[{i}:a]" for i in range(len(parts))) + f"concat=n={len(parts)}:v=0:a=1",
                f"samples/pronunciation/ad-din-{name}.mp3"], check=True)
for f in os.listdir(tmp):
    os.remove(os.path.join(tmp, f))
os.rmdir(tmp)

# Tries respellings of "Ad-Din" on the Malay and Indonesian voices; one clip per voice, options in order.
import subprocess, os, sys
out = sys.argv[1]
options = ["Ad-Din", "Ad Din", "Addin", "Ad-Deen", "Addeen", "Ad-diin"]
voices = {"ms-osman": ("ms-MY-OsmanNeural", "Selamat datang ke {}."), "id-ardi": ("id-ID-ArdiNeural", "Selamat datang di {}.")}
tmp = os.path.join(out, "_tmp"); os.makedirs(tmp, exist_ok=True)
gap = os.path.join(tmp, "gap.mp3")
subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-f", "lavfi", "-t", "1.2", "-i", "anullsrc=r=24000:cl=mono", "-b:a", "64k", gap], check=True)
for name, (voice, frame) in voices.items():
    parts = []
    for i, word in enumerate(options, 1):
        # announce the option number in the same voice's language would be confusing; use a short English cue from Ryan
        cue = os.path.join(tmp, f"cue-{i}.mp3")
        if not os.path.exists(cue):
            subprocess.run([sys.executable, "-m", "edge_tts", "--voice", "en-GB-RyanNeural", "--text", f"Option {i}.", "--write-media", cue], check=True, capture_output=True)
        f = os.path.join(tmp, f"{name}-{i}.mp3")
        for _ in range(3):
            if subprocess.run([sys.executable, "-m", "edge_tts", "--voice", voice, "--rate=-4%", "--text", frame.format(word) + " " + word + ".", "--write-media", f], capture_output=True).returncode == 0: break
        parts += [cue, f, gap]
    lst = os.path.join(tmp, f"{name}.txt")
    with open(lst, "w", encoding="utf8") as fh:
        fh.writelines(f"file '{p.replace(os.sep, '/')}'\n" for p in parts)
    dest = os.path.join(out, f"ad-din-options-{name}.mp3")
    subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-f", "concat", "-safe", "0", "-i", lst, "-ar", "24000", "-ac", "1", "-b:a", "64k", dest], check=True)
    print(dest)

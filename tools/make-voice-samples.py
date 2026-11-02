# Regenerates samples/pronunciation/all-words-<voice>.mp3 for the non-English voices.
# Usage: python tools/make-voice-samples.py samples/pronunciation   (needs edge-tts and ffmpeg)
import subprocess, os, sys
out = sys.argv[1]
latin = ["Masjid.", "Madrasah.", "Masaajid.", "Madaris.", "Ad-Din."]
english = "Welcome to Ad-Din. Every masjid and madrasah can manage its prayer times, classes and messages in one place. Ad-Din brings masaajid and madaris together, across the world."
voices = {
    "ar-hamed": ("ar-SA-HamedNeural", ["مسجد.", "مدرسة.", "مساجد.", "مدارس.", "الدين."],
                 "مرحبًا بكم في Ad-Din. يمكن لكل مسجد ومدرسة إدارة أوقات الصلاة والصفوف في مكان واحد. يجمع Ad-Din المساجد والمدارس حول العالم."),
    "ur-asad": ("ur-PK-AsadNeural", ["مسجد۔", "مدرسہ۔", "مساجد۔", "مدارس۔", "الدین۔"],
                "Ad-Din میں خوش آمدید۔ ہر مسجد اور مدرسہ نماز کے اوقات اور کلاسز ایک جگہ سنبھال سکتا ہے۔ Ad-Din دنیا بھر کی مساجد اور مدارس کو جوڑتا ہے۔"),
    "ms-osman": ("ms-MY-OsmanNeural", [],
                 "Selamat datang ke Ad-Din. Setiap masjid dan madrasah boleh mengurus waktu solat dan kelas di satu tempat. Ad-Din menghubungkan masaajid dan madaris di seluruh dunia."),
    "id-ardi": ("id-ID-ArdiNeural", [],
                "Selamat datang di Ad-Din. Setiap masjid dan madrasah dapat mengelola jadwal salat dan kelas di satu tempat. Ad-Din menghubungkan masaajid dan madaris di seluruh dunia."),
}
tmp = os.path.join(out, "_tmp")
os.makedirs(tmp, exist_ok=True)
silence = os.path.join(tmp, "gap.mp3")
subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-f", "lavfi", "-t", "0.8", "-i", "anullsrc=r=24000:cl=mono", "-b:a", "64k", silence], check=True)
for name, (voice, native, sentence) in voices.items():
    parts = []
    for i, text in enumerate(latin + native + [sentence, english]):
        f = os.path.join(tmp, f"{name}-{i}.mp3")
        for attempt in range(4):
            r = subprocess.run([sys.executable, "-m", "edge_tts", "--voice", voice, "--rate=-4%", "--text", text, "--write-media", f], capture_output=True, text=True)
            if r.returncode == 0: break
            print(f"retry {name} {i}: {r.stderr.strip().splitlines()[-1] if r.stderr.strip() else ''}")
        else:
            print(f"NO AUDIO: {name} could not say {text!r}")
            continue
        parts += [f, silence]
    lst = os.path.join(tmp, f"{name}.txt")
    with open(lst, "w", encoding="utf8") as fh:
        fh.writelines(f"file '{p.replace(os.sep, '/')}'\n" for p in parts[:-1])
    dest = os.path.join(out, f"all-words-{name}.mp3")
    subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-f", "concat", "-safe", "0", "-i", lst, "-ar", "24000", "-ac", "1", "-b:a", "64k", dest], check=True)
    print(dest)

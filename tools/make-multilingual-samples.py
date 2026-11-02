# One clip per multilingual voice: the five words, then the sentence in every series language, each introduced by its name.
import subprocess, os, sys
out = sys.argv[1]
words = "Masjid. Madrasah. Masaajid. Madaris. Ad-Din."
sentences = [
    ("English", "Welcome to Ad-Din. Every masjid and madrasah can manage its prayer times, classes and messages in one place. Ad-Din brings masaajid and madaris together, across the world."),
    ("Arabic", "مرحبًا بكم في Ad-Din. يمكن لكل مسجد ومدرسة إدارة أوقات الصلاة والصفوف في مكان واحد. يجمع Ad-Din المساجد والمدارس حول العالم."),
    ("Urdu", "Ad-Din میں خوش آمدید۔ ہر مسجد اور مدرسہ نماز کے اوقات اور کلاسز ایک جگہ سنبھال سکتا ہے۔ Ad-Din دنیا بھر کی مساجد اور مدارس کو جوڑتا ہے۔"),
    ("Bangla", "Ad-Din-এ স্বাগতম। প্রতিটি মসজিদ ও মাদ্রাসা এক জায়গায় নামাজের সময়, ক্লাস ও বার্তা পরিচালনা করতে পারে। Ad-Din সারা বিশ্বের মসজিদ ও মাদ্রাসাগুলোকে একসাথে যুক্ত করে।"),
    ("Malay", "Selamat datang ke Ad-Din. Setiap masjid dan madrasah boleh mengurus waktu solat dan kelas di satu tempat. Ad-Din menghubungkan masaajid dan madaris di seluruh dunia."),
    ("Indonesian", "Selamat datang di Ad-Din. Setiap masjid dan madrasah dapat mengelola jadwal salat dan kelas di satu tempat. Ad-Din menghubungkan masaajid dan madaris di seluruh dunia."),
]
voices = {"andrew": "en-US-AndrewMultilingualNeural", "brian": "en-US-BrianMultilingualNeural", "william": "en-AU-WilliamMultilingualNeural"}
tmp = os.path.join(out, "_tmp"); os.makedirs(tmp, exist_ok=True)
gap = os.path.join(tmp, "gap.mp3")
subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-f", "lavfi", "-t", "0.9", "-i", "anullsrc=r=24000:cl=mono", "-b:a", "64k", gap], check=True)

def tts(voice, text, f):
    for _ in range(4):
        if subprocess.run([sys.executable, "-m", "edge_tts", "--voice", voice, "--rate=-4%", "--text", text, "--write-media", f], capture_output=True).returncode == 0:
            return True
    print("NO AUDIO", voice, text[:30]); return False

for name, voice in voices.items():
    parts = []
    items = [("Words", words)] + sentences
    for i, (label, text) in enumerate(items):
        cue, f = os.path.join(tmp, f"{name}-cue{i}.mp3"), os.path.join(tmp, f"{name}-{i}.mp3")
        # the language name is said in English by the same voice, so it's clear where each part starts
        if tts(voice, label + ".", cue): parts += [cue, gap]
        if tts(voice, text, f): parts += [f, gap]
    lst = os.path.join(tmp, f"{name}.txt")
    with open(lst, "w", encoding="utf8") as fh:
        fh.writelines(f"file '{p.replace(os.sep, '/')}'\n" for p in parts)
    dest = os.path.join(out, f"all-languages-{name}.mp3")
    subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-f", "concat", "-safe", "0", "-i", lst, "-ar", "24000", "-ac", "1", "-b:a", "64k", dest], check=True)
    print(dest)

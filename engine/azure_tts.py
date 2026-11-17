# Azure Speech (Foundry) text to speech: the fallback when the cloned voice doesn't sound natural (Imran, 2026-11-17).
# Standard library only, so it runs in any Python. Voice, rate and locales come from series.yaml -> azure.
#
#   python engine/azure_tts.py --lang en --out clip.wav "Text to say"      one clip (.wav or .mp3 by extension)
#   python engine/azure_tts.py --voices [en-US]                            list the resource's voices (HD ones marked)
#
# Credentials are read from the environment, never from files in this repo:
#   AZURE_SPEECH_KEY       the Speech or Foundry resource key
#   AZURE_SPEECH_REGION    e.g. eastus  (or instead:)
#   AZURE_SPEECH_ENDPOINT  the resource's TTS endpoint, e.g. https://<name>.cognitiveservices.azure.com
import json, os, sys, time, urllib.request, urllib.error
from xml.sax.saxutils import escape

DEFAULT_VOICE = "en-US-Brian:DragonHDLatestNeural"
LOCALES = {"en": "en-US", "ar": "ar-SA", "ur": "ur-PK", "bn": "bn-BD", "ms": "ms-MY", "id": "id-ID"}
FORMATS = {".wav": "riff-24khz-16bit-mono-pcm", ".mp3": "audio-24khz-160kbitrate-mono-mp3"}


def _base():
    ep = os.environ.get("AZURE_SPEECH_ENDPOINT", "").rstrip("/")
    if ep:
        return ep
    region = os.environ.get("AZURE_SPEECH_REGION")
    if not region:
        sys.exit("Set AZURE_SPEECH_REGION (or AZURE_SPEECH_ENDPOINT) and AZURE_SPEECH_KEY first.")
    return f"https://{region}.tts.speech.microsoft.com"


def _key():
    k = os.environ.get("AZURE_SPEECH_KEY")
    if not k:
        sys.exit("Set AZURE_SPEECH_KEY first (the Speech/Foundry resource key).")
    return k


def ssml(text, lang="en", voice=DEFAULT_VOICE, rate=None, locales=LOCALES):
    loc = locales.get(lang, "en-US")
    body = escape(text)
    if not voice.startswith(loc + "-"):  # a multilingual voice speaking another language: tell it which one
        body = f'<lang xml:lang="{loc}">{body}</lang>'
    if rate:
        body = f'<prosody rate="{rate}">{body}</prosody>'
    return f'<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="{loc}"><voice name="{voice}">{body}</voice></speak>'


def synth(text, path, lang="en", voice=DEFAULT_VOICE, rate=None, locales=LOCALES):
    fmt = FORMATS.get(os.path.splitext(path)[1].lower())
    if not fmt:
        raise ValueError("output must be .wav or .mp3")
    base = _base()
    url = base + ("/tts/cognitiveservices/v1" if "cognitiveservices.azure.com" in base else "/cognitiveservices/v1")
    data = ssml(text, lang, voice, rate, locales).encode("utf-8")
    for attempt in range(5):
        req = urllib.request.Request(url, data=data, method="POST", headers={
            "Ocp-Apim-Subscription-Key": _key(), "Content-Type": "application/ssml+xml",
            "X-Microsoft-OutputFormat": fmt, "User-Agent": "ad-din-tutorials"})
        try:
            with urllib.request.urlopen(req, timeout=120) as r:
                audio = r.read()
            os.makedirs(os.path.dirname(os.path.abspath(path)), exist_ok=True)
            open(path, "wb").write(audio)
            return path
        except urllib.error.HTTPError as e:
            if e.code in (429, 500, 502, 503) and attempt < 4:
                time.sleep(3 * (attempt + 1)); continue
            raise RuntimeError(f"Azure TTS {e.code}: {e.read().decode('utf-8', 'replace')[:300]}") from None
        except urllib.error.URLError:
            if attempt == 4: raise
            time.sleep(3 * (attempt + 1))


def voices(locale=None):
    base = _base()
    url = base + ("/tts/cognitiveservices/voices/list" if "cognitiveservices.azure.com" in base else "/cognitiveservices/voices/list")
    req = urllib.request.Request(url, headers={"Ocp-Apim-Subscription-Key": _key()})
    with urllib.request.urlopen(req, timeout=60) as r:
        vs = json.load(r)
    return [v for v in vs if not locale or v.get("Locale") == locale]


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    a = sys.argv[1:]
    if a and a[0] == "--voices":
        for v in voices(a[1] if len(a) > 1 else None):
            hd = " HD" if "DragonHD" in v["ShortName"] else ""
            print(f'{v["ShortName"]:48} {v.get("Gender",""):7} {v.get("Locale","")}{hd}')
        sys.exit()
    def opt(name, d=None):
        if name in a:
            i = a.index(name); v = a[i + 1]; del a[i:i + 2]; return v
        return d
    lang, out, voice, rate = opt("--lang", "en"), opt("--out"), opt("--voice", DEFAULT_VOICE), opt("--rate")
    if not out or not a:
        sys.exit('Usage: python engine/azure_tts.py --lang en --out clip.wav [--voice NAME] [--rate -4%] "Text"')
    print(synth(" ".join(a), out, lang, voice, rate))

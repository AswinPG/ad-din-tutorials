# Languages

One video per topic. Screens and on-screen text stay in English; each language gets its own **audio track** and **subtitle track** on the same video. Languages and voices are set in `series.yaml` → `languages`.

| Priority | Language | Code | Voice | Native alternative | Markets |
|---|---|---|---|---|---|
| 1 | English (source) | `en` | en-US-BrianMultilingualNeural | en-GB-RyanNeural | UK, USA, Canada, Australia, UAE |
| 2 | Arabic | `ar` | en-US-BrianMultilingualNeural | ar-SA-HamedNeural | UAE, Saudi Arabia, Qatar, Kuwait, Bahrain |
| 3 | Urdu | `ur` | en-US-BrianMultilingualNeural | ur-PK-AsadNeural | Pakistan, UK, USA, Canada, UAE |
| 4 | Bangla (Bengali) | `bn` | en-US-BrianMultilingualNeural | bn-BD-PradeepNeural | Bangladesh, UK, Canada, UAE |
| 5 | Malay | `ms` | en-US-BrianMultilingualNeural | ms-MY-OsmanNeural | Malaysia, Brunei, Singapore |
| 6 | Indonesian | `id` | en-US-BrianMultilingualNeural | id-ID-ArdiNeural | Indonesia |

Voices are Microsoft neural voices through `edge-tts`. Female alternatives exist for every language (for example ar-SA-ZariyahNeural, ur-PK-UzmaNeural, bn-BD-NabanitaNeural, ms-MY-YasminNeural, id-ID-GadisNeural). List them with `python -m edge_tts --list-voices`.

All voices are male (decided 2026-11-02).

**One voice for every language (decided 2026-11-03, changed to Brian 2026-11-04, can change).** Brian (en-US-BrianMultilingualNeural), one of Microsoft's multilingual voices, narrates all six languages, so the series sounds like one narrator. Ryan, used for the Staff Attendance videos, speaks English only: given Arabic, Urdu or Bangla text he says just the Latin words and skips the rest, and he reads Malay and Indonesian with English pronunciation. The other multilingual male voices, en-AU-WilliamMultilingualNeural (the first choice) and en-US-AndrewMultilingualNeural, also handled all six. Samples: `samples/pronunciation/all-languages-<andrew|brian|william>.mp3` and `samples/pronunciation/ad-din-brian.mp3`.

**Changing a voice** is one line per language in `series.yaml` → `languages` (each line's comment names the native alternative). Nothing recorded so far depends on it; after recording, a changed voice means regenerating that language's audio, which the recorder does from the same scripts.

## Pronunciation

Key words must sound right in every video. `series.yaml` → `pronunciations` holds, per language, how the voice should say each word:

```yaml
pronunciations:
  en:
    Ad-Din: Ad-Deen        # example respelling; the agreed one goes here
```

- Keys match whole words, case-insensitive; the longest match wins.
- The respelling goes to the voice only. Scripts, subtitles and on-screen text keep the proper spelling.
- Plurals are separate entries (Masjid / Masaajid, Madrasah / Madaris).
- Preview any sentence with `npm run say -- "Every masjid and madrasah uses Ad-Din"`; add `--lang ur` for another language. Clips land in `samples/say/` (not committed).
- Reference clips of every chosen voice are in `samples/pronunciation/` (2026-11-02): the five words (Masjid, Madrasah, Masaajid, Madaris, Ad-Din) in English letters, then in Arabic/Urdu script where relevant, a sentence in the voice's language, and the English sentence. Rebuild with `python tools/make-voice-samples.py samples/pronunciation`.
- **Urdu voice and English letters:** ur-PK-AsadNeural produced no audio at all for "Masaajid" and "Ad-Din" written in Latin letters. For Urdu (and to be safe Arabic), the pronunciation list must map these terms to their own script, for example `Ad-Din: الدین`, so the voice can say them. Always listen to a new language's first video for words it skipped.

## Translation rules

- **Button and screen names stay in English, in bold**, exactly as the app shows them: "tap **Add Class**". The app's interface is English-only.
- **Islamic and Ad-Din terms stay as they are**: Ad-Din, Sabaq, Sabaq Para, Dour, Hifz, Iqamah, Adhan, Jumu'ah, Taraweeh, Madrasah, Masjid. In Arabic and Urdu, write them in their proper script.
- **Arabic is Modern Standard Arabic**, understood across all five Gulf markets.
- **Fit the picture.** Each scene's translation must fit the scene's length. Tighten the wording rather than speeding up the voice. Arabic, Urdu, Bangla and Malay usually run 10–25% longer than English.
- **Subtitles**: two lines at most, comfortable reading speed. Arabic and Urdu read right to left; burned-in Urdu uses a Nastaliq typeface, Bangla a font that joins its letters correctly.

## Review by native speakers

Every translation starts as `status: draft`. A native speaker reads it (≈20–30 min per video), sends corrections, Claude applies them and sets `status: reviewed` with the reviewer's name. Only reviewed translations are recorded.

## Delivery

Per video: one English master video, one audio file per language, one `.srt` and `.vtt` per language. If a platform can't switch audio tracks, the same picture is exported once per language with that language's audio built in.

## Fallback: Azure Speech in Foundry (2026-11-17)

If the cloned voice (IP3-A) can't be made to sound natural, the narration switches to Azure Speech in Foundry (Imran, 2026-11-17). The default is **Brian HD** (`en-US-Brian:DragonHDLatestNeural`), the more natural "HD" version of the series voice. It is multilingual, so one narrator still covers all six languages. Set it in `series.yaml` → `azure` (voice, rate, locales).

- Credentials stay in the environment, never in the repo: `AZURE_SPEECH_KEY`, plus `AZURE_SPEECH_REGION` (for example `eastus`) or `AZURE_SPEECH_ENDPOINT` (the Foundry resource's `https://<name>.cognitiveservices.azure.com`). HD voices are available only in some regions.
- Try a line: `npm run say -- "Assalamu alaikum, and welcome to Ad-Din." --engine azure [--lang ur]`
- List the resource's voices: `python engine/azure_tts.py --voices en-US`
- Voice a video: `node engine/voice.mjs <id> --engine azure` (English) or `node engine/voice.mjs <id> --lang ar,ur --engine azure`. Every clip is still checked with speech-to-text, as with the other engines.

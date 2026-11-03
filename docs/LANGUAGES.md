# Languages

One video per topic. Screens and on-screen text stay in English; each language gets its own **audio track** and **subtitle track** on the same video. Languages and voices are set in `series.yaml` → `languages`.

| Priority | Language | Code | Voice | Native alternative | Markets |
|---|---|---|---|---|---|
| 1 | English (source) | `en` | en-AU-WilliamMultilingualNeural | en-GB-RyanNeural | UK, USA, Canada, Australia, UAE |
| 2 | Arabic | `ar` | en-AU-WilliamMultilingualNeural | ar-SA-HamedNeural | UAE, Saudi Arabia, Qatar, Kuwait, Bahrain |
| 3 | Urdu | `ur` | en-AU-WilliamMultilingualNeural | ur-PK-AsadNeural | Pakistan, UK, USA, Canada, UAE |
| 4 | Bangla (Bengali) | `bn` | en-AU-WilliamMultilingualNeural | bn-BD-PradeepNeural | Bangladesh, UK, Canada, UAE |
| 5 | Malay | `ms` | en-AU-WilliamMultilingualNeural | ms-MY-OsmanNeural | Malaysia, Brunei, Singapore |
| 6 | Indonesian | `id` | en-AU-WilliamMultilingualNeural | id-ID-ArdiNeural | Indonesia |

Voices are Microsoft neural voices through `edge-tts`. Female alternatives exist for every language (for example ar-SA-ZariyahNeural, ur-PK-UzmaNeural, bn-BD-NabanitaNeural, ms-MY-YasminNeural, id-ID-GadisNeural). List them with `python -m edge_tts --list-voices`.

All voices are male (decided 2026-11-02).

**One voice for every language (decided 2026-11-03, can change).** William (en-AU-WilliamMultilingualNeural), one of Microsoft's multilingual voices, narrates all six languages, so the series sounds like one narrator. Ryan, used for the Staff Attendance videos, speaks English only: given Arabic, Urdu or Bangla text he says just the Latin words and skips the rest, and he reads Malay and Indonesian with English pronunciation. The other multilingual male voices, en-US-AndrewMultilingualNeural and en-US-BrianMultilingualNeural, also handled all six. Samples: `samples/pronunciation/all-languages-<andrew|brian|william>.mp3`.

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

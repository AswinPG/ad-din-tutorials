---
id: "15.8"
title: "Quran: translation, search, playlists and memorising"
target: 4:00
prereq:
  - "15.5"
status: scripted
audience:
  - Member
  - Student
flags:
  - "Recite the translation exists only for the eight translations Ad-Din has a verse-by-verse recording for (English · Saheeh International, Urdu · Jalandhry, French, Turkish · Diyanet Vakfı, Persian, Russian, Chinese, Uzbek), and only in Verses view with Arabic + translation. The default English · Pickthall has none, so the demo switches to Saheeh International. No Bangla, Malay or Indonesian recording exists; translated narrations must not promise one."
  - "The Quran text, translations, search and recitation load live from AlQuran Cloud and Quran.com (mirrored by Ad-Din). The mocked demo world must serve them (including the English translation recording for Al-Mulk 67:1–2 and search results for 'patience'), or record against the agreed dev environment. Same as 15.5."
  - "The Quran page is not in the web sidebar (the menu entry is commented out); on the web it is reached only through the /quran address. Scripted for the app only."
---

# 15.8 Quran: translation, search, playlists and memorising

## Goal
Read the Quran with a translation (and hear it where a recording exists), search it, play surahs back to back, and practise reciting from memory in the Ad-Din app.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->
- The Ad-Din app, signed in

## Covers
- Arabic + translation, recite the translation where audio exists
- Search
- Playlist and Play all
- Repeat each ayah, Playback speed, keep reciting into the next surah
- Recite from memory (tap a line to reveal)
- Theme and text size, Share this ayah

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo member account signed in on the app (phone frame); the reader opens on Surah Al-Mulk (67) at ayah 1 (last-read position)
- Quran reader settings at their defaults (English · Pickthall, Mishary Rashid Alafasy, Light, 100%), playlist empty, no bookmarks
- Quran data served by the demo world: Al-Mulk text with Pickthall and Saheeh International, the Saheeh International recording (Ibrahim Walk) for 67:1–2, search results for "patience", the surah list, and the Madani Mushaf page for Al-Mulk
- Share opens the phone's share sheet (stubbed in the demo world; show it with no real contacts)

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. More from the Quran reader
#### [1.1] Opening
**Say:** In this video for members of the community, you'll read the Quran with a translation, search it, play surahs one after another, and use a mode that helps you memorise.
**Show:** Title card: "Quran: translation, search, playlists and memorising". Phone frame on the app home.

#### [1.2]
**Say:** On the home screen, tap **Quran**. The reader opens where you left off.
**Show:** Opening card from You'll need. Tap the "Quran" tile: the reader opens on Al-Mulk in Verses view.

### 2. Arabic and translation
#### [2.1] What to show
**Say:** Tap the settings icon at the top. Under **Show**, choose **Arabic + translation**, just **Arabic**, or just the **Translation**.
**Show:** Tap the sliders icon: "Reading settings" opens. Tap "Arabic", then "Translation", then back to "Arabic + translation"; the page behind changes each time.

#### [2.2] Choose a translation
**Say:** Tap **Translation** to pick from many languages. Highlighted translations can also be read aloud after each ayah.
**Show:** Tap the Translation row. Spotlight the note at the top and a highlighted row with "Audio translation available". Tap "English · Saheeh International".
**Caption:** Tap Translation to pick a language. Highlighted translations can also be read aloud after each ayah.

#### [2.3] Hear the translation
**Say:** Now switch on **Recite the translation**. After each ayah in Arabic, you'll hear its meaning, read in the translation's language.
**Show:** Back in Reading settings, spotlight "Recite the translation" with "After each ayah, in English · Ibrahim Walk"; turn it on. Close the sheet.

#### [2.4]
**Say:** Tap play. The reciter reads the ayah, then the translation follows, highlighted as it's read. This only appears for translations that have a recording.
**Show:** Tap play: ayah 1 recited, then the translation line highlights and the player bar shows "English". Let it run into ayah 2, then pause.

### 3. Search
#### [3.1] Find a word
**Say:** To find a verse, tap the search icon and type a word, in Arabic or in your translation.
**Show:** Tap the magnifier: "Search" opens. Spotlight the placeholder "A word in Arabic or in the translation". Type "patience". Results list with surah names and ayah numbers.

#### [3.2]
**Say:** Tap a result to jump straight to that ayah.
**Show:** Tap a result in Al-Baqarah: the reader opens Al-Baqarah at that ayah.

### 4. Playlists
#### [4.1] Build a playlist
**Say:** To listen to several surahs in a row, tap the surah name at the top. Tap the plus next to each surah you want.
**Show:** Tap the surah button: the list opens. Tap the plus next to Ya-Sin (36), Ar-Rahman (55) and Al-Mulk (67); each turns into a tick.

#### [4.2] Play all
**Say:** Open **Playlist** to change the order or remove a surah. Then tap **Play all** to hear them one after another.
**Show:** Close the list. Tap the "Playlist" chip (shows 3). Move Al-Mulk up with the arrow. Tap "Play all": the first surah opens and recitation starts; the player bar shows "Playlist". Stop.

### 5. Repeat, speed and carrying on
#### [5.1] In the player
**Say:** The repeat button recites each ayah up to ten times before moving on, ideal for memorising. The speed button makes the recitation slower or faster.
**Show:** Tap the repeat button: "2", then "3" (it cycles 1, 2, 3, 5, 10; leave it on 3 for [5.2]). Tap the speed button: "1.25×", then on through "1.5×" and "0.75×" back to "1×" (the button cycles 1×, 1.25×, 1.5×, 0.75×). Zoom on the player bar.
**Caption:** Repeat recites each ayah up to ten times. Speed makes it slower or faster.

#### [5.2] Keep going
**Say:** The same choices are in Reading settings, under **Repeat each ayah** and **Playback speed**. **Continue to the next surah** keeps reciting when a surah ends.
**Show:** Open Reading settings. Spotlight "Repeat each ayah", "Playback speed", then "Continue to the next surah" with "Keep reciting when a surah ends" (on).

### 6. Recite from memory
#### [6.1] Memorize
**Say:** Tap **Memorize** to hide the ayahs. Recite from memory, then tap an ayah to check yourself.
**Show:** Back on Al-Mulk. Tap the "Memorize" chip: the ayahs blur, with the hint above. Tap ayah 1: it reveals. Tap ayah 2: it reveals.

#### [6.2]
**Say:** In **Mushaf** view it works line by line: tap a line to reveal it. Tap **Memorize** again when you're done.
**Show:** Tap "Mushaf": the page shows with every line veiled and "Recite from memory, then tap a line to reveal it." Tap two lines. Tap "Memorize" to turn it off, then "Verses".

### 7. Make it yours and share
#### [7.1] Theme and text size
**Say:** For easier reading, choose a **Light**, **Sepia** or **Dark** theme, and make the text bigger or smaller.
**Show:** Open Reading settings. Tap "Sepia", then "Dark". Tap "A+" twice: the percentage rises and the text grows behind the sheet.

#### [7.2] Share an ayah
**Say:** To share a verse, tap it and choose **Share**. Your phone's share options open, with the Arabic, the translation and the reference.
**Show:** Close settings. Tap ayah 1, tap "Share": the stubbed phone share sheet shows the ayah text and "— Quran, Al-Mulk 67:1".

#### [7.3]
**Say:** You can also tap the three dots and choose **Share this ayah** for the one you're reading.
**Show:** Tap the three-dots icon. Spotlight "Share this ayah" with "Al-Mulk 67:1".

### 8. Done
#### [8.1] Result
**Say:** Now you can follow the meaning, find any verse, play your favourite surahs in order, and test your memorisation.
**Show:** Reader in Dark theme with Arabic + translation.

#### [8.2] Next
**Say:** For the reading and listening basics, watch video 15.5: Read and listen to the Quran. Or try the Tasbeeh counter in video 15.6: Tasbeeh, live streams, gallery and forms.
**Show:** End card with two tiles: "15.5 Read and listen to the Quran" and "15.6 Tasbeeh, live streams, gallery and forms".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · critic · 7 changes: [1.1] second-person opening, no "back to back"; [2.2] "in this colour" → "Highlighted", matches the caption; [3.1] no elliptical question; [4.2] no "back to back"; [5.2] clearer "same choices in Reading settings"; [8.1] no "line up"; [8.2] end card by number and title
- 2026-11-03 · validator · checked against master d36d69ed8 · 1 fix: [5.1] speed button can't go from 1.25× straight back to 1× (cycles 1, 1.25, 1.5, 0.75); repeat cycle noted

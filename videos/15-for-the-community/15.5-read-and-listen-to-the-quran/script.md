---
id: "15.5"
title: Read and listen to the Quran
target: 3:45
prereq:
  - "00.2"
status: scripted
flags:
  - The Quran text, translations, reciters and Mushaf pages load live from AlQuran Cloud and Quran.com (mirrored by Ad-Din). The mocked demo world must serve them, or record against the agreed dev environment.
---

# 15.5 Read and listen to the Quran

## Goal
Open any surah in the Ad-Din app, read it verse by verse or as Mushaf pages, listen with your chosen reciter, turn on Tajweed colours, bookmark your place and read the Dua Khatam-e-Quran.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Mushaf, reciters, tajweed colours, bookmarks, Dua Khatam

## Demo data
- Any signed-in account on the app (no organisation needed)
- Quran content served for Surah Al-Kahf (18) and Surah Al-Mulk (67): Arabic, the English translation, Tajweed markup, audio for two reciters (for example Alafasy and Husary), and the Madani Mushaf (1421H) pages for Al-Mulk
- Reader settings reset to defaults (Verses view, light theme, Madani Mushaf (1421H), no bookmarks, empty playlist) and no last-read position saved, so the reader opens on Al-Fatihah
- Phone audio recorded for the listening scenes
- Phone frame for every shot

## Script

### 1. The Quran in your pocket
#### [1.1] Opening
**Say:** The Ad-Din app has the whole Quran, to read and to listen to. You'll open a surah, choose a reciter, turn on Tajweed colours, keep your place, and read the dua for completing the Quran.
**Show:** Title card: "Read and listen to the Quran". Phone frame on the app home.

#### [1.2]
**Say:** On the home screen, tap **Quran**.
**Show:** Spotlight the "Quran" tile and tap it. The reader opens on the first surah.

### 2. Open a surah
#### [2.1] Choose a surah
**Say:** Tap the surah name at the top to choose another one. Search by name or number, or switch to **Juz** to start from a Juz.
**Show:** Tap the surah button at the top: the picker opens. Type "67" in "Surah name or number"; tap Al-Mulk. Mention the "Juz" tab by spotlighting it.

#### [2.2] Verses
**Say:** In **Verses** view, each ayah shows the Arabic with its translation underneath.
**Show:** Surah Al-Mulk in Verses view. Spotlight the first ayah: Arabic line, then the English translation.

### 3. Listen with a reciter
#### [3.1] Play
**Say:** Tap play at the bottom to listen. The ayah being recited is highlighted, and the page follows along.
**Show:** Tap the play button. Audio plays; the highlight moves to ayah 2 and the page scrolls. Pause.

#### [3.2] Play from here
**Say:** To start from a particular ayah, tap it and choose **Play from here**.
**Show:** Tap ayah 5: the ayah sheet opens. Tap "Play from here"; recitation starts at ayah 5. Pause.

#### [3.3] Reciter
**Say:** To change the voice, open the settings and tap **Reciter**. Pick the reciter you like best.
**Show:** Tap the settings icon: "Reading settings" opens. Tap the Reciter row; the list opens. Choose a second reciter (for example Husary).

#### [3.4]
**Say:** Here you also choose your **Translation**, and how the recitation repeats and how fast it goes. The Quran video on translation and memorising shows these.
**Show:** In Reading settings, spotlight the Translation row, then pan past "Repeat each ayah" and "Playback speed" without opening them. Close the sheet.

### 4. Tajweed colours
#### [4.1] Tajweed
**Say:** Tap **Tajweed** to colour-code the recitation rules in the Arabic text.
**Show:** Tap the "Tajweed" chip. The Arabic letters change to the Tajweed colours. Zoom on one ayah.

#### [4.2]
**Say:** Not sure what a colour means? Open the settings: the key is under **Tajweed colours**.
**Show:** Open Reading settings. Spotlight the "Tajweed colours" switch and the colour key under it (Ghunnah, Qalqalah, Ikhfa…). Close.

### 5. Read the Mushaf
#### [5.1] Mushaf
**Say:** Prefer the printed page? Tap **Mushaf**. You'll see the Quran page by page, just like your Mushaf at home. Swipe to turn the page.
**Show:** Tap "Mushaf": the Madani page of Al-Mulk appears. Swipe to the next page and back.

#### [5.2] Mushaf type
**Say:** In the settings, **Mushaf type** lets you choose the Madani or IndoPak layout you're used to.
**Show:** Open Reading settings, tap the Mushaf type row. Spotlight the cards "Madani Mushaf (1421H)" and "IndoPak 15 lines". Keep "Madani Mushaf (1421H)" and close.

### 6. Keep your place
#### [6.1] Bookmark
**Say:** To keep your place, tap an ayah and choose **Bookmark**.
**Show:** Tap "Verses" to go back to verse view, then tap ayah 15: the ayah sheet opens. Tap "Bookmark".

#### [6.2] Bookmarks
**Say:** Tap **Bookmarks** any time to jump straight back to it.
**Show:** Tap the "Bookmarks" chip: the sheet lists "Al-Mulk 67:15". Tap it; the reader jumps to ayah 15.

### 7. Dua Khatam-e-Quran
#### [7.1]
**Say:** Finished the whole Quran, alhamdulillah? Tap the three dots at the top and choose **Dua Khatam-e-Quran** to read the dua for completing it, with its meaning.
**Show:** Tap the three-dots ("More") icon at the top. Tap "Dua Khatam-e-Quran": the sheet shows the Arabic lines with the English underneath. Scroll slowly.

### 8. Next
#### [8.1] Close
**Say:** Now you can read and listen wherever you are. Next, use translations, search, playlists and memorising, or try the Tasbeeh counter.
**Show:** End card with two tiles: "15.8 Quran: translation, search, playlists and memorising" and "15.6 Tasbeeh, live streams, gallery and forms".

## Review log
- 2026-11-03 · critic · 5 changes: [1.1] shorter opening, [3.3] "you love" softened, [3.4] no longer teaches Repeat each ayah and Playback speed (15.8 covers them) and points there, [7.1] "the menu" → "the three dots" to match the screen and 15.8, [8.1] end card points to 15.8
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · validator · checked against master d36d69ed8 · 1 fix: demo data adds no last-read position and the default Mushaf, so the reader opens on the first surah

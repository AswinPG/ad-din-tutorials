---
id: "15.5"
title: Read and listen to the Quran
target: 6:00
prereq:
  - "00.2"
status: scripted
flags:
  - "Quran data: the self-hosting change (feat/quran-self-hosted 152336b4d and ce6be1ea1; not yet on origin/master 7f0e6bf72, which still reads api.alquran.cloud directly) serves the text, translations, search text, Mushaf page layouts and fonts from Ad-Din's own storage (GET /public/Quran/Source), and falls back to AlQuran Cloud and Quran.com when that copy can't be read. Recitation audio still streams from cdn.islamic.network. The reader's labels are the same on both. The mocked demo world must serve the data and the audio for whichever build is recorded, or record against the agreed dev environment."
---

# 15.5 Read and listen to the Quran

## Goal
Open any surah in the Ad-Din app, read it verse by verse or as Mushaf pages, listen with your chosen reciter, turn on Tajweed colours, bookmark your place and read the Dua Khatam-e-Quran.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Mushaf, reciters, tajweed colours, bookmarks, Dua Khatam
- Why use it; the Juz list; the surah heading, Sajdah mark, Previous and Next surah
- Player buttons (previous, next, stop); the ten reciters; the Tajweed colour guide
- Mushaf view: page and Juz, tapping an ayah on the page; Show Tajweed colours on the Madani Mushaf (1421H)
- Removing a bookmark, Copy (Ayah copied); bookmarks, settings and last-read place saved on this phone only

## Demo data
- Any signed-in account on the app (no organisation needed)
- Quran content served for Surah Al-Kahf (18) and Surah Al-Mulk (67): Arabic, the English translation, Tajweed markup, audio for two reciters (for example Alafasy and Husary), and the Madani Mushaf (1421H) pages for Al-Mulk
- Reader settings reset to defaults (Verses view, light theme, Madani Mushaf (1421H), no bookmarks, empty playlist) and no last-read position saved, so the reader opens on Al-Fatihah
- Phone audio recorded for the listening scenes
- Juz list starts (Juz 2 at Al-Baqarah 2:142) and one surah with a Sajdah ayah for the [2.2a] cutaway
- Phone frame for every shot

## Script

### 1. The Quran in your pocket
#### [1.1] Opening
**Say:** The Ad-Din app has the whole Quran, to read and to listen to. In this video, you'll open a surah, choose a reciter, turn on Tajweed colours, keep your place, and read the dua for completing the Quran.
**Show:** Title card: "Read and listen to the Quran". Phone frame on the app home.

#### [1.2]
**Say:** On the home screen, tap **Quran**.
**Show:** Spotlight the "Quran" tile and tap it. The reader opens on the first surah.

#### [1.2a] Why use it
**Say:** Use the reader for your daily recitation, to follow along while you listen, or to read the printed page on the way to the masjid. It needs no organisation, and next time it opens where you left off.
**Show:** Hold on the reader's first page; spotlight the surah button at the top.

### 2. Open a surah
#### [2.1] Choose a surah
**Say:** Tap the surah name at the top to choose another one. Search by name or number, or switch to **Juz** to start from a Juz.
**Show:** Tap the surah button at the top: the picker opens. Type "67" in "Surah name or number"; tap Al-Mulk. Mention the "Juz" tab by spotlighting it.

#### [2.1a] The Juz list
**Say:** In the **Juz** list, each Juz shows where it starts, such as Al-Baqarah 2:142. Tap one to go straight there.
**Show:** Open the picker again, tap "Juz": spotlight "Juz 2" with "Starts at Al-Baqarah 2:142". Close the picker without choosing.

#### [2.2] Verses
**Say:** In **Verses** view, each ayah shows the Arabic with its translation underneath.
**Show:** Surah Al-Mulk in Verses view. Spotlight the first ayah: Arabic line, then the English translation.

#### [2.2a] The surah page
**Say:** The top of each surah shows its name in Arabic and English, and whether it was revealed in Makkah or Madinah. An ayah with a Sajdah has a **۩ Sajdah** mark. At the end, **Previous** and **Next surah** move to the surahs around it.
**Show:** Zoom on the surah heading ("Surah Al-Mulk · Meccan") and the Bismillah. Cutaway: a Sajdah ayah in another surah with "۩ Sajdah". Scroll to the end of Al-Mulk: spotlight "Previous" and "Next surah".

### 3. Listen with a reciter
#### [3.1] Play
**Say:** Tap play at the bottom to listen. The ayah being recited is highlighted, and the page follows along.
**Show:** Tap the play button. Audio plays; the highlight moves to ayah 2 and the page scrolls. Pause.

#### [3.1a] The player
**Say:** The player has buttons for the previous and next ayah, and a stop button. While nothing plays, it shows the reciter's name. While it plays, it shows the ayah number.
**Show:** Zoom on the player bar: "Alafasy" and "Reciter". Tap play: "Ayah 1". Tap the next-ayah button: "Ayah 2". Tap stop.

#### [3.2] Play from here
**Say:** To start from a particular ayah, tap it and choose **Play from here**.
**Show:** Tap ayah 5: the ayah sheet opens. Tap "Play from here"; recitation starts at ayah 5. Pause.

#### [3.3] Reciter
**Say:** To change the voice, open the settings and tap **Reciter**. Pick the reciter you like best.
**Show:** Tap the settings icon: "Reading settings" opens. Tap the Reciter row; the list opens. Choose a second reciter (for example Husary).

#### [3.3a] Ten reciters
**Say:** There are ten reciters, including Abdul Basit, As-Sudais and Al-Minshawi. Try a few, and keep the one that helps you most.
**Show:** In the Reciter list, scroll slowly through the ten names; the tick stays on Husary. Go back to Reading settings.

#### [3.4]
**Say:** Here you also choose your **Translation**, and how the recitation repeats and how fast it goes. Video 15.8 shows these.
**Show:** In Reading settings, spotlight the Translation row, then pan past "Repeat each ayah" and "Playback speed" without opening them. Close the sheet.

### 4. Tajweed colours
#### [4.1] Tajweed
**Say:** Tap **Tajweed** to colour-code the recitation rules in the Arabic text.
**Show:** Tap the "Tajweed" chip. The Arabic letters change to the Tajweed colours. Zoom on one ayah.

#### [4.2]
**Say:** To see what each colour means, open the settings. The key is under **Tajweed colours**.
**Show:** Open Reading settings. Spotlight the "Tajweed colours" switch and the colour key under it (Ghunnah, Qalqalah, Ikhfa…). Close.

#### [4.2a]
**Say:** Each rule has its own colour, such as **Qalqalah**, **Ikhfa** or **Ghunnah**. If you're learning Tajweed, turn it on while you listen and follow the colours.
**Show:** Zoom on three entries of the colour guide; then on a coloured word in the ayah behind the sheet. Close.

### 5. Read the Mushaf
#### [5.1] Mushaf
**Say:** To read the printed page, tap **Mushaf**. You'll see the Quran page by page, just like your Mushaf at home. Swipe to turn the page.
**Show:** Tap "Mushaf": the Madani page of Al-Mulk appears. Swipe to the next page and back.

#### [5.1a] Page, Juz and translation
**Say:** In **Mushaf** view, the top shows the page and Juz number. Tap an ayah on the page to see its translation, and the same choices as in verse view.
**Show:** Zoom on "Page 562 · Juz 29" under the surah name. Tap an ayah on the page: the ayah sheet shows the reference, the English translation, and the buttons. Close it.

#### [5.2] Mushaf type
**Say:** In the settings, **Mushaf type** lets you choose the Madani or IndoPak layout you're used to.
**Show:** Open Reading settings, tap the Mushaf type row. Spotlight the three cards "Madani Mushaf (1405H)", "Madani Mushaf (1421H)" and "IndoPak 15 lines". Keep "Madani Mushaf (1421H)" and close.

#### [5.2a] Tajweed on the page
**Say:** On the **Madani Mushaf (1421H)**, you can also turn on **Show Tajweed colours**. The other Mushaf types show the page without colours.
**Show:** In Mushaf type, spotlight the "Show Tajweed colours" switch under the cards; turn it on: the thumbnails change colour. Turn it off and close.

### 6. Keep your place
#### [6.1] Bookmark
**Say:** To keep your place, tap an ayah and choose **Bookmark**.
**Show:** Tap "Verses" to go back to verse view, then tap ayah 15: the ayah sheet opens. Tap "Bookmark".

#### [6.2] Bookmarks
**Say:** Tap **Bookmarks** any time to jump straight back to it.
**Show:** Tap the "Bookmarks" chip: the sheet lists "Al-Mulk 67:15". Tap it; the reader jumps to ayah 15.

#### [6.2a] Remove or copy
**Say:** Each bookmark shows the date you saved it. Tap the cross to remove it, or tap the ayah and choose **Remove bookmark**. **Copy** copies the ayah, and Ad-Din shows **Ayah copied**.
**Show:** Open Bookmarks: spotlight "Saved" with the date and the remove button without tapping. Close. Tap ayah 15: spotlight "Remove bookmark"; tap "Copy": toast "Ayah copied".

#### [6.2b] Saved on this phone
**Say:** Your bookmarks, your reading settings and the place you stopped are saved on this phone only. If you use Ad-Din on another phone, set them there too.
**Show:** Hold on the reader at Al-Mulk 67:15.

### 7. Dua Khatam-e-Quran
#### [7.1]
**Say:** When you finish the whole Quran, alhamdulillah, tap the three dots at the top and choose **Dua Khatam-e-Quran**. It shows the dua for completing the Quran, with its meaning.
**Show:** Tap the three-dots ("More") icon at the top. Tap "Dua Khatam-e-Quran": the sheet shows the Arabic lines with the English underneath. Scroll slowly.

### 8. Next
#### [8.1] Close
**Say:** Now you can read and listen wherever you are. Next, video 15.8: Quran: translation, search, playlists and memorising. Or video 15.6: Tasbeeh, live streams, gallery and forms.
**Show:** End card with two tiles: "15.8 Quran: translation, search, playlists and memorising" and "15.6 Tasbeeh, live streams, gallery and forms".

## Review log
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 2:01 → 4:01 narration, 10 scenes added: [1.2a] why use it and the last-read place, [2.1a] the Juz list, [2.2a] the surah heading, Sajdah mark, Previous and Next surah, [3.1a] the player buttons, [3.3a] the ten reciters, [4.2a] the Tajweed colour guide, [5.1a] page and Juz in Mushaf view and tapping an ayah there, [5.2a] Show Tajweed colours on the Madani Mushaf (1421H), [6.2a] removing a bookmark and Copy, [6.2b] saved on this phone only. [5.2] now shows all three Mushaf types. Checked against origin/master d0604ce7f (quran-reader, quran.models, mushaf.models, quran.service local storage)
- 2026-11-06 · panel (user, director, writer, PM, PO) · 6 changes: [1.1] "In this video, you'll" opening; [3.4] points to video 15.8 by number; [4.2], [5.1], [7.1] no elliptical questions; [8.1] names both end tiles by number and title; Quran data flag rewritten for the self-hosted copy (feat/quran-self-hosted), audio still from cdn.islamic.network
- 2026-11-03 · critic · 5 changes: [1.1] shorter opening, [3.3] "you love" softened, [3.4] no longer teaches Repeat each ayah and Playback speed (15.8 covers them) and points there, [7.1] "the menu" → "the three dots" to match the screen and 15.8, [8.1] end card points to 15.8
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · validator · checked against master d36d69ed8 · 1 fix: demo data adds no last-read position and the default Mushaf, so the reader opens on the first surah

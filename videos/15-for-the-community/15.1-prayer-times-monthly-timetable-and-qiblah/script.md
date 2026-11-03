---
id: "15.1"
title: Prayer times, monthly timetable and Qiblah
target: 4:00
prereq: []
status: scripted
flags:
  - The Qiblah compass is a native app page (MAUI), not Angular; its wording was read from the MAUI repo on branch fix/ios-workload-version, not master, so it is described without bold labels. Check it on the release build before recording.
  - Locate Qiblah only shows inside the app (it is hidden in a web browser), so record this video on the app build.
  - "The location prompt is shown for Prayer Times only ([5.2a], the web dialog in the Prayer calculation sheet). The Qiblah compass asks for location on its own native page, which isn't in the Angular code, so [6.2] only shows it finding the location, without labels."
---

# 15.1 Prayer times, monthly timetable and Qiblah

## Goal
See today's prayer times for your masjid, check what changes tomorrow, open the monthly timetable, switch to times for where you are, and find the Qiblah in the Ad-Din app.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->
- The Ad-Din app, signed in
- A home masjid (or location access for Auto mode)

## Covers
- Today and tomorrow, Timing Changes, monthly view, Auto location, Qiblah
- Prayer calculation settings: location, calculation method, Asr rule, daylight saving, high-latitude rule, manual corrections
- Location access prompt (Allow location, Choose a place instead)

## Demo data
- Member account (no admin role) with home masjid "Masjid Al-Noor" and one followed masjid "Masjid Ar-Rahman", both with prayer times for this month and next
- Masjid Al-Noor has at least one Iqamah that changes tomorrow (for example Asr), so the Timing Changes chip shows
- Hijri date shown on the page; a Friday in the month with a Jumu'ah time
- Phone location set to the demo city (emulator mock location), so Auto mode and the Qiblah compass have a fix; Prayer calculation location saved as the demo city
- A second take for [5.2a] with Ad-Din's location permission denied once on the phone, so the "Location access needed" dialog shows
- Phone frame for every shot

## Script

### 1. Your masjid's times on your phone
#### [1.1] Opening
**Say:** In this video you'll check today's prayer times in the Ad-Din app, see what changes tomorrow, open the monthly timetable, and find the Qiblah.
**Show:** Title card: "Prayer times, monthly timetable and Qiblah". Phone frame on the app home.

#### [1.2]
**Say:** Your home masjid's **Iqamah times** sit at the top of the home screen, with the next prayer and how long until it starts.
**Show:** Home screen. Spotlight the prayer card: "Iqamah times", the next prayer name and "in 1 h 20 min", and the five-prayer row.

### 2. Today's prayer times
#### [2.1] Open Prayer Times
**Say:** Tap the card, or the **Prayer Times** tile, to open the full page.
**Show:** Tap the prayer card. The Prayer Times page opens with Masjid Al-Noor, the date and the Hijri date.

#### [2.2]
**Say:** At the top you'll see your masjid, today's date and the Islamic date.
**Show:** Zoom on the hero: masjid name and city, date line, Hijri line.

#### [2.3]
**Say:** Below, the table lists every **Salah** with its **Iqamah** time. The prayer coming up next is highlighted.
**Show:** Scroll to the table. Spotlight the Salah and Iqamah columns, then the highlighted row.

#### [2.4] Followed masjids
**Say:** Follow more than one masjid? Use the arrows beside the name to switch between them.
**Show:** Tap the right arrow: the page changes to Masjid Ar-Rahman. Tap the left arrow to come back to Masjid Al-Noor.

### 3. What changes tomorrow
#### [3.1] Timing Changes
**Say:** When your masjid changes a time tomorrow, a **Timing Changes** chip appears. Tap it.
**Show:** Spotlight the orange "Timing Changes" chip, then tap it. The sheet slides up.

#### [3.2]
**Say:** The sheet shows each changed prayer, with **Today** beside **Tomorrow**, so you can plan ahead.
**Show:** Zoom on the row: Asr, today's time, tomorrow's time. Close the sheet.

### 4. The monthly timetable
#### [4.1] View Monthly Timings
**Say:** For the whole month, tap **View Monthly Timings**.
**Show:** Tap "View Monthly Timings". The monthly page opens for Masjid Al-Noor.

#### [4.2]
**Say:** Each row is one day, with begin and Iqamah times. Today is highlighted, and Fridays show the Jumu'ah times.
**Show:** Spotlight today's row, then a Friday row with "1st" Jumu'ah. Swipe the table left to show more columns.

#### [4.3]
**Say:** Use the arrows to move between months, or tap the month to jump straight to another one.
**Show:** Tap the right arrow: next month loads. Tap the month pill: "Jump to month" sheet; pick the current month. Go back to Prayer Times.

### 5. Times for where you are
#### [5.1] Auto
**Say:** Travelling, or away from your masjid? Turn on **Auto**. Ad-Din calculates the times for where you are instead.
**Show:** Tap the "Auto" switch. The name changes to the demo place and the Iqamah column disappears.

#### [5.2] Prayer calculation
**Say:** Tap the settings button to choose how the times are worked out. Under **Location**, tap **Use my location**.
**Show:** Tap the tune icon: "Prayer calculation" sheet. Tap "Use my location": the "Finding your location…" dialog, then the sheet shows the demo place and "Located just now".

#### [5.2a] Location access
**Say:** If Ad-Din can't use your location, it tells you why. Tap **Allow location** to ask again, or **Choose a place instead** and search for your town.
**Show:** Second take, location permission denied: the "Location access needed" dialog. Spotlight "Allow location", then "Choose a place instead". Close it and return to the first take.

#### [5.2b] Method and corrections
**Say:** Pick your **Calculation method** and **Asr juristic rule**. **Manual corrections** move each time by a few minutes to match your local masjid. Then tap **Save**.
**Show:** Open the Calculation method list, then the Asr juristic rule list. Pan past Daylight saving and High-latitude rule. Tap + twice beside Isha under Manual corrections. Tap "Save": toast "Prayer settings saved."
**Caption:** Choose the Calculation method and Asr juristic rule, adjust Manual corrections if needed, then Save.

#### [5.3]
**Say:** Turn **Auto** off again to go back to your masjid's own times.
**Show:** Tap the "Auto" switch off; Masjid Al-Noor and its Iqamah column return.

### 6. Find the Qiblah
#### [6.1] Locate Qiblah
**Say:** To pray anywhere, tap **Locate Qiblah**.
**Show:** Tap the "Locate Qiblah" chip. The app's compass page opens.

#### [6.2]
**Say:** Hold your phone flat, screen facing up. Turn until the arrow points to the Qiblah. You can also open it from the Qiblah tile on the home screen.
**Show:** Compass page in the phone frame, finding the location, then the arrow settling. Cut to the home screen with the "Qiblah" tile spotlit.

### 7. Next
#### [7.1] Close
**Say:** Now you know today's times, tomorrow's changes, the monthly timetable and the Qiblah. Next, find and follow more masjids near you.
**Show:** End card with two tiles: "15.2 Find and follow masjids" and "00.4 Choose your home masjid and madrasah".

## Review log
- 2026-11-03 · critic · 5 changes: target 4:00, [1.1] opening without the "heart of" idiom, [2.2] countdown said once (it is in [1.2]), [3.2] "catches you out" idiom replaced, [5.2] split so each step has its own scene, [7.1] "sorted" idiom replaced · fold: [5.2a] location access prompt (Allow location, Choose a place instead), [5.2b] Manual corrections with Daylight saving and High-latitude rule on screen
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes

---
id: "15.1"
title: Prayer times, monthly timetable and Qiblah
target: 7:30
prereq: []
status: scripted
flags:
  - The Qiblah compass is a native app page (MAUI), not Angular; its wording was read from the MAUI repo on branch fix/ios-workload-version, not master, so it is described without bold labels. Check it on the release build before recording. The compass and the denied-location take are native phone screens, which the mocked web world can't show: capture them from the app build (see the review panel decision).
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
- Why use it; the table's optional rows and columns (Begins, Adhan, Sunrise, Sunset, Jumu'ah, Eid, Tarawih); the next-prayer countdown; Auto when you have no masjid
- Who sets the times; monthly page: masjid details and switching masjid, Columns (Show all, Done), PDF
- What Auto shows, Location updated; Or search for a place…, Daylight saving and High-latitude rule options, settings saved to your account
- Qiblah: keep it flat (tilt warning), the map with degrees from north, the settings button; settings are yours alone

## Demo data
- A community member account with no admin role (not the admin demo account Yusuf Rahman), home masjid "Maple Grove Masjid" and one followed masjid "Cedar Hill Masjid", both with prayer times for this month and next
- Maple Grove Masjid has at least one Iqamah that changes tomorrow (for example Asr), so the Timing Changes chip shows
- Hijri date shown on the page; a Friday in the month with a Jumu'ah time
- Phone location set to the demo city (emulator mock location), so Auto mode and the Qiblah compass have a fix; Prayer calculation location saved as the demo city
- A second take for [5.2a] with Ad-Din's location permission denied once on the phone, so the "Location access needed" dialog shows
- Maple Grove Masjid's mobile display shows the Begins and Adhan columns and the Sunrise and Sunset rows
- A second member account with no home masjid and no followed masjid, for the [2.4a] cutaway
- The monthly PDF request answered with a demo PDF of the month (Pdf request and its status), for [4.3b]
- A cutaway take for [5.1a] with the saved Prayer calculation place more than 5 km from the phone's mocked location, so the "Location updated to where you are." toast shows
- Native captures for [6.2a] (tilting the phone) and [6.2b] (the Qiblah map and the settings icon)
- Phone frame for every shot

## Script

### 1. Your masjid's times on your phone
#### [1.1] Opening
**Say:** In this video, you'll check today's prayer times in the Ad-Din app, see what changes tomorrow, open the monthly timetable, and find the Qiblah.
**Show:** Title card: "Prayer times, monthly timetable and Qiblah". Phone frame on the app home. Side panel label: "Signed in as: a community member".

#### [1.2]
**Say:** Your home masjid's **Iqamah times** sit at the top of the home screen, with the next prayer and how long until it starts.
**Show:** Home screen. Spotlight the prayer card: "Iqamah times", the next prayer name and "in 1 h 20 min", and the five-prayer row.

#### [1.2a] Why use it
**Say:** The Iqamah times come from your masjid, so you always know when the congregation stands for each prayer. When you travel, the same page can work out the times for wherever you are.
**Show:** Hold on the prayer card, then a quick cut of the Prayer Times page in Auto mode with the demo place name.

### 2. Today's prayer times
#### [2.1] Open Prayer Times
**Say:** Tap the card, or the **Prayer Times** tile, to open the full page.
**Show:** Tap the prayer card. The Prayer Times page opens with Maple Grove Masjid, the date and the Hijri date.

#### [2.2]
**Say:** At the top you'll see your masjid, today's date and the Islamic date.
**Show:** Zoom on the hero: masjid name and city, date line, Hijri line.

#### [2.3]
**Say:** Below, the table lists every **Salah** with its **Iqamah** time. The prayer coming up next is highlighted.
**Show:** Scroll to the table. Spotlight the Salah and Iqamah columns, then the highlighted row.

#### [2.3a] More rows and columns
**Say:** Your masjid chooses what the table shows. Besides the five prayers, you may see **Begins** and **Adhan** columns, and rows such as **Sunrise**, **Sunset**, **Jumu'ah**, **Eid** or **Tarawih**.
**Show:** Spotlight the "Begins" and "Adhan" column headers, then the "Sunrise" and "Sunset" rows.

#### [2.3b] The next prayer
**Say:** Above the table, the large time is the next prayer, with a countdown. After Isha, it counts down to tomorrow's Fajr. The countdown updates every minute while the page is open.
**Show:** Zoom on the hero: next prayer name, its time and "in 1 h 20 min".

#### [2.4] Followed masjids
**Say:** If you follow more than one masjid, use the arrows beside the name to switch between them.
**Show:** Tap the right arrow: the page changes to Cedar Hill Masjid. Tap the left arrow to come back to Maple Grove Masjid.

#### [2.4a] No masjid yet
**Say:** If you haven't chosen a home masjid or followed one, **Auto** stays on, and the times are worked out for where you are. The search button at the top opens the masjid finder, so you can choose one.
**Show:** Cutaway on a second member account with no home masjid and no followed masjid: the Auto switch is on and greyed. Spotlight the search icon beside the settings icon. Side panel label: "Signed in as: a member with no masjid".

### 3. What changes tomorrow
#### [3.1] Timing Changes
**Say:** When your masjid changes a time tomorrow, a **Timing Changes From Tomorrow** chip appears. Tap it.
**Show:** Spotlight the orange "Timing Changes From Tomorrow" chip, then tap it. The sheet slides up.

#### [3.2]
**Say:** The sheet shows each changed prayer, with **Today** beside **Tomorrow**, so you can plan ahead.
**Show:** Zoom on the row: Asr, today's time, tomorrow's time. Close the sheet.

#### [3.2a] Who sets the times
**Say:** If you don't see the chip, your masjid's Iqamah times stay the same tomorrow. Your masjid's admins set these times, so if one looks wrong, tell your masjid office.
**Show:** Back on the Prayer Times page; hold on the Iqamah column.

### 4. The monthly timetable
#### [4.1] View Monthly Timings
**Say:** For the whole month, tap **View Monthly Timings**.
**Show:** Tap "View Monthly Timings". The monthly page opens for Maple Grove Masjid.

#### [4.1a] Masjid details
**Say:** Tap the masjid name at the top to see its address, phone and email. If you follow more than one masjid, you can pick another one from the list there.
**Show:** Tap the "Monthly prayer timings" row: it opens with the address, phone and email. Open the masjid list, choose "Cedar Hill Masjid", then "Maple Grove Masjid" again. Tap the row to close it.

#### [4.2]
**Say:** Each row is one day, with begin and Iqamah times. Today is highlighted, and Fridays show the Jumu'ah times.
**Show:** Spotlight today's row, then a Friday row with "1st" Jumu'ah, and the guide under the table: Today, Friday (Jumah). Swipe the table left to show more columns.

#### [4.3]
**Say:** Use the arrows to move between months, or tap the month to jump straight to another one.
**Show:** Tap the right arrow: next month loads. Tap the month pill: "Jump to month" sheet; pick the current month.

#### [4.3a] Columns
**Say:** The table is wide. To make it easier to read, tap **Columns** and untick what you don't need, such as **Islamic Day** or **Fajr Begins**. Then tap **Done**. **Date** is always shown.
**Show:** Tap "Columns": the sheet opens. Untick "Islamic Day" and "Fajr Begins"; tap "Done". The table now needs less swiping.

#### [4.3b] PDF
**Say:** To print the timetable, tap **PDF**. Ad-Din makes a PDF of the month with the same columns. To bring every column back, open **Columns** and tap **Show all**.
**Show:** Tap "PDF": the spinner, then the downloaded monthly PDF (demo file). Back on the page, tap "Columns", then "Show all", then "Done". Go back to Prayer Times.

### 5. Times for where you are
#### [5.1] Auto
**Say:** When you travel or are away from your masjid, turn on **Auto**. Ad-Din then calculates the times for where you are.
**Show:** Tap the "Auto" switch. The name changes to the demo place and the Iqamah column disappears.

#### [5.1a] What Auto shows
**Say:** In Auto, the table shows when each prayer begins, with no Iqamah, because no masjid is involved. Ad-Din remembers your choice. If you open the page far from your saved place, it moves there and shows **Location updated to where you are.**
**Show:** Spotlight the "Begins" column. Cutaway: the toast "Location updated to where you are."

#### [5.2] Prayer calculation
**Say:** Tap the settings button to choose how the times are worked out. Under **Location**, tap **Use my location**.
**Show:** Tap the tune icon: "Prayer calculation" sheet. Tap "Use my location": the "Finding your location…" dialog, then the sheet shows the demo place and "Located just now".

#### [5.2a] Location access
**Say:** If Ad-Din can't use your location, it tells you why. Tap **Allow location** to ask again, or **Choose a place instead** and search for your town.
**Show:** Second take, location permission denied: the "Location access needed" dialog. Spotlight "Allow location", then "Choose a place instead". Close it and return to the first take.

#### [5.2b] Search and method
**Say:** You can also type a town in **Or search for a place…**. Then pick your **Calculation method** and **Asr juristic rule**. If you're not sure which to pick, ask your local masjid.
**Show:** Spotlight the "Or search for a place…" box. Open the Calculation method list (it starts on Islamic Society of North America), then the Asr juristic rule list: "Standard (Shafi, Maliki, Hanbali)" and "Hanafi".
**Caption:** You can also search for a town. Then choose the Calculation method and Asr juristic rule (ask your masjid if you're not sure).

#### [5.2c] Daylight saving and high latitudes
**Say:** **Daylight saving** starts on **Automatic**. Choose **+1 hour** or **None** only if the times are an hour out. The **High-latitude rule** matters far from the equator, where summer nights are very short. It decides how Fajr and Isha are worked out.
**Show:** Open the "Daylight saving" list: "Automatic", "+1 hour", "None"; keep "Automatic". Open the "High-latitude rule" list: "Middle of the night", "One-seventh of the night", "Angle based"; keep "Middle of the night".

#### [5.2d] Manual corrections
**Say:** **Manual corrections** shift each time by up to 60 minutes, to match your local masjid. Tap **Save**. The settings are saved to your account, and you see **Prayer settings saved.** Saving doesn't turn on Auto by itself.
**Show:** Tap + twice beside Isha under "Manual corrections": "+2 min". Tap "Save": toast "Prayer settings saved."

#### [5.3]
**Say:** Turn **Auto** off again to go back to your masjid's own times.
**Show:** Tap the "Auto" switch off; Maple Grove Masjid and its Iqamah column return.

### 6. Find the Qiblah
#### [6.1] Locate Qiblah
**Say:** To pray anywhere, tap **Locate Qiblah**.
**Show:** Tap the "Locate Qiblah" chip. The app's compass page opens.

#### [6.2]
**Say:** Hold your phone flat, screen facing up. Turn until the arrow points to the Qiblah. You can also open it from the Qiblah tile on the home screen.
**Show:** Compass page in the phone frame, finding the location, then the arrow settling. Cut to the home screen with the "Qiblah" tile spotlit.

#### [6.2a] Keep it flat
**Say:** The bar above the compass is green when your phone lies flat. If it turns red, the phone is tilted and the direction can be wrong, so lay it flat again.
**Show:** Native capture: tilt the phone: the hint bar under the place name turns red; lay it flat: it turns green again.

#### [6.2b] Map and settings
**Say:** The map button shows a satellite map of where you are, with the Qiblah arrow and how many degrees it is from north. The settings button at the top opens **Prayer calculation**, where you can change your location.
**Show:** Native capture: tap the map icon: the satellite map with the compass and "Qiblah is … from north." Go back; tap the settings icon: the app returns to Prayer Times with the "Prayer calculation" sheet open. Close it.

#### [6.2c] Only for you
**Say:** These settings are yours alone. They don't change your masjid's times for anyone else. When your masjid changes its times, you see the new ones the next time you open the page.
**Show:** Back on the Prayer Times page with Maple Grove Masjid.

### 7. Next
#### [7.1] Close
**Say:** Now you know today's times, tomorrow's changes, the monthly timetable and the Qiblah. Next, video 15.2: Find and follow masjids. Or video 00.4: Choose your home masjid and madrasah.
**Show:** End card with two tiles: "15.2 Find and follow masjids" and "00.4 Choose your home masjid and madrasah".

## Review log
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 2:27 → 5:43 narration, 14 scenes added: [1.2a] why use it, [2.3a] optional rows and columns, [2.3b] next-prayer countdown, [2.4a] Auto when you have no masjid and the finder button, [3.2a] who sets the times, [4.1a] masjid details and switching on the monthly page, [4.3a] Columns, [4.3b] PDF and Show all, [5.1a] what Auto shows and Location updated, [5.2c] Daylight saving and High-latitude rule, [5.2d] Manual corrections and saving to your account (split from [5.2b], which now covers place search), [6.2a] the tilt warning, [6.2b] the Qiblah map and settings button, [6.2c] settings are yours alone. Checked against origin/master d0604ce7f (prayer-times page and settings sheet, monthly-prayer-times) and the MAUI Qiblah page (fix/ios-workload-version)
- 2026-11-06 · panel (user, director, writer, PM, PO) · 8 changes: [3.1] chip label is "Timing Changes From Tomorrow" (en.json prayerpage.timing_changes); [2.4], [5.1] no elliptical questions; [5.2b] "ask your local masjid" for the method and Asr rule, Caption kept in step; [1.1] comma after "In this video" and a "Signed in as: a community member" label; [7.1] names both end tiles by number and title; demo names match the Maple Grove demo world, on a member account (not the admin Yusuf Rahman); Qiblah flag notes the native capture
- 2026-11-03 · critic · 5 changes: target 4:00, [1.1] opening without the "heart of" idiom, [2.2] countdown said once (it is in [1.2]), [3.2] "catches you out" idiom replaced, [5.2] split so each step has its own scene, [7.1] "sorted" idiom replaced · fold: [5.2a] location access prompt (Allow location, Choose a place instead), [5.2b] Manual corrections with Daylight saving and High-latitude rule on screen
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes

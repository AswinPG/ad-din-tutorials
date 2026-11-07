---
id: "04.2"
title: Set iqamah and jumu’ah times
target: 3:45
prereq:
  - "04.1"
status: scripted
flags:
  - "View Prayer Times → Change these opens Batch Update without carrying the dates over (the code comment says it should); the script has the viewer pick the dates again"
  - "Jumah Location's search box uses Google Places suggestions, which the mocked demo world does not answer: stub the one suggestion (Maple Grove Community Hall) or record [7a.2] from dev"
---

# 04.2 Set iqamah and jumu’ah times

## Goal
Set Iqamah and Jumu'ah times for a whole range of days at once with Batch Update, then check them in View Prayer Times.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Batch Update by date range, Fridays only, View Prayer Times
- Basic Display → Jumah Location: a Jumu'ah held away from the masjid

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo masjid "Maple Grove Masjid", signed in as its masjid admin, with automatic begin times calculated for the coming year and existing Iqamah times
- Adhan Times saved (Maghrib Iqamah Offset 5), so Maghrib shows as locked in Batch Update
- Date range used on camera: the whole of next month for the demo clock (1 to 31 December 2026), which includes four Fridays
- New times typed on camera: Fajr 6:00 AM, Dhuhr 1:30 PM, Isha 8:45 PM, Jumu'ah 1:15 PM, Jumu'ah 2 2:15 PM
- Jumah Location on camera: "Maple Grove Community Hall", 250 Elm Street, Toronto, ON M0M 0B0, Canada (fictional), offered as one search suggestion; saving shows "Successfully saved Display Settings"

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Before you start
#### [1.1] Opening
**Say:** Iqamah is when the congregation stands for prayer. In this video for masjid admins, you'll set Iqamah and Jumu'ah times for many days at once, then check them.
**Show:** Title card: "Set iqamah and jumu’ah times".

#### [1.2]
**Say:** Your begin times and Adhan times are already set. Ad-Din works out each Adhan time from the Iqamah time you set here.
**Show:** Opening card from You'll need.

### 2. Open Batch Update
#### [2.1] Where it lives
**Say:** In the sidebar, open **Masjid**, then **Prayer Times**. The page opens on **Batch Update**.
**Show:** Sidebar → Masjid → Prayer Times. The Batch Update tab is active.

#### [2.2] Quick help
**Say:** Tap the question mark for a short reminder of how it works, then tap **Got it**.
**Show:** Click the help icon beside "Date range". The "Batch Update" help sheet slides up with four points; click Got it.

### 3. Choose the dates
#### [3.1] From and To
**Say:** Under **Date range**, pick the **From** and **To** dates. Here, it's the whole of next month.
**Show:** Click From and pick the 1st of next month; click To and pick the last day.

#### [3.2]
**Say:** Ad-Din shows the range and how many days it covers. If the To date comes before the From date, it tells you to fix it.
**Show:** Spotlight the summary line with the dates and the "31 days" pill.

### 4. Set daily Iqamah times
#### [4.1] Tick and type
**Say:** Under **Iqamah times**, tick each prayer you want to change and enter its new time. Prayers you leave unticked keep their current times.
**Show:** Tick Fajr and pick 6:00 AM in the time picker.

#### [4.2]
**Say:** Entering a time ticks the prayer for you. Here, Dhuhr moves to 1:30 and Isha to 8:45.
**Show:** Without ticking first, pick 1:30 PM for Dhuhr and 8:45 PM for Isha; their boxes tick themselves.

#### [4.3] Maghrib
**Say:** Maghrib is locked. Its Iqamah follows sunset, using the offset you set on the **Adhan Times** tab.
**Show:** Spotlight the locked Maghrib row and its note "Set Magrib Iqamah offset in adhan times".

#### [4.4]
**Say:** **Select all** ticks every prayer at once. The same button then reads **Clear all**, to untick them again.
**Show:** Hover "Select all" at the top right of the card; don't click.

### 5. Set Jumu'ah times
#### [5.1] Fridays only
**Say:** Below, the **Jumu'ah** group **Applies to Fridays only**. Set your Jumu'ah time, and add **Jumu'ah 2** if you hold a second prayer.
**Show:** Spotlight the hint "Applies to Fridays only". Pick 1:15 PM for Jumu'ah and 2:15 PM for Jumu'ah 2.

#### [5.2] Check the summary
**Say:** The line at the bottom sums up your changes. If a ticked prayer still needs a time, it says so, and **Update times** can't be tapped.
**Show:** Spotlight the summary: "Fajr, Dhuhr, Isha, Jumu'ah, Jumu'ah 2 · 31 days". Tick Asr: "1 time(s) still needed" appears and the button greys out. Untick Asr.

### 6. Save
#### [6.1] Update times
**Say:** Tap **Update times**. Ad-Din saves the new Iqamah times for every day in the range.
**Show:** Click Update times. Toast "Successfully updated Prayer Times". The prayer ticks clear.

#### [6.2] Start over
**Say:** To start again at any time, tap **Clear**. It empties the dates and unticks every prayer.
**Show:** Hover Clear beside Update times.

### 7. Check the times
#### [7.1] View Prayer Times
**Say:** Now open **View Prayer Times**. Pick the same **From** and **To** dates, and tap **View Prayer Times**.
**Show:** Click the "View Prayer Times" tab. Pick the same two dates; click the View Prayer Times button.

#### [7.2]
**Say:** The table shows each day's begin and Iqamah times. Fridays are highlighted, so Jumu'ah is easy to spot.
**Show:** The grid loads. Spotlight a highlighted Friday row, then scroll right to "Jumu'ah Iqamah" and "Jumu'ah 2 Iqamah".

#### [7.3]
**Say:** If you need another change, tap **Change these** to go back to **Batch Update**. Pick the dates again there.
**Show:** Click "Change these"; the Batch Update tab opens with empty dates.

### 8. Jumu'ah away from the masjid
#### [7a.1] Jumah Location
**Say:** If your Jumu'ah is held somewhere else, such as a rented hall, you can save that place too. Open the **Basic Display** tab, then the **Jumah Location** section.
**Show:** Click the "Basic Display" tab. Click the "Jumah Location" section title to open it.

#### [7a.2]
**Say:** Tick **The location for Jumah is different from the location of the masjid**. In **Jumah Location**, type the name or address of the place, and pick it from the list.
**Show:** Tick the box; the note and the address fields open. Type "Maple Grove Community Hall" and pick the suggestion; Street No, Street Name, City, Postal Code, State and Country fill in.

#### [7a.3]
**Say:** Check the address, then scroll down and tap **Save**. If a detail is missing, Ad-Din asks you to fill it in.
**Show:** Spotlight the filled address fields. Scroll to the bottom of Basic Display and click Save. Toast "Successfully saved Display Settings".

### 9. Next
#### [8.1] Close
**Say:** Your Iqamah and Jumu'ah times are set. To change a single day or use a spreadsheet, watch video 04.3: Import and export a prayer timetable. Then video 04.4: Prayer times on a TV: basic displays.
**Show:** End card with two tiles: "04.3 Import and export a prayer timetable" and "04.4 Prayer times on a TV: basic displays".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-07 · manager · panel decisions, "All recommended" · added chapter 8 "Jumu'ah away from the masjid" ([7a.1]-[7a.3], Basic Display → Jumah Location; decision 27); Next is now chapter 9 with [8.1] unchanged; Covers, demo data and a Google Places flag added
- 2026-11-06 · panel (user, director, writer, PM, PO) · 6 changes: [1.2] "already set" (no phrasal verb), [4.4] Select all and Clear all are one button, [5.2] "can't be tapped" instead of "greyed out", [7.3] no elliptical question and says to pick the dates again (flag), [8.1] names both end tiles by number, demo names and date range match the Maple Grove demo world (December 2026)
- 2026-11-03 · critic · 2 changes: second-person opening, [1.2] no longer says Ad-Din 'calls' the Adhan
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes

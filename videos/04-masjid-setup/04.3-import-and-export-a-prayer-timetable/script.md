---
id: "04.3"
title: Import and export a prayer timetable
target: 4:00
prereq:
  - "04.1"
status: scripted
flags:
  - "Export always covers January to December of the current year, while month buttons for months already past open next year's month; late in the year the file won't include the upcoming months the grid shows"
  - "The Import window's \"this guide\" link opens the internal ad-din.atlassian.net wiki; don't click it on camera"
  - "Export downloads a zip with the CSV inside, and the import needs a .csv; Explorer and Excel shots come from the recording PC, not the app"
  - "Excel can rewrite the PrayerDate column (yyyy-MM-dd) in the local date format when it saves a CSV; the import then fails with \"not a valid date (format yyyy-MM-dd ...)\". The demo CSV must keep yyyy-MM-dd; the tip is in [4.3a]"
---

# 04.3 Import and export a prayer timetable

## Goal
Change single days in Manual Update, export the year's timetable to a spreadsheet, and import a full timetable from a CSV file.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->
- Your prayer time calculation set up
- A spreadsheet program, such as Excel

## Covers
- Manual Update Import/Export

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo masjid "Masjid Al-Noor", signed in as its masjid admin, with automatic begin times and Iqamah times for the coming year
- A month to load on camera (for example March) with a Friday row to edit (Isha Iqamah moved to 9:00 PM). The demo clock must sit before the end of that month, so its button opens this year's month: the same year the export and import cover
- An export file for the demo (zip with one CSV), and an edited CSV ready to import (all rows with Fajr, Dhuhr, Asr and Isha Iqamah filled)
- A second CSV with one empty Isha cell in the 12th data row (spreadsheet row 13, under the header), for the error message "Import failed. Row 12: Iqamah times can't be null"

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Before you start
#### [1.1] Opening
**Say:** Some masjids keep their timetable in a spreadsheet. In this video for masjid admins, you'll change single days, export the year, and import a full timetable from a file.
**Show:** Title card: "Import and export a prayer timetable".

#### [1.2]
**Say:** Your calculation settings and Adhan times are already in place. To edit the file, you'll need a spreadsheet program, such as Excel.
**Show:** Opening card from You'll need.

### 2. Open Manual Update
#### [2.1] Where it lives
**Say:** In the sidebar, open **Masjid**, then **Prayer Times**, and choose the **Manual Update Import/Export** tab.
**Show:** Sidebar → Masjid → Prayer Times → "Manual Update Import/Export". The month buttons January to December.

#### [2.2] Load a month
**Say:** Tap a month to load its days. Each row is a date, with the begin and Iqamah times for every prayer.
**Show:** Click "March". The grid fills: Date, Fajr Begins, Fajr Iqamah, Sunrise, Dhuhr Begins and so on; scroll right to the Jumah columns.

### 3. Change a single day
#### [3.1] Edit a time
**Say:** To change one day, tap its time and pick a new one. Here, Isha on one Friday moves later for a special program.
**Show:** Click the Isha Iqamah cell on a Friday row; the time picker opens; set 9:00 PM.

#### [3.2] Locked begin times
**Say:** When Ad-Din calculates your begin times, the begin columns are locked. You can still change any Iqamah.
**Show:** Hover a greyed Fajr Begins cell.

#### [3.3] Save
**Say:** Tap **Save** in the bar above the grid. **Revert** reloads the month and drops changes you haven't saved.
**Show:** Click Save in the grid toolbar. Toast "Successfully updated Prayer Times". Hover Revert.

### 4. Export the year
#### [4.1] Export
**Say:** To work on the whole year in a spreadsheet, tap **Export**. Ad-Din prepares the file and downloads it.
**Show:** Click Export in the same toolbar. Spinner, then the browser's download shows a .zip file.

#### [4.2] Open the file
**Say:** The download is a zip file. Inside is a CSV file with one row per day of the current year.
**Show:** In File Explorer, open the zip and the CSV inside; it opens in Excel with a date column and a column per time.

#### [4.3] Edit it
**Say:** Change the times you need, keep the columns as they are, and save it as a CSV file. Every row needs Fajr, Dhuhr, Asr and Isha Iqamah times.
**Show:** In Excel, change a few Isha values in one week; File → Save As → CSV.
**Caption:** Change the times you need, keep the columns, and save as CSV. Every row needs Fajr, Dhuhr, Asr and Isha Iqamah.

#### [4.3a] Dates
**Say:** Keep the dates in the same form: year, month, then day. Some spreadsheet programs change them when saving. If the import says a date isn't valid, check that column.
**Show:** Spotlight the PrayerDate column in the saved CSV, still in yyyy-MM-dd form (open the CSV in a text editor if Excel reformats it on screen).

### 5. Import the file
#### [5.1] Open Import
**Say:** Back in Ad-Din, with any month open, tap **Import**. The **Import Prayer Times CSV** window opens.
**Show:** Click Import in the grid toolbar. The import window.

#### [5.2] Choose the file
**Say:** Tap **Choose the CSV file** and pick your file. Its name appears in the box.
**Show:** Click the CSV File box; pick the edited CSV; its file name replaces the hint.

#### [5.3] Begin times
**Say:** Under **Begin Time Calculation**, keep **Automatic Calculation** to use Ad-Din's begin times and ignore those in the file. **Current Setup** marks the option you use today.
**Show:** Spotlight the Automatic Calculation card with its "Current Setup" badge.

#### [5.4]
**Say:** Choose **Custom Begin Time Import** only if your file has your own begin times for every day, including sunrise and sunset. This also switches your masjid to entering begin times yourself.
**Show:** Spotlight the Custom Begin Time Import card; keep the link "this guide" out of focus. Leave Automatic Calculation selected.

#### [5.5] Import
**Say:** Tap **Import**. Ad-Din reads the file and tells you when the import is done.
**Show:** Click Import. Spinner, then the toast "Successfully Imported"; the window closes.

#### [5.6] If something's wrong
**Say:** If a row has a problem, the message gives its row number. Fix that line in the file and import again.
**Show:** Repeat with the second demo file: the toast "Import failed. Row 12: Iqamah times can't be null"; the window stays open.

### 6. Check and finish
#### [6.1] Check
**Say:** Open the month again. The new times from your file are there.
**Show:** Click "March" again; the edited Isha times show.

#### [6.2] Close
**Say:** Your timetable is now in Ad-Din. Next, put it on a TV in your masjid, or set Iqamah times for many days at once.
**Show:** End card with two tiles: "04.4 Prayer times on a TV: basic displays" and "04.2 Set iqamah and jumu’ah times".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · critic · 3 changes: second-person opening, new [4.3a] date-format tip (from the validator flag), [6.1] split into check + [6.2] close that explains both end tiles
- 2026-11-03 · validator · checked against master d36d69ed8 · 3 fixes: [5.6] error toast is "Import failed. Row 12: ..." and the window stays open; demo data row 12 = 12th data row; demo clock must keep the March button on the export year. Flag added: Excel date format

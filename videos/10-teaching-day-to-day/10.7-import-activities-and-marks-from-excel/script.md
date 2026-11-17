---
id: "10.7"
title: Import activities and marks from Excel
target: 6:00
prereq:
  - "10.5"
status: scripted
switch: Academic Activity
platform: Web
---

# 10.7 Import activities and marks from Excel

## Goal
Create many academic activities at once from an Excel sheet, then grade a whole class section from a marks sheet, fixing any rows Ad-Din flags.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->
- Microsoft Excel or another program that saves .xlsx files

## Covers
- “Get the sheet”, “Download the marks sheet”, upload and row-by-row checks
- Why import; IDs or names, one row per class section, copying a row
- Optional columns (Status, Notify Students and Parents, Ignore in Calculation, Note, URL), files added later with Edit, the notify limit
- Rows that already exist are skipped (no duplicates)
- Marks import follows Notify to Parent/Guardian; only new or changed marks are saved

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo madrasah "Maple Grove Madrasah" (Premium) with Academic Activity on; the demo account Yusuf Rahman is a Madrasah Admin
- Class "Maktab Level 1", section "A", subject "Fiqh", categories "Homework", "Quizzes", "Tests", term "Autumn Term"
- A prepared activities workbook with three new rows, first saved with one mistake (a missing Score Out Of for a scored category), then corrected
- Activity "Wudu steps worksheet" (score out of 10) with six students and no marks yet
- A prepared marks sheet with one wrong score (12) first, then corrected to 10
- The same activities workbook uploaded a second time, so all three rows show as skipped
- Excel on the recording machine; file names shown, no personal paths

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Save time with Excel
#### [1.1] Opening
**Say:** In this video for madrasah admins and teachers, you'll create many activities at once from an Excel sheet, then grade a whole class section from a marks sheet.
**Show:** Title card: "Import activities and marks from Excel".

#### [1.1a] Why
**Say:** Excel saves time when there's a lot to enter. For example, you can set up a whole term of weekly homework for several sections in one go, or copy marks from a paper sheet instead of typing each one on screen.
**Show:** Excel: an Activities sheet with many rows. Then the Add Marks grid filled in.

#### [1.2]
**Say:** Academic Activity is switched on, and your categories and terms are already set up.
**Show:** Opening card.

### 2. Get the sheet
#### [2.1] Import
**Say:** In the **Admin Portal**, open **Academic Activity**, then **Activity Score Management**. Choose the class, section and subject, and tap **Import**. Teachers find the same button in their **Teacher Portal**.
**Show:** Sidebar → Admin Portal → Academic Activity → Activity Score Management. Pick "Maktab Level 1", "A", "Fiqh". Click "Import": the Import activities window opens.

#### [2.2] Get the sheet
**Say:** Step one is **Get the sheet**. Pick the **Term**, and tick the box to keep only this class section. Then tap **Download sheet**.
**Show:** Spotlight "Get the sheet". Term is "Autumn Term"; tick "Only Maktab Level 1 / A / Fiqh". Click "Download sheet".

#### [2.3] Fill it in
**Say:** The workbook lists this term's activities. Other sheets list the ID number of each class, section, subject, category and term to use in your rows. The Instructions sheet explains each column.
**Show:** Excel: the Activities sheet, then the Categories and Instructions tabs.

#### [2.3a]
**Say:** The category already decides the class, section and subject, so its ID is enough. You can type names instead of ID numbers too. For the same activity in several sections, add one row for each section.
**Show:** Excel: on the Categories sheet, spotlight one Category ID with its class, section and subject. On the Instructions sheet, zoom on the rows "Names instead of IDs" and "One activity, many classes".

#### [2.4]
**Say:** Add one row for each new activity: its category, term, name and due date, plus the weight and score out of for scored categories. Save the file.
**Show:** Type three new rows (sped up). Save.

#### [2.4a] Optional columns
**Say:** The quickest way is to copy an existing row and change it. You can also fill in **Status**, **Note**, **URL**, **Ignore in Calculation** and **Notify Students and Parents**. Files can't be imported; add them afterwards with **Edit**.
**Show:** Excel: copy one row, paste it below and change its name and due date (then undo, so the sheet keeps three rows). Spotlight the optional column headers. Save.

#### [2.4b]
**Say:** A file can hold up to five thousand activities, but only fifty of them can have **Notify Students and Parents** turned on.
**Show:** Excel: Instructions sheet, zoom on the "Limits" row.

### 3. Upload and check
#### [3.1] Upload
**Say:** Step two: **Upload the filled-in sheet**. Choose the file, or drop it in the box. Ad-Din checks every row before anything is saved.
**Show:** Back in Ad-Din. Drag the file onto "Choose an Excel file (.xlsx) or drop it here". "Checking every row…" shows.

#### [3.2] Fix problems
**Say:** If a row has a problem, nothing is imported. The table shows the **Row**, **Column** and **Problem**, so you know exactly what to fix.
**Show:** The result: "3 rows read", "1 problem". Zoom on the table row: Score Out Of is required for the scored category.

#### [3.3]
**Say:** Fix the sheet in Excel, save it, and upload it again.
**Show:** Excel: fill in the missing Score Out Of, save. Ad-Din: choose the file again; "Every row is ready."

#### [3.4] Import
**Say:** Tap **Import**. The button shows how many activities you're adding. Students are added in the background, so the student list can take a moment to appear.
**Show:** Click "Import 3 activities". The note "3 activities were created." shows. Click "Close"; the three activities are in the list.

#### [3.4a] No duplicates
**Say:** If you upload the same sheet again, rows that match an existing activity are skipped, so nothing is created twice. Activities already in Ad-Din are not changed by an import.
**Show:** Click "Import" again and upload the same file: "3 skipped" and "There is nothing new to import: every row matches an activity that already exists." Open "Skipped rows (3)". Click "Cancel".

### 4. Grade from a marks sheet
#### [4.1] Import marks
**Say:** To grade a whole section, tap **Add Mark** on an activity, then **Import marks**.
**Show:** Click "Add Mark" on "Wudu steps worksheet". On Add Marks, click "Import marks": the Import marks window opens.

#### [4.2] Download the marks sheet
**Say:** Step one is **Download the marks sheet**. It lists every student in the section. Tap **Download marks sheet**.
**Show:** Spotlight "Download the marks sheet". Click "Download marks sheet".

#### [4.3]
**Say:** Fill in the Score column. For activities without a score, type Completed, Yes or No. Blank cells are left as they are.
**Show:** Excel: type scores for the six students (one typed as 12). Save.

#### [4.3a]
**Say:** The import uses the **Notify to Parent/Guardian** switch on the Add Marks page, so turn it on first if families should be told. Only new or changed marks are saved.
**Show:** Close the Import marks window with Cancel. Spotlight the "Notify to Parent/Guardian" switch and turn it on. Click "Import marks" again.

#### [4.4] Check and save
**Say:** Upload it. Ad-Din flags any score above the maximum. Fix it, upload again, and tap **Save**. The button shows how many marks will be saved.
**Show:** Upload: the problem "Score 12 must be between 0 and 10." shows. Fix it in Excel, upload again, click "Save 6 marks". "6 marks were saved." shows, and the grid fills in.

### 5. Next
#### [5.1] Done
**Say:** Your activities are created and your class is graded, with every row checked first.
**Show:** The Add Marks grid with all six grades.

#### [5.2] Close
**Say:** Next, video 10.6: Enter activity scores, and video 12.2: Write comments and mark reports ready.
**Show:** End card with two tiles: "10.6 Enter activity scores" and "12.2 Write comments and mark reports ready".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 2:23 → 3:45 narration, 6 scenes added: [1.1a] why, [2.3a] category ID is enough, names instead of IDs, one row per section, [2.4a] copy a row, optional columns, files with Edit, [2.4b] 5,000-row and 50-notify limits (ActivityImportExport.cs MaxRows, MaxNotifyRows), [3.4a] re-imported rows are skipped, [4.3a] marks import follows Notify to Parent/Guardian, only new or changed marks. Checked against origin/master d0604ce7f: no existing line was made wrong

- 2026-11-06 · panel (user, director, writer, PM, PO) · 4 changes: [1.1] says who it's for, [2.1] says teachers have the same Import (teacherPortal/activity/activity.score/list/list.component.html), [3.4] no "wait a minute" idiom, matches the app's note (activity-import-dialog.component.html 105-106), [5.2] end tiles by number and title; demo names from the Maple Grove demo world
- 2026-11-03 · critic · 4 changes: [2.1] names the Admin Portal (matched Show); [2.3] explains the ID sheets plainly, split long sentence; [3.4] and [4.4] "with the number of" rewritten so the counted button labels make sense; "give it a minute" idiom removed
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes (import dialog steps, row checks and server messages, Import marks on Add Marks confirmed)

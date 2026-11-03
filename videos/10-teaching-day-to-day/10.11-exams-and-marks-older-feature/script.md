---
id: "10.11"
title: Exams and marks (older feature)
target: 3:30
prereq:
  - "05.5"
status: scripted
switch: Exam Marks
flags:
  - "Keep or drop? Off by default"
  - "Open decision 'Exam Marks' (series.yaml): scripted as the code works today, with the Services-tab wording that Academic Activity is the recommended replacement. Drop this video if the feature is retired"
  - "'Manage Marks one at a time or in bulk': one at a time = editing cells on Manage Marks; in bulk = Export/Import (admin only). The 'Manage Subject Marks' / 'Manage Multiple Marks' pages (marksManagement/adminPortalAddMark, teacherportal/marks/add) exist in the code but no button reaches them, so they are not scripted. The teacher Manage Marks page has no Import/Export"
---

# 10.11 Exams and marks (older feature)

## Goal
Switch on the older Exams feature if your madrasah still uses it, create an exam with its subjects, and enter marks one at a time or for a whole class from a file.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Exams
- Manage Marks one at a time or in bulk

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo madrasah "Al-Noor Madrasah" (Premium) with Exam Marks switched on; the demo account is a Madrasah Admin
- Class "Maktab Level 1", section "A" with six demo students; subjects "Quran", "Fiqh", "Arabic"
- Exam "Autumn Exam" created on camera with Quran and Fiqh, dates inside the current term
- Marks sheet for Fiqh filled in off camera, ready to import (export and import jobs mocked so the download and the upload finish quickly)

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. The older way to record results
#### [1.1] Opening
**Say:** Before Academic Activity, Ad-Din recorded results with Exams and Manage Marks. This video is for madrasahs that still use that older feature.
**Show:** Title card: "Exams and marks (older feature)".

#### [1.2] Switch it on
**Say:** It's off by default. An admin turns on **Exam Marks** on the Services tab of the organisation settings. For a new setup, Academic Activity is the recommended choice.
**Show:** Sidebar → Admin Portal → Organization Management → Manage on the demo madrasah → Services tab. Zoom on the "Exam Marks" switch and the line in its description "Academic Activity is the recommended replacement for tracking and grading student work." Turn it on.
**Caption:** It's off by default. An admin turns on Exam Marks on the Services tab. For new setups, Academic Activity is recommended.

### 2. Create an exam
#### [2.1] Exams
**Say:** In the **Admin Portal**, open **Exams** and tap **Add**. The **Manage Exam** page opens.
**Show:** Sidebar → Admin Portal → Exams. Click "Add".

#### [2.2] Name and class
**Say:** Pick the class under **Select Class**, type the **Exam Name**, and add a comment.
**Show:** Pick "Maktab Level 1". Type "Autumn Exam" and a short comment.

#### [2.3] Exam Lock
**Say:** Leave **Exam Lock** off for now. Turn it on later, once marks are final, so they can't be changed.
**Show:** Spotlight the Exam Lock switch.

### 3. Add the subjects
#### [3.1] One subject at a time
**Say:** On the right, pick a **Subject**, then its **Date**, **Start Time** and **End Time**, and tap **Add Subject To Exam**.
**Show:** Select "Quran", pick a date, 9:00 to 10:00. Click "Add Subject To Exam". It appears under "Subjects In the Exam".

#### [3.2]
**Say:** Repeat for each subject, then tap **Save**.
**Show:** Add "Fiqh" the same way. Click "Save". The exam shows in the list; expand it to see its subjects.

### 4. Marks one at a time
#### [4.1] Manage Marks
**Say:** To enter marks, open **Manage Marks**. Choose the exam, then the class section and the subject.
**Show:** Sidebar → Admin Portal → Manage Marks. Pick "Autumn Exam", section "A", "Quran". The student list loads.

#### [4.2] Type a mark
**Say:** Double-click a **Mark** cell and type the score. Changes are saved automatically.
**Show:** Double-click the first Mark cell, type 85, press Enter. Repeat for two more students.

#### [4.3] Absent or not applicable
**Say:** Tick **Absent** for a student who missed the exam, or untick **Applicable** if the subject doesn't apply to them.
**Show:** Toggle Absent on one row, and Applicable off on another.

### 5. Marks in bulk
#### [5.1] Export
**Say:** For a whole class at once, choose the subject and tap **Export** to download the marks sheet.
**Show:** Select "Fiqh". Click "Export"; the file downloads.

#### [5.2] Import
**Say:** Fill in the marks, save the file, then tap **Import** and choose it. When the import finishes, choose the subject again to see the marks.
**Show:** Show the filled sheet briefly. Click "Import", choose the file. When the import finishes, pick "Fiqh" again in the filters (the grid doesn't reload by itself): the imported marks show.

### 6. Teachers and families
#### [6.1]
**Say:** Teachers enter marks the same way from **Manage Marks** in their **Teacher Portal**. Parents and students see results under **Exam Marks**.
**Show:** Quick cut: Teacher Portal → Manage Marks. Then Parent Portal → Exam Marks.

### 7. Next
#### [7.1] Close
**Say:** Your exam and its marks are recorded. For new work, see how to set up academic activities, or find exam reports in the reports library.
**Show:** End card with two tiles: "10.5 Set up academic activities" and "12.4 Madrasah reports library".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · critic · 2 changes: [1.2] says where the Services tab is (Say and Caption); [5.2] Say matches Show (reselect the subject after import)
- 2026-11-03 · validator · checked against master d36d69ed8 · 2 fixes: [1.2] Show quotes the Services-tab description as written; [5.2] Show reselects the subject after import (the grid doesn't refresh on its own)

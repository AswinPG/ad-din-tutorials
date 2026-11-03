---
id: "10.3"
title: Set up Hifz assignments
target: 4:15
prereq:
  - "05.5"
  - "05.1"
status: scripted
audience:
  - Madrasah Admin
platform: Web
---

# 10.3 Set up Hifz assignments

## Goal
Map daily Hifz tasks such as Sabaq, Sabaq Para, Dour and Test Para to a class and its sections, choose by Ayah or by Juz, and end a mapping when it's no longer needed.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Mapping Sabaq, Sabaq Para, Dour and Test Para to classes
- by Ayah or by Juz
- end date

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo madrasah "Al-Noor Madrasah" (Premium); the demo account is a Madrasah Admin
- Class "Hifz Boys" with sections "A" and "B", each with five enrolled demo students
- Subject "Hifz" on that class
- Three mappings already in place for "Hifz Boys" (Sabaq Para, Dour, Test Para) so the list shows several rows; one older mapping with an end date in the past, shown as Ended
- The "Sabaq" mapping is created on camera (sections A and B, one student excluded, Daily, Quran by Ayah, no end date)
- Assignment Records with a few marked entries for today

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Daily Hifz tasks
#### [1.1] Opening
**Say:** Hifz assignments tell Ad-Din which daily Quran tasks each class works on, such as Sabaq, Sabaq Para, Dour and Test Para. Teachers then see a task for every student, ready to mark.
**Show:** Title card: "Set up Hifz assignments".

#### [1.2]
**Say:** This is for madrasah admins. Your classes, sections and Hifz subject are already set up.
**Show:** Opening card.

### 2. Open the mappings
#### [2.1] Quran Hifz Assignments
**Say:** In the **Admin Portal**, open **Quran Hifz Assignments**, then the **Hifz Quran Assignment Mapping** tab.
**Show:** Sidebar → Admin Portal → Quran Hifz Assignments. Click the "Hifz Quran Assignment Mapping" tab.

#### [2.2]
**Say:** Each row is one task for one class. **Active** and **Ended** mappings are shaded differently. To add a task, tap **Add**.
**Show:** Spotlight the legend (Active, Ended) and the existing rows. Click "Add": the "Quran Hifz Assignment Mapping" window opens.

### 3. Choose the students
#### [3.1] Class and sections
**Say:** Pick the **Class**, then tick the **Class Section** tiles, or tap **Select All**.
**Show:** Select "Hifz Boys". Click "Select All": sections A and B are ticked.

#### [3.2] Exclude students
**Say:** Every student in those sections is included. To leave someone out, tap **Want to exclude students?**, tick their name, and tap **Done**.
**Show:** Click "Want to exclude students?". The Exclude Students panel opens; tick one student, click "Done". The link now reads "1 student excluded · Edit".

### 4. Name the task
#### [4.1] Subject
**Say:** Choose the **Subject**. It's used for marks and reports.
**Show:** Select "Hifz" in Subject.

#### [4.2] Task name
**Say:** Type the **Assignment Task Name**, for example Sabaq. Teachers and parents see this name.
**Show:** Type "Sabaq" in Assignment Task Name.

### 5. Dates and repeats
#### [5.1] Start and end
**Say:** Set the **Start Date**. The **End Date** is optional; leave it empty and the task runs until you end it.
**Show:** Pick today in Start Date. Spotlight End Date with "No end date" and the note "Leave empty to run indefinitely."

#### [5.2] Recurrence
**Say:** Under **Recurrence**, choose **Daily**, **Weekly** or **Monthly**. For **Weekly**, tap the **Days of Week** it repeats on.
**Show:** Click "Weekly": the day buttons appear; tap M, W, F and show "Will repeat every Monday, Wednesday, Friday." Then click "Daily" for this task.

### 6. By Ayah or by Juz
#### [6.1] Picker Type
**Say:** Next, the **Picker Type**. **Quran by Ayah** records the start and end ayah. **Quran by Juz** records progress through the Juz.
**Show:** Spotlight the two Picker Type options. Select "Quran by Ayah".

#### [6.2]
**Say:** Choose carefully: the picker type can't be changed later. Then tap **Add Mapping**.
**Show:** Zoom on the warning "The picker type you selected can not be changed in the future." Click "Add Mapping". A confirmation message shows and "Sabaq" joins the list.

### 7. The other tasks
#### [7.1] Sabaq Para, Dour and Test Para
**Say:** Add one mapping for each task, such as Sabaq Para, Dour and Test Para. Each can have its own sections, recurrence and picker.
**Show:** The mapping list with Sabaq, Sabaq Para, Dour and Test Para for "Hifz Boys". Spotlight the Recurrence and Picker Type columns.

### 8. End a mapping
#### [8.1] Set an end date
**Say:** To stop a task, select it and tap **Edit**. Set an **End Date** and tap **Save Changes**.
**Show:** Select the "Test Para" row, click "Edit". Pick a date next week in End Date. Click "Save Changes".

#### [8.2]
**Say:** The marks already given are kept. After that date, the task stops appearing for teachers.
**Show:** The list again; spotlight the End Date column for Test Para, then the Ended row's shading.

### 9. Next
#### [9.1] Records
**Say:** Your Hifz tasks are ready. Once teachers start marking, **Assignment Records** shows each student's work by date.
**Show:** Click the "Assignment Records" tab. Click a row: the student's record opens on the right.

#### [9.2] Close
**Say:** Next, see how teachers record daily Hifz progress, and how parents follow it at home.
**Show:** End card with two tiles: "10.4 Record daily Hifz progress" and "14.3 Follow Hifz progress and classwork".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · critic · 0 changes: clear, well ordered, Say and Show match
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes (mapping dialog, exclusions, recurrence, picker lock, end date and records tab confirmed)

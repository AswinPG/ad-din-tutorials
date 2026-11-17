---
id: "10.3"
title: Set up Hifz assignments
target: 6:00
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
- Why map tasks; the mapping list columns (Task, Class, Sections, Recurrence, Picker Type, Start Date, End Date, Excluded)
- Select All and Clear, who sees the students, searching and removing exclusions
- Required fields and their messages; one name per task across classes
- End Date rules and clearing it; Monthly repeat hint
- Choosing Ayah or Juz (example)
- What Edit can and can't change; no delete, end it instead
- Assignment Records filters (date, Status, Class, Class Section, Subject, Teacher)

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo madrasah "Maple Grove Madrasah" (Premium); the demo account Yusuf Rahman is a Madrasah Admin
- Class "Hifz Boys" with sections "A" and "B", each with five enrolled demo students
- Subject "Hifz" on that class
- Three mappings already in place for "Hifz Boys" (Sabaq Para, Dour, Test Para) so the list shows several rows; one older mapping with an end date in the past, shown as Ended
- The "Sabaq" mapping is created on camera (sections A and B, one student excluded, Daily, Quran by Ayah, no end date)
- Assignment Records with a few marked entries for today
- The "Test Para" mapping has one excluded student, so the Excluded column shows 1

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Daily Hifz tasks
#### [1.1] Opening
**Say:** In this video for madrasah admins, you'll set up Hifz assignments: the daily Quran tasks each class works on, such as Sabaq, Sabaq Para, Dour and Test Para.
**Show:** Title card: "Set up Hifz assignments".

#### [1.1a] Why
**Say:** You set each task once for a whole class. After that, every teacher of that class finds the task ready for each student every day, and parents can follow the progress in the app.
**Show:** Split screen: the mapping list on the left, a teacher's daily Hifz list for Hifz Boys A on the right.

#### [1.2]
**Say:** Your classes, sections and Hifz subject are already set up. Once you add a task, teachers see it for every student, ready to mark.
**Show:** Opening card.

### 2. Open the mappings
#### [2.1] Quran Hifz Assignments
**Say:** In the **Admin Portal**, open **Quran Hifz Assignments**, then the **Hifz Quran Assignment Mapping** tab.
**Show:** Sidebar → Admin Portal → Quran Hifz Assignments. Click the "Hifz Quran Assignment Mapping" tab.

#### [2.2]
**Say:** Each row is one task for one class. **Active** and **Ended** mappings are shaded differently. To add a task, tap **Add**.
**Show:** Spotlight the legend (Active, Ended) and the existing rows. Click "Add": the "Quran Hifz Assignment Mapping" window opens.

#### [2.2a] The columns
**Say:** The columns show the **Task**, **Class**, **Sections**, **Recurrence**, **Picker Type**, **Start Date** and **End Date**. **Excluded** counts the students left out. Point at the number to see their names.
**Show:** Close the window with Cancel. Pan across the column headers. Hover the "1" in the Excluded column of Test Para: the tooltip shows the student's name. Click "Add" again.

### 3. Choose the students
#### [3.1] Class and sections
**Say:** Pick the **Class**, then tick the **Class Section** tiles, or tap **Select All**.
**Show:** Select "Hifz Boys". Click "Select All": sections A and B are ticked.

#### [3.1a]
**Say:** **Clear** unticks them all. The teachers of every section you tick see these students for daily grading.
**Show:** Click "Clear", then "Select All" again. Zoom on the note "Teachers of every section you tick see these students for daily grading."

#### [3.2] Exclude students
**Say:** Every student in those sections is included. To leave someone out, tap **Want to exclude students?**, tick their name, and tap **Done**.
**Show:** Click "Want to exclude students?". The Exclude Students panel opens; tick one student, click "Done". The link now reads "1 student excluded · Edit".

#### [3.2a]
**Say:** For example, leave out a student who recites this task with another teacher. In a large class, use **Search student...** to find a name. To bring someone back, tap the cross on their name.
**Show:** Click "1 student excluded · Edit". Type "Ya" in the search box. Spotlight the chip with the excluded name and its cross; don't click it. Click "Done".

### 4. Name the task
#### [4.1] Subject
**Say:** Choose the **Subject**. It's used for marks and reports.
**Show:** Select "Hifz" in Subject.

#### [4.2] Task name
**Say:** Type the **Assignment Task Name**, for example Sabaq. Teachers and parents see this name.
**Show:** Type "Sabaq" in Assignment Task Name.

#### [4.2a]
**Say:** Use the same name for a task in every class, so teachers and parents always see the same word. If a required field is empty when you save, a red message tells you, for example **Task name is required.**
**Show:** Clear the task name, click "Add Mapping": "Task name is required." shows under the field. Type "Sabaq" again.

### 5. Dates and repeats
#### [5.1] Start and end
**Say:** Set the **Start Date**. The **End Date** is optional; leave it empty and the task runs until you end it.
**Show:** Pick today in Start Date. Spotlight End Date with "No end date" and the note "Leave empty to run indefinitely."

#### [5.1a]
**Say:** An end date can't be in the past or before the start date. To remove one, tap the cross in the field.
**Show:** Pick a date next month in End Date; the cross appears. Click it: the field shows "No end date" again.

#### [5.2] Recurrence
**Say:** Under **Recurrence**, choose **Daily**, **Weekly** or **Monthly**. For **Weekly**, tap the **Days of Week** it repeats on.
**Show:** Click "Weekly": the day buttons appear; tap M, W, F and show "Will repeat every Monday, Wednesday, Friday." Then click "Daily" for this task.

#### [5.2a]
**Say:** **Monthly** repeats on the same date as the start date, and the line under it tells you which, for example, on the 17th of every month.
**Show:** Click "Monthly": the hint shows the start date's day of the month. Then click "Daily" again.
**Caption:** Monthly repeats on the same date as the start date, and the line under it tells you which.

### 6. By Ayah or by Juz
#### [6.1] Picker Type
**Say:** Next, the **Picker Type**. **Quran by Ayah** records the start and end ayah. **Quran by Juz** records progress through the Juz.
**Show:** Spotlight the two Picker Type options. Select "Quran by Ayah".

#### [6.1a]
**Say:** For example, you might record the new lesson, Sabaq, by ayah, because it is a few ayahs each day, and a longer revision such as Dour by Juz.
**Show:** Spotlight "Quran by Ayah" with the label "Sabaq", then "Quran by Juz" with the label "Dour" (on-screen callouts).

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

#### [8.1a] What you can edit
**Say:** In **Edit**, you can also change the task name, the class sections and the excluded students. The class, subject, start date, recurrence and picker type stay as they were set.
**Show:** Open Edit on "Test Para" again. Spotlight the greyed Class, Subject and Start Date, then the note "The picker type can't be changed after creation." Click Cancel.

#### [8.1b]
**Say:** There is no delete button, so a task you no longer need gets an end date. To change a locked setting, end the old mapping and add a new one.
**Show:** Spotlight the Add and Edit buttons above the list.

#### [8.2]
**Say:** The marks already given are kept. After that date, the task stops appearing for teachers.
**Show:** The list again; spotlight the End Date column for Test Para, then the Ended row's shading.

### 9. Next
#### [9.1] Records
**Say:** Your Hifz tasks are ready. Once teachers start marking, **Assignment Records** shows each student's work by date.
**Show:** Click the "Assignment Records" tab. Click a row: the student's record opens on the right.

#### [9.1a]
**Say:** Open the filters to narrow the records by date, status, **Class**, **Class Section**, **Subject** or **Teacher**.
**Show:** Expand the Filters panel. Pick today's date and Class "Hifz Boys"; the list narrows. Clear the filters.

#### [9.2] Close
**Say:** Next, video 10.4: Record daily Hifz progress, and video 14.3: Follow Hifz progress and classwork.
**Show:** End card with two tiles: "10.4 Record daily Hifz progress" and "14.3 Follow Hifz progress and classwork".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 2:07 → 4:15 narration, 12 scenes added: [1.1a] why, [2.2a] list columns and the Excluded tooltip, [3.1a] Clear and who sees the students, [3.2a] example, search and remove an exclusion, [4.2a] same spelling and the required-field message, [5.1a] end date rules and clearing it, [5.2a] Monthly hint, [6.1a] Ayah or Juz example, [8.1a] what Edit can change, [8.1b] no delete, [9.1a] records filters. Checked against origin/master d0604ce7f (no changes in this area)

- 2026-11-06 · panel (user, director, writer, PM, PO) · 3 changes: [1.1] says who it's for first (second person), [1.2] says what teachers then see, [9.2] end tiles by number and title; demo names from the Maple Grove demo world
- 2026-11-03 · critic · 0 changes: clear, well ordered, Say and Show match
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes (mapping dialog, exclusions, recurrence, picker lock, end date and records tab confirmed)

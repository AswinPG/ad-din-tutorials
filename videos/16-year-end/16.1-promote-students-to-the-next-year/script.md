---
id: "16.1"
title: Promote students to the next year
target: 3:30
prereq:
  - "06.4"
status: scripted
flags:
  - "Exam Based migration needs an exam with marks from the older Exams feature (Exam Marks switch, off by default; open decision 'Exam Marks' in series.yaml). Scripted as the code works today: Transfer is demonstrated, Exam Based is explained in one scene"
---

# 16.1 Promote students to the next year

## Goal
Move a whole class section up to its next class at the end of the year, either everyone at once or only the students who passed an exam.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Migration

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo madrasah "Al-Noor Madrasah" (Premium); the demo account is a Madrasah Admin
- Class "Maktab Level 1", section "A" with eight active demo students (made-up names and usernames)
- Class "Maktab Level 2" with an empty section "A" (the destination)
- One earlier migration in the list from last year, so the list and the Select Year filter have data
- Optional for scene [4.2]: Exam Marks on with exam "Annual Exam" for Maktab Level 1, to show the Exam Based fields

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Moving up a year
#### [1.1] Opening
**Say:** At the end of the year, your students move up to the next class. In Ad-Din this is called a migration, and it moves a whole class section in one go.
**Show:** Title card: "Promote students to the next year".

#### [1.2]
**Say:** This is for madrasah admins. Your students are enrolled, and next year's class and section already exist.
**Show:** Opening card.

### 2. Open Migration
#### [2.1] Migrations
**Say:** In the **Admin Portal**, open **Migration**. The **Migrations** list shows every move made so far.
**Show:** Sidebar → Admin Portal → Migration. Spotlight last year's row.

#### [2.2]
**Say:** To start a new one, tap **Add Migration**.
**Show:** Click "Add Migration". The "Add Migrations" page opens with three steps.

### 3. Step 1: Classes
#### [3.1] Migrate from
**Say:** Under **Migrate from**, choose the **Current Class** and **Current Class Section**.
**Show:** Pick "Maktab Level 1" and section "A".

#### [3.2] Promote to
**Say:** Under **Promote to**, choose the **Next Class** and **Next Class Section**. Then tap **Next**.
**Show:** Pick "Maktab Level 2" and section "A". Click "Next".

### 4. Step 2: Eligibility
#### [4.1] Transfer
**Say:** Now choose the **Migration Type**. **Transfer** moves every active student in the section. Add a **Reason for migration**, such as end of year.
**Show:** Select "Transfer". Type "End of year promotion" in Reason for migration.

#### [4.2] Exam Based
**Say:** **Exam Based** moves only students who reached the **Passing Marks** in an exam. It uses the older Exams feature, so it only works if your madrasah records exams there.
**Show:** Switch to "Exam Based": Select Exam and Passing Marks (%) appear. Spotlight them, then switch back to "Transfer".
**Caption:** Exam Based moves only students who passed an exam. It needs the older Exams feature.

#### [4.3] Preview
**Say:** Tap **Preview Migration**.
**Show:** Click "Preview Migration".

### 5. Step 3: Preview and migrate
#### [5.1] Check the list
**Say:** Ad-Din lists the students who will move. Check the names before you go on.
**Show:** The student list with Roll Number, First Name and Last Name. Slow scroll.

#### [5.2] Perform Migration
**Say:** Tap **Perform Migration**, then **I understand, Migrate.** to confirm.
**Show:** Click "Perform Migration" above the table. The prompt reads "The selected students will be moved to the new class." Click "I understand, Migrate.".

### 6. The result
#### [6.1] Done
**Say:** The students now belong to their new class section, and the move is saved in the list with the date and who did it.
**Show:** Back on Migrations: the new row with Date, Migrated By, Previous Section, New Class Section and Migration Type.

#### [6.2]
**Say:** Expand a row to see exactly which students moved. Repeat for each class, starting with the oldest so no section is mixed up.
**Show:** Expand the new row: Roll Number, Student and Username.

### 7. Next
#### [7.1] Close
**Say:** Your students are promoted. Next, set up the new term and copy your timetable across.
**Show:** End card with two tiles: "16.2 Start a new term" and "06.5 Move students between sections".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->

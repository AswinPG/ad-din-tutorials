---
id: "05.6"
title: Build the class timetable
target: 4:45
prereq:
  - "05.5"
status: scripted
flags:
  - "Notify parents: the Send Communication switch on Review & Save says it notifies 'students and teachers' by email, but the code (SendClassRoutineChangedNotification) sends an email and a push notification to the students and parents of each saved section, not teachers. The script describes what the code does; the switch text should be fixed."
  - "Who needs a seat? (open): Admin Portal → Class Routine opens only when the admin has Premium themselves (the page guard checks the user's own Premium, not the organisation's seats). The demo admin must have Premium."
---

# 05.6 Build the class timetable

## Goal
Use the Schedule Builder to create a weekly timetable for your classes, with breaks, subjects and teachers, and let families know.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Schedule Builder: Setup → Period Structure → Assign Subjects → Review & Save
- teacher clashes, breaks, notify parents

## Demo data
- Demo madrasah "Al-Noor Madrasah"; the demo admin has Premium
- Enabled term "Term 1" with no routine yet
- Class "Hifz Boys" with sections "Hifz A" and "Hifz B" (no routine yet)
- Class "Maktab Level 1" whose "Section B" already has a routine in Term 1 (for the "already has a routine" mark)
- Subjects in Hifz Boys: "Quran Hifz" (teachers Ibrahim Yusuf, Amina Saleh), "Tajweed" (Amina Saleh), "Islamic Studies" (Ibrahim Yusuf)
- Working days Monday to Friday
- Periods built on camera: Period 1 4:00–4:45 pm, Salat Break 4:45–5:00 pm, Period 2 5:00–5:45 pm, Short Break 5:45–5:55 pm, Period 3 5:55–6:40 pm
- For the clash demo: Ibrahim Yusuf placed in Hifz A, Monday Period 1, then picked again in Hifz B at the same time

## Script

### 1. Before you start
#### [1.1] Opening
**Say:** The Schedule Builder makes a weekly timetable for many classes at once: the periods, the breaks, and who teaches what. Let's build one.
**Show:** Title card: "Build the class timetable".

#### [1.2]
**Say:** Your term is enabled, and your classes, sections and subjects with their teachers are already set up.
**Show:** Opening card from You'll need.

### 2. Open the builder
#### [2.1]
**Say:** In the sidebar, open **Admin Portal**, then **Class Routine**, and tap the **Build Schedule** tab. There are four steps: **Setup**, **Period Structure**, **Assign Subjects** and **Review & Save**.
**Show:** Sidebar → Admin Portal → Class Routine. Click "Build Schedule". Spotlight the four steps of the stepper.
**Caption:** Class Routine → Build Schedule. Four steps: Setup, Period Structure, Assign Subjects, Review & Save.

### 3. Setup
#### [3.1] Term and classes
**Say:** Choose the **Term**. Only enabled terms are listed. Then, under **Classes & Sections**, tick each class and the sections to include.
**Show:** Pick "Term 1". Tick "Hifz Boys"; its sections appear; click "All" to select Hifz A and Hifz B.

#### [3.2]
**Say:** If a section already has a routine in this term, it shows a calendar mark. Saving replaces that routine.
**Show:** Tick "Maktab Level 1": "Section B" shows the calendar mark. Click it: the replace warning appears. Untick Maktab Level 1.

#### [3.3] Working days
**Say:** Under **Working Days**, tap **Weekdays**, or tap the days you teach. The summary shows what will be created. Tap **Next**.
**Show:** Click "Weekdays". Spotlight "Will create: 1 class(es) × 2 section(s) × 5 day(s)". Click "Next".

### 4. Period Structure
#### [4.1] Periods
**Say:** Now define the time slots for each day. They apply to every class you picked. Each row is a **Subject** period or a **Break**, with a **Start** and **End** time.
**Show:** The Period Structure table. Set row 1: Subject, 4:00 pm to 4:45 pm. Spotlight "Period 1".

#### [4.2] Breaks
**Say:** For a break, choose the **Break Type**: **Short Break**, **Lunch Break** or **Salat Break**. Tap **Add Period** for each new row.
**Show:** Click "Add Period"; set Type to Break, Break Type "Salat Break", 4:45 to 5:00 pm. Add the remaining rows the same way.

#### [4.3]
**Say:** If two rows overlap, or a period ends before it starts, Ad-Din tells you which row to fix. Tap **Next**.
**Show:** Click "Next". The Assign Subjects step opens.

### 5. Assign subjects
#### [5.1] Fill the grid
**Say:** Pick a section at the top. For each period and day, choose the subject, then the teacher. Only that subject's teachers are listed.
**Show:** "Hifz Boys - Hifz A" selected. Monday Period 1: pick "Quran Hifz", then "Ibrahim Yusuf". Fill a few more cells.

#### [5.2] Copy
**Say:** Save time with **Copy Day**, which copies one day to others, and **Copy to Sections**, which copies this section's week to another section.
**Show:** Click "Copy Day"; Source Day Monday, tick the other days; click "Copy". The grid fills.

#### [5.3] Teacher clashes
**Say:** Ad-Din won't let a teacher be in two places at once. A teacher who is already teaching is marked busy, and a clash turns the cell red with the reason.
**Show:** Select "Hifz B". Monday Period 1: pick "Quran Hifz"; the teacher list shows "Ibrahim Yusuf · busy (…)". Pick him: the cell turns red, "Ibrahim Yusuf is teaching Hifz Boys - Hifz A …". The badge on the Hifz B tab shows 1.

#### [5.4]
**Say:** Fix every clash to continue. The counter shows how many cells are filled, and how many have no teacher yet. Tap **Next**.
**Show:** Change the teacher to "Amina Saleh"; the red goes away. Spotlight "cells filled". Click "Next".

### 6. Review and save
#### [6.1] Review
**Say:** Check the totals and each section's timetable. Empty cells are skipped. Cells without a teacher are saved as unassigned.
**Show:** The four totals. Expand "Class Hifz Boys — Section Hifz A" to show its week.

#### [6.2] Notify families
**Say:** Turn on **Send Communication** to tell the students and parents in these sections about their new timetable, by email and app notification.
**Show:** Turn the "Send Communication" switch on. Keep the shot on the switch; don't zoom on its description.

#### [6.3]
**Say:** Tap **Submit**. Ad-Din confirms the class routine is saved, and takes you to the **Routines** tab.
**Show:** Click "Submit". The "Class routine saved successfully." message; close it. The Routines tab shows the new timetables.

### 7. Next
#### [7.1] Done
**Say:** Your timetable is live. To change a few periods later, edit them on the **Routines** tab, and tick **Notify parents & students** before you save.
**Show:** Routines tab with Term 1. Change one period's teacher; the save bar appears. Spotlight "Notify parents & students", then click "Discard".

#### [7.2]
**Say:** Next, add your holidays and set up substitute teachers. You can also see the timetable the way parents do.
**Show:** End card with two tiles: "05.7 Holidays and substitute teachers" and "05.8 Your public program pages".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->

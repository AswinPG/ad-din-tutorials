---
id: "05.6"
title: Build the class timetable
target: 7:00
prereq:
  - "05.5"
status: scripted
flags:
  - "Notify parents: the Send Communication switch on Review & Save says it notifies 'students and teachers' by email, but the code (SendClassRoutineChangedNotification) sends an email and a push notification to the students and parents of each saved section, not teachers. The script describes what the code does; the switch text should be fixed."
  - "Who needs a seat? (decided 2026-11-03: intended): Admin Portal → Class Routine opens only when the admin has Premium themselves (the page guard checks the user's own Premium, not the organisation's seats). The demo admin must have Premium."
---

# 05.6 Build the class timetable

## Goal
Use the Schedule Builder to create a weekly timetable for your classes, with breaks, subjects and teachers, and let families know.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Schedule Builder: Setup → Period Structure → Assign Subjects → Review & Save
- teacher clashes, breaks, notify parents
- why: families and teachers see the week; the other Class Routine tabs (Routines, View By Class, View By Teacher, My Routine, Copy to Terms, pointer to 16.2)
- Setup: Search classes, Select All Classes; Working Days All and Clear, a weekend example; Back
- Copy Day and Copy to Sections panels; Clear Tab
- Send Communication starts off; when to turn it on
- Routines tab: change a period, pin two classes to compare, Export, Build schedule

## Demo data
- Demo madrasah "Maple Grove Madrasah"; the demo admin has Premium
- Enabled term "Term 1" with no routine yet
- Class "Hifz Boys" with sections "Hifz A" (class teacher Bilal Hussain) and "Hifz B" (class teacher Fatima Siddiqui), no routine yet
- Class "Maktab Level 1" whose "Section B" already has a routine in Term 1 (for the "already has a routine" mark)
- Subjects in Hifz Boys: "Quran Hifz" (teachers Bilal Hussain, Fatima Siddiqui), "Tajweed" (Fatima Siddiqui), "Islamic Studies" (Bilal Hussain)
- Working days Monday to Friday
- Periods built on camera: Period 1 4:00–4:45 pm, Salat Break 4:45–5:00 pm, Period 2 5:00–5:45 pm, Short Break 5:45–5:55 pm, Period 3 5:55–6:40 pm
- For the clash demo: Bilal Hussain placed in Hifz A, Monday Period 1, then picked again in Hifz B at the same time
- For chapter 7: the saved Term 1 timetables of "Hifz Boys - Hifz A" and "Hifz Boys - Hifz B", and "Maktab Level 1 - Section B"

## Script

### 1. Before you start
#### [1.1] Opening
**Say:** In this video for madrasah admins, you'll build a weekly timetable with the Schedule Builder: the periods, the breaks, and who teaches what, for many classes at once.
**Show:** Title card: "Build the class timetable".

#### [1.2]
**Say:** Your term is enabled, and your classes, sections and subjects with their teachers are already set up.
**Show:** Opening card from You'll need.

#### [1.2a] Why it matters
**Say:** A timetable tells everyone what is taught, when, and by whom. Teachers see their own week, parents see their child's class week, and Ad-Din uses it to stop a teacher from being in two places at once.
**Show:** Back on the opening card; then a quick cut of a saved week grid on the View By Class tab.

### 2. Open the builder
#### [2.1]
**Say:** In the sidebar, open **Admin Portal**, then **Class Routine**, and tap the **Build Schedule** tab. There are four steps: **Setup**, **Period Structure**, **Assign Subjects** and **Review & Save**.
**Show:** Sidebar → Admin Portal → Class Routine. Click "Build Schedule". Spotlight the four steps of the stepper.
**Caption:** Class Routine → Build Schedule. Four steps: Setup, Period Structure, Assign Subjects, Review & Save.

#### [2.1a] The other tabs
**Say:** The other tabs show what you've saved. **Routines** lists your timetables for editing. **View By Class** and **View By Teacher** show one week at a time, and **My Routine** shows your own. **Copy to Terms** copies a timetable to a new term, as video 16.2 shows.
**Show:** Spotlight each tab in turn: Routines, View By Class, View By Teacher, My Routine, Copy to Terms. Stay on Build Schedule.

### 3. Setup
#### [3.1] Term and classes
**Say:** Choose the **Term**. Only enabled terms are listed. Then, under **Classes & Sections**, tick each class and the sections to include.
**Show:** Pick "Term 1". Tick the box next to "Hifz Boys"; its sections appear, not yet selected ("0/2 sections"); click "All" to select Hifz A and Hifz B. (Clicking the class name instead selects all its sections at once; don't then click "All", which clears them.)

#### [3.1a]
**Say:** With many classes, type in **Search classes** to find one. **Select All Classes** picks every class at once, when you build the whole madrasah's timetable together.
**Show:** Type "Hif" in Search classes, then clear it. Spotlight "Select All Classes" without clicking it.

#### [3.2]
**Say:** If a section already has a routine in this term, it shows a calendar mark. Saving replaces that routine.
**Show:** Tick "Maktab Level 1": "Section B" shows the calendar mark. Click it: the replace warning appears. Untick Maktab Level 1.

#### [3.3] Working days
**Say:** Under **Working Days**, tap **Weekdays**, or tap the days you teach. The summary shows what will be created. Tap **Next**.
**Show:** Click "Weekdays". Spotlight "Will create: 1 class(es) × 2 section(s) × 5 day(s)". Click "Next".

#### [3.3a] Weekend classes
**Say:** **All** picks every day, and **Clear** removes them all. For a weekend madrasah, tap **Clear**, then **Saturday** and **Sunday**. On any step after this one, **Back** returns to the step before.
**Show:** Quick cut, before "Next": click "Clear", then "Saturday" and "Sunday"; the summary shows 2 day(s). Click "Weekdays" again. Later, on Period Structure, spotlight "Back".
**Caption:** All picks every day; Clear removes them. Weekend madrasah: Clear, then Saturday and Sunday.

### 4. Period Structure
#### [4.1] Periods
**Say:** Now define the time slots for each day. They apply to every class you picked. To begin, Ad-Din fills in a sample day. Each row is a **Subject** period or a **Break**, with a **Start** and **End** time.
**Show:** The Period Structure table opens with six sample rows (Period 1 8:00–8:45 am, Period 2, Short Break, Period 3, Lunch Break, Period 4). Set row 1 to 4:00 pm–4:45 pm. Spotlight "Period 1".

#### [4.2] Breaks
**Say:** For a break, choose the **Break Type**: **Short Break**, **Lunch Break** or **Salat Break**. Tap **Add Period** for each new row, or the delete icon to remove one.
**Show:** Row 2: set Type to Break, Break Type "Salat Break", 4:45 to 5:00 pm. Set the next rows to the demo times (Period 2, Short Break, Period 3) and delete the last two sample rows with the bin. Click "Add Period" once to show a new row, then delete it. Pre-edit the rows off camera if the shot runs long.

#### [4.3]
**Say:** If two rows overlap, or a period ends before it starts, Ad-Din tells you which row to fix. Tap **Next**.
**Show:** Click "Next". The Assign Subjects step opens.

### 5. Assign subjects
#### [5.1] Fill the grid
**Say:** Pick a section at the top. For each period and day, choose the subject, then the teacher. Only that subject's teachers and the section's class teacher are listed.
**Show:** "Hifz Boys - Hifz A" selected. Monday Period 1: pick "Quran Hifz", then "Bilal Hussain". Fill a few more cells.

#### [5.2] Copy
**Say:** To save time, **Copy Day** copies one day to other days, and **Copy to Sections** copies this section's week to another section.
**Show:** Click "Copy Day"; Source Day Monday, tick the other days; click "Copy". The grid fills. Spotlight "Copy to Sections" without clicking it.

#### [5.2a] How copying works
**Say:** In **Copy Day**, choose the **Source Day**, tick the **Target Days**, and tap **Copy**. In **Copy to Sections**, tick the **Target(s)** and tap **Copy**. Then change only what differs, such as a teacher.
**Show:** Replay the Copy Day panel: spotlight Source Day, Target Days and Copy. Open "Copy to Sections": spotlight Source, Target(s) and Copy; close it with its cross.

#### [5.2b] Start again
**Say:** **Clear Tab** empties this section's whole grid, after you confirm. Use it if you want to start the section again.
**Show:** Spotlight "Clear Tab" without clicking it.

#### [5.3] Teacher clashes
**Say:** Ad-Din won't let a teacher teach two classes at the same time. A teacher who is already teaching is marked busy, and a clash turns the cell red with the reason.
**Show:** Select "Hifz B". Monday Period 1: pick "Quran Hifz"; Ad-Din picks "Fatima Siddiqui", the only free teacher. Open the teacher list: "Bilal Hussain · busy (…)". Pick him: the cell turns red, "Bilal Hussain is teaching Hifz Boys - Hifz A …". The badge on the Hifz B tab shows 1.

#### [5.4]
**Say:** Fix every clash to continue. The counter shows how many cells are filled, and how many have no teacher yet. Tap **Next**.
**Show:** Change the teacher to "Fatima Siddiqui"; the red goes away. Spotlight "cells filled". Click "Next".

### 6. Review and save
#### [6.1] Review
**Say:** Check the totals and each section's timetable. Empty cells are skipped. Cells without a teacher are saved as unassigned.
**Show:** The four totals. Expand "Class Hifz Boys — Section Hifz A" to show its week.

#### [6.2] Notify families
**Say:** Turn on **Send Communication** to tell the students and parents in these sections about their new timetable, by email and app notification.
**Show:** Turn the "Send Communication" switch on. Keep the shot on the switch; don't zoom on its description.

#### [6.2a]
**Say:** The switch starts off. Turn it on when the timetable is final, so families get one message, not one for every change you try.
**Show:** Keep the switch on; spotlight it once more.

#### [6.3]
**Say:** Tap **Submit**. Ad-Din confirms the class routine is saved, and takes you to the **Routines** tab.
**Show:** Click "Submit". The "Class routine saved successfully." message; close it. The Routines tab shows the new timetables.

### 7. Next
#### [7.1] Done
**Say:** Your timetable is saved. To change a few periods later, edit them on the **Routines** tab, and tick **Notify parents & students** before you save.
**Show:** Routines tab with Term 1. Change one period's teacher; the save bar appears. Spotlight "Notify parents & students", then click "Discard".

#### [7.1a] On the Routines tab
**Say:** On **Routines**, tap a period to change its subject or teacher, or its time to move it. Pin two classes to compare them side by side. **Export** downloads the timetables, and **Build schedule** opens the builder again.
**Show:** Spotlight the hint above the cards. Click the pin on "Hifz Boys · Hifz A" and on "Hifz Boys · Hifz B": the "Comparing" view shows them side by side. Click "Stop comparing". Spotlight "Export" and "Build schedule".

#### [7.2]
**Say:** Next, video 05.7: Holidays and substitute teachers. To see the timetable the way parents do, watch video 05.8: Your public program pages.
**Show:** End card with two tiles: "05.7 Holidays and substitute teachers" and "05.8 Your public program pages".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 2:57 → 4:43 narration, 8 scenes added: why ([1.2a]), the other Class Routine tabs ([2.1a]), Search classes and Select All Classes ([3.1a]), All, Clear, a weekend example and Back ([3.3a]), how the copy panels work ([5.2a]), Clear Tab ([5.2b]), when to turn on Send Communication ([6.2a]), editing, comparing and Export on the Routines tab ([7.1a])
- 2026-11-06 · panel (user, director, writer, PM, PO) · 5 changes: [4.1] no "starts you with"; [4.2] "delete icon" not "bin"; [5.3] "teach two classes at the same time" (no idiom); [7.1] "saved" not "live"; demo names match the demo world
- 2026-11-03 · manager · decisions via chat · 'Who needs a seat?' decided (own-Premium check is intended): flag wording updated; script unchanged
- 2026-11-03 · critic · 4 changes: [1.1] second-person opening; [5.2] Show also spotlights Copy to Sections, which the Say names; [5.2] plainer wording; [7.2] end card by number and title
- 2026-11-03 · validator · checked against master d36d69ed8 · 5 fixes: [3.1] class checkbox vs name selects sections differently; [4.1]/[4.2] Period Structure starts with six sample rows to edit/delete; [5.1] teacher list = subject teachers + section class teacher; [5.3] the only free teacher is auto-picked; demo data: class teachers for Hifz A/B

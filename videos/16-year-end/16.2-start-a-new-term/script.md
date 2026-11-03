---
id: "16.2"
title: Start a new term
target: 3:45
prereq:
  - "05.6"
status: scripted
flags:
  - "Chapter 5 (Staff Attendance class routine term) depends on the open decision 'Is Staff Attendance live?' (series.yaml); cut chapter 5 if Staff Attendance isn't live when this is published"
---

# 16.2 Start a new term

## Goal
Add the next academic term, copy your class timetable into it, and, if you use Staff Attendance, point it at the new term's timetable.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- New term, Duplicate Class Routines, timetable term for Staff Attendance

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo madrasah "Al-Noor Madrasah" (Premium); the demo account is a Madrasah Admin
- Term "Autumn Term" (current, enabled) with a full class routine for Class "Maktab Level 1" sections "A" and "B" (teachers Yusuf Patel and Aisha Rahman)
- Term "Spring Term" added on camera, starting the day after Autumn Term ends; no routine yet
- Staff Attendance switched on, with "Class routines come from" set to Autumn Term at the start

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Ready for the next term
#### [1.1] Opening
**Say:** When a term ends, you get the next one ready in Ad-Din: add the new term, then copy your class timetable into it, so nothing has to be rebuilt by hand.
**Show:** Title card: "Start a new term".

#### [1.2]
**Say:** This is for madrasah admins. Your current term and its class timetable are already set up.
**Show:** Opening card.

### 2. Add the new term
#### [2.1] Terms
**Say:** In the **Admin Portal**, open **Terms Management**, and tap **Add Term**.
**Show:** Sidebar → Admin Portal → Terms Management. The Terms list shows Autumn Term. Click "Add Term".

#### [2.2] Name and dates
**Say:** Type the **Name**, pick the **Start** and **End** dates, and tap **Add Term**.
**Show:** Type "Spring Term". Pick the start and end dates. Click "Add Term" in the sheet. Spring Term joins the list.

#### [2.3] Old terms
**Say:** Keep the old term as it is. Its attendance, marks and reports stay linked to it. If you ever want it out of the way, set its **Status** to **Disabled** rather than deleting it.
**Show:** Click the Autumn Term row: the Edit Term sheet opens. Spotlight Status (Enabled / Disabled). Click "Cancel".

### 3. Copy the timetable
#### [3.1] Copy to Terms
**Say:** Next, open **Class Routine** and go to the **Copy to Terms** tab. The page is called **Duplicate Class Routines**.
**Show:** Sidebar → Admin Portal → Class Routine. Click the "Copy to Terms" tab. Spotlight the heading "Duplicate Class Routines".

#### [3.2] Source and scope
**Say:** Under **Source Term**, pick the term you're copying from. For **Copy Scope**, choose **Entire Term**, or **Specific Class** to copy one section.
**Show:** Select "Autumn Term" in Source Term. Click "Entire Term". The note "Found 24 routine entries" appears.

#### [3.3] Target
**Say:** Under **Target Term**, pick the new term, then tap **Perform Copy**.
**Show:** Select "Spring Term" in Target Term. Click "Perform Copy".

#### [3.4] Confirm
**Say:** Ad-Din asks you to confirm, because the copy replaces any timetable those sections already have in the new term. Tap **Proceed**.
**Show:** The "Confirm Copy" dialog. Click "Proceed". The message "Copy process completed successfully!" shows.

### 4. If teachers clash
#### [4.1]
**Say:** If a teacher would be in two classes at once in the new term, nothing is copied. Ad-Din lists the clashes so you can fix them on the **Routines** tab and try again.
**Show:** Quick cut of the red notice "Nothing was copied. These teachers would be in two places at once in the target term", then back.

### 5. Staff Attendance
#### [5.1] Shifts
**Say:** If you use Staff Attendance, teachers' working hours come from the class timetable. Open **Staff Attendance**, then **Shifts**, and the **Class routine term** tab.
**Show:** Sidebar → Admin Portal → Staff Attendance. Click "Shifts" in the rail, then the "Class routine term" tab.

#### [5.2] Choose the term
**Say:** **Class routines come from** decides which term's timetable is used. Choose the new term once it starts, or leave it on **Automatic** to follow whichever term is running.
**Show:** Open the selector; spotlight "Automatic" and the terms. Pick "Spring Term": "Saved" shows, and the line below gives its dates and says it is not in force today. Set it back to "Automatic" ("Saved" again).

### 6. Next
#### [6.1] Done
**Say:** Your new term is ready, with its timetable in place. Check the **Routines** tab for any changes the new term needs.
**Show:** Class Routine → Routines tab, Spring Term selected, showing the copied timetable.

#### [6.2] Close
**Say:** Next, promote your students to their new classes, or adjust the timetable for the new term.
**Show:** End card with two tiles: "16.1 Promote students to the next year" and "05.6 Build the class timetable".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · manager · decisions via chat · Planned features not in the app dropped: alumni removed from Covers, alumni flag removed
- 2026-11-03 · critic · 1 change: [3.1] "This is Duplicate Class Routines" reworded so the heading is clearly the page name
- 2026-11-03 · validator · checked against master d36d69ed8 · 1 fix: [5.2] Show matches the Say (Spring Term isn't in force yet, so the line says so and the selector goes back to Automatic)

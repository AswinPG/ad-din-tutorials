---
id: "16.2"
title: Start a new term
target: 5:30
prereq:
  - "05.6"
status: scripted
---

# 16.2 Start a new term

## Goal
Add the next academic term, copy your class timetable into it, and, if you use Staff Attendance, point it at the new term's timetable.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- New term, Duplicate Class Routines, timetable term for Staff Attendance
- why: copying saves rebuilding the timetable
- Terms list: tap a row to edit, Status colours, date check
- Delete warning and Disable Instead
- Copy Scope Specific Class (Class, Section), "No routines found", same-term check
- copying sends no message to teachers
- Automatic vs a chosen term; shift templates need the new term (pointer to 13.3)

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo madrasah "Maple Grove Madrasah" (Premium); the demo account is a Madrasah Admin
- Term "Autumn Term" (current, enabled) with a full class routine for Class "Maktab Level 1" sections "A" and "B" (teachers Omar Khalid and Fatima Siddiqui)
- Term "Spring Term" added on camera, starting the day after Autumn Term ends; no routine yet
- Staff Attendance switched on, with "Class routines come from" set to Autumn Term at the start
- One shift template, "Office hours", linked to Autumn Term only ([5.3])

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Ready for the next term
#### [1.1] Opening
**Say:** When a term ends, you get the next one ready in Ad-Din: add the new term, then copy your class timetable into it, so you don't have to build it again.
**Show:** Title card: "Start a new term".

#### [1.2]
**Say:** This is for madrasah admins. Your current term and its class timetable are already set up.
**Show:** Opening card.

#### [1.2a] Why copy
**Say:** Most classes keep the same timetable from one term to the next. When you copy it, you change only what’s different, such as a new teacher.
**Show:** Opening card stays; then a quick cut of a full week on the Routines tab.

### 2. Add the new term
#### [2.1] Terms
**Say:** In the **Admin Portal**, open **Terms Management**, and tap **Add Term**.
**Show:** Sidebar → Admin Portal → Terms Management. The Terms list shows Autumn Term. Click "Add Term".

#### [2.2] Name and dates
**Say:** Type the **Name**, pick the **Start** and **End** dates, and tap **Add Term**.
**Show:** Type "Spring Term". Pick the start and end dates. Click "Add Term" in the sheet. Spring Term joins the list.

#### [2.2a] Checks
**Say:** If the name is empty, or the end comes before the start, the box turns red and nothing is saved. In the list, an enabled term’s status shows in green and a disabled one in red. To change a term, tap its row.
**Show:** Earlier take: an end date before the start; the date boxes turn red. Then the list: spotlight the Status column and the hint "Select term to edit".

#### [2.3] Old terms
**Say:** Keep the old term. Its attendance, marks and reports stay linked to it. Only enabled terms can be copied from, so copy its timetable first. Then, to hide it, set its **Status** to **Disabled** instead of deleting it.
**Show:** Click the Autumn Term row: the Edit Term sheet opens. Spotlight Status (Enabled / Disabled). Click "Cancel".

#### [2.3a] If you tap Delete
**Say:** If you tap **Delete**, Ad-Din warns that this can’t be reversed and that the term’s history will be lost. It offers **Disable Instead**, which is almost always the better choice.
**Show:** Open Autumn Term again, click "Delete": the "Confirm Delete" window. Spotlight "Delete Term" and "Disable Instead", then close it with the cross and click "Cancel".

### 3. Copy the timetable
#### [3.1] Copy to Terms
**Say:** Next, open **Class Routine** and go to the **Copy to Terms** tab. The page is called **Duplicate Class Routines**.
**Show:** Sidebar → Admin Portal → Class Routine. Click the "Copy to Terms" tab. Spotlight the heading "Duplicate Class Routines".

#### [3.2] Source and scope
**Say:** Under **Source Term**, pick the term you're copying from. For **Copy Scope**, choose **Entire Term**, or **Specific Class** to copy one section.
**Show:** Select "Autumn Term" in Source Term. Click "Entire Term". The note "Found 24 routine entries" appears.

#### [3.2a] One section
**Say:** With **Specific Class**, choose the **Class** and **Section** to copy. If that section has no timetable in the source term, you see **No routines found for the selected criteria.**
**Show:** Click "Specific Class"; pick "Maktab Level 1" and section "A"; the count changes. Click "Entire Term" again; "Found 24 routine entries".

#### [3.3] Target
**Say:** Under **Target Term**, pick the new term, then tap **Perform Copy**.
**Show:** Select "Spring Term" in Target Term. Click "Perform Copy".

#### [3.4] Confirm
**Say:** Ad-Din asks you to confirm, because the copy replaces any timetable those sections already have in the new term. Tap **Proceed**.
**Show:** The "Confirm Copy" dialog. Click "Proceed". The message "Copy process completed successfully!" shows.

#### [3.4a]
**Say:** Both lists show only enabled terms, and the source and target must be different. Copying sends no message to your teachers, so tell them when the new timetable is ready.
**Show:** Open Target Term: only enabled terms are listed. Close it.

### 4. If teachers clash
#### [4.1]
**Say:** If a teacher would teach two classes at the same time in the new term, nothing is copied. Ad-Din lists the clashes so you can fix them on the **Routines** tab and try again.
**Show:** Quick cut of the red notice; zoom on its first line, "Nothing was copied. These teachers would be in two places at once in the target term" (the notice's last line names an "Overview tab", which is the Routines tab; keep it out of the zoom), then back.

### 5. Staff Attendance
#### [5.1] Shifts
**Say:** If you use Staff Attendance, teachers' working hours come from the class timetable. Open **Staff Attendance**, then **Shifts**, and the **Class routine term** tab.
**Show:** Sidebar → Admin Portal → Staff Attendance. Click "Shifts" in the rail, then the "Class routine term" tab.

#### [5.2] Choose the term
**Say:** **Class routines come from** decides which term's timetable is used. Choose the new term once it starts, or leave it on **Automatic** to follow whichever term is running.
**Show:** Open the selector; spotlight "Automatic" and the terms. Pick "Spring Term": "Saved" shows, and the line below gives its dates and says it is not in force today. Set it back to "Automatic" ("Saved" again).

#### [5.2a] Which to choose
**Say:** With **Automatic**, each day uses whichever enabled term covers it. With a chosen term, days outside its dates have no timetable shift. Teachers’ shifts are rebuilt from the timetable every night.
**Show:** Zoom on the line under the selector while Automatic is set: "Each day uses whichever enabled term covers it…".

#### [5.3] Shift templates
**Say:** Staff on a shift template only get shifts on dates inside its terms. On the **Shift templates** tab, tap **Edit** on each template, tick the new term under **Terms**, and tap **Save**. Video 13.3 covers templates.
**Show:** Click the "Shift templates" tab. On "Office hours" click "Edit"; in Terms tick "Spring Term" next to Autumn Term; click "Save". The card shows "Terms: Autumn Term, Spring Term".
**Caption:** Shift templates: tap Edit, tick the new term under Terms, and tap Save (video 13.3).

### 6. Next
#### [6.1] Done
**Say:** Your new term is ready, with its timetable in place. Check the **Routines** tab for any changes the new term needs.
**Show:** Class Routine → Routines tab, Spring Term selected, showing the copied timetable.

#### [6.2] Close
**Say:** Next, video 16.1: Promote students to the next year. To change the new term's timetable, watch video 05.6: Build the class timetable.
**Show:** End card with two tiles: "16.1 Promote students to the next year" and "05.6 Build the class timetable".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 2:10 → 3:48 narration, 7 scenes added: why copy, term checks and Status colours, the Delete warning and Disable Instead, Specific Class and "No routines found", enabled terms only and no message to teachers, Automatic vs a chosen term (rebuilt nightly), shift templates need the new term (13.3)
- 2026-11-06 · panel (user, director, writer, PM, PO) · 6 changes: [1.1] no "by hand"; [2.3] copy before disabling (Copy to Terms lists enabled terms only, copy-term-routine.component.ts 81); [4.1] no idiom, Show zooms on the notice's first line (its "Overview tab" text is wrong); [6.2] end tiles by number and title; demo names match the demo world
- 2026-11-03 · manager · decisions via chat · Staff Attendance is live: chapter 5 'cut if not live' flag removed; chapter 5 stays
- 2026-11-03 · manager · decisions via chat · Planned features not in the app dropped: alumni removed from Covers, alumni flag removed
- 2026-11-03 · critic · 1 change: [3.1] "This is Duplicate Class Routines" reworded so the heading is clearly the page name
- 2026-11-03 · validator · checked against master d36d69ed8 · 1 fix: [5.2] Show matches the Say (Spring Term isn't in force yet, so the line says so and the selector goes back to Automatic)

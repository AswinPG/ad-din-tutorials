---
id: "13.3"
title: Set up staff and shifts
target: 4:30
prereq:
  - "13.2"
  - "05.6"
status: scripted
flags:
  - "Is Staff Attendance live? (series.yaml decision) Confirm before publishing"
---

# 13.3 Set up staff and shifts

## Goal
Give every staff member a shift, from a shift template or the class routine, plus a zone and a tracking mode, so they're ready to record their time.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Staff page (type, zone, tracking, Ready), shift templates, terms, Link staff, timetable-based shifts

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo madrasah with Staff Attendance on, zone "Main building", and a current academic term "Autumn Term" plus the next term "Spring Term"
- Class routine for the current term with teacher Yusuf Patel
- Staff: Yusuf Patel (Teacher; Shift source already "Class routine", so the Link staff picker greys him out), Maryam Ali (Staff, office) and Bilal Ahmed (Staff, caretaker) with no Shift source; all three have no tracking mode, so all start on the Not set up tab
- Autumn Term ends within the next 14 days and Spring Term has no class routine for Yusuf yet, so the Staff page shows the readiness summary ("will fail") in [6.6]
- No shift templates at the start; "Office hours" (Mon–Fri 8:30–4:30, unpaid Lunch break 12:00–12:30, term Autumn Term) is built in the video

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Before you start
#### [1.1] Opening
**Say:** Before staff can record their time, each one needs a shift, a zone and a tracking mode. This video shows an admin how to set them up.
**Show:** Title card: "Set up staff and shifts".

#### [1.2]
**Say:** Staff Attendance is already on and your zone is drawn. For a madrasah, your terms and class routine are in place too.
**Show:** Opening card.

### 2. Where shifts come from
#### [2.1] Two sources
**Say:** Open **Staff Attendance**, then **Shifts**. Each staff member gets their shift from one of two places: a **Shift template**, or the **Class routine**.
**Show:** Sidebar → Admin Portal → Staff Attendance → Shifts. Spotlight the box "Choose how staff shifts are scheduled".

#### [2.2]
**Say:** A shift template is a simple weekly pattern for anyone, whatever their role. The class routine is for teachers whose hours follow the timetable.
**Show:** Zoom on the two definitions in the box.

### 3. Build a shift template
#### [3.1] New template
**Say:** On the **Shift templates** tab, tap **New template** and give it a **Name**, such as Office hours.
**Show:** Click "New template". Type "Office hours" in Name.

#### [3.2] Weekly pattern
**Say:** In the **Weekly pattern**, set Monday's hours, then tap **Copy Monday to working days**. Switch a day off to make it a rest day.
**Show:** On Monday click "Add"; Work is selected. Set Starts 8:30 and Ends 4:30, click "Add hours". Click "Copy Monday to working days"; Tuesday to Friday fill in. Saturday and Sunday stay Off.

#### [3.3] Breaks
**Say:** For lunch, tap **Add** again and choose **Break**. A **Fixed window** has set times, and a **Floating allowance** is just a length. Breaks start **Paid**; tap it to make one **Unpaid**, then tap **Add break**.
**Show:** On Monday click "Add", then "Break". Break name "Lunch", Fixed window, Starts 12:00, Ends 12:30; click "Paid" so it reads "Unpaid". Click "Add break". Click "Copy Monday to working days" again.

#### [3.4] Terms
**Say:** For a madrasah, choose up to five **Terms**. Staff on this template only get shifts on dates inside those terms. Then tap **Save**.
**Show:** In Terms, tick "Autumn Term" (marked Current). Click "Save". The card shows the days, "Terms: Autumn Term" and "Not linked to anyone yet".

### 4. Link staff
#### [4.1] Link staff
**Say:** On the template's card, tap **Link staff**. Tick everyone who should follow this pattern, and confirm.
**Show:** Click "Link staff". The dialog "Link "Office hours" to staff" opens. Tick Maryam Ali and Bilal Ahmed (each marked "Not set up yet — linking also sets them up"); click "Link 2 staff".

#### [4.2]
**Say:** Teachers on the class routine aren't offered here. If you edit a template later, the change applies to everyone linked to it.
**Show:** Before confirming, spotlight Yusuf Patel's greyed row: "Teacher — shift comes from the class routine, can't use a template". After linking, the card reads "Linked to 2 staff: Maryam Ali, Bilal Ahmed".

### 5. Timetable-based shifts
#### [5.1] Class routine term
**Say:** For teachers, open the **Class routine term** tab. **Class routines come from** decides which term's timetable Staff Attendance reads.
**Show:** Click the "Class routine term" tab. Spotlight "Class routines come from".

#### [5.2]
**Say:** Leave it on **Automatic**, and each day uses whichever term covers it. Or pick one term. If a term is missing, **Manage academic terms** opens your terms.
**Show:** Open the list: Automatic, Autumn Term, Spring Term. Keep Automatic; the explanation below updates. Spotlight "Manage academic terms".

### 6. Set up each person
#### [6.1] Staff page
**Say:** Now open **Staff**. It lists everyone with a staff role, with their **Shift source**, **Zone**, **Tracking mode**, and whether they're **Ready**.
**Show:** Click Staff in the section list. Spotlight the column headings.

#### [6.2]
**Say:** The **Not set up** tab shows who still needs attention. Tap a person to open their settings. Changes save as you choose them.
**Show:** Click the "Not set up" tab. Click Yusuf Patel's row; the settings panel opens on the right.

#### [6.3] Shift source and zone
**Say:** Choose their **Shift source**. Yusuf teaches, so he's on the **Class routine**. Then choose his **Zone**.
**Show:** "Class routine" is already ticked for Yusuf; spotlight it. Click "Main building" under Zone.

#### [6.4] Tracking mode
**Say:** Last, the **Tracking mode**. **Auto** gives them the clock button on their phone. With **Manual only**, an administrator enters their time. **Not tracked** leaves them out.
**Show:** Spotlight the three options, then click "Auto". Spotlight the explanation under it.

#### [6.5]
**Say:** Tap **Done**. Repeat for each person. Staff on a template show it under **Which pattern**. In a masjid, every shift comes from a template.
**Show:** Click "Done". Click the "Set up" tab and open Maryam Ali: linking already set Shift template, Which pattern "Office hours" and Auto. Click "Main building" under Zone. Click "Done".

#### [6.6] Ready
**Say:** Back on the **Set up** tab, each row shows **Ready**. If someone's schedule is about to run out, for example when a term ends, the top of the page warns you.
**Show:** Click the "Set up" tab; spotlight the Ready column. Spotlight the readiness summary at the top.

### 7. Next
#### [7.1] Close
**Say:** Your staff now have shifts, a zone and a tracking mode. Next, choose your attendance rules, or see how staff check in from their phones.
**Show:** End card with two tiles: "13.4 Attendance settings and leave" and "13.7 Check in, breaks and check out".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · validator · checked against master d36d69ed8 · 6 fixes: template hours/breaks use Add → Work/Break → Add hours/Add break, break Paid/Unpaid toggle, linking sets Maryam and Bilal to Shift template + Auto (so [6.5] opens her on Set up and only adds the zone), Yusuf must already be on Class routine for the greyed picker row, linked card text, demo data for the readiness warning

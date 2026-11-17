---
id: "13.1"
title: Switch on Staff Attendance
target: 7:00
prereq:
  - "03.1"
status: scripted
---

# 13.1 Switch on Staff Attendance

## Goal
Switch on Staff Attendance for your organisation, clear the checks it runs first, and know where the quick links and the Overview page take you.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->
- Admin access to the organisation
- Ad-Din Premium for each staff member who uses Staff Attendance, such as a seat
- The organisation's address saved, so its time zone can be worked out

## Covers
- The switch, the “Before switching on” checks, quick links, Overview cards
- Documents for your staff (Collection notice, Monitoring-policy starter), from the quick link
- Why a masjid or madrasah uses Staff Attendance
- Masjid wording of the card (every shift from a shift template)
- What switching on creates (current pay period, today's and tomorrow's shifts, the menu section); switching off is never blocked
- Time zone quick link: Change the time zone, and why to change it only if it's wrong
- Documents: Read it here, Download, the recorded download
- Legacy register: Export the register, I have this file, Delete the old register
- Overview card links (Open Review, Open staff, Open the period) and setup steps with their links

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo madrasah with an address and time zone America/Toronto; Staff Attendance switched off at the start
- Only one administrator, so the single-administrator notice shows on switch-on
- Staff: Bilal Hussain (teacher, class routine, Auto), Khadija Usman (office, shift template, Auto), Idris Malik (caretaker, Auto, no shift template), so the first switch-on is refused
- After switching on: Overview with 0 open review items, 3 staff expected today, the current monthly period Unlocked, Setup "Setup not finished"
- A second demo organisation, the masjid "Maple Grove Masjid", for the masjid card wording in [2.3a] (Staff Attendance off)
- Documents: no download recorded yet for the Collection notice; the Monitoring-policy starter shows "Last recorded download" by Yusuf Rahman
- Legacy register for the madrasah with a few old teacher rows (Bilal Hussain, Omar Khalid) and no export yet

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Before you start
#### [1.1] Opening
**Say:** Staff Attendance lets your staff check in and out from their phones, and gives you their hours, ready for payroll. In this video for organisation admins, you'll switch it on.
**Show:** Title card: "Switch on Staff Attendance".

#### [1.1a] Why
**Say:** If you pay teachers, a caretaker or office staff by the hour, Staff Attendance replaces paper sign-in sheets. Staff tap once when they arrive and once when they leave, and at the end of each pay period you send one file to whoever runs payroll.
**Show:** A short montage from the demo: a phone with the "Check in" button, then the Periods grid, then the "Download v1" menu.

#### [1.1b]
**Say:** Ad-Din records hours and makes the payroll file. It doesn't calculate or pay wages; that stays with your bookkeeper.
**Show:** Hold on the Periods grid; zoom on the "Period total" column.

#### [1.2]
**Say:** You'll need to be an admin of the organisation. Its address should already be saved, because Staff Attendance works out your time zone from it.
**Show:** Opening card from You'll need.

### 2. Find the switch
#### [2.1] Organization Management
**Say:** In the **Admin Portal**, open **Organization Management**, find your organisation, and tap **Manage**.
**Show:** Sidebar → Admin Portal → Organization Management. Click "Manage" on the demo madrasah's card.

#### [2.2] Services tab
**Say:** Open the **Services** tab and scroll to **Staff Attendance**.
**Show:** Click the "Services" tab. Scroll to the Staff Attendance card; spotlight its title and switch (off).

#### [2.3]
**Say:** For a madrasah, staff on the class routine, your class timetable, get their hours from it. Everyone else follows a shift template that you build. Each staff member who uses it needs Ad-Din Premium, such as a seat.
**Show:** Zoom on the card's description text.

#### [2.3a] In a masjid
**Say:** In a masjid, there's no class routine, so the card says that you build the shift patterns. Every masjid shift comes from a shift template.
**Show:** Short cutaway: Organization Management → "Manage" on "Maple Grove Masjid" → Services. Zoom on its Staff Attendance description. Return to the madrasah.

### 3. Switch it on
#### [3.1] The checks
**Say:** Tap the switch. Before it turns on, Ad-Din checks that your organisation has a time zone, and that everyone set to record automatically has a schedule today.
**Show:** Click the switch. Loader.

#### [3.2] Before switching on
**Say:** If a check fails, the switch stays off and **Before switching on** opens. It shows what's ready, and who has no schedule today.
**Show:** The switch flips back to off, a toast says why, and the "Before switching on" popup opens. Spotlight the passed time-zone check, then the line naming Idris Malik.

#### [3.3]
**Say:** For now, tap **Set to Manual only**, so an admin enters their time instead. Once they have a schedule, you can set them back to Auto.
**Show:** Click "Set to Manual only" beside Idris Malik. His line leaves the list and the checks reload to "Everyone set to record automatically has a schedule today." Close the popup.

#### [3.4] Switched on
**Say:** Tap the switch again. This time it stays on. If you're the only admin, Ad-Din suggests adding a second one, so pay periods can still be signed off while you're away.
**Show:** Click the switch. It stays on. The toast "Staff Attendance is on. With only one administrator…" appears; hold on it.

#### [3.5a] What switching on does
**Say:** As soon as it's on, Ad-Din creates the current pay period and today's and tomorrow's shifts, so anyone already set up can check in. **Staff Attendance** also appears in the menu.
**Show:** Open the sidebar; spotlight the new "Staff Attendance" entry under Admin Portal. Close the sidebar.

#### [3.5b]
**Say:** You can switch it off again at any time with the same switch. Ad-Din never stops you switching it off; only switching on runs the checks.
**Show:** Spotlight the switch (on). Don't click it.

#### [3.6] No address yet
**Say:** If there's no address on file, Ad-Din first asks **Where is the organisation?** Search for the address, check the time zone, and tap **Save and switch on**.
**Show:** Short cutaway on a second demo organisation with no address: the dialog "Where is the organisation?", type an address, pick a suggestion; the Time zone fills in. Spotlight "Save and switch on"; don't click.

### 4. Quick links
#### [4.1] Time zone
**Say:** Under the description, quick links take you straight to the right place. **Time zone** shows the zone every attendance day and pay period is worked out in.
**Show:** Back on the demo madrasah's Services tab. Spotlight the quick links; zoom on "Time zone: America/Toronto".

#### [4.1a] Change the time zone
**Say:** Tap it to check the zone. Change it only if it's wrong. Once Staff Attendance is on, a new time zone moves every shift to the new clock, so staff can suddenly show as late or absent. Ad-Din warns you before it saves.
**Show:** Click "Time zone: America/Toronto". The dialog "Change the time zone" opens; zoom on its intro sentence and the Time zone field. Click "Cancel".

#### [4.2]
**Say:** **Staff Attendance settings** opens your rules. **Documents for your staff** holds a **Collection notice** for your staff and a **Monitoring-policy starter** you can adapt.
**Show:** Spotlight "Staff Attendance settings", then click "Documents for your staff". The settings page opens on its documents; spotlight the two document cards.

#### [4.2a] The collection notice
**Say:** The **Collection notice** is written by Ad-Din. It tells your staff what is recorded when they tap, how long location records are kept, and who can see them. Tap **Read it here**, or **Download** a copy to share before your staff start.
**Show:** Click "Read it here" on the Collection notice; scroll slowly through its headings. Click "Hide". Spotlight "Download".

#### [4.2b] The policy starter
**Say:** The **Monitoring-policy starter** is a template for your own workplace policy. Replace everything in square brackets, and check it against the rules that apply to you; it isn't legal advice. Each download is recorded with the date and who downloaded it.
**Show:** Click "Read it here" on the Monitoring-policy starter; zoom on its disclaimer and a line with [square brackets]. Click "Hide". Zoom on "Last recorded download: … by Yusuf Rahman". Go back to the Services tab.

#### [4.3]
**Say:** For a madrasah, **Legacy teacher-attendance register** lets you export the old present, absent and late register, so you keep a copy.
**Show:** Click "Legacy teacher-attendance register". The settings page opens on it; spotlight the intro and the record count.

#### [4.3a]
**Say:** Tap **Export the register**, download the file and open it. Then tap **I have this file**. Only then can you **Delete the old register**. Deleting is permanent, so keep the file safe. The old rows have no times, so they can never become hours.
**Show:** Click "Export the register"; the export row shows "Verified". Spotlight "Download", then "I have this file", then the "Delete the old register" button. Don't click Delete. Go back to the Services tab.

### 5. The Overview page
#### [5.1] Overview
**Say:** You'll find everything else under **Staff Attendance** in the menu: in the **Admin Portal** for a madrasah (not **Attendance**, which is for students), or under **Masjid** for a masjid. It opens on **Overview**.
**Show:** Sidebar → Admin Portal; spotlight Attendance, then Staff Attendance just below it, and click Staff Attendance. The Overview page opens; spotlight the section list on the left.

#### [5.2]
**Say:** **Needs your review** counts the days the system couldn't settle on its own. **Expected today** shows who has a shift today, and how many staff are set up.
**Show:** Spotlight the "Needs your review" card, then the "Expected today" card.

#### [5.3]
**Say:** **Current period** shows the pay period you're in, and whether it's locked.
**Show:** Spotlight the "Current period" card with its "Unlocked" pill.

#### [5.3a]
**Say:** Each card has a link to the full page: **Open Review**, **Open staff** and **Open the period**. Check this page at the start of each working day.
**Show:** Spotlight the three links in turn. Don't click them.

#### [5.4] Setup
**Say:** **Setup** says **Ready to record** once everything is in place. Right after switching on, it usually says **Setup not finished**. Tap **Show setup steps** to see each step, with a link to do it.
**Show:** Spotlight the "Setup" card. Click "Show setup steps": Add an academic term, Set working hours, Draw your zone, Set up your staff, Fix any problems.

#### [5.4a]
**Say:** Each step shows **Done** or **To do**, says what's missing, and has a link, such as **Go to zones**. Later, if someone set to record automatically can't, the card says **Needs attention**.
**Show:** Zoom on "Draw your zone" with "To do" and its link "Go to zones". Spotlight "Done" on "Add an academic term".

### 6. Next
#### [6.1] Close
**Say:** Staff Attendance is now on, and the Overview shows what's left to set up. Next, watch 13.2, Draw work zones, 13.3, Set up staff and shifts, and 13.4, Attendance settings and leave.
**Show:** End card with three tiles: "13.2 Draw work zones", "13.3 Set up staff and shifts" and "13.4 Attendance settings and leave".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 3:12 → 5:48 narration, 11 scenes added: [1.1a]/[1.1b] why, and Ad-Din doesn't pay wages; [2.3a] masjid card wording; [3.5a] what switching on creates (current period, today's and tomorrow's shifts, menu entry); [3.5b] switching off is never blocked; [4.1a] Change the time zone and its warning; [4.2a]/[4.2b] Read it here, Download, recorded downloads, policy starter is not legal advice; [4.3a] Export, I have this file, Delete the old register; [5.3a] Overview card links; [5.4a] setup step links and Needs attention. Checked against origin/master d0604ce7f; target 4:00 → 7:00
- 2026-11-06 · panel (user, director, writer, PM, PO) · 6 changes: You'll need says admin and Ad-Din Premium for each staff member, [1.2]/[3.4] "admin", [2.3] Premium such as a seat (was "active subscription", page.editor.component.html 122-130; same words as 03.2) and says the class routine is the class timetable, [3.3] action first, [5.1] not Attendance (the students' page beside it, menu.data.ts 985-1000) with the Show spotlighting both, demo names from the Maple Grove demo world (teacher Bilal Hussain, office Khadija Usman, caretaker Idris Malik)
- 2026-11-03 · manager · decisions via chat · Staff Attendance is live: 'Is Staff Attendance live?' hold flag removed; publish normally
- 2026-11-03 · critic · 5 changes: [1.1] second-person opening; [2.1] full sidebar path; thin [3.5] merged into [3.4]; [5.1] "lives under" idiom removed; [6.1] all three end-card tiles named by number; fold: Documents for your staff added to Covers (already shown in [4.2], labels checked)
- 2026-11-03 · validator · checked against master d36d69ed8 · 2 fixes: [3.2] refusal toast shown, [3.3] "is now Manual only" is screen-reader only, so show the line leaving the list instead

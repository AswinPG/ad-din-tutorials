---
id: "13.1"
title: Switch on Staff Attendance
target: 4:00
prereq:
  - "03.1"
status: scripted
flags:
  - "Is Staff Attendance live? (series.yaml decision) Confirm before publishing"
---

# 13.1 Switch on Staff Attendance

## Goal
Switch on Staff Attendance for your organisation, clear the checks it runs first, and know where the quick links and the Overview page take you.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->
- Administrator access to the organisation
- The organisation's address saved, so its time zone can be worked out

## Covers
- The switch, the “Before switching on” checks, quick links, Overview cards

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo madrasah with an address and time zone America/Toronto; Staff Attendance switched off at the start
- Only one administrator, so the single-administrator notice shows on switch-on
- Staff: Yusuf Patel (teacher, class routine, Auto), Maryam Ali (office, shift template, Auto), Bilal Ahmed (caretaker, Auto, no shift template), so the first switch-on is refused
- After switching on: Overview with 0 open review items, 3 staff expected today, the current monthly period Unlocked, Setup "Setup not finished"

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Before you start
#### [1.1] Opening
**Say:** Staff Attendance lets your staff check in and out from their phones, and gives you their hours, ready for payroll. This video shows an admin how to switch it on.
**Show:** Title card: "Switch on Staff Attendance".

#### [1.2]
**Say:** You'll need to be an administrator of the organisation. Its address should already be saved, because Staff Attendance works out your time zone from it.
**Show:** Opening card from You'll need.

### 2. Find the switch
#### [2.1] Organization Management
**Say:** Open **Organization Management**, find your organisation, and tap **Manage**.
**Show:** Sidebar → Admin Portal → Organization Management. Click "Manage" on the demo madrasah's card.

#### [2.2] Services tab
**Say:** Open the **Services** tab and scroll to **Staff Attendance**.
**Show:** Click the "Services" tab. Scroll to the Staff Attendance card; spotlight its title and switch (off).

#### [2.3]
**Say:** For a madrasah, staff on the class routine get their hours from it. Everyone else follows a shift template that you build. Each user needs an active subscription.
**Show:** Zoom on the card's description text.

### 3. Switch it on
#### [3.1] The checks
**Say:** Tap the switch. Before it turns on, Ad-Din checks that your organisation has a time zone, and that everyone set to record automatically has a schedule today.
**Show:** Click the switch. Loader.

#### [3.2] Before switching on
**Say:** If a check fails, the switch stays off and **Before switching on** opens. It shows what's ready, and who has no schedule today.
**Show:** The switch flips back to off, a toast says why, and the "Before switching on" popup opens. Spotlight the passed time-zone check, then the line naming Bilal Ahmed.

#### [3.3]
**Say:** Fix their schedule later, and for now tap **Set to Manual only**, so an administrator enters their time instead. You can set them back once they have a schedule.
**Show:** Click "Set to Manual only" beside Bilal Ahmed. His line leaves the list and the checks reload to "Everyone set to record automatically has a schedule today." Close the popup.

#### [3.4] Switched on
**Say:** Tap the switch again. This time it stays on.
**Show:** Click the switch. It stays on.

#### [3.5]
**Say:** If you're the only administrator, Ad-Din suggests adding a second one, so pay periods can still be signed off while you're away.
**Show:** The toast "Staff Attendance is on. With only one administrator…" Hold on it.

#### [3.6] No address yet
**Say:** If there's no address on file, Ad-Din first asks **Where is the organisation?** Search for the address, check the time zone, and tap **Save and switch on**.
**Show:** Short cutaway on a second demo organisation with no address: the dialog "Where is the organisation?", type an address, pick a suggestion; the Time zone fills in. Spotlight "Save and switch on"; don't click.

### 4. Quick links
#### [4.1] Time zone
**Say:** Under the description, quick links take you straight to the right place. **Time zone** shows the zone every attendance day and pay period is worked out in.
**Show:** Back on the demo madrasah's Services tab. Spotlight the quick links; zoom on "Time zone: America/Toronto".

#### [4.2]
**Say:** **Staff Attendance settings** opens your rules. **Documents for your staff** holds a **Collection notice** for your staff and a **Monitoring-policy starter** you can adapt.
**Show:** Hover "Staff Attendance settings", then click "Documents for your staff". The settings page opens on its documents; spotlight the two document cards. Go back.

#### [4.3]
**Say:** For a madrasah, **Legacy teacher-attendance register** lets you export the old present, absent and late register, so you keep a copy.
**Show:** Hover "Legacy teacher-attendance register".

### 5. The Overview page
#### [5.1] Overview
**Say:** Everything else lives under **Staff Attendance** in the menu: in the **Admin Portal** for a madrasah, or under **Masjid** for a masjid. It opens on **Overview**.
**Show:** Sidebar → Admin Portal → Staff Attendance. The Overview page opens; spotlight the section list on the left.

#### [5.2]
**Say:** **Needs your review** counts the days the system couldn't settle on its own. **Expected today** shows who has a shift today, and how many staff are set up.
**Show:** Spotlight the "Needs your review" card, then the "Expected today" card.

#### [5.3]
**Say:** **Current period** shows the pay period you're in, and whether it's locked.
**Show:** Spotlight the "Current period" card with its "Unlocked" pill.

#### [5.4] Setup
**Say:** **Setup** says **Ready to record** once everything is in place. Right after switching on, it usually says **Setup not finished**. Tap **Show setup steps** to see each step, with a link to do it.
**Show:** Spotlight the "Setup" card. Click "Show setup steps": Add an academic term, Set working hours, Draw your zone, Set up your staff, Fix any problems.

### 6. Next
#### [6.1] Close
**Say:** Staff Attendance is now on, and the Overview shows what's left to set up. Next, draw your work zones, then set up your staff and shifts, and choose your rules.
**Show:** End card with three tiles: "13.2 Draw work zones", "13.3 Set up staff and shifts" and "13.4 Attendance settings and leave".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · validator · checked against master d36d69ed8 · 2 fixes: [3.2] refusal toast shown, [3.3] "is now Manual only" is screen-reader only, so show the line leaving the list instead

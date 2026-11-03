---
id: "13.4"
title: Attendance settings and leave
target: 4:30
prereq:
  - "13.1"
status: scripted
---

# 13.4 Attendance settings and leave

## Goal
Set your pay period, grace band, break and holiday rules, payroll email, and the reason and leave lists your staff choose from.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Pay period, grace band, breaks, holidays, payroll email, reason lists, leave categories

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo madrasah with Staff Attendance on, Payroll period Monthly, Sign-off due 5 days, Payment 5 days after the due date
- Payroll calendar with several upcoming monthly periods
- Grace band 10 minutes, unpaid; Track breaks on; Unended break closes after 30 minutes; Shift-end reminder on
- Holiday suppression for shift templates off
- Payroll recipient empty at the start; `payroll@demo-madrasah.example` typed in the video (never a real address)
- Default lists: out-of-zone reasons, correction reasons, leave categories Annual leave (Paid), Sick leave (Paid), Unpaid leave (Unpaid), Other (Unpaid)

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Before you start
#### [1.1] Opening
**Say:** Staff Attendance follows your rules: pay periods, grace time, breaks, and the lists your staff pick from. In this video for organisation admins, you'll set them.
**Show:** Title card: "Attendance settings and leave".

#### [1.2]
**Say:** Staff Attendance is already switched on. Every change here saves straight away, and never rewrites a period that's already locked.
**Show:** Opening card.

### 2. Pay period
#### [2.1] Settings
**Say:** In the **Admin Portal**, open **Staff Attendance**, then **Settings**. The groups are listed across the top, starting with **Pay period**.
**Show:** Sidebar → Admin Portal → Staff Attendance → Settings. Spotlight the row of setting groups.

#### [2.2] Payroll period
**Say:** Under **Payroll period**, choose **Weekly**, **Bi-weekly** or **Monthly**. Bi-weekly also needs an **Anchor date**, the first day your fortnights are counted from.
**Show:** Spotlight the three choices with Monthly selected. Don't change it on camera.

#### [2.3] Sign-off and payment
**Say:** **Sign-off due** sets how many days after a period ends its hours must be signed off, up to fifteen. **Payment** sets how long after that payment is scheduled.
**Show:** Spotlight Sign-off due (5 days), then Payment (5 days, After the due date).

#### [2.4]
**Say:** **Weekends and holidays** moves a due date off a weekend or holiday. The **Payroll calendar** lists the periods ahead, and **Export CSV** gives you a copy.
**Show:** Spotlight Weekends and holidays, then scroll to the Payroll calendar table. Hover "Export CSV".

### 3. Grace band
#### [3.1] Grace band
**Say:** Open **Grace band**. Set how many minutes either side of a shift's start or end still count as on time. With ten minutes, a check-in at eight thirty-three counts as eight thirty.
**Show:** Click "Grace band". Spotlight the minutes field showing 10, and the sentence under it.

#### [3.2]
**Say:** **Grace time is payable** decides whether those forgiven minutes are paid.
**Show:** Spotlight the "Grace time is payable" switch (off).

### 4. Breaks and holidays
#### [4.1] Breaks
**Say:** In **Breaks and reminders**, **Track breaks** decides whether staff tap for their breaks. **Unended break closes after** sets when a forgotten break is closed for them.
**Show:** Click "Breaks and reminders". Spotlight "Track breaks", then "Unended break closes after" (30 min).

#### [4.2]
**Say:** **Shift-end reminder** reminds anyone still checked in before their shift ends.
**Show:** Spotlight "Shift-end reminder" and "Reminder lead time".

#### [4.3] Holidays
**Say:** For a madrasah, **Holiday suppression — shift templates** decides whether a school holiday also gives template staff, like caretakers and office staff, the day off.
**Show:** Scroll to "Holiday suppression — shift templates". Spotlight it and the sentence under it.

### 5. Payroll email
#### [5.1] Payroll recipient
**Say:** In **Payroll**, enter the **Payroll recipient**, such as your bookkeeper's email. When you lock a pay period, the payroll file goes to this address.
**Show:** Click "Payroll". Type `payroll@demo-madrasah.example` in Payroll recipient; the sentence under it updates.

#### [5.2]
**Say:** The **Payroll schedule note** is a reminder for your administrators only. It doesn't send anything.
**Show:** Spotlight "Payroll schedule note".

### 6. Lists your staff see
#### [6.1] Out-of-zone reasons
**Say:** **Lists staff see** holds the choices your staff pick from. The **Out-of-zone reason list** appears when someone taps outside their zone. Tap **Add reason** to add your own.
**Show:** Click "Lists staff see". Click "Out-of-zone reason list" to open it (each list starts closed). Spotlight the reasons. Click "Add reason"; replace "New reason" with "Home visit".

#### [6.2] Correction reasons
**Say:** The **Correction reason list** appears when staff say a day isn't right, or record a late check-in. Reasons marked **Mandatory** always stay.
**Show:** Scroll past "Leave categories" to "Correction reason list" and click it to open it. Spotlight a locked reason with its "Mandatory" chip.

#### [6.3] Leave categories
**Say:** **Leave categories** is what staff choose from when they ask for time off. Mark each one **Paid** or **Unpaid**, and tap **Add a category** for a new one.
**Show:** Scroll back up and click "Leave categories" to open it: Annual leave, Sick leave, Unpaid leave, Other. Click "Add a category"; replace "New category" with "Hajj leave". It starts as Unpaid; spotlight the switch.

#### [6.4] What your staff see
**Say:** The **What your staff see** panel previews each rule as your staff will read it. Changes reach their phones the next time they open the app.
**Show:** Zoom on the "What your staff see" panel.

### 7. Next
#### [7.1] Close
**Say:** Your rules are set. Next, watch 13.5, Review the days that need a decision, and 13.6, Lock a pay period and send payroll.
**Show:** End card with two tiles: "13.5 Review the days that need a decision" and "13.6 Lock a pay period and send payroll".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · manager · decisions via chat · Staff Attendance is live: 'Is Staff Attendance live?' hold flag removed; publish normally
- 2026-11-03 · critic · 3 changes: [1.1] second-person opening; [2.1] full sidebar path; [7.1] end-card tiles named by number
- 2026-11-03 · validator · checked against master d36d69ed8 · 3 fixes: the three lists start collapsed (open each one), list order on screen is reasons → leave categories → correction reasons, a new category starts as "New category", Unpaid

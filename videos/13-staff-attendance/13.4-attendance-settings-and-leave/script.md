---
id: "13.4"
title: Attendance settings and leave
target: 8:30
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
- Location and privacy → Location retention
- Why the settings matter
- Week starts on; changing the pay period (re-cut); Calendar days or Business days; payment After the due date or After actual sign-off; Weekends and holidays choices; Calendar shows
- Grace band range and the check-in window; Unended break range; Reminder lead time; Routine-derived breaks are paid
- Location accuracy limit; Rollout pause for location cards
- No payroll recipient means nothing is sent
- Mandatory reasons, Remove this reason?, Require a note; time off needs at least one leave category; old requests keep their category
- Documents for staff and Old register groups; every change is in the Audit Trail

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo madrasah with Staff Attendance on, Payroll period Monthly, Sign-off due 5 days, Payment 5 days after the due date
- Payroll calendar with several upcoming monthly periods; the current period already has recorded time, so choosing Weekly opens "Change the pay period now?"
- Grace band 10 minutes, unpaid; Track breaks on; Unended break closes after 30 minutes; Shift-end reminder on
- Holiday suppression for shift templates off
- Location retention 12 months (selected, not changed on camera); Location accuracy limit 250 m; no rollout pause date
- Sign-off due on Calendar days; Weekends and holidays "Next business day"; Calendar shows 6 months
- Shift-end reminder lead time 30 minutes; Routine-derived breaks are paid on
- Payroll recipient empty at the start; `payroll@maplegrove.example.com` typed in the video (never a real address)
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

#### [1.2a] Why
**Say:** Set these once, before your first pay period ends. They decide how on-time is judged, which minutes are paid, and when your bookkeeper gets the hours. Each setting shows a sentence under it saying exactly what it does.
**Show:** A look ahead at the Settings page: zoom on "Grace band" and the plain sentence under it.

### 2. Pay period
#### [2.1] Settings
**Say:** In the **Admin Portal**, open **Staff Attendance**, then **Settings**. The groups are listed across the top, starting with **Pay period**.
**Show:** Sidebar → Admin Portal → Staff Attendance → Settings. Spotlight the row of setting groups.

#### [2.2] Payroll period
**Say:** Under **Payroll period**, choose **Weekly**, **Bi-weekly** or **Monthly**. Bi-weekly also needs an **Anchor date**, the first day your fortnights are counted from.
**Show:** Spotlight the three choices with Monthly selected. Don't change it on camera.

#### [2.2a]
**Say:** Weekly also asks which day the **Week starts on**. If you change the period once time is recorded, Ad-Din asks before it re-cuts the current period. Recorded time stays on its dates, and signed-off periods don't change.
**Show:** Click "Weekly": the dialog "Change the pay period now?" opens; zoom on its sentence. Click "Keep it as it is".

#### [2.3] Sign-off and payment
**Say:** **Sign-off due** is how many days you have after a period ends to sign off its hours, up to fifteen. Signing off means locking the period, as in video 13.6. **Payment** sets how long after that payment is scheduled.
**Show:** Spotlight Sign-off due (5 days), then Payment (5 days, After the due date).

#### [2.3a]
**Say:** Count the days as **Calendar days** or **Business days**. Payment can be up to sixty days later, counted **After the due date** or **After actual sign-off**, the day you really lock it.
**Show:** Spotlight "Calendar days" and "Business days", then "After the due date" and "After actual sign-off". Zoom on the sentence under Payment.

#### [2.4]
**Say:** **Weekends and holidays** moves a due date off a weekend or holiday. The **Payroll calendar** lists the periods ahead, and **Export CSV** gives you a copy. Ad-Din doesn't pay anyone: these dates tell your staff when to expect their pay.
**Show:** Spotlight Weekends and holidays, then scroll to the Payroll calendar table. Spotlight "Export CSV".

#### [2.4a]
**Say:** For weekends and holidays, choose **No adjustment**, **Previous business day** or **Next business day**. For a madrasah, holidays come from your madrasah holiday calendar. **Calendar shows** sets how many months ahead the calendar goes.
**Show:** Spotlight the three choices with "Next business day" selected. Zoom on "Holidays come from the madrasah holiday calendar." Spotlight "Calendar shows" with "6 months".

### 3. Grace band
#### [3.1] Grace band
**Say:** Open **Grace band**. Set how many minutes either side of a shift's start or end still count as on time. With ten minutes, a check-in at eight thirty-three counts as eight thirty.
**Show:** Click "Grace band". Spotlight the minutes field showing 10, and the sentence under it.

#### [3.2]
**Say:** **Grace time is payable** decides whether those forgiven minutes are paid.
**Show:** Spotlight the "Grace time is payable" switch (off).

#### [3.2a]
**Say:** The grace band also sets how early staff can check in: the button appears that many minutes before a shift starts. It can be up to a hundred and twenty minutes. Zero means every tap counts at the exact minute.
**Show:** Zoom on the sentence under the minutes field, then on the "What your staff see" line "Grace: 10 min, unpaid".

### 4. Breaks and holidays
#### [4.1] Breaks
**Say:** In **Breaks and reminders**, **Track breaks** decides whether staff tap for their breaks. **Unended break closes after** sets when a forgotten break is closed for them. With **Track breaks** off, unpaid breaks are taken off automatically.
**Show:** Click "Breaks and reminders". Spotlight "Track breaks", then "Unended break closes after" (30 min).

#### [4.1a]
**Say:** An unended break can close after five to two hundred and forty minutes. Thirty is a good start: long enough for a late return, short enough not to lose an afternoon's hours.
**Show:** Zoom on the sentence under "Unended break closes after".

#### [4.2]
**Say:** **Shift-end reminder** reminds anyone still checked in before their shift ends.
**Show:** Spotlight "Shift-end reminder" and "Reminder lead time".

#### [4.2a]
**Say:** Choose a **Reminder lead time** of **15 minutes**, **30 minutes** or **60 minutes**. Only staff still checked in get it. With the reminder off, a correct day sends your staff no notification at all.
**Show:** Spotlight the three lead-time choices with "30 minutes" selected. Zoom on the sentence under it.

#### [4.3] Holidays
**Say:** For a madrasah, **Holiday suppression — shift templates** decides whether a school holiday also gives template staff, like caretakers and office staff, the day off.
**Show:** Scroll to "Holiday suppression — shift templates". Spotlight it and the sentence under it.

#### [4.3a]
**Say:** **Routine-derived breaks are paid** decides whether breaks built from the class timetable are paid, or taken off the day.
**Show:** Spotlight "Routine-derived breaks are paid" and its sentence.

### 5. Location and privacy
#### [4a.1] Location retention
**Say:** Open **Location and privacy**. **Location retention** is how long the location of each check-in is kept: **6 months**, **12 months** or **24 months**. Worked hours are kept forever.
**Show:** Click "Location and privacy". Spotlight "Location retention" and its three choices, with 12 months selected. Don't change it on camera.

#### [4a.1a] Location accuracy limit
**Say:** **Location accuracy limit** is how imprecise a phone's reading can be and still be checked against a zone. A wider reading is recorded as undetermined. Leave it at two hundred and fifty metres unless you have a reason.
**Show:** Scroll up to "Location accuracy limit" (250 m); zoom on its sentence.

#### [4a.2]
**Say:** Older location records are deleted, but timesheets and audit records stay. A lower number applies to all your staff.
**Show:** Scroll back to Location retention. Spotlight the sentence under the choices ("Map fixes older than 12 months are deleted…").

#### [4a.3] Rollout pause
**Say:** While your staff are still installing the app, taps without a location would each raise an item for you. **Rollout pause for location cards** stops those items until a date you choose, up to ninety days ahead. The taps are still recorded.
**Show:** Spotlight "Rollout pause for location cards", its date field and the sentence under it. Don't set a date on camera.

### 6. Payroll email
#### [5.1] Payroll recipient
**Say:** In **Payroll**, enter the **Payroll recipient**, such as your bookkeeper's email. The first time you lock each pay period, the payroll file is sent to this address.
**Show:** Click "Payroll". Type `payroll@maplegrove.example.com` in Payroll recipient; the sentence under it updates.

#### [5.1a]
**Say:** It's an email address, not an Ad-Din account, so a shared office address works well. With no address, nothing is sent when a period locks; you'd download the file yourself.
**Show:** Spotlight the hint "An address, not a user account." and the "What your staff see" line "Locked periods go to payroll@maplegrove.example.com".

#### [5.2]
**Say:** The **Payroll schedule note** is a reminder for your admins only. It doesn't send anything.
**Show:** Spotlight "Payroll schedule note".

### 7. Lists your staff see
#### [6.1] Out-of-zone reasons
**Say:** **Lists staff see** holds the choices your staff pick from. The **Out-of-zone reason list** appears when someone taps outside their zone. Tap **Add reason** to add your own.
**Show:** Click "Lists staff see". Click "Out-of-zone reason list" to open it (each list starts closed). Spotlight the reasons. Click "Add reason"; replace "New reason" with "Home visit".

#### [6.1a]
**Say:** Two reasons always stay: **I wasn't scheduled to work**, and **Other (add a note)**, which needs a note. If you remove one of your own, Ad-Din asks first. Past records keep the wording they were given.
**Show:** Spotlight the two locked reasons. Click the remove button on "Offsite break": the dialog "Remove this reason?" opens; zoom on its sentence. Click "Keep it".

#### [6.2] Correction reasons
**Say:** The **Correction reason list** appears when staff say a day isn't right, or record a late check-in. Reasons marked **Mandatory** always stay.
**Show:** Scroll past "Leave categories" to "Correction reason list" and click it to open it. Spotlight a locked reason with its "Mandatory" chip.

#### [6.2a]
**Say:** **Overtime** is always on this list too. For any reason you add, tick **Require a note** if staff must explain it in their own words.
**Show:** Spotlight "Overtime" with its chip. Spotlight "Require a note" beside "Work activity at another location"; don't change it.

#### [6.3] Leave categories
**Say:** **Leave categories** is what staff choose from when they ask for time off. Mark each one **Paid** or **Unpaid**, and tap **Add a category** for a new one.
**Show:** Scroll back up and click "Leave categories" to open it: Annual leave, Sick leave, Unpaid leave, Other. Click "Add a category"; replace "New category" with "Hajj leave". It starts as Unpaid; spotlight the switch.

#### [6.3a]
**Say:** Staff can only ask for time off once at least one category exists. If you change a category later, requests already sent keep the name, and the paid or unpaid choice, they were sent with.
**Show:** Zoom on the note under the lists that begins "The same holds for leave".

#### [6.4] What your staff see
**Say:** The **What your staff see** panel previews each rule as your staff will read it. Changes reach their phones the next time they open the app.
**Show:** Zoom on the "What your staff see" panel.

#### [6.5] Two more groups
**Say:** The last groups, **Documents for staff** and, for a madrasah, **Old register**, hold the staff documents and the old teacher register, as in video 13.1. Every change on this page is kept in the **Audit Trail**.
**Show:** Spotlight "Documents for staff" and "Old register" in the row of groups. Zoom on the note "Changing a setting never rewrites a locked period. Every change writes an audit row."

### 8. Next
#### [7.1] Close
**Say:** Your rules are set. Next, watch 13.5, Review the days that need a decision, and 13.6, Lock a pay period and send payroll.
**Show:** End card with two tiles: "13.5 Review the days that need a decision" and "13.6 Lock a pay period and send payroll".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 3:27 → 6:59 narration, 16 scenes added: [1.2a] why; [2.2a] Week starts on, Change the pay period now?; [2.3a] Calendar or Business days, After the due date or After actual sign-off, up to 60 days; [2.4a] weekend and holiday choices, madrasah holiday calendar, Calendar shows; [3.2a] grace band sets the check-in window, 0 to 120; [4.1a] unended break 5 to 240; [4.2a] Reminder lead time, no notification on a correct day; [4.3a] Routine-derived breaks are paid; [4a.1a] Location accuracy limit; [4a.3] Rollout pause for location cards; [5.1a] address not account, nothing sent without one; [6.1a] mandatory reasons, Remove this reason?; [6.2a] Overtime, Require a note; [6.3a] time off needs a category, old requests keep theirs; [6.5] Documents for staff, Old register, Audit Trail. Checked against origin/master d0604ce7f; target 4:30 → 8:30
- 2026-11-07 · manager · panel decisions, "All recommended" · added chapter 5 "Location and privacy" ([4a.1]-[4a.2], Location retention; settings.component.html 772-806, en.json 3491-3496, 3533, 3639; decision 30); later chapter headings renumbered 6-8, scene IDs unchanged; Covers and demo data updated
- 2026-11-06 · panel (user, director, writer, PM, PO) · 6 changes: [2.3] says what signing off means (locking, video 13.6) and plainer order, [2.4] Ad-Din doesn't pay anyone (en.json 5151), [4.1] Track breaks off deducts unpaid breaks automatically (en.json 3524), [5.1] only the first lock of a period emails the payroll file (IPayrollOutputSendService.cs 60-78), [5.2] "admins", demo payroll address on maplegrove.example.com
- 2026-11-03 · manager · decisions via chat · Staff Attendance is live: 'Is Staff Attendance live?' hold flag removed; publish normally
- 2026-11-03 · critic · 3 changes: [1.1] second-person opening; [2.1] full sidebar path; [7.1] end-card tiles named by number
- 2026-11-03 · validator · checked against master d36d69ed8 · 3 fixes: the three lists start collapsed (open each one), list order on screen is reasons → leave categories → correction reasons, a new category starts as "New category", Unpaid

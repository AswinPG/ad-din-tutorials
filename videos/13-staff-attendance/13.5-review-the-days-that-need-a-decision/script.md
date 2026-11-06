---
id: "13.5"
title: Review the days that need a decision
target: 4:00
prereq:
  - "13.3"
status: scripted
stage: Daily
---

# 13.5 Review the days that need a decision

## Goal
Work through the Review list: open a day, make one decision for it, accept simple days together, and answer time off requests.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Review list types
- One decision per day: pick an answer for each issue and Save decision, or tick simple days and Accept; Approve or Reject only for time off requests

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo madrasah with Staff Attendance on and staff set up (Bilal Hussain, Khadija Usman, Idris Malik)
- Open review items this month: Bilal Hussain "Checked in, never checked out" (with his explanation "I was there, forgot to check out" and a note), the next day for Bilal Hussain with two issues ("Tapped outside the zone" and "Tapped outside the grace band"), Idris Malik "Nothing recorded" (Absence), two Khadija Usman "Checked in late" days
- Khadija Usman "Time off request, 3 days" (Annual leave, Paid, note "Family wedding out of town.")
- Bilal Hussain has an email on his account; the preview says he will be emailed because the decision changes his time (the payroll recipient plays no part here)

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Before you start
#### [1.1] Opening
**Say:** Ad-Din settles most days on its own. When it can't settle one, such as a forgotten check-out, it waits for you. In this video for organisation admins, you'll decide those days.
**Show:** Title card: "Review the days that need a decision".

#### [1.2]
**Say:** Your staff are already set up and recording their time. You'll usually check this list once a day.
**Show:** Opening card.

### 2. The Review list
#### [2.1] One row per day
**Say:** In the **Admin Portal**, open **Staff Attendance**, then **Review**. Each row is one person's day, grouped by staff member. Tap **Day** to group them by date instead.
**Show:** Sidebar → Admin Portal → Staff Attendance → Review. Spotlight the list grouped by staff. Click "Day", then "Staff" again.

#### [2.2] To decide and Decided
**Say:** **To decide** shows what's waiting for you. **Decided** shows what's been handled, including items the system noted automatically.
**Show:** Spotlight the "To decide" and "Decided" switch.

#### [2.3] Types
**Say:** The chips filter by type, such as **Absence**, **Missed check-out**, **Out of zone**, **Late check-in** and **Time Off Request**. **Has an explanation** shows days where the staff member told you what happened.
**Show:** Zoom on the chips with their counts. Click "Has an explanation", then "All".
**Caption:** Filter by type: Absence, Missed check-out, Out of zone, Late check-in, Time Off Request. Has an explanation shows days staff explained.

### 3. Open a day
#### [3.1] Their day
**Say:** Tap a day. **Their day** shows it as a timeline: the shift, every tap with its zone check, and what's missing.
**Show:** Click Bilal Hussain's row "Checked in, never checked out". The day opens on the right; spotlight the timeline and "No check-out recorded".

#### [3.2]
**Say:** If they sent an explanation, you see what they said, and their note.
**Show:** Spotlight "They said:" and "Their note:".

### 4. Make one decision
#### [4.1] Pick an answer
**Say:** Make one decision for the whole day. For each issue, pick an answer: keep the time as recorded, or choose **Enter the check-out time** and type the right one.
**Show:** Spotlight the choices under the issue. Click "Enter the check-out time" and enter 4:45.

#### [4.2] Reason
**Say:** When you reject or change a time, add a **Reason**. The staff member will see it.
**Show:** Type "Stayed for the parents' meeting." in Reason.

#### [4.3] Save decision
**Say:** Check the preview of the paid hours, and whether they'll be emailed. Then tap **Save decision**. Tick **Then open the next day** to keep going.
**Show:** Zoom on the preview "Paid: …". Tick "Then open the next day"; click "Save decision". The next day opens.

#### [4.4] Several issues, one decision
**Say:** When one day has more than one issue, a single decision covers them all.
**Show:** The next day opens with two issues; spotlight the note that one decision covers them all. Close the day.

#### [4.5] Accept several days
**Say:** For simple days, tick several and tap **Accept** to keep them as recorded. Days with more than one issue, and time off requests, are left for you to open.
**Show:** Tick Khadija Usman's two "Checked in late" days. The bar shows "2 selected"; click "Accept" and confirm.

### 5. Time off requests
#### [5.1] Open a request
**Say:** Time off requests appear here too. Open one to check the **Dates**, the **Category**, and whether it's paid.
**Show:** Click "Time off request, 3 days" for Khadija Usman. Spotlight Dates, Category (Annual leave · Paid) and Their note.

#### [5.2] Approve or reject
**Say:** Tap **Approve**. To refuse it, write a **Reason** first, then tap **Reject**. Either way, the staff member gets an email, and sees your answer in the app.
**Show:** Hover "Reject" (disabled until a reason is typed). Click "Approve".

### 6. Decided
#### [6.1] Decided
**Say:** Everything you decide moves to **Decided**, with who decided it and when.
**Show:** Click "Decided". Spotlight Bilal Hussain's day with "by" and the outcome.

### 7. Next
#### [7.1] Close
**Say:** Your review list is clear. When nothing is left to decide in a pay period, you can lock it and send the hours to payroll. See how in 13.6, Lock a pay period and send payroll.
**Show:** Off camera, decide the days left open (keep Idris Malik's absence with "Keep as absent"; accept Bilal Hussain's two-issue day as recorded). Click "To decide": "Nothing left to decide". End card: "13.6 Lock a pay period and send payroll".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-06 · panel (user, director, writer, PM, PO) · 3 changes: [1.1] no "days settle themselves" idiom, [5.2] the staff member also sees the answer in the app (TimeOffDecisionNotificationCopy.cs: the email is a courtesy), demo names from the Maple Grove demo world (teacher Bilal Hussain, office Khadija Usman, caretaker Idris Malik)
- 2026-11-03 · manager · decisions via chat · Staff Attendance is live: hold flag removed. Per-day review flow confirmed (Save decision, bulk Accept, Approve/Reject for time off); Covers checked against chapters 2–5 and match, no change
- 2026-11-03 · critic · 4 changes: plan fix: Covers rewritten to the per-day decision flow (Save decision, bulk Accept, Approve/Reject only for time off) and the mismatch flag dropped; [1.1] second-person opening; [2.1] full sidebar path; [7.1] end card named by number
- 2026-11-03 · validator · checked against master d36d69ed8 · 2 fixes: "will be emailed" comes from changing a time, not the payroll recipient (demo data), [7.1] Bilal's absence and Yusuf's two-issue day were never decided, so they are decided off camera before "Nothing left to decide"

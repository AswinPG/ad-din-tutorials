---
id: "13.5"
title: Review the days that need a decision
target: 4:00
prereq:
  - "13.3"
status: scripted
stage: Daily
flags:
  - "Is Staff Attendance live? (series.yaml decision) Confirm before publishing"
  - "Covers names Approve, Adjust, Reject and Dismiss buttons. On master the Review page makes one decision per day instead: you pick an answer per issue (keep as recorded, or enter a time) and tap Save decision, or tick days and tap Accept. Approve and Reject remain only for time off requests; there is no Dismiss button. The script shows the real flow."
---

# 13.5 Review the days that need a decision

## Goal
Work through the Review list: open a day, make one decision for it, accept simple days together, and answer time off requests.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Review list types
- Approve, Adjust, Reject, Dismiss

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo madrasah with Staff Attendance on and staff set up (Yusuf Patel, Maryam Ali, Bilal Ahmed)
- Open review items this month: Yusuf Patel "Checked in, never checked out" (with his explanation "I was there, forgot to check out" and a note), the next day for Yusuf Patel with two issues ("Tapped outside the zone" and "Tapped outside the grace band"), Bilal Ahmed "Nothing recorded" (Absence), two Maryam Ali "Checked in late" days
- Maryam Ali "Time off request, 3 days" (Annual leave, Paid, note "Family wedding out of town.")
- Payroll recipient set, so the preview says the staff member will be emailed

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Before you start
#### [1.1] Opening
**Say:** Most days settle themselves. When the system can't settle one, such as a forgotten check-out, it waits for you. This video shows an admin how to decide those days.
**Show:** Title card: "Review the days that need a decision".

#### [1.2]
**Say:** Your staff are already set up and recording their time. You'll usually check this list once a day.
**Show:** Opening card.

### 2. The Review list
#### [2.1] One row per day
**Say:** Open **Staff Attendance**, then **Review**. Each row is one person's day, grouped by staff member. Tap **Day** to group them by date instead.
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
**Show:** Click Yusuf Patel's row "Checked in, never checked out". The day opens on the right; spotlight the timeline and "No check-out recorded".

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
**Show:** Tick Maryam Ali's two "Checked in late" days. The bar shows "2 selected"; click "Accept" and confirm.

### 5. Time off requests
#### [5.1] Open a request
**Say:** Time off requests appear here too. Open one to check the **Dates**, the **Category**, and whether it's paid.
**Show:** Click "Time off request, 3 days" for Maryam Ali. Spotlight Dates, Category (Annual leave · Paid) and Their note.

#### [5.2] Approve or reject
**Say:** Tap **Approve**. To refuse it, write a **Reason** first, then tap **Reject**. Either way, the staff member gets an email.
**Show:** Hover "Reject" (disabled until a reason is typed). Click "Approve".

### 6. Decided
#### [6.1] Decided
**Say:** Everything you decide moves to **Decided**, with who decided it and when.
**Show:** Click "Decided". Spotlight Yusuf Patel's day with "by" and the outcome.

### 7. Next
#### [7.1] Close
**Say:** Your review list is clear. When nothing is left to decide in a pay period, you can lock it and send the hours to payroll.
**Show:** Click "To decide": "Nothing left to decide". End card: "13.6 Lock a pay period and send payroll".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->

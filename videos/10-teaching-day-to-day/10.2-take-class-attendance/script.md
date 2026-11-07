---
id: "10.2"
title: Take class attendance
target: 3:45
prereq:
  - "06.4"
status: scripted
---

# 10.2 Take class attendance

## Goal
Mark each student present, absent, late, sick or picked up early, save the register with or without notifying parents, and take attendance for a single subject.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Present, Absent, Late, Sick, Early Pickup, Not Marked
- subject attendance
- Send Attendance Notifications (admin page), and why it can notify parents twice

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo madrasah "Maple Grove Madrasah" (Premium); teacher Bilal Hussain is class teacher of Class "Maktab Level 1", section "A", and also teaches the subject "Quran" there (so the subject wise switch shows)
- Section "A" with eight enrolled demo students: the demo world's Zaid Karim, Hana Mirza, Ibrahim Nasser, Layla Haddad and Yahya Saleh, plus three more made-up names (no real photos), no attendance taken yet for today
- One student with an Absent excuse already sent by a parent for today (starts as Absent; the text shows in the Excuse Note column, and as an Excuse chip in the app)
- Web: signed in as Bilal. App: the same account in a phone frame
- For [5.3]: the demo admin Yusuf Rahman on Admin Portal → Attendance, Maktab Level 1 A with today's register already saved

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Attendance in a minute
#### [1.1] Opening
**Say:** This video shows teachers how to take class attendance. You'll mark each student, add details like late or sick, and take attendance for a single subject.
**Show:** Title card: "Take class attendance".

#### [1.2]
**Say:** Your students are already enrolled in their class sections, so the register is ready for you.
**Show:** Opening card.

### 2. Open the register
#### [2.1] Find Attendance
**Say:** Open **Teacher Portal**, then **Attendance**. Admins find the same page under **Admin Portal**.
**Show:** Web. Sidebar → Teacher Portal → Attendance. The page opens on the Students tab.

#### [2.2] Pick the day and class
**Say:** Today's date is already chosen. Tap the calendar to pick another day.
**Show:** Spotlight the date card on the left; open and close the calendar.

#### [2.3]
**Say:** Under **Class Details**, choose your **Class Name** and **Class Section**. The student list opens straight away, and **Generate** reloads it.
**Show:** Pick "Maktab Level 1" and section "A": the student list loads as soon as the section is chosen. Spotlight "Generate".

### 3. Present or absent
#### [3.1] Present to Absent
**Say:** Every student starts as **Present**, unless a parent has already reported them absent or sick. Tap a student's round button to mark them **Absent**. Tap it again to make them present.
**Show:** All round buttons green, except the student with the parent's excuse (red, excuse text in the Excuse Note column). Click one green button: red cross. Click again: green tick.

#### [3.2] Mark all present
**Say:** **Unmark all** clears the register, and everyone shows **Not Marked**. **Mark all present** marks everyone present again. Then change only the few who are away, including anyone a parent reported.
**Show:** Click "Unmark all": every button turns grey (tooltip "Not Marked"). Click "Mark all present": every button turns green. Click the excused student's button to mark them absent again.

#### [3.3] In the app
**Say:** In the app, tap a student's card to switch between present and absent.
**Show:** Phone frame, same register. Tap a card: the round icon changes from green to red.

### 4. Late, sick and early pickup
#### [4.1] Remarks
**Say:** For more detail, use the buttons under **Remarks**: **Sick**, **Late**, **Early Pickup** and **Excuse**. In the app, swipe a card to the left to see them.
**Show:** Web. Spotlight the Remarks buttons on one row. Cut to the phone: swipe a card left to reveal Sick, Late, Early, Excuse.
**Caption:** For more detail, use the Remarks buttons: Sick, Late, Early Pickup and Excuse. In the app, swipe a card left.

#### [4.2] Late
**Say:** Tap **Late**, set the time the student arrived, and tap **Set time**. The time then shows on their row.
**Show:** Web. Click the Late button on one row; the "Late arrival time" sheet opens. Set 9:10 AM, click "Set time". The amber time chip shows on the row.

#### [4.3] Early Pickup and Sick
**Say:** **Early Pickup** works the same way, with the time they left. **Sick** marks the student absent because of illness.
**Show:** Click Early Pickup on another row, set a time, "Set time". Click Sick on a third row: its button turns pink and the student shows as absent.

#### [4.4]
**Say:** The guide under the table explains every status, from **Present** to **Not Marked**.
**Show:** Spotlight the legend under the table: Present, Absent, Sick, Late, Early Pickup, Excuse, Not Marked.

### 5. Save
#### [5.1] Notify parents
**Say:** With **Notify parents** on, families are told when you save. It's on each time you open the page. Turn it off if you're only correcting a mistake.
**Show:** Spotlight the "Notify parents" switch in the toolbar; leave it on.

#### [5.2]
**Say:** Tap **Save**. A message confirms the attendance is saved.
**Show:** Click "Save". The confirmation message appears.

#### [5.3] Send Attendance Notifications
**Say:** Admins also have **Send Attendance Notifications** on this page. It sends the saved status to every parent in the class. If **Notify parents** was on when you saved, parents are told twice, so agree who sends it.
**Show:** Side label "Signed in as: madrasah admin". Admin Portal → Attendance, Maktab Level 1 A. Spotlight "Send Attendance Notifications" in the toolbar; click it: the sheet with the "Important:" note. Click Cancel.

### 6. Subject attendance
#### [6.1] subject wise
**Say:** To take attendance for one subject only, turn on **subject wise**, choose the **Subject**, and tap **Generate**.
**Show:** Turn on the "subject wise" switch under Class Details. Pick "Quran". Click "Generate".

#### [6.2]
**Say:** Mark and save the same way. If you only teach a subject in that class, Ad-Din takes you straight to subject attendance.
**Show:** Every student starts as Present, so "Mark all present" is hidden. Click one student's button to mark them absent, then click "Save". Confirmation message.

### 7. Next
#### [7.1] Done
**Say:** Your register is saved, and parents can see their child's attendance in the Ad-Din app.
**Show:** The saved register, all rows marked.

#### [7.2] Close
**Say:** Next, video 10.4: Record daily Hifz progress, and video 14.2: Check attendance and report an absence.
**Show:** End card with two tiles: "10.4 Record daily Hifz progress" and "14.2 Check attendance and report an absence".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-07 · manager · panel decisions, "All recommended" · added [5.3] on Send Attendance Notifications (decision 29): only the Admin Portal attendance page has it (adminPortal.v2 attendance.add.component.html 138-145, 289; the teacher page has none), and it can tell parents twice after a save with Notify parents on; Covers and demo data updated
- 2026-11-06 · panel (user, director, writer, PM, PO) · 4 changes: [5.1] says Notify parents is on each time the page opens (attendance.add.component.ts 68), [6.2] Show marks one student absent instead of clicking Mark all present, which is hidden while everyone is Present (attendance.table.component.html 4), [7.2] end tiles by number and title, demo names from the Maple Grove demo world
- 2026-11-03 · critic · 6 changes: [1.1] no "about a minute" promise, says who it is for; [2.3] split semicolon; [3.1] clearer toggle back; [3.2] explains Unmark all / Mark all present plainly and reminds to re-mark parent-reported absences (matches Show); [4.4] "key" to "guide" (translates badly); [6.1] clearer opener
- 2026-11-03 · validator · checked against master d36d69ed8 · 3 fixes: students start as Present (not Not Marked; applyStartingStatus), Not Marked shown via Unmark all, register loads on picking the section (Generate reloads)

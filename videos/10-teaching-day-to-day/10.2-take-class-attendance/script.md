---
id: "10.2"
title: Take class attendance
target: 7:30
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
- Why take the register in Ad-Din; Students and Attendance Excuse tabs
- In the app: only the round status icon marks absent; the arrow and swipe open Sick, Late, Early, Excuse; the first card's hint; the ⋮ menu (Refresh, Reset attendance, View status legend)
- Reset a late or early time; add an excuse for a student (dates, reason, time, description) and delete one
- What parents receive when you save (app notification; email when not simply present; only for changed students); Cancel; correcting a register later
- Attendance Excuse tab: Past excuses, Filter by date, Submit new excuse, edit or delete until attendance is marked

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo madrasah "Maple Grove Madrasah" (Premium); teacher Bilal Hussain is class teacher of Class "Maktab Level 1", section "A", and also teaches the subject "Quran" there (so the subject wise switch shows)
- Section "A" with eight enrolled demo students: the demo world's Zaid Karim, Hana Mirza, Ibrahim Nasser, Layla Haddad and Yahya Saleh, plus three more made-up names (no real photos), no attendance taken yet for today
- One student with an Absent excuse already sent by a parent for today (starts as Absent; the text shows in the Excuse Note column, and as an Excuse chip in the app)
- Web: signed in as Bilal. App: the same account in a phone frame
- For [5.3]: the demo admin Yusuf Rahman on Admin Portal → Attendance, Maktab Level 1 A with today's register already saved
- For [6a.1]: Hana Mirza has two past excuses (one Sick for a day last week with attendance already marked, one Absent for next Monday not yet marked)

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

#### [1.1a] Why
**Say:** Taking the register in Ad-Din means parents hear about an absence the same day, and your madrasah keeps one record of every student's attendance. It works the same on a laptop and in the app.
**Show:** Split screen: the web register and the app register for the same class.

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

#### [2.3a]
**Say:** Two tabs sit under the date. **Students** is the register. **Attendance Excuse** lists excuses for planned absences, which you'll see at the end of this video.
**Show:** Spotlight the "Students" tab (active), then the "Attendance Excuse" tab. Stay on Students.

### 3. Present or absent
#### [3.1] Present to Absent
**Say:** Every student starts as **Present**, unless a parent has already reported them absent or sick. Tap a student's round button to mark them **Absent**. Tap it again to make them present.
**Show:** All round buttons green, except the student with the parent's excuse (red, excuse text in the Excuse Note column). Click one green button: red cross. Click again: green tick.

#### [3.2] Mark all present
**Say:** **Unmark all** clears the register, and everyone shows **Not Marked**. **Mark all present** marks everyone present again. Then change only the few who are away, including anyone a parent reported.
**Show:** Click "Unmark all": every button turns grey (tooltip "Not Marked"). Click "Mark all present": every button turns green. Click the excused student's button to mark them absent again.

#### [3.3] In the app
**Say:** In the app, tap the round icon on a student's card to switch between present and absent. Tapping anywhere else on the card changes nothing, so you can scroll the list safely.
**Show:** Phone frame, same register. Tap the round icon on one card: it changes from green to red. Tap the student's name: nothing changes.

### 4. Late, sick and early pickup
#### [4.1] Remarks
**Say:** For more detail, use the buttons under **Remarks**: **Sick**, **Late**, **Early Pickup** and **Excuse**. In the app, swipe a card to the left, or tap the arrow at its right edge, to see them.
**Show:** Web. Spotlight the Remarks buttons on one row. Cut to the phone: swipe a card left to reveal Sick, Late, Early, Excuse; tap the arrow to close it. Tap the arrow on another card: the same buttons slide out.
**Caption:** For more detail, use the Remarks buttons: Sick, Late, Early Pickup and Excuse. In the app, swipe a card left or tap its arrow.

#### [4.1a]
**Say:** When the list opens in the app, the first card slides a little to the left and back, to show you that these buttons are there.
**Show:** Phone. Reload the register: the first card peeks one tray button, then springs back. Spotlight it.

#### [4.2] Late
**Say:** Tap **Late**, set the time the student arrived, and tap **Set time**. The time then shows on their row.
**Show:** Web. Click the Late button on one row; the "Late arrival time" sheet opens. Set 9:10 AM, click "Set time". The amber time chip shows on the row.

#### [4.3] Early Pickup and Sick
**Say:** **Early Pickup** works the same way, with the time they left. **Sick** marks the student absent because of illness.
**Show:** Click Early Pickup on another row, set a time, "Set time". Click Sick on a third row: its button turns pink and the student shows as absent.

#### [4.3a] Change a time
**Say:** If you set the wrong time, tap the time on the student's row. This clears **Late** or **Early Pickup**, and you can set it again.
**Show:** Click the amber 9:10 AM chip: it changes back to the Late button. Click Late again, set 9:15 AM, "Set time".

#### [4.3b] Add an excuse
**Say:** If a parent tells you about an absence in person, tap **Excuse**. Choose the **Start Date** and **End Date**, then **Select Reason**: Absent, Late, Sick or Early Pickup. For Late or Early Pickup, also choose the time.
**Show:** Click "+ Excuse" in the Excuse Note column for Ibrahim Nasser. The "Attendance Excuse" sheet opens. Pick today as Start Date and End Date, open "Select Reason" (Absent, Late, Sick, Early Pickup), pick Sick.

#### [4.3c]
**Say:** Add a **Description** if it helps, then tap **Save**. An Absent or Sick excuse for today also marks the student on the register. To remove an excuse, tap the bin beside it.
**Show:** Type "Fever, back on Thursday" in Description; click Save. The excuse text shows in the Excuse Note column and the row turns Sick. Spotlight the bin icon beside it; do not click it.

#### [4.4]
**Say:** The guide under the table explains every status, from **Present** to **Not Marked**.
**Show:** Spotlight the legend under the table: Present, Absent, Sick, Late, Early Pickup, Excuse, Not Marked.

#### [4.4a] The app menu
**Say:** In the app, the three dots at the top hold **Refresh**, **Reset attendance**, which undoes your changes since the last save, and **View status legend**.
**Show:** Phone. Tap the three dots: Refresh, Reset attendance, View status legend. Tap "View status legend": the sheet lists each status. Tap Close.

### 5. Save
#### [5.1] Notify parents
**Say:** With **Notify parents** on, families are told when you save. It's on each time you open the page. Turn it off if you're only correcting a mistake.
**Show:** Spotlight the "Notify parents" switch in the toolbar; leave it on.

#### [5.1a] What parents receive
**Say:** Parents get an app notification for their child. When the child is absent, sick, late or picked up early, they get an email too. If you save the register again, only students whose status changed are included.
**Show:** Zoom on the line under the switch: "Parents/guardians are notified when you save". Then flick the switch off: "Notifications are held for this save". Turn it back on.

#### [5.2]
**Say:** Tap **Save**. A message confirms the attendance is saved. **Cancel**, beside it, puts the register back as it was at the last save. In the app, **Save** floats at the bottom of the list.
**Show:** Click "Save". The confirmation message appears. Spotlight "Cancel". Cut to the phone: spotlight the floating Save button.

#### [5.2a] Correct it later
**Say:** To correct a register, pick the same date, class and section, change the student, and save again. Parents are told only about the student you changed.
**Show:** Web. The saved register. Click Zaid Karim's button to mark him absent, click it again to make him present, then click Save.

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

### 6a. Excuses from parents
#### [6a.1] Attendance Excuse tab
**Say:** On the **Attendance Excuse** tab, choose a **Child** to see their **Past excuses**. Use **Filter by date** to narrow the list, or **Submit new excuse** to log a future absence.
**Show:** Click the "Attendance Excuse" tab. Select Child: Hana Mirza. The "Past excuses" list shows two rows. Spotlight "Filter by date" and "Submit new excuse".

#### [6a.2]
**Say:** You can edit or delete an excuse until attendance is marked for that day. After that, it shows **Attendance marked**.
**Show:** Spotlight the edit and delete icons on next Monday's excuse, then "Attendance marked" on last week's.

### 7. Next
#### [7.1] Done
**Say:** Your register is saved, and parents can see their child's attendance in the Ad-Din app.
**Show:** The saved register, all rows marked.

#### [7.2] Close
**Say:** Next, video 10.4: Record daily Hifz progress, and video 14.2: Check attendance and report an absence.
**Show:** End card with two tiles: "10.4 Record daily Hifz progress" and "14.2 Check attendance and report an absence".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 2:39 → 5:13 narration, 12 scenes added: [1.1a] why, [2.3a] Students and Attendance Excuse tabs, [4.1a] first-card hint, [4.3a] clear a time, [4.3b]/[4.3c] add and remove an excuse, [4.4a] app menu, [5.1a] what parents receive (MadressahNotificationService SendClasswiseAttendanceNotification_v2: push, email when not plain Present, changed students only), [5.2a] correct a register, [6a.1]/[6a.2] new chapter on the Attendance Excuse tab. Updated for origin/master d0604ce7f (attendance card swipe/tray UX): [3.3] only the round status icon toggles present/absent in the app (a card tap no longer does), [4.1] the arrow at the card's right edge opens the tray too; [5.2] adds Cancel and the floating Save

- 2026-11-07 · manager · panel decisions, "All recommended" · added [5.3] on Send Attendance Notifications (decision 29): only the Admin Portal attendance page has it (adminPortal.v2 attendance.add.component.html 138-145, 289; the teacher page has none), and it can tell parents twice after a save with Notify parents on; Covers and demo data updated
- 2026-11-06 · panel (user, director, writer, PM, PO) · 4 changes: [5.1] says Notify parents is on each time the page opens (attendance.add.component.ts 68), [6.2] Show marks one student absent instead of clicking Mark all present, which is hidden while everyone is Present (attendance.table.component.html 4), [7.2] end tiles by number and title, demo names from the Maple Grove demo world
- 2026-11-03 · critic · 6 changes: [1.1] no "about a minute" promise, says who it is for; [2.3] split semicolon; [3.1] clearer toggle back; [3.2] explains Unmark all / Mark all present plainly and reminds to re-mark parent-reported absences (matches Show); [4.4] "key" to "guide" (translates badly); [6.1] clearer opener
- 2026-11-03 · validator · checked against master d36d69ed8 · 3 fixes: students start as Present (not Not Marked; applyStartingStatus), Not Marked shown via Unmark all, register loads on picking the section (Generate reloads)

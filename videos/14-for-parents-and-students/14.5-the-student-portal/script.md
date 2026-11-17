---
id: "14.5"
title: The student portal
target: 5:00
prereq:
  - "06.4"
status: scripted
audience:
  - Student
platform: Both
flags:
  - "Covers says marks: shown as Academic Activity scores. Exam Marks (the older feature, off by default) is left out of the series on purpose (decided 2026-11-03) and is not shown."
---

# 14.5 The student portal

## Goal
As a student, find your timetable, attendance, Hifz progress, classwork and marks in the Ad-Din app, and know where they are on the web.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->
- Your own Ad-Din student account from your madrasah
- The Ad-Din app or a web browser

## Covers
- Timetable, attendance, Hifz, classwork, marks
- Student Portal tour: Library, Recognition, Holiday, Grade, Delegations, Class Announcements
- Madrasah Report (the student's own reports)
- Why use it; your username and email (Tap to copy)
- Class Announcements and Messages on the student home (Open inbox; no New message for students)
- Absences are reported by a parent, not the student
- Hifz results by email and app notification (10.4)
- The activity page: Your work, Add files, Turn in, Comments; turned-in work can't be changed
- The student's report list (Hifz, attendance and library reports)

## Demo data
- Student "Hana Mirza" from the demo world (username `hana_mirza`), Student role only, in "Hifz Class A" (marked as a Quran Hifz class) and "Maktab Level 1", section A, at Maple Grove Madrasah (Academic Activity on)
- Today's routine: three classes, one happening now; class routines for the week with both classes in them (the line under Hana's name lists the classes found in her week's routine)
- Today's attendance: Present in both classes; subject-wise periods on; Term 1 summary with marked days
- Today's Hifz record from teacher "Bilal Hussain": marked (mark 9, 2 mistakes), with a teacher note; one record yesterday
- Classwork: "Surah Al-Mulk test" graded 18/20, "Seerah worksheet" due later this week, "Arabic vocabulary quiz" missing
- Maple Grove Madrasah has Class Announcements switched on; Hana has one borrowed library book and one "Student of the Month" award; attendance marked this term so "Attendance by Student" has data
- One class announcement (a note) from Bilal Hussain for Hana's class; two messages in Hana's inbox, one unread
- "Seerah worksheet" with a teacher's note and no files yet; "Surah Al-Mulk test" already graded (locked)
- Hana's demo email hana.mirza@example.com (demo only)
- Phone frame for the app; a browser frame for the web shots in chapter 7
- The Madrasah Report page shows a Payment Reports card ("Fees Due Student") to students even with the Payment Module off (`report.component.ts` 163-186): keep it out of the shot

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Your own Ad-Din
#### [1.1] Opening
**Say:** This video is for students. You'll see where to find your timetable, attendance, Hifz progress, classwork and marks in Ad-Din, and what else is in your portal.
**Show:** Title card: "The student portal". Phone frame on the app home.

#### [1.2]
**Say:** Your madrasah has already given you your own account. Sign in with it in the Ad-Din app, or on the Ad-Din website.
**Show:** Opening card from You'll need.

#### [1.2a] Why use it
**Say:** Your portal shows your day and your progress in one place. You can see what's due before it's late, read your teacher's notes, and see how your Hifz is going.
**Show:** Slow scroll down Hana's app home.

### 2. Your home
#### [2.1]
**Say:** After you sign in, the app opens on your home. Your card says **Assalamu alaikum**, with your name and your classes underneath.
**Show:** Spotlight the identity card: "Assalamu alaikum", "Hana Mirza", and the line "Hifz Class A · Maktab Level 1".

#### [2.1a] Your username
**Say:** Tap your name to see your username and email. Tap either one to copy it, which helps if you need it to sign in on another device.
**Show:** Tap "Hana Mirza": "@hana_mirza" and the demo email with "Tap to copy". Tap the username: toast "Copied to clipboard". Tap the name again.

#### [2.2] Announcements and messages
**Say:** **Class Announcements** shows the latest posts from your teachers; tap **View all** to see every post. The **Messages** card lists your latest messages, and **Open inbox** opens them all.
**Show:** Spotlight the Class Announcements card and "View all". Scroll to the Messages card: "1 unread", the two messages, "Open inbox" (no New message button for a student).

### 3. Your timetable
#### [3.1] My Routine
**Say:** **My Routine** lists today's classes and times. **Now** marks the class that's on, and **Next** the one after it.
**Show:** Spotlight the My Routine card; zoom on the "Now" and "Next" tags.

#### [3.2]
**Say:** Use the arrows to see the other days of the week, and tap the day in the middle to return to **Today**.
**Show:** Tap the right arrow twice, then tap the day label: "Today". (The week runs Sunday to Saturday and the arrows stop at its ends, so record Sunday to Thursday.)

#### [3.3] Full timetable
**Say:** For the full timetable, open the menu, then **Student Portal**, then **Class Routine**. It has your routine, plus views by class and by teacher.
**Show:** Tap ☰ → Student Portal → Class Routine. The "Class Routine" page with tabs "My Routine", "View By Class", "View By Teacher". Go back to the home.

### 4. Attendance
#### [4.1] Today
**Say:** The **Attendance** card shows today's status for each class: **Present**, **Late**, **Absent** or **Sick**, or **Not taken** if it isn't marked yet.
**Show:** Scroll to the Attendance card, Today tab. Spotlight the rows and their pills.

#### [4.2] Subjects and term
**Say:** **Subject Wise** shows each lesson. **Term dashboard** sums up your term and shows how much of it you were present.
**Show:** Tap "Subject Wise", then "Term dashboard": the ring and the "present this term" line.

#### [4.3]
**Say:** If you'll be away, ask your parent to tell the madrasah. Parents send absence notes from their own app, as video 14.2 shows.
**Show:** Spotlight the Today tab: no Report an absence button on a student's card.

### 5. Hifz
#### [5.1]
**Say:** **Hifz progress** shows what you recited today: where you started and ended, your mark and mistakes, and your teacher's note.
**Show:** Scroll to Hifz progress. Spotlight Start and End, the badge "9 · 2 mistakes", then tap the note to expand it.

#### [5.2]
**Say:** Tap the date to look back at another day.
**Show:** Tap the date chip and pick yesterday.

#### [5.3]
**Say:** When your teacher marks a task, you and your parents get an email and an app notification with the result.
**Show:** A notification banner with Hana's Hifz result slides down; tap it away.

### 6. Classwork and marks
#### [6.1] What's due
**Say:** **My Classwork** lists the work your teachers set. Check **Missing** and **Due soon**, so you don't miss anything.
**Show:** Scroll to My Classwork. Tap "Missing", then "Due soon".

#### [6.2] Your marks
**Say:** **Graded** shows your marks, each out of its total. Tap one to open it, or tap **All activities** to see everything.
**Show:** Tap "Graded": "Surah Al-Mulk test" "18/20". Tap it: the Activity Score Management page opens. Go back.

#### [6.3] Hand in work
**Say:** Open a task, such as a worksheet, to read the **Teacher's notes** and any **Resources**. Under **Your work**, tap **Add files** to attach your work, then **Turn in**. After that, you can't change it.
**Show:** Tap "Seerah worksheet": its page opens. Spotlight Teacher's notes, Resources, "No files yet. Add your work below.", "Add files" and "Turn in". Don't tap Turn in.

#### [6.4] Comments
**Say:** Use **Comments** to ask your teacher a question about the task. Graded work is locked, and its button says **Close**.
**Show:** Spotlight the Comments box ("Type your message here…"). Go back; open "Surah Al-Mulk test": no Add files or Turn in; spotlight "Close" and tap it.

### 7. On the web
#### [7.1]
**Say:** On a computer, sign in on the Ad-Din website. Open **Student Portal** in the menu for the same pages, such as **Class Routine**, **Attendance**, **Quran Hifz Assignments** and **Academic Activity**.
**Show:** Browser frame: Hana signed in on the web. Sidebar → Student Portal, expanded. Spotlight Class Routine, Attendance, Quran Hifz Assignments, Academic Activity.

#### [7.2] More in your portal
**Say:** Your portal has more: **Library** for books you've borrowed, **Recognition** for your awards, **Class Announcements** from your teachers, and **Holiday**, **Grade** and **Delegations**. The same menu is in the app.
**Show:** Still in the expanded Student Portal, spotlight Library, Recognition, Class Announcements, Holiday, Grade, Delegations in turn. Click "Recognition": the "Student" tab with Hana's "Student of the Month". Go back.
**Caption:** Also in your portal: Library, Recognition, Class Announcements, Holiday, Grade and Delegations.

#### [7.3] Your reports
**Say:** Under **Reports**, **Madrasah Report** has reports about you, such as **Attendance by Student**. Tap **Run** to open one.
**Show:** Sidebar → Reports → Madrasah Report: the Report page with the "Student" tab. Keep the Payment Reports card out of the shot. Click "Run" beside "Attendance by Student": Hana's attendance report opens.

#### [7.3a]
**Say:** Your list also has Hifz reports, such as **Quranic Assignment Summary**, attendance by class section or subject, and **Library Due Report by Student**, which shows books you need to return.
**Show:** Spotlight Assignment Details By Student, Quranic Assignment Summary, Attendance by Class-Section, Attendance by Subject, Library Circulation Report by Student and Library Due Report by Student. Keep the Payment Reports card out of the shot.

### 8. Next
#### [8.1] Recap
**Say:** Now you know where to find your day, your attendance, your Hifz, your marks and the rest of your portal. Keep up the good work.
**Show:** Back to the phone frame on Hana's app home.

#### [8.2] Close
**Say:** Next, video 15.5: Read and listen to the Quran. Or video 15.1: Prayer times, monthly timetable and Qiblah.
**Show:** End card with two tiles: "15.5 Read and listen to the Quran" and "15.1 Prayer times, monthly timetable and Qiblah".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 2:33 → 4:02 narration, 8 scenes added: [1.2a] why use it, [2.1a] username and email with Tap to copy, [2.2] Class Announcements and Messages on the student home, [4.3] absences are reported by a parent (14.2), [5.3] Hifz result notification (10.4), [6.3] the task page, Add files and Turn in, [6.4] Comments and locked graded work, [7.3a] the student report list. Checked against origin/master d0604ce7f (student-section, student-pane, attendance-card, messages-card, studentPortal activity.score mark, report.component.ts visibleTo)
- 2026-11-06 · panel (user, director, writer, PM, PO) · 4 changes: [3.2] "return to" (no phrasal verb), [7.3] keeps the Payment Reports card off camera (report.component.ts 163-186), [8.2] end tiles by number and title; demo names from the Maple Grove demo world (student Hana Mirza in Hifz Class A and Maktab Level 1, teacher Bilal Hussain)
- 2026-11-03 · manager · decisions via chat · Exam Marks decided (left out of the series): flag wording updated; script unchanged
- 2026-11-03 · critic · 3 changes: target 4:00, [1.1] opening mentions the rest of the portal, [6.1] "so nothing slips" (idiom) replaced, [8.1] recap updated · fold: [7.2] Library, Recognition, Class Announcements, Holiday, Grade, Delegations; [7.3] Madrasah Report with Run
- 2026-11-03 · validator · checked against master d36d69ed8 · 3 fixes: demo data (Hifz class flag, both classes in the week routine for the name line), [3.2] record Sun–Thu so the right arrow works twice

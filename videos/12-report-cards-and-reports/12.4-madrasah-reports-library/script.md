---
id: "12.4"
title: Madrasah reports library
target: 7:30
prereq:
  - "06.4"
status: scripted
flags:
  - "Pinned reports are saved in the browser (localStorage), not on the account, so they don't follow the user to another computer; the script says so."
---

# 12.4 Madrasah reports library

## Goal
Find, run and download the madrasah reports you need, from Hifz progress and attendance to class lists, and pin your favourites.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Hifz, attendance, progress and class reports
- pinning reports
- library, interview and people-details reports (one line)
- Why use the library; who sees which reports (Admin and Teacher views; parents and students have their own, 14.4 and 14.5)
- The other Hifz reports: Classwise Assignment Summary, Assignment Details By Student, Quranic Assignment Summary
- Hifz Tracker: the header (paras completed), BULK (Save All to PDF, Download All, Email All), the email options, the Subject Mapping Configuration
- Attendance by Class-Section: All classes (admins), the figures, Term overview, By month and Daily, Include Inactive Students and Show Inactive terms, how the rate is counted; Attendance by Student and Attendance by Subject
- Progress Report by Class (Average of all subjects) and by Subject for Class Section; the other class-section reports
- Privacy of people-details reports

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Signed-in demo account Yusuf Rahman, Madrasah Admin and also a Teacher at Maple Grove Madrasah (so the Admin and Teacher buttons both show)
- Class "Hifz Class A", section "Morning", teacher "Bilal Hussain", students from the demo world "Maryam Rahman", "Zaid Karim", "Ibrahim Nasser"
- "Hifz Class A" marked as a Hifz class (the Hifz Tracker lists only Hifz classes), with subjects "Quran Hifz" and "Juz Completion" and a few weeks of Hifz assignments for each student
- The Hifz Tracker's Subject Mapping Configuration (gear button) already saved for "Hifz Class A": Sabaq / Lesson Subject "Quran Hifz", Juz/Para Completion Approval Subject "Juz Completion" (without it the subjects stay empty and a toast asks to set them)
- Term "Term 1 2026–27" with attendance taken on most days, including a few absences and lates
- Academic Activities with marks for Maryam Rahman in Term 1
- The madrasah's Exam Marks setting off (the default), so there is no Exam Reports card; Exam Marks is left out of the series
- The Payment Reports card shows on this page even with the Payment Module off (`report.component.ts` 163-186 has no switch for it): keep it out of every shot
- No pinned reports at the start
- At least two class sections with attendance, so All classes compares them; one inactive student in Hifz Class A for the Include Inactive Students shot
- Maryam Rahman has 22 of 30 paras recorded as completed on the Hifz Tracker (demo figure)
- Hifz Tracker email sending mocked; no real email or push goes out

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Before you start
#### [1.1] Opening
**Say:** Ad-Din keeps a library of ready-made reports for your madrasah: Hifz, attendance, progress, class lists and more. In this video for admins and teachers, you'll run them and pin your favourites.
**Show:** Title card: "Madrasah reports library".

#### [1.2]
**Say:** Your classes and students are already set up, and teachers have been taking attendance and recording Hifz.
**Show:** Opening card from You'll need.

#### [1.2a] Why use it
**Say:** These reports answer the questions your committee and parents ask, such as who is behind in Hifz, which class has the most absences, or how to reach a parent. They're ready-made, so there's nothing to build.
**Show:** Slow pan across the report cards on the Madrasah Report page (Payment Reports card out of the shot).

### 2. Open the library
#### [2.1] Madrasah Report
**Say:** Go to **Reports**, then **Madrasah Report**. Your home madrasah is chosen under **Madrasah/School Name:**.
**Show:** Sidebar → Reports → Madrasah Report. Spotlight the madrasah picker.

#### [2.2] Your role
**Say:** If you have more than one role, the buttons at the top switch the list. **Admin** shows the admin reports; **Teacher** shows the ones a teacher can run.
**Show:** Click "Teacher": the list gets shorter. Click "Admin" again.

#### [2.2a]
**Say:** Some reports are for admins only, such as the progress reports and the people-details reports. Parents and students have their own shorter list, as videos 14.4 and 14.5 show.
**Show:** With "Admin" selected, spotlight the Progress Reports card; click "Teacher": the card is gone. Click "Admin" again.

#### [2.3]
**Say:** Reports are grouped in cards, such as **Hifz Reports** and **Attendance Reports**. Tap **Run** beside a report to open it.
**Show:** Pan across the report cards; spotlight the Run buttons. Keep the Payment Reports card out of the shot.

### 3. Hifz progress
#### [3.1] Hifz Progress Report
**Say:** Under **Hifz Reports**, run **Hifz Progress Report**.
**Show:** Click "Run" beside "Hifz Progress Report". The "Hifz Tracker" page opens.

#### [3.1a] Other Hifz reports
**Say:** The same card has three more. **Classwise Assignment Summary** shows a month of Hifz work for a class section. **Assignment Details By Student** and **Quranic Assignment Summary** cover students between two dates you choose. The summary adds absences, lates and failed attempts.
**Show:** Spotlight the three rows in the Hifz Reports card. Cutaway: a Quranic Assignment Summary page for Hifz Class A Morning with "Absent", "Lates" and "Times Failed" on a student.

#### [3.2]
**Say:** Choose the **CLASS** and **SECTION**. The two Hifz subjects fill in by themselves, from the class's Hifz setup. An admin saves that setup once with the gear button. Then pick a student under **STUDENT**.
**Show:** Pick "Hifz Class A", "Morning". "Quran Hifz" fills SABAQ / LESSON SUBJECT and "Juz Completion" fills JUZ/PARA COMPLETION APPROVAL SUBJECT by themselves (these boxes can't be changed here). Spotlight the gear at the top right. Open "Select Student" under STUDENT; pick "Maryam Rahman". Her progress loads.

#### [3.3]
**Say:** Use the arrows to move between students. Under **THIS REPORT**, download the student's report as a PDF or email it to the parents.
**Show:** Click the next arrow: Zaid Karim. Spotlight the download and email icons under THIS REPORT.

#### [3.3a] The tracker sheet
**Say:** The sheet shows the student's class, teacher and parents, and how many of the thirty paras they've completed.
**Show:** Zoom on the header: "Quran Hifz Progress and Analysis Sheet", Class/Section, Teacher, PARENT / GUARDIAN, then "22 / 30 Paras completed".

#### [3.3b] Bulk
**Say:** Under **BULK**, **Save All to PDF** puts the whole section into one PDF, **Download All** downloads it, and **Email All** sends each student's report to their linked parents.
**Show:** Spotlight Save All to PDF, Download All and Email All under BULK. Click "Email All": the "Bulk Email Report Distribution" window opens.

#### [3.3c] Email options
**Say:** Only students with a linked parent who has a valid email can receive it. You can also send a push notification, send to unverified emails, and add an archive address. Then tap **Send Reports Now**.
**Show:** Spotlight "Only students with linked parent accounts and valid email addresses can receive reports via email.", then "Also notify via Ad-Din App Push Notification", "Send even if email is unverified" and "Archive Email (CC)". Spotlight "Send Reports Now"; click "Cancel".

#### [3.4] Hifz subjects
**Say:** If the subjects are empty, an admin taps the gear. In **Subject Mapping Configuration**, choose the class, the **Sabaq / Lesson Subject** and the **Juz/Para Completion Approval Subject**, then tap **Save Mapping**.
**Show:** Click the gear ("Configure Hifz Subjects"). The Subject Mapping Configuration window shows Hifz Class A with both subjects already set. Spotlight "Save Mapping"; click "Cancel".

### 4. Attendance
#### [4.1] Attendance by Class-Section
**Say:** Back in the library, under **Attendance Reports**, run **Attendance by Class-Section**.
**Show:** Sidebar → Reports → Madrasah Report again. Click "Run" beside "Attendance by Class-Section".

#### [4.2]
**Say:** Choose a class, a section and a term. The report loads straight away, with a summary and each student's attendance.
**Show:** "Select Class" → "Hifz Class A", "Select Section" → "Morning", "Select Term" → "Term 1 2026–27". The summary and table load.

#### [4.2a] All classes
**Say:** Admins can also choose **All classes** to compare every class section side by side, highest attendance first. Teachers see only their own sections.
**Show:** Cutaway: Select Class → "All classes"; the "Class sections" table loads ranked. Back to Hifz Class A, Morning.

#### [4.2b] The figures
**Say:** The boxes at the top show the days with attendance marked, the attendance rate, absences, with how many parents excused, and late arrivals. Late and early pickup count as present.
**Show:** Spotlight "Days with attendance marked", "Attendance on marked days", "Absences, 2 excused by parents" and "Late arrivals". Zoom on the note under the table ("Rate is present divided by marked days…").

#### [4.2c] Views and options
**Say:** Switch between **Term overview**, **By month** and **Daily**. Tick **Include Inactive Students** to add students who have left, or **Show Inactive terms** to pick an older term.
**Show:** Click "By month", then "Daily", then "Term overview". Tick "Include Inactive Students": one more student appears. Untick it. Spotlight "Show Inactive terms".

#### [4.3]
**Say:** Use **Export CSV** for a spreadsheet, **Print**, or **Download PDF**.
**Show:** Spotlight the three buttons at the top right.

#### [4.3a] One student or one subject
**Say:** **Attendance by Student** shows one student at a time, with a calendar of each class day. Use **Previous** and **Next** to move between students. **Attendance by Subject** shows the rate for each subject.
**Show:** Run "Attendance by Student": Maryam's calendar loads; click "Next". Spotlight "Attendance by Subject" in the library.

### 5. Progress and class reports
#### [5.1] Progress
**Say:** **Progress Reports** show a student's academic results. Run **Progress Report by Student**, choose the term, class, section and student, and tap **View Report**.
**Show:** Run "Progress Report by Student". Pick "Term 1 2026–27", "Hifz Class A", "Morning", "Maryam Rahman". Click "View Report"; her results load.

#### [5.1a]
**Say:** **Progress Report by Class (Average of all subjects)** lists every student's average, and **Progress Report by Subject for Class Section** shows one subject. Both add the class median and average at the bottom.
**Show:** Run "Progress Report by Class (Average of all subjects)" for Term 1, Hifz Class A; scroll to the "Median" and "Average" rows.

#### [5.2] Class lists
**Say:** For class lists, open **Class-Section-Student-Subject Reports**. **Total Students by Class Section** lists every student with their roll number, parents' names and mobile number.
**Show:** Sidebar → Reports → Madrasah Report. Run "Total Students by Class Section"; pick the class and section; click "View Report". The list loads.

#### [5.3]
**Say:** Some reports, like this one, have a **Print** or **Download** button above the results instead. It saves them as a PDF.
**Show:** Spotlight the "Print" button above the list.

#### [5.3a] More class reports
**Say:** The same card has **Total Class and Section Details**, **Total Subject Details**, and **Student Home Masjid-Madrasah**, which shows each student's home masjid and madrasah.
**Show:** Spotlight the three rows in the Class-Section-Student-Subject Reports card.

#### [5.5] More reports
**Say:** The library also has **Library Reports**, **Interview Reports** for parent-teacher meetings, and **Role Based Access Reports**, which list your teachers, parents and administrators.
**Show:** Scroll down the library; spotlight the Library Reports, Interview Reports and Role Based Access Reports cards in turn. Don't run them. Keep the Payment Reports card out of the shot.

#### [5.5a] Personal details
**Say:** The people-details reports list phone numbers and other personal details, so download them only when you need them, and keep them within your admin team.
**Show:** Spotlight "Teacher Detail", "Parent Detail" and "Administrator Detail" under Role Based Access Reports. Don't run them.

### 6. Pin your favourites
#### [6.1] Pin
**Say:** Tap the pin beside a report you use often. It also appears under **My Favorite Reports**, so you can run it from the top.
**Show:** Click the pin beside "Attendance by Class-Section", then beside "Hifz Progress Report". Both appear under "My Favorite Reports".

#### [6.2]
**Say:** Pins are saved in this browser for this madrasah, so they don't follow you to another computer. Tap the pin again to remove one.
**Show:** Click the unpin icon beside "Hifz Progress Report" in My Favorite Reports; it disappears.

### 7. Next
#### [7.1] Done
**Say:** You can now find, run and download any madrasah report, with your favourites one tap away.
**Show:** The library with "Attendance by Class-Section" pinned at the top.

#### [7.2] Close
**Say:** Next, video 12.6: Dashboards for admins and teachers. Or video 12.3: Release report cards to parents.
**Show:** End card with two tiles: "12.6 Dashboards for admins and teachers" and "12.3 Release report cards to parents".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 2:40 → 5:33 narration, 14 scenes added: [1.2a] why use the library, [2.2a] admin-only reports and the parent and student lists (14.4, 14.5), [3.1a] the other three Hifz reports, [3.3a] the tracker sheet and paras completed, [3.3b] BULK, [3.3c] Hifz email options, [3.4] Subject Mapping Configuration, [4.2a] All classes for admins, [4.2b] the figures and how the rate is counted, [4.2c] views, Include Inactive Students and Show Inactive terms, [4.3a] Attendance by Student and by Subject, [5.1a] progress by class and by subject, [5.3a] the other class-section reports, [5.5a] keep people-details reports private. Checked against origin/master d0604ce7f (report.component.ts visibleTo, hifz.progress.report components, attendance.subject, en.json report.attendanceBy*)
- 2026-11-06 · panel (user, director, writer, PM, PO) · 8 changes: Exam Reports removed from Covers, [5.5] and demo data (Exam Marks is out of the series; the card needs the Exam Marks setting, report.component.ts 243-244), [2.3] and [5.5] keep the Payment Reports card off camera (it has no switch, report.component.ts 163-186), [3.2] split into shorter sentences, [3.3] spotlight instead of hover, [5.3] "some reports" instead of "older reports", [6.2] pins don't follow you to another computer (localStorage, report.component.ts 316-330), [7.2] end tiles by number and title; demo names from the Maple Grove demo world (Hifz Class A Morning, Bilal Hussain, Maryam Rahman, Zaid Karim, Ibrahim Nasser)
- 2026-11-03 · manager · decisions via chat · Payment Module cut until Track 11: [5.4] Payment Reports removed, payment dropped from Covers, flag dropped; target 4:30 to 4:15
- 2026-11-03 · critic · 3 changes: [1.1] second-person opening; [7.2] end-card videos named by number; fold: new [5.5] names Library, Interview, Exam and Role Based Access Reports (Covers + demo data: Exam Marks setting on)
- 2026-11-03 · validator · checked against master d36d69ed8 · 4 fixes: [3.2] Hifz Tracker subjects fill in from the class's gear-button Subject Mapping Configuration (not pickable) and a student must be picked; [2.2] Admin doesn't show every report; [6.1] a pinned report also appears under My Favorite Reports (it doesn't move); demo data adds the Hifz class flag and subject mapping

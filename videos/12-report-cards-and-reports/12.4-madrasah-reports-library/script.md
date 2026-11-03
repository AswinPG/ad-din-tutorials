---
id: "12.4"
title: Madrasah reports library
target: 4:30
prereq:
  - "06.4"
status: scripted
flags:
  - "Payment Reports need fee data from the Payment Module, which is on hold (Track 11); the script only points to the category and doesn't run a payment report. Confirm, or cut the line."
  - "Pinned reports are saved in the browser (localStorage), not on the account, so they don't follow the user to another computer; the script says so."
---

# 12.4 Madrasah reports library

## Goal
Find, run and download the madrasah reports you need, from Hifz progress and attendance to class lists, and pin your favourites.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Hifz, attendance, progress, payment and class reports
- pinning reports

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Signed-in demo account that is Madrasah Admin and also a Teacher at the demo madrasah (so the Admin and Teacher buttons both show)
- Class "Hifz Boys A", section "Section 1", teacher "Ustadh Bilal Ahmed", students "Yusuf Rahman", "Ibrahim Khan", "Zayd Hussain"
- Hifz subjects set up: "Quran Hifz" (Sabaq / lesson) and "Juz Completion" (approval), with a few weeks of Hifz assignments for each student
- Term "Term 1 2026–27" with attendance taken on most days, including a few absences and lates
- Academic Activities with marks for Yusuf Rahman in Term 1
- No pinned reports at the start

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Before you start
#### [1.1] Opening
**Say:** Ad-Din keeps a library of ready-made reports for your madrasah: Hifz, attendance, progress, class lists and more. This video shows admins and teachers how to run them.
**Show:** Title card: "Madrasah reports library".

#### [1.2]
**Say:** Your classes and students are already set up, and teachers have been taking attendance and recording Hifz.
**Show:** Opening card from You'll need.

### 2. Open the library
#### [2.1] Madrasah Report
**Say:** Go to **Reports**, then **Madrasah Report**. Your home madrasah is chosen under **Madrasah/School Name:**.
**Show:** Sidebar → Reports → Madrasah Report. Spotlight the madrasah picker.

#### [2.2] Your role
**Say:** If you have more than one role, the buttons at the top switch the list. **Admin** shows every report; **Teacher** shows the ones a teacher can run.
**Show:** Click "Teacher": the list gets shorter. Click "Admin" again.

#### [2.3]
**Say:** Reports are grouped in cards, such as **Hifz Reports** and **Attendance Reports**. Tap **Run** beside a report to open it.
**Show:** Pan across the report cards; spotlight the Run buttons.

### 3. Hifz progress
#### [3.1] Hifz Progress Report
**Say:** Under **Hifz Reports**, run **Hifz Progress Report**.
**Show:** Click "Run" beside "Hifz Progress Report". The "Hifz Tracker" page opens.

#### [3.2]
**Say:** Choose the **CLASS** and **SECTION**, the Sabaq or lesson subject, and the subject where Juz completion is approved. The report loads for the first student.
**Show:** Pick "Hifz Boys A", "Section 1", then "Quran Hifz" under SABAQ / LESSON SUBJECT and "Juz Completion" under JUZ/PARA COMPLETION APPROVAL SUBJECT. Yusuf Rahman's progress loads.

#### [3.3]
**Say:** Use the arrows to move between students. Under **THIS REPORT**, download the student's report as a PDF or email it to the parents.
**Show:** Click the next arrow: Ibrahim Khan. Hover the download and email icons under THIS REPORT.

### 4. Attendance
#### [4.1] Attendance by Class-Section
**Say:** Back in the library, under **Attendance Reports**, run **Attendance by Class-Section**.
**Show:** Sidebar → Reports → Madrasah Report again. Click "Run" beside "Attendance by Class-Section".

#### [4.2]
**Say:** Choose a class, a section and a term. The report loads straight away, with a summary and each student's attendance.
**Show:** "Select Class" → "Hifz Boys A", "Select Section" → "Section 1", "Select Term" → "Term 1 2026–27". The summary and table load.

#### [4.3]
**Say:** Use **Export CSV** for a spreadsheet, **Print**, or **Download PDF**.
**Show:** Spotlight the three buttons at the top right.

### 5. Progress and class reports
#### [5.1] Progress
**Say:** **Progress Reports** show a student's academic results. Run **Progress Report by Student**, choose the term, class, section and student, and tap **View Report**.
**Show:** Run "Progress Report by Student". Pick "Term 1 2026–27", "Hifz Boys A", "Section 1", "Yusuf Rahman". Click "View Report"; his results load.

#### [5.2] Class lists
**Say:** For class lists, open **Class-Section-Student-Subject Reports**. **Total Students by Class Section** lists every student with their roll number, parents' names and mobile number.
**Show:** Sidebar → Reports → Madrasah Report. Run "Total Students by Class Section"; pick the class and section; click "View Report". The list loads.

#### [5.3]
**Say:** Older reports like this one have a **Print** or **Download** button above the results, which saves them as a PDF.
**Show:** Spotlight the "Print" button above the list.

#### [5.4] Payment
**Say:** If your madrasah collects fees in Ad-Din, **Payment Reports** such as the **Accounts Receivable Report** show what's owed.
**Show:** Sidebar → Reports → Madrasah Report. Spotlight the "Payment Reports" card; don't run it.

### 6. Pin your favourites
#### [6.1] Pin
**Say:** Tap the pin beside a report you use often. It moves up to **My Favorite Reports**, so you can run it from the top.
**Show:** Click the pin beside "Attendance by Class-Section", then beside "Hifz Progress Report". Both appear under "My Favorite Reports".

#### [6.2]
**Say:** Pins are saved in this browser for this madrasah. Tap the pin again to remove one.
**Show:** Click the unpin icon beside "Hifz Progress Report" in My Favorite Reports; it disappears.

### 7. Next
#### [7.1] Done
**Say:** You can now find, run and download any madrasah report, with your favourites one tap away.
**Show:** The library with "Attendance by Class-Section" pinned at the top.

#### [7.2] Close
**Say:** Next, see the dashboards for admins and teachers, or how to release report cards to parents.
**Show:** End card with two tiles: "12.6 Dashboards for admins and teachers" and "12.3 Release report cards to parents".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->

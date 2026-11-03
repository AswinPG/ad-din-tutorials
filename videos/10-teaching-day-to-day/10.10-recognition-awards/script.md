---
id: "10.10"
title: Recognition awards
target: 3:00
prereq:
  - "06.4"
status: scripted
---

# 10.10 Recognition awards

## Goal
Give a student or staff member an award, download its certificate, and send it so they and their family are told.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Student and staff awards

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo madrasah "Al-Noor Madrasah" (Premium); the demo account is a Madrasah Admin
- Teacher Yusuf Patel and teacher Aisha Rahman; demo student in Class "Maktab Level 1" with linked demo parents
- Student award created on camera: From Teacher Yusuf Patel, To Student (demo student), Student of the Month, today's date
- Staff award created on camera: From Guest "Masjid committee", To Teacher Aisha Rahman, Years of Service Award
- Two older awards in each tab, so the filters have something to find
- Certificate PDF generation and the notification mocked (a sample certificate opens; no real email or push goes out)

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Celebrate good work
#### [1.1] Opening
**Say:** Recognition lets you celebrate students and staff with an award and a certificate, such as Student of the Month.
**Show:** Title card: "Recognition awards".

#### [1.2]
**Say:** This is for madrasah admins. Your students and teachers are already in Ad-Din.
**Show:** Opening card.

### 2. Open Recognition
#### [2.1]
**Say:** In the **Admin Portal**, open **Recognition**. There are two tabs: **Student** and **Staff**.
**Show:** Sidebar → Admin Portal → Recognition. Spotlight the two tabs.

### 3. A student award
#### [3.1] From
**Say:** On **Student**, tap **Add**. Under **From**, choose **From Teacher** and pick the teacher, or **From Guest** and type a name.
**Show:** Click "Add". The Recognition window opens. "From Teacher" is selected; pick "Yusuf Patel". Tap "From Guest" to show the text box, then back to "From Teacher".

#### [3.2] To
**Say:** Under **To**, choose **To Student** and pick the student.
**Show:** "To Student" selected; pick the demo student.

#### [3.3] Type and date
**Say:** Choose the **Type**, such as **Student of the Month** or **Perfect Attendance Award**. Set the **Date** and tap **Save**.
**Show:** Open Type; spotlight the options, pick "Student of the Month". Pick today's date. Click "Save". The award appears in the list.

### 4. Certificates
#### [4.1] View Certificate
**Say:** Each award has a certificate. Tap **View Certificate** to download it as a PDF.
**Show:** Click "View Certificate" on the new row. The sample certificate PDF opens.

#### [4.2] Send Certificate
**Say:** Select the award and tap **Send Certificate**. The student, their parents and the teacher are told by email and in the app.
**Show:** Select the row, click "Send Certificate". The confirmation message shows.

### 5. A staff award
#### [5.1] Staff Recognition
**Say:** Staff awards work the same way. On **Staff**, tap **Add**, then choose who it's from, and **To Teacher** or **To Guest**.
**Show:** Click the "Staff" tab, then "Add". The "Staff Recognition" window opens. Choose "From Guest", type "Masjid committee". Under To, pick "Aisha Rahman".

#### [5.2]
**Say:** Staff types include **Teacher of the Month**, **Years of Service Award** and **Certificates of Appreciation**. Pick one, set the date, and tap **Save**.
**Show:** Open Type and spotlight those options. Pick "Years of Service Award", set the date, click "Save".

#### [5.3]
**Say:** Each staff award has its own **View Certificate** and **Send Certificate** buttons.
**Show:** Spotlight the two buttons on the new row. Click "Send Certificate"; the confirmation shows.

### 6. Next
#### [6.1] Who sees them
**Say:** Use the **Type** and date filters to find past awards. Teachers see them under **Recognition** in the Teacher Portal, and families in the Parent Portal.
**Show:** Open Filters, pick a type. Quick cut to Teacher Portal → Recognition.

#### [6.2] Close
**Say:** Your awards are given and shared. Next, see how teachers take attendance, or set up the library.
**Show:** End card with two tiles: "10.2 Take class attendance" and "10.9 Library".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · critic · 1 change: [1.2] series-standard "This is for madrasah admins"
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes (Student/Staff tabs, From/To options, types, View/Send Certificate, recipients, teachers read-only confirmed)

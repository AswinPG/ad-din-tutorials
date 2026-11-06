---
id: "03.5"
title: Import and export users in bulk
target: 3:30
prereq:
  - "03.4"
status: scripted
audience:
  - Madrasah Admin
---

# 03.5 Import and export users in bulk

## Goal
Export your madrasah’s students, parents, teachers or admins to a spreadsheet, and import students, parents or teachers back to add or update many people at once.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->
- Excel or another spreadsheet app

## Covers
- Import / Export (editable or complete), Export User Data

## Demo data
- Demo madrasah admin account with Premium, admin of the demo madrasah
- Demo madrasah with about ten students in two classes (the demo world's "Hifz Class A" and "Weekend Quran"), their parents, and three teachers
- Excel on the recording machine; the exported file is opened in Excel on camera
- A prepared CSV `teachers-import.csv`: the editable teacher export with one phone number changed and one new row with UserID empty (for example "Ms. Safiya Rahim", username `safiya_rahim`, demo email and mobile)
- Import processing answers success in the demo world; no welcome email is sent
- No real names, emails or phone numbers on screen

## Script

### 1. Many people at once
#### [1.1] Opening
**Say:** Adding people one by one takes time. In this video for madrasah admins, you’ll export your list to a spreadsheet, edit it or add new rows, and import it back.
**Show:** Title card: "Import and export users in bulk".

#### [1.2]
**Say:** You can export students, parents, teachers and admins. You can import students, parents and teachers.
**Show:** Opening card from You'll need.

### 2. Open your users
#### [2.1]
**Say:** In the sidebar, open **Admin Portal**, then **User Management**, and tap **Open users** on your madrasah. Choose the tab you want, for example **Student**.
**Show:** Sidebar → Admin Portal → User Management → "Open users" on the demo madrasah. The Student tab is open.

#### [2.2] Filters
**Say:** To export just one class, open **Filters** and choose a class and section first.
**Show:** Expand Filters; pick "Hifz Class A" in Select The Class. The list narrows. Clear it again.

### 3. Export
#### [3.1] Export User Data
**Say:** Tap **Export**. For students, Ad-Din asks which kind of file you want.
**Show:** Click "Export". The "Export User Data" window opens.

#### [3.2] Two kinds
**Say:** An **Editable Export** can be changed and imported again, but has no class details. A **Complete Report** includes classes and sections, but is read-only and can’t be imported.
**Show:** Spotlight "Editable Export" with its MODIFIABLE badge, then "Complete Report" with READ-ONLY.
**Caption:** Editable Export: change it and import it again. Complete Report: includes classes and sections, read-only.

#### [3.3]
**Say:** Choose one and tap **Export**. Ad-Din prepares the file and downloads it as a CSV.
**Show:** Select "Editable Export", click "Export". Short wait; the CSV downloads.

#### [3.4]
**Say:** On the **Parent**, **Teacher** and **Admin** tabs, **Export** downloads the file straight away.
**Show:** Teacher tab → click "Export"; the CSV downloads without a window.

### 4. Edit the file
#### [4.1] Change rows
**Say:** Open the file in your spreadsheet app. Change any details you need in the existing rows. Don’t change the column headings.
**Show:** Excel with the teacher export. Edit one teacher’s Mobile cell. Spotlight the heading row.

#### [4.2] Add rows
**Say:** To add someone new, start a new row and leave **UserID** empty. Fill in at least the salutation, first and last name, email, mobile and username.
**Show:** Type the new row for Ms. Safiya Rahim; spotlight the empty UserID cell and the required columns: Salutation, FirstName, LastName, Email, Mobile, UserName.
**Caption:** New person: new row, UserID empty. Fill Salutation, FirstName, LastName, Email, Mobile and UserName.

#### [4.3]
**Say:** Use one of the salutations Ad-Din offers, such as Mr., Ms. or Hafiz. Save the file as a CSV.
**Show:** Save as `teachers-import.csv` (CSV).

### 5. Import
#### [5.1]
**Say:** Back in Ad-Din, open the same tab, here **Teacher**, and tap **Import**. Choose your saved file.
**Show:** Teacher tab → click "Import". The file box appears; choose `teachers-import.csv`.

#### [5.2]
**Say:** Ad-Din checks every row. If one has a problem, nothing is imported and a message points to it, so you can fix the file and try again.
**Show:** Loading spinner while the import runs.

#### [5.3]
**Say:** When it’s done, a message confirms and the list refreshes. New people get a welcome email with their sign-in details.
**Show:** Confirmation message; the Teacher tab now lists Safiya Rahim and the updated mobile number.

### 6. Next
#### [6.1] Done
**Say:** You’ve exported your users and imported your changes in one go. Next, video 06.4: Add students and parents yourself, or video 06.5: Move students between sections.
**Show:** End card with two tiles: "06.4 Add students and parents yourself" and "06.5 Move students between sections".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-06 · panel (user, director, writer, PM, PO) · 3 changes: [1.1] says who it's for and what you'll do ([1.2] no longer repeats it), [6.1] names both end tiles by number and title, demo classes and names from the Maple Grove demo world
- 2026-11-03 · critic · 3 changes: [1.2] says who it's for; [4.3] 'Ad-Din's list' (not on screen) reworded; [6.1] Say names both end tiles
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes

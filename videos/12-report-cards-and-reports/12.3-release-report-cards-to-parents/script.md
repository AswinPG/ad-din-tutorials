---
id: "12.3"
title: Release report cards to parents
target: 4:45
prereq:
  - "12.2"
status: scripted
audience:
  - Madrasah Admin
---

# 12.3 Release report cards to parents

## Goal
Set the release date, turn every ready report card into a PDF, download or email them to parents, and find any card later in the Report Archive.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Release date, Download All, Email Report with push notice, Report Archive

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Signed-in demo admin (Madrasah Admin) of the demo madrasah
- Mapped report "Term Report" (Activities-Based Evaluation template, from 12.1) for "Hifz Boys A", "Section 1", teacher "Ustadh Bilal Ahmed", Term 1 mapped
- Students "Yusuf Rahman" and "Ibrahim Khan" marked Ready; "Zayd Hussain" not ready (shows greyed out)
- Parents: Yusuf's parent with a verified demo email, Ibrahim's parent with an unverified one, Zayd's parent with no email (shows "Missing")
- Demo cc address `office@demo-madrasah.example`; emails and push notices are mocked, nothing is really sent
- Report Archive with this year's "Term Report" plus one report from last year, so By year shows two folders
- A demo parent account (Yusuf's parent) for the closing shot of the parent's archive

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Before you start
#### [1.1] Opening
**Say:** Once teachers mark report cards ready, you send them home. This video shows a madrasah admin how to release them to parents.
**Show:** Title card: "Release report cards to parents".

#### [1.2]
**Say:** The report is already mapped, and teachers have finished and marked their cards ready.
**Show:** Opening card from You'll need.

### 2. Set the release date
#### [2.1] Edit the mapping
**Say:** Go to **Reports**, then **Report Builder**. Tap the pencil beside your report to edit its mapping.
**Show:** Sidebar → Reports → Report Builder. Click the "Edit mapping" pencil on "Term Report"; Report Mapping opens.

#### [2.2] Report Release Date
**Say:** Under **Release & Translation**, check the **Report Release Date**. Parents can see a card only when it's marked ready and this date has arrived.
**Show:** Spotlight "Release & Translation". Click "Pick a date"; choose today's date.

#### [2.3]
**Say:** Change it if needed, then tap **Save**. Cards that are already ready become visible to parents on that date.
**Show:** Click "Save". Back on the list.

### 3. Create the PDFs
#### [3.1] Open the cards
**Say:** Now tap **Select** on the report, choose the class and section, pick the report, and tap **Start**.
**Show:** Click "Select" on "Term Report". Pick "Hifz Boys A", "Section 1", the "Report 1" card; click "Start".

#### [3.2] Save All to PDF
**Say:** In the toolbar, under **BULK**, tap **Save All to PDF**. It makes a PDF for every card marked ready.
**Show:** Spotlight the BULK group. Click "Save All to PDF"; the prompt "This may take a few minutes" opens.

#### [3.3]
**Say:** Tap **Start**, and keep the page open until it finishes. Ad-Din shows how many cards succeeded and which failed, if any.
**Show:** Click "Start". "Saving Data" window with the progress bar; it completes: Success 2, Failed 0. Click "Close".

### 4. Download All
#### [4.1]
**Say:** To keep a copy or print them, tap **Download All**. Only saved reports can be downloaded.
**Show:** Click "Download All" in the BULK group. The "Download Reports" window opens; spotlight "Only saved reports will be available for download".

#### [4.2]
**Say:** Tick the students you want, or tick them all, and tap **Download All**. The PDFs arrive together in one file.
**Show:** Click the select-all box (the two ready students tick; Zayd stays greyed). Click "Download All"; the zip lands in the browser's downloads bar.

### 5. Email the parents
#### [5.1] Email Report
**Say:** To send the cards, tap **Email All**. Only reports **Marked as Ready** will be sent.
**Show:** Click "Email All". The "Email Report" window opens; zoom on "Only reports Marked as Ready will be sent."

#### [5.2]
**Say:** Open **Students** and tick the box to select every ready card. A student whose parent has no email shows **Missing**. Link a parent with an email in User Management first.
**Show:** Expand "Students": "3 students · 2 ready · 0 selected". Click the select-all box: "2 selected". Spotlight Zayd's red "Missing" and his greyed row.

#### [5.3] Options
**Say:** Add a cc address to keep a copy in your office mailbox. You can also send to parents whose email isn't verified yet.
**Show:** Type the demo cc address. Spotlight "Send even if Parent's email is unverified" and tick it.

#### [5.4] Push notice
**Say:** Tick **Notify Parents on Ad-Din app via 'Push Notification' as well**, so parents also get a notice on their phone. Then tap **Send**.
**Show:** Tick the push-notification option. Click "Send". Toast confirming the request.

#### [5.5]
**Say:** The **Email Status** column then follows each card, until it says **Email Sent**.
**Show:** The list refreshes by itself; zoom on the Email Status column changing from "Initiated" to "Email Sent". Close the window.

### 6. Report Archive
#### [6.1] Browse
**Say:** Every released card is kept in **Report Archive**. Browse **By year**, **By class** or **By student**, or search for a name.
**Show:** Sidebar → Reports → Report Archive. "Reports Archive" opens. Click the three tabs in turn; type "Yusuf" in the search box and pick him.

#### [6.2] One report
**Say:** Open a report to see every student's card, its email status, and whether it's complete. Download a PDF, or email one card again.
**Show:** By year → this year → "Hifz Boys A" → "Term Report". Spotlight the Download PDF, Email status and Email report columns.

#### [6.3]
**Say:** The filters at the top find students with a **Missing parent email**, or cards **Not sent** yet.
**Show:** Click "Missing parent email", then "Not sent", then "All".

#### [6.4] What parents see
**Say:** Parents open **Report Archive** too. They see their own children's cards once each card is ready and the release date has arrived.
**Show:** Switch to the demo parent's account: Reports → Report Archive shows Yusuf's "Term Report" with its Download PDF button.

### 7. Next
#### [7.1] Done
**Say:** Your report cards are with the parents, by email, on their phones, and in the archive.
**Show:** Admin's Report Archive table with "Delivered" pills.

#### [7.2] Close
**Say:** To see how ready each class is before release day, watch the dashboards video. To check other records, see the madrasah reports library.
**Show:** End card with two tiles: "12.6 Dashboards for admins and teachers" and "12.4 Madrasah reports library".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes

---
id: "14.4"
title: Report cards and interview bookings
target: 4:30
prereq:
  - "14.1"
status: scripted
flags:
---

# 14.4 Report cards and interview bookings

## Goal
Download your child's report cards, run reports about them, and book a parent-teacher interview in the Ad-Din app.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->
- The Ad-Din app, signed in with your parent account
- A child enrolled in a class

## Covers
- Report Archive, booking an interview
- Madrasah Report: the parent's own reports (Run, My Favorite Reports)
- Why: keep every report card, and meet the teacher at a time that suits you
- Report Archive: search, a grey Download PDF button when the PDF isn't ready
- The parent's report list (Hifz, attendance, interview and library reports); Attendance by Student for all your children
- Interviews: the Status filter, the slot statuses (Free, Booked, Your Booking, Completed)
- What happens after booking (teacher told; your confirmation by email and app notification; reminders, 10.8); Release (Successfully Released)

## Demo data
- Parent "Yusuf Rahman" (the demo world's account) in the app; children "Maryam Rahman" (Maktab Level 1, section A) and "Hamza Rahman" (Hifz Class A)
- A released report card "Term 1 Report" for Maryam with its PDF generated
- Attendance marked for Maryam this term, so "Attendance by Student" in Madrasah Report has data; no pinned reports at the start
- Interview event "Term 1 Parent Evening" with teacher "Fatima Siddiqui": one interview slot with 10-minute times, some Free, some booked by other parents
- Hamza's "Term 1 Report" is marked ready and released, but its PDF isn't generated yet, so its Download PDF button is grey
- One past interview slot for Maryam marked as attended, so a "Completed" row shows in last term's event (or a cutaway)
- Booking notifications mocked; a demo confirmation notification after Add
- Phone frame for every shot; the downloaded PDF opens in the phone's viewer
- The Madrasah Report page shows a Payment Reports card ("Fees Due Student") to parents even with the Payment Module off (`report.component.ts` 163-186): keep it out of the shot

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Two things in the menu
#### [1.1] Opening
**Say:** In this video for parents, you'll download your child's report cards and book a parent-teacher interview, all in the Ad-Din app.
**Show:** Title card: "Report cards and interview bookings". Phone frame on the app home.

#### [1.2]
**Say:** Your child is already enrolled. Both are in the menu, so tap the menu button at the top left of your home screen.
**Show:** Tap the ☰ button: the side menu opens.

#### [1.2a] Why it helps
**Say:** Report cards stay in Ad-Din year after year, so you don't need to keep a paper copy. And booking online lets you pick a time with your child's teacher that suits you.
**Show:** Card: "Report Archive · Parent Teacher Interview".

### 3. Report cards
#### [3.1] Open the archive
**Say:** For report cards, open the menu, tap **Reports**, then **Report Archive**.
**Show:** ☰ → Reports → Report Archive. The "Reports Archive" page opens.

#### [3.2] Find your child
**Say:** Tap **By student**, then your child's name. Each report card the madrasah has released for them is listed, year by year. When the madrasah sends report cards, you may also get them by email and a notice on your phone.
**Show:** Tap "By student", then "Maryam Rahman". Her page lists "Term 1 Report" under this year.

#### [3.2a]
**Say:** You see only your own children's cards. With several children, you can also type a name in the search box.
**Show:** Spotlight "By student" listing Maryam and Hamza only. Type "Ham" in the search box ("Find a student by name or ID, a class or a report…"); pick Hamza, then go back.

#### [3.3] Download
**Say:** Tap the button under **Download PDF** to save the report card to your phone.
**Show:** Tap the download button on "Term 1 Report": the PDF downloads and opens. Close it.

#### [3.3a]
**Say:** If the download button is grey, the PDF isn't ready yet. Check again later, or ask the madrasah office.
**Show:** On Hamza's page, spotlight the grey download button; its tip reads "PDF not generated yet".

#### [3.4] More reports
**Say:** In the same **Reports** menu, **Madrasah Report** has more reports about your child, such as **Attendance by Student**. Tap **Run** to open one.
**Show:** ☰ → Reports → Madrasah Report. The Report page with the "Parent" tab and Maple Grove Madrasah selected; scroll past Hifz Reports, Attendance Reports and Library Reports, keeping the Payment Reports card out of the shot. Tap "Run" beside "Attendance by Student": Maryam's attendance report opens. Go back.

#### [3.4a] Your reports
**Say:** Your list has Hifz reports, attendance by student, class section or subject, your interview schedule, and your child's library loans and due books.
**Show:** Slow scroll: spotlight Assignment Details By Student, Quranic Assignment Summary, Attendance by Student, Attendance by Class-Section, Attendance by Subject, Parent Teacher Interview Schedule by Student, Library Circulation Report by Student and Library Due Report by Student. Keep the Payment Reports card out of the shot.

#### [3.4b]
**Say:** In **Attendance by Student**, the print and download menu can include **All my children** in one copy.
**Show:** In Maryam's attendance report, open the "Download PDF" menu: spotlight "This student" and "All my children (2)". Close the menu.

#### [3.5]
**Say:** If you use a report often, tap the pin beside it, and it stays at the top under **My Favorite Reports** on this phone.
**Show:** Tap the pin icon beside "Attendance by Student": it appears under "My Favorite Reports".

### 4. Book an interview
#### [4.1] Open interviews
**Say:** When your madrasah opens parent-teacher interviews, you get an email and an app notification. Open **Parent Portal** and tap **Parent Teacher Interview**.
**Show:** ☰ → Parent Portal → Parent Teacher Interview. The "Parent Interview" page opens.

#### [4.2] Choose a teacher
**Say:** Choose the **Event Name**, then the **Teacher Name**. Ad-Din picks the first **Interview Slot** and lists its times.
**Show:** Pick Event Name "Term 1 Parent Evening", then Teacher Name "Fatima Siddiqui". Interview Slot fills in and the times appear in the table.

#### [4.2a]
**Say:** To see only open times, set **Status** to **Free**.
**Show:** Open "Status" and pick "Free": only free rows remain. Clear it back.

#### [4.3] Pick a time
**Say:** Times marked **Free** are open. Select one, then tap **Book**.
**Show:** Select a Free row. Tap "Book": the "Manage Booking" box opens.

#### [4.3a] Slot status
**Say:** **Booked** times are taken by other families, **Your Booking** is yours, and **Completed** means the meeting has taken place.
**Show:** Spotlight a "Booked" row, then the "Completed" row (cutaway from last term's event).

#### [4.4] Confirm
**Say:** Under **Select Student**, choose the child this meeting is about, then tap **Add**.
**Show:** Pick "Maryam Rahman". Tap "Add": toast "Successfully added". The row's Status reads "Your Booking".

#### [4.4a] What happens next
**Say:** The teacher is told about your booking, and you get a confirmation by email and app notification. Before the day, the madrasah may also send a reminder, as video 10.8 shows.
**Show:** A confirmation notification slides down; tap it away. The Parent Interview list with "Your Booking".

#### [4.5] Change it later
**Say:** If you can't come, select your booking and tap **Release** to free the time. Tap **Edit** to leave **Parent Comments** for the teacher.
**Show:** Select the booked row. Spotlight "Release", then tap "Edit": spotlight "Parent Comments". Close without saving.

#### [4.5a]
**Say:** When you release a time, Ad-Din says **Successfully Released**, and the time is free again for other families. A meeting that's already **Completed** can't be released.
**Show:** Cutaway from a separate take: select a booking, tap "Release": toast "Successfully Released"; the row reads "Free".

### 5. Next
#### [5.1] Recap
**Say:** Now you can keep every report card and report, and book time with your child's teacher.
**Show:** The Parent Interview list with "Your Booking" on the booked time.

#### [5.2] Close
**Say:** Next, video 14.5: The student portal, to see what your child sees. Or video 14.1: Your parent home in the app.
**Show:** End card with two tiles: "14.5 The student portal" and "14.1 Your parent home in the app".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 1:56 → 3:18 narration, 9 scenes added: [1.2a] why, [3.2a] only your children and the archive search, [3.3a] grey download button (PDF not generated yet), [3.4a] the parent report list, [3.4b] All my children in Attendance by Student, [4.2a] Status filter, [4.3a] Booked, Your Booking and Completed, [4.4a] teacher told, confirmation by email and app notification, reminders (10.8), [4.5a] Successfully Released; fix: [4.4] toast is "Successfully added" (ParentInterviewModify). Checked against origin/master d0604ce7f (report.archive, report.component.ts visibleTo, attendance report printFamily, parentPortal interview list and modify, InterviewController booking notifications)
- 2026-11-06 · panel (user, director, writer, PM, PO) · 7 changes: [3.2] says report cards may also come by email and a phone notice (12.3 Email Report options), [3.4] "In the same Reports menu" instead of "Just above it", and the Show keeps the Payment Reports card off camera (report.component.ts 163-186), [3.5] pins stay on this phone (localStorage, report.component.ts 316-330), [4.1] parents are told by email and app notification when interviews open (InterviewController.cs 567, as in 10.8), [5.2] end tiles by number and title; demo names from the Maple Grove demo world (Maryam in Maktab Level 1 A, Hamza in Hifz Class A, teacher Fatima Siddiqui)
- 2026-11-03 · manager · decisions via chat · Payment Module cut until Track 11: chapter 2 (fee invoices, Invoice History) removed, title now 'Report cards and interview bookings', Goal, Covers, demo data, [1.1], [1.2], [5.1] and flags updated, target 4:30 to 3:30; [3.5] elliptical question rewritten
- 2026-11-03 · critic · 2 changes: target 4:30, [4.5] plain "If you can't come" instead of an idiom, [5.1] recap without "keep an eye on" · fold: [3.4] Madrasah Report with Run, [3.5] pin to My Favorite Reports
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes

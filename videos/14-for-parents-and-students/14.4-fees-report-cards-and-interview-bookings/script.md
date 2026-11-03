---
id: "14.4"
title: Fees, report cards and interview bookings
target: 4:30
prereq:
  - "14.1"
status: scripted
flags:
  - "Parents can't pay fees online yet (open decision): Payment shows invoices and Invoice History only, with no pay button. Scripted as view-only."
  - "Payment needs the madrasah's Payment Module switch, which is out of scope (Track 11 on hold). If it stays excluded, cut chapter 2 and drop Invoice History from Covers."
---

# 14.4 Fees, report cards and interview bookings

## Goal
See your fee invoices and what's been paid, download your child's report cards, and book a parent-teacher interview in the Ad-Din app.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->
- The Ad-Din app, signed in with your parent account
- A child enrolled in a class

## Covers
- Invoice History, Report Archive, booking an interview
- Madrasah Report: the parent's own reports (Run, My Favorite Reports)

## Demo data
- Parent "Yusuf Rahman" in the app; children "Maryam Rahman" (Maktab Level 1, Section B) and "Hamza Rahman" (Hifz Boys A)
- Al-Noor Madrasah has the Payment Module on; invoices in the last six months: one Paid, one Partial Paid (two receipts: cash and bank transfer, one with a note), one Unpaid; payment type "Monthly fee"
- A released report card "Term 1 Report" for Maryam with its PDF generated
- Attendance marked for Maryam this term, so "Attendance by Student" in Madrasah Report has data; no pinned reports at the start
- Interview event "Term 1 Parent Evening" with teacher "Fatima Ali": one interview slot with 10-minute times, some Free, some booked by other parents
- Phone frame for every shot; the downloaded PDF opens in the phone's viewer

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Three things in the menu
#### [1.1] Opening
**Say:** In this video you'll check your fee invoices, download your child's report cards, and book a parent-teacher interview, all in the Ad-Din app.
**Show:** Title card: "Fees, report cards and interview bookings". Phone frame on the app home.

#### [1.2]
**Say:** Your child is already enrolled. All three are in the menu, so tap the menu button at the top left of your home screen.
**Show:** Tap the ☰ button: the side menu opens.

### 2. Fee invoices
#### [2.1] Open Payment
**Say:** Open **Parent Portal**, then tap **Payment**.
**Show:** Tap "Parent Portal" to expand it, then "Payment". The Payment page opens.

#### [2.2] Your invoices
**Say:** Each row is an invoice for one of your children. It shows the **Status**, such as **Paid**, **Partial Paid** or **Unpaid**, then the **Amount** and the **Balance Amount**.
**Show:** Spotlight the Status column, then scroll the table sideways to Amount and Balance Amount.

#### [2.3] Dates and totals
**Say:** The list starts with the last six months. Change the dates to see older invoices. **Total Amount** at the top adds them up.
**Show:** Spotlight the date range, then "Total Amount" above the table.

#### [2.4] Invoice History
**Say:** Tap an invoice to open its **Invoice History**: the total, the balance, any credit, and each payment received, with its date and method.
**Show:** Tap the Partial Paid row: "Invoice History" opens. Spotlight "Total amount", "Balance amount", "Available credit", then the two receipts.

#### [2.5]
**Say:** Your madrasah records each payment, so pay the way you usually do. The invoice updates once they've recorded it. Tap **Cancel** to close.
**Show:** Tap "Cancel": back to the invoice list.

### 3. Report cards
#### [3.1] Open the archive
**Say:** For report cards, open the menu, tap **Reports**, then **Report Archive**.
**Show:** ☰ → Reports → Report Archive. The "Reports Archive" page opens.

#### [3.2] Find your child
**Say:** Tap **By student**, then your child's name. Each report card the madrasah has released for them is listed, year by year.
**Show:** Tap "By student", then "Maryam Rahman". Her page lists "Term 1 Report" under this year.

#### [3.3] Download
**Say:** Tap the button under **Download PDF** to save the report card to your phone.
**Show:** Tap the download button on "Term 1 Report": the PDF downloads and opens. Close it.

#### [3.4] More reports
**Say:** Just above it, **Madrasah Report** has more reports about your child, such as **Attendance by Student**. Tap **Run** to open one.
**Show:** ☰ → Reports → Madrasah Report. The Report page with the "Parent" tab and Al-Noor Madrasah selected; scroll past Hifz Reports, Attendance Reports and Library Reports. Tap "Run" beside "Attendance by Student": Maryam's attendance report opens. Go back.

#### [3.5]
**Say:** Use a report often? Tap the pin beside it, and it stays at the top under **My Favorite Reports**.
**Show:** Tap the pin icon beside "Attendance by Student": it appears under "My Favorite Reports".

### 4. Book an interview
#### [4.1] Open interviews
**Say:** When your madrasah opens parent-teacher interviews, open **Parent Portal** and tap **Parent Teacher Interview**.
**Show:** ☰ → Parent Portal → Parent Teacher Interview. The "Parent Interview" page opens.

#### [4.2] Choose a teacher
**Say:** Choose the **Event Name**, then the **Teacher Name**. Ad-Din picks the first **Interview Slot** and lists its times.
**Show:** Pick Event Name "Term 1 Parent Evening", then Teacher Name "Fatima Ali". Interview Slot fills in and the times appear in the table.

#### [4.3] Pick a time
**Say:** Times marked **Free** are open. Select one, then tap **Book**.
**Show:** Select a Free row. Tap "Book": the "Manage Booking" box opens.

#### [4.4] Confirm
**Say:** Under **Select Student**, choose the child this meeting is about, then tap **Add**.
**Show:** Pick "Maryam Rahman". Tap "Add": toast "Successfully Booked". The row's Status reads "Your Booking".

#### [4.5] Change it later
**Say:** If you can't come, select your booking and tap **Release** to free the time. Tap **Edit** to leave **Parent Comments** for the teacher.
**Show:** Select the booked row. Spotlight "Release", then tap "Edit": spotlight "Parent Comments". Close without saving.

### 5. Next
#### [5.1] Recap
**Say:** Now you can check your fees, keep every report card and report, and book time with your child's teacher.
**Show:** The Parent Interview list with "Your Booking" on the booked time.

#### [5.2] Close
**Say:** Next, see what your child sees in the student portal, or go back to the tour of your parent home.
**Show:** End card with two tiles: "14.5 The student portal" and "14.1 Your parent home in the app".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · critic · 2 changes: target 4:30, [4.5] plain "If you can't come" instead of an idiom, [5.1] recap without "keep an eye on" · fold: [3.4] Madrasah Report with Run, [3.5] pin to My Favorite Reports
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes

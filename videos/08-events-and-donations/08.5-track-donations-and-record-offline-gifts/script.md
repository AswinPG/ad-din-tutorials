---
id: "08.5"
title: Track donations and record offline gifts
target: 3:00
prereq:
  - "08.4"
status: scripted
flags:
  - "Removed switch: Donation Page: the transaction list doesn't depend on the Donation Page switch."
  - "PayPal gifts reach this list through a daily import that uses the organisation's PayPal keys (Integrations tab). On a masjid those keys can't be saved today (see 08.3 flag), so a masjid's PayPal rows won't appear until that's fixed. The demo shows PayPal rows as mocked data. Decided 2026-11-03: record without the PayPal step; the bug stays logged."
  - "Manual gifts have no currency (Currency Code stays empty) and can't be edited after saving, only deleted."
---

# 08.5 Track donations and record offline gifts

## Goal
See every gift to a campaign, add cash, cheque and bank gifts yourself so the total is right, remove a wrong entry, and export the list.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Transactions, Add Transaction, export

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Masjid Admin account, admin of "Masjid Al-Noor" (Premium)
- Campaign "Roof Repair Appeal", goal 25000, with four PayPal gifts (Provider paypal, Status Completed, fictional donor names such as "Aisha Khan") totalling 3,150
- Offline gift typed on camera: Name "Brother Idris", Email left blank, Address "12 Elm Street", Amount 500, Medium Cash
- One mistaken manual gift already in the list ("Test entry", 1, Other) to delete
- Export served as a CSV file opened in a spreadsheet; no real donor details anywhere

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Who has given
#### [1.1] Opening
**Say:** Once a campaign is running, you'll want to see who has given, and add the gifts that came in by cash or cheque. Here's how.
**Show:** Title card: "Track donations and record offline gifts".

#### [1.2]
**Say:** Your campaign is already set up. Every gift to it, online or offline, is listed in one place.
**Show:** Opening card from You'll need.

### 2. Open the transactions
#### [2.1] Campaign List
**Say:** In the sidebar, tap **Donation**. Make sure your masjid is selected at the top.
**Show:** Sidebar → Donation. Campaign List with "Masjid Al-Noor-(masjid)" in the organisation picker.

#### [2.2]
**Say:** Tick the campaign, then tap **View Transactions**.
**Show:** Tick the "Roof Repair Appeal" row; click "View Transactions". The Transaction List opens.

#### [2.3] The total
**Say:** At the top, you see the **Total amount collected**, the **Goal amount**, and a bar showing how far you've come.
**Show:** Spotlight the progress box: total, bar with percentage, goal.

#### [2.4] The list
**Say:** Below, each gift shows the donor's name, the amount, how it was given, and the date. Gifts through PayPal show PayPal as the provider.
**Show:** Pan across the columns: Name, Amount, Provider, Medium, Created Date, Status. Spotlight a "paypal" row.

### 3. Add a cash or cheque gift
#### [3.1] Add Manual Transaction
**Say:** Someone handed over cash after Jumu'ah? Tap **Add Manual Transaction**.
**Show:** Click "Add Manual Transaction". The "Add Transaction" box opens.

#### [3.2] Details
**Say:** Type the donor's **Name**, and their **Email** and **Address** if you have them. These are optional.
**Show:** Type "Brother Idris" in Name and the demo address in Address; leave Email blank.

#### [3.3] Amount and medium
**Say:** Enter the **Amount**, then choose the **Medium**: cash, cheque, credit card, bank payment, or other. Both are required.
**Show:** Type 500 in Amount. Open "Select Medium"; spotlight the five options; choose Cash.
**Caption:** Enter the Amount and choose the Medium. Both are required.

#### [3.4] Save
**Say:** Tap **Save**, then **OK** to confirm. Check the details first: a saved gift can't be edited later.
**Show:** Click "Save". The "Confirmation !" box appears; click OK. The box closes.

#### [3.5]
**Say:** The gift joins the list, and the total goes up.
**Show:** Spotlight the new "Brother Idris" row and the total collected, now 500 higher.

### 4. Remove a mistake
#### [4.1] Delete
**Say:** Entered a gift by mistake? Tap **Delete** on its row and confirm. Only gifts you added yourself can be deleted, not PayPal gifts.
**Show:** On the "Test entry" row, click "Delete" in the Actions column. Confirm with "Delete Transaction". The row disappears. Spotlight that PayPal rows have no Delete button.

### 5. Export
#### [5.1] Export
**Say:** For your records or your accountant, tap **Export**. Ad-Din prepares the list and downloads it as a spreadsheet file.
**Show:** Click "Export". A short wait, then the CSV file downloads. Open it in a spreadsheet; show the columns with the demo gifts.

### 6. Next
#### [6.1] Close
**Say:** Every gift is now in one place, and your total is right. Next, see how your community gives, in the app and on your website.
**Show:** End card with two tiles: "15.4 Donate to your masjid" and "08.4 Run a fundraising campaign".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · manager · decisions via chat · 'Masjid PayPal keys' decided: record without the PayPal step; flag reworded, bug stays logged
- 2026-11-03 · critic · 1 change: [6.1] vague "the donating video" -> says what 15.4 shows
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes

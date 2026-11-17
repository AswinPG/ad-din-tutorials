---
id: "08.5"
title: Track donations and record offline gifts
target: 4:30
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
- Why keep every gift here: thanking donors, reports for your committee, a correct total
- The three buttons; the other columns (Email, Address, Currency Code, Transaction ID, Status); manual as the provider
- A gift with no name (collection box); record each gift once; no email to the donor; Collected Amount goes up
- Delete Transaction button, one at a time; PayPal gifts can't be deleted; the total goes down
- Stay on the page while the export is prepared

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Masjid Admin account, admin of "Maple Grove Masjid" (Premium); home madrasah Maple Grove Madrasah, so Campaign List first shows the madrasah
- Campaign "Roof Repair Appeal", goal 25000, with four PayPal gifts (Provider paypal, Status Completed, fictional donor names such as "Aisha Khan") totalling 3,150
- Offline gift typed on camera: Name "Brother Idris", Email left blank, Address "12 Elm Street", Amount 500, Medium Cash
- One mistaken manual gift already in the list ("Test entry", 1, Other) to delete
- A second wrong manual gift ("Duplicate", 500, Cash) for the Delete Transaction button shot
- After saving, the Campaign List shows "Roof Repair Appeal" with Collected Amount 3,650
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
**Say:** Once a campaign is running, you'll want to know who has given. In this video, you see every gift, and add the gifts that came in by cash or cheque.
**Show:** Title card: "Track donations and record offline gifts".

#### [1.1a] Why it matters
**Say:** A full list helps you thank each donor, report to your committee, and show a true total on the campaign. Gifts handed over at the masjid count too, so record them here as well.
**Show:** Card: "Thank donors · Report to your committee · A true total". Then a cash envelope and a cheque beside the campaign card.

#### [1.2]
**Say:** Your campaign is already set up. Every gift to it, online or offline, is listed in one place.
**Show:** Opening card from You'll need.

### 2. Open the transactions
#### [2.1] Campaign List
**Say:** In the sidebar, tap **Donation**. Check the organisation at the top. If it shows your madrasah, choose your masjid.
**Show:** Sidebar → Donation. The Campaign List opens on Maple Grove Madrasah (the demo account's home madrasah); open "Select an Organisation" and choose "Maple Grove Masjid-(masjid)".

#### [2.2]
**Say:** Tick the campaign, then tap **View Transactions**.
**Show:** Tick the "Roof Repair Appeal" row; click "View Transactions". The Transaction List opens.


#### [2.2a] The buttons
**Say:** Above the list are three buttons: **Add Manual Transaction**, **Export** and **Delete Transaction**.
**Show:** Spotlight the three buttons in turn.
#### [2.3] The total
**Say:** At the top, you see the **Total amount collected**, the **Goal amount**, and a bar showing how far you've come.
**Show:** Spotlight the progress box: total, bar with percentage, goal.

#### [2.4] The list
**Say:** Below, each gift shows the donor's name, the amount, how it was given, and the date. Gifts through PayPal show PayPal as the provider.
**Show:** Pan across the columns: Name, Amount, Provider, Medium, Created Date, Status. Spotlight a "paypal" row.


#### [2.4a] More columns
**Say:** Scroll right for the donor's email and address, the currency, the transaction ID and the status. Gifts you add yourself show **manual** as the provider.
**Show:** Scroll the table right: Email, Address, Currency Code, Transaction ID, Status. Spotlight the "Test entry" row's Provider "manual".
### 3. Add a cash or cheque gift
#### [3.1] Add Manual Transaction
**Say:** If someone hands you cash after Jumu'ah, tap **Add Manual Transaction**.
**Show:** Click "Add Manual Transaction". The "Add Transaction" box opens.

#### [3.2] Details
**Say:** Type the donor's **Name**, and their **Email** and **Address** if you have them. These are optional.
**Show:** Type "Brother Idris" in Name and the demo address in Address; leave Email blank.


#### [3.2a]
**Say:** For the Jumu'ah collection box, where nobody gives a name, leave the email empty and type a short note in **Name**, such as Collection box.
**Show:** Card with an example row: Name "Collection box", Amount, Medium "Cash". Back to the Brother Idris form.
#### [3.3] Amount and medium
**Say:** Enter the **Amount**, then choose the **Medium**: cash, cheque, credit card, bank payment, or other. Both are required.
**Show:** Type 500 in Amount. Open "Select Medium"; spotlight the five options; choose Cash.
**Caption:** Enter the Amount and choose the Medium. Both are required.

#### [3.4] Save
**Say:** Tap **Save**, then **OK** to confirm. Check the details first: a saved gift can't be edited later.
**Show:** Click "Save". The "Confirmation !" box appears; click OK. The box closes.


#### [3.4a]
**Say:** Record each gift once. Ad-Din doesn't check for the same gift added twice, so check the list before you add one.
**Show:** Spotlight the list behind the box, with no "Brother Idris" row yet.
#### [3.5]
**Say:** The gift joins the list, and the total goes up.
**Show:** Spotlight the new "Brother Idris" row and the total collected, now 500 higher.


#### [3.5a] What happens next
**Say:** No email goes to the donor; the gift is only added to your records. In the **Campaign List**, the campaign's **Collected Amount** goes up too.
**Show:** Sidebar → Donation (masjid selected). Spotlight "Roof Repair Appeal" with Collected Amount 3,650. Then tick it and click "View Transactions" again.
### 4. Remove a mistake
#### [4.1] Delete
**Say:** If you entered a gift by mistake, tap **Delete** on its row and confirm. Only gifts you added yourself can be deleted, not PayPal gifts.
**Show:** On the "Test entry" row, click "Delete" in the Actions column. Confirm with "Delete Transaction". The row disappears. Spotlight that PayPal rows have no Delete button.


#### [4.1a] Delete Transaction
**Say:** You can also tick a row and tap **Delete Transaction**. Delete one gift at a time. If you tick a PayPal gift, Ad-Din tells you PayPal transactions can't be deleted. After a delete, the total goes down.
**Show:** Tick the "Duplicate" row; click "Delete Transaction"; confirm. The row goes and the total falls by 500. Then tick a PayPal row and click "Delete Transaction": the toast "PayPal transactions cannot be deleted".
### 5. Export
#### [5.1] Export
**Say:** For your records or your accountant, tap **Export**. Ad-Din prepares the list and downloads it as a spreadsheet file.
**Show:** Click "Export". A short wait, then the CSV file downloads. Open it in a spreadsheet; show the columns with the demo gifts.


#### [5.1a]
**Say:** The file can take a few seconds to prepare. Stay on the page until it downloads. Keep the file somewhere safe, because it has donors' names and emails.
**Show:** Spotlight the loading indicator after clicking Export, then the downloaded file in the browser's download bar.
### 6. Next
#### [6.1] Close
**Say:** Every gift is now in one place, and your total is right. Next, video 15.4: Donate to your masjid, to see how your community gives. Or video 08.4: Run a fundraising campaign.
**Show:** End card with two tiles: "15.4 Donate to your masjid" and "08.4 Run a fundraising campaign".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 1:51 → 3:17 narration, 8 scenes added: [1.1a] why keep every gift, [2.2a] the three buttons, [2.4a] the other columns and manual provider, [3.2a] the collection box, [3.4a] record each gift once, [3.5a] no email to the donor, Collected Amount goes up, [4.1a] Delete Transaction, one at a time, PayPal message, [5.1a] stay on the page; keep the file safe
- 2026-11-06 · panel (user, director, writer, PM, PO) · 6 changes: [1.1] second-person opening instead of "Here's how", [2.1] Say and Show pick the masjid (Campaign List opens on the home madrasah), [3.1] and [4.1] no elliptical questions, [6.1] names both end tiles by number; demo names match the Maple Grove demo world
- 2026-11-03 · manager · decisions via chat · 'Masjid PayPal keys' decided: record without the PayPal step; flag reworded, bug stays logged
- 2026-11-03 · critic · 1 change: [6.1] vague "the donating video" -> says what 15.4 shows
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes

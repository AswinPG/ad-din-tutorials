---
id: "02.6"
title: Billing, cards and invoices
target: 4:30
prereq:
  - "02.3"
status: scripted
flags:
  - "The banner's \"Pay now\" button opens Upcoming Invoices, not the unpaid invoice, and an upcoming invoice has no Pay Now. The script shows the banner but pays from View invoices → the Pending invoice → Pay Now (Stripe's hosted page)."
  - "The Past Invoice list labels an invoice Closed or Pending (Stripe's closed flag), while the invoice itself says Paid or Pending (paid flag); a closed but unpaid invoice would look Closed in the list."
  - "The invoice's \"Payable to\" block shows Ad-Din Inc.'s real address and phone; fine to show, don't zoom on it."
---

# 02.6 Billing, cards and invoices

## Goal
Read your organisation's balance, choose card or invoice billing with the right billing address, find past and upcoming invoices, and pay an unpaid one.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Balance, card vs invoice, billing address, view invoices, “You have unpaid invoices / Pay now”
- Why and when to choose card or invoice; the Settings button; the missing-field messages
- Every part of an invoice (Paid or Pending, number, dates, Bill to, lines, tax); No invoices yet
- The Subscription portal row when your organisation has an add-on

## Demo data
- Demo world (engine/demo-world.md): the demo admin of "Maple Grove Madrasah" with yearly seats, card ending 4242 on file, Current Account Balance C$ 0.00
- Stripe test mode, test card 4242 4242 4242 4242 (out of focus) and a demo billing address in Ontario, Canada
- One upcoming invoice with a due date; three past invoices (two Closed, one Pending with a Stripe test hosted invoice link)
- The Pending invoice makes the "You have unpaid invoices" banner show and "View invoices" turn red
- The madrasah has an active add-on (website), so the "Subscription portal" row shows, and reads "Pay unpaid invoices online" while the Pending invoice is open; its Stripe page is not opened on camera
- For [4.2a]: the linked "Maple Grove Masjid", which has no invoices yet

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Your organisation's billing
#### [1.1] Opening
**Say:** Ad-Din bills your organisation for its Premium seats and add-ons. In this video for admins, you'll see your balance, choose to pay by card or by invoice, and find every invoice.
**Show:** Title card: "Billing, cards and invoices".

#### [1.1a] Why it matters
**Say:** Your treasurer can find every invoice here for your records. Keeping the billing details right also means the tax is correct, and that your seats and services don't stop.
**Show:** Card: "Every invoice in one place · Correct tax · No interruptions".

#### [1.2]
**Say:** You'll need to be an admin of the organisation. Billing is on the same page where you buy seats.
**Show:** Opening card from You'll need.

### 2. Find billing
#### [2.1] Open it
**Say:** Open **Admin Portal**, then **Subscription Management**, and tap **View plan**. **Billing** is on the right, or under its own tab on a small screen.
**Show:** Sidebar → Admin Portal → Subscription Management → View plan on "Maple Grove Madrasah". Spotlight the Billing column. Quick cut to a narrow window with the Billing tab.

#### [2.2] Balance
**Say:** The top card shows your organisation's name and address, and the **Current Account Balance**. Any credit on your account appears here and goes toward future charges.
**Show:** Spotlight the account card; zoom on "Current Account Balance".

#### [2.2a]
**Say:** The **Settings** button on that card opens the billing settings too.
**Show:** Spotlight "Settings" next to "Current Account Balance".

### 3. Card or invoice
#### [3.1] Billing settings
**Say:** Tap **Change billing settings**. Under **Payment method**, there are two choices.
**Show:** Click "Change billing settings". The "Billing Settings" sheet opens: "Choose how your organization pays for Ad-Din." Open the Payment method list.

#### [3.2] By card
**Say:** **Via Credit Card** charges your card automatically each time a payment is due. Tap **Change Card** to replace the card on file.
**Show:** Select "Via Credit Card". Spotlight the card box ("Default card", last four digits) and "Change Card".

#### [3.3] Billing address
**Say:** A secure window from Stripe, the card payment service Ad-Din uses, asks for the card and its billing address. Ad-Din keeps only the last four digits, and uses the address to work out tax.
**Show:** Click "Change Card"; the Stripe window "Add Card to Ad-Din" opens. Crop or blur Stripe's test-mode badge. Fill the test card and demo address, out of focus; confirm. Toast "Card added successfully."

#### [3.4] By invoice
**Say:** **Via Invoice** means Ad-Din raises an invoice, due the next day, and you pay it yourself. Choose your country. For Canada, also choose your province under **Select your State**, and type your **Zip/Postal Code**. Then tap **Save**.
**Show:** Select "Via Invoice": "Please provide your billing details." Choose Canada, then Ontario, type a demo postal code. Click "Save".
**Caption:** Via Invoice: Ad-Din raises an invoice, due the next day, and you pay it. Choose your country (in Canada, also province and postal code), then Save.

#### [3.4a] If something is missing
**Say:** If you leave the country, province or postal code empty, the field asks for it, and **Save** won't go ahead until it's filled in.
**Show:** From a take with Canada chosen and no province: spotlight "Please select your state." under Select your State.

#### [3.4b] Which one to choose
**Say:** Choose a card if you want payments to happen by themselves. Choose an invoice if your committee approves each payment, or your treasurer pays them in one batch.
**Show:** Card: "Card → automatic · Invoice → you pay each one".

#### [3.5]
**Say:** Switching to invoice removes the saved card. You can switch back and add a card at any time.
**Show:** The Billing column now shows no card line. Reopen the sheet, choose "Via Credit Card", and show "Add card".

### 4. Your invoices
#### [4.1] Upcoming
**Say:** Tap **View upcoming invoices** to see what will be billed next, and when it's due.
**Show:** Click "View upcoming invoices". The "Upcoming Invoices" page: spotlight the row with its "Due" date and amount. Click "Back".

#### [4.2] History
**Say:** Tap **View invoices** for your history. Each invoice shows its number, date, amount, and whether it's **Closed** or **Pending**. **Pending** means it still needs to be paid.
**Show:** Click "View invoices". The "Past Invoice" list: spotlight the badges.

#### [4.2a] No invoices yet
**Say:** A new organisation has no invoices at first. The list then says **No invoices yet**.
**Show:** Quick cut: View invoices on "Maple Grove Masjid": "No invoices yet" and "Invoices will appear here once they are generated."

#### [4.3] Open one
**Say:** Tap an invoice to open it. You'll see each line, the tax, and the **Amount due**. Tap **Print** for a paper or PDF copy.
**Show:** Click a Closed invoice. Spotlight the lines, Subtotal, Tax and Amount due. Click "Print"; the print dialog opens; cancel it. Click "Cancel".

#### [4.3a] What's on an invoice
**Say:** At the top, each invoice says **Paid** or **Pending**, with its number, the **Date of issue** and the **Date due**. **Bill to** uses your organisation's name and address, so keep them right, as video 03.1 shows.
**Show:** Reopen the Closed invoice: spotlight "Paid", "Invoice Number", "Date of issue", "Date due", then the "Bill to" block. Don't zoom on "Payable to".

### 5. Unpaid invoices
#### [5.1] The warning
**Say:** If a payment fails or an invoice is still open, a banner says **You have unpaid invoices**, and **View invoices** turns red.
**Show:** Back on the plan page: spotlight the banner "You have unpaid invoices · Pay to avoid service interruption" with its "Pay now" button, then the red "View invoices" row. Don't click the banner's button.

#### [5.2] Pay it
**Say:** Open **View invoices**, tap the **Pending** invoice, and tap **Pay Now**. A secure Stripe page opens where you can pay it.
**Show:** Click "View invoices" → the Pending invoice → "Pay Now". Stripe's test invoice page opens in a new tab; crop or blur its test-mode badge.

#### [5.3]
**Say:** Pay promptly. While an invoice is unpaid, you can't change your seats, and your subscriptions can become inactive.
**Show:** Card: "Unpaid invoice → seats locked → subscriptions may stop".

#### [5.3a] The subscription portal
**Say:** If your organisation has an add-on, the Billing column also shows **Subscription portal**. It opens Stripe's own page, where you can manage your billing in one place. While an invoice is unpaid, it reads **Pay unpaid invoices online**.
**Show:** Spotlight the "Pay unpaid invoices online" row and its "Manage everything in one place" line. Don't click.

### 6. Next
#### [6.1] Close
**Say:** That's billing: your balance, how you pay, and every invoice in one place. Next, give your seats to the people who need them in video 02.4, or add extra services in video 02.5.
**Show:** End card with two tiles: "02.4 Give seats to parents, teachers and staff" and "02.5 Add-on services".

## Review log
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 2:39 → 3:55 narration, 7 scenes added: [1.1a] why billing details matter, [2.2a] the Settings button, [3.4a] missing country, province or postal code, [3.4b] when to choose card or invoice, [4.2a] No invoices yet, [4.3a] what's on an invoice (Paid or Pending, dates, Bill to from your organisation's details), [5.3a] the Subscription portal row
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-06 · panel (user, director, writer, PM, PO) · 6 changes: [3.3] says what Stripe is, [3.3] and [5.2] crop Stripe's test-mode badge, [3.4] says an invoice is due the next day (code: DaysUntilDue = 1, decision 15) and "province" under Select your State, Caption kept in step, [4.2] says what Pending means, demo names from the Maple Grove demo world
- 2026-11-03 · critic · 2 changes: [1.1] second-person opening, Premium seats, [6.1] Say names both end tiles
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes

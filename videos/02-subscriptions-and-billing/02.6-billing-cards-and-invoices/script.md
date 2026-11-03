---
id: "02.6"
title: Billing, cards and invoices
target: 4:00
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

## Demo data
- Admin account of "Al-Noor Madrasah" with yearly seats, card ending 4242 on file, Current Account Balance C$ 0.00
- Stripe test mode, test card 4242 4242 4242 4242 (out of focus) and a demo billing address in Ontario, Canada
- One upcoming invoice with a due date; three past invoices (two Closed, one Pending with a Stripe test hosted invoice link)
- The Pending invoice makes the "You have unpaid invoices" banner show and "View invoices" turn red

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Your organisation's billing
#### [1.1] Opening
**Say:** Ad-Din bills your organisation for its seats and add-ons. This video shows your balance, how to pay by card or by invoice, and where to find every invoice.
**Show:** Title card: "Billing, cards and invoices".

#### [1.2]
**Say:** You'll need to be an admin of the organisation. Billing is on the same page where you buy seats.
**Show:** Opening card from You'll need.

### 2. Find billing
#### [2.1] Open it
**Say:** Open **Admin Portal**, then **Subscription Management**, and tap **View plan**. **Billing** is on the right, or under its own tab on a small screen.
**Show:** Sidebar → Admin Portal → Subscription Management → View plan on "Al-Noor Madrasah". Spotlight the Billing column. Quick cut to a narrow window with the Billing tab.

#### [2.2] Balance
**Say:** The top card shows your organisation's name and address, and the **Current Account Balance**. Any credit on your account appears here and goes toward future charges.
**Show:** Spotlight the account card; zoom on "Current Account Balance".

### 3. Card or invoice
#### [3.1] Billing settings
**Say:** Tap **Change billing settings**. Under **Payment method**, there are two choices.
**Show:** Click "Change billing settings". The "Billing Settings" sheet opens: "Choose how your organization pays for Ad-Din." Open the Payment method list.

#### [3.2] By card
**Say:** **Via Credit Card** charges your card automatically each time a payment is due. Tap **Change Card** to replace the card on file.
**Show:** Select "Via Credit Card". Spotlight the card box ("Default card", last four digits) and "Change Card".

#### [3.3] Billing address
**Say:** The secure Stripe window asks for the card and its billing address. Ad-Din keeps only the last four digits, and uses the address to work out tax.
**Show:** Click "Change Card"; the Stripe window "Add Card to Ad-Din" opens. Fill the test card and demo address, out of focus; confirm. Toast "Card added successfully."

#### [3.4] By invoice
**Say:** **Via Invoice** means Ad-Din raises an invoice and you pay it yourself. Choose your country; for Canada, also choose your state and type your **Zip/Postal Code**. Then tap **Save**.
**Show:** Select "Via Invoice": "Please provide your billing details." Choose Canada, then Ontario, type a demo postal code. Click "Save".
**Caption:** Via Invoice: Ad-Din raises an invoice and you pay it. Choose your country (in Canada, also state and postal code), then Save.

#### [3.5]
**Say:** Switching to invoice removes the saved card. You can switch back and add a card at any time.
**Show:** The Billing column now shows no card line. Reopen the sheet, choose "Via Credit Card", and show "Add card".

### 4. Your invoices
#### [4.1] Upcoming
**Say:** Tap **View upcoming invoices** to see what will be billed next, and when it's due.
**Show:** Click "View upcoming invoices". The "Upcoming Invoices" page: spotlight the row with its "Due" date and amount. Click "Back".

#### [4.2] History
**Say:** Tap **View invoices** for your history. Each invoice shows its number, date, amount, and whether it's **Closed** or **Pending**.
**Show:** Click "View invoices". The "Past Invoice" list: spotlight the badges.

#### [4.3] Open one
**Say:** Tap an invoice to open it. You'll see each line, the tax, and the **Amount due**. Tap **Print** for a paper or PDF copy.
**Show:** Click a Closed invoice. Spotlight the lines, Subtotal, Tax and Amount due. Click "Print"; the print dialog opens; cancel it. Click "Cancel".

### 5. Unpaid invoices
#### [5.1] The warning
**Say:** If a payment fails or an invoice is still open, a banner says **You have unpaid invoices**, and **View invoices** turns red.
**Show:** Back on the plan page: spotlight the banner "You have unpaid invoices · Pay to avoid service interruption" with its "Pay now" button, then the red "View invoices" row. Don't click the banner's button.

#### [5.2] Pay it
**Say:** Open **View invoices**, tap the **Pending** invoice, and tap **Pay Now**. A secure Stripe page opens where you can pay it.
**Show:** Click "View invoices" → the Pending invoice → "Pay Now". Stripe's test invoice page opens in a new tab.

#### [5.3]
**Say:** Pay promptly. While an invoice is unpaid, you can't change your seats, and your subscriptions can become inactive.
**Show:** Card: "Unpaid invoice → seats locked → subscriptions may stop".

### 6. Next
#### [6.1] Close
**Say:** That's billing: your balance, how you pay, and every invoice in one place. Next, give your seats to the people who need them.
**Show:** End card with two tiles: "02.4 Give seats to parents, teachers and staff" and "02.5 Add-on services".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->

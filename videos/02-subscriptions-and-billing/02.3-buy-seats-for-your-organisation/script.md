---
id: "02.3"
title: Buy seats for your organisation
target: 5:30
prereq:
  - "01.2"
status: scripted
flags:
  - "Decision \"First billing setup for a new organisation\" (decided 2026-11-03: as scripted): scripted from the code. Opening View plan creates the organisation's billing account automatically (BilledOrganizationSubscriptionService.GetOrganizationSubscription → CreateOrganizationSubscription). Buying seats then needs a card with a billing country and state, or Via Invoice with a country; otherwise the API refuses with \"A card is not configured.\""
  - "[5.3] states that the first paid invoice gives a seat to an admin when no admin has one (AutoAssignOrganisationAdminSubscription on the invoice-paid webhook). It picks the first admin in the list, not necessarily the viewer, and the mocked demo can only show the result."
  - Seat changes are queued in the background (Hangfire); the page refreshes itself about 10 seconds after Submit.
---

# 02.3 Buy seats for your organisation

## Goal
Set up billing for your masjid or madrasah and buy monthly or yearly Premium seats for its people.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->
- Admin of an approved masjid or madrasah
- A payment card, or the choice to pay by invoice

## Covers
- Subscription Management → View plan → Subscriptions tab, Manage Subscription Quantity, “X of Y used”
- Finding an organisation (search, type filter, Pin); the Subscriptions, Services and Billing parts of the page; the Settings button
- Choosing monthly or yearly seats; every button in the quantity sheet; renewal
- What goes wrong: no billing set up, lowering below the seats in use, an unpaid invoice

## Demo data
- Demo world (engine/demo-world.md): the demo admin Yusuf Rahman of "Maple Grove Madrasah" and its linked "Maple Grove Masjid", so the picker shows two organisations
- "Maple Grove Madrasah" freshly set up for this video: no card ("Card not added"), Monthly and Yearly at 0 of 0 used, balance C$ 0.00
- Stripe test mode, test card 4242 4242 4242 4242 with a demo billing address in Ontario, Canada (card number out of focus)
- After Submit: Yearly shows 1 of 20 used, 19 available (the mocked refresh fills this in; the one used seat is the admin's automatic seat from [5.3])
- The admin's profile Subscription tab showing "Provided by your organization" for [5.3]

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Seats for your people
#### [1.1] Opening
**Say:** Your masjid or madrasah can buy Ad-Din Premium for its people as seats. One seat gives one person Premium. This video is for admins: you'll buy seats.
**Show:** Title card: "Buy seats for your organisation".

#### [1.2]
**Say:** You'll need to be an admin of an approved organisation, with a payment card ready, or the choice to pay by invoice instead of by card.
**Show:** Opening card from You'll need.

### 2. Open your plan
#### [2.1] Subscription Management
**Say:** In the sidebar, open **Admin Portal**, then **Subscription Management**. You'll see each organisation you run.
**Show:** Sidebar → Admin Portal → Subscription Management. The "Subscription Management" page lists "Maple Grove Madrasah" and "Maple Grove Masjid".

#### [2.1a] Many organisations
**Say:** If you run several organisations, type in **Search organisations**, filter by type, or tap **Pin** to keep one at the top of the list.
**Show:** Spotlight the search box and the type filter; click "Pin" on "Maple Grove Madrasah"; it moves to "Pinned".

#### [2.2]
**Say:** Tap **View plan** on the organisation you want. Its subscription page opens.
**Show:** Click "View plan" on "Maple Grove Madrasah". The page opens with the organisation's name at the top.

#### [2.2a] Three parts
**Say:** The page has three parts: **Subscriptions** for your seats, **Services** for add-ons, and **Billing** for how you pay. On a small screen, they are tabs at the top.
**Show:** Spotlight the Subscriptions area, Other Services and the Billing column. Quick cut to a narrow window with the three tabs.

#### [2.3]
**Say:** The first time you open it, Ad-Din sets up a billing account for your organisation. There's nothing to fill in, and nothing is charged until you buy seats.
**Show:** Spotlight "0 of 0 used" on each plan, then the balance "C$ 0.00".

#### [2.4] Help
**Say:** Tap the info icon at the top for a short explanation of organisation subscriptions and their terms.
**Show:** Click the info icon; the "Organization Subscriptions" panel opens. Scroll a little, then close it.

### 3. Set up billing first
#### [3.1] Billing settings
**Say:** Before you buy, tell Ad-Din how you'll pay. Under **Billing**, it says **Card not added**. Tap **Change billing settings**.
**Show:** Spotlight "Card not added" in the Billing column. Click "Change billing settings"; the "Billing Settings" sheet opens.

#### [3.1a]
**Say:** The **Settings** button on the account card opens the same sheet.
**Show:** Spotlight "Settings" next to Current Account Balance.

#### [3.2] Add a card
**Say:** Under **Payment method**, choose **Via Credit Card**. Tap **Add card**, and enter the card and billing address in the secure Stripe window.
**Show:** Select "Via Credit Card". Click "Add card"; the Stripe window "Add Card to Ad-Din" opens. Fill the test card and demo address, out of focus; crop or blur Stripe's test-mode badge; confirm.

#### [3.3]
**Say:** Ad-Din saves it. The Billing column now shows **Card ending in** and the last four digits.
**Show:** Toast "Card added successfully."; the sheet closes. Zoom on "Card ending in 4242".

#### [3.4] Or pay by invoice
**Say:** To pay by invoice instead, choose **Via Invoice**, pick your country, and tap **Save**. Video 02.6 explains both ways in detail.
**Show:** Reopen the sheet briefly; show the "Via Invoice" option and the country list. Spotlight "Save", then close without saving.

#### [3.4a] If billing isn't set
**Say:** If you try to buy seats before you set up billing, Ad-Din can't go ahead and says that a card is not configured. Set up billing first, then try again.
**Show:** Card with the message "A card is not configured." over the quantity sheet (one take before the card is added).

### 4. Buy seats
#### [4.1] The two plans
**Say:** Under **Subscriptions** you'll find two plans, **Monthly** and **Yearly**. Each shows its price per seat, and how many seats are used out of the total.
**Show:** Spotlight the Monthly card and the Yearly card with "Best Value"; prices stay in shot but are never zoomed. Zoom on "0 of 0 used".

#### [4.1a] Monthly or yearly seats
**Say:** Choose yearly seats for people who are with you all year, such as teachers, admins and enrolled families. Monthly seats suit a short programme, such as a summer Quran course. You can have both.
**Show:** Spotlight the Yearly card, then the Monthly card; prices stay in shot but are never zoomed.

#### [4.2] Choose a quantity
**Say:** Tap **Manage Subscription Quantity** on the plan you want. Yearly costs less over a full year.
**Show:** Click "Manage Subscription Quantity" on the Yearly card. The sheet "Change yearly subscription quantity" opens.

#### [4.3]
**Say:** Set the number of seats with the plus and minus buttons, which change it by five, with **+5** and **+10**, or by typing a number. **-5** and **-10** lower it.
**Show:** Click "+10", then "+5": 15. Click into the number and type 20. Spotlight "-5" and "-10".

#### [4.4] Submit
**Say:** Tap **Submit**. Ad-Din reminds you that a valid payment is needed. Tap **I understand, change** to go ahead. Your card is charged for the new seats, plus tax where it applies, and an invoice is due the next day.
**Show:** Click "Submit"; the "Are you sure?" box opens. Zoom on its message, then click "I understand, change".

#### [4.4a] Renewal
**Say:** Seats renew automatically at the end of each month or year, with the same number of seats, until you change it. Each renewal is charged within a day of the end of the period.
**Show:** Click the info icon; spotlight the renewal lines in the "Organization Subscriptions" panel; close it.

#### [4.5]
**Say:** Ad-Din takes a moment to process the request. The page refreshes by itself, or you can tap the refresh button on the plan.
**Show:** Toast "Request added. It may take some time to get the request processed." Spotlight the refresh icon; the numbers update.

### 5. Read your seats
#### [5.1] Used and available
**Say:** The yearly plan now reads 1 of 20 used, with 19 available. Used means seats already given to people. One is used already because Ad-Din gave it to an admin, as you'll see in a moment.
**Show:** Zoom on "1 of 20 used", "19 available" and "20 total seats · billed yearly".

#### [5.2] Change it later
**Say:** To buy more, open **Manage Subscription Quantity** again. You can lower the number too, but never below the seats already in use.
**Show:** Open the sheet; spotlight the line "You cannot decrease the amount of subscriptions below the amount you have already assigned to users." Close it.

#### [5.2a]
**Say:** If you type a number below the seats in use, Ad-Din tells you how many are already given out. Take seats back first, as video 02.4 shows.
**Show:** Type 0 and click "Submit": the message "You need to give correct values, please note that 1 are already subscribed." Close the sheet.

#### [5.2b] An unpaid invoice
**Say:** While an invoice is unpaid, you can't change your seats. Ad-Din says your subscriptions are inactive because of a pending invoice. Pay it first, as video 02.6 shows.
**Show:** Card with the message "Your subscriptions are inactive due to a pending invoice. Please resolve the issues to continue."

#### [5.3] A seat for an admin
**Say:** If none of your admins has a seat, Ad-Din gives one seat to an admin automatically once the first seats are paid. In this example, that admin is you.
**Show:** Admin's Profile → Subscription tab: zoom on "Provided by your organization".

### 6. Next
#### [6.1] Close
**Say:** Your organisation now has seats ready. Next, give them to your teachers, parents and staff in video 02.4, or see billing, cards and invoices in video 02.6.
**Show:** End card with two tiles: "02.4 Give seats to parents, teachers and staff" and "02.6 Billing, cards and invoices".

## Review log
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 3:04 → 4:37 narration, 8 scenes added: [2.1a] search, filter and Pin, [2.2a] the three parts of the page, [3.1a] the Settings button, [3.4a] buying before billing is set, [4.1a] monthly or yearly seats, [4.4a] renewal, [5.2a] lowering below the seats in use, [5.2b] an unpaid invoice blocks changes; [4.3] plus and minus change by five, -5 and -10; demo names moved to Maple Grove (decision 18)
- 2026-11-06 · panel (user, director, writer, PM, PO) · 9 changes: You'll need, [1.2] and prereq 01.2: the organisation must be approved (the sidebar is locked while pending), [1.1] no nested opening, [2.3] says nothing is charged yet, Show spotlights 0 of 0 and the balance, [3.2] crop Stripe's test-mode badge, [4.1] no zoom on prices, [4.3] names the +5 and +10 buttons, [5.1] says why one seat is already used, [5.3] "A seat for an admin" (the API picks the first admin), condition first
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-06 · manager · panel decisions approved ("approved": recommended options) · [4.4] what is charged and when (decision 15)
- 2026-11-03 · manager · decisions via chat · 'First billing setup' decided (as scripted): flag wording updated; script unchanged
- 2026-11-03 · critic · 3 changes: [1.1] second-person opening, [3.4] no elliptical question, video by number, Show spotlights Save before closing, [6.1] Say names both end tiles
- 2026-11-03 · validator · checked against master d36d69ed8 · 1 fix: [5.1] and demo data now 1 of 20 used, 19 available (the automatic admin seat in [5.3] takes one as soon as the invoice is paid)

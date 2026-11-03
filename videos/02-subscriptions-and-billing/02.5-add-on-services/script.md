---
id: "02.5"
title: Add-on services
target: 4:00
prereq:
  - "02.3"
status: scripted
flags:
  - "Add-ons need valid organisation billing (StripeServiceSubscriptionProvider checks IsCustomerBillingAccurate), the same as seats."
  - "Ad-Din Prayer Times Premium only appears on a masjid's page (isMasjid), so chapter 5 switches to the demo masjid's View plan."
  - "The \"Days Past Due\" counter on the website and custom sender cards can never show (its ng-template has no condition), so a lapsed service there only shows Inactive. The Prayer Times Premium card can show it."
  - "Reactivate Subscription is shown on the madrasah's website card only. On a masjid, reactivating any add-on fails in the API (StripeServiceSubscriptionProvider reads madressah.MadressahID while it is null). The 15-day trial is given only the first time an organisation takes Prayer Times Premium, and reactivating during a trial ends the trial at once (EndTrialNow)."
---

# 02.5 Add-on services

## Goal
Start, cancel and reactivate your organisation's add-on services (website, custom sender name and email, Prayer Times Premium) and read their renewal dates.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->
- Admin of a masjid or madrasah, with billing set up (see 02.3)

## Covers
- Website, Custom Sender email, Prayer Times Premium (15-day trial): Subscribe Now, Cancel, Reactivate, renewal dates

## Demo data
- Admin account of "Al-Noor Madrasah" and its linked masjid "Al-Noor Masjid", both with a test card on file
- Madrasah page: website and custom sender not subscribed at the start; after the demo, website active with a renewal date, then cancelled with a "Cancels on" date
- Custom sender active after subscribing, with demo From Name "Al-Noor Madrasah", From Email "office@alnoor.example", Reply-To Email the same; shown verified
- Masjid page: Prayer Times Premium not subscribed, then subscribed after the demo
- Stripe test mode; no real coupon codes on screen

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Extras for your organisation
#### [1.1] Opening
**Say:** In this video for admins, you'll add extra services for your organisation: a public website, a custom sender name and email, and Prayer Times Premium for a masjid's screens.
**Show:** Title card: "Add-on services".

#### [1.2]
**Say:** You'll need to be an admin, with billing already set up. Add-ons are charged the same way as your seats.
**Show:** Opening card from You'll need.

### 2. Find the services
#### [2.1] Other Services
**Say:** In the sidebar, open **Admin Portal**, then **Subscription Management**, and tap **View plan**. Scroll down to **Other Services**.
**Show:** Sidebar → Admin Portal → Subscription Management → View plan on "Al-Noor Madrasah". Scroll to "Other Services".

#### [2.2]
**Say:** Each service shows its yearly price. **Learn More** explains what it does.
**Show:** Spotlight the website and custom sender cards and their prices. Hover "Learn More".

### 3. Your website
#### [3.1] Subscribe
**Say:** **Ad-Din Public Facing Webpages** gives your organisation its own website, built from the content you already have in Ad-Din. Tap **Subscribe Now**.
**Show:** Click "Subscribe Now" on the website card. The "Power your organization website with Ad-Din" panel opens.

#### [3.2] Coupon
**Say:** If Ad-Din gave you a coupon, tap **I have a coupon code from Ad-Din** and type it in. Then tap **Subscribe my organization to Ad-Din**.
**Show:** Click the coupon line: the box appears; click "Cancel applying coupon code". Click "Subscribe my organization to Ad-Din"; the "Confirm" box opens.

#### [3.3] Confirm
**Say:** If your masjid and madrasah will share one website, only one of them needs this subscription. Tap **I understand, create my subscription**.
**Show:** Zoom on the confirm text about combined websites. Click "I understand, create my subscription".

#### [3.4]
**Say:** The card now shows the **Days Remaining** and the date it **Renews on**. **Manage Sites** takes you to your website settings.
**Show:** Spotlight the days counter, "Renews on" and the "Manage Sites" corner.

### 4. Custom sender name and email
#### [4.1] Subscribe
**Say:** **Ad-Din Custom Sender Name and Email** sends Ad-Din's emails under your organisation's own name and address, so people recognise them.
**Show:** Spotlight the custom sender card.

#### [4.2]
**Say:** Tap **Subscribe Now**, then **Subscribe for Custom Sender Name and Email**, and confirm with **I understand, create my subscription**.
**Show:** Click through the three steps.

#### [4.3] Set it up
**Say:** Then tap **Manage** on the card. Fill in **From Name**, **From Email** and **Reply-To Email**, and tap **Save**. Ad-Din emails a link to verify the address.
**Show:** Click "Manage"; the settings sheet opens. Type the demo values; click "Save". Cut to the verified state: "Email Verified" and the tick on the card.

### 5. Prayer Times Premium
#### [5.1] For a masjid
**Say:** For a masjid, **Ad-Din Prayer Times Premium** adds announcements, a scrolling ticker, images and more to the prayer times display on your masjid's screens.
**Show:** Subscription Management → View plan on "Al-Noor Masjid" → Other Services. Spotlight the Prayer Times Premium card.

#### [5.2] Trial or lifetime
**Say:** Tap **Subscribe Now**. Choose **15 Day Free Trial** for a yearly plan that starts with fifteen free days, or **Lifetime Access** for a single payment.
**Show:** The "Activate the ultimate Masjid display!" panel. Spotlight both buttons and their prices.

#### [5.3]
**Say:** Then confirm with **I understand, create my subscription**. The card now shows your Prayer Times Premium plan.
**Show:** Click "15 Day Free Trial", then "I understand, create my subscription". The card updates; keep the shot on the card as a whole, without zooming on its dates.

### 6. Cancel and reactivate
#### [6.1] Cancel
**Say:** To stop a service, tap **Cancel my Subscription** on its card, or **Cancel Yearly Subscription** for Prayer Times Premium, and confirm. It keeps working until the paid period ends.
**Show:** Back on "Al-Noor Madrasah"'s View plan, website card: click "Cancel my Subscription"; the "Confirm" box opens; click "I understand, cancel my subscription".

#### [6.2] Reactivate
**Say:** The card then shows the date it **Cancels on**. If you change your mind before then, tap **Reactivate Subscription**.
**Show:** Spotlight "Cancels on". Click "Reactivate Subscription"; the panel offers "Reactivate Organization Subscription". Close it.

#### [6.3] Unpaid invoices
**Say:** If a service shows **Inactive** with a note about pending invoices, pay those invoices and it switches back on.
**Show:** Card example: Status "Inactive", "Please close all pending invoices to activate the subscription." and "View Invoices".

### 7. Next
#### [7.1] Close
**Say:** Your add-ons are ready. Next, turn on your website in video 09.1, set up premium displays in video 04.5, or see billing and invoices in video 02.6.
**Show:** End card with three tiles: "09.1 Turn on your website", "04.5 Premium displays, part 1: layout", "02.6 Billing, cards and invoices".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · manager · decisions via chat · Critic's taste call: trial line cut: [5.3] no longer explains the Trial Ends on / Renews on dates (the trial is first-time only and ends on reactivation); Goal and demo data updated
- 2026-11-03 · critic · 5 changes: [1.1] second-person opening, [3.3] clearer shared-website line (checked: confirm text and merged-website code), [5.1] display vs screen wording, [6.2] no elliptical question, [7.1] end tiles by number
- 2026-11-03 · validator · checked against master d36d69ed8 · 3 fixes: Days Past Due flag only hidden on two of the three cards; new flag on masjid reactivation failing and the first-time-only trial. [6.1] Show now returns to the madrasah's page (reactivation fails on a masjid)

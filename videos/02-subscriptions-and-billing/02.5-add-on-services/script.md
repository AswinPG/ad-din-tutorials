---
id: "02.5"
title: Add-on services
target: 5:30
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
- Why each add-on helps; what each panel lists; the coupon line on every panel
- Custom sender: Delete and Ad-Din's default sender; Prayer Times Premium: scheduling, Lifetime Access, Active Since, Cancel Lifetime Subscription
- After a cancelled service ends: the cancelled note and Subscribe Now

## Demo data
- Demo world (engine/demo-world.md): the demo admin of "Maple Grove Madrasah" and its linked masjid "Maple Grove Masjid", both with a test card on file
- Madrasah page: website and custom sender not subscribed at the start; after the demo, website active with a renewal date, then cancelled with a "Cancels on" date
- Custom sender active after subscribing, with demo From Name "Maple Grove Madrasah", From Email "office@maplegrove.example.com", Reply-To Email the same; first not verified (Resend Verification shows), then verified
- Masjid page: Prayer Times Premium not subscribed, then subscribed after the demo
- A second masjid state with Prayer Times Premium on Lifetime Access (Active Since date) for [5.3a]
- A cancelled website state after its Cancels on date (Inactive, "Your subscription is now cancelled…", Subscribe Now) for [6.2a]
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

#### [1.2a] Why add them
**Say:** Each add-on is its own subscription for the whole organisation. A website shows your Ad-Din content to the public. Your own sender name makes your emails easier to recognise. Prayer Times Premium turns your screens into a notice board.
**Show:** Card with three rows: "Website", "Custom sender", "Prayer Times Premium".

### 2. Find the services
#### [2.1] Other Services
**Say:** In the sidebar, open **Admin Portal**, then **Subscription Management**, and tap **View plan**. Scroll down to **Other Services**, or open the **Services** tab on a small screen.
**Show:** Sidebar → Admin Portal → Subscription Management → View plan on "Maple Grove Madrasah". Scroll to "Other Services".

#### [2.2]
**Say:** Each service shows its yearly price. **Learn More** explains what it does.
**Show:** Spotlight the website and custom sender cards as a whole, without zooming on the prices. Hover "Learn More".

### 3. Your website
#### [3.1] Subscribe
**Say:** **Ad-Din Public Facing Webpages** gives your organisation its own website, built from the content you already have in Ad-Din. Tap **Subscribe Now**.
**Show:** Click "Subscribe Now" on the website card. The "Power your organization website with Ad-Din" panel opens.

#### [3.1a] What you get
**Say:** The panel lists what you get: one website for your masjid and madrasah content, colour themes, and news and contact sections to keep your congregation in touch.
**Show:** Spotlight the three lines of the "Power your organization website with Ad-Din" panel in turn.

#### [3.2] Coupon
**Say:** If Ad-Din gave you a coupon, tap **I have a coupon code from Ad-Din** and type it in. Then tap **Subscribe my organization to Ad-Din**.
**Show:** Click the coupon line: the box appears; click "Cancel applying coupon code". Click "Subscribe my organization to Ad-Din"; the "Confirm" box opens.

#### [3.3] Confirm
**Say:** If your masjid and madrasah will share one website, only the one that asks to link them needs this subscription. Video 09.4 shows linking. Tap **I understand, create my subscription**.
**Show:** Zoom on the confirm text about combined websites. Click "I understand, create my subscription".

#### [3.4]
**Say:** The card now shows the **Days Remaining** and the date it **Renews on**. **Manage Sites** takes you to your website settings.
**Show:** Spotlight the days counter, "Renews on" and the "Manage Sites" corner.

### 4. Custom sender name and email
#### [4.1] Subscribe
**Say:** **Ad-Din Custom Sender Name and Email** sends Ad-Din's emails under your organisation's own name and address, so people recognise them.
**Show:** Spotlight the custom sender card.

#### [4.1a] Why it helps
**Say:** People open emails from a name they know. Without this, emails come from Ad-Din's own name, and some people may ignore them or mark them as spam.
**Show:** Spotlight the description on the custom sender card ("A custom email sender can have numerous benefits…").

#### [4.2]
**Say:** Tap **Subscribe Now**, then **Subscribe for Custom Sender Name and Email**, and confirm with **I understand, create my subscription**.
**Show:** Click "Subscribe Now" on the custom sender card; the panel opens. Click "Subscribe for Custom Sender Name and Email"; the "Confirm" box opens. Click "I understand, create my subscription".

#### [4.3] Set it up
**Say:** Then tap **Manage** on the card. Fill in **From Name**, **From Email** and **Reply-To Email**, and tap **Save**. Ad-Din emails a link to verify the address.
**Show:** Click "Manage"; the settings sheet opens. Type the demo values; click "Save".

#### [4.3a] Verify
**Say:** Open that email and tap the link. If it doesn't arrive, tap **Resend Verification**. Once it's done, the sheet shows **Email Verified**.
**Show:** Spotlight "Resend Verification". Cut to the verified state: "Email Verified" and the tick on the card.

#### [4.3b] Remove the sender
**Say:** To stop using your own sender, tap **Delete** in the same sheet and confirm. Emails then come from Ad-Din's default name and address again.
**Show:** Spotlight "Delete"; click it; the "Confirm Delete !" box opens. Zoom on its text, then close it without deleting.

### 5. Prayer Times Premium
#### [5.1] For a masjid
**Say:** For a masjid, **Ad-Din Prayer Times Premium** adds announcements, a scrolling ticker, images and more to the prayer times display on your masjid's screens.
**Show:** Subscription Management → View plan on "Maple Grove Masjid" → Other Services. Spotlight the Prayer Times Premium card.

#### [5.1a] What you can show
**Say:** You can show announcements, a ticker, images, and web content such as a calendar or a YouTube live stream. You can schedule each item between prayers, on certain days, or around the Iqamah.
**Show:** Spotlight the description on the Prayer Times Premium card ("Enhance your Masjid’s prayer time display…"); the six feature lines are seen again in [5.2].

#### [5.2] Trial or lifetime
**Say:** Tap **Subscribe Now**. Choose **15 Day Free Trial** for a yearly plan that starts with fifteen free days, or **Lifetime Access** for a single payment. After the trial, the yearly plan renews each year until you cancel it.
**Show:** The "Activate the ultimate Masjid display!" panel. Spotlight both buttons, without zooming on their prices.

#### [5.3]
**Say:** Then confirm with **I understand, create my subscription**. The card now shows your Prayer Times Premium plan.
**Show:** Click "15 Day Free Trial", then "I understand, create my subscription". The card updates; keep the shot on the card as a whole, without zooming on its dates.

#### [5.3a] Lifetime Access
**Say:** With **Lifetime Access**, the card shows **Active Since** and the date you paid. There is nothing to renew. To end it, tap **Cancel Lifetime Subscription**.
**Show:** Quick cut to a lifetime-active masjid card: spotlight "Lifetime Access" and "Active Since", then "Cancel Lifetime Subscription". Don't click.

### 6. Cancel and reactivate
#### [6.1] Cancel
**Say:** To stop a service, tap **Cancel my Subscription** on its card, or **Cancel Yearly Subscription** for Prayer Times Premium, and confirm. It keeps working until the paid period ends.
**Show:** Back on "Maple Grove Madrasah"'s View plan, website card: click "Cancel my Subscription"; the "Confirm" box opens; click "I understand, cancel my subscription".

#### [6.2] Reactivate
**Say:** The card then shows the date it **Cancels on**. If you change your mind before then, tap **Reactivate Subscription**.
**Show:** Spotlight "Cancels on". Click "Reactivate Subscription"; the panel offers "Reactivate Organization Subscription". Close it.

#### [6.2a] After it ends
**Say:** After that date, the card says the subscription is cancelled, and **Subscribe Now** comes back. To use the service again, start a new subscription.
**Show:** Card example: Status "Inactive", "Your subscription is now cancelled, please create a new subscription for using the service." and "Subscribe Now".

#### [6.2b] Coupons
**Say:** Every add-on panel has the line **I have a coupon code from Ad-Din**, so you can use a coupon for any of them.
**Show:** Spotlight the coupon line on the Prayer Times Premium panel.

#### [6.3] Unpaid invoices
**Say:** If a service shows **Inactive** with a note about pending invoices, pay those invoices and it switches back on. Video 02.6 shows how to pay an invoice.
**Show:** Card example: Status "Inactive", "Please close all pending invoices to activate the subscription." and "View Invoices".

### 7. Next
#### [7.1] Close
**Say:** Your add-ons are ready. Next, turn on your website in video 09.1, set up premium displays in video 04.5, or see billing and invoices in video 02.6.
**Show:** End card with three tiles: "09.1 Turn on your website", "04.5 Premium displays, part 1: layout", "02.6 Billing, cards and invoices".

## Review log
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 3:09 → 4:42 narration, 8 scenes added: [1.2a] why each add-on helps, [3.1a] what the website panel lists, [4.1a] why a custom sender helps, [4.3b] Delete returns to Ad-Din's default sender, [5.1a] what Prayer Times Premium can show and schedule, [5.3a] Lifetime Access (Active Since, Cancel Lifetime Subscription), [6.2a] after a cancelled service ends, [6.2b] the coupon line on every panel
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-06 · panel (user, director, writer, PM, PO) · 8 changes: [2.1] names the Services tab on a small screen, [2.2] and [5.2] no zoom on prices (decision 12), [3.3] only the organisation that asks to link needs the website subscription, with a pointer to 09.4 (confirm text in pfw-sub-banner), [4.2] Show spells out the three clicks, new [4.3a] verify the email and Resend Verification, [5.2] says the yearly plan renews after the trial until cancelled, [6.3] points to 02.6, demo names from the Maple Grove demo world
- 2026-11-03 · manager · decisions via chat · Critic's taste call: trial line cut: [5.3] no longer explains the Trial Ends on / Renews on dates (the trial is first-time only and ends on reactivation); Goal and demo data updated
- 2026-11-03 · critic · 5 changes: [1.1] second-person opening, [3.3] clearer shared-website line (checked: confirm text and merged-website code), [5.1] display vs screen wording, [6.2] no elliptical question, [7.1] end tiles by number
- 2026-11-03 · validator · checked against master d36d69ed8 · 3 fixes: Days Past Due flag only hidden on two of the three cards; new flag on masjid reactivation failing and the first-time-only trial. [6.1] Show now returns to the madrasah's page (reactivation fails on a masjid)

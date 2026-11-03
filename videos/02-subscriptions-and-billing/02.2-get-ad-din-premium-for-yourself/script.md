---
id: "02.2"
title: Get Ad-Din Premium for yourself
target: 4:15
prereq:
  - "00.2"
status: scripted
audience:
  - Everyone
platform: Both
flags:
  - "The app's Premium page is native (Ad-DinMobileApp, origin/Develop, AdDinStrings.resx: Choose your plan, Monthly, Yearly, Subscribe, Restore purchase, Manage subscription), not Angular, so npm run labels can't check those labels."
  - "Prices aren't spoken. The web cards show \"$ 0.99 / month\" and \"$ 9.99 / year\" but Stripe charges CAD (0.99 CAD / 9.99 CAD); App Store and Google Play show local prices."
  - "Payment happens in Stripe's own window (web) or the store sheet (app). Record with Stripe test mode and a store sandbox account; never a real card."
---

# 02.2 Get Ad-Din Premium for yourself

## Goal
Buy Ad-Din Premium for your own account on the web or in the app, change between monthly and yearly, cancel it, and know where App Store and Google Play subscriptions are managed.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->
- Your Ad-Din account
- A payment card (web), or your App Store or Google Play account (app)

## Covers
- Profile → Subscription: Premium Monthly $0.99 or Yearly $9.99, Subscribe, Change Plan, Cancel, App Store and Google Play subscriptions

## Demo data
- Member account `yusuf_rahman` with no subscription (Free card active)
- Stripe test mode with test card 4242 4242 4242 4242 and a demo billing address; the card number stays out of focus
- The same account after subscribing monthly (Monthly "Active", Yearly "Upgrade"), and a yearly-active state (Monthly "Change Plan")
- A second member whose Premium was bought through Google Play, for the grey "Cancel Subscription" and its message on the web
- App in a phone frame: the native Premium page with sandbox store plans, and a Premium state with "Manage subscription"

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Premium for you
#### [1.1] Opening
**Say:** Ad-Din Premium opens every feature for your role. If your masjid or madrasah hasn't given you one of its Premium seats, you can buy Premium yourself. In this video you'll do it on the web and in the app.
**Show:** Title card: "Get Ad-Din Premium for yourself".

#### [1.2]
**Say:** You'll need your Ad-Din account and a payment card. In the app, you pay through the App Store or Google Play instead.
**Show:** Opening card from You'll need.

### 2. Open your subscription
#### [2.1] Find it
**Say:** On the web, tap **Profile** at the top right, then **User Profile**, and open the **Subscription** tab.
**Show:** Web, member account. Top bar → Profile → User Profile → Subscription tab.

#### [2.2] The plans
**Say:** The **Free** card is the plan you have now. Next to it are **Premium** **Monthly** and **Premium** **Yearly**, each with its price and what's included.
**Show:** Spotlight the Free card and its "Active" button, then the Monthly and Yearly cards. Zoom on the prices and the "Best value" ribbon.

#### [2.3]
**Say:** Yearly costs less over a full year. Tap **Subscription terms** at the bottom to read how renewal and refunds work.
**Show:** Click "Subscription terms"; the list expands. Scroll it briefly, then collapse it.

### 3. Subscribe on the web
#### [3.1] Choose a plan
**Say:** Choose a plan and tap **Subscribe**. A secure Stripe payment window opens.
**Show:** Click "Subscribe" on the Monthly card. The Stripe window opens with "Ad-Din Premium Monthly".

#### [3.2] Pay
**Say:** Enter your billing address and card details, then confirm. Ad-Din never sees your full card number; Stripe keeps it safe.
**Show:** Fill the demo address and the Stripe test card, out of focus. Click Stripe's pay button.

#### [3.3] Done
**Say:** Ad-Din says **Thank You**. Premium is on straight away, with no need to sign out.
**Show:** The "Thank You" message: "You are now successfully subscribed to Ad-Din Premium. Enjoy the services." Close it.

#### [3.4]
**Say:** The top of the tab now shows the **Days remaining**, the date it's **Valid till**, and that **Renewal** is **Auto Renew**.
**Show:** Spotlight the summary: Days remaining, Valid till, Renewal "Auto Renew", Subscription service "Stripe". The Monthly card now says "Active".

### 4. Change your plan
#### [4.1] Upgrade
**Say:** To move from monthly to yearly, tap **Upgrade** on the yearly card. Ad-Din asks you to confirm.
**Show:** Click "Upgrade" on the Yearly card. The "Are you sure you want to change this subscription?" box opens.

#### [4.2]
**Say:** Your new plan starts right away, and you're only charged for what you've used. Tap **I understand, change.**, then pay in the Stripe window as before.
**Show:** Click "I understand, change."; the Stripe window opens for "Ad-Din Premium Yearly". Complete it with the test card.

#### [4.3] Change Plan
**Say:** On a yearly plan, the monthly card shows **Change Plan** instead. It works the same way.
**Show:** Yearly-active state: spotlight "Change Plan" on the Monthly card. Don't click.

### 5. Cancel
#### [5.1] Stop renewing
**Say:** To stop renewing, tap **Cancel Subscription** at the top of the tab.
**Show:** Click "Cancel Subscription". The "Cancel your subscription?" box opens.

#### [5.2]
**Say:** You keep Premium until the end of the period you've paid for. Tap **Cancel subscription** to confirm, or **Keep my plan** to go back.
**Show:** Zoom on the message with the end date, then click "Cancel subscription".

#### [5.3]
**Say:** **Renewal** now says **Never**, and the button reads **Subscription Canceled**. You can subscribe again at any time.
**Show:** Spotlight Renewal "Never" and the "Subscription Canceled" button; the plan cards show "Subscribe" again.

### 6. In the app
#### [6.1] Open it
**Say:** In the Ad-Din app, tap the gear icon on the home screen, then the **Subscription** tab. The app opens its own Premium page.
**Show:** Phone frame: tap the gear icon, then the Subscription tab. The native Premium page opens.

#### [6.2] Subscribe
**Say:** Under **Choose your plan**, pick **Monthly** or **Yearly** and tap **Subscribe**. You pay through the App Store on iPhone, or Google Play on Android.
**Show:** Tap the Yearly tile; the button shows the price. Tap it; the store sheet slides up (sandbox account, blurred). Cancel the sheet.

#### [6.3] Restore
**Say:** On a new phone, tap **Restore purchase** to bring back a plan you already bought with the same store account.
**Show:** Scroll down; spotlight "Restore purchase".

### 7. Store subscriptions
#### [7.1] Managed by the store
**Say:** A plan bought in the app is billed by Apple or Google. To change or cancel it, tap **Manage subscription** on the app's Premium page; the store opens.
**Show:** Phone frame, Premium state: spotlight the "Manage subscription" button.

#### [7.2] On the web
**Say:** On the web, its **Cancel Subscription** button is grey. Tap it to see where to cancel, step by step.
**Show:** Web, Google Play member: Subscription tab, click the grey "Cancel Subscription". The "Manage this subscription in Google Play" message opens; zoom, then close it.

### 8. Next
#### [8.1] Close
**Say:** That's Premium for yourself. If you run a masjid or madrasah, video 02.3 shows how to buy seats for your team and families. Video 02.1 explains how all the plans fit together.
**Show:** End card with two tiles: "02.3 Buy seats for your organisation" and "02.1 How Ad-Din plans work".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · critic · 3 changes: [1.1] seat defined, second-person opening, [6.3] no elliptical question, [8.1] Say names both end tiles
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes (native labels Choose your plan, Restore purchase, Manage subscription confirmed in Ad-DinMobileApp origin/Develop AdDinStrings.resx)

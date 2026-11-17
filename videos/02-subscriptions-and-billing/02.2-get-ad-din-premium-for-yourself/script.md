---
id: "02.2"
title: Get Ad-Din Premium for yourself
target: 5:30
prereq:
  - "00.2"
status: scripted
audience:
  - Everyone
platform: Both
flags:
  - "The app's Premium page is native (Ad-DinMobileApp, origin/Develop, AdDinStrings.resx: Choose your plan, Monthly, Yearly, Subscribe, Restore purchase, Manage subscription), not Angular, so npm run labels can't check those labels."
  - "Decided 2026-11-06: chapters 6-7 (the app's native Premium page and the store sheet) are captured on a real device or emulator with a store sandbox account, inside the phone frame, as for 00.7; no drawn likeness"
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
- Profile → Subscription: Premium Monthly or Yearly, Subscribe, Change Plan, Cancel, App Store and Google Play subscriptions
- What each card includes; the renewal and sharing terms; a failed payment
- What changes once you subscribe; what happens when a cancelled plan ends
- The steps the web gives for store plans; a seat from your organisation can't be cancelled here

## Demo data
- Member account `yusuf_rahman` with no subscription (Free card active)
- Stripe test mode with test card 4242 4242 4242 4242 and a demo billing address; the card number stays out of focus
- For [3.2a]: one take with Stripe's declined test card, so the "Failed to create subscription." box shows
- The same account after subscribing monthly (Monthly "Active", Yearly "Upgrade"), and a yearly-active state (Monthly "Change Plan")
- A second member whose Premium was bought through Google Play, for the grey "Cancel Subscription" and its message on the web
- A parent with an organisation seat ("Provided by your organization"), for [7.2b]
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
**Say:** Ad-Din Premium gives you every feature for your role. You need it only if you use a Parent, Student, Teacher or Admin portal.
**Show:** Title card: "Get Ad-Din Premium for yourself" for 3 seconds, then the Subscription tab's plan cards behind the rest of the line.

#### [1.1a] Ask first
**Say:** Ask your madrasah first, because many give families a seat. If yours hasn't, you can buy Premium yourself, on the web or in the app.
**Show:** The plan cards stay; card: "Ask your madrasah: many give families a seat".

#### [1.2]
**Say:** You'll need your Ad-Din account and a payment card. In the app, you pay through the App Store or Google Play instead.
**Show:** Opening card from You'll need.

### 2. Open your subscription
#### [2.1] Find it
**Say:** On the web, tap **Profile** at the top right, then **User Profile**, and open the **Subscription** tab.
**Show:** Web, member account. Top bar → Profile → User Profile → Subscription tab.

#### [2.2] The plans
**Say:** The **Free** card is the plan you have now. Next to it are **Premium** **Monthly** and **Premium** **Yearly**, each with its price and what's included.
**Show:** Spotlight the Free card and its "Active" button, then the Monthly and Yearly cards. Zoom on the "Best value" ribbon only; prices stay in shot but are never zoomed.

#### [2.2a] What's included
**Say:** Each card lists what's included. Premium adds features such as **Madrasah Management**, **Event Management** and **Reports** to everything on the **Free** card. What you see depends on your role.
**Show:** Slow pan down the Free card's list, then the Monthly card's list; prices stay in shot but are never zoomed.

#### [2.3]
**Say:** Yearly costs less over a full year. Payments aren't refunded. If you cancel, you keep Premium to the end of the period. Tap **Subscription terms** at the bottom to read the details.
**Show:** Click "Subscription terms"; the list expands. Scroll it briefly, then collapse it.

#### [2.3a] Renewal and sharing
**Say:** The terms also say that the renewal is charged within a day of the end of each period. Premium is for one person, so don't share your account.
**Show:** Subscription terms open: spotlight the renewal line, then "Ad-Din Premium subscriptions is per user, sharing account will violate our terms."

### 3. Subscribe on the web
#### [3.1] Choose a plan
**Say:** Choose a plan and tap **Subscribe**. A secure payment window from Stripe, a payment company, opens.
**Show:** Click "Subscribe" on the Monthly card. The Stripe window opens with "Ad-Din Premium Monthly". Crop or blur Stripe's test-mode badge.

#### [3.2] Pay
**Say:** Enter your billing address and card details, then confirm. Ad-Din never sees your full card number; Stripe keeps it safe.
**Show:** Fill the demo address and the Stripe test card, out of focus; Stripe's test-mode badge cropped or blurred. Click Stripe's pay button.

#### [3.2a] If the payment fails
**Say:** If the payment doesn't go through, Ad-Din says **Failed to create subscription.** Close the message, check your card details, and subscribe again.
**Show:** Second take with Stripe's declined test card: the "Failed to create subscription." box ("…Please try again."); close it. Cut back to the main take.

#### [3.3] Done
**Say:** Ad-Din says **Thank You**. Premium is on at once. You don't need to sign out.
**Show:** The "Thank You" message: "You are now successfully subscribed to Ad-Din Premium. Enjoy the services." Close it.

#### [3.4]
**Say:** The top of the tab now shows the **Days remaining**, the date it's **Valid till**, and that **Renewal** is **Auto Renew**: it renews and charges your card each period until you cancel.
**Show:** Spotlight the summary: Days remaining, Valid till, Renewal "Auto Renew", Subscription service "Stripe". The Monthly card now says "Active".

#### [3.4a] What changes
**Say:** Your Premium pages open straight away. For example, a parent now sees the **Parent Portal** in the sidebar.
**Show:** Sidebar: spotlight "Parent Portal" (the demo account also has Teacher and Admin roles, so other portals show too).

### 4. Change your plan
#### [4.1] Upgrade
**Say:** To move from monthly to yearly, tap **Upgrade** on the yearly card. Ad-Din asks you to confirm.
**Show:** Click "Upgrade" on the Yearly card. The "Are you sure you want to change this subscription?" box opens.

#### [4.2]
**Say:** Your new plan starts right away. You don't pay twice: the unused part of your monthly plan counts towards the yearly price. Tap **I understand, change.**, then pay in the Stripe window as before.
**Show:** Click "I understand, change."; the Stripe window opens for "Ad-Din Premium Yearly". Complete it with the test card.

#### [4.3] Change Plan
**Say:** On a yearly plan, the monthly card shows **Change Plan** instead. Moving to monthly gives you credit for future payments.
**Show:** Yearly-active state: spotlight "Change Plan" on the Monthly card. Don't click.

### 5. Cancel
#### [5.1] Stop renewing
**Say:** To stop renewing, tap **Cancel Subscription** at the top of the tab.
**Show:** Click "Cancel Subscription". The "Cancel your subscription?" box opens.

#### [5.2]
**Say:** You keep Premium until the end of the period you've paid for. In the box, tap **Cancel subscription** to confirm, or **Keep my plan** to go back.
**Show:** Zoom on the message with the end date, then click "Cancel subscription".

#### [5.3]
**Say:** **Renewal** now says **Never**, and the button reads **Subscription Canceled**. You can subscribe again at any time.
**Show:** Spotlight Renewal "Never" and the "Subscription Canceled" button; the plan cards show "Subscribe" again.

#### [5.3a] When the period ends
**Say:** When the paid period ends, **Days remaining** reads 0, and the **Subscribe** buttons are back. Ad-Din keeps Premium open for thirty more days, as video 02.1 explains, so you have time to subscribe again.
**Show:** Lapsed state of the same account: "Days remaining" 0 and "Subscribe" on both cards. Spotlight both.

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
**Say:** Apple or Google bills you for a plan you buy in the app. To change or cancel it, tap **Manage subscription** on the app's Premium page; the store opens.
**Show:** Phone frame, Premium state: spotlight the "Manage subscription" button.

#### [7.2] On the web
**Say:** On the web, the **Cancel Subscription** button for a store plan is grey. Tap it to see where to cancel, step by step.
**Show:** Web, Google Play member (side panel: "Signed in as: member who subscribed in Google Play"): Subscription tab, click the grey "Cancel Subscription". The "Manage this subscription in Google Play" message opens; zoom, then close it.

#### [7.2a]
**Say:** The message lists the steps on your phone, for the App Store or for Google Play. **Upgrade** and **Change Plan** show the same message for a store plan.
**Show:** Zoom on the steps line in the open message ("profile icon → Payments & subscriptions → …"), then close it.

#### [7.2b] A seat from your organisation
**Say:** If your Premium is a seat from your organisation, the plan cards are hidden. **Cancel Subscription** tells you that only your organisation's admin can change it.
**Show:** Parent with a seat (side panel: "Signed in as: a parent with a seat"): Subscription tab, "Provided by your organization". Click "Cancel Subscription"; the "Your organization manages this subscription" box opens; close it.

### 8. Next
#### [8.1] Close
**Say:** That's Premium for yourself. If you run a masjid or madrasah, video 02.3 shows how to buy seats for your team and families. Video 02.1 explains how all the plans work together.
**Show:** End card with two tiles: "02.3 Buy seats for your organisation" and "02.1 How Ad-Din plans work".

## Review log
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 3:30 → 4:48 narration, 7 scenes added: [2.2a] what each card includes, [2.3a] renewal timing and no account sharing (Subscription terms), [3.2a] a failed payment, [3.4a] Premium pages open at once, [5.3a] when the cancelled period ends (Days remaining 0, thirty more days), [7.2a] the store steps and Upgrade/Change Plan on a store plan, [7.2b] an organisation seat can't be cancelled here
- 2026-11-06 · panel (user, director, writer, PM, PO) · 13 changes: Covers without prices, [1.1] "gives you" (not "opens"), Show leaves the title card sooner, [2.2] no zoom on prices (cards say $, Stripe charges CAD), [3.1] says what Stripe is, [3.1]/[3.2] crop Stripe's test-mode badge, [3.3] no idiom, [3.4] says what Auto Renew means, [4.2] plain proration wording (matches the Subscription terms), [4.3] downgrading gives credit, not "the same way" (Subscription terms), [5.2] "In the box" tells the two Cancel buttons apart, [7.1] no passive, [7.2] clear "its", "Signed in as" label, [8.1] no idiom
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-06 · manager · panel decisions approved ("approved": recommended options) · [1.1]/[1.1a] who needs Premium, ask your madrasah first (decision 11), [2.3] no refunds (decision 13), real-device capture flag (decision 14)
- 2026-11-03 · critic · 3 changes: [1.1] seat defined, second-person opening, [6.3] no elliptical question, [8.1] Say names both end tiles
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes (native labels Choose your plan, Restore purchase, Manage subscription confirmed in Ad-DinMobileApp origin/Develop AdDinStrings.resx)

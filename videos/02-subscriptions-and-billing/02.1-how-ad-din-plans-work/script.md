---
id: "02.1"
title: How Ad-Din plans work
target: 5:00
prereq: []
status: scripted
audience:
  - Everyone
flags:
  - The 30-day grace period isn't shown anywhere in the app (no banner or countdown). The script states the API rule (UserClaimRepository and SubscriptionService allow access until 30 days after expiry).
---

# 02.1 How Ad-Din plans work

## Goal
Know what's free, what Premium adds, the two ways to get Premium (for yourself or as a seat from your organisation), what add-on services are, and what the 30-day grace period means.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Free vs Premium
- personal Premium vs organisation seats
- add-on services
- the 30-day grace period
- One account per person; monthly or yearly; what a seat holder sees and who manages it
- Worked examples: which plan a member, a parent, a teacher and an admin need
- What a Premium page does when you don't have Premium

## Demo data
- Member account with no subscription (for example `yusuf_rahman`), so Profile → Subscription shows the Free, Premium Monthly and Premium Yearly cards
- Demo world (engine/demo-world.md): "Maple Grove Madrasah" with seats bought, Yearly 3 of 20 used and Monthly 0 of 10 used (as in 02.4); signed in as its admin Yusuf Rahman (who has a seat)
- Its Other Services: website active, Custom Sender Name and Email not subscribed; the linked "Maple Grove Masjid" shows Prayer Times Premium
- Parent account with an organisation seat, so its Subscription tab shows "Provided by your organization"
- Family Subscription sharing visible on the madrasah's Services tab (not toggled on camera)
- For [6.1]: a member whose Premium ended under 30 days ago (Days remaining 0); for [6.2]: a parent with an enrolled child whose Premium ended over 30 days ago
- For [4.3a]: the parent with a seat sees the "Your organization manages this subscription" box on Cancel Subscription
- Every account switch is labelled in the side panel: "Signed in as: Member", "Admin", "Parent with a seat", "Premium ended 10 days ago", "Premium ended 40 days ago"

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Free, Premium and extras
#### [1.1] Opening
**Say:** Ad-Din has a free plan, a Premium plan, and a few extra services for organisations. In this video you'll see how they work together, so you know what you need.
**Show:** Title card: "How Ad-Din plans work".

### 2. What's free
#### [2.1] The Free card
**Say:** To compare the plans, tap **Profile** at the top right, then **User Profile**, and open the **Subscription** tab.
**Show:** Member account (side panel: "Signed in as: Member"). Top bar → Profile → User Profile → Subscription tab. The three plan cards load.

#### [2.2]
**Say:** The **Free** card shows what costs nothing. A masjid can manage its details, prayer times and live streaming for free, and everyone gets the **Quran**, the **Tasbeeh Counter**, and messages and events to read.
**Show:** Spotlight the Free card; slow zoom down its list to "Messages Centre (View)" and "View Events".
**Caption:** Free: a masjid manages its details, prayer times and live streaming; everyone gets the Quran, the Tasbeeh Counter, and messages and events to read.

### 3. What Premium adds
#### [3.1] Premium features
**Say:** **Premium** adds more features, such as **Madrasah Management**, **Event Management** and **Reports**.
**Show:** Spotlight the Premium Monthly card's feature list (all bullets stay on screen; only three are spoken). Keep the prices in shot; don't zoom on them.

#### [3.2]
**Say:** What you see in Premium depends on your role. A teacher sees the **Teacher Portal**. A parent sees the **Parent Portal**. An admin sees the **Admin Portal**.
**Show:** Admin account sidebar (side panel: "Signed in as: Admin"): spotlight Teacher Portal, Parent Portal, Admin Portal in turn.

#### [3.3]
**Say:** Premium belongs to one person. Everyone who uses these portals needs it on their own account, unless their organisation shares a family seat, as you'll see in a moment.
**Show:** Card: "Premium = one person, one account".

#### [3.3a] One account each
**Say:** Don't share one Premium account between several people. Ad-Din's **Subscription terms** say that Premium is for one user, and that sharing an account breaks the terms.
**Show:** Member's Subscription tab: click "Subscription terms"; spotlight the line "Ad-Din Premium subscriptions is per user, sharing account will violate our terms." Collapse it.

### 4. Two ways to get Premium
#### [4.1] For yourself
**Say:** The first way: buy Premium for yourself, monthly or yearly, here on the **Subscription** tab, on the web or in the app.
**Show:** Back on the member's Subscription tab (side panel: "Signed in as: Member"). Spotlight the two "Subscribe" buttons. Don't click.

#### [4.1a] Monthly or yearly
**Say:** Monthly suits you if you only need Premium for a short time. Yearly costs less over a full year, and you can move from monthly to yearly at any time.
**Show:** Spotlight the "Best value" ribbon on the Yearly card; prices stay in shot but are never zoomed.

#### [4.2] From your organisation
**Say:** The second way: your masjid or madrasah buys **Ad-Din Premium** as seats. A seat is one Premium place that the organisation pays for and gives to one person.
**Show:** Admin account (side panel: "Signed in as: Admin"): Sidebar → Admin Portal → Subscription Management → View plan on "Maple Grove Madrasah". Spotlight the Monthly and Yearly cards and their "of … used" lines.

#### [4.2a]
**Say:** Admins buy seats as monthly or yearly plans and choose who gets each one. Video 02.4 shows how they give them out.
**Show:** Spotlight "3 of 20 used" and "17 available" on the Yearly card.

#### [4.3]
**Say:** If you have a seat, your **Subscription** tab says **Provided by your organization**. You don't pay; your admin manages it.
**Show:** Parent account (side panel: "Signed in as: Parent with a seat"): Profile → Subscription tab. Zoom on "Provided by your organization".

#### [4.3a] Managed by your admin
**Say:** With a seat, the plan cards are hidden, and only your organisation's admin can change or cancel it. If you tap **Cancel Subscription**, Ad-Din tells you to ask them.
**Show:** Same parent account: click "Cancel Subscription"; the box "Your organization manages this subscription" opens. Zoom, then close it.

#### [4.4] One seat for a family
**Say:** An organisation can also turn on **Family Subscription sharing**. Then one seat given to a parent covers the whole linked family, including a spouse and children.
**Show:** Admin account (side panel: "Signed in as: Admin"): Admin Portal → Organization Management → Manage on "Maple Grove Madrasah" → Services tab. Spotlight the "Family Subscription sharing" switch and its description. Don't toggle it.

### 4a. Which one do you need?
#### [4a.1] A member
**Say:** Here are some examples from Maple Grove. A member who follows Maple Grove Masjid for prayer times, events and messages needs nothing more. The Free plan covers it.
**Show:** Card with four rows, the first one highlighted: "Member who follows the masjid → Free".

#### [4a.2] A parent
**Say:** A parent at Maple Grove Madrasah needs Premium for the **Parent Portal**. Ask the madrasah first. With family sharing on, one seat covers the whole family.
**Show:** Same card, second row highlighted: "Parent → a seat from the madrasah, or Premium for yourself".

#### [4a.3] Teachers and admins
**Say:** Teachers and admins need Premium for their portals too. They usually get a seat from the organisation. Buy Premium yourself only if your organisation doesn't give you one.
**Show:** Same card, third and fourth rows highlighted: "Teacher → seat", "Admin → seat".

### 5. Add-on services
#### [5.1] Extras for organisations
**Say:** Back on the organisation's subscription page, under **Other Services**, organisations can add a public website, and emails sent with their own sender name and address. A masjid can also add **Ad-Din Prayer Times Premium** for its TV screens.
**Show:** Admin account: Subscription Management → View plan on "Maple Grove Madrasah" → scroll to Other Services. Spotlight Ad-Din Public Facing Webpages and Ad-Din Custom Sender Name and Email. Cut to the masjid's View plan; spotlight Ad-Din Prayer Times Premium.

#### [5.2]
**Say:** Add-ons are for the whole organisation, so they don't use any of your Premium seats. Each add-on is its own paid subscription. Prayer Times Premium starts with a free trial.
**Show:** Spotlight the Other Services heading above the cards.

#### [5.2a]
**Say:** Add-ons are billed to the organisation, together with its seats, by card or by invoice. Video 02.6 explains billing.
**Show:** Spotlight the Billing column on the same page.

### 6. The grace period
#### [6.1] Thirty more days
**Say:** If a Premium plan ends, Ad-Din doesn't lock you out at once. Premium stays open for thirty more days, so there's time to renew, even though **Days remaining** already reads 0.
**Show:** Card: a timeline "Plan ends → 30 more days → Premium pages locked". Then a lapsed member's Subscription tab (side panel: "Signed in as: Premium ended 10 days ago"), still inside the 30 days: "Days remaining" reads 0 and the Subscribe buttons are back (the countdown is not the grace period).

#### [6.2]
**Say:** After those thirty days, Premium pages open your **Subscription** tab instead, so you can get Premium again. Free features keep working as always.
**Show:** As a parent whose Premium ended more than 30 days ago (with an enrolled child; side panel: "Signed in as: Premium ended 40 days ago"), click Parent Portal in the sidebar; the profile's Subscription tab opens in its place.

#### [6.2a] Without Premium
**Say:** The same happens to anyone without Premium. On the web, a Premium page opens the **Subscription** tab. In the app, the app's own Premium page opens.
**Show:** Card: "Web → Subscription tab · App → Premium page". Quick cut: phone frame, the app's Premium page (real-device capture, as in 02.2).

### 7. Next
#### [7.1] Close
**Say:** Video 02.2 shows how to get Ad-Din Premium for yourself. Video 02.3 shows how to buy seats for your organisation, and video 02.5 explains add-on services.
**Show:** End card with three tiles: "02.2 Get Ad-Din Premium for yourself", "02.3 Buy seats for your organisation", "02.5 Add-on services".

## Review log
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 2:44 → 4:22 narration, 9 scenes added: [3.3a] one account each (Subscription terms), [4.1a] monthly or yearly, [4.2a] admins choose who gets seats, [4.3a] a seat is managed by your admin, new chapter 4a with [4a.1]-[4a.3] which plan a member, parent, teacher and admin need, [5.2a] add-ons are billed with seats, [6.2a] what a Premium page does without Premium; demo names moved to Maple Grove (decision 18)
- 2026-11-06 · panel (user, director, writer, PM, PO) · 12 changes: "Signed in as" side-panel label on every account switch, [1.1] no idiom, [2.2] masjid admin features named as free for a masjid, not "what everyone gets" (Say and Caption), [3.1] "more features", [3.2] no "role based", full sentences, [3.3] no clash with family sharing in [4.4], [4.2] defines a seat, [4.3] no phrasal verb, [5.1] not "the same page" (it follows the Services tab), two cards then the masjid's page, plain sender wording, [6.1] says Days remaining already reads 0, no idiom, [6.2] says the Subscription tab opens, [7.1] no elliptical question, every video by number
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-06 · manager · panel decisions approved ("approved": recommended options) · [3.1] speaks three features only (decision 9), [5.2] add-ons are paid, Prayer Times Premium trial (decision 10)
- 2026-11-03 · critic · 3 changes: [1.1] second-person opening, [5.2] clearer seat wording and a Show with something to see, [7.1] Say names all three end tiles
- 2026-11-03 · validator · checked against master d36d69ed8 · 2 fixes: [6.1] Show (Days remaining reads 0 during grace), [6.2] Show + demo data (a member has no Premium page in the sidebar; use a lapsed parent)

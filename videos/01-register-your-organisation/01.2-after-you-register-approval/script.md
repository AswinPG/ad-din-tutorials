---
id: "01.2"
title: "After you register: approval"
target: 2:30
prereq:
  - "01.1"
status: scripted
flags:
  - "Admin straight away is true in the data, but the menu stays locked behind the Pending Approval note until Ad-Din approves, so set-up can't start yet (Terms item 3 suggests it can); the script says the menu opens on approval. Decided 2026-11-03: show the lock as it works today; the registration term will be reworded (docs/APP-ISSUES.md)"
  - The Pending Approval note shows only when every home organisation is unapproved; the demo account's home masjid and madrasah must both be the pending ones
---

# 01.2 After you register: approval

## Goal
Know what happens while Ad-Din reviews your new organisation, how to contact support, and what changes once it's approved.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- You’re Admin straight away
- the “Pending Approval” note
- listed on the map only after approval
- contacting support

## Demo data
- The demo account from 01.1 with "Masjid Al-Huda" and "Al-Huda Madrasah" as its home masjid and madrasah, both still unapproved
- The same account in the Ad-Din app (phone frame) showing the Pending Approval home card
- A second demo account (a community member) for the Masjid Finder search, near the demo city; while it is on screen the side panel reads "Signed in as: a community member"
- After approval: both organisations approved, so the full sidebar and the map pin show
- The support portal page opened by "Contact Ad-Din Support" (no personal data on screen)

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Your organisation is registered
#### [1.1] Opening
**Say:** You've just registered a masjid or madrasah on Ad-Din. In this video you'll see what happens while Ad-Din reviews it, and what changes once it's approved.
**Show:** Title card: "After you register: approval".

### 2. You're the admin
#### [2.1] Admin straight away
**Say:** As soon as you register, you're the organisation's first admin, so nobody needs to add you. You can start setting it up once Ad-Din approves it.
**Show:** The "Thank You !" popup from registering, with both names. Spotlight "Your submission is under review."

#### [2.2]
**Say:** Ad-Din also sends you an email with instructions for setting up, so check your inbox.
**Show:** Zoom on "You will receive an e-mail with detailed instruction on setting up the modules." Click "Finish"; the dashboard opens.

### 3. While Ad-Din reviews it
#### [3.1] Pending Approval
**Say:** Until your organisation is approved, the sidebar shows a **Pending Approval** note instead of the usual items. The full sidebar appears once it's approved.
**Show:** Web sidebar with the "Pending Approval" note. Zoom on "Your organisation is awaiting approval from Ad-Din. The menu opens once it's approved."

#### [3.2] In the app
**Say:** In the Ad-Din app, your home screen shows the same **Pending Approval** card. Pull the screen down to check again.
**Show:** Phone frame: the Pending Approval card with "Al-Huda" names, "Awaiting approval from Ad-Din." and the hint. Pull down to refresh.

#### [3.3]
**Say:** Ad-Din may contact you for more details before approving, so check your email and answer your phone. If approval takes longer than a week, use **Contact Us** in the help menu.
**Show:** Back on the web. Card quoting the second registration term: "Ad-Din Officials may contact you for more details prior to approving the Organization".

### 4. Not on the map yet
#### [4.1] Others can't find it yet
**Say:** Here's what another member sees. Until it's approved, other people can't find your organisation in the **Masjid Finder** or on the map.
**Show:** Switch to the member account; the side panel reads "Signed in as: a community member". Sidebar → Masjid → Masjid Finder. Search "Al-Huda": "No results nearby".

#### [4.2]
**Say:** So wait for approval before you ask your community to follow it.
**Show:** Hold on the empty result, then back to the admin account.

### 5. Contact support
#### [5.1] Contact Ad-Din Support
**Say:** Need help, or waiting longer than you expected? In the note, tap **Contact Ad-Din Support**. Ad-Din's support portal opens, where you can send a request.
**Show:** Click "Contact Ad-Din Support" in the sidebar note. The support portal opens in a new tab. Keep any personal details off screen.

#### [5.2]
**Say:** In the app, the same button is on the **Pending Approval** card.
**Show:** Phone frame: spotlight "Contact Ad-Din Support" on the card.

### 6. Once you're approved
#### [6.1] Approved
**Say:** When Ad-Din approves your organisation, you get an email. Open Ad-Din again, and the full sidebar is there. If Ad-Din can't approve it, you get an email saying so.
**Show:** Refresh the web page. The note is gone and the sidebar shows the full menu: Dashboard, Masjid, Admin Portal and more.

#### [6.2]
**Say:** Your organisation now shows in the **Masjid Finder** for everyone, and you can start setting it up. To run a madrasah, you'll need Ad-Din Premium.
**Show:** Member account (side panel: "Signed in as: a community member"): Masjid Finder search "Al-Huda" now shows the masjid card and its pin on the map.

### 7. Next
#### [7.1] Close
**Say:** Next, learn how Ad-Din plans work in video 02.1, then add your organisation's details, logo and time zone in video 03.1.
**Show:** End card with two tiles: "02.1 How Ad-Din plans work" and "03.1 Your organisation’s details, logo and time zone".

## Review log
- 2026-11-06 · panel (user, director, writer, PM, PO) · 7 changes: [2.1] "admin", and says set-up waits for approval (no mixed message with [3.1]), [3.1]/[6.1] "sidebar", not "menu" (one word across the series), [3.2] says what to pull, [4.1] says aloud that this is another member's view, with a "Signed in as" side-panel label in [4.1], [4.2] and [6.2], [4.2] people follow the organisation, [6.1] adds the rejection email (SendMasjidRejectedNotification / SendMadressahRejectedNotification)
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-06 · manager · panel decisions approved ("approved": recommended options) · [3.3] contact us after a week (decision 5), [6.2] a madrasah needs Premium (decision 4)
- 2026-11-03 · manager · decisions via chat · 'Admins of a pending organisation' decided: the term will change; 01.2 shows the lock as it works today; flag reworded (and quoted), APP-ISSUES notes registration term 3 needs rewording
- 2026-11-03 · critic · 3 changes: [1.1] second-person opening, [3.3] idiom removed, [7.1] end tiles by number
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes

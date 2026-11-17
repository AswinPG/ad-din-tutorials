---
id: "01.2"
title: "After you register: approval"
target: 4:00
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
- Why Ad-Din reviews new organisations; what still works while you wait; the app's note when only one is approved
- Separate approval emails for the masjid and the madrasah; what to do if it's rejected; the first set-up videos after approval

## Demo data
- The demo account from 01.1 with "Masjid Al-Huda" and "Al-Huda Madrasah" as its home masjid and madrasah, both still unapproved
- The same account in the Ad-Din app (phone frame) showing the Pending Approval home card
- For [3.2a]: the app home with "Masjid Al-Huda" approved and "Al-Huda Madrasah" still pending, so the short "Al-Huda Madrasah is awaiting approval from Ad-Din." note shows
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

#### [2.2a] Why Ad-Din checks
**Say:** Ad-Din reviews every new masjid and madrasah before others can see it. This makes sure the person who registers it may act for the organisation.
**Show:** Card: "New organisation → Ad-Din reviews it → listed for everyone".

### 3. While Ad-Din reviews it
#### [3.1] Pending Approval
**Say:** Until your organisation is approved, the sidebar shows a **Pending Approval** note instead of the usual items. The full sidebar appears once it's approved.
**Show:** Web sidebar with the "Pending Approval" note. Zoom on "Your organisation is awaiting approval from Ad-Din. The menu opens once it's approved."

#### [3.1a] What still works
**Say:** While you wait, **Profile** at the top right still works, so you can update your own details. Everything in the sidebar opens after approval.
**Show:** Click "Profile" in the top bar; the menu opens. Spotlight "User Profile", then close the menu.

#### [3.2] In the app
**Say:** In the Ad-Din app, your home screen shows the same **Pending Approval** card. Pull the screen down to check again.
**Show:** Phone frame: the Pending Approval card with "Al-Huda" names, "Awaiting approval from Ad-Din." and the hint. Pull down to refresh.

#### [3.2a] One approved first
**Say:** The masjid and the madrasah are approved one at a time. If one is approved first, the app's home fills in, and a short note names the one that is still waiting.
**Show:** Phone frame, the partial state: the home with prayer times, and the note "Al-Huda Madrasah is awaiting approval from Ad-Din." with its "Contact Ad-Din Support" button.

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

#### [5.1a] What to write
**Say:** In your request, give the organisation's name, your username and the email you registered with, so Ad-Din can find it quickly.
**Show:** Card: "Organisation name · Your username · Your email".

#### [5.2]
**Say:** In the app, the same button is on the **Pending Approval** card.
**Show:** Phone frame: spotlight "Contact Ad-Din Support" on the card.

### 6. Once you're approved
#### [6.1] Approved
**Say:** When Ad-Din approves your organisation, you get an email. Open Ad-Din again, and the full sidebar is there. If Ad-Din can't approve it, you get an email saying so.
**Show:** Refresh the web page. The note is gone and the sidebar shows the full menu: Dashboard, Masjid, Admin Portal and more.

#### [6.1a] One email each
**Say:** Because the masjid and the madrasah are checked separately, you may get two emails, one for each. If one is rejected and you don't know why, use **Contact Ad-Din Support** to ask.
**Show:** Card: "Masjid Al-Huda → one email · Al-Huda Madrasah → one email" (no email body is shown; the template lives in the database). Then spotlight "Contact Ad-Din Support" in a screenshot of the earlier note.

#### [6.2]
**Say:** Your organisation now shows in the **Masjid Finder** for everyone, and you can start setting it up. To run a madrasah, you'll need Ad-Din Premium.
**Show:** Member account (side panel: "Signed in as: a community member"): Masjid Finder search "Al-Huda" now shows the masjid card and its pin on the map.

#### [6.2a] Where to start
**Say:** Good first steps: add your details, logo and time zone in video 03.1, choose your features in video 03.2, and check your prayer times in video 04.1. Then add other admins and teachers in videos 03.3 and 03.4.
**Show:** Admin account, full sidebar: spotlight Admin Portal, then a card listing "03.1 · 03.2 · 04.1 · 03.3 · 03.4".

### 7. Next
#### [7.1] Close
**Say:** Next, learn how Ad-Din plans work in video 02.1, then add your organisation's details, logo and time zone in video 03.1.
**Show:** End card with two tiles: "02.1 How Ad-Din plans work" and "03.1 Your organisation’s details, logo and time zone".

## Review log
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 2:00 → 3:12 narration, 6 scenes added: [2.2a] why Ad-Din checks, [3.1a] Profile still works while you wait, [3.2a] the app's note when one is approved first, [5.1a] what to write to support, [6.1a] one email each and asking about a rejection, [6.2a] first set-up videos (03.1, 03.2, 04.1, 03.3, 03.4)
- 2026-11-06 · panel (user, director, writer, PM, PO) · 7 changes: [2.1] "admin", and says set-up waits for approval (no mixed message with [3.1]), [3.1]/[6.1] "sidebar", not "menu" (one word across the series), [3.2] says what to pull, [4.1] says aloud that this is another member's view, with a "Signed in as" side-panel label in [4.1], [4.2] and [6.2], [4.2] people follow the organisation, [6.1] adds the rejection email (SendMasjidRejectedNotification / SendMadressahRejectedNotification)
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-06 · manager · panel decisions approved ("approved": recommended options) · [3.3] contact us after a week (decision 5), [6.2] a madrasah needs Premium (decision 4)
- 2026-11-03 · manager · decisions via chat · 'Admins of a pending organisation' decided: the term will change; 01.2 shows the lock as it works today; flag reworded (and quoted), APP-ISSUES notes registration term 3 needs rewording
- 2026-11-03 · critic · 3 changes: [1.1] second-person opening, [3.3] idiom removed, [7.1] end tiles by number
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes

---
id: "15.4"
title: Donate to your masjid
target: 2:30
prereq:
  - "00.4"
status: scripted
flags:
  - "Campaigns in the app: members don't see donation campaigns in the app. The Donation tile opens the organisation's donation page (a service page or an outside link set by the admin); the campaign list is admin-only. Scripted what members get; campaigns are shown on the website only."
  - "The in-app donation page reuses the admin service-page view: its header reads Manage Service, with a Published badge and a Read only tag. Keep the header out of shot or fix it for members."
  - Website campaigns need the masjid to have the Website add-on, and the Donate button hands over to PayPal; stop before PayPal on camera. Website labels (Masjid Donations, View All, Donation Progress) come from AdDin.PublicWebpages, which npm run labels does not scan.
---

# 15.4 Donate to your masjid

## Goal
Find your masjid's donation page in the Ad-Din app, and give to a donation campaign on your masjid's Ad-Din website.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->
- The Ad-Din app, signed in, with a home masjid
- For campaigns: your masjid's Ad-Din website address

## Covers
- Campaigns in the app and on the website

## Demo data
- Member account (no admin role) with home masjid "Masjid Al-Noor"
- Masjid Al-Noor's donation page set to a published service page "Support Masjid Al-Noor" with a picture and text on how to give (bank details blurred or fictional)
- Masjid Al-Noor has the Website add-on; its demo website shows two active campaigns, "Roof Repair Appeal" (with goal and amount raised) and "Ramadan Iftar Fund", each with photos and a PayPal Donate button in sandbox
- Phone browser for the website shots; nothing past the PayPal hand-off is shown
- Phone frame for every shot

## Script

### 1. Giving to your masjid
#### [1.1] Opening
**Say:** Your masjid depends on the generosity of its community. In this video you'll find where to give, in the Ad-Din app and on your masjid's website.
**Show:** Title card: "Donate to your masjid". Phone frame on the app home.

#### [1.2]
**Say:** The app takes you to your home masjid's donation page. Your home masjid is already set; if not, choose it first.
**Show:** Home screen with "Masjid Al-Noor" in the top bar.

### 2. Donate in the app
#### [2.1] Donation tile
**Say:** On the home screen, tap **Donation**.
**Show:** Spotlight the "Donation" tile and tap it.

#### [2.2]
**Say:** Your masjid's donation page opens. Read how the masjid would like you to give, and follow its steps.
**Show:** The "Support Masjid Al-Noor" page opens. Frame the picture, title and Page Content; keep the "Manage Service" header out of shot. Scroll slowly through the text.

#### [2.3]
**Say:** Some masjids use their own giving website instead. Then the tile opens that site in your browser.
**Show:** Card with a phone icon and an arrow to a browser window labelled "Your masjid's giving page". No real site.

#### [2.4]
**Say:** If you see a message that the donation page isn't set up yet, your masjid hasn't added one. Ask the masjid office.
**Show:** Toast on a second demo account: "Your organisation has not set up a donation page yet. Please contact the administrator for more information."

### 3. Campaigns on the website
#### [3.1] Masjid Donations
**Say:** Many masjids collect for a special cause, such as a roof repair or an iftar fund. You'll find these campaigns on your masjid's Ad-Din website, under **Masjid Donations**.
**Show:** Phone browser on the Masjid Al-Noor demo website home page. Scroll to the "Masjid Donations" section.

#### [3.2] View All
**Say:** Tap **View All** to see every campaign. Each shows how much has been raised towards its goal.
**Show:** Tap "View All". The Masjid Donations page lists "Roof Repair Appeal" and "Ramadan Iftar Fund"; spotlight the progress bar and amounts.

#### [3.3] One campaign
**Say:** Tap a campaign to read about it. The **Donation Progress** bar shows how close it is.
**Show:** Tap "Roof Repair Appeal". Show the photos, title, "Donation Progress" bar and the description.

#### [3.4] Donate
**Say:** To give, tap the Donate button. PayPal opens, where you choose the amount and pay securely.
**Show:** Spotlight the Donate button, tap it; cut as the PayPal window begins to open. Never show the payment screen.

### 4. Next
#### [4.1] Close
**Say:** May Allah accept your giving. Next, see the events at your masjid, or watch its live streams from home.
**Show:** End card with two tiles: "15.3 Events: going, interested and sharing" and "15.6 Tasbeeh, live streams, gallery and forms".

## Review log
- 2026-11-03 · manager · decisions via chat · 15.3 renamed 'Events: going, interested and sharing': end-card tile updated
- 2026-11-03 · critic · 2 changes: [1.1] "runs on" metaphor replaced and standard "In this video" opening, [3.1] "appeals" explained as campaigns (one word for the thing, as in Covers)
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes (website labels Masjid Donations, View All, Donation Progress confirmed in AdDin.PublicWebpages on master)

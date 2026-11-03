---
id: "08.4"
title: Run a fundraising campaign
target: 4:00
prereq:
  - "08.3"
status: scripted
flags:
  - "Removed switch: Donation Page: campaigns don't depend on the Donation Page switch (it only sets where the Donate button and the app's Donation tile go)."
  - "Where donors see campaigns: published campaigns show on the organisation's Ad-Din website (Masjid Donations), which needs the Website add-on. The app's Donation tile opens the donation page, not campaigns (as 15.4 found). The Publish row's note still says \"in the app and on your website\"; the script only promises the website."
  - "Campaign List opens on the home madrasah when the admin has one (setHomeOrganization prefers it); the script picks the masjid in Select an Organisation first."
  - "Goal Amount shows a fixed $ sign whatever the organisation's currency; keep the narration currency-free."
---

# 08.4 Run a fundraising campaign

## Goal
Create a donation campaign with pictures, a goal, a PayPal donate button and the right visibility, and publish it for your community.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->
- Admin access to your masjid, with Ad-Din Premium
- A PayPal business account with a Donate button made in PayPal, and its Hosted Button ID
- Pictures or a short video for the campaign

## Covers
- Goal, media, hide progress, pin to top, PayPal Hosted Button ID

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Masjid Admin account, admin of "Masjid Al-Noor" (Premium) and "Al-Noor Madrasah"; home madrasah set, so Campaign List first shows Al-Noor Madrasah
- Masjid Al-Noor already has one campaign, "Ramadan Iftar Fund"
- New campaign typed on camera: Title "Roof Repair Appeal", Sub Title "Help us fix the prayer hall roof before winter", Goal Amount 25000, Hosted Button ID `8JHK2M4QWERTY` (sandbox, fictional), two roof photos (900 × 600) ready to upload, a short story for Content
- Masjid Al-Noor demo website (Website add-on) showing "Roof Repair Appeal" under Masjid Donations for the closing shot

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Raise money for a cause
#### [1.1] Opening
**Say:** A new roof, an iftar fund, help for a family in need: a campaign tells your community what you're raising money for, and how close you are.
**Show:** Title card: "Run a fundraising campaign".

#### [1.2]
**Say:** Campaigns come with Ad-Din Premium. Donors give through PayPal, so first make a Donate button in your PayPal business account.
**Show:** Opening card from You'll need.

### 2. Open your campaigns
#### [2.1] Campaign List
**Say:** In the sidebar, tap **Donation**. The **Campaign List** opens.
**Show:** Sidebar → Donation. The Campaign List page.

#### [2.2]
**Say:** Check the organisation at the top. If it shows your madrasah, choose your masjid.
**Show:** Open the "Select an Organisation" list; choose "Masjid Al-Noor-(masjid)". The list shows "Ramadan Iftar Fund".

#### [2.3]
**Say:** Tap **Add Campaign**.
**Show:** Click "Add Campaign". The Donation page opens with a "Draft" chip next to its title.

### 3. Pictures and details
#### [3.1] Media
**Say:** Start with pictures. Tap **Select Files**, choose an image or a short video, and crop it.
**Show:** In the empty media box ("Upload images / videos here"), click "Select Files"; choose the first roof photo, crop, upload.

#### [3.2]
**Say:** Add more with the plus button. They show as a row of thumbnails, and donors can swipe through them.
**Show:** Click the add button in the thumbnail rail; upload the second photo. Click each thumbnail to switch the big picture.

#### [3.3] Details
**Say:** Under **Donation Details**, pick your masjid as the **Organisation**. Type a **Title**, and a one-line **Sub Title** saying who it helps.
**Show:** Choose "Masjid Al-Noor-(masjid)" in Organisation. Type the demo Title and Sub Title.

### 4. Goal and PayPal
#### [4.1] Goal
**Say:** Under **Donation Goal**, enter your **Goal Amount**. Donors see how much has been raised towards it.
**Show:** Type 25000 in Goal Amount.

#### [4.2] Hosted Button ID
**Say:** Under **Payment Methods**, paste your PayPal **Hosted Button ID**. You'll find it in PayPal under **Pay & Get Paid**, then **Donations**.
**Show:** Spotlight the PayPal row and its hint "Find this in PayPal under Pay & Get Paid → Donations." Paste the demo ID.
**Caption:** Paste your PayPal Hosted Button ID. In PayPal: Pay & Get Paid → Donations.

#### [4.3]
**Say:** This links the campaign to your own PayPal button, so gifts go straight to your masjid's account.
**Show:** Hold on the filled Payment Methods card.

### 5. Visibility
#### [5.1] Pin card to top
**Say:** Under **Visibility**, turn on **Pin card to top** to keep this campaign first in the donations list.
**Show:** Toggle "Pin card to top" on.

#### [5.2] Hide donation progress
**Say:** Prefer not to show the total? Turn on **Hide donation progress**, and donors won't see the amount raised.
**Show:** Spotlight "Hide donation progress" and its note; leave it off for this campaign.

#### [5.3] Publish
**Say:** **Publish** makes the campaign visible to donors. While it's off, the campaign stays a draft.
**Show:** Toggle "Publish" on; the chip at the top changes from "Draft" to "Published".

### 6. Tell the story and save
#### [6.1] Content
**Say:** In the **Content** box, tell the story: what the money is for and why it matters. You can add headings, lists and pictures.
**Show:** Type the demo story in the Content editor; make one line bold.

#### [6.2] Preview
**Say:** Tap **Preview** to see the campaign the way donors will.
**Show:** Click "Preview". The "Donor preview" panel shows the photo, title, goal bar and story. Close it.

#### [6.3] Save
**Say:** Tap **Save**. Your campaign appears in the list with its goal and the amount collected so far.
**Show:** Click "Save". The Campaign List shows "Roof Repair Appeal"; spotlight the Goal Amount and Collected Amount columns.

#### [6.4] Live
**Say:** Published campaigns appear on your masjid's Ad-Din website, under **Masjid Donations**.
**Show:** Browser on the Masjid Al-Noor demo website: the "Masjid Donations" section with "Roof Repair Appeal" first.

### 7. Next
#### [7.1] Close
**Say:** To change a campaign later, tick it and tap **Edit Campaign**. Next, see who has given, and record cash or cheque gifts yourself.
**Show:** Tick the "Roof Repair Appeal" row; spotlight "Edit Campaign". End card with two tiles: "08.5 Track donations and record offline gifts" and "15.4 Donate to your masjid".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->

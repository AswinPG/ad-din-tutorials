---
id: "08.4"
title: Run a fundraising campaign
target: 6:00
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
- When to use a campaign rather than the donation page (08.3); one campaign per cause
- Campaign List buttons and columns; Edit and View need one ticked row
- Picture tips, removing a picture; required fields and their messages; the organisation is fixed after saving
- Copy the Hosted Button ID exactly
- Publishing sends no notification; tell people with a message (07.2)
- Save Changes and the raised-so-far bar when editing; ending a campaign: unpublish or Delete Campaign (can't be undone)

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Masjid Admin account, admin of "Maple Grove Masjid" (Premium) and "Maple Grove Madrasah"; home madrasah set, so Campaign List first shows Maple Grove Madrasah
- Maple Grove Masjid already has one campaign, "Ramadan Iftar Fund"
- New campaign typed on camera: Title "Roof Repair Appeal", Sub Title "Help us fix the prayer hall roof before winter", Goal Amount 25000, Hosted Button ID `MGDEMO2026X` (fictional; not the field's own placeholder "e.g. 8JHK2M4QWERTY", so the typing shows), two roof photos (900 × 600) ready to upload, a short story for Content
- Maple Grove Masjid demo website (Website add-on) showing "Roof Repair Appeal" under Masjid Donations for the closing shot

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->


#### [1.1a] When to use one
**Say:** Use a campaign for one cause with a clear goal, such as a repair or a Ramadan appeal. For everyday giving, your donation page is enough; video 08.3 shows it. One campaign per cause keeps each total clear.
**Show:** Card: "Campaign: one cause, a goal, progress" beside "Donation page: everyday giving (08.3)".
### 1. Raise money for a cause
#### [1.1] Opening
**Say:** A new roof, an iftar fund, help for a family in need: a campaign tells your community what you're raising money for, and how close you are. In this video, you create one and publish it.
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
**Show:** Open the "Select an Organisation" list; choose "Maple Grove Masjid-(masjid)". The list shows "Ramadan Iftar Fund".


#### [2.2a] The buttons
**Say:** Above the list are **Add Campaign**, **Edit Campaign**, **Delete Campaign** and **View Transactions**. To edit or see transactions, tick exactly one campaign first. The columns show each campaign's goal and how much it has collected.
**Show:** Spotlight the four buttons; Edit Campaign and View Transactions are greyed. Tick "Ramadan Iftar Fund": they become active. Untick it. Pan across the columns: Campaign Name, Provider, Goal Amount, Collected Amount, Created Date.
#### [2.3]
**Say:** Tap **Add Campaign**. A new campaign starts as a draft, so no one sees it yet.
**Show:** Click "Add Campaign". The Donation page opens with a "Draft" chip next to its title.

### 3. Pictures and details
#### [3.1] Media
**Say:** Start with pictures. Tap **Select Files**, choose an image or a short video, and crop it.
**Show:** In the empty media box ("Upload images / videos here"), click "Select Files"; choose the first roof photo, crop, upload.

#### [3.2]
**Say:** Add more with the plus button. They show as a row of thumbnails, and donors can swipe through them.
**Show:** Click the add button in the thumbnail rail; upload the second photo. Click each thumbnail to switch the big picture.


#### [3.2a] Picture tips
**Say:** Use JPG or PNG pictures, or a short video, 900 by 600 or larger. To remove the picture on show, tap its delete icon. Bright photos of the real project work better than text.
**Show:** Spotlight the hint "JPG, PNG or video. 900 × 600 or larger works best." and the "1 of 2" counter. Spotlight the delete icon on the big picture; don't click it.
#### [3.3] Details
**Say:** Under **Donation Details**, pick your masjid as the **Organisation**. Type a **Title**, and a one-line **Sub Title** saying who it helps.
**Show:** Choose "Maple Grove Masjid-(masjid)" in Organisation. Type the demo Title and Sub Title.


#### [3.3a] Required fields
**Say:** Fields with a star are required: **Organisation**, **Title**, **Goal Amount** and **Hosted Button ID**. If one is empty when you save, a red message says what's missing. You can't change the organisation after you save.
**Show:** Spotlight the stars beside Organisation, Title, Goal Amount and Hosted Button ID. Quick cut from a rehearsal take: Title left empty, the red message "Add a title so donors know what they're giving to."
**Caption:** Required: Organisation, Title, Goal Amount and Hosted Button ID. The organisation can't change after you save.
### 4. Goal and PayPal
#### [4.1] Goal
**Say:** Under **Donation Goal**, enter your **Goal Amount**. Donors see how much has been raised towards it.
**Show:** Type 25000 in Goal Amount.

#### [4.2] Hosted Button ID
**Say:** Under **Payment Methods**, paste your PayPal **Hosted Button ID**. You'll find it in PayPal under **Pay & Get Paid**, then **Donations**.
**Show:** Spotlight the PayPal row and its hint "Find this in PayPal under Pay & Get Paid → Donations." Paste the demo ID.
**Caption:** Paste your PayPal Hosted Button ID. In PayPal: Pay & Get Paid → Donations.

#### [4.3]
**Say:** This links the campaign to your own PayPal button, so gifts go straight to your masjid's PayPal account, not through Ad-Din.
**Show:** On the filled Payment Methods card, spotlight the PayPal row's "Enabled" chip and its line "Card and PayPal balance payments".


#### [4.3a]
**Say:** Copy the ID exactly from PayPal. Gifts go to whichever PayPal button this ID belongs to, so a typing mistake can send donors to the wrong place.
**Show:** Zoom on the pasted demo ID in the Hosted Button ID box.
### 5. Visibility
#### [5.1] Pin card to top
**Say:** Under **Visibility**, turn on **Pin card to top** to keep this campaign first in the donations list.
**Show:** Toggle "Pin card to top" on.

#### [5.2] Hide donation progress
**Say:** If you'd rather not show the total, turn on **Hide donation progress**, and donors won't see the amount raised.
**Show:** Spotlight "Hide donation progress" and its note; leave it off for this campaign.

#### [5.3] Publish
**Say:** **Publish** makes the campaign visible to donors. While it's off, the campaign stays a draft.
**Show:** Toggle "Publish" on; the chip at the top changes from "Draft" to "Published".


#### [5.3a] Tell your community
**Say:** Publishing doesn't send a notification. To tell people about the campaign, send a message to your community, as video 07.2 shows, with a link to it.
**Show:** Card: "Published → no automatic message. Tell people: video 07.2 Send a message to your community".
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


#### [6.3a] Editing later
**Say:** When you edit a campaign, the button says **Save Changes**, and a bar shows how much has been raised towards the goal. With **Hide donation progress** on, the bar is greyed, and donors don't see it.
**Show:** Tick "Ramadan Iftar Fund"; click "Edit Campaign". Spotlight the raised-so-far bar under Goal Amount, and "Save Changes" at the top. Toggle "Hide donation progress" on: the bar fades. Toggle it off again, then leave without saving: Sidebar → Donation.

#### [6.3b] Ending a campaign
**Say:** When a campaign is over, turn **Publish** off. Donors no longer see it, and you keep its gifts. **Delete Campaign** removes it and its history for good, and can't be undone.
**Show:** Back on the Campaign List: tick "Ramadan Iftar Fund", click "Delete Campaign". The "Confirm Delete !" box with "This Action can't be reversed"; spotlight "Delete Campaign", then cancel.
#### [6.4] Live
**Say:** If your masjid has an Ad-Din website, published campaigns appear there, under **Masjid Donations**.
**Show:** Browser on the Maple Grove Masjid demo website: the "Masjid Donations" section with "Roof Repair Appeal" first.

### 7. Next
#### [7.1] Close
**Say:** To change a campaign later, tick it and tap **Edit Campaign**. Next, video 08.5: Track donations and record offline gifts. Or video 15.4: Donate to your masjid.
**Show:** Tick the "Roof Repair Appeal" row; spotlight "Edit Campaign". End card with two tiles: "08.5 Track donations and record offline gifts" and "15.4 Donate to your masjid".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 2:26 → 4:15 narration, 8 scenes added: [1.1a] campaign or donation page, [2.2a] list buttons and columns, [3.2a] picture tips and remove, [3.3a] required fields and fixed organisation, [4.3a] copy the Hosted Button ID exactly, [5.3a] no notification; message with 07.2, [6.3a] Save Changes and the raised bar, [6.3b] unpublish or Delete Campaign
- 2026-11-06 · panel (user, director, writer, PM, PO) · 6 changes: [1.1] says what you'll do (second person), [4.3] money goes to your own PayPal account, not through Ad-Din, and the Show spotlights something new, [5.2] no elliptical question, [7.1] names both end tiles by number; demo Hosted Button ID no longer the field's placeholder; demo names match the Maple Grove demo world
- 2026-11-03 · critic · 2 changes: [2.3] explains the Draft chip on screen (sets up [5.3]); [6.4] no longer implies every masjid has a website (add-on), same wording as 08.3 [4.2]
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes

---
id: "08.3"
title: Set up donations
target: 4:30
prereq:
  - "03.2"
status: scripted
plan: Free
flags:
  - "PayPal payment gateway settings left out: on a masjid, the Integrations tab (PayPal Integration) passes an organisation id the page doesn't have (editMasjid.component.html binds [orgId]=\"madressahId\"), so saved keys don't load and saving fails with \"Wrong organisation id\". It works for a madrasah. Decided 2026-11-03: record without PayPal; the bug stays in docs/APP-ISSUES.md. If it is fixed later ([orgId]=\"masjidId\"), a chapter could go here: tick PayPal, CREDENTIALS and SECRET (the PayPal app's client ID and secret), Save. The keys let Ad-Din bring PayPal gifts into each campaign's transactions once a day."
  - "Removed switch: Donation Page from the front matter: this video is where the switch is turned on, so the opening card shouldn't ask for it."
  - "Set plan: Free: the Donation Page switch sits on the free Services tab and needs no Premium (campaigns in 08.4 do)."
---

# 08.3 Set up donations

## Goal
Turn on your masjid's Donation Page so the Donate button on your website and the Donation tile in the app take people to the right place to give.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->
- Admin access to your masjid
- A published Introduction & Services page that explains how to give, or the web address of your own giving page

## Covers
- Donation Page switch, payment gateway settings (PayPal)
- Why one donation page: the app's Donation tile and the website's Donate button both use it
- What to put on the page; testing a Page URL; the message when nothing is chosen
- Who the app tile sends where: members to your page, admins to their campaigns; a web address opens in the phone's browser
- No page set: the note members see; the madrasah's page is used when the masjid has none
- Changing the page later

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Masjid Admin account, admin of "Maple Grove Masjid" (Premium) and "Maple Grove Madrasah"
- Maple Grove Masjid's Donation Page switched off at the start
- Published service page "Support Maple Grove Masjid" (from Introduction & Services) with a picture and how to give; bank details fictional
- A second demo link `https://give.example.com/maple-grove` for the Page URL option
- Member account with home masjid Maple Grove Masjid on the app (phone frame) for the Donation tile shot, labelled "Signed in as: a member"; Maple Grove Masjid's demo website with the Website add-on for the Donate button shot
- A second member state where neither organisation has a donation page, for the "not set up yet" toast

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Where people give
#### [1.1] Opening
**Say:** When someone wants to support your masjid, they need one clear place to go. In this video, you set up that place: your masjid's donation page.
**Show:** Title card: "Set up donations".

#### [1.1a] Why one page
**Say:** Ad-Din uses this one page in two places: the **Donation** tile in the app, and the **Donate** button on your website. When your bank details or giving page change, you update it once.
**Show:** Card: the app's Donation tile and the website's Donate button, both with arrows to one "Support Maple Grove Masjid" page.

#### [1.2]
**Say:** You'll need a published page that explains how to give. Video 04.9, Introduction & Services pages, shows how to make one. Or use the address of a giving page you already have.
**Show:** Opening card from You'll need. Quick shot of the published "Support Maple Grove Masjid" page.

### 2. Open the Services tab
#### [2.1] Organization Management
**Say:** In the sidebar, open the **Admin Portal** and tap **Organization Management**. On your masjid's card, tap **Manage**.
**Show:** Sidebar → Admin Portal → Organization Management. Click "Manage" on the Maple Grove Masjid card.

#### [2.2]
**Say:** Tap the **Services** tab, and scroll down to **Donation Page**.
**Show:** Click "Services". Scroll to the "Donation Page" box; its switch is off.

### 3. Choose your donation page
#### [3.1] Switch it on
**Say:** Turn the switch on. Two choices appear: **Donation Pages** and **Page URL**.
**Show:** Toggle the Donation Page switch on. Spotlight the two options.

#### [3.2] One of your pages
**Say:** **Donation Pages** uses one of your own published pages. Open **Select Page** and pick the one that explains how to give. Ad-Din only links to it; people give the way that page explains.
**Show:** "Donation Pages" selected. Open "Select Page"; choose "Support Maple Grove Masjid".


#### [3.2a] A good giving page
**Say:** Put every way to give on that page: bank transfer details, cash or cheque at the masjid office, and who to contact. If your page isn't in the list, check it under Introduction & Services first, as video 04.9 shows.
**Show:** Quick cut: the published "Support Maple Grove Masjid" page, scrolled to its "How to give" part (fictional bank details). Back to the Services tab.
#### [3.3] A web address
**Say:** If you already collect gifts on another website, choose **Page URL** and paste its full address instead.
**Show:** Click "Page URL"; type the demo link in the box. Then switch back to "Donation Pages" with "Support Maple Grove Masjid" selected.


#### [3.3a]
**Say:** Type the full address, starting with https. Ad-Din doesn't test the address, so open it once yourself to check that it works.
**Show:** Spotlight the Page URL box's placeholder "https://example.com" while it's empty, then the typed demo link.
#### [3.4] Save
**Say:** Tap **Save** to keep your choice.
**Show:** Click "Save" under the Donation Page box.


#### [3.4a]
**Say:** If you tap **Save** before picking a page or typing an address, Ad-Din asks you to fill in the required fields.
**Show:** From the same take, before choosing a page: click "Save" with "Select Page" still empty; the toast appears and the box is outlined in red. Then choose the page and save.
### 4. Where people see it
#### [4.1] In the app
**Say:** Now, anyone who has your masjid as their home masjid can tap **Donation** in the Ad-Din app, and your page opens.
**Show:** Phone frame: member account on the app home. Tap the Donation tile; "Support Maple Grove Masjid" opens.


#### [4.1a] Who goes where
**Say:** Members, parents and followers go straight to your page. A web address opens in the phone's browser. If you're an admin, **Donation** opens your campaigns instead, as video 08.4 shows.
**Show:** Phone frame: the page opening inside the app. Then a card: "Admins → Campaign List".

#### [4.1b] No page yet
**Say:** If neither your masjid nor your madrasah has a page, members see a note that your organisation hasn't set up a donation page yet. If only your madrasah has one, the app opens the madrasah's page.
**Show:** Phone frame, the second member state: tap Donation; the toast "Your organisation has not set up a donation page yet. Please contact the administrator for more information."
#### [4.2] On your website
**Say:** If your masjid has an Ad-Din website, a **Donate** button appears at the top of every page and opens the same page.
**Show:** Browser on the Maple Grove Masjid demo website. Spotlight the "Donate" button in the header; click it; the page opens.

#### [4.3] Turning it off
**Say:** To remove it, turn the switch off. It saves straight away, and the Donate button disappears.
**Show:** Back on the Services tab. Spotlight the switch; don't toggle it.


#### [4.3a] Change it later
**Say:** To use a different page, choose it in **Select Page**, or change the address, and tap **Save** again. The app and the website use the new page straight away.
**Show:** Spotlight "Select Page" and the Save button under the Donation Page box. Don't change them.
### 5. Next
#### [5.1] Close
**Say:** Your donation page is ready. Next, video 08.4: Run a fundraising campaign. Or video 15.4: Donate to your masjid, to see what members see.
**Show:** End card with two tiles: "08.4 Run a fundraising campaign" and "15.4 Donate to your masjid".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 1:38 → 3:06 narration, 7 scenes added: [1.1a] one page for the app tile and the website button, [3.2a] what to put on the page, [3.3a] full https address and test it, [3.4a] Save with nothing chosen, [4.1a] members to the page, web address in the browser, admins to campaigns, [4.1b] no page yet and the madrasah fallback, [4.3a] change it later
- 2026-11-06 · panel (user, director, writer, PM, PO) · 4 changes: [1.2] names 04.9 by title, [3.2] says Ad-Din only links to the page and takes no money (code: Donation Page is a page or URL link), [3.3] no elliptical question, [5.1] names both end tiles by number; demo names match the Maple Grove demo world
- 2026-11-03 · manager · decisions via chat · 'Masjid PayPal keys' decided: record without PayPal; PayPal step stays left out, flag reworded, bug stays in docs/APP-ISSUES.md
- 2026-11-03 · critic · 4 changes: [1.1] split phrasal verb removed; [1.2] points to 04.9 for the page it needs; [3.4] two-word scene given a reason; [4.1] "members" -> home masjid, as 15.4 says
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes

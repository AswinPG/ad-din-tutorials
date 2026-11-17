---
id: "15.4"
title: Donate to your masjid
target: 4:00
prereq:
  - "00.4"
status: scripted
flags:
  - "Campaigns in the app: members don't see donation campaigns in the app. The Donation tile opens the organisation's donation page (a service page or an outside link set by the admin); the campaign list is admin-only. Scripted what members get; campaigns are shown on the website only."
  - "The in-app donation page reuses the admin service-page view: its header reads Manage Service, with a Published badge and a Read only tag. Keep the header out of shot or fix it for members."
  - Website campaigns need the masjid to have the Website add-on, and the Donate button hands over to PayPal; stop before PayPal on camera. Website labels (Masjid Donations, View All, Donation Progress, More Masjid Donations, the "It looks empty here" message) come from AdDin.PublicWebpages, which npm run labels does not scan.
---

# 15.4 Donate to your masjid

## Goal
Find your masjid's donation page in the Ad-Din app, and give to a donation campaign on your masjid's Ad-Din website.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->
- The Ad-Din app, signed in, with a home masjid
- For campaigns: your masjid's Ad-Din website address (ask your masjid if you don't know it)

## Covers
- The donation page in the app, and campaigns on the website (members see campaigns on the website only)
- Why use it (everyday giving or one cause with a goal); the home madrasah's page when the masjid has none
- Giving from the campaign list; the empty message; photos and More Masjid Donations
- What happens after you give (recorded on the campaign, in the masjid's donation list, total goes up); sharing the website; cash gifts recorded by the office

## Demo data
- A community member account with no admin role, home masjid "Maple Grove Masjid". Not the admin demo account Yusuf Rahman: for an admin the Donation tile opens the campaign list instead (quick-grid.component.ts openDonation)
- A second member account whose home masjid has no donation page, for the toast in [2.4]
- Maple Grove Masjid's donation page set to a published service page "Support Maple Grove Masjid" with a picture and text on how to give (bank details blurred or fictional)
- Maple Grove Masjid has the Website add-on; its demo website at `maplegrove` shows two active campaigns, "Roof Repair Appeal" (with goal and amount raised) and "Ramadan Iftar Fund", each with photos and a PayPal Donate button in sandbox
- Phone browser for the website shots; nothing past the PayPal hand-off is shown
- "Roof Repair Appeal" has two or more photos, so the larger view has arrows
- A second demo website with no active campaigns, for the empty message in [3.2b]
- Phone frame for every shot

## Script

### 1. Giving to your masjid
#### [1.1] Opening
**Say:** Your masjid depends on the generosity of its community. In this video, you'll find where to give, in the Ad-Din app and on your masjid's website.
**Show:** Title card: "Donate to your masjid". Phone frame on the app home. Side panel label: "Signed in as: a community member".

#### [1.1a] Why use it
**Say:** There are two ways to give. The donation page in the app is for everyday giving. A campaign on the website collects for one cause, with a goal, so everyone can see how close it is.
**Show:** Split card: the app's Donation tile on one side, the "Roof Repair Appeal" campaign on the website on the other.

#### [1.2]
**Say:** The app takes you to your home masjid's donation page. Your home masjid is already set; if not, choose it first.
**Show:** Home screen with "Maple Grove Masjid" in the top bar.

### 2. Donate in the app
#### [2.1] Donation tile
**Say:** On the home screen, tap **Donation**.
**Show:** Spotlight the "Donation" tile and tap it.

#### [2.2]
**Say:** Your masjid's donation page opens. Read how the masjid would like you to give, and follow its steps.
**Show:** The "Support Maple Grove Masjid" page opens. Frame the picture, title and Page Content; keep the "Manage Service" header out of shot. Scroll slowly through the text.

#### [2.3]
**Say:** Some masjids use their own giving website instead. Then the tile opens that site in your browser.
**Show:** Card with a phone icon and an arrow to a browser window labelled "Your masjid's giving page". No real site.

#### [2.4]
**Say:** If you see a message that the donation page isn't set up yet, your masjid hasn't added one. Ask the masjid office.
**Show:** Side panel label: "Signed in as: another community member". Toast on the second member account: "Your organisation has not set up a donation page yet. Please contact the administrator for more information."

#### [2.4a] Your madrasah's page
**Say:** The tile opens your home masjid's donation page first. If your masjid has none, but your home madrasah has one, it opens the madrasah's page instead.
**Show:** Card: "Home masjid's donation page → Home madrasah's donation page", with an arrow between them.

### 3. Campaigns on the website
#### [3.1] Masjid Donations
**Say:** Many masjids collect for a special cause, such as a roof repair or an iftar fund. You'll find these campaigns on your masjid's Ad-Din website, under **Masjid Donations**. If you don't know the website address, ask your masjid.
**Show:** Phone browser on the Maple Grove Masjid demo website home page. Address bar shows the `maplegrove` website. Scroll to the "Masjid Donations" section; keep its "Donation Progress" counter out of close-up (it miscounts, docs/APP-ISSUES.md).

#### [3.2] View All
**Say:** Tap **View All** to see every campaign. Each shows how much has been raised towards its goal.
**Show:** Tap "View All". The Masjid Donations page lists "Roof Repair Appeal" and "Ramadan Iftar Fund"; spotlight the progress bar and amounts.

#### [3.2a] Give from the list
**Say:** Each campaign in the list shows its photos, the amount raised and the goal, and its own Donate button, so you can also give straight from the list.
**Show:** Spotlight "Ramadan Iftar Fund": its photo, the amounts and its Donate button.

#### [3.2b] No campaigns
**Say:** If your masjid has no campaign running, the page says **It looks empty here, please feel free to contact the admin of your organisation.**
**Show:** Cutaway on a demo website with no active campaigns: the empty message on the Masjid Donations page.

#### [3.3] One campaign
**Say:** Tap a campaign to read about it. The **Donation Progress** bar shows how close it is.
**Show:** Tap "Roof Repair Appeal". Show the photos, title, "Donation Progress" bar and the description.

#### [3.3a] Photos and more campaigns
**Say:** Tap a photo to see it larger, and use the arrows to move through them. Under the description, **More Masjid Donations** lists the masjid's other campaigns.
**Show:** Tap the first photo: the larger view opens; tap the next arrow, then close it. Scroll to "More Masjid Donations": "Ramadan Iftar Fund" shows.

#### [3.4] Donate
**Say:** To give, tap the Donate button. PayPal opens, where you choose the amount and pay securely. Your gift goes to the masjid's own PayPal account.
**Show:** Spotlight the Donate button, tap it; cut as the PayPal window begins to open. Never show the payment screen.

#### [3.4a] After you give
**Say:** When PayPal finishes, Ad-Din records your gift on the campaign. The masjid sees it in its donation list, with your name, the amount and the date, and the total raised goes up.
**Show:** Cutaway card: "PayPal → Roof Repair Appeal" with the Donation Progress bar moving up. No real names or amounts.

#### [3.4b] Tips
**Say:** Share the website address with family and friends. They don't need an Ad-Din account to give. If you give cash at the masjid instead, ask the office to record it, so the campaign total stays right.
**Show:** The campaign page on the phone browser, with the address bar showing the `maplegrove` website.

### 4. Next
#### [4.1] Close
**Say:** May Allah accept your giving. Next, video 15.3: Events: going, interested and sharing. Or video 15.6: Tasbeeh, live streams, gallery and forms.
**Show:** End card with two tiles: "15.3 Events: going, interested and sharing" and "15.6 Tasbeeh, live streams, gallery and forms".

## Review log
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 1:35 → 3:02 narration, 7 scenes added: [1.1a] why use it (everyday giving or one cause with a goal), [2.4a] the home madrasah's page when the masjid has none, [3.2a] giving from the campaign list, [3.2b] the empty message, [3.3a] photos and More Masjid Donations, [3.4a] what happens after you give, [3.4b] sharing the website and cash gifts. Checked against origin/master d0604ce7f (donation-page.service resolveTarget; AdDin.PublicWebpages Donations, MasjidDonations and PageHelper GetHostedButtonId; website labels checked by hand)
- 2026-11-06 · panel (user, director, writer, PM, PO) · 8 changes: Covers says campaigns are on the website only, as the flag and [3.1] say; You'll need and [3.1] say to ask the masjid for the website address; [3.1] keeps the home page's miscounting "Donation Progress" counter out of close-up (Home.cshtml 386), as 09.6; [3.4] says the gift goes to the masjid's own PayPal account (as 08.4); [1.1] comma and "Signed in as" labels in [1.1] and [2.4]; [4.1] names both end tiles by number and title; demo data: Maple Grove names, `maplegrove` website, a member account (an admin's Donation tile opens the campaign list)
- 2026-11-03 · manager · decisions via chat · 15.3 renamed 'Events: going, interested and sharing': end-card tile updated
- 2026-11-03 · critic · 2 changes: [1.1] "runs on" metaphor replaced and standard "In this video" opening, [3.1] "appeals" explained as campaigns (one word for the thing, as in Covers)
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes (website labels Masjid Donations, View All, Donation Progress confirmed in AdDin.PublicWebpages on master)

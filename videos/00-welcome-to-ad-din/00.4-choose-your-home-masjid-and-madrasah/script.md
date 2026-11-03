---
id: "00.4"
title: Choose your home masjid and madrasah
target: 4:00
prereq:
  - "00.2"
status: scripted
flags:
  - "Bug: choosing a masjid and then tapping Skip for now on the madrasah step leaves without saving the masjid (Save & Continue stays disabled with no madrasah). The script avoids that path; fix before publishing or re-script"
  - The All set page heading shows a doubled exclamation mark ("You are all set ! !"); keep it out of zooms
---

# 00.4 Choose your home masjid and madrasah

## Goal
Choose your home masjid and madrasah by name, map or Organization ID, follow other organisations, and change them later.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Finder: search by name or Organization ID, map pins, “Continue to Madrasah”, “Skip for now”, following, the Parent / Guardian question

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- A fresh demo account with no home organisations (just signed up)
- Browser location allowed, centred on the demo city, so the lists show distances
- The demo masjid (for example "Masjid Al-Noor", ID shown) and demo madrasah (for example "Al-Noor Madrasah") approved and on the map, plus three or four other nearby demo masjids and madrasahs for the lists and pins
- The demo IDs to type on the Organization ID tab, and one ID that finds nothing
- Two more demo organisations to follow (for example "Masjid Ar-Rahman" and "Iqra Weekend School")
- The profile reached from the top bar, with the Home & Followed Orgs tab

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Your home organisations
#### [1.1] Opening
**Say:** Your home masjid and home madrasah decide what Ad-Din shows you: prayer times, events, news and classes. Let's choose yours.
**Show:** Title card: "Choose your home masjid and madrasah".

#### [1.2]
**Say:** This page opens right after you create your account. You can change your choice any time later from your profile.
**Show:** The finder page, empty, just after sign-up.

### 2. Share your location
#### [2.1] Location
**Say:** First, Ad-Din asks for your location, so it can list the masjids and madrasahs near you. Allow it when your browser or phone asks.
**Show:** The "Ad-Din needs your location to continue." pop-up; click Allow on the browser prompt.

#### [2.2]
**Say:** If you'd rather not share it, that's fine. You can still find your masjid by searching.
**Show:** Hold on the page as the nearby lists and map pins load.

### 3. Choose your masjid
#### [3.1] Nearby masjids
**Say:** On the **Name / Address** tab, under **Select your Masjid**, you'll see masjids near you. Each one shows its address, its ID and how far away it is.
**Show:** Spotlight the list header "Select your Masjid", then one card: address, "ID:", distance in km. Pan the map to show the pins.

#### [3.2] Search
**Say:** Don't see yours? Type your city, area or the masjid's name in the search box, and pick a suggestion.
**Show:** Type the demo city in "Search your city, area or organization name…", pick the suggestion; the list refreshes.

#### [3.3] Select it
**Say:** Tap your masjid in the list, or tap its pin on the map. A tick shows it's selected. Tap it again to unselect.
**Show:** Click the "Masjid Al-Noor" card: tick appears. Then click its pin on the map to show the same selection.

#### [3.4]
**Say:** Tap **Continue to Madrasah**. No masjid for you? Tap **Skip for now** instead.
**Show:** Spotlight "Skip for now", then click "Continue to Madrasah".

### 4. Choose your madrasah
#### [4.1]
**Say:** Now, under **Select your Madrasah / School**, choose the madrasah or school your family uses, the same way.
**Show:** The header changes to "Select your Madrasah / School". Click the "Al-Noor Madrasah" card: tick appears.

#### [4.2]
**Say:** Tap **Save & Continue**. Ad-Din links both to your account.
**Show:** Click "Save & Continue": loading spinner. Cut before the next page (it's shown in chapter 6).

### 5. Or use the Organization ID
#### [5.1] Know the ID?
**Say:** Another way: if your masjid or madrasah gave you its ID, open the **Organization ID** tab. You'll often find the ID on its website or notice board.
**Show:** Separate take on a fresh account: click the "Organization ID" tab. Spotlight the Masjid ID and Madrasah ID boxes.

#### [5.2]
**Say:** Type the **Masjid ID** and the **Madrasah ID**. Ad-Din shows the name it found, so you can check it's the right one. One ID on its own is fine too.
**Show:** Type the demo masjid ID: "Found:" with the name and address. Type the demo madrasah ID: "Found:". Briefly show a wrong ID giving "No madrasah found", then fix it.

#### [5.3]
**Say:** Check the names under **Confirm Your Organizations**, then tap **Save & Continue**.
**Show:** Spotlight the "Confirm Your Organizations" list with both cards. Click "Save & Continue".

### 6. You're all set
#### [6.1] Parent question
**Say:** Ad-Din now asks one question: **I am signing up as a Parent / Guardian**. Choose **Yes** or **No**.
**Show:** The All set page. Spotlight the question and the Yes / No buttons. Keep the heading out of zooms.

#### [6.2]
**Say:** Parents can pick **Program Enrollment** to start enrolling a child right away. Otherwise choose **Go to Dashboard**, then tap **Proceed**.
**Show:** With Yes selected, spotlight the "Program Enrollment" card. Click No: only "Go to Dashboard" remains. Click "Proceed"; the dashboard opens.
**Caption:** Parents can pick Program Enrollment to enrol a child now. Otherwise choose Go to Dashboard, then Proceed.

### 7. Follow more organisations
#### [7.1] Following
**Say:** You have one home masjid and one home madrasah, but you can follow as many others as you like to see their news and events.
**Show:** Top bar → Profile → User Profile. Click the "Home & Followed Orgs" tab.

#### [7.2]
**Say:** Under **Followed organizations**, tap **Edit**. Search, and tap each one you want to follow under **Select Organisations to Follow**.
**Show:** Click "Edit". The finder opens in follow mode. Click "Masjid Ar-Rahman" and "Iqra Weekend School"; they appear as chips at the top.

#### [7.3]
**Say:** Tap **Save**. They're now listed on your profile. To unfollow one, tap its bin icon.
**Show:** Click "Save": back on the profile with both chips listed. Hover the bin icon on one chip without clicking.

#### [7.4] Change your home
**Say:** To change your home masjid or madrasah later, tap **Change** next to it on this same tab.
**Show:** Spotlight "Change" next to Home Masjid and Home Madrasah.

### 8. Next
#### [8.1] Close
**Say:** Your home masjid and madrasah are set. Next, take a quick tour of Ad-Din, or see what else is on your profile.
**Show:** End card with two tiles: "00.6 Finding your way around" and "00.5 Your profile, notifications and GUID".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes

---
id: "01.1"
title: Register a masjid, madrasah, or both
target: 4:30
prereq:
  - "00.2"
status: scripted
flags:
  - The "Terms of Service" link on the Register your organization page opens the Privacy Policy page; don't click or zoom on it
---

# 01.1 Register a masjid, madrasah, or both

## Goal
Register a new masjid, madrasah, or both on Ad-Din and become its first administrator.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->
- Your Ad-Din account
- The organisation's address, phone number and email

## Covers
- “Authorized Representatives Only”, choose the type, Terms, the Add form (name, address, location picker, contact), extra fields for both, Confirm, Thank You

## Demo data
- A signed-in demo account with no home organisation yet (for example `yusuf_rahman`), starting on the finder
- Browser location allowed and mocked near the demo city
- A Google Places suggestion "Masjid Al-Huda" with a full demo address (street, city, postal code, state, country); type the address by hand if Places is unavailable
- New organisation: Masjid "Masjid Al-Huda" and Madrasah "Al-Huda Madrasah", 120 students, demo phone and `info@alhuda.example`
- The add calls mocked to succeed; after Finish the dashboard shows the sidebar "Pending Approval" note (covered in 01.2)

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Before you start
#### [1.1] Opening
**Say:** Run a masjid or a madrasah? Register it on Ad-Din and you become its first administrator. This video shows how to add a masjid, a madrasah, or both.
**Show:** Title card: "Register a masjid, madrasah, or both".

#### [1.2]
**Say:** You'll need your Ad-Din account and the organisation's address, phone number and email. Only people allowed to act for the organisation should register it.
**Show:** Opening card from You'll need.

### 2. Start from the finder
#### [2.1] Add new organization
**Say:** Open the finder, the page where you choose your home masjid and madrasah. You land here right after signing up. Tap **Don't see your organization?**, then **Add new organization**.
**Show:** Finder page on the "Search by Name / Address" tab. Click "Don't see your organization?"; the section opens. Click "Add new organization".
**Caption:** Open the finder (you land there after signing up). Tap Don't see your organization?, then Add new organization.

#### [2.2] Authorized Representatives Only
**Say:** Ad-Din checks first: **Authorized Representatives Only**. That means board members, trustees, executives or designated administrators. If that's you, tap **Yes! Continue**.
**Show:** The warning card. Spotlight the description, then click "Yes! Continue →". Don't click "No, Go back".

### 3. Choose the type and agree
#### [3.1] What are you adding?
**Say:** Choose what you're adding: a **Masjid**, a **Madrasah**, or **Masjid & Madrasah**, for a masjid with its own madrasah or school. We'll add both.
**Show:** "Register your organization" page. Hover each option, then click "Masjid & Madrasah".

#### [3.2] Terms and Conditions
**Say:** Read the **Terms and Conditions**. You become the first administrator, Ad-Din may contact you before approving, and others see your organisation on the map only after approval.
**Show:** Scroll the six terms slowly. Spotlight terms 1 and 2.
**Caption:** Read the Terms and Conditions: you become the first administrator, Ad-Din may contact you, and you appear on the map after approval.

#### [3.3]
**Say:** Tick the box to agree to the **Terms of Service**, then tap **Continue**.
**Show:** Tick the checkbox and click "Continue". Keep the shot wide; don't click or zoom on the "Terms of Service" link.

### 4. Name and address
#### [4.1] Your location
**Say:** The **Add new Masjid & Madrasah** form opens. Ad-Din asks for your location first, to help place the masjid on the map. Allow it if your browser asks.
**Show:** Overlay "Ad-Din needs your location to continue." with "Please wait while we fetch your location."; it closes and the form shows.

#### [4.2] Masjid Name
**Say:** Start typing the **Masjid Name**. If Google suggests your masjid, pick it, and Ad-Din fills in the address for you. If nothing matches, just type the name.
**Show:** Type "Masjid Al-Huda" in Masjid Name; the suggestion list drops down; click the demo suggestion. The address fields fill in.

#### [4.3] Masjid Address
**Say:** Check the **Masjid Address**. **Street Name**, **City**, **Postal Code**, **State** and **Country** are all needed.
**Show:** Spotlight the filled address fields one by one.

#### [4.4] Madrasah details
**Say:** When you add both, the madrasah uses the masjid's details unless you say otherwise. Tick **Madrasah's legal name is different** to give it its own **Madrasah Name**, then enter the **No of students**.
**Show:** Tick "Madrasah's legal name is different"; Madrasah Name appears. Type "Al-Huda Madrasah", then "120" in No of students. Spotlight "Madrasah's legal address is different" without ticking it.
**Caption:** When you add both, the madrasah copies the masjid's details. Tick Madrasah's legal name is different to name it, then enter the number of students.

#### [4.5] A little about you
**Say:** Under **We need some more information**, tick the lines that are true for you: whether you live nearby, sit on the board, or are the Imam or Principal.
**Show:** Tick "I am one of trustee or board member of this Masjid." and "I am one of trustee or board member of this Madrasah."

### 5. Set the location
#### [5.1] Masjid Location
**Say:** Next, **Masjid Location**. Because you picked a suggestion, Ad-Din uses that place. Tap **More Options** to use your current location instead, or to pick the spot on a map.
**Show:** Spotlight "Use automatically determined location for Masjid" (ticked). Click "More Options"; "Use my current location for Masjid." and "Pick a location for Masjid." appear.

#### [5.2] Pick it on the map
**Say:** With **Pick a location for Masjid**, move the map until the pin sits on the building, then tap the tick.
**Show:** Click "Pick a location for Masjid."; the map opens with "Search your city". Drag the map so the pin sits on the demo building; click the tick button.

#### [5.3]
**Say:** Take care here: after you register, only Ad-Din can change the location. If the madrasah is somewhere else, tick **Madrasah's location is different**.
**Show:** Hover the info icon next to Masjid Location to show its tip. Spotlight "Madrasah's location is different." and leave it unticked.

### 6. Contact details
#### [6.1] Masjid Contact
**Say:** Under **Masjid Contact**, enter a **Primary Phone** and an **Email**. **Secondary Phone** and **Mobile** are optional.
**Show:** Type the demo phone in Primary Phone and the demo email in Email.

#### [6.2]
**Say:** People will see these details exactly as you enter them. If the madrasah has its own, tick **Madrasah's contact details are different**.
**Show:** Spotlight "Madrasah's contact details are different." and leave it unticked.

### 7. Confirm
#### [7.1] Confirm
**Say:** Tap **Confirm**. If something's missing, the field turns red so you can fix it.
**Show:** Click "Confirm". The "Confirmation !" dialog opens.

#### [7.2]
**Say:** Ad-Din asks you to check your details once more. If you're sure, tap **Proceed**.
**Show:** Spotlight the dialog text, then click "Proceed". Loading spinner.

#### [7.3] Thank You
**Say:** **Thank You**! Your masjid and madrasah are added and now under review. Ad-Din also emails you instructions for setting up.
**Show:** The "Thank You !" popup with the Arabic line and both names. Zoom on "Your submission is under review."

#### [7.4] Finish
**Say:** Leave **Make this my Home Masjid** and **Make this my Home Madrasah** ticked, then tap **Finish**.
**Show:** Spotlight both ticked boxes, then click "Finish". The dashboard opens.

### 8. Next
#### [8.1] Close
**Say:** You're now the administrator of your new masjid and madrasah. Next, see what happens while Ad-Din reviews it, and how Ad-Din plans work.
**Show:** End card with two tiles: "01.2 After you register: approval" and "02.1 How Ad-Din plans work".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->

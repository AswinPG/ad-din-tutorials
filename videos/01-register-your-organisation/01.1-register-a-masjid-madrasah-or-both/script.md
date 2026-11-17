---
id: "01.1"
title: Register a masjid, madrasah, or both
target: 7:30
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
- Why register; what each type is for; every field and tick box on the form (Street No, legal name, legal address, location and contact differences, the six "more information" lines)
- What goes wrong: refused location, the terms reminder, missing fields or location
- What happens next: the review, the email, the year of prayer times Ad-Din fills in, the home masjid and madrasah boxes

## Demo data
- A signed-in demo account with no home organisation yet (for example `yusuf_rahman`), starting on the finder
- Browser location allowed and mocked near the demo city; for [4.1a], one take with location refused so the "We were unable to fetch your location" message shows
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
**Say:** This video is for people who run a masjid or madrasah. You'll register it on Ad-Din, as a masjid, a madrasah, or both, and become its first admin.
**Show:** Title card: "Register a masjid, madrasah, or both".

#### [1.1a] Why register
**Say:** Registering puts your organisation on the Ad-Din map, so people can find it, follow it and see its prayer times. A madrasah can then run its classes, attendance, reports and parents in one place.
**Show:** Masjid Finder map with demo pins; then the madrasah dashboard tiles, as a quick cut.

#### [1.2]
**Say:** You'll need your Ad-Din account and the organisation's address, phone number and email. Only people allowed to act for the organisation should register it.
**Show:** Opening card from You'll need.

### 2. Add a new organisation
#### [2.1] Add new organization
**Say:** Open the page where you choose your home masjid and madrasah. You land there right after signing up. Later, open it from your profile: **Home & Followed Orgs**, then **Change**. Tap **Don't see your organization?**, then **Add new organization**.
**Show:** Finder page on the "Search by Name / Address" tab. Click "Don't see your organization?"; the section opens. Click "Add new organization".
**Caption:** Open the page where you choose your home masjid and madrasah (after signing up, or Home & Followed Orgs › Change). Tap Don't see your organization?, then Add new organization.

#### [2.1a] Already listed
**Say:** If your masjid is already listed but someone else runs it, don't register it again. Video 01.3 shows how to ask Ad-Din to make you its admin.
**Show:** Before opening "Don't see your organization?", spotlight one listed masjid card in the list.

#### [2.2] Authorized Representatives Only
**Say:** First, Ad-Din shows a warning: **Authorized Representatives Only**. Only board or committee members, trustees, or people the committee has chosen should register. If that's you, tap **Yes! Continue**.
**Show:** The warning card. Spotlight the description, then click "Yes! Continue →". Don't click "No, Go back".

#### [2.2a]
**Say:** If you aren't sure you may register it, tap **No, Go back** and ask your committee first. Ad-Din may ask for proof later.
**Show:** Spotlight "No, Go back" and the line "Verification may be requested." Don't click.

### 3. Choose the type and agree
#### [3.1] What are you adding?
**Say:** Choose what you're adding: a **Masjid**, a **Madrasah**, or **Masjid & Madrasah**, for a masjid with its own madrasah or school. We'll add both.
**Show:** "Register your organization" page. Hover each option, then click "Masjid & Madrasah".

#### [3.1a] What each type is for
**Say:** Each choice says what it's for. A **Masjid** has prayer times, events, donations and announcements. A **Madrasah** has classes, attendance, reports and parents. **Masjid** is chosen at first, so check your choice before you go on.
**Show:** Zoom on the small line under each option in turn; end on "Masjid & Madrasah" selected.

#### [3.2] Terms of Service
**Say:** Read the **Terms of Service**. You become the first admin, Ad-Din may contact you before approving, and others see your organisation on the map only after approval. You agree to keep prayer times accurate, and an unmanaged organisation can be suspended.
**Show:** Scroll the six terms slowly. Spotlight terms 1, 2 and 4.
**Caption:** Read the Terms of Service: you become the first admin, Ad-Din may contact you, and others see your organisation on the map only after approval. Keep prayer times accurate; an unmanaged organisation can be suspended.

#### [3.3]
**Say:** Tick the box to agree to the **Terms of Service**, then tap **Continue**.
**Show:** Tick the checkbox and click "Continue". Keep the shot wide; don't click or zoom on the "Terms of Service" link.

#### [3.3a]
**Say:** If you tap **Continue** without ticking the box, Ad-Din reminds you: **Please agree to the terms.**
**Show:** Untick the box, click "Continue": the red reminder shows. Tick it again and click "Continue".

### 4. Name and address
#### [4.1] Your location
**Say:** The **Add new Masjid & Madrasah** form opens. Ad-Din asks for your location first, to help place the masjid on the map. Allow it if your browser asks.
**Show:** Overlay "Ad-Din needs your location to continue." with "Please wait while we fetch your location."; it closes and the form shows.

#### [4.1a] If location doesn't work
**Say:** If you don't allow location, or it takes too long, a message tells you, and the form opens anyway. You can set the masjid's location yourself further down the form.
**Show:** Second take with location refused: the message "We were unable to fetch your location…" shows briefly, then the form. Cut back to the main take.

#### [4.2] Masjid Name
**Say:** Start typing the **Masjid Name**. A list of places from Google Maps drops down. If your masjid is there, pick it, and Ad-Din fills in the address for you. If nothing matches, just type the name.
**Show:** Type "Masjid Al-Huda" in Masjid Name; the suggestion list drops down; click the demo suggestion. The address fields fill in.

#### [4.2a] Typing the address
**Say:** If you type the name yourself, fill in the address fields by hand. **Street No** is the only one you can leave empty.
**Show:** Spotlight the empty "Street No" field next to "Street Name".

#### [4.3] Masjid Address
**Say:** Check the **Masjid Address**. **Street Name**, **City**, **Postal Code**, **State** and **Country** are all needed.
**Show:** Spotlight the filled address fields one by one.

#### [4.4] Madrasah details
**Say:** When you add both, the madrasah uses the masjid's details. If the madrasah has a different name, tick **Madrasah's legal name is different** and type it in **Madrasah Name**. Then enter the number of students in **No of students**.
**Show:** Tick "Madrasah's legal name is different"; Madrasah Name appears. Type "Al-Huda Madrasah", then "120" in No of students. Spotlight "Madrasah's legal address is different" without ticking it.
**Caption:** When you add both, the madrasah uses the masjid's details. If its name is different, tick Madrasah's legal name is different and type it. Then enter the number of students.

#### [4.4a] A different address
**Say:** If the madrasah is in another building, tick **Madrasah's legal address is different**. A **Madrasah Address** section opens with the same fields. Our madrasah shares the masjid's building, so we leave it unticked.
**Show:** Tick "Madrasah's legal address is different"; the "Madrasah Address" section appears. Untick it; the section closes.

#### [4.5] A little about you
**Say:** Under **We need some more information**, tick the lines that are true for you. For each organisation, you can say you live nearby, that you're a trustee or board member, and that you're the Imam of the masjid or the Principal of the madrasah.
**Show:** Spotlight the six lines in turn. Tick "I am one of trustee or board member of this Masjid." and "I am one of trustee or board member of this Madrasah."

#### [4.5a]
**Say:** Tick only what is true. These lines tell Ad-Din who is registering, and Ad-Din may contact you to check them.
**Show:** Hold on the ticked lines.

### 5. Set the location
#### [5.1] Masjid Location
**Say:** Next, **Masjid Location**. Because you picked a suggestion, Ad-Din uses that place. Tap **More Options** to use your current location instead, or to pick the spot on a map.
**Show:** Spotlight "Use automatically determined location for Masjid" (ticked). Click "More Options"; "Use my current location for Masjid." and "Pick a location for Masjid." appear.

#### [5.1a] Your current location
**Say:** **Use my current location for Masjid** uses where you are right now. Choose it only when you're standing at the masjid.
**Show:** Spotlight "Use my current location for Masjid." without clicking it.

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

#### [6.2a] A tip
**Say:** Use the organisation's own office phone and email, not your personal ones, so people contact the masjid and not you at home.
**Show:** Zoom on the filled Primary Phone and Email fields with the demo office details.

### 7. Confirm
#### [7.1] Confirm
**Say:** Tap **Confirm**. If something's missing, the field turns red so you can fix it.
**Show:** Click "Confirm". The "Confirmation !" dialog opens.

#### [7.1a]
**Say:** If the location is missing, a message asks you to try again. Choose one of the location options, then tap **Confirm** again.
**Show:** Card with the message text "We were unable to fetch your location, please try again." over the Masjid Location section.

#### [7.2]
**Say:** Ad-Din asks you to check your details once more. To change something, close the box and edit the form. If you're sure, tap **Proceed**.
**Show:** Spotlight the dialog text and its close icon, then click "Proceed". Loading spinner.

#### [7.3] Thank You
**Say:** **Thank You**! Ad-Din has added your masjid and madrasah and is now reviewing them. Ad-Din also emails you instructions for setting up.
**Show:** The "Thank You !" popup with the Arabic line and both names. Zoom on "Your submission is under review."

#### [7.3a] Prayer times to check
**Say:** For a new masjid, Ad-Din also fills in a year of prayer times for your location, with a standard way of calculating them. Check them, and set your Iqamah times, as shown in videos 04.1 and 04.2.
**Show:** Over the Thank You popup, a card: "A year of prayer times filled in · check them: 04.1 and 04.2". (The sidebar stays locked until approval, so no page cut.)

#### [7.4] Finish
**Say:** Leave **Make this my Home Masjid** and **Make this my Home Madrasah** ticked, then tap **Finish**.
**Show:** Spotlight both ticked boxes, then click "Finish". The dashboard opens.

#### [7.4a]
**Say:** If you untick a box, your current home masjid or madrasah stays as it is. You can change it later from your profile, as video 00.4 shows.
**Show:** Over the same popup, spotlight the two tick boxes; card "Change later: Profile → Home & Followed Orgs".

### 8. Next
#### [8.1] Close
**Say:** You're now the first admin of your new masjid and madrasah, and you can start setting them up once Ad-Din approves them. Registering, and running your masjid's page, is free. Running a madrasah needs Ad-Din Premium.
**Show:** The new organisation's Pending Approval note; then a card: "Registering: free · Masjid page: free · Madrasah: Ad-Din Premium".

#### [8.2] Next
**Say:** Next, video 01.2 shows what happens while Ad-Din reviews them, and video 02.1 explains how Ad-Din plans work.
**Show:** End card with two tiles: "01.2 After you register: approval" and "02.1 How Ad-Din plans work".

## Review log
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 4:10 → 6:44 narration, 13 scenes added: [1.1a] why register, [2.2a] No, Go back, [3.1a] what each type is for, [3.3a] terms reminder, [4.1a] refused location, [4.2a] typing the address (Street No optional), [4.4a] different madrasah address, [4.5a] tick only what's true, [5.1a] current location, [6.2a] office contact tip, [7.1a] missing location, [7.3a] a year of prayer times to check, [7.4a] unticking the home boxes; [4.5] lists all six lines, [7.2] close to edit
- 2026-11-06 · panel (user, director, writer, PM, PO) · 10 changes: [1.1] no nested opening, "admin" (one word across the series), [2.1] no "finder" (clashes with Masjid Finder) and the route back from the profile (Change opens the same page with Don't see your organization?), new [2.1a] points to 01.3 so a listed masjid isn't registered twice, [2.2] plain English, [3.2] adds the prayer-times and suspension terms (term_2, term_4), Caption matches, [4.2] says the list comes from Google Maps, [4.4] no idiom, Caption says "uses" like the Say, [4.5] no idiom, [7.3] no passive, [8.1] admin menus wait for approval
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-06 · manager · panel decisions approved ("approved": recommended options) · [8.1] registering and a masjid page are free, a madrasah needs Premium; Next moved to new [8.2] (decision 4)
- 2026-11-03 · manager · decisions via chat · 'Sign-up and register page links' decided (wide shots, bug stays logged): checked, [3.3] keeps the shot wide and no scene zooms or clicks the Terms of Service link ([3.2] spotlights the terms text only); no change
- 2026-11-03 · critic · 2 changes: [1.1] second-person opening, [8.1] end tiles by number
- 2026-11-03 · validator · checked against master d36d69ed8 · 1 fix: [3.2] the six terms sit under the heading **Terms of Service** (onboarding.terms), not "Terms and Conditions"

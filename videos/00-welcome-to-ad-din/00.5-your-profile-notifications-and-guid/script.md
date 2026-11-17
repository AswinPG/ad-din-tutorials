---
id: "00.5"
title: Your profile, notifications and GUID
target: 7:30
prereq:
  - "00.2"
status: scripted
flags:
  - "Decision 'People are added by GUID' (decided 2026-11-03: as scripted): scripted as the code works today (admins fetch a person by GUID; no email invites)"
  - "Bug: Delete Account fails for App Store and Google Play subscribers (CancelSubscription throws NotImplementedException; the user sees Unknown error). Decided 2026-11-06: fix the API before publishing; [7.1] tells store subscribers to cancel in the store first"
  - "The GUID has no copy button; viewers must select the text after tapping the eye icon"
  - "The admin Add New User screens tell people to look under 'Settings > My Account > GUID', which no longer exists; the GUID is on Profile > Account information"
---

# 00.5 Your profile, notifications and GUID

## Goal
Update your profile, choose your notifications, change your email or password, find and share your GUID, and know where Delete Account is.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Personal info, Home & Followed Orgs, notification settings, change password or email, Delete Account, where your GUID is and why admins ask for it
- The page layout: Account information card (pens open Preferences), the five tabs, Subscription and Volunteer Skills pointers
- Required fields and the one Update button; Save & Upload for the photo; the Sign here pad (Clear, Save, Cancel), removing a signature
- What the notification switches do and don't stop (inbox, account emails); Activity turn in notification for teachers
- Update sends the verification email, Verify sends another, Not Verified; the password result
- What Delete Account keeps for student, teacher and admin records, and that you're logged out

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo account "Yusuf Rahman" (`yusuf_rahman`) with a demo email (Verified), demo mobile and address, a profile picture, home masjid and madrasah set, and one followed organisation; the account has a Teacher or Madrasah Admin role, because the Signature section in [2.3] only shows for teachers and admins
- A demo GUID for the account (never a real one)
- Notification preferences: E-mail on, Push on
- Demo passwords typed masked; the Change password submit can be skipped or mocked
- The app (phone frame) for the gear icon and the This device section
- Delete Account is shown only up to the confirm dialog, then Keep Account
- For [2.2a]: the Last name box cleared once, so "Please fill the required fields" shows, then refilled
- For [2.3a]: a demo photo file (an illustration, not a real person) for the upload and crop; the upload is mocked
- For [2.3b]: the Sign here pad drawn with a demo squiggle; Save is spotlighted, then Cancel
- For [5.2]: a second take where the email shows "Not Verified" after Update

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Your profile
#### [1.1] Opening
**Say:** In this video you'll update your profile, choose your notifications, change your password, and find your GUID: the code admins use to add you.
**Show:** Title card: "Your profile, notifications and GUID".

#### [1.2] Open it
**Say:** On the web, tap **Profile** at the top right, then **User Profile**. In the app, tap the gear icon on the home screen.
**Show:** Web top bar: click "Profile", then "User Profile". Phone frame: tap the gear icon on the app home screen. Both open the Profile page.


#### [1.2a] The page at a glance
**Say:** On the left are your photo and the **Account information** card. On the right are five tabs: **Personal info**, **Preferences**, **Home & Followed Orgs**, **Subscription** and **Volunteer Skills**.
**Show:** The Profile page. Spotlight the photo card and the Account information card, then each tab name in turn.

#### [1.2b]
**Say:** Open **Account information** to see your user name, your mobile, your email and your home masjid and madrasah. The pens next to **E-mail** and **Password** take you to **Preferences**, where you change them.
**Show:** Click "Account information": it opens. Spotlight User name, Mobile, E-mail, Home Masjid and Home Madrasah. Spotlight the pen beside E-mail and the pen beside Password.
### 2. Personal info
#### [2.1] Your details
**Say:** The **Personal info** tab starts with **Personal details**: your salutation, first, middle and last name, and a short biography. This is how your name appears across Ad-Din.
**Show:** Personal info tab. Spotlight Salutation, First name, Middle name, Last name, Biography.


#### [2.1a]
**Say:** Pick your salutation from the list. Your first name, last name and salutation are required; the middle name is optional. Your biography is a few words about yourself for your community.
**Show:** Open the Salutation list and pick one. Spotlight the Middle name placeholder "Optional", then the Biography box.
#### [2.2]
**Say:** Below it, **Address & contact** holds your address, mobile number and email; your madrasah uses these for reports and letters. Make your changes and tap **Update**. It saves both sections at once.
**Show:** Open "Address & contact". Edit the demo city; click "Update".


#### [2.2a]
**Say:** Every box in **Address & contact** is required. If one is empty, Ad-Din says **Please fill the required fields** and marks it, so fill it in and tap **Update** again.
**Show:** Clear Last name, click "Update": the message appears and the box is marked. Retype "Rahman" and click "Update" again.
#### [2.3]
**Say:** To change your photo, tap the pen on your picture. Teachers and admins can also add a **Signature** here. Report cards show this signature.
**Show:** Spotlight the pen icon on the profile card. Then spotlight the Signature section; don't open the pad.


#### [2.3a] Your photo
**Say:** For a photo, drag a picture into the window or choose a file. Move the crop area and zoom until it looks right, then tap **Save & Upload**. A square picture works best.
**Show:** Click the pen on the profile card: the upload window opens with "Recommended Size: 500x500". Choose the demo photo, zoom in once, click "Save & Upload". The new picture shows.

#### [2.3b] Your signature
**Say:** For your signature, open **Signature** and tap the pen. Sign on **Sign here** with your finger or mouse, then tap **Save**. **Clear** starts again. To remove a signature, tap its cross, then **Update**.
**Show:** Open the Signature section; click its pen: the "Sign here" pad opens. Draw the demo squiggle, spotlight "Clear" and "Save", then click "Cancel". Spotlight the cross on the saved signature and the "Update" button.
### 3. Home and followed organisations
#### [3.1]
**Say:** The **Home & Followed Orgs** tab shows your home masjid and madrasah, with **Change** buttons, and the organisations you follow, with **Edit**.
**Show:** Click "Home & Followed Orgs". Spotlight both Change buttons, then Edit and the followed chip.


#### [3.1a]
**Say:** Video 00.4 shows how to change these. The **Subscription** tab shows your Ad-Din Premium, as video 02.2 explains. **Volunteer Skills** lets you offer to help your masjid, as video 15.7 shows.
**Show:** Spotlight the Subscription tab, then click "Volunteer Skills": the "Become a volunteer" switch shows. Don't turn it on.
### 4. Notifications
#### [4.1] Email and push
**Say:** Open **Preferences**. Under **Notification preferences**, turn **E-mail notification** and **Push notification** on or off. Each switch saves at once.
**Show:** Click the Preferences tab. Toggle "E-mail notification" off and back on.


#### [4.1a] What the switches do
**Say:** These switches decide how news reaches you, not whether it arrives. With both off, messages from your masjid and madrasah still land in your **Message** inbox. Emails about your account, such as a password reset link, always arrive.
**Show:** Spotlight both switches. Quick cut to the Message inbox with the two demo messages, then back to Preferences.

#### [4.1b] For teachers
**Say:** Teachers also see a link to view advanced settings. There, **Activity turn in notification** decides whether you're told when a student turns in an activity.
**Show:** Click "View advanced": the "Activity turn in notification" switch appears. Spotlight it; don't toggle it. Click "Hide advanced".
#### [4.2] On your phone
**Say:** In the app, **Preferences** also has a **This device** section for this phone's permissions. Video 00.7 explains it.
**Show:** Phone frame: Preferences tab, spotlight the "This device" section and its two rows.

### 5. Email and password
#### [5.1] Email
**Say:** **Preferences** is also where you change your email. Type the new one under **Update e-mail** and tap **Update**. Ad-Din sends a verification link to the new address. If it doesn't arrive, tap **Verify** to send another.
**Show:** Still on the Preferences tab, scroll to "Update e-mail". Type the demo address yusuf.new@example.com, then spotlight Update and Verify. Don't submit a real address.

#### [5.2]
**Say:** On the left, the **Account information** card shows whether your email is **Verified**. After a change it says **Not Verified** until you open the link, which works for three days.
**Show:** Open the Account information card on the left; zoom on the email row and its "Verified" badge. Quick cut to the second take: the same row with "Not Verified".

#### [5.3] Password
**Say:** To change your password, fill in **Old password**, **New password** and **Confirm password**, then tap **Change**. The password rules are under the **Change password** heading.
**Show:** Type masked demo passwords in the three boxes. Zoom on the rule text under "Change password". Hover "Change".
**Caption:** Fill in Old password, New password and Confirm password, then tap Change.


#### [5.3a]
**Say:** The new password must be 10 to 128 characters, with no spaces, and both new boxes must match. If the old password is wrong, Ad-Din tells you and nothing changes. The eye icons show what you typed.
**Show:** Zoom on the hint "10 to 128 characters with an uppercase letter, a lowercase letter, a number and a special character. No spaces." Click one eye icon: the text shows; click it again.
### 6. Your GUID
#### [6.1] What it is
**Say:** Your **GUID** is a long code that belongs only to your account. When a masjid or madrasah adds you as a teacher, parent, student, staff member or admin, the admin asks you for it.
**Show:** Card: "GUID = your account's unique code". Then the Account information card.

#### [6.2] Where to find it
**Say:** In the same **Account information** card on the left, next to **GUID**, tap the eye icon to show the code.
**Show:** Spotlight the GUID row: dots, then click the eye icon; the demo GUID appears. Zoom.

#### [6.3] Share it
**Say:** Select the whole code, from the first character to the last, and copy it. Check you have all of it, then send it to your organisation's admin.
**Show:** Select the GUID text and copy it. Show it pasted into a demo message to the admin.

#### [6.4]
**Say:** If you already have an account, this is how your admin finds you and adds you. So only share your GUID with the people who run your masjid or madrasah. Tap the eye icon again to hide it.
**Show:** Click the eye icon: the code hides.

### 7. Delete your account
#### [7.1]
**Say:** At the bottom of **Preferences** is **Delete Account**. The next page explains what happens: you lose access, and Ad-Din cancels Premium you bought on the web. If you bought it in the App Store or Google Play, cancel it in the store first.
**Show:** Scroll to the "Delete account" box; click "Delete Account". The "Delete My Account" page opens; spotlight the three points.


#### [7.1a]
**Say:** The page also explains that if you were a student, teacher or admin, some records may be kept, as education rules and the law require.
**Show:** Spotlight the third point on the Delete My Account page.
#### [7.2]
**Say:** Tap **Proceed**, then confirm with **Delete**. You can't undo this, and Ad-Din logs you out. If you don't want to delete it, tap **Keep Account**.
**Show:** Click "Proceed": the confirm dialog opens. Spotlight "Delete", then click "Keep Account".

### 8. Next
#### [8.1] Close
**Say:** Your profile is up to date and you know where your GUID is. Next, find your way around Ad-Din in video 00.6, or get Ad-Din Premium for yourself in video 02.2.
**Show:** End card with two tiles: "00.6 Finding your way around" and "02.2 Get Ad-Din Premium for yourself".

## Review log
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 3:08 → 5:51 narration, 11 scenes added: [1.2a] the page at a glance (five tabs), [1.2b] Account information and its pens, [2.1a] salutation list and required names, [2.2a] Please fill the required fields, [2.3a] photo upload and Save & Upload, [2.3b] Sign here pad, Clear, removing a signature, [3.1a] Subscription (02.2) and Volunteer Skills (15.7), [4.1a] switches don't stop the inbox or account emails, [4.1b] Activity turn in notification for teachers, [5.3a] password rules and wrong old password, [7.1a] what may be kept; [2.2] one Update saves both sections, [5.1] Update itself sends the verification link (Verify sends another), [5.2] Not Verified and the three-day link, [7.2] you're logged out
- 2026-11-06 · panel (user, director, writer, PM, PO) · 10 changes: [2.1] "salutation" as on screen, [2.3] no passive fragment, [4.1] "at once", [4.2] points to 00.7 instead of half-teaching This device, [5.1] says it's on Preferences and the order Update then Verify (Show types a demo address), [5.3] says which heading, [6.1] clear subject, [6.2] same card (no second "open"), [6.3]/[6.4] select-all tip, no "no email invitations" claim (Add New does email new accounts), why to share only with admins, [7.2] no passive or idiom
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-06 · manager · panel decisions approved ("approved": recommended options) · [7.1] store subscribers cancel in the store first (decision 2); GUID said as letters (decision 3)
- 2026-11-03 · manager · decisions via chat · 'How people are added' decided (as scripted): flag wording updated; script unchanged
- 2026-11-03 · critic · 3 changes: [1.1] second-person opening without phrasal verb, [5.2] says where the card is, [8.1] no idiom, end tiles by number
- 2026-11-03 · validator · checked against master d36d69ed8 · 1 fix: demo account needs a Teacher or Admin role so the Signature section shows

---
id: "15.7"
title: Become a volunteer
target: 3:30
prereq:
  - "00.5"
status: scripted
---

# 15.7 Become a volunteer

## Goal
Sign up as a volunteer at your home masjid in the Ad-Din app and tick the skills you can offer.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->
- The Ad-Din app, signed in, with a home masjid
- Your personal info filled in on your profile (salutation, name, mobile and email)

## Covers
- Become a volunteer, add skills
- Why sign up (admins see volunteers, message them and invite them to events); the confirmation email
- Paging the skills table, No skills found; after you stop (Successfully removed as volunteer, no volunteer-only messages)

## Demo data
- A community member account with no admin role (not the admin demo account Yusuf Rahman), home masjid "Maple Grove Masjid", personal info complete (salutation, first and last name, mobile, email), not yet a volunteer
- Maple Grove Masjid has volunteer skills set up by its admin: "Event setup", "Cleaning", "Teaching", "First aid", "Driving"
- Phone frame for every shot

## Script

### 1. Serve your community
#### [1.1] Opening
**Say:** Masjids rely on volunteers, for events, cleaning, teaching and more. In this video, you'll sign up as a volunteer at your masjid and choose the skills you can offer.
**Show:** Title card: "Become a volunteer". Phone frame on the app home. Side panel label: "Signed in as: a community member".

#### [1.2]
**Say:** You'll volunteer at your home masjid. Make sure your salutation, name, mobile and email are filled in on your profile first.
**Show:** Opening card from You'll need.

#### [1.2a] Why sign up
**Say:** When you sign up, your masjid's admins can see who is ready to help and what each person can do. They can send messages just to volunteers, and invite them to events.
**Show:** Card: "You → Volunteers list at Maple Grove Masjid → messages and event invitations for volunteers".

### 2. Open Volunteering
#### [2.1]
**Say:** Tap the menu button at the top left. Open **Masjid**, then tap **Volunteering**.
**Show:** Tap the ☰ menu: the side menu opens. Tap "Masjid" to expand it, then "Volunteering".

#### [2.2]
**Say:** Your profile opens on **Volunteer Skills**.
**Show:** The profile page with the "Volunteer Skills" tab selected. Spotlight "Become a volunteer" and its switch.

### 3. Become a volunteer
#### [3.1] Turn it on
**Say:** Turn on the **Become a volunteer** switch.
**Show:** Tap the switch. The confirmation box opens: "Become a volunteer", naming Maple Grove Masjid.

#### [3.2] Confirm
**Say:** Ad-Din asks you to confirm. Tap **Yes, Bismillah!**
**Show:** Zoom on the message, then tap "Yes, Bismillah!". Toast "Successfully registered as volunteer". The heading changes to "Your volunteer status".

#### [3.2a] A confirmation email
**Say:** Ad-Din also sends you an email to say you've been added as a volunteer at Maple Grove Masjid.
**Show:** Card: an envelope icon with "Volunteer at Maple Grove Masjid". No real inbox.

#### [3.3]
**Say:** If your profile is missing something, Ad-Din takes you to your personal info to finish it. Then come back and turn the switch on again.
**Show:** Card: "Please complete your personal profile section" with an arrow to the "Personal info" tab. No live demo.
**Caption:** If your profile is incomplete, finish your personal info, then turn the switch on again.

### 4. Add your skills
#### [4.1]
**Say:** Now the list of skills your masjid needs appears. Tick the **Status** box beside each skill you can offer.
**Show:** The skills table appears with Skill Name and Status. Tick "Event setup" and "First aid". Toast "Successfully updated skill" after each.

#### [4.2]
**Say:** Each tick is saved straight away. Untick a skill when you can no longer help with it.
**Show:** Untick "First aid": toast "Successfully updated skill". Tick it again.

#### [4.2a] A long list
**Say:** The table shows five skills at a time. Use the page buttons at the bottom to see the rest, or show ten at a time. If your masjid hasn't added any skills yet, Ad-Din says **No skills found**. Ask the masjid office which help it needs.
**Show:** Spotlight the paging controls and the page-size list under the table, without changing them.

### 5. Taking a break
#### [5.1]
**Say:** To stop volunteering for a while, turn the switch off and tap **Yes, remove me**. Your skills stay saved, so you can turn it on again later.
**Show:** Tap the switch: "Stop volunteering?" box. Spotlight "Yes, remove me", then tap "Cancel" so the demo stays a volunteer.

#### [5.1a] After you stop
**Say:** When you tap **Yes, remove me**, Ad-Din shows **Successfully removed as volunteer**, and you no longer get messages sent only to volunteers.
**Show:** Card: "Yes, remove me → Successfully removed as volunteer → skills kept". The demo stays a volunteer.

### 6. Next
#### [6.1] Close
**Say:** Jazakallahu khairan for offering your time. Your masjid's admins can now see you as a volunteer, with your skills. Next, video 15.3: Events: going, interested and sharing. Or video 00.5: Your profile, notifications and GUID.
**Show:** End card with two tiles: "15.3 Events: going, interested and sharing" and "00.5 Your profile, notifications and GUID".

## Review log
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 1:26 → 2:15 narration, 4 scenes added: [1.2a] why sign up (admins see volunteers, message them, invite them to events), [3.2a] the confirmation email, [4.2a] paging the skills table and No skills found, [5.1a] after you stop (Successfully removed as volunteer). [3.3] Caption no longer an elliptical question. Checked against origin/master d0604ce7f (manage-skills; MasjidController UpdateMyVolunteerStatus and SendExistingVolunteerAddedNotification, email only; MessageUserTypes and InvitedUserTypes Volunteers)
- 2026-11-06 · panel (user, director, writer, PM, PO) · 4 changes: You'll need and [1.2] add the salutation, which the volunteer check also needs (manage-skills.component.ts 143-148); [1.1] comma and a "Signed in as: a community member" label; [6.1] names both end tiles by number and title; demo names match the Maple Grove demo world, on a member account
- 2026-11-03 · manager · decisions via chat · 15.3 renamed 'Events: going, interested and sharing': end-card tile updated
- 2026-11-03 · critic · 2 changes: [5.1] "step back" idiom replaced with a plain sentence, [4.2] simpler wording
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes

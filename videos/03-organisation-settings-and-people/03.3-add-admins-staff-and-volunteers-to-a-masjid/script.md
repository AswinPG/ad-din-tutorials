---
id: "03.3"
title: Add admins, staff and volunteers to a masjid
target: 6:00
prereq:
  - "00.5"
  - "02.3"
status: scripted
audience:
  - Masjid Admin
flags:
  - Added by GUID, no email invite
  - "Decision 'People are added by GUID' (decided 2026-11-03: as scripted): an existing account can only be added by its GUID, but Add New creates a new account and emails the person their username and a password (MasjidController AddAdmin → template 785010-MasjidNewAdminAdded). The decision text 'There are no email invites' should say this."
  - "The hint on Add New User says the GUID is under 'Settings > My Account > GUID'; no such menu exists (the GUID is on the profile page). Don't zoom on that hint."
  - "The skills list on Manage Volunteer ([6.1]) is loaded from the signed-in admin's home masjid, not the masjid being managed (masjidNewVolunteer.ts loadSkills uses user.homeMasjidID). An admin of several masjids sees the wrong skills, or 'No home masjid found'. The demo admin's home masjid must be the demo masjid."
---

# 03.3 Add admins, staff and volunteers to a masjid

## Goal
Add other admins, staff and volunteers to your masjid, using their GUID if they already have an Ad-Din account, or by creating a new account for them.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->
- The GUID of each person who already has an Ad-Din account (from their profile page)

## Covers
- User Management → Manage Administrators / Staff / Volunteer
- fetch by GUID or Add New
- Manage Skills: the masjid’s volunteer skills list (pointer to 15.7)
- why each role matters (messages to staff or volunteers, pointer to 07.2)
- list tools: search, Last Seen in red, No Subscription, refresh
- the other cards on a person's page (contact, address, emergency, other details, picture)
- what the person receives: the "added" email; for a new account, sign-in details and an email check
- Other Records files and the User Subscription card (pointer to 02.4)
- renaming a skill; members who sign up as volunteers in the app

## Demo data
- Demo masjid admin account with Premium, admin of the demo masjid, with the demo masjid as its home masjid (the volunteer skills list loads from it)
- Demo masjid with one admin (the demo admin), one staff member and one volunteer already listed
- Demo world (engine/demo-world.md): Maple Grove Masjid. An existing demo account not yet linked to the masjid (for example "Harun Qureshi") whose GUID is copied to the clipboard; its email and username show locked on the form
- A new person to add as a volunteer (for example "Mr. Sulaiman Khan", username `sulaiman_khan`, a demo email address); the welcome email is not sent in the demo world
- One staff member whose Last Seen is more than 30 days ago (shown in red), and one with "No Subscription"
- One volunteer skill already on the masjid (for example "Event setup"); "Parking" is added on camera in Manage Skills ([6.1]), and "Skill added successfully!" shows in the demo world
- No real names, emails or phone numbers on screen

## Script

### 1. The people who run your masjid
#### [1.1] Opening
**Say:** A masjid depends on its people. In this video for masjid admins, you’ll add other admins, your staff and your volunteers, so each of them gets the right access and your messages.
**Show:** Title card: "Add admins, staff and volunteers to a masjid".

#### [1.2]
**Say:** If someone already has an Ad-Din account, ask them for their GUID. That’s the unique code on their profile page; video 00.5 shows where to find it. If they don’t have an account, you can create one for them.
**Show:** Opening card from You'll need. Cut-in: a profile page with the GUID row spotlighted.
**Caption:** If they have an account, ask for their GUID, the code on their profile page. If not, create one for them.

#### [1.2a] Why add them
**Say:** Each role does a different job. Admins run the masjid in Ad-Din with you. Staff and volunteers get their own group when you send a message, so you can reach just them, as video 07.2 shows.
**Show:** Cut-in: the Send to choices on a new masjid message, with Staff and Volunteers spotlighted. Back to the opening card.

### 2. Open your masjid’s users
#### [2.1] User Management
**Say:** In the sidebar, open **Admin Portal**, then **User Management**. Tap **Open users** on your masjid.
**Show:** Sidebar → Admin Portal → User Management. Click "Open users" on the demo masjid.

#### [2.2]
**Say:** People are grouped in three tabs: **Admin**, **Staff** and **Volunteer**. The table shows when each person was last seen, their GUID and their subscription.
**Show:** Click through the Admin, Staff and Volunteer tabs. Spotlight the Last Seen, Guid and Subscription Plan columns.

#### [2.2a] Find people fast
**Say:** Use the search box, or the filter under each column heading. **Last Seen** turns red when someone hasn’t signed in for over 30 days, and **No Subscription** shows in red too. The round arrow loads the list again and clears your filters.
**Show:** Type "Har" in the search box, then clear it. Spotlight a red Last Seen value and a red "No Subscription". Click the round-arrow button at the top right of the table.
**Caption:** Last Seen turns red after 30 days without signing in. No Subscription shows in red too.

### 3. Add someone who has an account
#### [3.1] Fetch by GUID
**Say:** Tap **Add**. Ad-Din asks what type of account you want to add. Open **Staff**, paste their GUID into the **GUID** box, and tap **Fetch**.
**Show:** Click "Add". The "Add New User" page opens. Expand "Staff", paste Harun’s GUID, click "Fetch". Keep the hint text out of close-up.

#### [3.2]
**Say:** If no account matches, a message tells you. Otherwise **Manage Staff** opens with their details already filled in.
**Show:** The "Manage Staff" page with Harun’s Contact Details filled in; Personal Email and Username are locked.

#### [3.2a] The other cards
**Say:** The page also has **Contact Informations**, **Address Details**, **Emergency Contact Details**, **Important Other Details**, such as allergies and the date they joined, and a **Profile Picture**. These are optional, so fill in only what your masjid needs.
**Show:** Slow scroll across the three columns, spotlighting each card heading in turn.
**Caption:** The other cards are optional: contact, address, emergency contact, other details and a picture.

#### [3.3] Save
**Say:** Fill anything marked with a star, tick **I Agree to Ad-Din Term & Conditions outlined here.**, and tap **Save**.
**Show:** Spotlight a starred field. Tick the agreement box, click "Save". Confirmation; the Staff tab shows Harun.
**Caption:** Fill the starred fields, tick the agreement, and tap Save.

#### [3.3a] What happens next
**Say:** Ad-Din emails them to say they’ve been added to your masjid. Next time you open their page, **Other Records** lets you keep files on their account, and **User Subscription** gives them one of your organisation’s Premium seats. Video 02.4 covers seats.
**Show:** Select Harun on the Staff tab, click "Edit". Scroll to Other Records (Upload button) and User Subscription (Monthly, Yearly, Allocate Subscription). Click "Cancel".

### 4. Add another admin
#### [4.1]
**Say:** Adding an admin works the same way. Tap **Add**, open **Admin**, paste their GUID and tap **Fetch**.
**Show:** Admin tab → "Add". Expand "Admin"; show the GUID box and "Fetch".

#### [4.2]
**Say:** On **Manage Administrators**, make sure **Admin** is ticked under **Access Rights**. Admins can manage everything in your masjid, so choose them carefully.
**Show:** The "Manage Administrators" page. Zoom on the Access Rights table; tick Admin.

### 5. Create a new account
#### [5.1] Add New
**Say:** For someone without an account, tap **Add**, open **Volunteer**, and tap **Add New** instead of entering a GUID.
**Show:** Volunteer tab → "Add" → expand "Volunteer" → click "Add New". The "Manage Volunteer" page opens empty.

#### [5.2]
**Say:** Under **Contact Details**, choose a salutation, then enter their first and last name, mobile number, personal email and a username with no spaces.
**Show:** Fill Contact Details for Mr. Sulaiman Khan: Salutation, First Name, Last Name, Mobile, Personal Email, Username `sulaiman_khan`.

#### [5.2a] Check before you save
**Say:** Use an email address they read, because that’s where their sign-in details go. If the username is already taken, Ad-Din tells you when you save, so choose another, for example with a number at the end.
**Show:** Zoom on Personal Email and Username.

#### [5.3]
**Say:** Tick the agreement box and tap **Save**. Ad-Din creates the account and emails them their username and a password.
**Show:** Tick the agreement, click "Save". Confirmation; the Volunteer tab lists Sulaiman.

#### [5.3a]
**Say:** A second email asks them to confirm their email address. Let them know it’s coming, so they look for it and sign in to the Ad-Din app.
**Show:** Cut-in: a plain demo inbox with two unread emails for Sulaiman, subjects blurred.

### 6. Volunteer skills
#### [6.1] Manage Skills
**Say:** Volunteers can offer skills. Start with the list of skills your masjid needs. On the **Volunteer** tab, tap **Manage Skills**. Type a skill, such as Parking, and tap **Add Skill**.
**Show:** Volunteer tab → click "Manage Skills"; the skills window opens with the demo masjid selected at the top and "Event setup" in the list. Type "Parking" in "Enter skill name", click "Add Skill"; toast "Skill added successfully!" and Parking joins the list.

#### [6.1a]
**Say:** Untick **Status** to hide a skill you no longer need. Volunteers choose from this list when they sign up in the Ad-Din app, as video 15.7 shows.
**Show:** Spotlight the Status column (Skill Name, Status). Don’t untick anything. Close the window.
**Caption:** Untick Status to hide a skill. Volunteers choose from this list in the app (video 15.7).

#### [6.1b] Rename a skill
**Say:** To fix a skill’s name, double-tap it, type the new name and press Enter. Ad-Din saves the change at once. When members sign up as volunteers in the app, they join your **Volunteer** tab by themselves.
**Show:** Reopen Manage Skills. Double-click "Parking", type "Parking team", press Enter; a confirmation message shows. Close the window; spotlight the Volunteer tab.

#### [6.2] A volunteer’s skills
**Say:** You can also tick skills for a volunteer. Select them and tap **Edit**. Turn on **Volunteer Status**, then tick the skills they offer in the list. Each tick saves at once; tap **Save** to keep the switch.
**Show:** Select Sulaiman, click "Edit". Turn on the Volunteer Status switch; tick "Event setup" in the Status column. Tick the agreement box, click "Save".

### 7. Next
#### [7.1] Done
**Say:** Your admins, staff and volunteers are in place. To change someone later, select them and tap **Edit**, which works on one person at a time. To give one of your organisation’s Premium seats to one or more people, select them and use **Manage Subscription**.
**Show:** Staff tab with the new staff member. Spotlight "Edit" and "Manage Subscription".

#### [7.2]
**Say:** Next, video 07.2: Send a message to your community, or video 02.4: Give seats to parents, teachers and staff.
**Show:** End card with two tiles: "07.2 Send a message to your community" and "02.4 Give seats to parents, teachers and staff".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 2:52 → 4:44 narration, 7 scenes added: why each role (07.2), list search, Last Seen and No Subscription in red, the optional cards, the "added" email with Other Records and User Subscription (02.4), email and username checks, the email-check message, renaming a skill and self sign-up; [7.1] Edit is one person, Manage Subscription several
- 2026-11-06 · panel (user, director, writer, PM, PO) · 6 changes: [1.1] says who it's for, [3.1] "their GUID" instead of "their code", [6.1] no misleading "First", [6.2] says skill ticks save at once and Save keeps Volunteer Status (code: masjidNewVolunteer onCellValueChanged, isVolunteer form control), [7.2] names both end tiles by number and title, demo names that don't clash with the Maple Grove demo world
- 2026-11-03 · manager · decisions via chat · 'How people are added' decided (as scripted): flag wording updated; script unchanged
- 2026-11-03 · critic · 4 changes + fold: [1.1] 'runs on' idiom; chapter 6 reordered so the skills list comes before ticking a volunteer's skills; [7.1] 'seat' explained as an organisation Premium seat; demo data; fold: Manage Skills ([6.1] Add Skill, [6.1a] Status hides a skill, pointer to 15.7)
- 2026-11-03 · validator · checked against master d36d69ed8 · 1 fix: demo data, the admin’s home masjid must be the demo masjid (the volunteer skills list loads from it); flag added

---
id: "03.3"
title: Add admins, staff and volunteers to a masjid
target: 4:00
prereq:
  - "00.5"
  - "02.3"
status: scripted
audience:
  - Masjid Admin
flags:
  - Added by GUID, no email invite
  - "Open decision 'People are added by GUID': an existing account can only be added by its GUID, but Add New creates a new account and emails the person their username and a password (MasjidController AddAdmin → template 785010-MasjidNewAdminAdded). The decision text 'There are no email invites' should say this."
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

## Demo data
- Demo masjid admin account with Premium, admin of the demo masjid, with the demo masjid as its home masjid (the volunteer skills list loads from it)
- Demo masjid with one admin (the demo admin), one staff member and one volunteer already listed
- An existing demo account not yet linked to the masjid (for example "Bilal Ahmed") whose GUID is copied to the clipboard; its email and username show locked on the form
- A new person to add as a volunteer (for example "Mr. Ibrahim Khan", username `ibrahim_khan`, a demo email address); the welcome email is not sent in the demo world
- One volunteer skill already on the masjid (for example "Event setup"); "Parking" is added on camera in Manage Skills ([6.1]), and "Skill added successfully!" shows in the demo world
- No real names, emails or phone numbers on screen

## Script

### 1. The people who run your masjid
#### [1.1] Opening
**Say:** A masjid depends on its people. In this video you’ll add other admins, your staff and your volunteers, so each of them gets the right access and your messages.
**Show:** Title card: "Add admins, staff and volunteers to a masjid".

#### [1.2]
**Say:** If someone already has an Ad-Din account, ask them for their GUID. That’s the unique code on their profile page; video 00.5 shows where to find it. If they don’t have an account, you can create one for them.
**Show:** Opening card from You'll need. Cut-in: a profile page with the GUID row spotlighted.
**Caption:** If they have an account, ask for their GUID, the code on their profile page. If not, create one for them.

### 2. Open your masjid’s users
#### [2.1] User Management
**Say:** In the sidebar, open **Admin Portal**, then **User Management**. Tap **Open users** on your masjid.
**Show:** Sidebar → Admin Portal → User Management. Click "Open users" on the demo masjid.

#### [2.2]
**Say:** People are grouped in three tabs: **Admin**, **Staff** and **Volunteer**. The table shows when each person was last seen, their GUID and their subscription.
**Show:** Click through the Admin, Staff and Volunteer tabs. Spotlight the Last Seen, Guid and Subscription Plan columns.

### 3. Add someone who has an account
#### [3.1] Fetch by GUID
**Say:** Tap **Add**. Ad-Din asks what type of account you want to add. Open **Staff**, paste their code into **GUID**, and tap **Fetch**.
**Show:** Click "Add". The "Add New User" page opens. Expand "Staff", paste Bilal’s GUID, click "Fetch". Keep the hint text out of close-up.

#### [3.2]
**Say:** If no account matches, a message tells you. Otherwise **Manage Staff** opens with their details already filled in.
**Show:** The "Manage Staff" page with Bilal’s Contact Details filled in; Personal Email and Username are locked.

#### [3.3] Save
**Say:** Fill anything marked with a star, tick **I Agree to Ad-Din Term & Conditions outlined here.**, and tap **Save**.
**Show:** Spotlight a starred field. Tick the agreement box, click "Save". Confirmation; the Staff tab shows Bilal.
**Caption:** Fill the starred fields, tick the agreement, and tap Save.

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
**Show:** Fill Contact Details for Mr. Ibrahim Khan: Salutation, First Name, Last Name, Mobile, Personal Email, Username `ibrahim_khan`.

#### [5.3]
**Say:** Tick the agreement box and tap **Save**. Ad-Din creates the account and emails them their username and a password.
**Show:** Tick the agreement, click "Save". Confirmation; the Volunteer tab lists Ibrahim.

### 6. Volunteer skills
#### [6.1] Manage Skills
**Say:** First, list the skills your masjid needs. On the **Volunteer** tab, tap **Manage Skills**. Type a skill, such as Parking, and tap **Add Skill**.
**Show:** Volunteer tab → click "Manage Skills"; the skills window opens with the demo masjid selected at the top and "Event setup" in the list. Type "Parking" in "Enter skill name", click "Add Skill"; toast "Skill added successfully!" and Parking joins the list.

#### [6.1a]
**Say:** Untick **Status** to hide a skill you no longer need. Volunteers choose from this list when they sign up in the Ad-Din app, as video 15.7 shows.
**Show:** Spotlight the Status column (Skill Name, Status). Don’t untick anything. Close the window.
**Caption:** Untick Status to hide a skill. Volunteers choose from this list in the app (video 15.7).

#### [6.2] A volunteer’s skills
**Say:** You can also tick skills for a volunteer. Select them and tap **Edit**. Turn on **Volunteer Status**, then tick the skills they offer in the list.
**Show:** Select Ibrahim, click "Edit". Turn on the Volunteer Status switch; tick "Event setup" in the Status column.

### 7. Next
#### [7.1] Done
**Say:** Your admins, staff and volunteers are in place. To change someone later, select them and tap **Edit**. To give them one of your organisation’s Premium seats, use **Manage Subscription**.
**Show:** Staff tab with the new staff member. Spotlight "Edit" and "Manage Subscription".

#### [7.2]
**Say:** Next, send your first message to your staff, volunteers or the whole community.
**Show:** End card with two tiles: "07.2 Send a message to your community" and "02.4 Give seats to parents, teachers and staff".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · critic · 4 changes + fold: [1.1] 'runs on' idiom; chapter 6 reordered so the skills list comes before ticking a volunteer's skills; [7.1] 'seat' explained as an organisation Premium seat; demo data; fold: Manage Skills ([6.1] Add Skill, [6.1a] Status hides a skill, pointer to 15.7)
- 2026-11-03 · validator · checked against master d36d69ed8 · 1 fix: demo data, the admin’s home masjid must be the demo masjid (the volunteer skills list loads from it); flag added

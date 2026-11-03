---
id: "03.4"
title: Add admins and teachers to a madrasah
target: 4:00
prereq:
  - "00.5"
  - "02.3"
status: scripted
audience:
  - Madrasah Admin
flags:
  - "Decision 'People are added by GUID' (decided 2026-11-03: as scripted): an existing account can only be added by its GUID, but Add New creates a new account and the save ends with 'Sending welcome email' (sign-in details). The decision text 'There are no email invites' should say this."
  - "The hint on Add New User says the GUID is under 'Settings > My Account > GUID'; no such menu exists (the GUID is on the profile page). Don't zoom on that hint."
---

# 03.4 Add admins and teachers to a madrasah

## Goal
Add admins and teachers to your madrasah by GUID or as new accounts, check their profiles and access rights, and deactivate or re-activate people who leave or return.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->
- The GUID of each person who already has an Ad-Din account (from their profile page)

## Covers
- Add New User → Admin or Teacher
- profile pages
- Access Rights
- deactivate and re-activate

## Demo data
- Demo madrasah admin account with Premium, admin of the demo madrasah
- Demo madrasah with three teachers and two admins listed, and one inactive teacher (for example "Ustadh Hamza Ali") on the Inactive tab
- An existing demo account not yet in the madrasah (for example "Hafizah Maryam Siddiqui") whose GUID is copied to the clipboard
- A new admin to create (for example "Mr. Yusuf Rahman", username `yusuf_admin`, a demo email and mobile number); the welcome email is not sent in the demo world
- A teacher to deactivate (for example "Ustadh Omar Farooq")
- No real names, emails or phone numbers on screen

## Script

### 1. Your madrasah team
#### [1.1] Opening
**Say:** Your madrasah needs admins to run it and teachers to teach. In this video you’ll add both, check their profiles, and deactivate anyone who leaves.
**Show:** Title card: "Add admins and teachers to a madrasah".

#### [1.2]
**Say:** If someone already has an Ad-Din account, ask them for their GUID. That’s the unique code on their profile page; video 00.5 shows where. If they don’t have an account, you can create one.
**Show:** Opening card from You'll need. Cut-in: a profile page with the GUID row spotlighted.
**Caption:** If they have an account, ask for their GUID, the code on their profile page. If not, create one.

### 2. Open your madrasah’s users
#### [2.1] User Management
**Say:** In the sidebar, open **Admin Portal**, then **User Management**. Tap **Open users** on your madrasah.
**Show:** Sidebar → Admin Portal → User Management. Click "Open users" on the demo madrasah.

#### [2.2]
**Say:** The tabs group people by role. This video uses **Teacher**, **Admin** and **Inactive**.
**Show:** Spotlight the tabs Student, Parent, Teacher, Admin, Inactive, Pending Enrollments; then click Teacher.

### 3. Add a teacher by GUID
#### [3.1]
**Say:** Tap **Add**. Ad-Din asks what type of account you want to add. Open **Teacher**, paste their code into **GUID**, and tap **Fetch**.
**Show:** Click "Add". The "Add New User" page opens with Admin, Teacher, Parent and Student. Expand "Teacher", paste Maryam’s GUID, click "Fetch". Keep the hint text out of close-up.

#### [3.2] The profile page
**Say:** Their profile page opens with their details. The links on the left jump to each part, such as **Personal details** and **Address**.
**Show:** The teacher profile page for Maryam. Click Personal details and Address on the left; the page scrolls to each card.

#### [3.3]
**Say:** To change a part, tap its **Edit** button. Fields with a star are required. Then tap **Update**. This is the step that adds them to your madrasah, so don’t skip it.
**Show:** Click "Edit" on Personal detail; fields become editable. Click "Update". The "Saving Data" window ticks off its steps; click "Done".

### 4. Create a new admin
#### [4.1] Add New
**Say:** For someone without an account, tap **Add**, open **Admin**, and tap **Add New**.
**Show:** Admin tab → "Add" → expand "Admin" → click "Add New". An empty admin profile opens.

#### [4.2]
**Say:** Under **Personal detail**, choose a **Salutation**, then fill in **First Name**, **Last Name**, a **Username**, **Mobile Number** and **Email**.
**Show:** Fill the Personal detail card for Mr. Yusuf Rahman with the demo values.

#### [4.3] Access Rights
**Say:** Further down, **Access Rights** already has **Admin** ticked. If this person also teaches, tick **Teacher** too.
**Show:** Click "Access rights" on the left. Spotlight Admin (ticked); tick Teacher.

#### [4.4] Save
**Say:** Tap **Save Changes**. Ad-Din creates the account and shows each step, ending with **Sending welcome email**. That email gives them their sign-in details.
**Show:** Click "Save Changes". The "Saving Data" window: "Creating Yusuf Rahman's admin account", then "Sending welcome email". Click "Done".

### 5. Change someone’s access
#### [5.1]
**Say:** To change an admin’s access later, select them on the **Admin** tab and tap **Edit**. In **Access Rights**, tap **Edit**, tick or untick roles, and tap **Update**.
**Show:** Admin tab: tick Yusuf’s row, click "Edit". Scroll to Access Rights, click its "Edit", untick Teacher, click "Update".

### 6. Deactivate and re-activate
#### [6.1] Deactivate
**Say:** When a teacher leaves, open the **Teacher** tab, select them, and tap **Deactivate**. Add a note if you like, then tap **Deactivate**. You can’t deactivate your own account.
**Show:** Teacher tab: tick Omar’s row, click "Deactivate". The "Deactivate Teacher" window shows his name and a Deactivation Note box; type "Left at end of term"; click "Deactivate".

#### [6.2]
**Say:** Ad-Din asks **Are you sure?** Inactive people are left out of reports and don’t get Ad-Din’s notifications, but their history stays. Tap **Deactivate** to confirm.
**Show:** The "Are you sure?" step; click "Deactivate". Confirmation; Omar leaves the Teacher tab.
**Caption:** Inactive people are left out of reports and notifications; their history stays. Tap Deactivate to confirm.

#### [6.3] Re-activate
**Say:** If they come back, open **Inactive**, select them, tap **Re-Activate**, and confirm. They return to their tab, and may get one of your organisation’s seats again.
**Show:** Inactive tab: tick Hamza’s row, click "Re-Activate". The "Re-Activate Users" window shows his name and an Activation Note box; click "Re-Activate", then "Re-Activate" again on "Are you sure?". Hamza leaves the Inactive tab.

### 7. Next
#### [7.1] Done
**Say:** Your admins and teachers are in place. Next, add many people at once from a spreadsheet, or give your team their seats.
**Show:** End card with two tiles: "03.5 Import and export users in bulk" and "02.4 Give seats to parents, teachers and staff".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · manager · decisions via chat · 'How people are added' decided (as scripted): flag wording updated; script unchanged
- 2026-11-03 · critic · 3 changes: [3.3] stresses Update is the step that adds them; [6.1]/[6.2] 'can't deactivate your own account' moved to shorten [6.2]; [6.3] 'pool' idiom removed
- 2026-11-03 · validator · checked against master d36d69ed8 · 4 fixes: [3.2] a teacher profile’s side links are Personal details and Address (Documents is student-only); [3.3] Update is what adds a fetched person; [4.2] fields in the form’s order; [6.3] the Re-Activate Users window before Are you sure?

---
id: "03.4"
title: Add admins and teachers to a madrasah
target: 6:00
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
- why: admins and teachers need Premium for their portals; Subscription detail on the profile (pointer to 02.4)
- list tools: search, Filters on the Teacher tab, Last Seen
- fetching by GUID: one box at a time
- username rules and the live check
- Documents on a teacher's profile (pointer to 06.1)
- what the person receives: the "added" email; for a new account, sign-in details and an email check
- deactivating several people; no email about it; inactive people get no messages

## Demo data
- Demo world (engine/demo-world.md): the demo admin Yusuf Rahman, with Premium, admin of Maple Grove Madrasah
- Demo madrasah with three teachers and two admins listed, and one inactive teacher (for example "Ustadh Hamza Ali") on the Inactive tab
- An existing demo account not yet in the madrasah (for example "Hafizah Khadija Patel") whose GUID is copied to the clipboard
- A new admin to create (for example "Mr. Idris Malik", username `idris_malik`, a demo email and mobile number); the welcome email is not sent in the demo world
- A teacher to deactivate (for example "Ustadh Omar Khalid")
- One required document for the Teacher role set in Enrollment Settings (for example "Teaching certificate"), shown on Khadija's profile ([3.3b])
- Seats available on the madrasah's organisation subscription (for example 3 Yearly, 0 Monthly), so Allocate Subscription shows counts ([4.3a])
- The username `idris` already taken in the demo world, so the cross shows before `idris_malik` gets the tick ([4.2a])
- No real names, emails or phone numbers on screen

## Script

### 1. Your madrasah team
#### [1.1] Opening
**Say:** Your madrasah needs admins to run it and teachers to teach. In this video for madrasah admins, you’ll add both, check their profiles, and deactivate anyone who leaves.
**Show:** Title card: "Add admins and teachers to a madrasah".

#### [1.2]
**Say:** If someone already has an Ad-Din account, ask them for their GUID. That’s the unique code on their profile page; video 00.5 shows where. If they don’t have an account, you can create one.
**Show:** Opening card from You'll need. Cut-in: a profile page with the GUID row spotlighted.
**Caption:** If they have an account, ask for their GUID, the code on their profile page. If not, create one.

#### [1.2a] Why it matters
**Say:** Admins run your madrasah in the **Admin Portal**, and teachers take attendance and record progress in the **Teacher Portal**. Each of them needs Ad-Din Premium for most of those pages, and you can give one of your organisation’s Premium seats as you add them.
**Show:** Cut-in: the sidebar with Admin Portal and Teacher Portal spotlighted. Back to the opening card.

### 2. Open your madrasah’s users
#### [2.1] User Management
**Say:** In the sidebar, open **Admin Portal**, then **User Management**. Tap **Open users** on your madrasah.
**Show:** Sidebar → Admin Portal → User Management. Click "Open users" on the demo madrasah.

#### [2.2]
**Say:** The tabs group people by role. This video uses **Teacher**, **Admin** and **Inactive**.
**Show:** Spotlight the tabs Student, Parent, Teacher, Admin, Inactive, Pending Enrollments; then click Teacher.

#### [2.2a] Find people fast
**Say:** Search by name, or use the filter under each column. On the **Teacher** tab, **Filters** lets you choose a class and section. **Last Seen** turns red when someone hasn’t signed in for over 30 days.
**Show:** Type "Fat" in the search box, then clear it. Expand Filters; spotlight the class and section lists; collapse it. Spotlight a red Last Seen value.

### 3. Add a teacher by GUID
#### [3.1]
**Say:** Tap **Add**. Ad-Din asks what type of account you want to add. Open **Teacher**, paste their GUID into the **GUID** box, and tap **Fetch**.
**Show:** Click "Add". The "Add New User" page opens with Admin, Teacher, Parent and Student. Expand "Teacher", paste Khadija’s GUID, click "Fetch". Keep the hint text out of close-up.

#### [3.1a] One box at a time
**Say:** Paste a GUID into one box only. If you typed one into another box earlier, clear it first, so Ad-Din fetches the right person. If no account matches, a message tells you.
**Show:** Spotlight the empty GUID boxes under Admin and Parent, then the filled one under Teacher.

#### [3.2] The profile page
**Say:** Their profile page opens with their details. The links on the left jump to each part, such as **Personal details** and **Address**.
**Show:** The teacher profile page for Khadija. Click Personal details and Address on the left; the page scrolls to each card.

#### [3.3]
**Say:** To change a part, tap its **Edit** button. Fields with a star are required. Then tap **Update**. This is the step that adds them to your madrasah, so don’t skip it.
**Show:** Click "Edit" on Personal detail; fields become editable. Click "Update". The "Saving Data" window ticks off its steps; click "Done".

#### [3.3a] Don't close the page
**Say:** While **Saving Data** runs, stay on the page until every step has a tick, then tap **Done**. Ad-Din then emails them to say they’ve been added to your madrasah. They now see the **Teacher Portal**, as video 10.1 shows.
**Show:** Replay the end of the window: zoom on "Please don't close or leave this page until the process is complete", then the ticked steps and "Done".
**Caption:** Stay on the page until every step has a tick. Then Ad-Din emails them that they’ve been added.

#### [3.3b] Documents
**Say:** If your madrasah asks teachers for documents, they show under **Documents** on the profile, with a star when required. You set this list in **Enrollment Settings**, as video 06.1 shows.
**Show:** Scroll to the Documents card on Khadija’s profile; spotlight "Teaching certificate" with its star.

### 4. Create a new admin
#### [4.1] Add New
**Say:** For someone without an account, tap **Add**, open **Admin**, and tap **Add New**.
**Show:** Admin tab → "Add" → expand "Admin" → click "Add New". An empty admin profile opens.

#### [4.2]
**Say:** Under **Personal detail**, choose a **Salutation**, then fill in **First Name**, **Last Name**, a **Username**, **Mobile Number** and **Email**.
**Show:** Fill the Personal detail card for Mr. Idris Malik with the demo values.

#### [4.2a] Username
**Say:** The username needs at least three characters: letters, numbers, dots, underscores or hyphens. As you type, a tick shows when it’s free and a cross when someone already has it.
**Show:** In Username, type "idris": a cross shows. Add "_malik": the tick shows. Zoom on the icon each time.

#### [4.3] Access Rights
**Say:** Further down, **Access Rights** already has **Admin** ticked. If this person also teaches, tick **Teacher** too.
**Show:** Click "Access rights" on the left. Spotlight Admin (ticked); tick Teacher.

#### [4.3a] Give a seat
**Say:** On the left, under **Allocate Subscription**, tap **Yearly** or **Monthly**. Each shows how many of your organisation’s Premium seats are free. It then says **Selected for Assignment**, and the seat is given once the account is created.
**Show:** Spotlight the Subscription detail card. Click "Yearly" ("3 Available"); it changes to "Selected for Assignment" and the note "Selected subscription will be assigned after user creation." shows.

#### [4.4] Save
**Say:** Tap **Save Changes**. Ad-Din creates the account and shows each step, ending with **Sending welcome email**. That email gives them their sign-in details.
**Show:** Click "Save Changes". The "Saving Data" window: "Creating Idris Malik's admin account", "Assigning yearly subscription to Idris Malik", then "Sending welcome email". Click "Done".

#### [4.4a]
**Say:** A second email asks them to confirm their email address. Tell them both are coming, so they look for them before they sign in.
**Show:** Cut-in: a plain demo inbox with two unread emails for Idris, subjects blurred.

### 5. Change someone’s access
#### [5.1]
**Say:** To change an admin’s access later, select them on the **Admin** tab and tap **Edit**. In **Access Rights**, tap **Edit**, tick or untick roles, and tap **Update**.
**Show:** Admin tab: tick Idris’s row, click "Edit". Scroll to Access Rights, click its "Edit", untick Teacher, click "Update".

### 6. Deactivate and re-activate
#### [6.1] Deactivate
**Say:** When a teacher leaves, open the **Teacher** tab, select them, and tap **Deactivate**. Add a note if you like, then tap **Deactivate**. You can’t deactivate your own account.
**Show:** Teacher tab: tick Omar’s row, click "Deactivate". The "Deactivate Teacher" window shows his name and a Deactivation Note box; type "Left at end of term"; click "Deactivate".

#### [6.2]
**Say:** Ad-Din asks **Are you sure?** Inactive people are left out of reports and don’t get Ad-Din’s notifications, but their history stays. Tap **Deactivate** to confirm.
**Show:** The "Are you sure?" step; click "Deactivate". Confirmation; Omar leaves the Teacher tab.
**Caption:** Inactive people are left out of reports and notifications; their history stays. Tap Deactivate to confirm.

#### [6.2b] Several at once
**Say:** You can tick several people and deactivate them together, each with their own note. Ad-Din doesn’t email them about it, so tell them yourself if they need to know.
**Show:** Teacher tab: tick two rows, click "Deactivate"; the window lists both names with a note box each. Click "Cancel".

#### [6.2a] Their seat
**Say:** If this was their only role in your madrasah, their seat goes back to your organisation, ready for someone else.
**Show:** Teacher tab without Omar; cut to Admin Portal → Subscription Management → View plan and spotlight the "available" count on the Yearly card.

#### [6.3] Re-activate
**Say:** If they come back, open **Inactive**, select them, tap **Re-Activate**, and confirm. They return to their tab, and may get one of your organisation’s seats again.
**Show:** Inactive tab: tick Hamza’s row, click "Re-Activate". The "Re-Activate Users" window shows his name and an Activation Note box; click "Re-Activate", then "Re-Activate" again on "Are you sure?". Hamza leaves the Inactive tab.

### 7. Next
#### [7.1] Done
**Say:** Your admins and teachers are in place. Next, video 03.5: Import and export users in bulk, or video 02.4: Give seats to parents, teachers and staff.
**Show:** End card with two tiles: "03.5 Import and export users in bulk" and "02.4 Give seats to parents, teachers and staff".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 2:43 → 4:47 narration, 9 scenes added: why (portals need Premium), search and Filters, one GUID box at a time, stay on the page while saving and the "added" email (10.1), Documents (06.1), username rules and live check, Allocate Subscription on a new profile, the email-check message, deactivating several people with no email
- 2026-11-06 · panel (user, director, writer, PM, PO) · 5 changes: [1.1] says who it's for, [3.1] "their GUID" instead of "their code", new [6.2a] a deactivated person's seat goes back to the organisation (code: organisationUserList changeSubscriptionStatus, MadressahRepository SuspendUsers), [7.1] names both end tiles by number and title, demo names that don't clash with the demo world (the new admin was "Yusuf Rahman", the demo account itself)
- 2026-11-03 · manager · decisions via chat · 'How people are added' decided (as scripted): flag wording updated; script unchanged
- 2026-11-03 · critic · 3 changes: [3.3] stresses Update is the step that adds them; [6.1]/[6.2] 'can't deactivate your own account' moved to shorten [6.2]; [6.3] 'pool' idiom removed
- 2026-11-03 · validator · checked against master d36d69ed8 · 4 fixes: [3.2] a teacher profile’s side links are Personal details and Address (Documents is student-only); [3.3] Update is what adds a fetched person; [4.2] fields in the form’s order; [6.3] the Re-Activate Users window before Are you sure?

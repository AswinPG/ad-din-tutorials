---
id: "06.3"
title: Approve or decline enrolment applications
target: 4:00
prereq:
  - "06.1"
  - "02.4"
status: scripted
platform: Both
flags:
  - "Who needs a seat? (open): approving an application when neither parent has a subscription assigns one of the organisation's Yearly or Monthly seats to the parent (\"Subscription required to enroll\"). Separately, the admin needs their own Premium to open User Management (SubscriptionGuard). Script shows today's behaviour; revisit when the decision is made."
  - "The web dashboard's Pending Enrollments card is switched off in the code (commented out in dashboardv2), so the dashboard alert is shown on the app home's Waiting on you card instead."
---

# 06.3 Approve or decline enrolment applications

## Goal
Review online enrolment applications, place each child in a section and approve them, or decline with a reason, and bring back a course you declined earlier.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Pick a section, decline with a reason, Reconsider, “Subscription required to enroll”, the dashboard and app alerts

## Demo data
- Demo madrasah "Al-Noor Madrasah"; the demo admin has Premium and the madrasah has free Yearly seats (for example 5 available)
- Class "Maktab Level 1" with sections "Section A" and "Section B"; class "Hifz Boys" with section "Hifz A"
- Pending applications:
  - Maryam Rahman → Maktab Level 1 (parent Aisha Rahman, no seat yet), to approve
  - Bilal Ahmed → Maktab Level 1 (parent Omar Ahmed), to decline
  - Zaid Khan → Hifz Boys, declined earlier for "No available seats" with a note, to reconsider (parent Fatima Khan already has a seat, so "Subscription Active" shows)
- The app home (phone frame) signed in as the same admin, with the Waiting on you card showing "Enrollment applications" and a push notification for a new application
- No real names, emails or phone numbers on screen

## Script

### 1. Before you start
#### [1.1] Opening
**Say:** In this video for madrasah admins, you'll approve an online enrolment application, decline one with a reason, and bring back a course you declined before.
**Show:** Title card: "Approve or decline enrolment applications".

#### [1.2]
**Say:** Your enrolment form is already set up, and some of your organisation's Premium seats are still free to give to families.
**Show:** Opening card from You'll need.

### 2. Know when applications arrive
#### [2.1] Alerts
**Say:** When a parent submits an application, every admin of the madrasah gets an email and a notification on their phone.
**Show:** Phone frame: a push notification about a new enrolment application.

#### [2.2] The app home
**Say:** In the Ad-Din app, your home shows **Waiting on you**. Tap **Review** next to **Enrollment applications** to open the list.
**Show:** Phone frame: app home, the Waiting on you card with "Enrollment applications" and its count. Tap "Review"; the applications list opens.

#### [2.3] On the web
**Say:** On the web, open **Admin Portal**, then **User Management**. Tap **Open users** on your madrasah, then the **Pending Enrollments** tab.
**Show:** Sidebar → Admin Portal → User Management. Click "Open users" on "Al-Noor Madrasah". Click the "Pending Enrollments" tab; the list shows First Name, Class Name, Parent Name and Status.

### 3. Approve an application
#### [3.1] Open it and pick a section
**Say:** Select an application and tap **View Details**. Under **Selected Course**, choose a section for each course in **Select Section**.
**Show:** Click the row "Maryam Rahman". Click "View Details"; the "Enrollment Request" window opens. Spotlight "Maktab Level 1". Open "Select Section" and pick "Section A".

#### [3.3]
**Say:** Below, check the parent's and child's details, documents and answers. If everything is right, answer **Is all information found correct?** with **Yes**.
**Show:** Scroll through the parent and child details, including the uploaded birth certificate. At the bottom, click "Yes".

#### [3.5] Subscription required to enroll
**Say:** If neither parent has a subscription yet, you'll see **Subscription required to enroll**. Choose **Yearly** or **Monthly**. Each shows how many of your madrasah's seats are left.
**Show:** Zoom on the "Subscription required to enroll" box. Spotlight "Yearly (5 available)" and "Monthly"; keep Yearly selected.

#### [3.6]
**Say:** If a parent already has one, it says **Subscription Active**, and you can approve straight away.
**Show:** Inset card: the green "Subscription Active" box (from Zaid's application, recorded separately).

#### [3.7] Approve
**Say:** Tap **Approve Application**, then **Proceed**. The child joins the section, and the parent is told by email and notification.
**Show:** Click "Approve Application". The "Confirm Approval" box; click "Proceed". The "Successful" message "Successfully approved the Enrolment Request"; click "Close". The window closes and Maryam leaves the pending list.

### 4. Decline an application
#### [4.1] Say no
**Say:** To decline, open the application and answer **No** to **Is all information found correct?**
**Show:** Select "Bilal Ahmed", click "View Details". Scroll down, click "No".

#### [4.2] Give a reason
**Say:** Choose a **Reason for Declining**, such as no available seats. Add **Additional Notes** if the parent needs to know more.
**Show:** Open "Reason for Declining", pick "No available seats". Type a short note in "Additional Notes".

#### [4.3]
**Say:** Tap **Reject Application**, then **Proceed**. The parent sees your reason in the app and can fix their application and send it again.
**Show:** Click "Reject Application". The "Are you sure?" box lists the course; click "Proceed". Bilal's row now shows Status "Rejected" and the reason.

### 5. Change your mind
#### [5.1] Reconsider
**Say:** If you declined a course too soon, open that child's application. Courses you declined are under **Previously rejected**, with your reason.
**Show:** Select "Zaid Khan", click "View Details". Spotlight the "Previously rejected" card with "Reason: No available seats".

#### [5.2]
**Say:** Tap **Reconsider** to bring it back. Then pick a section, answer **Yes**, and approve it as before.
**Show:** Click "Reconsider"; "Hifz Boys" moves up into Selected Course. Pick "Hifz A", click "Yes", "Approve Application", "Proceed".

### 6. Next
#### [6.1] Done
**Say:** Approved children now appear in your student list, in the section you chose.
**Show:** Click the "Student" tab; open "Filters" and pick "Maktab Level 1" and "Section A". Spotlight Maryam Rahman.

#### [6.2]
**Say:** Next, video 06.4: Add students and parents yourself, and video 06.5: Move students between sections.
**Show:** End card with two tiles: "06.4 Add students and parents yourself" and "06.5 Move students between sections".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · critic · 6 changes: [1.1] second-person opening; [1.2] seat named as one of your organisation's Premium seats; [3.2] merged into [3.1] and [3.4] into [3.3] (thin scenes); [5.1] no elliptical question; [6.2] end card by number and title
- 2026-11-03 · validator · checked against master d36d69ed8 · 2 fixes: [3.7] Successful alert + Close after Proceed; [6.1] Filters panel must be opened

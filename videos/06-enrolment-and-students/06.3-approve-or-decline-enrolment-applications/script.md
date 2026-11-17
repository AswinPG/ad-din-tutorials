---
id: "06.3"
title: Approve or decline enrolment applications
target: 5:30
prereq:
  - "06.1"
  - "02.4"
status: scripted
platform: Both
flags:
  - "Who needs a seat? (decided 2026-11-03: intended): approving an application when neither parent has a subscription assigns one of the organisation's Yearly or Monthly seats to the parent (\"Subscription required to enroll\"). Separately, the admin needs their own Premium to open User Management (SubscriptionGuard). Script shows today's behaviour, which is intended (decided 2026-11-03)."
  - "The web dashboard's Pending Enrollments card is switched off in the code (commented out in dashboardv2), so the dashboard alert is shown on the app home's Waiting on you card instead."
---

# 06.3 Approve or decline enrolment applications

## Goal
Review online enrolment applications, place each child in a section and approve them, or decline with a reason, and bring back a course you declined earlier.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Pick a section, decline with a reason, Reconsider, “Subscription required to enroll”, the dashboard and app alerts
- Download Application (PDF, or a zip for several)
- Why review each application; a section for every course; Edit on the parent and child cards
- The download button and Cancel in the request window; the seat and Manage Subscription
- The decline reasons; what the parent gets (email, push, Review & Resubmit); Already Rejected

## Demo data
- Demo madrasah "Maple Grove Madrasah"; the demo admin (Yusuf Rahman) has Premium and the madrasah has free Yearly seats (for example 5 available)
- Class "Weekend Quran" with sections "Level 1" and "Level 2"; class "Hifz Class A" with section "Morning"
- Pending applications:
  - Musa Malik → Weekend Quran (parent Khadija Malik, no seat yet; the family from 06.2), to approve
  - Idris Farah → Weekend Quran (parent Amina Farah), to decline
  - Safiya Ansari → Hifz Class A, declined earlier for "No available seats" with a note, to reconsider (parent Hamid Ansari already has a seat, so "Subscription Active" shows)
- For the [3.5a] inset only: a second state with 0 Yearly and 0 Monthly seats available
- The app home (phone frame) signed in as the same admin, with the Waiting on you card showing "Enrollment applications" and a push notification for a new application
- No real names, emails or phone numbers on screen

## Script

### 1. Before you start
#### [1.1] Opening
**Say:** In this video for madrasah admins, you'll approve an online enrolment application, decline one with a reason, and bring back a course you declined before.
**Show:** Title card: "Approve or decline enrolment applications".

#### [1.1a] Why review each one
**Say:** Reviewing each application lets you check the family's details and documents, choose the right section for the child, and decide who gets one of your seats.
**Show:** Card: "Check the details · Choose the section · Give a seat".

#### [1.2]
**Say:** Your enrolment form is already set up, and some of your organisation's Premium seats are still free to give to families.
**Show:** Opening card from You'll need.

### 2. Know when applications arrive
#### [2.1] Alerts
**Say:** When a parent submits an application, every admin of the madrasah gets an email and a notification on their phone.
**Show:** Phone frame, side panel "Signed in as: madrasah admin": the in-app push banner for a new enrolment application (triggered with the 'addin:push' event, as in 00.7).

#### [2.2] The app home
**Say:** In the Ad-Din app, your home shows **Waiting on you**. Tap **Review** next to **Enrollment applications** to open the list.
**Show:** Phone frame: app home, the Waiting on you card with "Enrollment applications" and its count. Tap "Review"; the applications list opens.

#### [2.3] On the web
**Say:** On the web, open **Admin Portal**, then **User Management**. Tap **Open users** on your madrasah, then the **Pending Enrollments** tab.
**Show:** Sidebar → Admin Portal → User Management. Click "Open users" on "Maple Grove Madrasah". Click the "Pending Enrollments" tab; the list shows First Name, Class Name, Parent Name and Status.

#### [2.3a] Keep a copy
**Say:** To keep a copy, select one or more applications and tap **Download Application**. You get a PDF file, or a zip file for several.
**Show:** Tick the rows "Musa Malik" and "Idris Farah"; hover "Download Application" and its tooltip; don't click. Untick both.

### 3. Approve an application
#### [3.1] Open it and pick a section
**Say:** Select an application and tap **View Details**. Under **Selected Course**, choose a section for each course in **Select Section**.
**Show:** Click the row "Musa Malik". Click "View Details"; the "Enrollment Request" window opens. Spotlight "Weekend Quran". Open "Select Section" and pick "Level 1".

#### [3.1a]
**Say:** Choose a section for every course in the request. If you miss one, Ad-Din names the course and asks you to pick a section before it approves.
**Show:** Zoom on "Select Section" showing "Level 1". Small note on screen: "Please select section for: …".

#### [3.3]
**Say:** Below, check the parent's and child's details, documents and answers. If everything is right, answer **Is all information found correct?** with **Yes**.
**Show:** Scroll through the parent and child details, including the uploaded birth certificate. At the bottom, click "Yes".

#### [3.3a] Fix a detail
**Say:** If a detail is wrong, for example a misspelt name, tap **Edit** on the parent or child card. The enrolment form opens, so you can correct it before you approve.
**Show:** Spotlight the "Edit" link on the "Parent Details" card and on the "Child Details" card; don't click.

#### [3.5] Subscription required to enroll
**Say:** If neither parent has a subscription yet, you'll see **Subscription required to enroll**. Choose **Yearly** or **Monthly**. Each shows how many of your madrasah's seats are left.
**Show:** Zoom on the "Subscription required to enroll" box. Spotlight "Yearly (5 available)" and "Monthly"; keep Yearly selected.

#### [3.5a] No seats left
**Say:** If both show none available, you can't tap **Approve Application**. Buy more seats first. Video 02.3 shows how.
**Show:** Inset card (recorded separately): "Yearly (0 available)" and "Monthly (0 available)", with "Approve Application" greyed. Small note on screen: "02.3 Buy seats for your organisation".

#### [3.6]
**Say:** If a parent already has one, it says **Subscription Active**, and you can approve straight away.
**Show:** Inset card: the green "Subscription Active" box (from Safiya's application, recorded separately).

#### [3.7] Approve
**Say:** Tap **Approve Application**, then **Proceed**. The child joins the section, and the parent is told by email and notification.
**Show:** Click "Approve Application". The "Confirm Approval" box; click "Proceed". The "Successful" message "Successfully approved the Enrolment Request"; click "Close". The window closes and Musa leaves the pending list.

#### [3.7a] The other buttons
**Say:** The download button beside **Cancel** saves this one application as a PDF. **Cancel** closes the window without changing anything, so the application stays pending.
**Show:** From an earlier take with the window open: spotlight the download icon, then "Cancel".

#### [3.7b] The seat
**Say:** The seat you chose is now assigned to the parent, which lets their child stay in a class. To see or change it later, select the parent on the **Parent** tab and tap **Manage Subscription**, as video 02.4 shows.
**Show:** Click the "Parent" tab; select "Khadija Malik"; spotlight "Manage Subscription"; don't click.

### 4. Decline an application
#### [4.1] Say no
**Say:** To decline, open the application and answer **No** to **Is all information found correct?**
**Show:** Select "Idris Farah", click "View Details". Scroll down, click "No".

#### [4.2] Give a reason
**Say:** Choose a **Reason for Declining**, such as no available seats. Add **Additional Notes** if the parent needs to know more.
**Show:** Open "Reason for Declining", pick "No available seats". Type a short note in "Additional Notes".

#### [4.2a] Choosing a reason
**Say:** The list includes reasons such as a schedule conflict, an incomplete application or age restrictions, and **Other**. A reason is required. Use the notes to tell the parent what to do next, for example which document to add.
**Show:** Reopen the Reason for Declining list slowly: spotlight "Schedule conflict", "Incomplete application", "Age or grade restrictions" and "Other". Keep "No available seats".

#### [4.3]
**Say:** Tap **Reject Application**, then **Proceed**. The parent sees your reason in the app and can fix their application and send it again.
**Show:** Click "Reject Application". The "Are you sure?" box lists the course; click "Proceed". Idris's row now shows Status "Rejected" and the reason.

#### [4.3a] What the parent gets
**Say:** The parent gets an email and a push notification with your reason. They can fix the application and send it again with **Review & Resubmit**. You'll then find it in **Pending Enrollments**, ready to review.
**Show:** Card: "Declined → parent told, with the reason → Review & Resubmit → Pending Enrollments".

#### [4.3b]
**Say:** An application that's already declined can't be declined twice. If you answer **No** on one, Ad-Din shows **Already Rejected**.
**Show:** Open "Idris Farah" again with View Details, click "No": spotlight "Already Rejected". Click "Cancel".

### 5. Change your mind
#### [5.1] Reconsider
**Say:** If you declined a course too soon, open that child's application. Courses you declined are under **Previously rejected**, with your reason.
**Show:** Select "Safiya Ansari", click "View Details". Spotlight the "Previously rejected" card with "Reason: No available seats".

#### [5.2]
**Say:** Tap **Reconsider** to bring it back. Then pick a section, answer **Yes**, and approve it as before.
**Show:** Click "Reconsider"; "Hifz Class A" moves up into Selected Course. Pick "Morning", click "Yes", "Approve Application", "Proceed".

### 6. Next
#### [6.1] Done
**Say:** Approved children now appear in your student list, in the section you chose.
**Show:** Click the "Student" tab; open "Filters" and pick "Weekend Quran" and "Level 1". Spotlight Musa Malik.

#### [6.2]
**Say:** Next, video 06.4: Add students and parents yourself, and video 06.5: Move students between sections.
**Show:** End card with two tiles: "06.4 Add students and parents yourself" and "06.5 Move students between sections".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 2:35 → 4:15 narration, 8 scenes added: [1.1a] why review each application, [3.1a] a section for every course, [3.3a] Edit on the parent and child cards, [3.7a] the download button and Cancel, [3.7b] the seat and Manage Subscription, [4.2a] the decline reasons, [4.3a] what the parent gets and Review & Resubmit, [4.3b] Already Rejected
- 2026-11-07 · manager · panel decisions, "All recommended" · added [2.3a] on Download Application (approve-enrollment.component.ts 145-149; decision 28) and a Covers item; Add more course left out on purpose (FEATURE-MAP)
- 2026-11-06 · panel (user, director, writer, PM, PO) · 3 changes: new [3.5a] says Approve Application can't be tapped when no seats are left and points to 02.3 (approve-enrollment.component.html 216-217), [2.1] Show uses the in-app push banner (a real push can't reach the mocked world, as in 00.7) with a "Signed in as" label, demo data and Show names use the Maple Grove demo world (Weekend Quran, Hifz Class A; new families Malik, Farah, Ansari)
- 2026-11-03 · manager · decisions via chat · 'Who needs a seat?' decided (own-Premium check is intended): flag wording updated; script unchanged
- 2026-11-03 · critic · 6 changes: [1.1] second-person opening; [1.2] seat named as one of your organisation's Premium seats; [3.2] merged into [3.1] and [3.4] into [3.3] (thin scenes); [5.1] no elliptical question; [6.2] end card by number and title
- 2026-11-03 · validator · checked against master d36d69ed8 · 2 fixes: [3.7] Successful alert + Close after Proceed; [6.1] Filters panel must be opened

---
id: "03.2"
title: Turn features on and off
target: 4:00
prereq:
  - "03.1"
status: scripted
plan: Free
flags:
  - "Integrations tab is broken on a masjid: editMasjid.component.html passes [orgId]=\"madressahId\", which the masjid page doesn't have, so PayPal keys neither load nor save there. The script shows Integrations on the madrasah only."
  - "Payment Module switch is shown in passing ([3.5]); Track 11 is on hold. Cut [3.5] if it shouldn't appear."
  - "Exam Marks switch is shown as the app describes it (older feature, off by default); the open decision on Exam Marks may change [3.4]."
---

# 03.2 Turn features on and off

## Goal
Switch your organisation’s optional features on or off on the Services tab, choose its donation page, and add PayPal keys on the Integrations tab.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Every switch on the Services tab and what it unlocks
- PayPal keys on the Integrations tab

## Demo data
- Demo admin account that is admin of the demo madrasah and the demo masjid
- Demo madrasah with Academic Activity and AutoSave Academic Reports on, Class Announcements off (it is switched on in the demo), Exam Marks and Payment Module off, Family Subscription sharing off, Staff Attendance off
- Demo madrasah time zone already worked out (shown in the "Time zone: …" link)
- Two service pages on the demo madrasah (for example "Support our Madrasah" and "About us") for the Donation Pages list
- Demo PayPal key and secret that are clearly fake (for example `DEMO-KEY-123` / `DEMO-SECRET`); never real keys on screen

## Script

### 1. Optional features
#### [1.1] Opening
**Say:** Every masjid and madrasah can switch extra features on or off, so people only see what you use. Let’s go through each switch and what it does.
**Show:** Title card: "Turn features on and off".

#### [1.2]
**Say:** You need to be an admin of the organisation. Some features also need Ad-Din Premium before people can use them.
**Show:** Opening card from You'll need.

### 2. Open the Services tab
#### [2.1] Find it
**Say:** In the sidebar, open **Admin Portal**, then **Organization Management**. Tap **Manage** on your madrasah, then open the **Services** tab.
**Show:** Sidebar → Admin Portal → Organization Management. Click "Manage" on the demo madrasah, then the "Services" tab.

#### [2.2]
**Say:** Under **Other Organization Services**, each switch has a short description. A switch saves the moment you tap it, and a message confirms the change.
**Show:** Spotlight the "Other Organization Services" card and its list of switches.

### 3. Madrasah features
#### [3.1] Academic Activity
**Say:** **Academic Activity** lets admins and teachers create, track and grade students’ work. It adds **Academic Activity** to the admin, teacher, parent and student portals.
**Show:** Spotlight the Academic Activity switch (on).

#### [3.2] AutoSave
**Say:** **AutoSave Academic Reports** saves report cards automatically as they’re generated, so staff don’t lose their work.
**Show:** Spotlight AutoSave Academic Reports (on).

#### [3.3] Class Announcements
**Say:** **Class Announcements** lets teachers share photos and notes from class with parents and students. Let’s turn it on.
**Show:** Click the Class Announcements switch; it turns on and a confirmation message shows.

#### [3.4] Exam Marks
**Say:** **Exam Marks** shows the older Exams and Exam Marks feature. It’s off by default; Academic Activity is the recommended way to grade work.
**Show:** Spotlight Exam Marks (off).

#### [3.5] Payment Module
**Say:** **Payment Module** sets up fee invoices, payments and fee reports for your programs.
**Show:** Spotlight Payment Module (off). Don’t switch it on.

### 4. Features for masjids and madrasahs
#### [4.1] Family sharing
**Say:** **Family Subscription sharing** is on masjids too. When it’s on, a subscription given to a parent also covers their spouse and children.
**Show:** Spotlight Family Subscription sharing.

#### [4.2] Staff Attendance
**Say:** **Staff Attendance** tracks staff time and attendance. Each staff member needs a subscription. Before it switches on, Ad-Din checks your **Time zone**; the link under it shows the current one.
**Show:** Spotlight the Staff Attendance switch and its quick links: "Time zone: …", "Documents for your staff", "Legacy teacher-attendance register" (madrasah only). Don’t switch it on.
**Caption:** Staff Attendance tracks staff time. Each staff member needs a subscription. Ad-Din checks the time zone first.

### 5. Choose your donation page
#### [5.1] Donation Page
**Say:** Next, switch on **Donation Page** to choose what opens when members want to donate to you.
**Show:** Click the Donation Page switch; the options appear.

#### [5.2]
**Say:** Pick **Donation Pages** to use one of your own pages, or **Page URL** to send people to a web address. Then tap **Save**.
**Show:** Select "Donation Pages", choose "Support our Madrasah" in the list, click "Save".

#### [5.3]
**Say:** Below it, a madrasah also sets the learning skills used on report cards. Video 05.1 shows how.
**Show:** Scroll to the learning skills card; hold briefly.

### 6. Add PayPal keys
#### [6.1] Integrations
**Say:** Now open the **Integrations** tab. Under **PayPal Integration**, tick the PayPal box.
**Show:** Click the "Integrations" tab. Click the checkbox on the PayPal card; the CREDENTIALS and SECRET boxes appear.

#### [6.2]
**Say:** Copy the key and secret from your PayPal business account into **CREDENTIALS** and **SECRET**, then tap **Save**. Ad-Din uses them to confirm PayPal donations to your campaigns.
**Show:** Type the fake demo key and secret; the secret stays masked. Click "Save"; confirmation message. Never show real keys.
**Caption:** Paste your PayPal key and secret, then tap Save. Ad-Din uses them to confirm PayPal donations to your campaigns.

### 7. Next
#### [7.1] Done
**Say:** Your features are set. You can come back and change any switch whenever you need to. Next, add the people who help run your organisation.
**Show:** End card with two tiles: "03.3 Add admins, staff and volunteers to a masjid" and "03.4 Add admins and teachers to a madrasah".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · validator · checked against master d36d69ed8 · 1 fix: [4.2] Show lists the third quick link (Legacy teacher-attendance register) a madrasah sees

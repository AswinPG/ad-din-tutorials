---
id: "03.2"
title: Turn features on and off
target: 6:00
prereq:
  - "03.1"
status: scripted
plan: Free
flags:
  - "Integrations tab is broken on a masjid: editMasjid.component.html passes [orgId]=\"madressahId\", which the masjid page doesn't have, so PayPal keys neither load nor save there. The script shows Integrations on the madrasah only."
  - "Exam Marks switch is shown as the app describes it (older feature, off by default). The series has no Exam Marks video (dropped 2026-11-03), so [3.4] only names the switch and points to Academic Activity."
---

# 03.2 Turn features on and off

## Goal
Switch your organisation’s optional features on or off on the Services tab, choose its donation page, and add PayPal keys on the Integrations tab.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Every switch on the Services tab and what it unlocks, except Payment Module (left for Track 11)
- PayPal keys on the Integrations tab
- what switching a feature off does (pages hidden, nothing deleted)
- where each feature shows up (pointers to 10.5, 07.4, 02.4, 13.1, 08.3, 08.4)
- Staff Attendance: the time-zone step on switch-on and the quick links
- Donation Page: Page URL format, the required-field message, switching it off
- PayPal: show or hide the secret, the required-field message

## Demo data
- Demo admin account that is admin of the demo madrasah and the demo masjid
- Demo madrasah with Academic Activity and AutoSave Academic Reports on, Class Announcements off (it is switched on in the demo), Exam Marks and Payment Module off, Family Subscription sharing off, Staff Attendance off
- Demo madrasah time zone already worked out (shown in the "Time zone: …" link)
- Demo world parent Samir Karim with his child Zaid Karim linked, named in the family sharing example ([4.1a]); nothing is changed on camera
- Two service pages on the demo madrasah (for example "Support our Madrasah" and "About us") for the Donation Pages list
- Demo PayPal key and secret that are clearly fake (for example `DEMO-KEY-123` / `DEMO-SECRET`); never real keys on screen

## Script

### 1. Optional features
#### [1.1] Opening
**Say:** Every masjid and madrasah can switch extra features on or off, so people only see what you use. In this video for admins, you’ll see each switch and what it does.
**Show:** Title card: "Turn features on and off".

#### [1.2]
**Say:** You need to be an admin of the organisation. Some features also need Ad-Din Premium before people can use them.
**Show:** Opening card from You'll need.

### 2. Open the Services tab
#### [2.1] Find it
**Say:** In the sidebar, open **Admin Portal**, then **Organization Management**. Tap **Manage** on your organisation, then open the **Services** tab. We use a madrasah here, because it has the most switches.
**Show:** Sidebar → Admin Portal → Organization Management. Click "Manage" on the demo madrasah, then the "Services" tab.

#### [2.2]
**Say:** Under **Other Organization Services**, each switch has a short description. A switch saves the moment you tap it, and a message confirms the change.
**Show:** Spotlight the "Other Organization Services" card and its list of switches.

#### [2.2a] Off means hidden
**Say:** Switching a feature off hides its pages from the sidebar for the people of your organisation. Nothing is deleted, so if you switch it back on, the pages and their records return.
**Show:** Split view: the Teacher Portal list in the sidebar with Class Announcements, then the same list without it (a world override for the second half). The demo switch itself is not changed.

### 3. Madrasah features
#### [3.1] Academic Activity
**Say:** **Academic Activity** lets admins and teachers create, track and grade students’ work. It adds an **Academic Activity** page to each portal.
**Show:** Spotlight the Academic Activity switch (on).

#### [3.1a]
**Say:** It works on the web and in the Ad-Din app. Teachers use it to set classwork and enter scores, and parents follow the results. Video 10.5 shows how to set up activities.
**Show:** Zoom on the switch's description text, ending at "Available on both the web portal and the Ad-Din Mobile App."

#### [3.2] AutoSave
**Say:** **AutoSave Academic Reports** saves report cards automatically as they’re generated, so staff don’t lose their work.
**Show:** Spotlight AutoSave Academic Reports (on).

#### [3.3] Class Announcements
**Say:** **Class Announcements** lets teachers share photos and notes from class with parents and guardians. Here, we turn it on.
**Show:** Click the Class Announcements switch; it turns on and a confirmation message shows.

#### [3.3a]
**Say:** Teachers now see **Class Announcements** in their portal, and parents see the posts on the web and in the app. Video 07.4 shows how teachers post one.
**Show:** Cut-in: Sidebar → Teacher Portal, spotlight "Class Announcements". Back to the Services tab.

#### [3.4] Exam Marks
**Say:** **Exam Marks** shows the older Exams and Exam Marks feature. It’s off by default; Academic Activity is the recommended way to grade work.
**Show:** Spotlight Exam Marks (off).

### 4. Features for masjids and madrasahs
#### [4.1] Family sharing
**Say:** Masjids have the next two switches too. When **Family Subscription sharing** is on, one of your organisation’s Premium seats given to a parent also covers their linked spouse and children. Video 02.4 shows how.
**Show:** Spotlight Family Subscription sharing.

#### [4.1a] Example
**Say:** For example, with sharing on, the seat you give to the parent Samir Karim also covers his son Zaid. One seat then serves the whole family, so your seats go further.
**Show:** Zoom on the switch description: "a subscription assigned to either parent or guardian will automatically extend to all linked family accounts".

#### [4.2] Staff Attendance
**Say:** **Staff Attendance** tracks staff time and attendance. Each staff member who uses it needs Premium, such as a seat. Before it switches on, Ad-Din checks your **Time zone**; the link under it shows the current one. Video 13.1 shows how to switch it on.
**Show:** Spotlight the Staff Attendance switch and its quick links: "Time zone: …", "Documents for your staff", "Legacy teacher-attendance register" (madrasah only). Don’t switch it on.
**Caption:** Staff Attendance tracks staff time. Each staff member needs Premium, such as a seat. Ad-Din checks the time zone first (video 13.1).

#### [4.2a] Switching it on
**Say:** If there’s no time zone yet, the switch first asks where your organisation is, and the button says **Save and switch on**. If something else must be fixed first, the switch stays off and a window lists what to do.
**Show:** Cut-in from video 13.1's recording: the "Where is the organisation?" dialog with "Save and switch on" spotlighted. Don't switch it on in this video.

#### [4.2b] Quick links
**Say:** The links under the switch work even while it’s off. **Documents for your staff** opens two documents: a notice of what Ad-Din records, and a starter for your own staff policy. Read them before you begin.
**Show:** Click "Documents for your staff"; the window opens. Spotlight it, then close it with the cross.

### 5. Choose your donation page
#### [5.1] Donation Page
**Say:** Next, switch on **Donation Page** to choose what opens when members want to donate to you.
**Show:** Click the Donation Page switch; the options appear.

#### [5.2]
**Say:** Pick **Donation Pages** to use one of your own pages, or **Page URL** to send people to a web address. Then tap **Save**. Video 08.3 shows this step by step.
**Show:** Select "Donation Pages", choose "Support our Madrasah" in the list, click "Save".

#### [5.2a] Page URL and checks
**Say:** For **Page URL**, paste the full address, starting with https. If you tap **Save** with no page or address, Ad-Din says **Fill the required fields and try again**.
**Show:** Click "Page URL"; spotlight the box with its hint "https://example.com". Click "Donation Pages" again; the demo choice is still selected.

#### [5.2b] Turn it off
**Say:** To stop using a donation page, switch **Donation Page** off. That saves at once, and your choice is cleared.
**Show:** Spotlight the Donation Page switch. Don't switch it off.

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

#### [6.2a] Check your keys
**Say:** The secret is hidden as you type. Tap the eye to show it and check it, then hide it again. If either box is empty, Ad-Din says **Fill the required fields and try again**. Video 08.4 shows a fundraising campaign that takes PayPal gifts.
**Show:** Click the eye icon in SECRET: the fake demo secret shows. Click it again to hide it.

### 7. Next
#### [7.1] Done
**Say:** Your features are set, and you can change any switch at any time. Next, video 03.3: Add admins, staff and volunteers to a masjid, or video 03.4: Add admins and teachers to a madrasah.
**Show:** End card with two tiles: "03.3 Add admins, staff and volunteers to a masjid" and "03.4 Add admins and teachers to a madrasah".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 2:46 → 4:46 narration, 9 scenes added: off means hidden (nothing deleted), Academic Activity on web and app (10.5), Class Announcements for teachers and parents (07.4), family sharing example, Staff Attendance switch-on time-zone step, Documents for your staff quick link, Page URL and the required-field message, switching the donation page off, PayPal secret eye and required-field message (08.4)
- 2026-11-06 · panel (user, director, writer, PM, PO) · 5 changes: [1.1] says who it's for (no "Let's go through"), [3.3] "parents and guardians" as the switch text says (page.editor.component.html), [4.1] "Premium seat" instead of "subscription", with a pointer to 02.4, [4.2] "needs Premium, such as a seat" and a pointer to 13.1, Caption kept in step, [7.1] names both end tiles by number and title
- 2026-11-03 · manager · decisions via chat · Payment Module cut until Track 11: [3.5] removed, Payment Module flag dropped, Covers notes the exception; target 4:00 to 3:45
- 2026-11-03 · manager · decisions via chat · Exam Marks decided (10.11 dropped): [3.4] flag reworded; [3.4] stays as it names a real switch
- 2026-11-03 · critic · 5 changes: [2.1] Manage on any organisation, says why a madrasah is shown; [3.1] less repetition; [4.1] 'is on masjids too' (read as switched on) → 'Masjids have the next two switches too'; [5.2] points to 08.3 instead of duplicating it; [7.1] shorter close
- 2026-11-03 · validator · checked against master d36d69ed8 · 1 fix: [4.2] Show lists the third quick link (Legacy teacher-attendance register) a madrasah sees

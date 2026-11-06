---
id: "10.8"
title: Parent–teacher interviews
target: 4:15
prereq:
  - "06.4"
status: scripted
---

# 10.8 Parent–teacher interviews

## Goal
Create a parent–teacher interview event with bookable time slots, remind parents to book, and manage the bookings and notes.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Set up interviews and slots, reminders, bookings

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo madrasah "Maple Grove Madrasah" (Premium); the demo account Yusuf Rahman is a Madrasah Admin
- Teacher Bilal Hussain teaching Class "Maktab Level 1", section "A", subject "Quran"; the section has demo students with linked demo parents
- Event "Autumn Parent Evening" (year 2026) created on camera, plus its interview for Bilal with one date (Room 4, 4:00–6:00 pm, 15-minute appointments, 5-minute gap)
- For the Manage Booking chapter: an existing interview with some slots Booked by demo parents and some Free
- Reminder sending mocked (no real email, text or push goes out)

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Meetings parents can book
#### [1.1] Opening
**Say:** Parent–teacher interviews let families book a time with their child's teacher. Admins create the event and its time slots; teachers remind parents and manage the bookings.
**Show:** Title card: "Parent–teacher interviews".

#### [1.2]
**Say:** Your teachers, students and parents are already in Ad-Din.
**Show:** Opening card.

### 2. Create the event
#### [2.1] Manage Interviews
**Say:** In the **Admin Portal**, open **Parent Teacher Interview**. Go to **Manage Interviews** and tap **Add**.
**Show:** Sidebar → Admin Portal → Parent Teacher Interview. Click the "Manage Interviews" tab, then "Add".

#### [2.2]
**Say:** Type the **Event Name**, choose the **Year**, and tap **Save**.
**Show:** The "Manage Interview Event" window. Type "Autumn Parent Evening", pick 2026, click "Save". The event appears in the list.

### 3. Set up the slots
#### [3.1] Interview Details
**Say:** Next, add an interview for each teacher. Open **Interview Details** and tap **Add Booking**.
**Show:** Click the "Interview Details" tab, then "Add Booking". The "Manage Interview" window opens.

#### [3.2] Who it's for
**Say:** Under **Conference**, pick the event, then the teacher. Choose the **Class**, **Class Section** and **Subject** whose parents can book.
**Show:** Select "Autumn Parent Evening" and "Bilal Hussain". Pick "Maktab Level 1", "A", "Quran".

#### [3.3] Booking window and length
**Say:** Set when booking opens and closes with **Booking Start** and **Booking CutOff**. Then choose the **Appointment Duration** and the **Appointment Gap** between meetings.
**Show:** Pick Booking Start and Booking CutOff dates and times. Select "15 Minutes" and "05 Minutes".

#### [3.4] Dates
**Say:** Tap **Add Date**. Enter the **Meeting Room**, the **Date**, and the **Start Time** and **End Time**, then tap **Add**.
**Show:** Click "Add Date". In "Event Date" type "Room 4", pick the date, 4:00 pm to 6:00 pm, click "Add". The date card shows under Event Dates.

#### [3.5] Note and publish
**Say:** Write an **Event Note**; parents see it when booking. Turn on **Enable Booking Notes ?** to keep notes on each meeting.
**Show:** Type a short note. Turn on Enable Booking Notes ?.

#### [3.5a] Publish
**Say:** Check the dates, then tap **Save & Publish**. Every parent in that class section is told at once, by email and app notification.
**Show:** Spotlight the date card, then click "Save & Publish". The interview appears in Interview Details.

### 4. Remind parents
#### [4.1] Send Reminder
**Say:** Open **Reminders**, select the interview, and tap **Send Reminder**.
**Show:** Click the "Reminders" tab. Select the Bilal Hussain row. Click "Send Reminder": the "Reminder Send" message shows.

#### [4.2]
**Say:** Every parent in that class section gets a reminder with the interview dates, by email, text message and app notification.
**Show:** Hold on the list.

### 5. Manage bookings
#### [5.1] Manage Booking
**Say:** **Manage Booking** shows every slot. Choose the **Event Name**, **Teacher Name** and **Interview Slot** to see who's coming.
**Show:** Click the "Manage Booking" tab. Pick the event, the teacher and a slot. The grid shows Time, Date, Status, Parent Name and Student Name.

#### [5.2] Book for a parent
**Say:** Each slot is **Booked** or **Free**. To book for a parent, select a free slot, tap **Add Booking**, choose the student and parent, and tap **Save**.
**Show:** Select a Free row, click "Add Booking". In "Booking" pick a student and parent, click "Save". The row turns Booked.

#### [5.3] Notes after the meeting
**Say:** After a meeting, select the booking and tap **Edit**. Mark who attended, add **Teacher Comments** and **Next Steps**, and tap **Save**.
**Show:** Select a Booked row, click "Edit". Tap "P" under Interview summary, type in Teacher Comments and Next Steps, click "Save".

### 6. Teachers and parents
#### [6.1]
**Say:** Teachers open the same page from their **Teacher Portal**, to send reminders and manage bookings for their own interviews. Parents book their slot from the Parent Portal.
**Show:** Quick cut to the teacher (side panel: "Signed in as: Bilal Hussain, a teacher"): Sidebar → Teacher Portal → Parent Teacher Interview, showing the Manage Booking, Reminders and Interview Details tabs.

### 7. Next
#### [7.1] Close
**Say:** Your interview evening is set up and parents can book. Next, video 14.4: Report cards and interview bookings, and video 10.1: The teacher portal and the teacher app home.
**Show:** End card with two tiles: "14.4 Report cards and interview bookings" and "10.1 The teacher portal and the teacher app home".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-06 · panel (user, director, writer, PM, PO) · 4 changes: new [3.5a] says Save & Publish tells every parent in the section at once by email and app notification (InterviewController.cs 567, MadressahNotificationService.cs 2347-2400), [6.1] "Signed in as" label, [7.1] end tiles by number and title (no "take a tour" idiom); demo names from the Maple Grove demo world
- 2026-11-03 · manager · decisions via chat · 14.4 renamed 'Report cards and interview bookings' (fees cut): end-card tile updated
- 2026-11-03 · critic · 2 changes: [4.2] reminders by email, text message and app notification (validator fact); [7.1] Say now names both end-card tiles
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes (tabs, Manage Interview Event, Manage Interview, Event Date, Send Reminder, Booking, Interview summary confirmed; reminder also goes by text message)

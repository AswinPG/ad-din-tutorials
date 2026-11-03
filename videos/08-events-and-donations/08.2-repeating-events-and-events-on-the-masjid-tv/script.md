---
id: "08.2"
title: Repeating events and events on the masjid TV
target: 3:45
prereq:
  - "08.1"
status: scripted
flags:
  - "The occurrence popup's option reads \"Just this occurence\" (typo in the app); scripted as shown, not bolded in narration."
---

# 08.2 Repeating events and events on the masjid TV

## Goal
Make an event repeat daily, weekly, monthly or yearly, choose whether it shows on the masjid's prayer-times TV, and edit or delete one date or the whole series.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Repeat rules, delete one or the whole series, “Display This Event On Prayer Times Large TV”

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Masjid Admin account with home masjid "Masjid Al-Noor" (Premium)
- New event typed on camera: public "Tafsir Circle", category Religion, next Friday 8:00 PM to 9:00 PM, Repeat Weekly, Repeat Ends on the last day of next month, Display This Event On Prayer Times Large TV on, with a tall 960 × 1080 poster for Image for Prayer Dashboard
- After saving, the Events list shows the weekly "Tafsir Circle" dates
- Masjid Al-Noor's Large Display (TV) showing the "Tafsir Circle" poster in its events area, recorded from the demo display page

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Events that come back
#### [1.1] Opening
**Say:** A weekly Tafsir circle or a monthly family night shouldn't need a new event every time. In this video, you make an event repeat and show it on your masjid's TV screen.
**Show:** Title card: "Repeating events and events on the masjid TV".

#### [1.2]
**Say:** Start a new event as usual, with its title, type, category, date and venue. Here, they're already filled in.
**Show:** Sidebar → Events → Add New Event. The form with "Tafsir Circle", Public, Religion, next Friday 8:00 PM to 9:00 PM already filled in.

### 2. Set the repeat
#### [2.1] Repeat
**Say:** Under **Event Duration**, open **Repeat**. Choose **Daily**, **Weekly**, **Monthly** or **Yearly**. Each date copies the first one's times.
**Show:** Open the Repeat list (it starts on Never); choose Weekly.

#### [2.2] The rule
**Say:** One rule: each date must end before the next one starts. A weekly event can't last longer than a week, or you'll see this message.
**Show:** Briefly set the end date eight days later: the red message "Event's duration should be shorter than repeat interval" shows under Repeat. Put the end time back to 9:00 PM the same day; the message goes.
**Caption:** Each date must end before the next one starts.

#### [2.3] When it stops
**Say:** With **Repeat Ends** on, pick the last date in **Repeat End Date**. Turn it off and the event keeps repeating with no end.
**Show:** Spotlight the Repeat Ends switch (on). Click Repeat End Date; pick the last day of next month.

### 3. Show it on the masjid TV
#### [3.1] The TV switch
**Say:** Next, **Display This Event On Prayer Times Large TV**. It's on for every new event. Leave it on to show this event on your masjid's prayer-times screen.
**Show:** Scroll to the card. Spotlight the switch and its note "Display this event on the masjid dashboard screen".

#### [3.2] What shows
**Say:** The TV shows public events coming up in the next month. Private events never appear there.
**Show:** Spotlight the Public / Private switch with Public selected.

#### [3.3] The TV picture
**Say:** The screen uses **Image for Prayer Dashboard**, a tall poster. If you skip it, the TV uses the **Image for Mobile/Web** picture instead.
**Show:** Upload the tall poster to the "Image for Prayer Dashboard" tile.

#### [3.4] Save
**Say:** Tap **Save & Publish**. Every weekly date now shows in your events list.
**Show:** Click "Save & Publish". Toast "Event Added Successfully". The Events page lists the "Tafsir Circle" dates; spotlight two cards with consecutive Friday date badges.

#### [3.5]
**Say:** And here it is on the masjid's TV, between the prayer times.
**Show:** Cut to the demo Large Display with the "Tafsir Circle" poster in its events area. Hold for two seconds.

### 4. Change one date or all of them
#### [4.1] Edit
**Say:** To change a repeating event, open the menu on its card and tap **Edit**.
**Show:** On a "Tafsir Circle" card, click the three-dot menu; spotlight Edit and Delete; click Edit. The Manage Event page opens.

#### [4.2]
**Say:** Make your change and tap **Save & Publish**. Ad-Din asks whether to change just this date or every date. Pick one and tap **Save**.
**Show:** Change the description. Click "Save & Publish". The popup "Do you want to edit all occurrences of this event or just this one?" appears; spotlight both options, choose "Edit all", click Save.
**Caption:** Choose just this date or Edit all, then tap Save.

### 5. Delete one date or the series
#### [5.1] Delete
**Say:** To remove it, open the card's menu and tap **Delete**.
**Show:** Three-dot menu on a "Tafsir Circle" card → Delete. The "Delete Event?" box opens.

#### [5.2]
**Say:** Choose **Delete Only This Event** to cancel one date, or **Delete All Event Series** to remove every date.
**Show:** Spotlight the two options; click "Delete Only This Event".

#### [5.3]
**Say:** The box to tell followers by email and push notification is already ticked. Untick it to delete quietly, then tap **Yes**.
**Show:** Spotlight the ticked "Notify followers via Email & Push Notification" box; leave it ticked. Click Yes. That one card disappears; the other Fridays stay.

### 6. Next
#### [6.1] Close
**Say:** Your weekly event is set, and it shows on the masjid TV. To set up the TV screens themselves, see the prayer-times display videos.
**Show:** End card with two tiles: "04.4 Prayer times on a TV: basic displays" and "04.6 Premium displays, part 2: content".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · critic · 3 changes: [1.1] "halaqa" (unexplained, not an app term) -> Tafsir circle, matches the demo; [1.2] no longer assumes 08.1 was watched; [3.3] "mobile picture" named by its label as in 08.1
- 2026-11-03 · validator · checked against master d36d69ed8 · 1 fix: [5.3] the notify box starts ticked (eventNotify = true), so no tick step

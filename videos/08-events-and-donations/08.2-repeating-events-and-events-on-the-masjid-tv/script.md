---
id: "08.2"
title: Repeating events and events on the masjid TV
target: 5:30
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
- Why repeat: one event keeps every date together
- Monthly and Yearly repeat on the same date; how long each kind of event can last; no end date
- When to turn the TV switch off
- The Events calendar marks days with events; tap a day to filter
- Editing sends an update to the people who were told
- Delete from the event page too; Delete All Event Series is picked first; check the notify box each time

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Masjid Admin account with home masjid "Maple Grove Masjid" (Premium)
- New event typed on camera: public "Tafsir Circle", category Religion, next Friday 8:00 PM to 9:00 PM, Repeat Weekly, Repeat Ends on the last day of next month, Display This Event On Prayer Times Large TV on, with a tall 960 × 1080 poster for Image for Prayer Dashboard
- After saving, the Events list shows the weekly "Tafsir Circle" dates, and the month calendar on the right marks each Friday
- Maple Grove Masjid's Large Display (TV) showing the "Tafsir Circle" poster in its events area, recorded from the demo display page

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->


#### [1.1a] Why repeat
**Say:** A repeating event keeps every date together. You fill in the form once, each date shows in people's events list, and you can change every date in one go.
**Show:** Card: one "Tafsir Circle" form on the left, arrows to four Friday event cards on the right.
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


#### [2.1a] Monthly and Yearly
**Say:** **Monthly** repeats on the same date each month, such as the 13th, not on the same weekday. **Yearly** repeats on the same date each year.
**Show:** Spotlight Monthly and Yearly in the open Repeat list; keep Weekly selected.
#### [2.2] The rule
**Say:** One rule: each date must end before the next one starts. A weekly event can't last longer than a week, or you'll see this message.
**Show:** Briefly set the end date eight days later: the red message "Event's duration should be shorter than repeat interval" shows under Repeat. Put the end time back to 9:00 PM the same day; the message goes.
**Caption:** Each date must end before the next one starts.


#### [2.2a]
**Say:** The same rule applies to the others. A daily event can last up to one day, a monthly event less than a month, and a yearly event less than a year.
**Show:** Card: "Daily: up to 1 day · Weekly: up to 7 days · Monthly: less than a month · Yearly: less than a year".
**Caption:** Daily: up to one day. Weekly: up to seven days. Monthly: less than a month. Yearly: less than a year.
#### [2.3] When it stops
**Say:** With **Repeat Ends** on, pick the last date in **Repeat End Date**. Turn it off and the event keeps repeating with no end.
**Show:** Spotlight the Repeat Ends switch (on). Click Repeat End Date; pick the last day of next month.


#### [2.3a]
**Say:** The last date must be after the first event ends. If you set no end, Ad-Din keeps adding new dates ahead of time, until you change or delete the event.
**Show:** Spotlight Repeat End Date with the chosen date. Toggle Repeat Ends off and on again to show the date box can't be used while it's off.
### 3. Show it on the masjid TV
#### [3.1] The TV switch
**Say:** Next, **Display This Event On Prayer Times Large TV**. It's on for every new event. Leave it on to show this event on your masjid's prayer-times screen. A premium display also needs its own **Events** switch on.
**Show:** Scroll to the card. Spotlight the switch and its note "Display this event on the masjid dashboard screen". Small inset: a premium display's Contents & Events panel with the Events switch on (as in 04.6 [3.1]).

#### [3.2] What shows
**Say:** The TV shows public events coming up in the next month. Private events never appear there.
**Show:** Spotlight the Public / Private switch with Public selected.


#### [3.2a] When to turn it off
**Say:** Turn the switch off for an event that doesn't belong on the screen in the prayer hall, such as a committee meeting. It still shows in the app and on your website.
**Show:** Spotlight the switch; toggle it off, then on again for "Tafsir Circle".
#### [3.3] The TV picture
**Say:** The screen uses **Image for Prayer Dashboard**, a tall poster. If you skip it, the TV uses the **Image for Mobile/Web** picture instead.
**Show:** Upload the tall poster to the "Image for Prayer Dashboard" tile.

#### [3.4] Save
**Say:** Tap **Save & Publish**. Every weekly date now shows in your events list.
**Show:** Click "Save & Publish". Toast "Event Added Successfully". The Events page lists the "Tafsir Circle" dates; spotlight two cards with consecutive Friday date badges.


#### [3.4a] The calendar
**Say:** The calendar on the right marks every day that has an event. Tap a day to see only its events. Tap it again to see them all.
**Show:** Spotlight the marked Fridays in the month calendar. Click one: the list shows that day's "Tafsir Circle". Click it again: the full list returns.
#### [3.5]
**Say:** And here it is on the masjid's TV screen, beside the prayer times.
**Show:** Cut to the demo Large Display (recorded from the dev environment, as decided for TV pages) with the "Tafsir Circle" poster in its events area. Hold for two seconds.

### 4. Change one date or all of them
#### [4.1] Edit
**Say:** To change a repeating event, tap the three-dot menu on its card, then tap **Edit**.
**Show:** On a "Tafsir Circle" card, click the three-dot menu; spotlight Edit and Delete; click Edit. The Manage Event page opens.

#### [4.2]
**Say:** Make your change and tap **Save & Publish**. Ad-Din asks whether to change just this date or every date. Pick one and tap **Save**.
**Show:** Change the description. Click "Save & Publish". The popup "Do you want to edit all occurrences of this event or just this one?" appears; spotlight both options, choose "Edit all", click Save.
**Caption:** Choose just this date or Edit all, then tap Save.


#### [4.2a] Who hears about it
**Say:** When you save a change, the people who were told about the event get an update, by the channels ticked under **Notification Channel**.
**Show:** On the Manage Event page (before saving), spotlight the Notification Channel chips.
### 5. Delete one date or the series
#### [5.1] Delete
**Say:** To remove it, tap the card's three-dot menu, then tap **Delete**. You can also open the event and tap **Delete** there.
**Show:** Three-dot menu on a "Tafsir Circle" card → Delete. The "Delete Event?" box opens.

#### [5.2]
**Say:** **Delete All Event Series** is picked first, and removes every date. To cancel just one date, choose **Delete Only This Event**.
**Show:** Spotlight the two options; click "Delete Only This Event".

#### [5.3]
**Say:** The box to tell followers by email and push notification is already ticked. Untick it if you don't want to tell anyone. Then tap **Yes**.
**Show:** Spotlight the ticked "Notify followers via Email & Push Notification" box; leave it ticked. Click Yes. That one card disappears; the other Fridays stay.


#### [5.3a]
**Say:** Check that box each time. If you close the box without deleting, it's unticked the next time you open it.
**Show:** Open the Delete box on another card; click No. Open it again: the notify box is now unticked. Spotlight it, then click No.
### 6. Next
#### [6.1] Close
**Say:** Your weekly event is set, and it shows on the masjid TV. Next, video 04.4: Prayer times on a TV: basic displays. Or video 04.6: Premium displays, part 2: posters, events and ticker.
**Show:** End card with two tiles: "04.4 Prayer times on a TV: basic displays" and "04.6 Premium displays, part 2: posters, events and ticker".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 2:24 → 4:00 narration, 7 scenes added: [1.1a] why repeat, [2.1a] Monthly and Yearly keep the date, [2.2a] the rule for each repeat, [2.3a] last date and no end, [3.2a] when to turn the TV switch off, [3.4a] the calendar filter, [4.2a] edits send an update, [5.3a] the notify box is unticked after a cancel; [5.1] Delete on the event page, [5.2] which delete option is picked first
- 2026-11-06 · panel (user, director, writer, PM, PO) · 7 changes: [3.1] says a premium display also needs its Events switch (04.6), with an inset; [3.5] plainer wording, Show notes the dev recording; [4.1] and [5.1] name the three-dot menu; [5.3] no idiom ("delete quietly"); [6.1] names both end tiles by number; demo names match the Maple Grove demo world
- 2026-11-03 · manager · decisions via chat · 04.6 renamed 'Premium displays, part 2: posters, events and ticker' (split with 04.11): end-card tile updated
- 2026-11-03 · critic · 3 changes: [1.1] "halaqa" (unexplained, not an app term) -> Tafsir circle, matches the demo; [1.2] no longer assumes 08.1 was watched; [3.3] "mobile picture" named by its label as in 08.1
- 2026-11-03 · validator · checked against master d36d69ed8 · 1 fix: [5.3] the notify box starts ticked (eventNotify = true), so no tick step

---
id: "10.1"
title: The teacher portal and the teacher app home
target: 3:45
prereq:
  - "05.6"
status: scripted
audience:
  - Teacher
flags:
  - "en.json has a broken character (U+FFFD) in some app-home strings, e.g. dash.mobile.attn.clear 'All caught up � nothing needs you right now.' Keep the demo rows non-empty so the empty state never shows; fix the strings in the app"
---

# 10.1 The teacher portal and the teacher app home

## Goal
Find your teaching tools in the Teacher Portal on the web, and use the app home's quick actions, "Needs your attention" list and daily routine.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Portal tiles, “Needs your attention”, timetable, quick actions

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo madrasah "Al-Noor Madrasah" (Premium) with Academic Activity and Class Announcements switched on, current term "Autumn Term"
- Teacher account Yusuf Patel, who is also a parent of one enrolled child (so the app home shows the Teacher and Parent tabs and the Madrasah hub shows Teachers Portal)
- Class timetable for today with four periods for Yusuf (for example Quran, Fiqh, a break, Arabic), so My Routine shows Now and Next tags
- Today: two of Yusuf's class sections without attendance, three submitted Hifz entries waiting for review, five turned-in academic activities to grade (every "Needs your attention" row has a count)
- Quick actions already pinned: Attendance, Quran Hifz Assignments, Academic Activity
- One recent class announcement
- Web: signed in as Yusuf in the browser. App: the same account in a phone frame

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Your teaching home
#### [1.1] Opening
**Say:** This video is for teachers. You'll see where your teaching tools live on the web and in the Ad-Din app, and what the app shows you each day.
**Show:** Title card: "The teacher portal and the teacher app home".

#### [1.2]
**Say:** Your madrasah admin has already added you as a teacher and built the class timetable, so your classes are ready.
**Show:** Opening card. Web dashboard on the left, app home in a phone frame on the right.

### 2. The Teacher Portal on the web
#### [2.1] Open the portal
**Say:** On the web, open the sidebar and expand **Teacher Portal**. Everything you need for your classes is listed here.
**Show:** Web. Sidebar → Teacher Portal, expanded. Slow pan down the list.

#### [2.2]
**Say:** Day to day you'll mostly use **Attendance**, **Quran Hifz Assignments** and **Academic Activity**. Each one has its own video in this series.
**Show:** Spotlight Attendance, Quran Hifz Assignments and Academic Activity in turn.

#### [2.3]
**Say:** You'll also find **Class Routine**, **Parent Teacher Interview**, **Library** and **Recognition**. Some items only appear when your madrasah switches that feature on.
**Show:** Spotlight Class Routine, Parent Teacher Interview, Library, Recognition.

### 3. Portal tiles in the app
#### [3.1] Madrasah tile
**Say:** In the Ad-Din app, the home screen has tiles. Tap **Madrasah**, then **Teachers Portal**.
**Show:** Phone frame, app home. Tap the "Madrasah" tile; the portals page shows Introduction, Parent/Guardian Portal and Teachers Portal. Tap "Teachers Portal".

#### [3.2]
**Say:** The same list as the web opens, one row per tool. Tap a row to open it. If you only teach, the **Madrasah** tile opens this list straight away.
**Show:** The Teacher Portal list. Tap "Attendance" to show it opens, then go back to the home screen.
**Caption:** The same list as the web opens. Tap a row to open it. If you only teach, Madrasah opens this list straight away.

### 4. Quick actions
#### [4.1] The Teacher tab
**Say:** At the top of the home screen you see your name and how many classes you have today. If you're also a parent, tap the **Teacher** tab.
**Show:** Identity card with "Assalamu alaikum", Yusuf's name and "4 classes today". Tap the "Teacher" tab.

#### [4.2] Shortcuts
**Say:** **Quick actions** are shortcuts to the pages you use most. Tap one to jump straight in.
**Show:** Spotlight the Quick actions card with its chips: Attendance, Quran Hifz Assignments, Academic Activity.

#### [4.3] Change them
**Say:** To change them, tap the pen. In **Pin quick actions**, search or scroll, tap **Pin** next to a page, then tap **Done**.
**Show:** Tap the pen. The sheet opens; type "Library" in "Search modules", tap "+ Pin" so it shows "Pinned", tap "Done". The new chip appears.

### 5. Needs your attention
#### [5.1] What's waiting
**Say:** **Needs your attention** lists what's waiting for you: **Attendance not taken**, **Hifz entries pending**, and **Academic activities to grade**.
**Show:** Scroll to the "Needs your attention" card. Spotlight each row and its count.

#### [5.2]
**Say:** Each row shows a count. Tap a row, and Ad-Din opens the right page, ready to work.
**Show:** Tap "Attendance not taken": the Attendance page opens. Go back.

#### [5.3]
**Say:** Rows only appear when something needs doing, so a short list is good news.
**Show:** Hold on the card.

### 6. My Routine
#### [6.1] Today's timetable
**Say:** **My Routine** is your timetable for the day, taken from the class timetable. **Now** and **Next** show where you are.
**Show:** Scroll to "My Routine". Spotlight the "Now" and "Next" tags.

#### [6.2]
**Say:** Use the arrows to look at other days, and tap the day name to come back to **Today**.
**Show:** Tap the right arrow twice (the day name changes), then tap the day name: it returns to "Today". Record on a Sunday to Thursday: the arrows stop at Saturday.

#### [6.3]
**Say:** Below it, **Class Announcements** shows your latest class posts, when your madrasah uses them.
**Show:** Scroll to the Class Announcements card. Spotlight it briefly.

### 7. Next
#### [7.1] Your home is ready
**Say:** That's your teaching home: the Teacher Portal on the web, and in the app your quick actions, your to-do list and your routine.
**Show:** Split screen again: web Teacher Portal and app home.

#### [7.2] Close
**Say:** Next, take attendance for your class, or record today's Hifz progress.
**Show:** End card with two tiles: "10.2 Take class attendance" and "10.4 Record daily Hifz progress".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · validator · checked against master d36d69ed8 · 1 fix: [6.2] recording-day note (routine arrows run Sunday to Saturday and grey out at the ends); portal list, hub, quick actions, attention rows and routine confirmed

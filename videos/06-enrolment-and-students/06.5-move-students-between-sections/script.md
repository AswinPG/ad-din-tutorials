---
id: "06.5"
title: Move students between sections
target: 3:00
prereq:
  - "06.4"
status: scripted
flags:
  - "Who needs a seat? (decided 2026-11-03: intended): Admin Portal → Class Section opens only when the admin has Premium themselves (the page guard checks the user's own Premium). The demo admin must have Premium."
---

# 06.5 Move students between sections

## Goal
Add students to a section and move them from one section to another in the same class.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Add students, Move students

## Demo data
- Demo madrasah "Maple Grove Madrasah"; the demo admin (Yusuf Rahman) has Premium
- Class "Weekend Quran" with "Level 1" (capacity 20, 15 students) and "Level 2" (capacity 20, 17 students, so it shows Nearly full)
- Two active students not yet in Weekend Quran ("Ibrahim Nasser" and "Layla Haddad"), to add on camera; their linked parent must have a seat, or adding fails with "Students cannot be enrolled without a subscription."
- Two students in Level 1 to move to Level 2 ("Zaid Karim" and "Hana Mirza")

## Script

### 1. Before you start
#### [1.1] Opening
**Say:** In this video for madrasah admins, you'll add students to a section, then move students from one section to another in the same class.
**Show:** Title card: "Move students between sections".

#### [1.2]
**Say:** Your class, its sections and your students are already in Ad-Din.
**Show:** Opening card from You'll need.

### 2. Open the section
#### [2.1] Class Section
**Say:** In the sidebar, open **Admin Portal**, then **Class Section**. Under **Select Class**, choose the class.
**Show:** Sidebar → Admin Portal → Class Section. Pick "Weekend Quran" in Select Class. The section cards appear.

#### [2.2]
**Say:** Each card shows how many students a section has and how many it can hold. **Nearly full** warns you before a section is full. Tap a section to see its students.
**Show:** Spotlight "15 / 20" on Level 1, then the "Nearly full" pill on Level 2. Click "Level 1"; its student list opens on the right.

### 3. Add students
#### [3.1] Add students
**Say:** Tap **Add students**. The list shows active students who aren't in this class yet. A student can join only when a linked parent has one of your organisation's Premium seats.
**Show:** Click "Add students". The "Add students" sheet: "Students not yet in Weekend Quran · adding to Level 1".

#### [3.2]
**Say:** Tap each student you want, or search by name. The button at the bottom shows how many you picked; tap it to add them.
**Show:** Tap "Ibrahim Nasser" and "Layla Haddad"; ticks appear. Click "Add 2 students". The count on Level 1 goes up to 17.

### 4. Move students
#### [4.1] Select students
**Say:** To move students, tap **Remove students** first. This lets you select students. Nothing is removed yet.
**Show:** Click "Remove students". The hint appears: "Tap students to select them, then choose Remove or Move below".

#### [4.2]
**Say:** Tap the students you want to move, then tap **Move to…** in the bar at the bottom.
**Show:** Tap "Zaid Karim" and "Hana Mirza". The bar shows "2 selected"; click "Move to…".

#### [4.3] Pick the new section
**Say:** **Move students** lists the other sections and how much room each has. Ad-Din warns you if a move will exceed capacity. Tap the section you want.
**Show:** The "Move students" sheet: "Moving 2 students from Level 1". Spotlight Level 2's open seats. Click "Level 2".

#### [4.4]
**Say:** Ad-Din moves them and confirms. Both section counts update straight away.
**Show:** Toast "Successfully Updated." Spotlight the new counts on Level 1 and Level 2.

### 5. Next
#### [5.1] Done
**Say:** Your students are now in the right sections. Teachers see the change in their class lists too.
**Show:** Click "Level 2"; Zaid Karim and Hana Mirza are in the list.

#### [5.2]
**Say:** Next, video 10.2: Take class attendance, and video 16.1: Promote students to the next year, to move everyone up at the end of the year.
**Show:** End card with two tiles: "10.2 Take class attendance" and "16.1 Promote students to the next year".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-06 · panel (user, director, writer, PM, PO) · 4 changes: [3.1] says a student can join only when a linked parent has one of your organisation's Premium seats (ClassController.cs 987-998, "Students cannot be enrolled without a subscription."), [2.2] "is full" (no phrasal verb), [4.1] "lets you select students", demo data and Show names use the Maple Grove demo world (Weekend Quran Level 1 and 2, world students)
- 2026-11-03 · manager · decisions via chat · 'Who needs a seat?' decided (own-Premium check is intended): flag wording updated; script unchanged
- 2026-11-03 · critic · 6 changes: [1.1] second-person opening, no "reshuffle"; [2.3] merged into [2.2] (thin scene); [3.2] count-button wording; [4.1] no "Don't worry"; [4.3] "open seats" said as room, so it isn't confused with Premium seats; [5.2] end card by number and title
- 2026-11-03 · validator · checked against master d36d69ed8 · 1 fix: demo data, added students need a linked parent with a seat

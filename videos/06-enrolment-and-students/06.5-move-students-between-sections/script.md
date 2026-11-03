---
id: "06.5"
title: Move students between sections
target: 3:00
prereq:
  - "06.4"
status: scripted
flags:
  - "Who needs a seat? (open): Admin Portal → Class Section opens only when the admin has Premium themselves (the page guard checks the user's own Premium). The demo admin must have Premium."
---

# 06.5 Move students between sections

## Goal
Add students to a section and move them from one section to another in the same class.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Add students, Move students

## Demo data
- Demo madrasah "Al-Noor Madrasah"; the demo admin has Premium
- Class "Maktab Level 1" with "Section A" (capacity 20, 15 students) and "Section B" (capacity 20, 17 students, so it shows Nearly full)
- Two active students not yet in Maktab Level 1 (for example "Yahya Ali" and "Sara Ali"), to add on camera; their linked parent must have a seat, or adding fails with "Students cannot be enrolled without a subscription."
- Two students in Section A to move to Section B (for example "Hamza Rahman" and "Ilyas Noor")

## Script

### 1. Before you start
#### [1.1] Opening
**Say:** Classes often need a reshuffle. In this video you add students to a section, then move students from one section to another.
**Show:** Title card: "Move students between sections".

#### [1.2]
**Say:** Your class, its sections and your students are already in Ad-Din.
**Show:** Opening card from You'll need.

### 2. Open the section
#### [2.1] Class Section
**Say:** In the sidebar, open **Admin Portal**, then **Class Section**. Under **Select Class**, choose the class.
**Show:** Sidebar → Admin Portal → Class Section. Pick "Maktab Level 1" in Select Class. The section cards appear.

#### [2.2]
**Say:** Each card shows how many students a section has and how many it can hold. **Nearly full** warns you before a section runs out of room.
**Show:** Spotlight "15 / 20" on Section A, then the "Nearly full" pill on Section B.

#### [2.3]
**Say:** Tap a section to see its students.
**Show:** Click "Section A"; its student list opens on the right.

### 3. Add students
#### [3.1] Add students
**Say:** Tap **Add students**. The list shows active students who aren't in this class yet.
**Show:** Click "Add students". The "Add students" sheet: "Students not yet in Maktab Level 1 · adding to Section A".

#### [3.2]
**Say:** Tap each student you want, or search by name. Then tap the button at the bottom to add them.
**Show:** Tap "Yahya Ali" and "Sara Ali"; ticks appear. Click "Add 2 students". The count on Section A goes up to 17.

### 4. Move students
#### [4.1] Select students
**Say:** To move students, tap **Remove students** first. This turns on selecting. Don't worry, nothing is removed yet.
**Show:** Click "Remove students". The hint appears: "Tap students to select them, then choose Remove or Move below".

#### [4.2]
**Say:** Tap the students you want to move, then tap **Move to…** in the bar at the bottom.
**Show:** Tap "Hamza Rahman" and "Ilyas Noor". The bar shows "2 selected"; click "Move to…".

#### [4.3] Pick the new section
**Say:** **Move students** lists the other sections, with their open seats. Ad-Din warns you if a move will exceed capacity. Tap the section you want.
**Show:** The "Move students" sheet: "Moving 2 students from Section A". Spotlight Section B's open seats. Click "Section B".

#### [4.4]
**Say:** Ad-Din moves them and confirms. Both section counts update straight away.
**Show:** Toast "Successfully Updated." Spotlight the new counts on Section A and Section B.

### 5. Next
#### [5.1] Done
**Say:** Your students are now in the right sections. Teachers see the change in their class lists too.
**Show:** Click "Section B"; Hamza Rahman and Ilyas Noor are in the list.

#### [5.2]
**Say:** Next, see how teachers take attendance for their class, and how to move everyone up at the end of the year.
**Show:** End card with two tiles: "10.2 Take class attendance" and "16.1 Promote students to the next year".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · validator · checked against master d36d69ed8 · 1 fix: demo data, added students need a linked parent with a seat

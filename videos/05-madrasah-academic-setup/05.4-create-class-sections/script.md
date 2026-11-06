---
id: "05.4"
title: Create class sections
target: 3:15
prereq:
  - "05.3"
status: scripted
flags:
  - "Who needs a seat? (decided 2026-11-03: intended): Admin Portal → Class Section opens only when the admin has Premium themselves (the page guard checks the user's own Premium, not the organisation's seats). The demo admin must have Premium."
---

# 05.4 Create class sections

## Goal
Add sections to a class, each with its own class teacher and capacity, and read a section's student list.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Sections
- Active and inactive students in a section

## Demo data
- Demo madrasah "Maple Grove Madrasah"; the demo admin has Premium
- Class "Hifz Boys" (from 05.3) with no sections yet
- Teacher "Bilal Hussain" in the madrasah, to be the class teacher
- New section added on camera: "Hifz A", capacity 20
- Class "Maktab Level 1" with "Section A" (capacity 20, 15 students, one of them inactive, for example "Yahya Saleh") and "Section B" (capacity 20, 17 students, so it shows Nearly full)
- Student contact details are demo data only

## Script

### 1. Before you start
#### [1.1] Opening
**Say:** For madrasah admins: in this video you'll add sections to a class and look inside one. A section is a group of students in a class, with its own teacher and its own limit.
**Show:** Title card: "Create class sections".

#### [1.2]
**Say:** Your class is already created. Every class needs at least one section before students can join it.
**Show:** Opening card from You'll need.

### 2. Open Class Section
#### [2.1] Pick the class
**Say:** In the sidebar, open **Admin Portal**, then **Class Section**. Under **Select Class**, choose your class.
**Show:** Sidebar → Admin Portal → Class Section. Pick "Hifz Boys" in Select Class.

#### [2.2]
**Say:** A new class has no sections yet. Tap **Add**.
**Show:** The message "No sections in this class yet". Click "Add".

### 3. Add a section
#### [3.1] Add Class Section
**Say:** In **Add Class Section**, the class is already filled in. Choose the **Class Teacher** who looks after this section.
**Show:** The "Add Class Section" window; "Hifz Boys" greyed out in Class. Pick "Bilal Hussain" in Class Teacher.

#### [3.2]
**Say:** Type a name under **Enter Class Section**, and set the **Student Capacity in this Section**. Every box is required.
**Show:** Type "Hifz A". Type 20 in the capacity box.

#### [3.3]
**Say:** Tap **Save**. The new section appears as a card.
**Show:** Click "Save". A confirmation message; the "Hifz A" card shows "0 / 20" and "Open".

### 4. Read the section cards
#### [4.1] How full it is
**Say:** In a class with students, each card shows how many students a section has and how many it can hold. It says **Open** while there's room, and **Nearly full** when it's eighty percent full. If it's too full, it shows by how many.
**Show:** Switch Select Class to "Maktab Level 1". Spotlight "15 / 20 Open" on Section A, then "Nearly full" on Section B.

#### [4.2] Section options
**Say:** Tap the three dots on a card for more: **View students**, **Add students**, **Edit Class Section** to rename it or change the teacher or capacity, and **Delete**.
**Show:** Click the three dots on Section A. The options sheet; spotlight each option. Close it.

### 5. Look inside a section
#### [5.1] The student list
**Say:** Tap a card to see its students, with each roll number and **Student ID**. Tap a student to see their contact details.
**Show:** Click "Section A"; the student list opens on the right. Click a student; the contact panel opens.

#### [5.2] Active and inactive
**Say:** Students who are no longer active stay in the list, marked **Inactive**, so you can still see who was in the section. Contacts show for active students only.
**Show:** Scroll to "Yahya Saleh" with the "Inactive" badge. Click it: "Contacts and details show for active students only."

#### [5.3]
**Say:** To fill a section, use **Add students**. Video 06.5 shows how.
**Show:** Spotlight "Add students" at the top of the list.

### 6. Next
#### [6.1] Done
**Say:** Your class now has its sections, each with a teacher and a capacity.
**Show:** Back to "Hifz Boys": the "Hifz A" card.

#### [6.2]
**Say:** Next, video 05.5: Add subjects. To fill sections with students, see video 06.4: Add students and parents yourself, and video 06.5: Move students between sections.
**Show:** End card with three tiles: "05.5 Add subjects", "06.4 Add students and parents yourself" and "06.5 Move students between sections".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-06 · panel (user, director, writer, PM, PO) · 5 changes: [3.2] "Every box is required"; [4.1] Say mentions the switch to a class with students, plain "eighty percent full" and "too full"; [5.1] "contact details"; demo names match the demo world (Maple Grove, Bilal Hussain, Yahya Saleh)
- 2026-11-03 · manager · decisions via chat · 'Who needs a seat?' decided (own-Premium check is intended): flag wording updated; script unchanged
- 2026-11-03 · manager · decisions via chat · Planned features not in the app dropped: Alumni list removed from Covers ('Active and inactive students in a section', as [5.2] shows), flag removed
- 2026-11-03 · critic · 3 changes: [1.1] second-person opening, task first; [5.3] points to video 06.5 by number; [6.2] every end-card tile named by number and title
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes

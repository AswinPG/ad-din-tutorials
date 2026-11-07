---
id: "12.2"
title: Write comments and mark reports ready
target: 3:45
prereq:
  - "12.1"
status: scripted
---

# 12.2 Write comments and mark reports ready

## Goal
Open your class's report cards, write each student's comment yourself or with AI, and mark each card ready.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Comments, Marked as Ready
- Ad-Din's AI Comment Generator (Write with AI)

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Signed-in demo teacher "Bilal Hussain" at Maple Grove Madrasah, tagged to subjects in "Maktab Level 1" (so Select is unlocked; Report Builder shows "Teacher access")
- Mapped report "Term Report" on the Activities-Based Evaluation template (from 12.1), class "Maktab Level 1", section "A", Term 1 mapped
- Three students in the section, from the demo world: "Zaid Karim", "Hana Mirza", "Ibrahim Nasser", with marks already filled from Academic Activities
- AI comment generator returning a canned demo comment (mocked; no live AI call)

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Before you start
#### [1.1] Opening
**Say:** Before report cards go home, each student needs a comment, and each card needs to be marked ready. In this video for teachers and admins, you'll do both.
**Show:** Title card: "Write comments and mark reports ready".

#### [1.2]
**Say:** Your admin has already mapped the report card to your class, and the marks come in from your Academic Activities.
**Show:** Opening card from You'll need.

### 2. Open your report cards
#### [2.1] Report Builder
**Say:** Go to **Reports**, then **Report Builder**, and tap **Select** beside your report. If you can't tap **Select**, ask your admin to assign you a subject in that class.
**Show:** Sidebar → Reports → Report Builder. Spotlight "Teacher access". Click "Select" on "Term Report".

#### [2.2] Report Card Builder
**Say:** In the **Report Card Builder**, choose your class and section, then the report for this term.
**Show:** Pick "Maktab Level 1" and section "A". Click the "Report 1" card.

#### [2.3]
**Say:** Leave **Add digital signature** ticked, and tap **Start**. Your students are listed on the left, and the first card opens.
**Show:** Spotlight the ticked "Add digital signature". Click "Start". The Students list fills; Zaid Karim's card opens on the right.

### 3. Write the comment
#### [3.1] Edit
**Say:** Scroll down to **Comment**. To write it yourself, tap **Edit**, type your comment, and tap **Save**. A comment can be up to three hundred and fifty characters.
**Show:** Scroll to the comment box. Click "Edit"; the "Edit Comment" window opens. Type two sentences; the counter shows "112/350". Click "Save". Toast "Successfully saved the academic report".

#### [3.2] Write with AI
**Say:** Or tap **Write with AI**. **Ad-Din's AI Comment Generator** opens. It sends the student's results to an AI service, which drafts a comment.
**Show:** Open the next student, Hana Mirza. Click "Write with AI"; "Ad-Din's AI Comment Generator" opens with Student, Grade and Annual Average. The generated comment appears.

#### [3.3]
**Say:** Add your own guidance under **Custom Instructions (Optional)**, and tap **Regenerate** for a new draft. Always read it and change anything that isn't right.
**Show:** Type "mention improvement in Tajweed, keep it formal". Click "Regenerate". Spotlight the note under the comment about checking AI text.

#### [3.4]
**Say:** Tap **Insert** to add it after any existing comment, or **Replace** to swap it in.
**Show:** Hana has no comment yet, so Replace is greyed out. Click "Insert". The comment appears on the card.

### 4. Mark it ready
#### [4.1] Mark As Ready
**Say:** When a card is finished, tap **Mark As Ready**. The button changes to **Ready**, and a tick appears beside the student's name.
**Show:** In the toolbar under THIS REPORT, click "Mark As Ready". It turns to "Ready". Zoom on the tick beside "Hana Mirza" in the Students list.

#### [4.2]
**Say:** While a card is **Ready**, the **Refresh** button can't change it by accident. To make more changes, tap **Ready** again to unmark it.
**Show:** Spotlight "Refresh" in THIS REPORT, then "Ready"; don't click.

#### [4.3]
**Say:** Tap **Save to PDF** to update this student's PDF. Then use the arrows to move to the next student.
**Show:** Click "Save to PDF". Toast "Report saved and PDF updated successfully." Click the next-student arrow.

### 6. Next
#### [6.1] Done
**Say:** Every card with a tick is ready to go home. You and your admin can see how many are done in the **Report Readiness** box on the dashboard.
**Show:** Students list with ticks beside each name. Quick cut to the dashboard's "Report Readiness" box.

#### [6.2] Close
**Say:** Next, video 12.3: Release report cards to parents. To set up a new report card, video 12.1: Map a report card template.
**Show:** End card with two tiles: "12.3 Release report cards to parents" and "12.1 Map a report card template".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-07 · manager · panel decisions, "All recommended" · [3.2] says the student's results go to an AI service
- 2026-11-06 · panel (user, director, writer, PM, PO) · 5 changes: [2.1] says what to do when Select can't be tapped, [4.2] Ready blocks the Refresh button ("Report is marked Ready. Unmark it first to refresh.", report515.functions.component.ts 703) and the Show spotlights instead of a hover, [6.1] teachers see Report Readiness too, [6.2] end tiles by number and title; demo names from the Maple Grove demo world (Bilal Hussain; Maktab Level 1 A; Zaid Karim, Hana Mirza, Ibrahim Nasser)
- 2026-11-03 · manager · decisions via chat · Custom Comments Library cut: chapter 5 ([5.1]-[5.4]) removed, so the video covers only the current flow (Edit, Write with AI, Mark As Ready); Covers, Goal, demo data and flag updated; target 4:45 to 3:45
- 2026-11-03 · critic · 5 changes: [1.1] second-person opening; [4.2] "locked against refreshing" made plain; [6.2] both end-card tiles named by number; fold: [3.2] names Ad-Din's AI Comment Generator, [5.4] adds the app's Use Legacy Comment Bank (Deprecated) switch (Covers + demo data)
- 2026-11-03 · validator · checked against master d36d69ed8 · 4 fixes: [3.1] toast is "Successfully saved the academic report"; [3.4] Insert, not Replace (Replace is greyed when there's no comment yet); [5.2] pick the new library in Select Library before the Folders & Levels menu appears; [5.3] the level's Save is needed to store a variation

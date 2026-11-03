---
id: "10.5"
title: Set up academic activities
target: 4:00
prereq:
  - "05.2"
status: scripted
switch: Academic Activity
platform: Web
---

# 10.5 Set up academic activities

## Goal
Set up weighted categories for a class subject, then create an academic activity in the right term, ready for marking.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Categories, terms, creating activities

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo madrasah "Al-Noor Madrasah" (Premium) with Academic Activity switched on; the demo account is a Madrasah Admin
- Terms "Autumn Term" (current) and "Spring Term" in Terms Management
- Class "Maktab Level 1", section "A", subject "Fiqh", with enrolled demo students
- Categories for that subject at the start: "Homework" (Scored, 30%) and "Tests" (Scored, 50%), so the total shows 80% and "Must equal 100%"; "Quizzes" (Scored, 20%) is added on camera
- Two activities already in the list; "Wudu steps worksheet" (Homework, due inside Autumn Term, weight 10, score out of 10) is created on camera

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Graded work for the term
#### [1.1] Opening
**Say:** Academic activities are the homework, quizzes and tests you grade during a term. Here you'll set up categories, then create your first activity.
**Show:** Title card: "Set up academic activities".

#### [1.2]
**Say:** Your terms and subjects are already in place, and Academic Activity is switched on for your madrasah.
**Show:** Opening card.

### 2. Open Academic Activity
#### [2.1]
**Say:** In the **Admin Portal**, open **Academic Activity**. You'll see two choices: **Category Management** and **Activity Score Management**.
**Show:** Sidebar → Admin Portal → Academic Activity. Spotlight the two rows.

#### [2.2]
**Say:** Teachers have the same page in their **Teacher Portal**, so they can do this for their own classes too.
**Show:** Hold on the two rows.

### 3. Categories
#### [3.1] Pick the subject
**Say:** Open **Category Management**. Choose a **Class**, **Class section** and **Subject** to see its categories.
**Show:** Click "Category Management". In Filters pick "Maktab Level 1", "A", "Fiqh". The Active list shows Homework and Tests.

#### [3.2] Weights
**Say:** Each category carries a weight, and the **Total weight** must reach 100%. Until it does, you'll see **Must equal 100%**.
**Show:** Spotlight the Weight column, then "Total weight 80%" and the "Must equal 100%" pill.

#### [3.3] Add a category
**Say:** Tap **Add New**. Choose the **Category Type**: **Scored**, or **Non - Scored** for work that's simply done or not done.
**Show:** Click "Add New". The Add Category form opens with class, section and subject filled in. Open Category Type; choose "Scored".

#### [3.4]
**Say:** Type the category name and its weight, then tap **Save**, and **OK** to confirm.
**Show:** Type "Quizzes" and weight 20. Click "Save", then "OK" in the Confirmation dialog. The total now reads 100% and the warning disappears.

### 4. Terms
#### [4.1]
**Say:** Every activity belongs to a term, so each term's grades stay separate. The terms come from **Terms Management**.
**Show:** Quick cut: Sidebar → Admin Portal → Terms Management, showing Autumn Term and Spring Term. Back to Academic Activity.

### 5. Create an activity
#### [5.1] Add New
**Say:** Now open **Activity Score Management**, choose the same class, section and subject, and tap **Add New**.
**Show:** Click "Activity Score Management". Pick the three filters; the Activities list loads. Click "Add New": the Add Activity window opens.

#### [5.2] Class & subject
**Say:** In **Class & subject**, choose the **Class**, **Class section** and **Subject** again, then the **Term**. The due date must fall inside this term.
**Show:** Spotlight step 1 (its fields start empty). Pick "Maktab Level 1", "A" and "Fiqh", then "Autumn Term" in Term. Zoom on the hint under Term.

#### [5.3] Activity
**Say:** In **Activity**, type the **Activity Name**, then pick its **Category** and **Due Date**.
**Show:** Type "Wudu steps worksheet". Select "Homework". Pick a due date next week.

#### [5.4] Scoring
**Say:** In **Scoring**, enter the **Weight** and **Score Out Of**. Turn on **Ignore in Calculation** for practice work that shouldn't count.
**Show:** Type 10 and 10. Spotlight the Ignore in Calculation switch; leave it off.

#### [5.5] Extras
**Say:** **Resources & notifications** is optional: a **URL**, a **Note** or files, and **Notify Students and Parents**.
**Show:** Scroll to step 4. Spotlight URL, Note, "Choose files" and the Notify Students and Parents switch; turn the switch on.

#### [5.6] Save
**Say:** Tap **Save**, then **OK**.
**Show:** Click "Save", then "OK" in the Confirmation dialog.

### 6. Next
#### [6.1] Ready to mark
**Say:** Your activity is in the list, with **Assigned**, **Graded** and **Missing** counts for the class.
**Show:** The new row "Wudu steps worksheet". Spotlight the Assigned, Graded and Missing columns.

#### [6.2] Close
**Say:** Next, enter scores for this activity, or create many activities at once from Excel.
**Show:** End card with two tiles: "10.6 Enter activity scores" and "10.7 Import activities and marks from Excel".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · critic · 1 change: [4.1] dropped "set up earlier" (assumes another video)
- 2026-11-03 · validator · checked against master d36d69ed8 · 1 fix: [5.2] Add Activity doesn't carry over the list filters, so class, section and subject are picked again before the term

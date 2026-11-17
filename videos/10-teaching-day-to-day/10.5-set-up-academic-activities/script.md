---
id: "10.5"
title: Set up academic activities
target: 6:00
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
- Why categories and weights; Active and Disabled categories, Edit, Delete, category Status
- The add form filled in from the list filters; only enabled terms offered
- Non-scored categories (no weight or maximum score); URL and file rules; who is notified
- When an activity stops being open (end of its due date) and Missing
- List filters (Category, Term, Marking Status, Mode, Reset filters) and the Duplicate, Edit, Delete and Export buttons; what can't change after creation

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo madrasah "Maple Grove Madrasah" (Premium) with Academic Activity switched on; the demo account Yusuf Rahman is a Madrasah Admin, and teacher Bilal Hussain teaches "Fiqh" in "Maktab Level 1" A (for the Teacher Portal cut in [2.2])
- Terms "Autumn Term" (current) and "Spring Term" in Terms Management
- Class "Maktab Level 1", section "A", subject "Fiqh", with enrolled demo students
- Categories for that subject at the start: "Homework" (Scored, 30%) and "Tests" (Scored, 50%), so the total shows 80% and "Must equal 100%"; "Quizzes" (Scored, 20%) is added on camera
- Two activities already in the list; "Wudu steps worksheet" (Homework, due inside Autumn Term, weight 10, score out of 10) is created on camera
- One disabled category "Class work (old)" in the Disabled list for Fiqh, and a disabled term "Summer Term (old)" that must not appear in the Term list
- One of the two existing activities already has marks, so Delete shows the warning

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Graded work for the term
#### [1.1] Opening
**Say:** In this video for madrasah admins and teachers, you'll set up categories for a subject, then create your first academic activity: the homework, quizzes and tests you grade during a term.
**Show:** Title card: "Set up academic activities".

#### [1.1a] Why
**Say:** Activities feed the marks and the report card. Categories with weights let you decide how much homework, quizzes and tests each count, so every student's term grade is worked out the same, fair way.
**Show:** The Activity Score Management list for Maktab Level 1 A, Fiqh, then the Category Management weights.

#### [1.2]
**Say:** Your terms and subjects are already in place, and Academic Activity is switched on for your madrasah.
**Show:** Opening card.

### 2. Open Academic Activity
#### [2.1]
**Say:** In the **Admin Portal**, open **Academic Activity**. You'll see two choices: **Category Management** and **Activity Score Management**.
**Show:** Sidebar → Admin Portal → Academic Activity. Spotlight the two rows.

#### [2.2]
**Say:** Teachers have the same page in their **Teacher Portal**, so they can do this for their own classes too.
**Show:** Quick cut to a teacher (side panel: "Signed in as: Bilal Hussain, a teacher"): Sidebar → Teacher Portal → Academic Activity, the same two rows. Back to the admin (side panel: "Signed in as: Admin").

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

#### [3.4a] Change or retire a category
**Say:** Tap a category, or its **Edit** button, to change it. To stop using one, set its **status** to **Disabled**. It moves to the **Disabled** list and isn't offered for new activities.
**Show:** Spotlight the Edit and Delete buttons on the Quizzes row. Scroll to the Disabled list with "Class work (old)".

#### [3.4b]
**Say:** **Delete** removes a category and its history for good, and can't be undone, so disable it instead if you might need its marks later.
**Show:** Click Delete on "Class work (old)": the "Confirm Delete !" dialog. Spotlight its text, then click Cancel.

### 4. Terms
#### [4.1]
**Say:** Every activity belongs to a term, so each term's grades stay separate. The terms come from **Terms Management**, which video 05.2 explains.
**Show:** Quick cut: Sidebar → Admin Portal → Terms Management, showing Autumn Term and Spring Term. Back to Academic Activity.

### 5. Create an activity
#### [5.1] Add New
**Say:** Now open **Activity Score Management**, choose the same class, section and subject, and tap **Add New**.
**Show:** Click "Activity Score Management". Pick the three filters, and "Autumn Term" in Term; the Activities list loads. Click "Add New": the Add Activity window opens.

#### [5.2] Class & subject
**Say:** In **Class & subject**, the **Class**, **Class section**, **Subject** and **Term** are already filled in from your filters. Check them; you can still change any of them. The due date must fall inside this term.
**Show:** Spotlight step 1: "Maktab Level 1", "A", "Fiqh" and "Autumn Term" already chosen. Zoom on the hint under Term.

#### [5.2a]
**Say:** The **Term** list only shows terms that are switched on, so an old term can't be picked by mistake.
**Show:** Open the Term dropdown: Autumn Term and Spring Term only. Close it on Autumn Term.

#### [5.3] Activity
**Say:** In **Activity**, type the **Activity Name**, then pick its **Category** and **Due Date**.
**Show:** Type "Wudu steps worksheet". Select "Homework". Pick a due date next week.

#### [5.4] Scoring
**Say:** In **Scoring**, enter the **Weight** and **Score Out Of**. Turn on **Ignore in Calculation** for practice work that shouldn't count.
**Show:** Type 10 and 10. Spotlight the Ignore in Calculation switch; leave it off.

#### [5.4a]
**Say:** If you pick a non-scored category, **Weight** and **Score Out Of** disappear, because there's no weight or maximum score. Teachers simply mark the work completed or not.
**Show:** Switch Category to a Non - Scored one for a moment: the note "This category is not scored, so there is no weight or maximum score." replaces the fields. Switch back to Homework and re-type 10 and 10.

#### [5.5] Extras
**Say:** **Resources & notifications** is optional: a **URL**, a **Note** or files, and **Notify Students and Parents**.
**Show:** Scroll to step 4. Spotlight URL, Note, "Choose files" and the Notify Students and Parents switch; turn the switch on.

#### [5.5a]
**Say:** A **URL** must start with http:// or https://. Files can be worksheets, rubrics or reference material. With the switch on, students and parents get a message as soon as you save.
**Show:** Type "www.example.com" in URL: the red message "The URL must start with http:// or https://". Change it to "https://www.example.com". Zoom on the line under Notify Students and Parents.

#### [5.6] Save
**Say:** Tap **Save**, then **OK**. With the switch on, students and parents are told about the new activity.
**Show:** Click "Save", then "OK" in the Confirmation dialog.

### 6. Next
#### [6.1] Ready to mark
**Say:** Your activity is in the list, with **Assigned**, **Graded** and **Missing** counts for the class.
**Show:** The new row "Wudu steps worksheet". Spotlight the Assigned, Graded and Missing columns.

#### [6.1a] The due date
**Say:** The activity stays open until the end of its due date, in your madrasah's own time. After that, students who haven't turned it in are counted as **Missing**.
**Show:** Zoom on the Due Date column of the new row, then the Missing column of an older activity whose due date has passed.

#### [6.1b] Filters
**Say:** Narrow the list with **Category**, **Term**, **Marking Status** and **Mode**. The round arrow at the top resets the filters.
**Show:** Spotlight each filter in turn; set Marking Status to "Pending" and back to "All". Spotlight the "Reset filters" button.

#### [6.1c] Change an activity
**Say:** Select a row to use **Duplicate**, for example for next week's worksheet, or **Edit**. Once an activity exists, its class, section, subject, category and skills can't be changed.
**Show:** Select "Wudu steps worksheet"; spotlight Duplicate and Edit. Click Edit: zoom on the lock note "Class, section, subject, category and skills cannot be changed once an activity exists." Click Cancel.

#### [6.1d]
**Say:** You can't **Delete** an activity that has marks. Use **Ignore in Calculation** instead. **Export** downloads the activities for these filters as an Excel sheet, and **Import** is in video 10.7.
**Show:** Select the activity that already has marks and click Delete: the "Warning!" dialog. Click OK. Spotlight Export and Import.

#### [6.2] Close
**Say:** Next, video 10.6: Enter activity scores, and video 10.7: Import activities and marks from Excel.
**Show:** End card with two tiles: "10.6 Enter activity scores" and "10.7 Import activities and marks from Excel".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 2:09 → 4:07 narration, 11 scenes added: [1.1a] why, [3.4a]/[3.4b] edit, disable and delete a category, [5.2a] only enabled terms, [5.4a] non-scored categories, [5.5a] URL rule and who is told, [6.1a] open until the end of the due date, then Missing, [6.1b] list filters, [6.1c] Duplicate, Edit and what's locked, [6.1d] Delete, Export, Import. Updated for origin/master d0604ce7f: [5.1]/[5.2] Add New now fills class, section, subject and term from the list filters (8b5f15581; this reverses the 2026-11-03 validator fix), the Term list hides disabled terms, and an activity stays open through the end of its due date (69ffb03b6)

- 2026-11-06 · panel (user, director, writer, PM, PO) · 6 changes: [1.1] says who it's for (second person), [2.2] Show cuts to the teacher's page with "Signed in as" labels (was a hold), [4.1] points to 05.2 for terms, [5.6] gives the reason for Save (no thin scene), [6.2] end tiles by number and title; demo names from the Maple Grove demo world
- 2026-11-03 · critic · 1 change: [4.1] dropped "set up earlier" (assumes another video)
- 2026-11-03 · validator · checked against master d36d69ed8 · 1 fix: [5.2] Add Activity doesn't carry over the list filters, so class, section and subject are picked again before the term

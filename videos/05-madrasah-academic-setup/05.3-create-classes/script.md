---
id: "05.3"
title: Create classes
target: 5:30
prereq:
  - "05.2"
status: scripted
flags:
  - "Homeroom teacher and compulsory are not on the Add Class form. They are subject options (Mark as Homeroom, Mark as Compulsory) on the subject form, so they are scripted in 05.5; a section's Class Teacher is set in 05.4."
  - "Who needs a seat? (decided 2026-11-03: intended): Admin Portal → Class opens only when the admin has Premium themselves (the page guard checks the user's own Premium, not the organisation's seats). The demo admin must have Premium."
---

# 05.3 Create classes

## Goal
Add a class with its type, grade set, enrolment setting and program page, so it's ready for sections, subjects and enrolment.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Add Class: Type, Numeric Class Name, Hifz, Evaluation Grade Set, Bi-Directional Communication Allowed, “Open for enrollment”, program page
- why: classes are the programs parents choose, and sections, subjects, timetables and report cards build on them
- class list buttons: Add, Edit, Delete (permanent, after a confirmation), Import, Export
- what the type changes (academic activities or madrasah activities such as Hifz progress)
- a unique Numeric Class Name; Hifz classes in the Hifz Progress Report
- Bi-Directional Communication off: teachers and parents can't message each other about the class
- when to turn off Open for enrollment
- program picture: Add Photo, formats, Replace Photo, Remove Photo; Remove program details when editing
- no message is sent when a class is added

## Demo data
- Demo madrasah "Maple Grove Madrasah"; the demo admin has Premium; academic activities are on for the madrasah (otherwise Type is locked to Religious and the Academic quick cut in [3.2] can't be done)
- Existing class "Maktab Level 1" in the list, with sections and students
- Grade set "Hifz Grades" (from 05.2)
- New class added on camera: "Hifz Boys", Religious, numeric name 2, Quran Hifz Yes, grade set "Hifz Grades"
- A short program description and a cover picture for "Hifz Boys" (a classroom or Quran stand, no faces)

## Script

### 1. Before you start
#### [1.1] Opening
**Say:** In this video for madrasah admins, you'll create a class: one of the programs your madrasah runs, such as a Maktab level or a Hifz class.
**Show:** Title card: "Create classes".

#### [1.2]
**Say:** Your terms and grade sets are already in place, so you can pick a grade set for the class.
**Show:** Opening card from You'll need.

#### [1.2a] Why it matters
**Say:** Each class is a program that parents can choose when they enrol a child. Sections, subjects, timetables and report cards are all built on your classes, so it's worth setting them up carefully.
**Show:** Back on the opening card; then a quick cut of the class list with "Maktab Level 1".

### 2. Open Class
#### [2.1] The class list
**Say:** In the sidebar, open **Admin Portal**, then **Class**. The list shows each class with its **Total Sections** and **No of Students**.
**Show:** Sidebar → Admin Portal → Class. The class list with "Maktab Level 1".

#### [2.1a] The buttons
**Say:** Select a class to use **Edit** or **Delete**. **Delete** removes the class for good, after you confirm, so use it only for a class made by mistake. **Import** and **Export** bring in or download your class list as a file.
**Show:** Select "Maktab Level 1"; spotlight "Edit" and "Delete". Clear the selection. Spotlight "Import" and "Export".

#### [2.2]
**Say:** Tap **Add**. The form has two parts: the class details, which are required, and an optional program page that parents see.
**Show:** Click "Add". The "Add Class" window opens; spotlight its subtitle.

### 3. Class basics
#### [3.1] Name and type
**Say:** Enter the **Class Name**. Then choose the **Type**: **Religious** for Quran and Islamic studies, or **Academic** for school grades. You can't change the type later.
**Show:** Type "Hifz Boys". Open Type; spotlight Religious and Academic; keep Religious.

#### [3.1a] What the type changes
**Say:** An academic class lets teachers track academic activities, such as homework, quizzes and projects. A religious class tracks madrasah work, such as Quran memorisation. If academic activities are off for your madrasah, every class is religious.
**Show:** Zoom on the Type box showing "Religious".

#### [3.2]
**Say:** Add a **Numeric Class Name**: the class level as a number. For academic classes, you pick the grade from a list.
**Show:** Quick cut first: switching Type to Academic turns Numeric Class Name into a list (JK, SK, 1, 2…); switch back to Religious. Then type "2" in Numeric Class Name. (Switching Type clears the box, so type the number after the quick cut.)
**Caption:** Numeric Class Name is the class level as a number. Academic classes pick the grade from a list.

#### [3.2a]
**Say:** Give each class its own number, so no two classes share one. For example, Maktab Level 1 is 1, and Hifz Boys is 2.
**Show:** Zoom on "2" in Numeric Class Name.

#### [3.3]
**Say:** Answer **Is this a Quran Hifz (Memorization) class?** This one is, so tap **Yes**.
**Show:** Click "Yes".

#### [3.3a]
**Say:** Answer **No** for classes that don't memorise the Quran. Only Hifz classes appear in the Hifz progress report, which shows each student's memorisation.
**Show:** Spotlight "No", then "Yes" again, selected.

#### [3.4] Grade set
**Say:** Choose the **Evaluation Grade Set** students in this class are marked with. It's required for academic classes.
**Show:** Open Evaluation Grade Set (the Academic quick cut in [3.2] cleared the default set); pick "Hifz Grades".

#### [3.5]
**Say:** Turn on **Bi-Directional Communication Allowed** if parents and teachers in this class can message each other.
**Show:** Turn the switch on.

#### [3.5a]
**Say:** When it's off, teachers can't send messages to this class's parents or students, and parents can't message the class. Your admins can still message everyone.
**Show:** Spotlight the switch, now on.

### 4. Open for enrollment
#### [4.1]
**Say:** **Open for enrollment** is on by default. Parents can pick this class when they enrol a child online. Turn it off to hide the class from enrolment.
**Show:** Spotlight "Open for enrollment" and its hint "Parents can pick this class when enrolling a child." Leave it on.

#### [4.1a]
**Say:** For example, turn it off for a class that is full for this year, or for a class you fill yourself. Turn it back on with **Edit** at any time.
**Show:** Turn the switch off, then on again.

### 5. Program page
#### [5.1] Description and picture
**Say:** Under **Program page**, tap **Add description & picture**. Write a **Class Description** that tells parents what the program covers.
**Show:** Click "Add description & picture"; the panel opens. Type two short lines in Class Description; make one word bold.

#### [5.2]
**Say:** Add a cover picture. If you skip it, parents see a default picture.
**Show:** Upload the demo cover picture; it shows in the panel.

#### [5.2a]
**Say:** Tap **Add Photo** and choose a JPG, PNG, GIF or WEBP file. A wide picture works best. Later, **Replace Photo** changes it and **Remove Photo** takes it off.
**Show:** Replay the upload: spotlight "Add Photo" before the click, then "Wide crop works best. Supported formats: JPG, PNG, GIF, WEBP." After the upload, spotlight "Replace Photo" and "Remove Photo".

#### [5.3]
**Say:** The description and picture are public. If your madrasah has an Ad-Din website, **Shown on website** also lists the class under Madrasah Programs. Tap it to switch between **Shown on website** and **Hidden from website**.
**Show:** Spotlight the switch "Shown on website"; click it: "Hidden from website". Click again to show it.

#### [5.4] Save
**Say:** Tap **Save**. A pop-up repeats a few tips about classes. Tap **Add Class** to create it, then **Close** the confirmation.
**Show:** Click "Save". A pop-up with tips about class names, Bi-Directional Communication and class types opens; click its "Add Class" button. The class window closes and an "Alert" box shows the server's confirmation; click "Close".

#### [5.4a]
**Say:** If a required box is empty, Ad-Din marks it in red and doesn't save. Adding a class doesn't send a message to anyone. Parents first see it on your program pages, as video 05.8 shows.
**Show:** Quick cut, before the save: an empty Class Name box with its red message. Then the class list.

### 6. Next
#### [6.1] Done
**Say:** Your class now shows in the list. To change it later, select it and tap **Edit**. Everything can change except the type.
**Show:** "Hifz Boys" in the class list. Select it, click "Edit": the Type box shows a lock. Close.

#### [6.1a]
**Say:** When you edit a class that has a program page, **Remove program details** deletes its description and picture when you save.
**Show:** In Edit Class for "Hifz Boys", spotlight "Remove program details" at the bottom. Click "Cancel".

#### [6.2]
**Say:** Next, video 05.4: Create class sections. When you're ready for families, video 06.1: Prepare online enrolment.
**Show:** End card with two tiles: "05.4 Create class sections" and "06.1 Prepare online enrolment".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 2:18 → 4:21 narration, 10 scenes added: why ([1.2a]), list buttons and permanent Delete ([2.1a]), what the type changes ([3.1a]), a unique number ([3.2a]), Hifz report ([3.3a]), messaging when off ([3.5a]), when to close enrolment ([4.1a]), photo buttons and formats ([5.2a]), required boxes and no message ([5.4a]), Remove program details ([6.1a])
- 2026-11-06 · panel (user, director, writer, PM, PO) · 4 changes: [3.2] Show records the Academic quick cut before typing the number (switching Type clears Numeric Class Name, class-dialog.component.ts 105-107); [3.2] Say and Caption drop "JK up to grade 12" (list also has 101-120); [3.5] "can" not "may"; demo madrasah is Maple Grove
- 2026-11-03 · manager · decisions via chat · 'Who needs a seat?' decided (own-Premium check is intended): flag wording updated; script unchanged
- 2026-11-03 · critic · 6 changes: [1.1] second-person opening; [2.2] "the basics" made concrete; [3.3] gives the reason for Yes (was a bare instruction); [5.3] add-on wording "If your madrasah has an Ad-Din website", Say now matches the two clicks; [5.4] Say covers the Close the Show does; [6.2] end card by number and title
- 2026-11-03 · validator · checked against master d36d69ed8 · 3 fixes: [5.4] Save opens a tips pop-up, tap Add Class, then Alert/Close; [3.4] Academic quick cut clears the default grade set; demo data: academic activities on so Type can switch

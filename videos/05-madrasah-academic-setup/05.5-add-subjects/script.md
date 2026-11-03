---
id: "05.5"
title: Add subjects
target: 4:00
prereq:
  - "05.4"
  - "03.4"
status: scripted
flags:
  - "Evaluation Grade Set is not on the subject form: it is chosen on the class (Add Class, 05.3), and a subject uses its class's grade set. It is mentioned in narration only."
  - "Mark as Homeroom and Mark as Compulsory (planned under 05.3's Covers) are scripted here, because they live on the subject form."
  - "Who needs a seat? (open): Admin Portal → Subject opens only when the admin has Premium themselves (the page guard checks the user's own Premium, not the organisation's seats). The demo admin must have Premium."
---

# 05.5 Add subjects

## Goal
Add the subjects each class studies, choose the teachers who can teach them, and fill in the extra details academic classes need.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Teacher, Discipline, Group, Strands, Course Code and Credit
- Mark as Homeroom, Mark as Compulsory (grades 9–12)

## Demo data
- Demo madrasah "Al-Noor Madrasah"; the demo admin has Premium
- Religious class "Hifz Boys" (grade set "Hifz Grades") with section "Hifz A"
- Academic class "Grade 3" (numeric 3) and academic class "Grade 10" (numeric 10), each with one section and three or four students in Grade 10
- Teachers "Ibrahim Yusuf", "Amina Saleh" and two more
- New subject added on camera: "Quran Hifz" in Hifz Boys, edition "Madani Mushaf", deduction 1 per mistake, teachers Ibrahim Yusuf and Amina Saleh, a small sample PDF as the syllabus
- The default strands in the Strands tab; Discipline "Science" and Group "Group A" already added
- For the Grade 10 example: subject "Science", course code "SNC2D", credit 1, class counts per semester

## Script

### 1. Before you start
#### [1.1] Opening
**Say:** In this video for madrasah admins, you'll add the subjects each class studies and choose who teaches them, for a religious class and for academic classes.
**Show:** Title card: "Add subjects".

#### [1.2]
**Say:** Your classes, sections and teachers are already in Ad-Din.
**Show:** Opening card from You'll need.

### 2. Open Subject
#### [2.1] The tabs
**Say:** In the sidebar, open **Admin Portal**, then **Subject**. There are four tabs: **Subject**, **Strands**, **Discipline** and **Group**. On the **Subject** tab, tap **Add**.
**Show:** Sidebar → Admin Portal → Subject. Spotlight the four tabs. Click "Add"; the subject form opens with "Subject details" on the left and "Teacher" on the right.

### 3. Subject details
#### [3.1] Name and class
**Say:** Type the name under **Enter The Subject Name**, then choose the **Class**. The form changes to fit the class.
**Show:** Type "Quran Hifz". Pick "Hifz Boys" in Class.

#### [3.2]
**Say:** For a religious class, add the book's **Edition** and **Author Name**, and the **Mark Deduction Per Mistake** used when teachers mark recitation.
**Show:** Type "Madani Mushaf" in Edition. Click the plus once: Mark Deduction Per Mistake shows 1.

#### [3.3]
**Say:** Under **Add Syllabus**, you can attach a PDF, an image or a document.
**Show:** Click the upload box; choose the sample PDF. The file card appears.

### 4. Choose the teachers
#### [4.1]
**Say:** Under **Teacher**, tick everyone who can teach and grade this subject. In the timetable, only these teachers, plus the section's class teacher, can be picked for it.
**Show:** Tick "Ibrahim Yusuf" and "Amina Saleh". The count shows "2 selected" and their chips appear.

#### [4.2] Save
**Say:** Tap **Save**. Marks for the subject use the grade set you chose for its class.
**Show:** Click "Save". A confirmation message; "Quran Hifz" shows in the subject list with its class and teachers.

### 5. Academic classes
#### [5.1] Homeroom and strands
**Say:** For an academic class, you also see **Mark as Homeroom**. Each class can have one homeroom subject.
**Show:** Click "Add"; pick "Grade 3" in Class. Spotlight "Mark as Homeroom".

#### [5.2]
**Say:** Open **Strands** to tick the curriculum strands this subject covers. It's optional. This example isn't saved, so tap **Cancel**.
**Show:** Click the "Strands" card; it expands. Tick two strands; "2 selected". Click "Cancel" to leave this form.

#### [5.3] Grades 9 to 12
**Say:** For academic grades 9 to 12, there's **Mark as Compulsory**, and a **Course details** card with the **Discipline**, **Group**, **Course Code** and **Course Credit**.
**Show:** Click "Add"; pick "Grade 10". Spotlight "Mark as Compulsory". Scroll to "Course details": pick "Science" in Discipline and "Group A" in Group; type "SNC2D" and 1.
**Caption:** Grades 9–12: Mark as Compulsory, plus Discipline, Group, Course Code and Course Credit.

#### [5.4]
**Say:** Enter the **Total Classes** for each part of the year. Under **Students**, tick who takes the subject and choose **Semester 1** or **Semester 2**. Pick one teacher, and tap **Save**.
**Show:** Fill the four Total Classes boxes. Under Students, choose "Semester 1" in Assign All, then tick "Select All". Tick one teacher. Click "Save".

### 6. Your own lists
#### [6.1]
**Say:** The **Strands**, **Discipline** and **Group** tabs hold the choices you just picked from. Tap **Add**, type a name, and tap **Save**.
**Show:** Click the "Discipline" tab. Click "Add"; type "Mathematics"; click "Save".

#### [6.2]
**Say:** Ad-Din comes with default strands. You can't rename those, but you can set one to **Disabled** if you don't use it.
**Show:** Strands tab: select a default strand, click "Edit". Spotlight "You cannot edit the name of a default strand." and the Status box. Close.

### 7. Next
#### [7.1] Done
**Say:** Your classes now have their subjects and teachers.
**Show:** Subject tab: the list with "Quran Hifz", the Grade 10 "Science" subject and their teachers.

#### [7.2]
**Say:** Next, video 05.6: Build the class timetable, with the Schedule Builder.
**Show:** End card with one tile: "05.6 Build the class timetable".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · critic · 5 changes: [1.1] second-person opening; [2.2] merged into [2.1] (thin scene); [5.2] Say names the Cancel the Show does; [5.4] Say covers Save, shorter; [7.2] end card by number and title
- 2026-11-03 · validator · checked against master d36d69ed8 · 1 fix: [4.1] timetable also lists the section's class teacher

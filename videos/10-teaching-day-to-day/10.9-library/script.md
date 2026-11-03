---
id: "10.9"
title: Library
target: 4:00
prereq:
  - "06.4"
status: scripted
platform: Web
flags:
  - "App typo: the library tab is spelled 'Acqusition' (scripted as shown). Description fields reuse other labels ('Book Description' on Add Category, 'Event Description' on Manage Location and Manage Acquisition), so the script says 'a short description' and the recorder should not zoom on those labels"
---

# 10.9 Library

## Goal
Set up library categories and shelf locations, add books with their stock, and lend, return and renew books for students.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Circulation, acquisition, categories, locations

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo madrasah "Al-Noor Madrasah" (Premium); the demo account is a Madrasah Admin
- Category "Seerah" and location "Rack A1" created on camera; one other category ("Fiqh") and location ("Rack B2") already there
- Book "Stories of the Prophets" (made-up ISBN, Seerah, Rack A1, quantity 5) added on camera; a few other books already in Acqusition
- Class "Maktab Level 1", section "A" with demo students; two books already lent out in Circulation, one of them due back today
- Teacher view (Teacher Portal → Library) available for the last chapter

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Your madrasah library
#### [1.1] Opening
**Say:** Ad-Din's library keeps track of your books: where they're shelved, how many copies you have, and who has borrowed them.
**Show:** Title card: "Library".

#### [1.2]
**Say:** Your students are already enrolled, so you can lend books to them straight away.
**Show:** Opening card.

### 2. Open the library
#### [2.1] Four tabs
**Say:** In the **Admin Portal**, open **Library**. There are four tabs: **Circulation**, **Acqusition**, **Categories** and **Locations**. Start with the last two.
**Show:** Sidebar → Admin Portal → Library. Spotlight the four tabs.

### 3. Categories and locations
#### [3.1] Add a category
**Say:** On **Categories**, tap **Add**. In **Add Category**, type the **Category Name** and a short description, then tap **Save**.
**Show:** Click "Categories", then "Add". Type "Seerah" and a one-line description. Click "Save". The category appears in the list.

#### [3.2] Add a location
**Say:** On **Locations**, tap **Add**. In **Manage Location**, enter the **Rack Name / Number** and a description, then tap **Save**.
**Show:** Click "Locations", then "Add". Type "Rack A1" and "Next to the window". Click "Save".

### 4. Add books
#### [4.1] Acqusition
**Say:** Now add your books on **Acqusition**. Tap **Add** to open **Manage Acquisition**.
**Show:** Click the "Acqusition" tab, then "Add".

#### [4.2] Book details
**Say:** Enter the **ISBN**, then choose the **Book Category**, and type the **Book Name** and **Author Name**.
**Show:** Type a made-up ISBN, pick "Seerah", type "Stories of the Prophets" and an author name.

#### [4.3] Shelf and stock
**Say:** Pick the **Location**, enter the **Price** and **Quantity**, add a short description, and tap **Save**.
**Show:** Pick "Rack A1", type a price and quantity 5, add a description. Click "Save". The book shows in the list with its Quantity.

#### [4.4]
**Say:** Have a long list already? Use **Import** and **Export** to work with it in a spreadsheet.
**Show:** Spotlight the Import and Export buttons.

### 5. Lend a book
#### [5.1] Circulate
**Say:** To lend a book, open **Circulation** and tap **Circulate**.
**Show:** Click the "Circulation" tab, then "Circulate". The "Circulate" window opens.

#### [5.2] Which book
**Say:** Pick the **Book Category** and the book. Ad-Din fills in its **Location** and how many are **In Stock**.
**Show:** Pick "Seerah" and "Stories of the Prophets". Spotlight Location "Rack A1" and In Stock.

#### [5.3] Who and how long
**Say:** Choose the student's **Class**, **Class Section** and name. Set the **Issue Date** and **Return Date**; **Period** shows the days in between. Tap **Save**.
**Show:** Pick "Maktab Level 1", "A" and a student. Issue Date today, Return Date in 14 days; Period shows 14 days. Click "Save". The loan appears in the list.

### 6. Returns and renewals
#### [6.1] Return
**Say:** When the book comes back, select the loan, tap **Return**, and confirm with **Return**.
**Show:** Select the loan due today. Click "Return". In "Confirm return." click "Return".

#### [6.2] Renew
**Say:** To lend it for longer, select the loan, tap **Renew**, and change the **Return Date**.
**Show:** Select the other loan, click "Renew", move the Return Date a week later, click "Save".

#### [6.3]
**Say:** Use the filters at the top to find loans by class, student or book.
**Show:** Open Filters; pick a class and a student.

### 7. Next
#### [7.1] Teachers
**Say:** Teachers can lend books too, from **Library** in their **Teacher Portal**, with the **Circulation** and **Acqusition** tabs.
**Show:** Quick cut: Sidebar → Teacher Portal → Library, showing its two tabs.

#### [7.2] Close
**Say:** Your library is set up and every loan is tracked. Next, celebrate your students with recognition awards.
**Show:** End card with two tiles: "10.10 Recognition awards" and "10.8 Parent–teacher interviews".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes (four tabs incl. 'Acqusition' typo, forms, Circulate, Confirm return., Renew, teacher's two tabs confirmed)

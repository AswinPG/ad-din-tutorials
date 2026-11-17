---
id: "10.9"
title: Library
target: 5:00
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
- Why keep the library in Ad-Din; naming racks
- Edit, Delete, Import and Export on Categories, Locations and Acqusition; a book with copies still lent out can't be deleted
- The student's email and app notification when a book is lent, and the reminder the day after the return date
- Circulation Export; an end-of-term check by class

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo madrasah "Maple Grove Madrasah" (Premium); the demo account Yusuf Rahman is a Madrasah Admin
- Category "Seerah" and location "Rack A1" created on camera; one other category ("Fiqh") and location ("Rack B2") already there
- Book "Stories of the Prophets" (made-up ISBN, Seerah, Rack A1, quantity 5) added on camera; a few other books already in Acqusition
- Class "Maktab Level 1", section "A" with demo students; two books already lent out in Circulation, one of them due back today
- Teacher view (Teacher Portal → Library) available for the last chapter
- A second copy batch arrives on camera: "Stories of the Prophets" quantity changed from 5 to 8 with Edit

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Your madrasah library
#### [1.1] Opening
**Say:** In this video for madrasah admins, you'll use Ad-Din's library to track your books: where they're shelved, how many copies you have, and who has borrowed them.
**Show:** Title card: "Library".

#### [1.1a] Why
**Say:** A library notebook gets lost or goes out of date. In Ad-Din you can see at any time where each book is kept, how many copies you have, which student has a book, and when it should come back.
**Show:** The Circulation list with two loans, then the Acqusition list with quantities.

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

#### [3.2a]
**Say:** Use rack names that a volunteer can find without help, such as the label on the shelf. On both tabs, select a row and tap **Edit** to change it or **Delete** to remove it.
**Show:** Select "Rack A1"; spotlight Edit and Delete. Click "Categories"; select "Seerah"; spotlight the same buttons.

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
**Say:** If you already have a long list of books, use **Import** and **Export** to work with it in a spreadsheet.
**Show:** Spotlight the Import and Export buttons.

#### [4.4a] Change a book
**Say:** When new copies arrive, select the book, tap **Edit**, and change the **Quantity**. **Delete** removes a book, but not while any copy is still lent out; return the copies first.
**Show:** Select "Stories of the Prophets", click "Edit", change Quantity from 5 to 8, click "Save". Spotlight the Delete button.

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

#### [5.3a]
**Say:** The student gets an email and an app notification with the book's name and the return date. If the book isn't returned by then, Ad-Din sends them a reminder the day after.
**Show:** Zoom on the new row: Book Name, Student First Name, Issue Date and Return Date.

### 6. Returns and renewals
#### [6.1] Return
**Say:** When the book comes back, select the loan, tap **Return**, and confirm with **Return**.
**Show:** Select the loan due today. Click "Return". In "Confirm return." click "Return".

#### [6.2] Renew
**Say:** To lend it for longer, select the loan, tap **Renew**, change the **Return Date**, and tap **Save**.
**Show:** Select the other loan, click "Renew", move the Return Date a week later, click "Save".

#### [6.3]
**Say:** Use the filters at the top to find loans by class, student or book.
**Show:** Open Filters; pick a class and a student.

#### [6.3a]
**Say:** For example, before the end of term, filter by class to see who still has a book. **Export** downloads that list as a spreadsheet, for example to print it.
**Show:** Clear the student filter so the whole of "Maktab Level 1" A shows. Spotlight the Export button on Circulation.

### 7. Next
#### [7.1] Teachers
**Say:** Teachers can lend books too, from **Library** in their **Teacher Portal**, with the **Circulation** and **Acqusition** tabs.
**Show:** Quick cut to a teacher (side panel: "Signed in as: Bilal Hussain, a teacher"): Sidebar → Teacher Portal → Library, showing its two tabs.

#### [7.2] Close
**Say:** Your library is set up and every loan is tracked. Next, video 10.10: Recognition awards, and video 10.8: Parent–teacher interviews.
**Show:** End card with two tiles: "10.10 Recognition awards" and "10.8 Parent–teacher interviews".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 2:02 → 3:11 narration, 5 scenes added: [1.1a] why, [3.2a] rack names, Edit and Delete on categories and locations, [4.4a] change a quantity, no delete while lent out (LibraryController "pending to be returned"), [5.3a] student email and app notification on a loan (SendBookIssuedNotification) and the overdue reminder (daily SendBookDueNotification), [6.3a] end-of-term check and Circulation Export. Checked against origin/master d0604ce7f (only a style change in this area)

- 2026-11-06 · panel (user, director, writer, PM, PO) · 4 changes: [1.1] says who it's for, [4.4] no elliptical question, [7.1] "Signed in as" label, [7.2] end tiles by number and title; demo names from the Maple Grove demo world
- 2026-11-03 · critic · 2 changes: [6.2] Say adds the Save tap the Show performs; [7.2] Say names both end-card tiles
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes (four tabs incl. 'Acqusition' typo, forms, Circulate, Confirm return., Renew, teacher's two tabs confirmed)

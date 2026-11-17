---
id: "12.1"
title: Map a report card template
target: 7:30
prereq:
  - "05.1"
  - "05.5"
status: scripted
audience:
  - Madrasah Admin
---

# 12.1 Map a report card template

## Goal
Map a report card template to your classes, subjects, teachers and terms, choose its frame and colours, and add the signature it prints.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Report Builder → Map New Report, Grades Mapping, Element Mapping, colours, signature
- Why map a template; the report list (Search reports, Edit mapping, Delete mapping with its warning, Show disabled reports)
- Required fields and the messages when one is missing; the Disable switch
- Subject IDs, removing a subject row, leaving a box empty; up to three terms, removing a term; Report 1, 2 and 3 for teachers
- Padding numbers and colour codes; Cancel and editing later
- What happens next: nothing reaches parents until a card is ready and the release date arrives; Select unlocks for tagged teachers

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo madrasah "Maple Grove Madrasah" with the demo account Yusuf Rahman signed in as Madrasah Admin (Report Builder shows "Administrator access")
- Five mapped reports in the list (for example "Weekend Quran Report" on the Activities-Based Evaluation template), so the list isn't empty and the Search reports box shows (it appears with more than four); one more, "Summer Camp Report", disabled, so it shows only with Show disabled reports ticked
- Grade set "Madrasah Grades"; academic term "Term 1 2026–27" (and a later "Term 2" not yet mapped)
- Classes "Maktab Level 1" and "Hifz Class A", each with subjects "Quran", "Fiqh" and "Tajweed" and a homeroom teacher (Bilal Hussain for Maktab Level 1, Fatima Siddiqui for Hifz Class A)
- Report templates as the dropdown lists them, including "Madrasah Islamic Studies Progress Report (Activities-Based Evaluation)" and "Grades 9-12 Provincial Report"
- At least three report frames in the carousel (so "Frame 1–3" show): Ad-Din's built-in frames, which every madrasah gets; the Upload Custom Frame button is hidden on master
- The demo admin is also the principal set in the madrasah settings; no signature saved yet, drawn on camera with the mouse

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Before you start
#### [1.1] Opening
**Say:** Every report card in Ad-Din starts with a mapping. A mapping links a report card template to your classes, subjects, teachers and terms. In this video for madrasah admins, you'll map one.
**Show:** Title card: "Map a report card template".

#### [1.2]
**Say:** Your terms, grade sets, classes and subjects are already in place. You map a template once. After that, teachers fill in the cards each term.
**Show:** Opening card from You'll need.

#### [1.2a] Why map a template
**Say:** With a mapping, every class gets the same card, with your madrasah's details, frame, colours and the principal's signature. Teachers only add the marks and comments, and parents find the finished cards in Ad-Din.
**Show:** Cutaway: a finished demo card for "Maktab Level 1"; spotlight the header, the frame and the signature line.

### 2. Open Report Builder
#### [2.1] Report Builder
**Say:** Go to **Reports**, then **Report Builder**. Your madrasah is already chosen at the top, and the page shows you have **Administrator** access.
**Show:** Sidebar → Reports → Report Builder. Spotlight the Organization picker, then the "Administrator access" line.

#### [2.2]
**Say:** The list shows each mapped report and the template it uses. To add one, tap **Map New Report**.
**Show:** Spotlight the columns "Report Name" and "Linked Template". Click "Map New Report"; the Report Mapping page opens.

#### [2.2a] The report list
**Say:** The pencil beside a report edits its mapping, and the bin deletes it. Deleting can't be undone and can lose report card data, so Ad-Din warns you first. With more than four reports, a **Search reports** box appears.
**Show:** Back on the list (click Cancel on the new mapping first, or record this before [2.2]). Spotlight the "Edit mapping" pencil, then click the "Delete mapping" bin on "Weekend Quran Report": the "Warning !" prompt opens. Click "Cancel". Spotlight the "Search reports" box.

#### [2.2b]
**Say:** Tick **Show disabled reports** to see reports you've switched off. They show a **Disabled** tag.
**Show:** Tick "Show disabled reports": "Summer Camp Report" appears with its "Disabled" tag. Untick it. Click "Map New Report" again.

### 3. Report details
#### [3.1] Template and grade set
**Say:** First choose the template. For a madrasah, the Activities-Based Evaluation progress report is the usual choice. Then pick your **Grade Set**.
**Show:** Under Report Details, open "Select Template"; pick "Madrasah Islamic Studies Progress Report (Activities-Based Evaluation)". The Title box, the Grade Set box and the class-name choice appear. Open "Select Grade Set"; pick "Madrasah Grades".

#### [3.2] Name and title
**Say:** Type a **Report Name**, or tick **Take Class Name as Report Name**. The title box sets the heading printed at the top of the card.
**Show:** Type "Term Report" in Report Name. Spotlight the "Take Class Name as Report Name" choice. Type "Progress Report" in Title.

#### [3.2a] Required fields
**Say:** The report name, the template and the grade set are required. If one is missing when you save, Ad-Din tells you which, for example **Report Name is mandatory**.
**Show:** Cutaway from a separate take: Save with Report Name empty; toast "Report Name is mandatory". Back to the filled form.

#### [3.3] Grades Mapping
**Say:** Each template asks for slightly different things. The grades nine to twelve template, for example, adds **Grades Mapping**, where you match each grade to one of your classes. A madrasah card doesn't need it, so switch back to your template.
**Show:** Short aside: switch the template to "Grades 9-12 Provincial Report"; the "Grades Mapping" box appears with Grade 9 to Grade 12. Spotlight it, then switch back to the Activities-Based Evaluation template and re-pick the grade set.

#### [3.4] Release date
**Say:** Under **Release & Translation**, set the **Report Release Date** for the current term. It's required, and parents can see a finished card from this date.
**Show:** Spotlight "Release & Translation". Click "Pick a date" and choose the end-of-term date.

#### [3.5]
**Say:** To print a second language beside English, open the list that shows **No Translation** and pick a language. Ad-Din sends the card's text to an AI service to translate it. For English only, leave it on **No Translation**.
**Show:** Open the secondary language list (shows "No Translation"); hover "Arabic", then close it without changing.

#### [3.5a] Disable
**Say:** At the top right is a **Disable** switch. Turn it on to retire a report you no longer use, without deleting it. A disabled report leaves the list unless you tick **Show disabled reports**.
**Show:** Scroll to the top; spotlight the "Disable" switch beside the "Report Mapping" heading. Leave it off.

### 4. Classes and subjects
#### [4.1] Classes / Programs
**Say:** Under **Classes / Programs**, tap each class that uses this report card.
**Show:** Click "Maktab Level 1" and "Hifz Class A"; both highlight.

#### [4.2] Element Mapping
**Say:** **Element Mapping** now shows a card for each class. Choose the class's **Teacher**, then pick a subject in each subject row.
**Show:** Scroll to "Element Mapping". In the "Maktab Level 1" card, pick "Bilal Hussain" for Teacher and "Quran" for Subject 1. Repeat for "Hifz Class A" with "Fatima Siddiqui".

#### [4.3]
**Say:** For more subjects on the card, tap **Add Subject**. A new row appears in every class; pick its subject there too.
**Show:** Click "Add Subject" twice; pick "Fiqh" and "Tajweed" in the new rows for both classes.

#### [4.3a]
**Say:** Each subject in the lists shows its subject ID, which helps when two subjects share a name. Leave a box empty if a class doesn't have that subject. To remove a subject row, tap the red minus beside it.
**Show:** Open a subject list and zoom on "Quran (Subject ID: …)"; close it. Spotlight the red minus beside "Subject 3"; don't click.

### 5. Terms
#### [5.1] Terms Mapping
**Say:** Under **Terms Mapping**, choose the academic term for **Term 1**.
**Show:** Scroll to "Terms Mapping". Open "Select Academic Term"; pick "Term 1 2026–27".

#### [5.2]
**Say:** When the next term begins, return to this mapping and tap **Add Term 2**. Also change the release date, because it is for the current term. The card then shows both terms side by side.
**Show:** Spotlight the "Add Term 2" button; don't click. Pan up to "REPORT RELEASE DATE (For Current Term)".

#### [5.2a] Up to three terms
**Say:** A card can show up to three terms. Once Term 2 has a term, a button for the third term appears. The red icon beside a term's name removes that term, and any term after it.
**Show:** Spotlight the "Add Term 2" button and the red remove icon beside "Term 1"; don't click either.

#### [5.2b] What teachers see
**Say:** Teachers then pick one report for each term, **Report 1**, **Report 2** and so on. Each later report prints the earlier terms' marks beside the new ones.
**Show:** Cutaway: the Report Card Builder panel with the "Report 1" and "Report 2" cards (from a mapping with two terms); then a card preview with the TERM I and TERM II columns.

### 6. Frame and colours
#### [6.1] Frame
**Say:** Under **Report Background (Frame)**, choose the frame printed around each card.
**Show:** Scroll to "Report Background (Frame)". Use the arrows, then click "Frame 2"; the tick moves to it.

#### [6.2] Colours
**Say:** The padding sliders move the content inside the frame. **PRIMARY COLOR** and **SECONDARY COLOR** set the colours of the card's headings and lines.
**Show:** Nudge TOP PADDING. Click the PRIMARY COLOR swatch and pick a dark green; set SECONDARY COLOR to a gold.

#### [6.2a]
**Say:** There are four padding sliders: top, bottom, left and right, each from zero to one hundred, with a box to type the number. Beside each colour, you can also type a colour code.
**Show:** Spotlight the four padding sliders and their number boxes, then type "#1B5E20" in the box beside PRIMARY COLOR.

#### [6.3] Save
**Say:** Tap **Save**. Ad-Din confirms the mapping, and your new report appears in the list.
**Show:** Click "Save". Toast "Successfully added the academic report mapping". The list shows "Term Report" with its linked template.

#### [6.3a] Change it later
**Say:** **Cancel** leaves the page without saving. To change a mapping later, tap its pencil in the list, make your changes, and tap **Save** again.
**Show:** Spotlight "Cancel" at the bottom of a mapping (from the edit take). Back on the list, click the pencil on "Term Report"; the mapping opens with everything filled in. Click "Cancel".

### 7. The signature
#### [7.1] Who signs
**Say:** Each card prints the signature of the principal chosen in your madrasah settings. Video 05.1 shows how to choose them.
**Show:** Cutaway: a finished demo card; zoom on the "Signature:" line at the bottom.

#### [7.2] Draw it
**Say:** The principal adds their signature once. Open **Profile**, then **User Profile**. Under **Signature**, tap the pen, sign in the box, and tap **Save**.
**Show:** Top right "Profile" → "User Profile". On Personal info, open "Signature". Click the pen; "Sign here" opens. Draw a signature; click "Save".

#### [7.3]
**Say:** Tapping **Save** stores it straight away. Teachers keep **Add digital signature** ticked when they build the cards, and the signature prints on each one.
**Show:** The pad closes, the signature shows in the box and a toast confirms it's saved (no need to click Update). Cut to the Report Card Builder panel; spotlight the ticked "Add digital signature".

### 8. Next
#### [8.1] Done
**Say:** Your report card template is mapped. Teachers can now open it from **Report Builder** and tap **Select** to fill in their students' cards.
**Show:** Report Builder list with "Term Report"; spotlight its "Select" button.

#### [8.1a] What happens next
**Say:** Nothing goes to parents yet. A parent sees a card only when its teacher marks it ready and the release date has arrived. A teacher's **Select** button unlocks once they have at least one subject tagged to their account.
**Show:** Spotlight "Select" on "Term Report"; cutaway to a teacher's list with a locked "Select" and its tip text.

#### [8.2] Close
**Say:** Next, video 12.2: Write comments and mark reports ready. Then video 12.3: Release report cards to parents.
**Show:** End card with two tiles: "12.2 Write comments and mark reports ready" and "12.3 Release report cards to parents".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 3:28 → 5:52 narration, 11 scenes added: [1.2a] why map a template, [2.2a] edit, delete (with its warning) and Search reports, [2.2b] Show disabled reports, [3.2a] required fields and the "Report Name is mandatory" message, [3.5a] the Disable switch, [4.3a] subject IDs, empty boxes, removing a subject row, [5.2a] up to three terms and removing a term, [5.2b] Report 1 and Report 2 in the builder, [6.2a] padding numbers and colour codes, [6.3a] Cancel and editing later, [8.1a] what happens next (ready and release date; Select unlocks with a tagged subject). Checked against origin/master d0604ce7f (reportmapping.manage, reportmapping.list, report515.generator)
- 2026-11-07 · manager · panel decisions, "All recommended" · [3.5] says the card's text goes to an AI service
- 2026-11-06 · panel (user, director, writer, PM, PO) · 8 changes: [1.1] mapping explained in its own sentence, [1.2] no semicolon, [3.3] says a madrasah card doesn't need Grades Mapping, [3.5] English only stays on No Translation, [4.2] plainer subject-row wording, [5.2] says to change the release date for the new term ("(For Current Term)", reportmapping.manage.component.html 138), [8.2] end tiles by number and title; demo names from the Maple Grove demo world (Maktab Level 1 with Bilal Hussain, Hifz Class A with Fatima Siddiqui)
- 2026-11-03 · critic · 6 changes: [1.1] second-person opening for madrasah admins; [3.3] Say now mentions switching back (matches Show); [3.5] clearer "list that shows No Translation"; [4.3] elliptical question removed, new rows' subject picks said; [5.2] "come back to" → "return to"; [8.2] end card tiles named by number
- 2026-11-03 · validator · checked against master d36d69ed8 · 4 fixes: [3.1]/[3.2] template chosen before name and title (Title box only appears for that template); [7.3] Save in the signature pad already stores it, no Update; demo frames are Ad-Din's built-in ones

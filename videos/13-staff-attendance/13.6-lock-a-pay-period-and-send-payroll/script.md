---
id: "13.6"
title: Lock a pay period and send payroll
target: 6:30
prereq:
  - "13.5"
status: scripted
stage: Periodic
---

# 13.6 Lock a pay period and send payroll

## Goal
Check and correct a pay period's hours, lock it so payroll gets the file, and unlock it for a correction within fifteen days.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Hours grid, edit hours, hours for Manual only staff, Lock, CSV and PDF to payroll, versions (sending a new version yourself), unlocking within 15 days
- Audit Trail
- Why lock each period, and when
- Choose a period (states), the legend, a staff member's details, Issues pending and the lock meter
- Remove these hours on an entered day; the 48-hour limit
- Locking a period that hasn't finished yet
- PDF still being prepared; what to do when the email can't be sent
- This period is final after 15 days; the closing-soon email; Changed since you signed this off
- Audit Trail filters and Load older records

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo madrasah with Staff Attendance on, a monthly pay period that has just ended, and nothing left to review
- Payroll recipient `payroll@maplegrove.example.com` set in Settings (never a real address)
- Grid rows for Bilal Hussain, Khadija Usman, Idris Malik and Omar Khalid (teacher, Manual only, an empty Wednesday for [3.2a]), with one approved leave day, one absence, one adjusted day
- Idris Malik's Thursday recorded as 7 h 10 min, corrected to 7 h 30 min in the video
- Payroll file v1 produced on lock (CSV and PDF ready); a v2 after the re-lock in chapter 6
- Audit Trail entries for the lock, the edit and the unlock, and older entries for Load older records
- Period picker list: the period that just ended (Open), the current one (Current), an older one (Locked), the next one (Upcoming)
- A frozen period from three months ago, for "This period is final" in [6.3a]

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Before you start
#### [1.1] Opening
**Say:** At the end of each pay period, you lock it. That makes the hours final and sends them to payroll. In this video for organisation admins, you'll lock a period, and unlock it for a correction.
**Show:** Title card: "Lock a pay period and send payroll".

#### [1.2]
**Say:** Your payroll email address is already set in the Staff Attendance settings, and nothing in this period is left to review.
**Show:** Opening card.

#### [1.2a] Why
**Say:** Locking is your sign-off. After it, the hours can't change by accident, and your bookkeeper pays from the same file you checked. Lock each period within the sign-off days set in your settings.
**Show:** Admin Portal → Staff Attendance → Settings; zoom on "Sign-off due" (5 days). Then go to Periods.

### 2. The hours grid
#### [2.1] Periods
**Say:** In the **Admin Portal**, open **Staff Attendance**, then **Periods**. It opens on the current pay period: one row for each staff member, one column for each day, and a **Period total**. Use the back arrow to open the period that just ended.
**Show:** Sidebar → Admin Portal → Staff Attendance → Periods. Use "Previous period" to open the period that just ended. Spotlight the grid.

#### [2.1a] Choose a period
**Say:** You can also open **Choose a period** to jump to any period. Each one shows its state: **Current**, **Open**, **Locked** or **Upcoming**.
**Show:** Click the period name to open "Choose a period"; spotlight each state in the list. Pick the period that just ended again.

#### [2.2]
**Say:** Leave, absences and adjusted days are marked in the grid. Tap **Needs review** to see only the rows still waiting.
**Show:** Spotlight a Leave pill, an Absent cell and an Adjusted cell. Click "Needs review": "Nothing left to review in this period." Click "Everyone".

#### [2.2a] Legend and details
**Say:** The **Legend** explains the colours: **From check-in taps**, **To confirm**, **Possibly absent** and **Upcoming**. Tap a name to see that person's **Shift source**, **Tracking** and **Status**.
**Show:** Zoom on the Legend. Click "Khadija Usman" in the first column; her details show; close them.

#### [2.2b] Issues pending
**Say:** **Issues pending** counts what's still open in this period. While anything is open, **Lock period** can't be used, and the page says how many items to settle first.
**Show:** Zoom on "Issues pending" (0) and its hint "Nothing is outstanding for these dates…".

### 3. Edit hours
#### [3.1] Change a day
**Say:** To correct a day, tap its cell. Enter the **Hours** and **Minutes**, add a **Reason** if you like, and tap **Save**. The staff member is told either way.
**Show:** Click Idris Malik's Thursday cell (7h 10m). Set Hours 7, Minutes 30, Reason "Locked up after the evening class". Click "Save"; the toast "Hours saved" and the cell is marked Adjusted.

#### [3.2]
**Say:** If you change your mind, open the cell again: **Use recorded time** puts the system's figure back.
**Show:** Reopen the cell and spotlight "Use recorded time". Click "Cancel".

#### [3.2a] Manual only staff
**Say:** For someone on **Manual only**, nothing is recorded. Tap their empty day, enter the hours the same way, and tap **Save**.
**Show:** Click Omar Khalid's empty Wednesday cell ("Add"). Set Hours 6, Minutes 0; click "Save". The toast "Hours saved"; the cell is marked Entered.

#### [3.2b]
**Say:** On an entered day, **Remove these hours** takes them away again. A day can't be more than forty-eight hours. While a period is locked, no cell can be changed.
**Show:** Reopen Omar Khalid's Wednesday cell; spotlight "Remove these hours". Click "Cancel".

### 4. Lock the period
#### [4.1] Lock period
**Say:** When everything is settled, tap **Lock period**. Ad-Din explains that this signs off the hours and makes the payroll file, and asks you to confirm.
**Show:** Spotlight "Everything is settled. You can lock this period." Click "Lock period"; the dialog "Lock this period?" opens.

#### [4.2]
**Say:** Tap **Lock period** again. The period now shows **Locked**, and the hours are final.
**Show:** Click "Lock period" in the dialog. The toast "Period locked." The header shows Locked and "v1".

#### [4.2a] Before the period ends
**Say:** You can lock a period before it ends, for example before a holiday. Ad-Din warns you: time recorded after the lock is kept, but it isn't counted until you unlock and lock again.
**Show:** Cutaway: open the current period and click "Lock period"; zoom on the dialog sentence that begins "This period has not finished yet." Click "Cancel". Return to the locked period.

### 5. The payroll file
#### [5.1] Sent automatically
**Say:** The first time you lock a period, the payroll file is emailed to your payroll address automatically.
**Show:** Zoom on "Version 1 was sent to payroll@maplegrove.example.com."

#### [5.2] Download
**Say:** For your own copy, tap **Download**, then choose **CSV spreadsheet** or **PDF document**. They're the same files payroll receives.
**Show:** Click "Download v1"; the menu shows CSV spreadsheet and PDF document. Click "CSV spreadsheet".

#### [5.2a]
**Say:** Right after locking, the PDF can take a few minutes to prepare. The CSV is ready at once, and sending works as soon as the PDF is ready.
**Show:** Zoom on a mocked line "The PDF for version 1 is still being prepared…" under the header.

#### [5.3] Send again
**Say:** To send it again, tap the send button and confirm with **Send**. You can do this at any time while the period stays locked.
**Show:** Click "Send v1 to payroll"; the dialog "Send this payroll file?" opens. Click "Send"; the toast "Payroll file sent."

#### [5.3a] If it isn't sent
**Say:** If no payroll address is set, or the email fails, the page says so. Check the address in the settings and send again, or download the file and pass it on yourself.
**Show:** Zoom on "Goes to payroll@maplegrove.example.com" beside the send button.

### 6. Unlock for a correction
#### [6.1] Unlock period
**Say:** If you find a mistake, tap **Unlock period** within fifteen days of the period's end. The files already produced are kept.
**Show:** Spotlight the hint under the button. Click "Unlock period", then confirm "Unlock period" in the dialog. The toast "Period unlocked."

#### [6.2] Versions
**Say:** Fix the hours, then lock again. Each lock produces the next version of the payroll file: v2, v3, and so on. After fifteen days, the period is final.
**Show:** Edit one cell, lock again. The header shows "v2" and "Send v2 to payroll".

#### [6.2a] Send the new version
**Say:** Only the first version is emailed by itself. Send each new version yourself: tap the send button, then **Send**.
**Show:** Click "Send v2 to payroll", then "Send" in the dialog. The toast "Payroll file sent."; zoom on "Version 2 was sent to payroll@maplegrove.example.com."

#### [6.3] Audit Trail
**Say:** Every change is kept in the **Audit Trail**: who made it, when, and what changed. Nothing there can be edited or deleted.
**Show:** Click "Audit Trail" in the section list. Spotlight the newest records: the lock, the unlock, the hours edit.

#### [6.3a] Final after fifteen days
**Say:** Fifteen days after a period ends, it becomes final. The page says **This period is final**, and nobody can unlock or change it. If a period still isn't signed off, or has something unsettled, admins get an email three days before that.
**Show:** Back on Periods: Choose a period → the frozen period. Zoom on "This period is final" and its sentence.

#### [6.3b] Changed after signing off
**Say:** If a tap reaches a locked period late, for example from a phone that was offline, the page says **Changed since you signed this off**. The totals you signed off don't move until you unlock and lock again.
**Show:** Zoom on a mocked "Changed since you signed this off" box on the period that just ended. Then open Audit Trail.

#### [6.3c] Audit filters
**Say:** In the **Audit Trail**, filter by **From** and **To** dates, or by **Staff member**. **Load older records** goes further back.
**Show:** Set From and To to the period's dates; pick "Idris Malik" in Staff member; his hours edit shows. Clear it; scroll down and spotlight "Load older records".

### 7. Next
#### [7.1] Close
**Say:** Your pay period is locked and payroll has the file. For the staff side, watch 13.7, Check in, breaks and check out, and 13.8, Timesheet, time off and pay periods.
**Show:** End card with two tiles: "13.7 Check in, breaks and check out" and "13.8 Timesheet, time off and pay periods".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 2:48 → 5:06 narration, 12 scenes added: [1.2a] why and when to lock; [2.1a] Choose a period and its states; [2.2a] Legend and a person's details; [2.2b] Issues pending and the blocked lock; [3.2b] Remove these hours, 48-hour limit, no edits while locked; [4.2a] locking a period that hasn't ended; [5.2a] PDF still being prepared; [5.3a] when the file isn't sent; [6.3a] This period is final, closing-soon email three days before (AttendancePeriodUnlockWindow.WarningDays); [6.3b] Changed since you signed this off; [6.3c] Audit Trail filters and Load older records. Checked against origin/master d0604ce7f; target 4:00 → 6:30
- 2026-11-06 · panel (user, director, writer, PM, PO) · 6 changes: [2.1] Say names the back arrow the Show uses, new [3.2a] hours for Manual only staff (Add on an empty day, marked Entered; en.json 4205, 4297), [4.1] active wording, new [6.2a] later versions are not emailed by themselves, send them yourself (IPayrollOutputSendService.cs 76-78), Covers updated, demo names from the Maple Grove demo world (teacher Bilal Hussain, office Khadija Usman, caretaker Idris Malik) and Omar Khalid, demo payroll address on maplegrove.example.com
- 2026-11-03 · manager · decisions via chat · Staff Attendance is live: 'Is Staff Attendance live?' hold flag removed; publish normally
- 2026-11-03 · critic · 6 changes: [1.1] second-person opening; [2.1] full sidebar path; [3.2]/[5.3]/[6.1] elliptical questions ("Changed your mind?", "Need to send it again?", "Spotted a mistake?") made plain, [3.2] says the cell is reopened; [7.1] end-card tiles named by number; fold: Audit Trail added to Covers ([6.3] already shows it)
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes

---
id: "13.6"
title: Lock a pay period and send payroll
target: 4:00
prereq:
  - "13.5"
status: scripted
stage: Periodic
flags:
  - "Is Staff Attendance live? (series.yaml decision) Confirm before publishing"
---

# 13.6 Lock a pay period and send payroll

## Goal
Check and correct a pay period's hours, lock it so payroll gets the file, and unlock it for a correction within fifteen days.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Hours grid, edit hours, Lock, CSV and PDF to payroll, versions, unlocking within 15 days
- Audit Trail

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo madrasah with Staff Attendance on, a monthly pay period that has just ended, and nothing left to review
- Payroll recipient `payroll@demo-madrasah.example` set in Settings (never a real address)
- Grid rows for Yusuf Patel, Maryam Ali and Bilal Ahmed, with one approved leave day, one absence, one adjusted day
- Bilal Ahmed's Thursday recorded as 7 h 10 min, corrected to 7 h 30 min in the video
- Payroll file v1 produced on lock (CSV and PDF ready); a v2 after the re-lock in chapter 6
- Audit Trail entries for the lock, the edit and the unlock

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

### 2. The hours grid
#### [2.1] Periods
**Say:** In the **Admin Portal**, open **Staff Attendance**, then **Periods**. It opens on the current pay period: one row for each staff member, one column for each day, and a **Period total**.
**Show:** Sidebar → Admin Portal → Staff Attendance → Periods. Use "Previous period" to open the period that just ended. Spotlight the grid.

#### [2.2]
**Say:** Leave, absences and adjusted days are marked in the grid. Tap **Needs review** to see only the rows still waiting.
**Show:** Spotlight a Leave pill, an Absent cell and an Adjusted cell. Click "Needs review": "Nothing left to review in this period." Click "Everyone".

### 3. Edit hours
#### [3.1] Change a day
**Say:** To correct a day, tap its cell. Enter the **Hours** and **Minutes**, add a **Reason** if you like, and tap **Save**. The staff member is told either way.
**Show:** Click Bilal Ahmed's Thursday cell (7h 10m). Set Hours 7, Minutes 30, Reason "Locked up after the evening class". Click "Save"; the toast "Hours saved" and the cell is marked Adjusted.

#### [3.2]
**Say:** If you change your mind, open the cell again: **Use recorded time** puts the system's figure back.
**Show:** Reopen the cell and spotlight "Use recorded time". Click "Cancel".

### 4. Lock the period
#### [4.1] Lock period
**Say:** When everything is settled, tap **Lock period**. Ad-Din asks you to confirm that the hours will be signed off and the payroll file produced.
**Show:** Spotlight "Everything is settled. You can lock this period." Click "Lock period"; the dialog "Lock this period?" opens.

#### [4.2]
**Say:** Tap **Lock period** again. The period now shows **Locked**, and the hours are final.
**Show:** Click "Lock period" in the dialog. The toast "Period locked." The header shows Locked and "v1".

### 5. The payroll file
#### [5.1] Sent automatically
**Say:** The first time you lock a period, the payroll file is emailed to your payroll address automatically.
**Show:** Zoom on "Version 1 was sent to payroll@demo-madrasah.example."

#### [5.2] Download
**Say:** For your own copy, tap **Download**, then choose **CSV spreadsheet** or **PDF document**. They're the same files payroll receives.
**Show:** Click "Download v1"; the menu shows CSV spreadsheet and PDF document. Click "CSV spreadsheet".

#### [5.3] Send again
**Say:** To send it again, tap the send button and confirm with **Send**. You can do this at any time while the period stays locked.
**Show:** Click "Send v1 to payroll"; the dialog "Send this payroll file?" opens. Click "Send"; the toast "Payroll file sent."

### 6. Unlock for a correction
#### [6.1] Unlock period
**Say:** If you find a mistake, tap **Unlock period** within fifteen days of the period's end. The files already produced are kept.
**Show:** Spotlight the hint under the button. Click "Unlock period", then confirm "Unlock period" in the dialog. The toast "Period unlocked."

#### [6.2] Versions
**Say:** Fix the hours, then lock again. Each lock produces the next version of the payroll file: v2, v3, and so on. After fifteen days, the period is final.
**Show:** Edit one cell, lock again. The header shows "v2" and "Send v2 to payroll".

#### [6.3] Audit Trail
**Say:** Every change is kept in the **Audit Trail**: who made it, when, and what changed. Nothing there can be edited or deleted.
**Show:** Click "Audit Trail" in the section list. Spotlight the newest records: the lock, the unlock, the hours edit.

### 7. Next
#### [7.1] Close
**Say:** Your pay period is locked and payroll has the file. For the staff side, watch 13.7, Check in, breaks and check out, and 13.8, Timesheet, time off and pay periods.
**Show:** End card with two tiles: "13.7 Check in, breaks and check out" and "13.8 Timesheet, time off and pay periods".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · critic · 6 changes: [1.1] second-person opening; [2.1] full sidebar path; [3.2]/[5.3]/[6.1] elliptical questions ("Changed your mind?", "Need to send it again?", "Spotted a mistake?") made plain, [3.2] says the cell is reopened; [7.1] end-card tiles named by number; fold: Audit Trail added to Covers ([6.3] already shows it)
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes

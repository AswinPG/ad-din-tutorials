# Prompt log: 04.3 Import and export a prayer timetable

Every instruction given to Claude for this video, newest first, with the result.
Format: date · who · prompt (verbatim or summarised) · outcome / commit.

- 2026-11-06 · Imran · "do it for all the planned ones now" (panel review, apply clear fixes) · 3 changes: [4.2] zip file explained, [6.2] end tiles by number, Maple Grove demo names and December as the month on camera
- 2026-11-03 · manager · "use a critic subagent to criticise and find flaws in the script, make it better" · critic pass: 3 fixes (opening; date-format tip [4.3a]; close split into [6.2]).
- 2026-11-03 · manager · "use a sub agent to validate the script" · validator pass: 3 fixes (import error toast reads "Import failed. Row 12: ..." and the window stays open; row 12 = 12th data row; demo clock so March opens the export year) + 1 flag (Excel rewrites yyyy-MM-dd dates).
- 2026-11-03 · manager · "Write all the scripts now and double check nothing is missed." · Scripted from origin/master (d36d69ed8); 3 flags (export covers the calendar year only, internal wiki link, zip/CSV shots outside the app); added You'll need.

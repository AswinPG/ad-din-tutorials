# Prompt log: 04.3 Import and export a prayer timetable

Every instruction given to Claude for this video, newest first, with the result.
Format: date · who · prompt (verbatim or summarised) · outcome / commit.

- 2026-11-03 · manager · "use a sub agent to validate the script" · validator pass: 3 fixes (import error toast reads "Import failed. Row 12: ..." and the window stays open; row 12 = 12th data row; demo clock so March opens the export year) + 1 flag (Excel rewrites yyyy-MM-dd dates).
- 2026-11-03 · manager · "Write all the scripts now and double check nothing is missed." · Scripted from origin/master (d36d69ed8); 3 flags (export covers the calendar year only, internal wiki link, zip/CSV shots outside the app); added You'll need.

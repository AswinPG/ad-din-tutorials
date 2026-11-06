# Prompt log: 13.6 Lock a pay period and send payroll

Every instruction given to Claude for this video, newest first, with the result.
Format: date · who · prompt (verbatim or summarised) · outcome / commit.

- 2026-11-06 · Imran · "do it for all the planned ones now" (panel review, apply clear fixes) · 6 changes: [2.1] Say names the back arrow the Show uses, new [3.2a] hours for Manual only staff (Add on an empty day, marked Entered; en.json 4205, 4297), [4.1] active wording, new [6.2a] later versions are not emailed by themselves, send them yourself (IPayrollOutputSendService.cs 76-78), Covers updated, demo names from the Maple Grove demo world (teacher Bilal Hussain, office Khadija Usman, caretaker Idris Malik) and Omar Khalid, demo payroll address on maplegrove.example.com
- 2026-11-03 · manager · "Decisions via chat" · Staff Attendance is live: 'Is Staff Attendance live?' hold flag removed; publish normally
- 2026-11-03 · manager · "use a critic subagent to criticise and find flaws in the script, make it better" · critic pass: 6 changes incl. fold (Audit Trail in Covers; [6.3] already shows it)
- 2026-11-03 · manager · "use a sub agent to validate the script" · validator pass: no changes; periods, lock, send, download, unlock and audit match master
- 2026-11-03 · manager · "Write all the scripts now and double check nothing is missed." · Scripted from origin/master (d36d69ed8); reused the staff-attendance-launch walkthrough wording and order where it still matches; live flag; added an Audit Trail scene (not covered elsewhere).

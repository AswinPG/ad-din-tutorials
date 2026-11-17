# Prompt log: 13.3 Set up staff and shifts

Every instruction given to Claude for this video, newest first, with the result.
Format: date · who · prompt (verbatim or summarised) · outcome / commit.

- 2026-11-17 · Imran · "I want every video to be a bit more detailed but lets keep it under 10 minutes" · 11 scenes added (why shifts, Description, several work blocks and Clear all, Floating allowance, Search staff and moving between templates, Edit/Duplicate/Delete, No zone, Manual only and Not tracked in practice, tracking change rules, Which pattern, Will fail and the email warnings); demo template "Weekend caretaker" added; checked against master d0604ce7f; narration 3:25 → 6:10, target 4:30 → 7:30 / docs(13.3): add more detail
- 2026-11-06 · Imran · "do it for all the planned ones now" (panel review, apply clear fixes) · 5 changes: [3.4] with no term a template gives no shifts (en.json 3321), [4.2] template edits apply from today if not checked in yet, otherwise tomorrow (en.json 3278), [6.1] "your staff" and if someone is missing give them a role first (videos 03.3, 03.4; en.json 3151-3152), [6.4] Manual only time is entered on the Periods page, "admin"; demo names from the Maple Grove demo world (teacher Bilal Hussain, office Khadija Usman, caretaker Idris Malik), and the demo admin's own row in Demo data
- 2026-11-03 · manager · "Decisions via chat" · Staff Attendance is live: 'Is Staff Attendance live?' hold flag removed; publish normally
- 2026-11-03 · manager · "use a critic subagent to criticise and find flaws in the script, make it better" · critic pass: 5 changes (opening, path, Say/Show matches, numbered end card)
- 2026-11-03 · manager · "use a sub agent to validate the script" · validator pass: 6 fixes (template Add → Work/Break → Add hours/Add break, Paid/Unpaid toggle, linking sets Shift template + Auto so [6.5] only adds the zone, Yusuf pre-set to Class routine, linked card text, readiness-warning demo data)
- 2026-11-03 · manager · "Write all the scripts now and double check nothing is missed." · Scripted from origin/master (d36d69ed8); reused the staff-attendance-launch walkthrough wording and order where it still matches; live flag.

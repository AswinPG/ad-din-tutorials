# Prompt log: 13.4 Attendance settings and leave

Every instruction given to Claude for this video, newest first, with the result.
Format: date · who · prompt (verbatim or summarised) · outcome / commit.

- 2026-11-17 · Imran · "I want every video to be a bit more detailed but lets keep it under 10 minutes" · 16 scenes added: every remaining control on the Settings page (Week starts on and the re-cut question, day counting and payment basis, weekend and holiday choices, Calendar shows, grace band range and check-in window, unended break range, Reminder lead time, Routine-derived breaks, Location accuracy limit, Rollout pause, payroll address rules, mandatory reasons and removal, Require a note, leave category rules, Documents for staff, Old register, Audit Trail) plus why; checked against master d0604ce7f; narration 3:27 → 6:59, target 4:30 → 8:30 / docs(13.4): add more detail
- 2026-11-07 · Imran · "All recommended" (docs/reviews/2026-11-06-decisions-all-tracks.md) · added chapter 5 Location and privacy ([4a.1]-[4a.2], Location retention); later chapter headings renumbered, scene IDs unchanged; Covers, demo data
- 2026-11-06 · Imran · "do it for all the planned ones now" (panel review, apply clear fixes) · 6 changes: [2.3] says what signing off means (locking, video 13.6) and plainer order, [2.4] Ad-Din doesn't pay anyone (en.json 5151), [4.1] Track breaks off deducts unpaid breaks automatically (en.json 3524), [5.1] only the first lock of a period emails the payroll file (IPayrollOutputSendService.cs 60-78), [5.2] "admins", demo payroll address on maplegrove.example.com
- 2026-11-03 · manager · "Decisions via chat" · Staff Attendance is live: 'Is Staff Attendance live?' hold flag removed; publish normally
- 2026-11-03 · manager · "use a critic subagent to criticise and find flaws in the script, make it better" · critic pass: 3 changes (opening, path, numbered end card)
- 2026-11-03 · manager · "use a sub agent to validate the script" · validator pass: 3 fixes (lists start collapsed, on-screen list order, new category starts Unpaid)
- 2026-11-03 · manager · "Write all the scripts now and double check nothing is missed." · Scripted from origin/master (d36d69ed8); reused the staff-attendance-launch walkthrough wording and order where it still matches; live flag.

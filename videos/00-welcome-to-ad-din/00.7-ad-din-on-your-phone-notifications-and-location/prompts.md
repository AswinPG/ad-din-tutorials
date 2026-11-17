# Prompt log: 00.7 Ad-Din on your phone: notifications and location

Every instruction given to Claude for this video, newest first, with the result.
Format: date · who · prompt (verbatim or summarised) · outcome / commit.

- 2026-11-17 · Imran · "I want every video to be a bit more detailed but lets keep it under 10 minutes" · expanded from the app source at 7f0e6bf72: 3:36 → 5:22 narration, target 4:00 → 6:30, 10 scenes added (closing the reminder, staff check-in line, iPhone hint, location services off, precise-sheet hints and Open Settings, the Settings path, banner hides by itself, which news arrives and the Push switch)
- 2026-11-06 · Imran · "can you use sub agents like a normal user and video directors, scrip writers, program managers, product owner to critisise and validate the scripts" (apply clear fixes) · review panel, 11 changes (latest app, [1.2], [2.1], [2.3], [3.2], [4.2] staff line dropped, [4.3], [5.4], [6.3], [7.1], Maple Grove Masjid push); narration and picture / docs(00.7): apply review panel fixes
- 2026-11-03 · manager · "Decisions via chat" · Phone screens decided: permission dialogs ([3.1], [3.2], [4.3]) and the lock-screen notification ([6.3]) are captured on a real device or emulator; Show lines, flag and demo data updated (Show only, so translations are unaffected)
- 2026-11-03 · manager · "use a critic subagent to criticise and find flaws in the script, make it better" · critic pass: 5 changes: [1.1] second-person opening, no phrasal verb, [2.3] no elliptical question or idiom, [4.2] "show up" replaced (Say and Caption), [6.2] clear count line, [7.2] end tiles by number
- 2026-11-03 · manager · "use a sub agent to validate the script" · validator pass: all labels found; [6.3] fixed (a tapped message notification opens the app, not the inbox; flagged as app gap), [6.2] Show wording.
- 2026-11-03 · manager · "Write all the scripts now and double check nothing is missed." · Scripted from origin/master (d36d69ed8); flags: Allow vs 'Turn on', no 'View' on the in-app banner (Android fallback only), demo triggers the banner via the addin:push event, stubbed AdDinBridge, OS screens stylised, shell 2.0.52+ for the precise sheet.

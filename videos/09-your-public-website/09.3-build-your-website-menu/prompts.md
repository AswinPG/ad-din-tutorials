# Prompt log: 09.3 Build your website menu

Every instruction given to Claude for this video, newest first, with the result.
Format: date · who · prompt (verbatim or summarised) · outcome / commit.

- 2026-11-17 · Imran · "I want every video to be a bit more detailed but lets keep it under 10 minutes" · 7 scenes added (why a short menu, link tags and How menus work, the internal pages, edit an item again, inside a submenu, external links in a new tab, when visitors see it and undo); narration 2:03 → 3:40, target 3:45 → 5:30 / docs(09.3): add more detail
- 2026-11-06 · Imran · "do it for all the planned ones now" (panel review, apply clear fixes) · 7 changes: [1.1] second person, no phrasal verb, [1.2] names 04.9, [4.2] and [6.1] "delete icon" (not "bin") and nothing changes until you save, chapter 6 renamed (no "tidy up"), [6.2] no longer promises Ad-Din blocks an incomplete save (haveMenuError never true): check each item's link first, Caption, Show and a new flag to match, [7.1] names both end tiles by number; demo names match the Maple Grove demo world
- 2026-11-03 · manager · "use a critic subagent to criticise and find flaws in the script, make it better" · critic pass: 0 changes: clear and well paced; one taste call left for the manager ([4.1]/[4.2] builds a top-level item, then deletes it).
- 2026-11-03 · manager · "use a sub agent to validate the script" · validator pass: 2 fixes (default-menu count, demo data); app bug noted: client-side menu check never blocks save.
- 2026-11-03 · manager · "Write all the scripts now and double check nothing is missed." · Scripted from origin/master (d36d69ed8); flags: "Volonteer Form" default item, no delete confirmation.

# Prompt log: 02.2 Get Ad-Din Premium for yourself

Every instruction given to Claude for this video, newest first, with the result.
Format: date · who · prompt (verbatim or summarised) · outcome / commit.

- 2026-11-17 · Imran · "I want every video to be a bit more detailed but lets keep it under 10 minutes" · 7 scenes added (what's included, renewal and sharing terms, failed payment, what changes, end of a cancelled plan, store-plan steps, organisation seats); narration 3:30 → 4:48, target 4:15 → 5:30 / docs(02.2): add more detail
- 2026-11-06 · Imran · "approved" (the recommended options in docs/reviews/2026-11-06-panel-00.4-02.3.md) · [1.1]/[1.1a] who needs Premium, ask your madrasah first (decision 11), [2.3] no refunds (decision 13), real-device capture flag (decision 14)
- 2026-11-06 · Imran · "can you use sub agents like a normal user and video directors, scrip writers, program managers, product owner to critisise and validate the scripts" (apply clear fixes) · review panel, 13 changes (Covers without prices, [1.1], [2.2] no price zoom, [3.1]-[3.4], [4.2] proration, [4.3] credit, [5.2], [7.1], [7.2], [8.1]); who needs Premium, CAD/tax, refunds, native page capture left for Imran / docs(02.2): apply review panel fixes
- 2026-11-03 · manager · "use a critic subagent to criticise and find flaws in the script, make it better" · critic pass: 3 changes: [1.1] seat defined, second-person opening, [6.3] no elliptical question, [8.1] Say names both end tiles
- 2026-11-03 · manager · "use a sub agent to validate the script" · validator pass: no changes. Web flow (Subscribe, Upgrade/Change Plan confirm, Cancel confirm, store messages) matches master; gear → Subscription tab opens the native page; native labels confirmed in AdDinStrings.resx (origin/Develop); Stripe plan change prorates in the API.
- 2026-11-03 · manager · "Write all the scripts now and double check nothing is missed." · Scripted from origin/master (d36d69ed8); web Stripe flow plus the native app Premium page (labels from Ad-DinMobileApp origin/Develop); prices not spoken; flags added.

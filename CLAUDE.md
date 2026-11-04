# CLAUDE.md

Guidance for Claude Code sessions in this repo: the Ad-Din customer tutorial video series.

## What this is

100 in-scope tutorial videos (104 planned; Track 11 Payment Module on hold), all scripted 2026-11-03 for the Ad-Din masjid and madrasah platform. Self-contained, five minutes or less, English screens with six narration languages (en, ar, ur, bn, ms, id) as audio and subtitle tracks on one video. Read `README.md` for the layout and commands, and `docs/` for the details.

## Rules

1. **The files are the source of truth.** Edit `series.yaml` and `videos/**/script.md`; never edit `STATUS.md` or anything in `plan/` that `npm run plan` generates. After changes run `npm run validate`, then `npm run status` (and `npm run plan:pdf` if the plan changed).
2. **Log every prompt.** Whenever you work on a video, add an entry at the top of its `prompts.md`: date · who asked · the instruction (verbatim if short, else summarised) · what you did / the commit. Add a line to `## Review log` in `script.md` when the change came from a review.
3. **Real labels only.** Copy every on-screen word from the Ad-Din app code on `origin/master` of `C:\Fantacode\Ad-Din Web-master` (Angular templates, `services/menu.data.ts`, `AdDin.Angular/src/assets/i18n/en.json`); read it with `git show`/`git grep` or the `npm run labels` export, not the working tree, which may be on another branch. Bold them in Say lines. Never invent UI text. Run `npm run labels` after scripting.
4. **Scene IDs are permanent** once a translation or `record.mjs` refers to them. Insert with suffixes (`[1.2a]`); don't renumber.
5. **Length:** max 5:00; English narration about 4:15 or less so translations fit the same picture. `validate` estimates narration length.
5a. **Style:** follow `docs/SCRIPT-STYLE.md` (self-contained, all audiences, opening and closing shape, Say/Show rules). 00.1 and 00.2 are the reference scripts.
5b. **Quality checks** before a script goes to the manager: `validate`, `labels`, a validator subagent and a critic subagent, as in `docs/QUALITY.md`. Keep `docs/FEATURE-MAP.md` current when the plan or the app changes.
6. **Translate only after `client-approved`.** Use `node tools/i18n.mjs <id> <lang>`. Button names stay English and bold; Islamic and Ad-Din terms stay as they are (see `docs/LANGUAGES.md`). New translations are `status: draft` until a native speaker reviews them.
7. **Pronunciation** fixes go in `series.yaml` → `pronunciations`, never as misspellings in scripts.
8. **Status moves only on the manager's say-so** past `scripted` and `recorded` (approvals come from the manager or the client, relayed in chat).
9. **Recording** (once `engine/` exists): the real Ad-Din app UI with mocked demo data. Never run the local Ad-Din API for it; use the mocked demo world or the agreed dev environment. App-platform videos are shown in a phone frame. See `docs/RECORDING.md`.
9a. **Voice:** Brian (`en-US-BrianMultilingualNeural`) narrates every language, set per language in `series.yaml` → `languages`; native alternatives are in the comments.
10. **Commits** follow `C:\Fantacode\gitrules.md`: commit each finished unit automatically, Conventional Commits, subject under 50 characters, scope = video ID or area (`feat(05.3): script create classes`, `docs(prompts): add batch prompt`, `chore(plan): rebuild plan pdf`). Stage specific files, never `git add .` blindly.

## Common requests

The ready-made prompts are in `docs/PROMPTS.md`; follow the matching recipe there and keep its outputs (status, review log, prompt log, commit) consistent.

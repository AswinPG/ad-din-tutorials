# CLAUDE.md

Guidance for Claude Code sessions in this repo: the Ad-Din customer tutorial video series.

## What this is

97 in-scope tutorial videos (101 planned; Track 11 Payment Module on hold) for the Ad-Din masjid and madrasah platform. Self-contained, five minutes or less, English screens with six narration languages (en, ar, ur, bn, ms, id) as audio and subtitle tracks on one video. Read `README.md` for the layout and commands, and `docs/` for the details.

## Rules

1. **The files are the source of truth.** Edit `series.yaml` and `videos/**/script.md`; never edit `STATUS.md` or anything in `plan/` that `npm run plan` generates. After changes run `npm run validate`, then `npm run status` (and `npm run plan:pdf` if the plan changed).
2. **Log every prompt.** Whenever you work on a video, add an entry at the top of its `prompts.md`: date · who asked · the instruction (verbatim if short, else summarised) · what you did / the commit. Add a line to `## Review log` in `script.md` when the change came from a review.
3. **Real labels only.** Copy every on-screen word from the Ad-Din app code in `C:\Fantacode\Ad-Din Web-master` (Angular templates and `AdDin.Angular/src/assets/i18n/en.json`). Bold them in Say lines. Never invent UI text.
4. **Scene IDs are permanent** once a translation or `record.mjs` refers to them. Insert with suffixes (`[1.2a]`); don't renumber.
5. **Length:** max 5:00; English narration about 4:15 or less so translations fit the same picture. `validate` estimates narration length.
6. **Translate only after `client-approved`.** Use `node tools/i18n.mjs <id> <lang>`. Button names stay English and bold; Islamic and Ad-Din terms stay as they are (see `docs/LANGUAGES.md`). New translations are `status: draft` until a native speaker reviews them.
7. **Pronunciation** fixes go in `series.yaml` → `pronunciations`, never as misspellings in scripts.
8. **Status moves only on the manager's say-so** past `scripted` and `recorded` (approvals come from the manager or the client, relayed in chat).
9. **Recording** (once `engine/` exists): never run the local Ad-Din API for it; use the mocked demo world or the agreed dev environment. See `docs/RECORDING.md`.
10. **Commits** follow `C:\Fantacode\gitrules.md`: commit each finished unit automatically, Conventional Commits, subject under 50 characters, scope = video ID or area (`feat(05.3): script create classes`, `docs(prompts): add batch prompt`, `chore(plan): rebuild plan pdf`). Stage specific files, never `git add .` blindly.

## Common requests

The ready-made prompts are in `docs/PROMPTS.md`; follow the matching recipe there and keep its outputs (status, review log, prompt log, commit) consistent.

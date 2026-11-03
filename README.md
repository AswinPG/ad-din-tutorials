# Ad-Din Tutorial Series

Everything needed to make, edit and re-make the Ad-Din customer tutorial videos: the plan, one editable script per video, translations, the prompts used to produce each video, and (from the pilot on) the code that records them.

**The files in this repo are the source of truth.** The plan page, the plan PDF and `STATUS.md` are all generated from them, so edit a video's files and regenerate, never the other way round.

## What's here

```
series.yaml              Parts, tracks, app source, languages + voices, pronunciations, playlists, open decisions
videos/
  05-madrasah-academic-setup/          one folder per track
    05.3-create-classes/               one folder per video
      script.md                        the video: details, goal, scenes (Say / Show), review log
      prompts.md                       every instruction given to Claude for this video, with outcomes
      i18n/ar.md, ur.md, ...           translated narration, scene by scene
      record.mjs                       (from the pilot on) the screen-recording steps for each scene
STATUS.md                generated: where every video stands, per language
plan/                    generated plan page + PDF, the estimate, archived drafts
docs/                    how-tos: script format and style, quality checks, feature map, workflow, prompts, languages, recording
tools/                   the scripts behind the npm commands below
engine/                  (from the pilot on) the recorder shared by all videos
```

## Commands

Run `npm install` once, then:

| Command | What it does |
|---|---|
| `npm run validate` | Checks every video: IDs, prereqs, lengths, scene IDs, translations that fell behind the English |
| `npm run status` | Regenerates `STATUS.md` |
| `npm run plan` / `npm run plan:pdf` | Regenerates the plan page (and the PDF) in `plan/` |
| `npm run new -- 05.9 "Archive a class"` | Adds a new video folder in the right track |
| `node tools/i18n.mjs 05.3 ar` | Starts or tops up the Arabic translation of 05.3 |
| `npm run labels [-- 05.3]` | Checks every **bold** label in the scripts exists in the Ad-Din app (`series.yaml` → `app`) |
| `npm run say -- "Every masjid uses Ad-Din"` | Previews the voice, with the pronunciation list applied (`--lang ur` for others) |
| `npm run pdf -- in.html out.pdf` | Prints any HTML file to PDF with Edge |

## Common edits

| I want to… | Edit | Then |
|---|---|---|
| Change what a video says | the scene's `**Say:**` line in `script.md` | `validate` flags translations to update; re-record |
| Change what's shown | the scene's `**Show:**` line (and `record.mjs` once it exists) | re-record |
| Change length target, audience, plan, prereqs | the front matter at the top of `script.md` | `npm run plan` |
| Rename a video | `title` in the front matter (the folder can keep its old name) | `npm run plan` |
| Move a video forward in the workflow | `status` in the front matter | `npm run status` |
| Add or change a language or voice | `languages` in `series.yaml` | — |
| Fix how a word is pronounced | `pronunciations` in `series.yaml` | `npm run say` to hear it; re-record |
| Change a role playlist | `playlists` in `series.yaml` | `npm run plan` |
| Record a decision | `decisions` in `series.yaml` → `status: settled` + `outcome` | `npm run status` |
| Fix a translation | the scene in `i18n/<lang>.md` | `node tools/i18n.mjs <id> <lang> --restamp <scene>` if the English had changed |

Each change is a commit, so the history of every video is in `git log -- videos/<track>/<video>/`.

## How a video gets made

`planned → scripted → script-approved → recorded → video-approved → client-approved → published`, with translations made once the English is client-approved. The full workflow, who does what at each step, and the review rules are in [docs/WORKFLOW.md](docs/WORKFLOW.md). Ready-to-paste prompts for every step are in [docs/PROMPTS.md](docs/PROMPTS.md).

## Rules every video follows

The full list is in [docs/SCRIPT-STYLE.md](docs/SCRIPT-STYLE.md); 00.1 and 00.2 are the reference scripts.

- Self-contained, five minutes or less (English scripted to about 4:15 so translations fit the same picture).
- For every audience: admins, teachers, parents, students and community members, in plain words.
- One video per topic: screens and on-screen text in English, with an audio track and subtitles for each language.
- Real labels only: every on-screen word in a script is copied from the Ad-Din app's own text.
- Recorded from the **real Ad-Din app** (built from master) with **mocked demo data**, never a live server. One demo masjid and madrasah throughout, so every video looks consistent and can be re-recorded.
- Web and mobile app: each track says which (`platform`: Web, App or Both); app videos are shown in a phone frame.
- One narrator voice, William (multilingual), for every language; changeable per language in `series.yaml`.
- Nothing missed, nothing wrong: every feature is mapped to a video ([docs/FEATURE-MAP.md](docs/FEATURE-MAP.md)), and every script goes through the label check, a validator agent and a critic agent before the manager sees it ([docs/QUALITY.md](docs/QUALITY.md)).

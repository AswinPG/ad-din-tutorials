# Workflow

## Status of a video

| Status | Means | Moves on when | Who |
|---|---|---|---|
| `planned` | In the plan; `Covers` filled in | the script is written | Claude |
| `scripted` | Scenes written; passed `validate`, `labels`, the validator agent and the critic agent ([QUALITY.md](QUALITY.md)) | the manager approves the script | Manager reviews (≈1.5 h) |
| `script-approved` | Narration and scenes locked for recording | the video is recorded | Claude |
| `recorded` | English video, voice and subtitles produced | the manager approves (first pass ≈1 h, second pass ≈0.5 h) | Manager reviews |
| `video-approved` | Ready for the client | the client approves in a batch review | Client, via manager |
| `client-approved` | English is final; translations can start | all languages are done and published | Claude translates, native reviewers check |
| `published` | Live on the platform | — | Manager uploads |
| `on-hold` | Out of current scope (for example Track 11, Payment Module) | someone puts it back in scope | — |

Set `status` in the video's front matter at each step, add a line to its `## Review log`, then run `npm run status`.

## Review rules

1. **Lock the format at the pilot.** The first 3–4 videos set the template (pace, cards, zooms, voice). Format changes after that multiply across every video.
2. **Notes as numbered lists**, pinned to a scene or a time: `02.3 [2.1]: say "seats", not "licences"` or `02.3 at 1:10: cut the zoom`. Claude applies a list like this in one go.
3. **Client revision**: the client reviews in batches (one per production week). The manager collects the feedback into the same numbered-list form, Claude applies it, and the manager re-checks changed videos (≈0.5 h each).
4. **Translate after `client-approved`**, never before. Every English change after translation has to be repeated in five languages.
5. **Every change is a commit** with a Conventional Commits message, scoped to the video: `feat(05.3): script create classes`, `fix(05.3): reword enrolment scene per review`.

## Where things are written down

| What | Where |
|---|---|
| What the video says and shows | `script.md` → `## Script` |
| Who asked for what, and what changed | `script.md` → `## Review log` |
| Every instruction given to Claude | `prompts.md` in the video folder |
| Decisions that affect several videos | `series.yaml` → `decisions` |
| Overall progress | `STATUS.md` (generated) |

## Batches

Work one track per session where possible: Claude keeps that area's context, so prompting is mostly kicking off and accepting. A typical weekly batch is 10–15 videos: script them, manager reviews scripts, record, manager reviews videos, client reviews the batch.

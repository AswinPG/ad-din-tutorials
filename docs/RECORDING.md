# Recording

> Status: **not built yet.** The recorder is ported during the pilot (first 3–4 videos). This page records the design so the port follows it.

## Starting point

The Staff Attendance walkthroughs were made with a recorder in `C:\Fantacode\staff-attendance-launch\video`:

- `lib/engine.mjs`: drives the real Ad-Din UI in headless Edge (Playwright), captures frames over CDP, overlays cursor, zoom, spotlight, chapter cards and captions, generates narration with `edge-tts`, and assembles the MP4 and SRT with ffmpeg.
- `scripts/admin.mjs`, `scripts/staff.mjs`: one script per video, a list of `beat(narration, actions)` calls.
- `lib/*-world.mjs`, `lib/mock.mjs`: mocked API responses so recordings don't depend on a live server.

## Port plan

1. Copy the engine into `engine/` and make it generic (no Staff Attendance specifics).
2. **Split words from actions.** Narration comes from `script.md` (and `i18n/<lang>.md`); each video's `record.mjs` only says what happens on screen for each scene ID:

   ```js
   // videos/05-madrasah-academic-setup/05.3-create-classes/record.mjs
   export default {
     start: "/madressah/Class/ListClass",
     scenes: {
       "1.1": async (s) => s.focus(s.app().locator(".class-list")),
       "2.1": async (s) => s.tap(s.button("Add Class")),
     },
   };
   ```

   Editing what a video says never touches code; editing what it shows touches only that scene's function.
3. **Multi-language timing.** Each scene lasts as long as its longest narration across all languages that have a reviewed translation. The picture is recorded once; each language's audio is placed at the same scene start times.
4. **Demo world.** One seeded demo masjid and madrasah (mocked or on dev, to be decided at the pilot), described in `engine/demo-world.md` and reused by every video.
5. Commands: `npm run record -- <id>` (English master), `npm run record -- <id> --langs ar,ur` (audio and subtitle tracks).

## Outputs

Written to `out/<id>/` (git-ignored; large):

```
out/05.3/
  master.mp4          English picture + English audio
  audio/ar.m4a ...    one audio track per language
  subs/en.srt, ar.srt, ... and .vtt
  multi.mp4           (optional) all audio and subtitle tracks muxed into one file
```

Recordings are rebuilt from the repo at any time, so only the scripts and code are versioned. Final published files are archived outside git.

## Rules carried over from the Staff Attendance work

- Never run the local API (`api-local`) for recordings; use the offline mocked world or the agreed dev environment.
- Copy labels from the current app code, not from memory.
- A step that can't find its element is skipped and logged, not allowed to stall the take; check the log after every recording.

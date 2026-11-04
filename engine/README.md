# engine

The recorder shared by all videos, ported from the Staff Attendance launch kit (`C:\Fantacode\staff-attendance-launch\video`). Design: [../docs/RECORDING.md](../docs/RECORDING.md). Demo data: [demo-world.md](demo-world.md).

## How a video is recorded

1. **Words** come from the video's `script.md`: chapters, scene IDs, Say (narration) and Caption.
2. **Voice**: `npm run voice -- <id>` writes `out/<id>/voice/en/lines.json` (Say with `series.yaml` pronunciations applied, plus the text to check) and clones every line in the IP3-A voice with `C:\Fantacode\voice-clone\batch_clone.py`, which checks each clip with speech-to-text and retries; lines scoring under 0.93 are listed as weak. `align.py` then word-times every clip. It takes about 4 minutes per minute of speech.
3. **Pictures**: `npm run record -- <id>` plays each scene's function from the video's `record.mjs` while that scene's clip plays. Each scene lasts exactly as long as its clip (plus a short pause). Captions change at sentence breaks, timed from the word alignment, and show the script's text with Ad-Din spelled normally.
4. **Output** in `out/<id>/` (git-ignored): `master.mp4`, `master.srt`, `record.log` (skipped steps, overruns, API calls the demo world did not answer), `timeline.json`.

`--voice edge` records a quick draft with the edge-tts series voice instead of the clips; `--only 2.1,2.2` films some scenes.

## Before recording

Serve the Ad-Din web app from `origin/master` on `http://127.0.0.1:4300`, from a separate read-only worktree (never switch branches in `Ad-Din Web-master`), with `node_modules` junctioned from an existing checkout:

```powershell
git -C "C:\Fantacode\Ad-Din Web-master" fetch origin master
git -C "C:\Fantacode\Ad-Din Web-master" worktree add --detach C:\Fantacode\addin-master-rec origin/master
New-Item -ItemType Junction -Path C:\Fantacode\addin-master-rec\AdDin.Angular\node_modules -Target "C:\Fantacode\Ad-Din Web\AdDin.Angular\node_modules"
cd C:\Fantacode\addin-master-rec\AdDin.Angular
node --max_old_space_size=8192 ./node_modules/@angular/cli/bin/ng serve --host 127.0.0.1 --port 4300
```

It uses the default `environment.ts`, whose API URL (`localhost:57327`) is answered by the mock. **Never run the local Ad-Din API** (`api-local*`): it starts a worker on the shared dev job queue. The browser is headless Edge, or Chrome when Edge can't start (`ADDIN_BROWSER=chrome` to choose).

## A video's record.mjs

```js
export default {
  mode: "browser",              // "browser" | "phone" | "split" (web left, phone right)
  native: ["#app2"],            // frames that play the Ad-Din app (a stub native bridge, so the app layout shows)
  world: ({ DEMO }) => ({ state: { ... }, routes: [...] }),  // extra demo data for this video
  async install(s) {},          // extra pages on the app origin (server pages, a demo inbox)
  async setup(s) {},            // off camera, before the warm-up (e.g. sign in)
  warm: ["/dashboard"],         // pages loaded off camera so they are quick on camera
  async start(s) {},            // off camera, just before filming starts
  scenes: {
    "1.1": async (s) => { ... },                 // runs while [1.1]'s clip plays
    "2.1": { prep: async (s) => {}, run: async (s) => {} },  // prep is cut from the video
  },
};
```

Scene helpers on `s`: `app()` / `app2()` (frame locators), `go(path, {frame})`, `nav(path)` (in-app navigation), `tap`, `hover`, `typeInto`, `clear`, `spot(locators)`, `zoom(locator)`, `callout(text, box)`, `card({kicker, title, sub, bullets, tiles, rows, center})`, `setMode`, `signIn(session)` / `signOut()`, `atWord("word")` (wait until the narration says it), `left()`, `soft(fn)`. A step that can't find its element is logged and skipped, never allowed to stall the take; check `record.log` after every recording.

## Files

```
record.mjs        npm run record: script.md + record.mjs + clips → master.mp4 / master.srt
voice.mjs         npm run voice: lines.json, cloning, word alignment; loadClips() for the recorder
align.py          word timestamps for a clip folder (faster-whisper, run in the voice-clone venv)
lib/engine.mjs    the stage session: browser, capture, helpers, assembly (ffmpeg)
lib/stage.html    the 1920x1080 stage: browser and phone frames, captions, spotlights, cards
lib/mock.mjs      routes every API call to the demo world; blocks other hosts except fonts and maps
demo/world.mjs    the demo world (see demo-world.md)
demo/razor.mjs    the Reset Password / Success Razor pages, rendered from origin/master
demo/inbox.mjs    a plain mock inbox
```

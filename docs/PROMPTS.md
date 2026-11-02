# Prompt playbook

Copy-paste prompts for working with Claude on this repo. Replace the `<…>` parts. Claude logs each one in the video's `prompts.md` with what it did, so anyone can see how a video came to be and repeat it.

Start every session in `C:\Fantacode\ad-din-tutorials` so Claude picks up `CLAUDE.md`.

## Planning

**Add a video**
> Add a video `<id>` "`<title>`" to track `<track>`, target `<4:00>`, prereqs `<ids>`. It should cover: `<bullets>`. Add it to the `<role>` playlist.

**Change the plan**
> Move `<id>` to after `<id>` / merge `<id>` and `<id>` / split `<id>` into two parts. Update playlists and prereqs, then rebuild the plan PDF.

**Record a decision**
> Decision: `<title>` is settled: `<outcome>`. Update series.yaml and any affected videos.

## Scripting

**Script a video**
> Script `<id>`. Check the flow on the current Ad-Din code (`C:\Fantacode\Ad-Din Web-master`) and copy every label from the app. Keep the English under 4:15. Set status to scripted.

**Script a whole track**
> Script every planned video in track `<track>`, one commit per video. Stop and ask if a flow doesn't match the plan.

**Apply review notes to a script**
> Apply these notes to `<id>`:
> 1. [`<scene>`] `<note>`
> 2. [`<scene>`] `<note>`
> Log them in the review log.

**Approve a script**
> Scripts `<ids>` are approved. Set them to script-approved.

## Recording

**Record a video**
> Record `<id>` in English from its approved script. Show me the result and its length.

**Re-record after notes**
> Fix `<id>`: `<numbered notes pinned to scenes or times>`. Re-record only the affected scenes if possible.

**App changed**
> The Ad-Din `<screen>` changed in `<branch/release>`. Find every video that shows it, update the scripts' labels, and list which need re-recording.

## Client revision

**Apply client feedback**
> Client feedback for batch `<n>`:
> 1. `<id>` [`<scene>`] `<note>`
> 2. `<id>` at `<m:ss>` `<note>`
> Apply them, re-record what changed, and list the videos I need to re-check.

**Mark a batch approved**
> The client approved `<ids>`. Set them to client-approved.

## Languages

**Translate**
> Translate `<id>` (or track `<track>`) into `<ar|ur|bn|ms|id>`. Keep button names in English and bold, Islamic terms as they are. Status draft.

**Apply a native reviewer's corrections**
> `<language>` reviewer `<name>` corrected `<id>`: `<corrections, or a pasted file>`. Apply them and mark the translation reviewed.

**Produce the language tracks**
> Produce the audio tracks and subtitles for `<id>` in all reviewed languages. Check each fits the picture.

## Housekeeping

**Where are we?**
> Run validate and status and tell me what's blocking the next batch.

**Rebuild the plan**
> Rebuild the plan page and PDF.

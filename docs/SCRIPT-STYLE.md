# Script style

The rules every script follows. `docs/SCRIPT-FORMAT.md` covers the file layout; this page covers what goes in it. Videos 00.1 and 00.2 are the reference scripts.

## Requirements for every video (agreed 2026-11-02/03)

1. **Self-contained.** A viewer who lands on this one video can follow it. Say in one line what was set up earlier ("Your classes are already in place") instead of assuming they watched it; the opening card lists what they need.
2. **Five minutes or less.** English narration aims for 4:15 or less (about 600 words at most; most videos 300–500) so the five other languages fit the same picture. `target` is the planned length including on-screen pauses.
3. **One task per video**, named as the viewer would say it.
4. **All audiences.** Speak to the role in the track (admin, teacher, parent, member) in plain words. No jargon, no internal names (no "GUID" without explaining it, no "org", "module", "API").
5. **English screens.** The app stays in English for every language; only the narration and subtitles change.
6. **Real labels only.** Every word in **bold** is copied exactly from the Ad-Din app on `origin/master` (Angular templates, `menu.data.ts`, `assets/i18n/en.json`), including capitals and spacing. If the app has a typo, use it as shown.
7. **Real UI, mocked data.** Videos are recorded from the real Ad-Din app with a mocked demo world (no live server). Write Show lines for that app, and list the demo records the video needs in `## Demo data`.
8. **Voice.** William (multilingual) narrates every language. Write for the ear: short sentences, one idea each.
9. **Nothing that misleads.** Don't promise a feature the code doesn't have. Where an open decision in `series.yaml` affects a video, script what the code does today and add a `flags:` entry.

## Shape of a script

| Part | Content |
|---|---|
| Chapter 1 | `[1.1]` opening: what this video does and who it's for, one or two sentences. `[1.2]` (optional) what you need / what's already set up. |
| Middle chapters | One chapter per step of the task, in the order the viewer does it. 2–4 scenes each. |
| Last chapter | Confirm the result ("Your class now shows in the list"), then point to the next video(s) by number and title on an end card. |

Typical size: 5–8 chapters, 12–22 scenes.

## Say lines

- One or two short sentences, under about 20 seconds (about 45 words).
- Second person, present tense: "Tap **Add Class**." Use "tap" for buttons on web and app alike.
- Bold every on-screen label the viewer must find, exactly as written in the app. Don't bold ordinary words.
- Islamic terms as the app writes them: Masjid, Madrasah, Adhan, Iqamah, Jumu'ah, Hifz, Sabaq, Dour. Product name: Ad-Din. Pronunciation is fixed in `series.yaml`, never by misspelling.
- Numbers and rules said once, simply: "at least ten characters".
- No prices, dates or names that will date the video, unless the screen shows them.

## Show lines

- Plain words for the recorder: where to go, what to click, what to type, what to spotlight or zoom.
- Start a chapter with the navigation path the first time: `Sidebar → Admin Portal → Class`.
- Name the demo records you type or pick ("Class 'Hifz Boys A'").
- Note anything to avoid on camera (broken links, real personal data, keys).

## Caption lines

Only when the subtitle should differ from what's said: usually to shorten a long Say, or to show a rule as a list. Otherwise leave it out.

## Front matter and sections when scripting

- Set `status: scripted`. Keep `id`, `title`, `prereq` unless the code shows the plan is wrong (then say so in the prompt log and in the reply).
- Adjust `target` to fit the script (never over 5:00).
- Fill `## Goal` (one sentence), `## You'll need` (only if the generated card would miss something), `## Demo data`, `## Script`.
- Every item in `## Covers` must appear in the script. If an item can't be shown (feature missing or broken), keep it in Covers, leave it out of the script, and add a `flags:` entry saying why.
- Add a prompt-log entry at the top of `prompts.md` (replace `_No prompts yet._`): `- 2026-11-03 · manager · "Write all the scripts now and double check nothing is missed." · Scripted from origin/master (d36d69ed8); <notes>.`

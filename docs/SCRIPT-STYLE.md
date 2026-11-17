# Script style

The rules every script follows. `docs/SCRIPT-FORMAT.md` covers the file layout; this page covers what goes in it. Videos 00.1 and 00.2 are the reference scripts.

## Requirements for every video (agreed 2026-11-02/03)

1. **Self-contained.** A viewer who lands on this one video can follow it. Say in one line what was set up earlier ("Your classes are already in place") instead of assuming they watched it; the opening card lists what they need.
2. **Ten minutes or less, only as long as needed.** English narration aims for 8:30 or less (about 1,200 words at most; simple features stay short) and covers every option on the screen, a worked example, what happens next and why you'd use it so the five other languages fit the same picture. `target` is the planned length including on-screen pauses.
3. **One task per video**, named as the viewer would say it.
4. **All audiences.** Speak to the role in the track (admin, teacher, parent, member) in plain words. No jargon, no internal names (no "GUID" without explaining it, no "org", "module", "API").
5. **English screens.** The app stays in English for every language; only the narration and subtitles change.
6. **Real labels only.** Every word in **bold** is copied exactly from the Ad-Din app on `origin/master` (Angular templates, `menu.data.ts`, `assets/i18n/en.json`), including capitals and spacing. If the app has a typo, use it as shown.
7. **Real UI, mocked data.** Videos are recorded from the real Ad-Din app with a mocked demo world (no live server). Write Show lines for that app, and list the demo records the video needs in `## Demo data`.
8. **Voice.** Brian (multilingual) narrates every language. Write for the ear: short sentences, one idea each.
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
- Adjust `target` to fit the script (never over 10:00).
- Fill `## Goal` (one sentence), `## You'll need` (only if the generated card would miss something), `## Demo data`, `## Script`.
- Every item in `## Covers` must appear in the script. If an item can't be shown (feature missing or broken), keep it in Covers, leave it out of the script, and add a `flags:` entry saying why.
- Add a prompt-log entry at the top of `prompts.md` (replace `_No prompts yet._`): `- 2026-11-03 · manager · "Write all the scripts now and double check nothing is missed." · Scripted from origin/master (d36d69ed8); <notes>.`

## Lessons from the critic pass (2026-11-03)

Patterns the critics found again and again across the first 100 scripts. Check every new script against them.

1. **No "you already know…" or "set up earlier".** Say what's already in place in plain words ("Your classes are already in place") so the video stands alone.
2. **Opening, one form, second person:** `[1.1]` says who it's for and what you'll do ("In this video for madrasah admins, you'll…"), never "a masjid admin does X". Vary the wording a little, keep the content. No time promises ("takes about a minute").
3. **No thin scenes.** A Say of two words ("Tap **Save**.") or a Show with nothing new ("Hold on the page") merges into the scene next to it, or gives the reason for the action.
4. **Say and Show match step for step.** If the Show taps Save, reselects a filter or re-marks a student, the Say mentions it.
5. **End card:** the closing Say names every tile on the end card, by number and title. Avoid two videos that only send viewers to each other.
6. **Add-on wording:** anything that needs the website add-on says "If your masjid has an Ad-Din website…".
7. **One term per thing** across the series: "website home page", "home masjid", the exact image label (**Image for Mobile/Web**) rather than "mobile picture".
8. **Buttons that show a count:** "The button shows how many…", not "Tap **Import** with the number of activities".
9. **Point to other videos by number** ("video 03.3"), never "the staff video". Give the full sidebar path in the first Say of every video, even a part two.
10. **Same how-to, same words:** image uploads always end with **Save & Upload**; a YouTube embed code is always "Share, then Embed". An overview video points to the task video instead of walking through it.
11. **When the demo cancels,** the Show still spotlights the button the Say names (Save), then clicks Cancel.
12. **Words with one meaning:** a *seat* is "one of your organisation's Premium seats" the first time in each video; *display* is Ad-Din's display page, *TV* or *screen* is the hardware.
13. **No elliptical questions** of any kind ("New phone?", "Spotted a mistake?", "Prefer an invoice?"); write "If you…" instead.
14. **Closing default:** "Next, video NN.N: Title." for every tile. Rotate two or three approved openings within a track.
15. **"Room", not "seat",** for space in a class section; *seat* is only a Premium seat. No "hover" in phone or parent videos.
16. **Words that don't translate.** Avoid idioms and phrasal verbs. Replace them:

| Avoid | Say instead |
|---|---|
| where your tools live | where to find your tools |
| take the tour, take a look | look at, see |
| sets it up, sets that place up | sets it, creates it |
| takes off, hear about, give it a minute | starts, learn about, wait a moment |
| a home on the web, dot org | your website, your web address |
| key (for a legend) | guide |
| halaqa (unless the app shows it) | the demo's own name, e.g. Tafsir circle |
| come back to, tidy up, grey out, sit along | return to, organise, is greyed (or: can't be tapped), sits beside |
| runs on its people, heart of, behind each prayer | plain statements of what happens |
| a seat from your pool | one of your organisation's Premium seats |
| "Short on space?" (elliptical questions) | "If the screen is crowded," |

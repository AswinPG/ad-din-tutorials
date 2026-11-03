# Script format

Each video is one `script.md`: front matter, then fixed sections. Tools read it, so keep the headings exactly as below.

## Front matter

```yaml
---
id: "05.3"                 # track.number; quoted so YAML keeps it as text
title: Create classes      # the task, as the viewer would say it
target: 4:30               # planned length (max 5:00; English narration aims for 4:15 or less)
prereq: ["05.2"]           # videos that set up what this one needs
status: scripted           # see docs/WORKFLOW.md
# Optional. Leave out to inherit the track defaults from series.yaml:
audience: [Madrasah Admin]
stage: Setup               # Start | Setup | Daily | Periodic
plan: Premium              # Free | Premium | Add-on: Website | Add-on: Prayer Times Premium
switch: Academic Activity  # Services-tab switch that must be on
platform: Web              # Web | App | Both
flags: ["Confirm it's live before publishing"]
---
```

## Sections

| Section | Purpose |
|---|---|
| `## Goal` | One sentence: what the viewer can do after watching. |
| `## You'll need` | Bullets for the opening card. Leave empty to generate it from prereq, plan and switch. |
| `## Covers` | The checklist of things the video must show. Written at planning time. |
| `## Demo data` | Records the demo organisation must contain for this video. |
| `## Script` | Chapters and scenes (below). |
| `## Review log` | Newest first: date · who · what was asked · what changed. |

## Scenes

Inside `## Script`, a chapter is `### <n>. <title>` and a scene is `#### [<chapter>.<n>] <optional label>`.

```markdown
### 1. Open Class management
#### [1.1] Where classes live
**Say:** Classes are where your students learn together. You'll find them in the Admin Portal, under Class.
**Show:** Sidebar → Admin Portal → Class. Zoom on the class list.

#### [1.2]
**Say:** Each card shows the class, its homeroom teacher, and whether it's open for enrolment.
**Show:** Spotlight the first class card.

### 2. Add a class
#### [2.1]
**Say:** To add one, tap **Add Class**.
**Show:** Click "Add Class"; the form opens.
**Caption:** To add one, tap Add Class.
```

- **Say** is the English narration: one or two short sentences, about 20 seconds at most (validate warns past that). On-screen labels go in **bold**, spelled exactly as the app shows them.
- **Show** is what happens on screen, in plain words. The recorder's code for the scene lives in `record.mjs`, keyed by the same scene ID.
- **Caption** is optional; it replaces the subtitle text when it should differ from what's said.
- **Scene IDs are permanent.** Translations and recording code refer to them. To insert a scene between `[1.2]` and `[1.3]`, call it `[1.2a]` rather than renumbering. Renumber only before any translation exists.
- Each scene lasts as long as its longest narration across all languages, so the English may hold on screen a little longer than it speaks.

## Translations: `i18n/<lang>.md`

Created by `node tools/i18n.mjs <id> <lang>`. Same chapters and scene IDs, Say (and Caption) only:

```markdown
---
lang: ar
language: Arabic
voice: en-AU-WilliamMultilingualNeural
status: draft          # draft → reviewed (after a native speaker checks it)
translated_by: Claude
reviewer: ""
---
### 1. فتح إدارة الصفوف
#### [1.1] <!-- en:3f9a2c1b -->
**Say:** ...
```

The `en:` stamp is a fingerprint of the English narration it was translated from. When the English changes, `npm run validate` lists the scenes to update; after updating one, `node tools/i18n.mjs <id> <lang> --restamp <scene>` records that it's current again.

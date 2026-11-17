---
id: "04.10"
title: Live streaming
target: 4:00
prereq:
  - "03.1"
status: scripted
flags:
  - "The bin on a stream deletes it at once, with no confirmation; the script only hovers it"
  - "Choosing another organisation in the picker doesn't reload the streams (they load only when the page opens), so the slots keep showing the first masjid's players; the script stays on the home masjid"
  - "Video Live Streaming only accepts a YouTube embed code (https://www.youtube.com/embed/...); anything else gets \"The Embed code you've given is Invalid\""
---

# 04.10 Live streaming

## Goal
Add your masjid's YouTube video, audio and Facebook live streams so members can watch or listen in Ad-Din.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->
- Admin rights for your masjid
- A streaming account, such as YouTube, Mixlr or Facebook, and its embed code

## Covers
- Manage Streaming: Video, Audio and Facebook embed slots
- why stream (who it helps, what to stream, audio and data)
- one stream per slot; only admins see the pencil and delete icon
- copy the whole embed code; Cancel; the invalid-code message
- updating the code for a new stream; the not-available message members see
- members pick a masjid they follow; no alert when you go live

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo masjid "Maple Grove Masjid" as the home masjid, signed in as its masjid admin; all three slots empty at the start
- A YouTube embed code for a demo live stream, a Mixlr embed code, and a Facebook video embed code (demo channels only)
- Players that render in the slots after saving (or stills of them)
- A plain web address (not an embed code) to paste for the invalid-code message ([3.3a]); a cut-in of a card showing the not-available warning ([5.1a])
- A member account that follows the masjid, for the closing shot in the app

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Before you start
#### [1.1] Opening
**Say:** Live streaming lets people follow your masjid's lessons and talks from home. In this video for masjid admins, you'll add video, audio and Facebook streams.
**Show:** Title card: "Live streaming".

#### [1.2]
**Say:** You'll need admin rights for your masjid, and an account with a streaming service, such as YouTube, Mixlr or Facebook.
**Show:** Opening card from You'll need.

#### [1.2a] Why use it
**Say:** A stream helps people who can't come in person, such as the sick, the elderly, travellers and families at home. Many masjids stream the Friday khutbah, weekly lessons and talks in Ramadan. Audio uses less mobile data than video.
**Show:** Phone frame: the member's app Live Streaming page with the three cards closed.

### 2. Open Live Streaming
#### [2.1] Where it lives
**Say:** In the sidebar, tap **Live Streaming**. Your home masjid is already picked at the top.
**Show:** Sidebar → Live Streaming. Spotlight the organisation picker showing "Maple Grove Masjid".

#### [2.2] Three slots
**Say:** There are three slots: **Audio Live Streaming**, **Video Live Streaming** and **Facebook Live Streaming**. Each one says when it's empty.
**Show:** Spotlight the three cards with "No audio live streaming", "No video live streaming" and "No Facebook live streaming".

#### [2.2a]
**Say:** Each slot holds one stream at a time. Members can open the page too, but only your masjid's admins see the pencil and the delete icon.
**Show:** Spotlight the pencil and delete icons on one card.

### 3. Add a YouTube stream
#### [3.1] Get the code
**Say:** First, get the code. On YouTube, open your stream, choose Share, then Embed, and copy the code.
**Show:** Browser tab with the demo YouTube stream; Share → Embed; copy the code. Keep any real channel details out of shot.

#### [3.2] Paste it
**Say:** Back in Ad-Din, tap the pencil on **Video Live Streaming**. The **Manage Streaming** window opens.
**Show:** Click the pencil on the Video Live Streaming card. The window shows the masjid name and an empty Embed Code box.

#### [3.2a]
**Say:** Copy the whole code, from the start to the end. A web address alone isn't enough. To close the window without saving, tap **Cancel**.
**Show:** Zoom on the empty box with its hint "Paste your service channel embed code here"; spotlight Cancel.

#### [3.3] Save
**Say:** Paste the code into **Embed Code**, and tap **Save**. Ad-Din checks that it's a YouTube embed code before saving it.
**Show:** Paste; click Save. Toast "Successfully added the Live Streaming Channel". The player appears in the card.

#### [3.3a] If the code is wrong
**Say:** If the code isn't right, Ad-Din says **The Embed code you've given is Invalid**, and nothing is saved. Copy the embed code again, and make sure it's for the right service.
**Show:** Open the pencil again; paste a plain web address; click Save: the toast "The Embed code you've given is Invalid". Click Cancel; the player stays.

### 4. Add audio and Facebook
#### [4.1] Audio
**Say:** For audio, such as Mixlr, tap the pencil on **Audio Live Streaming**, paste the embed code from your audio service, and tap **Save**.
**Show:** Click the pencil on Audio Live Streaming; paste the Mixlr code; Save. The audio player appears.

#### [4.2] Facebook
**Say:** For Facebook, tap the pencil on **Facebook Live Streaming**, paste the embed code for your Facebook video, and tap **Save**.
**Show:** Click the pencil on Facebook Live Streaming; paste the Facebook code; Save. The Facebook player appears.

### 5. Change or remove
#### [5.1]
**Say:** To change a stream, tap the pencil and paste the new code. To remove one, tap the delete icon. It goes straight away, without asking, so tap with care.
**Show:** Hover the pencil, then the bin on the Facebook card; don't click.

#### [5.1a] Example
**Say:** For example, if you start a new YouTube stream each Friday, update the code before the khutbah. If a stream can't play, members see **Live Streaming is not available right now!**
**Show:** Cut-in: the card's warning sign with "Live Streaming is not available right now!" and "Please try again!".

### 6. What members see
#### [6.1]
**Say:** Members open **Live Streaming** and tap a stream to watch or listen. They only see the streams you've added.
**Show:** Phone frame: the member's app, Live Streaming. At phone width the cards start closed; tap Video Live Streaming to open its player, then Audio Live Streaming.

#### [6.1a] Tell people
**Say:** Members can pick any masjid they follow under **Select an organisation**. Ad-Din doesn't tell them when you go live, so send a message before you start.
**Show:** Phone frame: tap the organisation picker; Maple Grove Masjid is selected.

#### [6.2] Close
**Say:** Your live streams are ready. Next, video 15.6: Tasbeeh, live streams, gallery and forms, to see the member's side. Or video 07.2: Send a message to your community, to tell people when you go live.
**Show:** End card with two tiles: "15.6 Tasbeeh, live streams, gallery and forms" and "07.2 Send a message to your community".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 1:48 → 3:01 narration, 6 scenes added: why stream, one stream per slot and admin-only icons, whole code and Cancel, invalid-code message, updating the code and the not-available message, members' picker and no go-live alert
- 2026-11-06 · panel (user, director, writer, PM, PO) · 4 changes: [5.1] "delete icon" instead of "bin", [6.1] members tap a stream to open it, and the Show opens the cards, which start closed at phone width (liveStreaming.component.ts ngOnInit), [6.2] names both end tiles by number; demo names match the Maple Grove demo world
- 2026-11-03 · critic · 2 changes: second-person opening, [6.2] close explains both end tiles
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes

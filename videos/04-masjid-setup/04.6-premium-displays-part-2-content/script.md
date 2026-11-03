---
id: "04.6"
title: "Premium displays, part 2: content"
target: 5:00
prereq:
  - "04.5"
status: scripted
plan: "Add-on: Prayer Times Premium"
flags:
  - "Makrooh notices only show when Minutes Before/After Zawal and the Al-Duha minutes are above zero, and those boxes on Calculation Method can only be edited with the Custom method; for masjids on a preset method the notices may never appear. The script says the times come from the calculation settings and doesn't promise more"
  - "The display previews are pages served by the Ad-Din server, not the Angular app; the mocked demo world must stub them, or those shots come from the agreed dev environment"
  - "The \"Learn more\" links on Contents and Ticker Message open the internal ad-din.atlassian.net wiki; don't click them on camera"
---

# 04.6 Premium displays, part 2: content

## Goal
Fill a premium display with posters, events and a scrolling ticker, and set its night mode, Makrooh notices, Taraweeh poster, second language and colours.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Contents, Ticker Message, events on the TV, Night Mode, Makrooh Times, Taraweeh Poster, Alternate Language, colours

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo masjid "Masjid Al-Noor" with an active Prayer Times Premium add-on, signed in as its masjid admin; Horizontal Display 1 laid out as in 04.5
- Two upcoming masjid events (so the Events switch has something to show)
- A 1920 × 1080 poster and a 1080 × 1920 poster for new content "Weekend Quran Class", dated next week, all five prayer periods ticked
- A ticker message "Masjid office open 10 AM to 4 PM" for the same dates
- Language Settings with the default names: English titles, and Arabic in every Alternative Language Settings and Alternative Islamic Months Title box (Ad-Din's default); a Taraweeh preset poster available
- Calculation settings with Minutes Before Zawal and the Al-Duha minutes above zero, so the Makrooh notices can show
- Previews (or stubs) of Horizontal Display 1 with the poster, the ticker and the custom colours

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Before you start
#### [1.1] Opening
**Say:** This is part two of premium displays. A masjid admin adds posters, events and a scrolling message, then sets night mode, Ramadan posters, a second language and colours.
**Show:** Title card: "Premium displays, part 2: content".

#### [1.2]
**Say:** You'll need the Prayer Times Premium add-on, and a display already chosen and laid out, as in part one.
**Show:** Opening card from You'll need.

### 2. Create content
#### [2.1] Contents tab
**Say:** In **Prayer Times**, open the **Contents** tab. You create each poster once here, then choose which displays show it. Tap **Create**.
**Show:** Sidebar → Masjid → Prayer Times → "Contents". The list of existing content; click Create.

#### [2.2] When it shows
**Say:** Type a **Title**. Under **Active Between**, pick the **From** and **To** dates. Every day of the week is on; tap a day's letter to switch it off.
**Show:** Type "Weekend Quran Class". Pick next week's dates; tap M, T, W, T and F so only the two S letters stay highlighted.

#### [2.3] Type and times
**Say:** Under **Content Type**, choose **Image**, or a short video for the Content Only displays. Under **Show Between**, tick the parts of the day, such as Fajr to Dhuhr.
**Show:** Leave Image selected; hover Video and its note. Spotlight the five Show Between boxes, all ticked.

#### [2.4] Pictures
**Say:** Under **HORIZONTAL DISPLAY** and **VERTICAL DISPLAY**, upload a picture for each shape. **Full Screen** fills the screen; the other choice leaves room for prayer times or headers.
**Show:** Under HORIZONTAL DISPLAY, keep Full Screen; click Upload Image, then Choose Image in the "Crop and upload image" window, pick the wide poster and click Save & Upload. Do the same under VERTICAL DISPLAY with the tall one.

#### [2.5] Displays and save
**Say:** Under **Active for following displays**, untick any display that shouldn't show it. Tap **Save**.
**Show:** Spotlight the display checkboxes. Click Save: toast "Content created successfully!"; the card appears with "Active".

### 3. Content and events on a display
#### [3.1]
**Say:** Now open **Premium Displays** and pick your display. In **Contents & Events**, switch on **Contents**, and switch on **Events** to show your masjid's upcoming events too.
**Show:** Premium Displays → Horizontal Display 1 → Contents & Events. Turn on both switches.

#### [3.2]
**Say:** **Stop before Salat** and **Start after Salat** pause the slides around each prayer, in minutes. **Scroll Speed** is how many seconds each slide stays. Tap **Save**.
**Show:** Type 5, 10 and 10. Click Save; the preview shows the poster.

### 4. Ticker message
#### [4.1] Write it
**Say:** A ticker is a line of text that scrolls across the screen. On the **Ticker Message** tab, tap **Create**, and type your message in **Ticker Message Title**.
**Show:** Click the "Ticker Message" tab; Create; clear the pre-filled "New Ticker Message" and type "Masjid office open 10 AM to 4 PM".

#### [4.2]
**Say:** Pick the dates, days and times, choose the displays as before, and tap **Save**.
**Show:** Set the same dates; leave all displays ticked. Click Save: toast "Ticker message created successfully!".

#### [4.3] Show it
**Say:** On your display, open **Ticker Message** and switch it on. Choose the colours, font and **Scroll direction**, and tap **Save**.
**Show:** Display Controls → Ticker Message. Turn on the Ticker Message switch; pick a background and font colour; leave "Scroll right to left". Click Save.

#### [4.4]
**Say:** Turn on **Show Prayer Time changes with ticker message**, and upcoming time changes scroll by as well.
**Show:** Spotlight that switch.

### 5. Night and Makrooh times
#### [5.1] Night Mode
**Say:** **Night Mode** rests the screen overnight. Switch it on, choose **Dim** or **Blackout**, and set the minutes **After Isha** and **Resume Before Fajr**. Tap **Save**.
**Show:** Click Night Mode. Turn it on; select Blackout; type 60 and 30. Click Save.

#### [5.2] Makrooh Times
**Say:** **Makrooh Times** shows a notice when Salah is disliked: after sunrise and around Zawal. Switch on each notice, and choose an image or a message.
**Show:** Click Makrooh Times. Turn on "Makrooh time notice for Sunrise" and "Makrooh time notice for Zawal"; "Or setup a message" is already selected on each, with its default text.

#### [5.3]
**Say:** The notice times come from your calculation settings. **Force over content** is on to start, and keeps the notice in front of everything else. Tap **Save**.
**Show:** Spotlight the line about Calculation Settings, then the Force over content switch at the top (already on). Click Save.

### 6. Taraweeh poster
#### [6.1]
**Say:** **Taraweeh Poster During Ramadan** shows a poster after Isha, and only in Ramadan. Switch it on, and set **Start after isha** and **Stop After** in minutes.
**Show:** Click the menu item. Turn it on; type 15 and 90.

#### [6.2]
**Say:** Choose **Select from presets**, or **Upload Image** for your own. With your own image on a wide display, choose **Split** or **Full**. Tap **Save**.
**Show:** Pick a preset from the list; its image shows. Click Save.

### 7. Language and colours
#### [7.1] Second language
**Say:** For a second language, open the **Language Settings** tab. Under **Alternative Language Settings**, Ad-Din fills in Arabic names to start; change any you like, but leave none empty. Tap **Save**.
**Show:** Click the "Language Settings" tab. Spotlight the Arabic names under Alternative Language Settings. Click Save.

#### [7.2]
**Say:** Then, on your display, open **Alternate Language Settings**, switch on **Display Alternate Language**, and set the **Language Transition Duration** in seconds. Tap **Save**.
**Show:** Premium Displays → Alternate Language Settings. Turn it on; type 10. Click Save.

#### [7.3] Colours
**Say:** Finally, **Display Color Controls**. Pick a ready-made set under **Select Preset**, or choose **Custom** for your own colours and fonts. Tap **Save**.
**Show:** Click Display Color Controls. Open Select Preset, pick a preset, click Save; the preview changes colour.

### 8. Next
#### [8.1] Close
**Say:** Your display is complete. Open its link on the TV in your prayer hall. Next, set up repeating events, or tell people about your masjid.
**Show:** Click Refresh: the full preview with poster and ticker. End card with two tiles: "08.2 Repeating events and events on the masjid TV" and "04.7 About, staff list and facilities".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · validator · checked against master d36d69ed8 · 5 fixes: Save & Upload crop step for posters, clear the pre-filled ticker title, Makrooh message and Force over content are on by default, alternative names come pre-filled in Arabic and none may be empty, demo data

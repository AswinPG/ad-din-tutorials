---
id: "04.5"
title: "Premium displays, part 1: layout"
target: 4:30
prereq:
  - "04.4"
status: scripted
plan: "Add-on: Prayer Times Premium"
flags:
  - "The display previews and display URLs are pages served by the Ad-Din server (AdDin.Web public/NewVerticalDisplay1 and the rest), not the Angular app. Decided 2026-11-03: record those shots from the dev environment with the demo masjid's data"
  - "Covers' \"Vertical and Horizontal presets\" is scripted as the six display choices (Vertical Display 1, 2, Content Only; Horizontal Display 1, 2, Content Only). The colour presets (Select Preset) are in 04.11"
  - "Copy Embed Code always writes a portrait 9:16 iframe, even for the horizontal displays; the script doesn't show the pasted code"
---

# 04.5 Premium displays, part 1: layout

## Goal
Choose one of the six premium displays and set its layout, which Salah times it shows, the date and time header, the Iqamah countdown and what happens during Salah.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Vertical and Horizontal presets, Layout, Salah Control, Date & Time, Iqamaah Countdown & Poster, Display During Salah

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo masjid "Maple Grove Masjid" with an active Prayer Times Premium add-on, signed in as its masjid admin
- Iqamah times for today, logo and masjid name set (for Layout 2)
- Horizontal Display 1 starting on Layout 1, all daily prayers and Jumu'ah ticked, Iqamaah countdown off, Display During Salah off
- Previews of Horizontal Display 1, recorded from the dev environment with the demo masjid's data, that change after each save: Layout 2, alternating Begins/Adhan column, countdown screen with the default message, dimmed screen

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Before you start
#### [1.1] Opening
**Say:** Premium displays turn any TV into a full prayer-time screen. In part one of three, for masjid admins, you'll pick a display and set its layout and Salah timing.
**Show:** Title card: "Premium displays, part 1: layout".

#### [1.2]
**Say:** You'll need the Prayer Times Premium add-on, and your Iqamah times in place. Without the add-on, Ad-Din takes you to the subscription page instead. The add-on starts with a free trial, and video 02.5 shows how to add it.
**Show:** Opening card from You'll need.

### 2. Choose a display
#### [2.1] Where it lives
**Say:** In the sidebar, open **Masjid**, then **Prayer Times**, and choose **Premium Displays**. The premium tabs have a crown.
**Show:** Sidebar → Masjid → Prayer Times. Spotlight the crown icons, then click "Premium Displays".

#### [2.2] Six displays
**Say:** You get six displays, each with its own settings. Three are upright, for portrait screens, and three are wide, for landscape TVs.
**Show:** Open the display dropdown: Vertical Display 1, Vertical Display 2, Vertical Display Content Only, Horizontal Display 1, Horizontal Display 2, Horizontal Display Content Only.

#### [2.3]
**Say:** The numbered displays show prayer times with your content. The **Content Only** displays show just your posters and messages.
**Show:** Spotlight the numbered options, then the two Content Only options.

#### [2.4] Preview
**Say:** Pick **Horizontal Display 1**. The preview shows the live screen, and updates each time you save a setting. **Refresh** reloads it.
**Show:** Pick Horizontal Display 1. The wide preview on the left; spotlight Refresh.

#### [2.5] Links
**Say:** **Open Display URL** opens the live screen in a new tab; that's the address to use on your TV. **Copy Embed Code** copies code for a website.
**Show:** Spotlight Open Display URL, then Copy Embed Code; click it: toast "Copied to clipboard".

### 3. Layout
#### [3.1]
**Say:** On the right, **Display Controls** lists every setting for this display. Start with **Layout**.
**Show:** Spotlight the menu under Display Controls; click Layout.

#### [3.2] Layouts
**Say:** **Layout 1** fills the whole screen. **Layout 2** adds your masjid's name, logo, date and time alongside.
**Show:** Select Layout 2.

#### [3.3] Elements
**Say:** Under **Display Elements**, switch the masjid name, logo and footer on or off. Turning off **Show footer row** also hides the Ad-Din logo. Tap **Save**.
**Show:** Spotlight Show Masjid name, Show Masjid logo, Show footer row, Show Ad-Din logo. Click Save; the preview refreshes with Layout 2.

### 4. Salah Control
#### [4.1] Which times
**Say:** Open **Salah Control**. Tick each **Salah** to show, then choose whether its **Begins** and **Adhan** times appear too. Jumu'ah is listed below.
**Show:** Click Salah Control. Spotlight the table; untick Adhan for Fajr, then tick it again. Spotlight the Jumu'ah rows.

#### [4.2] One column
**Say:** If the screen is crowded, turn on **Alternate Begins and Adhan in one column**, and the two times take turns in one column. Tap **Save**.
**Show:** Turn the switch on. Click Save: toast "Salah Control Updated Successfully"; the preview shows three columns.

### 5. Date & Time
#### [5.1]
**Say:** In **Date & Time**, tick what the header shows, such as **Time**, **Hijri Date**, **Gregorian Date**, **Sun Rise** and **Sunset**.
**Show:** Click Date & Time. Tick Time, Hijri Date and Gregorian Date.

#### [5.2]
**Say:** You can also add **Zawal**, **Al-Duha**, **Islamic Midnight** and the thirds of the night, or **Remove Seconds** from the clock. Tap **Save**.
**Show:** Tick Remove Seconds. Click Save: toast "Saved successfully".

### 6. Iqamah countdown
#### [6.1] Switch it on
**Say:** Open **Iqamaah Countdown Timer & Poster** and switch it on. Before each Iqamah, the screen shows a large countdown with a poster or a message.
**Show:** Click the menu item; turn on the switch beside "Iqamaah Countdown Timer and Poster".

#### [6.2] When it starts
**Say:** In **Start before**, enter how many minutes before Iqamah the countdown begins, for example ten.
**Show:** Type 10 in Start before.

#### [6.3] Poster or message
**Say:** Choose **Upload Image** for your own poster, or **Or setup a message** for text. The default asks people to stay seated and switch off their phones. Tap **Save**.
**Show:** Select "Or setup a message"; the default text shows. Click the pencil to show it can be edited, then close it. Click Save: toast "Saved successfully".

### 7. During Salah
#### [7.1] Dim or blackout
**Say:** **Display During Salah** stops the screen distracting worshippers. Switch it on, and choose **Dim** or **Blackout**.
**Show:** Click Display During Salah. Turn on the switch; select Dim.

#### [7.2]
**Say:** Turn on **Exclude Date & Time** to keep the time, date, masjid name and logo showing. In **Resume after Iqamah**, enter the minutes until the screen comes back. Tap **Save**.
**Show:** Turn on Exclude Date & Time; type 10 under Resume after Iqamah. Click Save.

### 8. Next
#### [8.1] Close
**Say:** Your display's layout and Salah timing are set. Next, video 04.6: Premium displays, part 2: posters, events and ticker.
**Show:** Click Refresh: the finished preview. End card with one tile: "04.6 Premium displays, part 2: posters, events and ticker".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-07 · manager · panel decisions, "All recommended" · [1.2] the add-on starts with a free trial
- 2026-11-06 · panel (user, director, writer, PM, PO) · 4 changes: [1.2] points to video 02.5 for the add-on, [2.2] no phrasal verb, [7.2] says what Exclude Date & Time keeps on screen (Display During Salah tooltip), demo names match the Maple Grove demo world
- 2026-11-03 · manager · decisions via chat · TV display pages decided: previews recorded from the dev environment with demo data; flag and demo data updated
- 2026-11-03 · manager · decisions via chat · 04.6 split (new 04.11): [1.1] 'part one of three', closing Say names video 04.6 by number and new title, end card title and colour-preset flag (now 04.11) updated
- 2026-11-03 · critic · 3 changes: second-person opening, [4.2] no 'Short on space?' idiom, [5.2] names Islamic Midnight instead of vague 'night times'
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes

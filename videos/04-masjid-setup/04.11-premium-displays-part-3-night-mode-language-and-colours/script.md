---
id: "04.11"
title: "Premium displays, part 3: night mode, language and colours"
target: 5:30
prereq:
  - "04.5"
status: scripted
plan: "Add-on: Prayer Times Premium"
flags:
  - "Makrooh notices only show when Minutes Before/After Zawal and the Al-Duha minutes are above zero, and those boxes on Calculation Method can only be edited with the Custom method; for masjids on a preset method the notices may never appear. The script says the times come from the calculation settings and doesn't promise more (decision 'Zawal and Al-Duha minutes locked', decided 2026-11-03: keep the flag)"
  - "The display previews are pages served by the Ad-Din server, not the Angular app. Decided 2026-11-03: record the preview shots from the dev environment with the demo masjid's data"
---

# 04.11 Premium displays, part 3: night mode, language and colours

## Goal
Set a premium display's night mode, Makrooh notices, Taraweeh poster, second language and colours.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Night Mode, Makrooh Times, Taraweeh Poster, Alternate Language, colours
- why use these settings
- a night mode example; Dim (70%) and Exclude Date & Time
- the Makrooh notice windows; Force over content off; Use default message
- the Taraweeh poster holds back other content; Split and Full
- renaming Default Salat Titles; the empty-box message; Cancel
- a language swap example; Manage
- Custom colours and fonts; a contrast tip

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo masjid "Maple Grove Masjid" with an active Prayer Times Premium add-on, signed in as its masjid admin; Horizontal Display 1 laid out as in 04.5
- Language Settings with the default names: English titles, and Arabic in every Alternative Language Settings and Alternative Islamic Months Title box (Ad-Din's default); a Taraweeh preset poster available
- Calculation settings with Minutes Before Zawal, Minutes After Zawal and Al-Duha Start After Minutes above zero, so both Makrooh notices can show (makrooh-times.component.ts)
- Dev-environment captures of the display in night mode, with a Makrooh notice, and swapping English and Arabic prayer names ([1.2a], [5.2a])
- Previews of Horizontal Display 1 with the custom colours, recorded from the dev environment with the demo masjid's data (decided 2026-11-03)

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
Split from 04.6 on 2026-11-03: these scenes were 04.6 [5.1]-[7.3].
-->

### 1. Before you start
#### [1.1] Opening
**Say:** This is part three of premium displays, for masjid admins. You'll finish a display: night mode, Makrooh notices, a Ramadan poster, a second language and the colours.
**Show:** Title card: "Premium displays, part 3: night mode, language and colours".

#### [1.2]
**Say:** You'll need the Prayer Times Premium add-on, and a display already chosen and laid out, as in part one. Makrooh notices, the Taraweeh poster and the second language are only on the numbered displays, not on Content Only.
**Show:** Opening card from You'll need.

#### [1.2a] Why use them
**Say:** These finishing touches make the screen fit your masjid. Night mode keeps the hall dark at night. Makrooh notices remind people when not to pray. A second language and your own colours help everyone read it.
**Show:** Split view (dev-environment captures): the display in night mode, a Makrooh notice, and the display with Arabic prayer names.

### 2. Night mode
#### [2.1] Night Mode
**Say:** In the sidebar, open **Masjid**, then **Prayer Times**. Open **Premium Displays** and pick your display. **Night Mode** darkens the screen overnight.
**Show:** Sidebar → Masjid → Prayer Times → Premium Displays → Horizontal Display 1. Click Night Mode.

#### [2.2]
**Say:** Switch it on and choose **Dim** or **Blackout**. **After Isha** is the minutes after Isha Iqamah until it starts. **Resume Before Fajr** is the minutes before Fajr begins when the screen comes back. Tap **Save**.
**Show:** Turn it on; select Blackout; type 60 and 30. Click Save.

#### [2.2a] Example
**Say:** With these numbers, if Isha Iqamah is at 7:30, the screen goes dark at 8:30. If Fajr begins at 5:45, it comes back at 5:15. **Dim** darkens it by seventy percent instead, and **Exclude Date & Time** keeps the clock and masjid name showing.
**Show:** Spotlight After Isha (60), Resume Before Fajr (30), Dim, and the Exclude Date & Time switch; hover the info icon.

### 3. Makrooh times
#### [3.1] Makrooh Times
**Say:** **Makrooh Times** shows a notice when Salah is disliked: after sunrise and around Zawal. Switch on each notice, and choose an image or a message.
**Show:** Click Makrooh Times. Turn on "Makrooh time notice for Sunrise" and "Makrooh time notice for Zawal"; "Or setup a message" is already selected on each, with its default text.

#### [3.2]
**Say:** The notice times come from your calculation settings. **Force over content** is on to start, and keeps the notice in front of everything else. Tap **Save**.
**Show:** Spotlight the line about Calculation Settings, then the Force over content switch at the top (already on). Click Save.

#### [3.2a] The notice windows
**Say:** The Sunrise notice runs from sunrise until the Al-Duha start. The Zawal notice runs from a few minutes before Zawal until a few minutes after. With **Force over content** off, your posters and events come first.
**Show:** Hover the info icon beside Makrooh Times and zoom on its text.

#### [3.2b]
**Say:** Each message box starts with Ad-Din's own text. Change it if you like, and **Use default message** brings the original back.
**Show:** Type a word at the end of the Sunrise message, then click "Use default message"; the default text returns.

### 4. Taraweeh poster
#### [4.1]
**Say:** **Taraweeh Poster During Ramadan** shows a poster after Isha, and only in Ramadan. Switch it on, and set **Start after isha** and **Stop After** in minutes.
**Show:** Click the menu item. Turn it on; type 15 and 90.

#### [4.2]
**Say:** Choose **Select from presets**, or **Upload Image** for your own. With your own image on a wide display, choose **Split** or **Full**. Tap **Save**.
**Show:** Pick a preset from the list; its image shows. Click Save.

#### [4.2a]
**Say:** While the Taraweeh poster shows, all other announcements and events wait. **Split** keeps the prayer times beside your poster, and **Full** fills the screen.
**Show:** Select Upload Image to show the "Select display mode for the poster" choice with Split and Full; select "Select from presets" again; don't save.

### 5. Language and colours
#### [5.1] Second language
**Say:** For a second language, open the **Language Settings** tab. Ad-Din fills in Arabic prayer and month names to start. Change any you like, but leave none empty, and tap **Save**.
**Show:** Click the "Language Settings" tab. Spotlight the Arabic names under Alternative Language Settings. Click Save.

#### [5.1a] Your own names
**Say:** You can also change the English names under **Default Salat Titles**, for example to the spelling your community uses. If a box is empty, Ad-Din says **All the field are required**. **Cancel** asks before it throws away your changes.
**Show:** Spotlight the Default Salat Titles and Default Islamic Months Titles columns. Click Cancel: "Cancel and discard unsaved changes?"; click No.

#### [5.2]
**Say:** Then, on your display, open **Alternate Language Settings**, switch on **Display Alternate Language**, and set the **Language Transition Duration** in seconds. Tap **Save**. **Force Alternate Language Only** shows the second language alone.
**Show:** Premium Displays → Alternate Language Settings. Turn on Display Alternate Language; type 10. Click Save. Spotlight Force Alternate Language Only, left off.

#### [5.2a] Example
**Say:** With ten seconds, the prayer names swap between English and Arabic every ten seconds. **Manage** takes you back to the **Language Settings** tab.
**Show:** Dev-environment capture: the preview's prayer names changing from English to Arabic. Spotlight Manage.

#### [5.3] Colours
**Say:** Finally, **Display Color Controls**. Pick a ready-made set under **Select Preset**, or choose **Custom** for your own colours and fonts. Tap **Save**.
**Show:** Click Display Color Controls. Open Select Preset, pick a preset, click Save; the preview changes colour.

#### [5.3a] Custom colours
**Say:** With **Custom**, choose the **Background Color** and **Font Color**, or tap **Add** for your own. Then pick the **Font**, **Font Weight**, **Prayer Time Font** and **Prayer Time Font Weight**, and you can upload a background picture.
**Show:** Select Custom: the swatches, Add, the four font dropdowns and Upload Image appear. Spotlight each; don't save. Select the preset again.

#### [5.3b] Tip
**Say:** Choose a light text on a dark background, or the opposite, so people can read the times from the back of the hall. Check the preview before you leave.
**Show:** Click Refresh; zoom on the preview's prayer table.

### 6. Next
#### [6.1] Close
**Say:** Your display is complete. Open its link on the TV in your prayer hall. Next, video 08.2: Repeating events and events on the masjid TV. Or video 04.7: About, staff list and facilities.
**Show:** Click Refresh: the full preview in its new colours. End card with two tiles: "08.2 Repeating events and events on the masjid TV" and "04.7 About, staff list and facilities".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 2:21 → 4:21 narration, 9 scenes added: why use them, night mode example with Dim and Exclude Date & Time, Makrooh windows and Force over content, Use default message, Taraweeh Split/Full and priority, renaming default titles with the empty-box message and Cancel, language swap example and Manage, Custom colours and fonts, contrast tip
- 2026-11-06 · panel (user, director, writer, PM, PO) · 7 changes, first validator check of the split-out opening (all labels and steps match master 7f0e6bf72): [1.1] says "part three" like parts one and two, [1.2] says the Makrooh, Taraweeh and language controls are only on the numbered displays (display-menu.config.ts), [2.1] full sidebar wording and no idiom ("darkens"), [2.2] says what After Isha and Resume Before Fajr count from (Night Mode tooltip), [5.2] adds Force Alternate Language Only, demo data names Minutes After Zawal, demo names match the Maple Grove demo world
- 2026-11-03 · manager · decisions via chat · New video split from 04.6 (critic's taste call): night mode, Makrooh, Taraweeh, language and colours, from 04.6 chapters 5–7 (validated and critic-checked there); new opening, [1.2], sidebar path in [2.1] and closing

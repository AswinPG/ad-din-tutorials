---
id: "04.6"
title: "Premium displays, part 2: posters, events and ticker"
target: 7:00
prereq:
  - "04.5"
status: scripted
plan: "Add-on: Prayer Times Premium"
flags:
  - "The display previews are pages served by the Ad-Din server, not the Angular app. Decided 2026-11-03: record those shots from the dev environment with the demo masjid's data"
  - "The \"Learn more\" links on Contents and Ticker Message open the internal ad-din.atlassian.net wiki; don't click them on camera"
---

# 04.6 Premium displays, part 2: posters, events and ticker

## Goal
Fill a premium display with posters, events and a scrolling ticker.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Contents, Ticker Message, events on the TV
- Poster After Adhan, Poster After fard salah, Masjid URL, and Embedded Content Or Announcement (Horizontal Display Content Only)
- why use content (no printing, scheduled dates, kinds of posters)
- picture sizes, video limits, the layout-change warning
- required fields, the missing-image question, changing and deleting content
- events come from the masjid's events; Manage and Transition Options; a pause example
- poster-after-prayer examples
- ticker Font, Font Weight, Scroll Speed and pauses; changing and deleting a ticker; nothing is sent to members

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo masjid "Maple Grove Masjid" with an active Prayer Times Premium add-on, signed in as its masjid admin; Horizontal Display 1 laid out as in 04.5
- Two upcoming masjid events (so the Events switch has something to show)
- A 1920 × 1080 poster and a 1080 × 1920 poster for new content "Weekend Quran Class", dated next week, all five prayer periods ticked
- A cut-in of the "Content Image Missing" window (content saved with no vertical picture), recorded on dev
- A ticker message "Masjid office open 10 AM to 4 PM" for the same dates
- The display presets list from the server, so Poster After Adhan has a preset picture selected
- Website address "https://maplegrove.example.com" for Masjid URL
- Horizontal Display Content Only with Announcements on (the default)
- Previews of Horizontal Display 1 with the poster and the ticker, recorded from the dev environment with the demo masjid's data (decided 2026-11-03)

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Before you start
#### [1.1] Opening
**Say:** This is part two of premium displays, for masjid admins. You'll add posters, your masjid's events and a scrolling message to a display.
**Show:** Title card: "Premium displays, part 2: posters, events and ticker".

#### [1.2]
**Say:** You'll need the Prayer Times Premium add-on, and a display already chosen and laid out, as in part one.
**Show:** Opening card from You'll need.

#### [1.2a] Why use it
**Say:** Posters on the screen reach everyone who comes to pray, with nothing to print. You can schedule them ahead, so each one starts and stops on its own dates. Use them for event flyers, donation appeals, reminders, a Hadith or a verse from the Quran.
**Show:** Dev-environment capture: Horizontal Display 1 with a poster beside the prayer times.

### 2. Create content
#### [2.1] Contents tab
**Say:** In the sidebar, open **Masjid**, then **Prayer Times**, and open the **Contents** tab. You create each poster once here, then choose which displays show it. Tap **Create**.
**Show:** Sidebar → Masjid → Prayer Times → "Contents". The list of existing content; click Create.

#### [2.2] When it shows
**Say:** Type a **Title**. Under **Active Between**, pick the **From** and **To** dates. Every day of the week is on; tap a day's letter to switch it off.
**Show:** Type "Weekend Quran Class". Pick next week's dates; tap M, T, W, T and F so only the two S letters stay highlighted.

#### [2.3] Type and times
**Say:** Under **Content Type**, choose **Image**, or a short video for the Content Only displays. Under **Show Between**, tick the parts of the day, such as Fajr to Dhuhr.
**Show:** Leave Image selected; hover Video and its note. Spotlight the five Show Between boxes, all ticked.

#### [2.4] Pictures
**Say:** Under **HORIZONTAL DISPLAY** and **VERTICAL DISPLAY**, upload a picture for each shape. **Full Screen** fills the screen. **Split with Prayer times** and **Full screen with headers** leave room for the times or a header.
**Show:** Under HORIZONTAL DISPLAY, keep Full Screen; click Upload Image, then Choose Image in the "Crop and upload image" window, pick the wide poster and click Save & Upload. Do the same under VERTICAL DISPLAY with the tall one.

#### [2.4a] Sizes
**Say:** Each choice shows the best picture size. A wide full-screen poster is 1920 by 1080 pixels, and a tall one is 1080 by 1920. A video must be an MP4 file of 5 MB or less.
**Show:** Zoom on "(1920 × 1080 px)" beside Full Screen and "(960 × 1080 px)" beside Split with Prayer times, then the vertical sizes. Hover the info icon beside Video.

#### [2.4b]
**Say:** If you change the layout after uploading, Ad-Din asks you to confirm, because the picture for that shape is cleared. Choose the layout first, then upload.
**Show:** Click "Split with Prayer times" under HORIZONTAL DISPLAY: the "Confirm Display Type Change" window opens. Click No; Full Screen and the poster stay.

#### [2.5] Displays and save
**Say:** Under **Active for following displays**, untick any display that shouldn't show it. Tap **Save**.
**Show:** Spotlight the display checkboxes. Click Save: toast "Content created successfully!"; the card appears with "Active".

#### [2.5a] Checks
**Say:** If the title or dates are missing, Ad-Din says **Please fill all required fields!** If one shape has no picture, it asks whether to save anyway. Those displays then show nothing for this content until you add one.
**Show:** Dev cut-in: the "Content Image Missing" window, with its question; click No.

#### [2.5b] Change or delete
**Say:** The card shows **Active** or **Inactive**, its dates, and who changed it last. Tap a card to change it and tap **Save** again. **Delete** asks you to confirm first.
**Show:** Click the "Weekend Quran Class" card: the form opens filled in. Spotlight "Last Modified By". Click Delete: "Delete this Content?" opens; click Cancel.

### 3. Content and events on a display
#### [3.1]
**Say:** Now open **Premium Displays** and pick your display. In **Contents & Events**, switch on **Contents**, and switch on **Events** to show your masjid's upcoming events too.
**Show:** Premium Displays → Horizontal Display 1 → Contents & Events. Turn on both switches.

#### [3.1a]
**Say:** The events come from your masjid's own events, so there's nothing extra to make. **Manage** takes you back to the **Contents** tab, and **Transition Options** sets how one slide changes to the next.
**Show:** Spotlight "Manage" at the top of the card, then the Transition Options dropdown with "Fade".

#### [3.2]
**Say:** **Stop before Salat** and **Start after Salat** pause the slides around each prayer, in minutes. **Scroll Speed** is how many seconds each slide stays. Tap **Save**.
**Show:** Type 5, 10 and 10. Click Save; the preview shows the poster.

#### [3.2a] Example
**Say:** With these numbers, the slides stop five minutes before each Iqamah and return ten minutes after it. Each slide stays ten seconds, and the prayer times show between slides.
**Show:** Dev-environment capture: the preview moving from the poster to the prayer times and back.

#### [3.3] Posters after prayers
**Say:** The numbered displays can also show a poster after each prayer. **Poster After Adhan** shows it after the Adhan, and **Poster After fard salah** shows it after the Iqamah. While it shows, it takes the place of your other content.
**Show:** Display Controls → Poster After Adhan; spotlight its switch. Then hover Poster After fard salah in the menu.

#### [3.4]
**Say:** Switch it on. **Start after** is how many minutes to wait, and **Duration** is how many minutes it stays. Choose **Select from presets** or **Upload Image**, and tap **Save**.
**Show:** In Poster After Adhan, turn on the switch; type 2 and 5. Leave "Select from presets" with the first preset and its picture. Click Save.

#### [3.4a] Example
**Say:** For example, after the Adhan, show a reminder to switch off phones. After the fard Salah, show a donation appeal while people are still seated. Keep each one to a few minutes.
**Show:** Display Controls → Poster After fard salah: spotlight its Start after, Duration, Select from presets and Upload Image. Don't save.

#### [3.5] Website address
**Say:** **Masjid URL** shows your masjid's website address at the bottom of the display. Switch on **Show URL**, type the full address, and tap **Save**.
**Show:** Display Controls → Masjid URL. Turn on Show URL; type "https://maplegrove.example.com"; click Save.

#### [3.6] Content Only display
**Say:** On **Horizontal Display Content Only**, open **Embedded Content Or Announcement**. Switch on **Announcements** to show your content as slides, or switch on **Embed content** and paste code from another website. Only one can be on.
**Show:** Display dropdown → Horizontal Display Content Only → Embedded Content Or Announcement. Spotlight Announcements (on); turn on Embed content: Announcements turns off and the "Paste your embed content code here" box opens. Turn Announcements back on; don't save.

### 4. Ticker message
#### [4.1] Write it
**Say:** A ticker is a line of text that scrolls across the screen. On the **Ticker Message** tab, tap **Create**, and type your message in **Ticker Message Title**, in place of the sample text.
**Show:** Click the "Ticker Message" tab; Create; clear the pre-filled "New Ticker Message" and type "Masjid office open 10 AM to 4 PM".

#### [4.2]
**Say:** Pick the dates, days and times, choose the displays as before, and tap **Save**.
**Show:** Set the same dates; leave all displays ticked. Click Save: toast "Ticker message created successfully!".

#### [4.3] Show it
**Say:** On your display, open **Ticker Message** and switch it on. Choose the colours, font and **Scroll direction**, and tap **Save**.
**Show:** Display Controls → Ticker Message. Turn on the Ticker Message switch; pick a background and font colour; leave "Scroll right to left". Click Save.

#### [4.3a] More ticker settings
**Say:** You can also pick the **Font** and **Font Weight**, and the **Scroll Speed**. **Stop before Salat** and **Start after Salat** pause the ticker around each Iqamah, as they do for the slides.
**Show:** Open the Font dropdown (Arial, Exo, Montserrat, Roboto) and the Font Weight dropdown (Bold, Extra Bold, Black); close them. Spotlight Scroll Speed, Stop before Salat and Start after Salat.

#### [4.4]
**Say:** You can also turn on **Show Prayer Time changes with ticker message**, and upcoming time changes scroll by as well.
**Show:** Spotlight that switch.

#### [4.4a] Change or delete
**Say:** To change a ticker message, tap it on the **Ticker Message** tab, edit it and tap **Save**. **Delete** asks you to confirm. Nothing is sent to members; the displays simply show the change.
**Show:** Ticker Message tab: click "Masjid office open 10 AM to 4 PM"; the form opens. Click Delete: "Delete this Ticker Message?"; click Cancel.

<!-- Chapters 5–7 (night mode, Makrooh, Taraweeh, language, colours) moved to 04.11 on 2026-11-03; scene IDs here are unchanged. -->
### 8. Next
#### [8.1] Close
**Say:** Your display now shows your posters, events and ticker. Next, video 04.11: Premium displays, part 3: night mode, language and colours. Or video 08.2: Repeating events and events on the masjid TV.
**Show:** Click Refresh: the full preview with poster and ticker. End card with two tiles: "04.11 Premium displays, part 3: night mode, language and colours" and "08.2 Repeating events and events on the masjid TV".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 3:16 → 5:35 narration, 10 scenes added: why use content, picture sizes and video limits, layout-change warning, required fields and missing image, change or delete content, events source with Manage and Transition Options, pause example, poster-after-prayer examples, more ticker settings, change or delete a ticker
- 2026-11-07 · manager · panel decisions, "All recommended" · added [3.3]-[3.6] on Poster After Adhan, Poster After fard salah, Masjid URL and Embedded Content Or Announcement (decision 26); Covers and demo data updated; target 3:30 to 4:00 for the extra scenes
- 2026-11-06 · panel (user, director, writer, PM, PO) · 4 changes: [2.1] full sidebar wording, [4.1] says to replace the sample title (as the Show does), [4.4] Say no longer asks for a step the Show doesn't do, demo names match the Maple Grove demo world
- 2026-11-03 · manager · decisions via chat · TV display pages decided: previews recorded from the dev environment with demo data; flag updated (demo data already says so)
- 2026-11-03 · manager · decisions via chat · Split into two videos (critic's taste call): chapters 5–7 (night mode, Makrooh, Taraweeh, language, colours) moved to new video 04.11; scene IDs kept, chapter 8 keeps [8.1]. Title now 'Premium displays, part 2: posters, events and ticker'; Goal, Covers, demo data, [1.1], [8.1] end card (04.11, 08.2) and Makrooh flag (moved) updated; target 5:00 to 3:30
- 2026-11-03 · critic · 4 changes: second-person opening, [2.1] gives the full sidebar path, [2.4] names the real Split / headers choices, [7.1] says what the Arabic names are
- 2026-11-03 · validator · checked against master d36d69ed8 · 5 fixes: Save & Upload crop step for posters, clear the pre-filled ticker title, Makrooh message and Force over content are on by default, alternative names come pre-filled in Arabic and none may be empty, demo data

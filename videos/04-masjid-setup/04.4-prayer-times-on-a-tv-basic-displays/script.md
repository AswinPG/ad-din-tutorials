---
id: "04.4"
title: "Prayer times on a TV: basic displays"
target: 6:30
prereq:
  - "04.2"
status: scripted
flags:
  - "The TV screens and the previews on Basic Display are pages served by the Ad-Din server (AdDin.Web public/largedisplayvertical, mediumdisplay, largedisplayhorizontal), not the Angular app. Decided 2026-11-03: record those shots from the dev environment with the demo masjid's data"
  - "Basic Announcements opens only for an admin with their own Ad-Din Premium, or when the masjid has the Prayer Times Premium add-on; anyone else is sent to the subscription page with \"Please subscribe to Basic Announcements to access this page.\" The rest of the video is free"
  - "Small Display's text reads \"This is a smalll display widget\" (typo); don't zoom on it"
---

# 04.4 Prayer times on a TV: basic displays

## Goal
Choose what the small, medium and large prayer-time displays show, open one on a TV, and add announcement images to the large display.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->
- Your Iqamah times set
- A smart TV or any screen with a web browser
- For Basic Announcements: Ad-Din Premium, or the Prayer Times Premium add-on

## Covers
- Small, medium and large display links
- Basic Announcements
- why use a TV display (no printed timetable; basic displays are free)
- drag-and-drop upload and picture tips
- Jumu'ah to Jumu'ah 4 rows; the other extras (Zawal, Al-Duha, night thirds, Islamic Midnight)
- tomorrow's changes in red and Hide Magrib Time Changes
- the large display's event ticks
- the display updates itself every minute
- display period rules and the Inactive badge; Delete confirmation; Load older

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo masjid "Maple Grove Masjid" with Iqamah times for today, signed in as its masjid admin who has Ad-Din Premium (so Basic Announcements opens)
- Demo logo and a plain background image to upload; the masjid follows the demo madrasah "Maple Grove Madrasah", so it appears in Select Madrasah
- At least as many upcoming masjid events as madrasah events (the large display page breaks its slides when the madrasah has more events than the masjid)
- Display settings: all prayers ticked with Begins and Adhan, Hijri and Time ticked, URL unticked
- A dev-environment capture of the medium display on a day before an Isha Iqamah change, so tomorrow's Isha shows in red ([3.4b])
- Previews of the three display pages and the large display full screen, recorded from the dev environment with the demo masjid's data, shown in a TV-shaped frame
- One existing announcement "Ramadan Food Drive" (Active), and a JPEG under 2 MB for a new one titled "Jumu'ah Lunch" (the crop box is 960 × 1080, slightly taller than wide)

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Before you start
#### [1.1] Opening
**Say:** Many masjids show prayer times on a TV in the prayer hall. In this video for masjid admins, you'll set up Ad-Din's basic TV displays and add announcement images.
**Show:** Title card: "Prayer times on a TV: basic displays".

#### [1.2]
**Say:** Your Iqamah times are already set. At the masjid, all you need is a smart TV, or any screen with a web browser.
**Show:** Opening card from You'll need.

#### [1.2a] Why use it
**Say:** A display on a TV saves you printing a new timetable each month. It shows the time, today's prayers and any change for tomorrow, and the basic displays are free.
**Show:** TV frame (dev-environment capture): the medium display with today's Maple Grove prayer times.

### 2. Open Basic Display
#### [2.1] Where it lives
**Say:** In the sidebar, open **Masjid**, then **Prayer Times**, and choose **Basic Display**. Tap a section's title to open it.
**Show:** Sidebar → Masjid → Prayer Times → "Basic Display". The list of sections; the first, "Upload Logo & Upload Background", is already open.

#### [2.2] Logo and background
**Say:** Under **Upload Logo** and **Upload Background**, tap **Upload** to add your masjid's logo and a background picture. They're only kept when you tap **Save** at the bottom of the page.
**Show:** The first section is already open. Click Upload under Upload Logo and pick the demo logo; it appears. Do the same under Upload Background. (The pictures are kept only after Save in [3.8].)

#### [2.2a]
**Say:** You can also drag a picture from your computer onto the dashed box. Use a square logo with a plain background, and a calm background picture, so the times stay easy to read.
**Show:** Spotlight the dashed "Base drop zone" box under Upload Logo, then the logo and background now showing.

### 3. Choose what each display shows
#### [3.1] Three displays
**Say:** There are three ready-made displays: small, medium and large. Each has a live preview and its own link to open on a TV.
**Show:** Spotlight the three section titles: Small Display, Medium Display / Public Facing Website Prayer Time Control, Large Display.

#### [3.2] Small Display
**Say:** Open **Small Display**, for an upright screen. The preview shows the display, and the link under the description is the address to open on your TV.
**Show:** Open Small Display. The preview on the left; spotlight the link below the description.

#### [3.3] Display Control
**Say:** Under **Display Control**, tick each **Salah** to show, and whether its **Begins** and **Adhan** times appear too.
**Show:** Spotlight the table; untick Fajr under Begins, then tick it again.

#### [3.3a]
**Say:** The table has a row for each daily prayer and for **Jumu'ah** to **Jumu'ah 4**. Untick the Jumu'ah prayers you don't hold, so the screen stays clear.
**Show:** Scroll the table to the Jumu'ah rows; untick Jumu'ah 3 and Jumu'ah 4 in the Salah column.

#### [3.4] Extras
**Say:** Below, add extras such as the **Hijri** date, **Time**, **Sunrise** and **Sunset**. Tick **URL** and type your website address to show it on screen.
**Show:** Spotlight the checkbox rows; tick Sunrise and Sunset.

#### [3.4a] More extras
**Say:** You can also show **Zawal**, **Al-Duha**, **First Third of Night**, **Islamic Midnight** and **Last Third of Night**. Pick only what your members use, because each one takes space on the screen.
**Show:** Spotlight those five checkboxes in turn; leave them unticked.

#### [3.4b] Tomorrow's changes
**Say:** When an Iqamah time changes tomorrow, the display marks it in red. Maghrib moves every day with sunset, so tick **Hide Magrib Time Changes** to mark only the other prayers.
**Show:** TV frame (dev-environment capture): the medium display with tomorrow's changed Isha in red. Back in Basic Display, tick "Hide Magrib Time Changes".

#### [3.5] Medium display
**Say:** The medium display also controls the prayer times on your public website. Set it the way you want visitors to see them.
**Show:** Open "Medium Display / Public Facing Website Prayer Time Control". Spotlight the line "This widget, designed for medium displays, also updates and controls prayer times visible on the public website."

#### [3.6] Large Display
**Say:** **Large Display** suits a wide TV. Set the **Scroll Speed (in seconds)**, and choose your madrasah under **Select Madrasah** to include its events.
**Show:** Open Large Display. Spotlight Scroll Speed (in seconds), Select Madrasah ("Maple Grove Madrasah") and the event checkboxes below.

#### [3.6a] Events on the large display
**Say:** The ticks below choose what each event shows: **Heading**, **Date**, **Venue**, **Address**, **Social Counts**, and the **Masjid News Title** and **Madrasah News Title**. The events come from your masjid and madrasah event pages.
**Show:** Spotlight the event checkboxes one by one; leave them as they are.

#### [3.7] Mobile app
**Say:** The last section, **Ad-Din Mobile App Prayer Time Control**, sets which times your members see in the Ad-Din app.
**Show:** Open the last section; spotlight its table.

#### [3.8] Save
**Say:** Tap **Save** at the bottom of the page to keep all your choices.
**Show:** Scroll down and click Save. Toast "Successfully saved Display Settings".

### 4. Put it on the TV
#### [4.1]
**Say:** On the TV, open the web browser, go to the link for your display, and make it full screen. Leave it running in the prayer hall.
**Show:** TV frame (dev-environment capture with the demo masjid's data): a browser opens the large display link, then goes full screen with today's prayer times.

#### [4.1a] It updates itself
**Say:** The display checks for new times every minute. When you change an Iqamah time in Ad-Din, the TV shows it without anyone touching it. If the TV restarts, open the link again.
**Show:** TV frame: the large display running; a small clock overlay shows one minute passing.

### 5. Basic Announcements
#### [5.1] Open announcements
**Say:** Next, open **Basic Announcements**. These images show on the **Large Display** only. This tab needs Ad-Din Premium or the Prayer Times Premium add-on.
**Show:** Click the "Basic Announcements" tab. Spotlight the info note about the Large display widget and the existing "Ramadan Food Drive" card.

#### [5.2] Add one
**Say:** Tap **Add New**. Give it an **Announcement title**. Only admins see the title; it helps you find the announcement in the list.
**Show:** Click Add New. The "Add announcement" sheet; type "Jumu'ah Lunch" in Announcement title.

#### [5.3] Image
**Say:** Under **Image**, tap **Choose** and pick a JPEG or PNG under 2 MB. Crop it, tap **Save & Upload**, and it appears in the form.
**Show:** Click Choose: the "Crop and upload image" window opens. Click Choose Image; pick the demo image; adjust the crop; click Save & Upload. The thumbnail shows with Change and Remove.

#### [5.4] Schedule
**Say:** To show it for a set time, turn on **Schedule a display period** and pick a **Start date** and **End date**. Leave it off to show it until you remove it.
**Show:** Turn the switch on; pick a start and end date; the summary line updates. Turn it off again.

#### [5.4a]
**Say:** The end date must be on or after the start date. With a period set, the announcement shows only between those dates, and its badge reads **Inactive** outside them. That suits a poster for one event.
**Show:** Spotlight the summary line "This announcement will display indefinitely." with the switch off.

#### [5.5] Save
**Say:** Tap **Save announcement**. It joins the list with an **Active** badge. Tap it to preview it, **Edit** it or **Delete** it.
**Show:** Click Save announcement. The new card shows "Active"; click it: the preview opens with Edit and Delete.

#### [5.5a] Delete
**Say:** **Delete** asks you to confirm, because a deleted announcement can't be recovered. To pause one instead, **Edit** it and set a display period. **Load older** at the bottom shows earlier announcements.
**Show:** Click Delete: the "Attention !" prompt opens with "Are you sure to delete the announcement, it will be removed and cannot be recovered."; click "Cancel Deletion". Close the preview; spotlight "Load older".

### 6. Next
#### [6.1] Close
**Say:** Your masjid TV is ready. For full control of layouts, posters, night mode and colours, there are premium displays. Next, video 04.5: Premium displays, part 1: layout. Or video 04.6: Premium displays, part 2: posters, events and ticker.
**Show:** End card with two tiles: "04.5 Premium displays, part 1: layout" and "04.6 Premium displays, part 2: posters, events and ticker".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 3:09 → 5:07 narration, 9 scenes added: why use a TV display, drag-and-drop and picture tips, Jumu'ah rows, other extras, tomorrow's changes in red and Hide Magrib Time Changes, large-display event ticks, the display updates every minute, display period and Inactive badge, Delete confirmation and Load older
- 2026-11-06 · panel (user, director, writer, PM, PO) · 3 changes: [3.7] says the app control changes what members see, [6.1] names both end tiles by number, demo names match the Maple Grove demo world
- 2026-11-03 · manager · decisions via chat · TV display pages decided: previews and the TV shot are recorded from the dev environment with demo data; flag, demo data and the [4.1] TV-frame Show line updated
- 2026-11-03 · manager · decisions via chat · 04.6 renamed 'Premium displays, part 2: posters, events and ticker' (split with 04.11): end-card tile updated
- 2026-11-03 · critic · 4 changes: second-person opening, [2.2] says logo/background are kept only on Save, 'displays' not 'screens' in [3.1] [3.2]
- 2026-11-03 · validator · checked against master d36d69ed8 · 5 fixes: first Basic Display section is open by default, logo/background kept only on Save, large display shows madrasah events (not news), Save & Upload step in the image crop, demo data (followed madrasah, event counts, 960 × 1080 crop)

---
id: "04.4"
title: "Prayer times on a TV: basic displays"
target: 4:30
prereq:
  - "04.2"
status: scripted
flags:
  - "The TV screens and the previews on Basic Display are pages served by the Ad-Din server (AdDin.Web public/largedisplayvertical, mediumdisplay, largedisplayhorizontal), not the Angular app; the mocked demo world must stub them, or those shots come from the agreed dev environment"
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

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo masjid "Masjid Al-Noor" with Iqamah times for today, signed in as its masjid admin who has Ad-Din Premium (so Basic Announcements opens)
- Demo logo and a plain background image to upload; the demo madrasah "Al-Noor Madrasah" in Select Madrasah
- Display settings: all prayers ticked with Begins and Adhan, Hijri and Time ticked, URL unticked
- Rendered previews (or stubs) for the three display pages, and a TV-shaped frame showing the large display full screen
- One existing announcement "Ramadan Food Drive" (Active), and a 2 MB-or-smaller square JPEG for a new one titled "Jumu'ah Lunch"

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Before you start
#### [1.1] Opening
**Say:** Many masjids show prayer times on a TV in the prayer hall. In this video, a masjid admin sets up Ad-Din's basic TV displays and adds announcement images.
**Show:** Title card: "Prayer times on a TV: basic displays".

#### [1.2]
**Say:** Your Iqamah times are already set. At the masjid, all you need is a smart TV, or any screen with a web browser.
**Show:** Opening card from You'll need.

### 2. Open Basic Display
#### [2.1] Where it lives
**Say:** In the sidebar, open **Masjid**, then **Prayer Times**, and choose **Basic Display**. Tap a section's title to open it.
**Show:** Sidebar → Masjid → Prayer Times → "Basic Display". The list of collapsed sections.

#### [2.2] Logo and background
**Say:** In the first section, under **Upload Logo** and **Upload Background**, tap **Upload** to add your masjid's logo and a background picture for the screens.
**Show:** Open the first section. Click Upload under Upload Logo and pick the demo logo; it appears. Do the same under Upload Background.

### 3. Choose what each display shows
#### [3.1] Three displays
**Say:** There are three ready-made screens: small, medium and large. Each has a live preview and its own link to open on a TV.
**Show:** Spotlight the three section titles: Small Display, Medium Display / Public Facing Website Prayer Time Control, Large Display.

#### [3.2] Small Display
**Say:** Open **Small Display**, for an upright screen. The preview shows the screen, and the link under the description is the address to open on your TV.
**Show:** Open Small Display. The preview on the left; spotlight the link below the description.

#### [3.3] Display Control
**Say:** Under **Display Control**, tick each **Salah** to show, and whether its **Begins** and **Adhan** times appear too.
**Show:** Spotlight the table; untick Fajr under Begins, then tick it again.

#### [3.4] Extras
**Say:** Below, add extras such as the **Hijri** date, **Time**, **Sunrise** and **Sunset**. Tick **URL** and type your website address to show it on screen.
**Show:** Spotlight the checkbox rows; tick Sunrise and Sunset.

#### [3.5] Medium display
**Say:** The medium display also controls the prayer times on your public website. Set it the way you want visitors to see them.
**Show:** Open "Medium Display / Public Facing Website Prayer Time Control". Spotlight the line "This widget, designed for medium displays, also updates and controls prayer times visible on the public website."

#### [3.6] Large Display
**Say:** **Large Display** suits a wide TV. Set the **Scroll Speed (in seconds)**, and choose your madrasah under **Select Madrasah** to include its news.
**Show:** Open Large Display. Spotlight Scroll Speed (in seconds), Select Madrasah ("Al-Noor Madrasah") and the event checkboxes below.

#### [3.7] Mobile app
**Say:** The last section, **Ad-Din Mobile App Prayer Time Control**, sets which times show in the Ad-Din app.
**Show:** Open the last section; spotlight its table.

#### [3.8] Save
**Say:** Tap **Save** at the bottom of the page to keep all your choices.
**Show:** Scroll down and click Save. Toast "Successfully saved Display Settings".

### 4. Put it on the TV
#### [4.1]
**Say:** On the TV, open the web browser, go to the link for your display, and make it full screen. Leave it running in the prayer hall.
**Show:** TV frame: a browser opens the large display link, then goes full screen with today's prayer times.

### 5. Basic Announcements
#### [5.1] Open announcements
**Say:** Next, open **Basic Announcements**. These images show on the **Large Display** only. This tab needs Ad-Din Premium or the Prayer Times Premium add-on.
**Show:** Click the "Basic Announcements" tab. Spotlight the info note about the Large display widget and the existing "Ramadan Food Drive" card.

#### [5.2] Add one
**Say:** Tap **Add New**. Give it an **Announcement title**. Only admins see the title; it helps you find the announcement in the list.
**Show:** Click Add New. The "Add announcement" sheet; type "Jumu'ah Lunch" in Announcement title.

#### [5.3] Image
**Say:** Under **Image**, tap **Choose** and pick a JPEG or PNG under 2 MB. Crop it, and it appears in the form.
**Show:** Click Choose; pick the demo image; crop; the thumbnail shows with Change and Remove.

#### [5.4] Schedule
**Say:** To show it for a set time, turn on **Schedule a display period** and pick a **Start date** and **End date**. Leave it off to show it until you remove it.
**Show:** Turn the switch on; pick a start and end date; the summary line updates. Turn it off again.

#### [5.5] Save
**Say:** Tap **Save announcement**. It joins the list with an **Active** badge. Tap it to preview it, **Edit** it or **Delete** it.
**Show:** Click Save announcement. The new card shows "Active"; click it: the preview opens with Edit and Delete.

### 6. Next
#### [6.1] Close
**Say:** Your masjid TV is ready. For full control of layouts, posters, night mode and colours, watch the premium display videos.
**Show:** End card with two tiles: "04.5 Premium displays, part 1: layout" and "04.6 Premium displays, part 2: content".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->

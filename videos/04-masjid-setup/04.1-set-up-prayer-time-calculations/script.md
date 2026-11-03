---
id: "04.1"
title: Set up prayer time calculations
target: 4:45
prereq:
  - "01.1"
status: scripted
flags:
  - "Minutes Before Zawal, Minutes After Zawal and the two Al-Duha boxes on Calculation Method can only be edited with the Custom method; every preset method locks them at their saved value (Makrooh Times in 04.6 depends on them). The script doesn't show them"
  - "The description column on the Calculation Method tab is headed \"Event Description\" (wrong text key); don't zoom on that header"
  - "Islamic Date \"Learn More\" opens the internal ad-din.atlassian.net wiki; don't click it on camera"
  - "Select Location uses Google Maps; the mocked demo world needs a map stub or a static map"
---

# 04.1 Set up prayer time calculations

## Goal
Choose how Ad-Din calculates your masjid's begin times, set how many minutes before Iqamah each Adhan is called, and match the Islamic date to your community.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Calculation Method, Adhan Times offsets, Islamic Date

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo masjid "Masjid Al-Noor", signed in as its masjid admin, with its address and coordinates set
- Prayer settings to start: method MWL, Juristic Standard, Automatic Begin Time Calculation Yes, format 12h, daylight saving Auto, High latitude None
- Adhan Times: Fajr 15, Dhuhr 15, Asr 15, Maghrib Adhan Offset 5, Isha 15, Jumu'ah 30, Jumu'ah 2 15, Jumu'ah 3 and 4 empty, Maghrib Iqamah Offset 5
- Islamic Date: calendar Hijri, offset 0 day, Display 30th Hijri off, Update After Sunset Yes; a current Islamic date that renders (for example "Jumādá al-Ūlá 2, 1448")
- Changes made on camera: method to ISNA, Juristic to Hanafi, Fajr Adhan to 20

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Before you start
#### [1.1] Opening
**Say:** Prayer times are the heart of your masjid in Ad-Din. In this video, a masjid admin sets how begin times are calculated, when each Adhan is called, and the Islamic date.
**Show:** Title card: "Set up prayer time calculations".

#### [1.2]
**Say:** Your masjid is already registered, with its address on the map. Ad-Din uses that location to work out begin times for every day of the year.
**Show:** Opening card from You'll need.

### 2. Open Prayer Times
#### [2.1] Where it lives
**Say:** In the sidebar, open **Masjid**, then **Prayer Times**. Tap the **Calculation Method** tab. This is where Ad-Din decides how begin times are worked out.
**Show:** Sidebar → Masjid → Prayer Times. The page opens on Batch Update; pan along the tabs, then click "Calculation Method".

### 3. Format and location
#### [3.1] Time format
**Say:** Under **Prayer Times Display Format**, choose a **Format**: 12-hour, like 8:40 AM, or 24-hour, like 16:45.
**Show:** Open the Format dropdown and pick "12h"; the Example column shows "8:40 AM".

#### [3.2] Daylight saving and coordinates
**Say:** Leave daylight saving on **Auto**, so Ad-Din follows your clocks. Below, **Coordinates** shows your masjid's latitude and longitude.
**Show:** Spotlight the Auto radio button, then the Coordinates table with Latitude and Longitude.

#### [3.3]
**Say:** If the location is wrong, tap the update icon. Move the map until the pin sits on your masjid, then tap **Confirm**.
**Show:** Click the small update icon beside Coordinates. "Select Location" opens with a map; drag it so the pin is on the demo masjid; click Confirm. Toast "Successfully Updated".

### 4. Choose the method
#### [4.1] Calculation method
**Say:** Under **Set Calculation Method**, pick the method your community follows, such as the Muslim World League or the Islamic Society of North America.
**Show:** Open the method dropdown: MWL, ISNA, Egypt, Makkah, Karachi, Tehran, Custom. Pick ISNA; the description reads "Islamic Society of North America".

#### [4.2] Asr
**Say:** **Juristic Settings** changes Asr only. Choose **Standard**, or **Hanafi** for the later Asr time.
**Show:** Open the Juristic dropdown and pick Hanafi. Spotlight the Asr factor in the table below, which changes to 2.

#### [4.3] Automatic begin times
**Say:** Keep **Automatic Begin Time Calculation** on **Yes**, and Ad-Din works out every begin time for the coming year.
**Show:** Spotlight the Yes radio button.

#### [4.4]
**Say:** Choose **No** only if you'll type in the begin times yourself, for the whole year. Ad-Din asks you to confirm first.
**Show:** Click No: the "Switch to Manual" prompt opens. Click "No" in the prompt; Yes stays selected.

### 5. Fine-tune and save
#### [5.1] Adjusting parameters
**Say:** **Adjusting Parameters** shows the angles and minutes behind each prayer. They're locked for the standard methods; choose **Custom** to enter your own.
**Show:** Spotlight the greyed table. Switch the method to Custom: the Fajr, Dhuhr, Maghrib and Isha boxes turn editable. Switch back to ISNA.

#### [5.2] High latitude
**Say:** Masjids far north or south can use **High latitude Parameters** to keep Fajr and Isha workable in summer. Most masjids leave it on **None**.
**Show:** Spotlight the Method dropdown under High latitude Parameters: None, MidNight, OneSeventh, AngleBased. Leave None.

#### [5.3] Save
**Say:** Tap **Save**. Ad-Din confirms, then recalculates your begin times in the background.
**Show:** Click Save. Toast "Successfully saved Prayer Time Settings!".

### 6. Adhan times
#### [6.1] Minutes before Iqamah
**Say:** Next, open **Adhan Times**. Each box is the number of minutes before Iqamah that the Adhan is called.
**Show:** Click the "Adhan Times" tab. The panel "Update Adhan times" with a box per prayer.

#### [6.2]
**Say:** Type 20 under Fajr, and the Fajr Adhan is called twenty minutes before Fajr Iqamah. Set each Jumu'ah you hold, too.
**Show:** Change "Fajr Adhan" from 15 to 20. Spotlight "Jumu'ah Adhan" and "Jumu'ah 2 Adhan".

#### [6.3] Maghrib
**Say:** Maghrib works from sunset. **Maghrib Adhan Offset** is the minutes after sunset, and **Maghrib Iqamah Offset** is the minutes from that Adhan to Iqamah.
**Show:** Spotlight "Maghrib Adhan Offset" (5) and the help paragraph under the boxes, then "Maghrib Iqamah Offset" (5) and its note "The minutes after Maghrib Adhan, Iqamah occurs."

#### [6.4] Save
**Say:** Tap **Save**. If you change your mind before saving, **Revert** brings back the saved values.
**Show:** Click Save: toast "Successfully saved Adhan Times". Hover Revert.

### 7. Islamic date
#### [7.1] Today's date
**Say:** Finally, open **Islamic Date**. The top panel shows the **Current Islamic Date**.
**Show:** Click the "Islamic Date" tab. Spotlight "Current Islamic Date: …". Keep the info box's Learn More link out of focus.

#### [7.2] Calendar
**Say:** Choose a calendar. **Umm Al-Qura** follows the Saudi calendar. **Hijri** lets you match your local moon sighting.
**Show:** Spotlight the two Select Calendar options; leave Hijri selected.

#### [7.3] Offset
**Say:** With **Hijri**, use **Select Date Offset** to move the date up to two days back or forward. Tick **Display 30th Hijri** when your month runs to thirty days.
**Show:** Open the offset dropdown (-2 days to 2 days); pick "-1 day", then back to "0 day". Spotlight the Display 30th Hijri checkbox without ticking it.

#### [7.4] After sunset
**Say:** **Update After Sunset** on **Yes** changes the date at sunset, when the Islamic day begins. Tap **Save**, then refresh the page to see the new date.
**Show:** Spotlight the Update After Sunset dropdown. Click Save: alert "Successfully Saved." with "Islamic Date settings was successfully saved"; click Ok. Refresh the page.

### 8. Next
#### [8.1] Close
**Say:** Your begin times, Adhan times and Islamic date are set. Next, set your Iqamah and Jumu'ah times, or import a full timetable from a spreadsheet.
**Show:** End card with two tiles: "04.2 Set iqamah and jumu’ah times" and "04.3 Import and export a prayer timetable".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · validator · checked against master d36d69ed8 · 1 fix: [6.3] Show line names the real help texts (one paragraph under all the Adhan boxes, one note under Maghrib Iqamah Offset)

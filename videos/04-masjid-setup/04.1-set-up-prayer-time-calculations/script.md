---
id: "04.1"
title: Set up prayer time calculations
target: 7:30
prereq:
  - "01.1"
status: scripted
flags:
  - "Minutes Before Zawal, Minutes After Zawal and the two Al-Duha boxes on Calculation Method can only be edited with the Custom method; every preset method locks them at their saved value (Makrooh Times in 04.11 depends on them). The script doesn't show them"
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
- why it matters: where members see the times (app, displays, website add-on)
- the Prayer Times tabs, and the crown on Prayer Times Premium tabs
- daylight saving 1 and 0; checking the map pin; Cancel on the map
- every preset method; Automatic No and the Manual Update tab (04.3)
- Custom values (twilight angle, minutes after mid-day, sunset or Maghrib); every High latitude choice
- what Save recalculates (one year from today) and checking it on View Prayer Times
- Adhan Times: required boxes, the error and toast, empty Jumu'ah boxes, a worked example
- Islamic Date: Umm Al-Qura hides the offset; offset example and when to check it

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo masjid "Maple Grove Masjid", signed in as its masjid admin, with its address and coordinates set
- Prayer settings to start: method MWL, Juristic Standard, Automatic Begin Time Calculation Yes, format 12h, daylight saving Auto, High latitude None
- Adhan Times: Fajr 15, Dhuhr 15, Asr 15, Maghrib Adhan Offset 5, Isha 15, Jumu'ah 30, Jumu'ah 2 15, Jumu'ah 3 and 4 empty, Maghrib Iqamah Offset 5
- Islamic Date: calendar Hijri, offset 0 day, Display 30th Hijri off, Update After Sunset Yes; a current Islamic date that renders for the demo clock (10 November 2026, near the end of Jumādá al-Ūlá 1448)
- View Prayer Times for 10 to 16 November 2026 shows begin and Iqamah times ([5.3a])
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
**Say:** In this video for masjid admins, you'll choose how Ad-Din calculates your begin times, when each Adhan is called, and which Islamic date to show.
**Show:** Title card: "Set up prayer time calculations".

#### [1.2]
**Say:** Your masjid is already registered, with its address on the map. Ad-Din uses that location to work out when each prayer begins, for every day of the year.
**Show:** Opening card from You'll need.

#### [1.2a] Why it matters
**Say:** Your members see these times in the Ad-Din app and on your displays. If your masjid has an Ad-Din website, it shows them too. Set them once with care, and Ad-Din uses them every day.
**Show:** Split view: the demo masjid's prayer times in the Ad-Din app (phone frame) and the Basic Display medium preview from 04.4.

### 2. Open Prayer Times
#### [2.1] Where it lives
**Say:** In the sidebar, open **Masjid**, then **Prayer Times**. Tap the **Calculation Method** tab.
**Show:** Sidebar → Masjid → Prayer Times. The page opens on Batch Update; pan along the tabs, then click "Calculation Method".

#### [2.1a] The tabs
**Say:** The tabs hold every prayer setting. This video uses **Calculation Method**, **Adhan Times** and **Islamic Date**. Iqamah times, timetables and displays have their own videos, from 04.2 to 04.6. Tabs with a crown need the Prayer Times Premium add-on.
**Show:** Pan along the tab row once more: Batch Update, Manual Update Import/Export, View Prayer Times, Adhan Times, Islamic Date, Basic Display, Announcements, Calculation Method, then the crowned Premium Displays, Contents, Ticker Message, Language Settings. Spotlight one crown icon.

### 3. Format and location
#### [3.1] Time format
**Say:** Under **Prayer Times Display Format**, choose a **Format**: 12-hour, like 8:40 AM, or 24-hour, like 16:45.
**Show:** Open the Format dropdown and pick "12h"; the Example column shows "8:40 AM".

#### [3.2] Daylight saving and coordinates
**Say:** Leave daylight saving on **Auto**, so the times move when your clocks change. Below, **Coordinates** shows your masjid's latitude and longitude.
**Show:** Spotlight the Auto radio button, then the Coordinates table with Latitude and Longitude.

#### [3.2a] 1 and 0
**Say:** The other two choices force it. 1 means the dates are in daylight saving time, and 0 means they are not. Use them only if your area doesn't follow the usual clock change.
**Show:** Spotlight the "1" and "0" radio buttons and the help text above them. Leave Auto selected.

#### [3.3]
**Say:** If the location is wrong, tap the update icon. Move the map until the pin sits on your masjid, then tap **Confirm**. This saves the new spot as your masjid's location everywhere in Ad-Din.
**Show:** Click the small update icon beside Coordinates. "Select Location" opens with a map; drag it so the pin is on the demo masjid; click Confirm. Toast "Successfully Updated".

#### [3.3a] Check the pin
**Say:** The pin decides every begin time, so place it on your own building, not on the centre of your town. If you open the map by mistake, tap **Cancel**, and nothing changes.
**Show:** Open the update icon again; zoom on the pin over the demo masjid. Click Cancel; the Coordinates stay the same.

### 4. Choose the method
#### [4.1] Calculation method
**Say:** Under **Set Calculation Method**, pick the method your community follows, such as the Muslim World League or the Islamic Society of North America.
**Show:** Open the method dropdown: MWL, ISNA, Egypt, Makkah, Karachi, Tehran, Custom. Pick ISNA; the description reads "Islamic Society of North America".

#### [4.1a] The other methods
**Say:** The others follow the Egyptian General Authority of Survey, Umm al-Qura University in Makkah, the University of Islamic Sciences in Karachi, and the University of Tehran. Choose the method your scholars and nearby masjids already use, so your times agree.
**Show:** Open the dropdown again and step through Egypt, Makkah, Karachi and Tehran; the Description column changes each time. End on ISNA.

#### [4.2] Asr
**Say:** **Juristic Settings** changes Asr only. Choose **Standard**, or **Hanafi** for the later Asr time.
**Show:** Open the Juristic dropdown and pick Hanafi. Spotlight the Asr factor in the table below, which changes to 2.

#### [4.3] Automatic begin times
**Say:** Keep **Automatic Begin Time Calculation** on **Yes**, and Ad-Din works out every begin time for the coming year.
**Show:** Spotlight the Yes radio button.

#### [4.4]
**Say:** Choose **No** only if you'll type in the begin times yourself, for the whole year. Ad-Din asks you to confirm first.
**Show:** Click No: the "Switch to Manual" prompt opens. Click "No" in the prompt; Yes stays selected.

#### [4.4a]
**Say:** With **No**, Ad-Din stops working out begin times when you save, and you enter them month by month on the **Manual Update Import/Export** tab. Video 04.3 shows how.
**Show:** Spotlight the "Manual Update Import/Export" tab in the tab row. Stay on Calculation Method.

### 5. Fine-tune and save
#### [5.1] Adjusting parameters
**Say:** **Adjusting Parameters** shows the angles and minutes used for each prayer. They're locked for the standard methods; choose **Custom** to enter your own.
**Show:** Spotlight the greyed table. Switch the method to Custom: the Fajr, Dhuhr, Maghrib and Isha boxes turn editable. Switch back to ISNA.

#### [5.1a] Custom values
**Say:** With **Custom**, Fajr takes a **Twilight Angle** in degrees, and Dhuhr takes **Minutes after Mid-Day**. Maghrib takes an angle or **Minutes after Sunset**. Isha takes an angle or **Minutes after Maghrib**. The Asr **Factor** follows **Juristic Settings**.
**Show:** Switch to Custom again. Spotlight in turn the Fajr row, the Dhuhr row, the Maghrib Degrees/Minutes radios, the Isha Degrees/Minutes radios, and the Asr Factor box (2, greyed). Switch back to ISNA without typing anything.

#### [5.2] High latitude
**Say:** Masjids far north or south can use **High latitude Parameters** to get usable Fajr and Isha times in summer. Most masjids leave it on **None**.
**Show:** Spotlight the Method dropdown under High latitude Parameters: None, MidNight, OneSeventh, AngleBased. Leave None.

#### [5.2a]
**Say:** The other choices limit Fajr and Isha by the middle of the night, by one seventh of the night, or by the angle. The description beside the dropdown names each one.
**Show:** Pick MidNight, OneSeventh and AngleBased in turn; the Description changes ("The Middle of the night method", "The 1/7th of the night method", "The angle-based method"). Back to None.

#### [5.3] Save
**Say:** Tap **Save**. Ad-Din confirms, then recalculates your begin times in the background.
**Show:** Click Save. Toast "Successfully saved Prayer Time Settings!".

#### [5.3a] What changes
**Say:** The new begin times cover one year from today. Wait a moment, then open **View Prayer Times** to check a few days. If something looks wrong, change the setting and save again.
**Show:** Click the "View Prayer Times" tab; pick 10 to 16 November 2026 and show the list. Return to "Calculation Method".

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

#### [6.4a] Empty boxes
**Say:** The five daily boxes and **Maghrib Iqamah Offset** need a number, zero or more. If one is empty, the box says **select a valid time**, and nothing saves. Leave a **Jumu'ah** box empty if you don't hold that Jumu'ah.
**Show:** Clear the Dhuhr Adhan box and click Save: "select a valid time" under it and the toast "Fill fields with valid minute values". Click Revert; 15 returns. Spotlight the empty "Jumu'ah 3 Adhan" and "Jumu'ah 4 Adhan" boxes.

#### [6.4b] Example
**Say:** For example, if Dhuhr Iqamah is at 1:00 and the Dhuhr box says 15, members see the Dhuhr Adhan at 12:45. When you change an Iqamah time later, the Adhan time moves with it.
**Show:** Zoom on the Dhuhr Adhan box (15) and the help paragraph: "The number above represents how many minutes before the Iqamah time, the Adhan will be called."

### 7. Islamic date
#### [7.1] Today's date
**Say:** Finally, open **Islamic Date**. The top panel shows the **Current Islamic Date**.
**Show:** Click the "Islamic Date" tab. Spotlight "Current Islamic Date: …". Keep the info box's Learn More link out of focus.

#### [7.2] Calendar
**Say:** Choose a calendar. **Umm Al-Qura** follows the Saudi calendar. **Hijri** lets you match your local moon sighting.
**Show:** Spotlight the two Select Calendar options; leave Hijri selected.

#### [7.2a] Umm Al-Qura
**Say:** If you pick **Umm Al-Qura**, the offset and the thirtieth-day box disappear. Most masjids that follow a local moon sighting keep **Hijri**.
**Show:** Click Umm Al-Qura: the info box, Select Date Offset and Display 30th Hijri disappear. Click Hijri again; they return. Nothing is saved.

#### [7.3] Offset
**Say:** With **Hijri**, use **Select Date Offset** to move the date up to two days back or forward. Tick **Display 30th Hijri** when your month runs to thirty days.
**Show:** Open the offset dropdown (-2 days to 2 days); pick "-1 day", then back to "0 day". Spotlight the Display 30th Hijri checkbox without ticking it.

#### [7.3a] Example
**Say:** For example, if your community sighted the moon a day later than the date shown, choose **-1 day**. Check the offset again at the start of each month, especially before Ramadan and the two Eids.
**Show:** Zoom on the offset dropdown showing "0 day", and the info box text "Please select the Hijri Date Offset Value, after careful assessment".

#### [7.4] After sunset
**Say:** **Update After Sunset** on **Yes** changes the date at sunset, when the Islamic day begins. Tap **Save**, then refresh the page to see the new date.
**Show:** Spotlight the Update After Sunset dropdown. Click Save: alert "Successfully Saved." with "Islamic Date settings was successfully saved"; click Ok. Refresh the page.

### 8. Next
#### [8.1] Close
**Say:** Your begin times, Adhan times and Islamic date are set. Next, video 04.2: Set Iqamah and Jumu'ah times. Or video 04.3: Import and export a prayer timetable.
**Show:** End card with two tiles: "04.2 Set iqamah and jumu’ah times" and "04.3 Import and export a prayer timetable".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 3:12 → 6:14 narration, 13 scenes added: where members see the times, the tabs and the crown, daylight saving 1 and 0, checking the pin and Cancel, the other methods, Automatic No and Manual Update (04.3), Custom values, High latitude choices, what Save recalculates, Adhan required boxes and empty Jumu'ah, Adhan example, Umm Al-Qura, offset example
- 2026-11-06 · panel (user, director, writer, PM, PO) · 5 changes: [1.2] says "when each prayer begins" instead of "begin times", [3.3] says Confirm saves the masjid's own location (settings.component.ts updateCoordinates), [8.1] names both end tiles by number, demo names moved to the Maple Grove demo world, demo Islamic date matches the demo clock
- 2026-11-03 · manager · decisions via chat · 04.6 split: Makrooh Times now lives in 04.11; Zawal flag pointer updated
- 2026-11-03 · critic · 5 changes: second-person opening without the idiom, cut repeated line in [2.1], plainer wording in [3.2] [5.1] [5.2]
- 2026-11-03 · validator · checked against master d36d69ed8 · 1 fix: [6.3] Show line names the real help texts (one paragraph under all the Adhan boxes, one note under Maghrib Iqamah Offset)

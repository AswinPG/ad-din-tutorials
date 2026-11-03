---
id: "13.2"
title: Draw work zones
target: 3:00
prereq:
  - "13.1"
status: scripted
---

# 13.2 Draw work zones

## Goal
Draw a circle or polygon zone around the place your staff work, and know that a tap outside it is still recorded.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Circle or polygon
- zones record location, they never block a check-in

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo madrasah with Staff Attendance on and a stored location, so the map opens on the site
- One existing zone "Main building" (circle, radius 150 m, used by 3 staff)
- A new polygon zone "Playing field" drawn during the video (5 points)
- Google map tiles available to the recorder (Map and Satellite); without the map the app hides New zone

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. What zones are for
#### [1.1] Opening
**Say:** A zone is the place your staff normally work, such as your building. In this video for organisation admins, you'll draw one.
**Show:** Title card: "Draw work zones".

#### [1.2]
**Say:** Staff Attendance is already switched on. When someone checks in, Ad-Din compares their location with their zone.
**Show:** Opening card.

### 2. Open Zones
#### [2.1] Your zones
**Say:** In the **Admin Portal**, open **Staff Attendance** and choose **Zones**. The map shows your zones. The list beside it shows each zone's shape, and how many staff use it.
**Show:** Sidebar → Admin Portal → Staff Attendance → Zones. Spotlight the list row "Main building · Circle · radius 150 m · Used by 3 staff".

#### [2.2]
**Say:** Tap a zone to show only that one on the map. Switch to **Satellite** to see your buildings clearly.
**Show:** Click the "Main building" row; the map shows only it. Click "Satellite", then "Map".

### 3. Draw a circle
#### [3.1] New zone
**Say:** To add a zone, tap **New zone** and type a **Zone name**.
**Show:** Click "New zone". Type "Annex" in Zone name.

#### [3.2]
**Say:** A new zone starts as a **Circle** of one hundred and fifty metres. Search for the address, then tap the map to place the centre.
**Show:** Type the demo address in "Centre on an address" and pick it. Click the map; the circle appears.

#### [3.3]
**Say:** Change the **Radius** if you need to. It can't go below one hundred metres, because tighter circles miss honest taps indoors.
**Show:** Change Radius to 200; the circle grows. Spotlight the note about the radius floor.

### 4. Or draw a polygon
#### [4.1] Polygon
**Say:** For an odd-shaped site, choose **Polygon** instead. Tap the map at each corner. If you misplace one, tap **Undo point**.
**Show:** Rename to "Playing field". Click "Polygon". Click five corners round the field; click "Undo point" once and re-add the last corner. Spotlight "5 of 100 points".

#### [4.2]
**Say:** A boundary needs at least three points, and it can't cross itself. When it looks right, tap **Save**.
**Show:** Click "Save". "Playing field · Polygon · 5 points" appears in the list.

### 5. Zones never block
#### [5.1] Annotate, never gate
**Say:** Zones never block a check-in. A tap outside a zone is still recorded; the staff member is just asked for a reason. So a teacher at an off-site school event can still check in, and you see their reason later, in **Review**.
**Show:** Zoom on the information note under the list.

#### [5.3] Edit or delete
**Say:** To change a zone, tap **Edit**. To remove one, tap **Delete**. If staff still use it, Ad-Din asks you to move them to another zone first.
**Show:** Hover "Edit". Click "Delete" on "Main building": the panel "Reassign before deleting "Main building"" lists its staff. Click "Cancel".

### 6. Next
#### [6.1] Close
**Say:** Your zones are drawn. Next, watch 13.3, Set up staff and shifts, to give each person their zone, and 13.4, Attendance settings and leave.
**Show:** End card with two tiles: "13.3 Set up staff and shifts" and "13.4 Attendance settings and leave".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · manager · decisions via chat · Staff Attendance is live: 'Is Staff Attendance live?' hold flag removed; publish normally
- 2026-11-03 · critic · 4 changes: [1.1] second-person opening; [2.1] full sidebar path; [5.1] "annotate" and "checks itself" replaced with plain words, thin [5.2] (Show only held the map) merged into it; [6.1] both end-card tiles named by number
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes

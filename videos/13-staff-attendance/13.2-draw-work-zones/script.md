---
id: "13.2"
title: Draw work zones
target: 4:30
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
- Why draw a zone, and how big to make it; several zones for several sites
- Radius limits, Map view, Remove this point
- What staff see (In the zone, Outside the zone and the reason sheet) and what admins see in Review
- Delete this zone? when nobody uses it; reassigning staff, including No zone and what it means

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo madrasah with Staff Attendance on and a stored location, so the map opens on the site
- One existing zone "Main building" (circle, radius 150 m, used by 3 staff)
- A new polygon zone "Playing field" drawn during the video (5 points)
- Staff in "Main building": Bilal Hussain, Khadija Usman, Idris Malik (for the reassign panel)
- A new circle zone "Annex" (radius 200 m) saved during the video, used by nobody, for Delete this zone? in [5.3]
- Review → Decided: a Khadija Usman day noted automatically, "Tapped outside the zone", with a distance and her reason "Work activity at another location"
- The phone cutaway in [5.1a] uses the mocked staff app (Khadija Usman, Today screen after a check-in in the zone)
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

#### [1.2a] Why
**Say:** A zone lets each tap check itself. A tap inside the zone needs nothing more. A tap outside it is still saved, and the staff member is asked why. You don't need a zone to start, but without one, nothing can be confirmed.
**Show:** Map of the demo site with the "Main building" circle drawn; zoom on the information note under the list.

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

#### [3.3a] How big
**Say:** Make the zone generous. A phone's location is rarely exact, especially inside a building. The radius can be up to twenty thousand metres, so it can also cover a car park or a playing field.
**Show:** Zoom out the map a little so the 200 m circle shows with the building and car park inside it.

#### [3.3b] Save
**Say:** Tap **Save**. You can draw as many zones as you need, for example one for each site where your staff work. Each staff member is then given one zone, as in video 13.3.
**Show:** Click "Save". "Annex · Circle · radius 200 m · Not used by anyone yet" appears in the list.

### 4. Or draw a polygon
#### [4.1] Polygon
**Say:** For a site with an uneven shape, tap **New zone** and choose **Polygon** instead. Tap the map at each corner. If you misplace one, tap **Undo point**.
**Show:** Click "New zone" and type "Playing field". Click "Polygon". Click five corners round the field; click "Undo point" once and re-add the last corner. Spotlight "5 of 100 points".

#### [4.1a] Points
**Say:** Under **Boundary points**, each corner is listed. Tap the cross beside one to remove just that point. A boundary can have up to one hundred points.
**Show:** Spotlight the list of points under "Boundary points" and the cross on the third point; don't click it.

#### [4.2]
**Say:** A boundary needs at least three points, and it can't cross itself. When it looks right, tap **Save**.
**Show:** Click "Save". "Playing field · Polygon · 5 points" appears in the list.

### 5. Zones never block
#### [5.1] Annotate, never gate
**Say:** Zones never block a check-in. A tap outside a zone is still recorded; the staff member is just asked for a reason. So a teacher at an off-site school event can still check in, and you see their reason later, in **Review**.
**Show:** Zoom on the information note under the list.

#### [5.1a] What staff see
**Say:** On their phone, your staff see a small location dot after each tap: **In the zone**, or **Outside the zone**. Outside the zone, they pick a reason. In **Review**, you see how far outside the zone the tap was, and their reason.
**Show:** Phone frame cutaway (side panel: "Signed in as: Khadija Usman, office staff"): the location dot popup "In the zone". Then back on the web: Admin Portal → Staff Attendance → Review → "Decided"; zoom on the Khadija Usman row "Tapped outside the zone" and its sentence "… m outside the zone".

#### [5.3] Edit or delete
**Say:** To change a zone, tap **Edit**. To remove one, tap **Delete**. If nobody uses it, Ad-Din asks you to confirm. Deleting can't be undone, but taps already checked against the zone keep their result.
**Show:** Spotlight "Edit". Click "Delete" on "Annex": the dialog "Delete this zone?" opens; zoom on its sentence. Click "Cancel".

#### [5.3a] Reassign first
**Say:** If staff still use the zone, Ad-Din asks you to move each of them to another zone first. Choose their new zone. **No zone** is also allowed, but then none of their taps can be placed: everything is still recorded, and nothing is confirmed.
**Show:** Click "Delete" on "Main building": the panel "Reassign before deleting "Main building"" lists its staff. Spotlight the zone choices for Bilal Hussain and the sentence under "No zone". Click "Cancel".

### 6. Next
#### [6.1] Close
**Say:** Your zones are drawn. Next, watch 13.3, Set up staff and shifts, to give each person their zone, and 13.4, Attendance settings and leave.
**Show:** End card with two tiles: "13.3 Set up staff and shifts" and "13.4 Attendance settings and leave".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 1:56 → 3:34 narration, 6 scenes added: [1.2a] why a zone; [3.3a] make it generous, radius up to 20,000 m; [3.3b] Save the circle, several zones, one zone per staff member; [4.1a] Boundary points, remove one point, up to 100; [5.1a] what staff see (location dot) and what you see in Review; [5.3a] reassign before deleting, No zone and its effect. [4.1] now starts a new zone (the circle is saved first); [5.3] Delete this zone? on an unused zone. Checked against origin/master d0604ce7f; target 3:00 → 4:30
- 2026-11-06 · panel (user, director, writer, PM, PO) · 1 changes: [4.1] "a site with an uneven shape" (no "odd-shaped" idiom)
- 2026-11-03 · manager · decisions via chat · Staff Attendance is live: 'Is Staff Attendance live?' hold flag removed; publish normally
- 2026-11-03 · critic · 4 changes: [1.1] second-person opening; [2.1] full sidebar path; [5.1] "annotate" and "checks itself" replaced with plain words, thin [5.2] (Show only held the map) merged into it; [6.1] both end-card tiles named by number
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes

---
id: "15.3"
title: "Events: going, interested and sharing"
target: 3:00
prereq:
  - "00.4"
status: scripted
flags:
  - Every event card shows a three-dot menu with Edit and Delete even to members (the template doesn't check the role). Keep it off camera; worth a fix.
---

# 15.3 Events: going, interested and sharing

## Goal
Browse your community's events in the Ad-Din app, narrow them down, mark the ones you're going to or interested in, and bookmark or share them.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Browse, filter, Going or Interested, bookmark, share (the phone's share sheet)

## Demo data
- A community member account with no admin role (not the admin demo account Yusuf Rahman), signed in on the app, home masjid "Maple Grove Masjid", following "Cedar Hill Masjid"
- Six upcoming public events across both masjids with posters (today is Tuesday 10 November in the demo world): one today ("Tafsir Circle", after Isha), one tomorrow, the demo world's "Family Quran Night" (Friday 13 November), two this weekend ("Family Picnic", "Youth Football", Saturday 14 and Sunday 15), and the demo world's "Youth Open House" (Saturday 21 November); categories such as Lecture, Family, Sports
- Event "Family Picnic" with description, venue address, map pin and an Event Page link (Share sends that link; without one, only the title is shared)
- None of the events marked Going, Interested or bookmarked at the start
- Share shown as the phone's share sheet; cancel it before any contact shows
- Phone frame for every shot

## Script

### 1. What's on
#### [1.1] Opening
**Say:** Talks, classes, family days: your masjid's events are all in the Ad-Din app. In this video, you'll find an event, mark that you're going, and share it with a friend.
**Show:** Title card: "Events: going, interested and sharing". Phone frame on the app home. Side panel label: "Signed in as: a community member".

#### [1.2]
**Say:** Today's events already show on your home screen. Tap **Events** to see everything coming up.
**Show:** Scroll the home screen to "Today's events" with "Tafsir Circle". Scroll back up and tap the "Events" tile.

### 2. Browse events
#### [2.1]
**Say:** Each card shows the poster, the date, the time and the place. The name of the masjid running it is on the poster.
**Show:** Events page. Spotlight the first card: date badge, organisation tag, time and venue lines. Scroll slowly through two more cards.

#### [2.2] Quick filters
**Say:** Use the chips to show just **Today**, **Tommorow**, this **Week** or the **Weekend**. **All** brings everything back.
**Show:** Tap "Weekend": the two weekend events show. Tap "All".
**Caption:** Use the chips to show just Today, Tomorrow, this Week or the Weekend. All brings everything back.

#### [2.3] Search and Filters
**Say:** To find something specific, type in the search box, or tap **Filters** to pick a category or one masjid.
**Show:** Type "picnic" in "Search events", then clear it. Tap "Filters": the sheet shows Categories and Organizations.

#### [2.4]
**Say:** Choose from **Categories** or **Organizations**, then tap **Ok**. **Clear Filter** removes them again.
**Show:** Tap the category "Family", tap "Ok": only family events show and the Filters button shows "1". Open Filters again, tap "Clear Filter".

### 3. Going or interested
#### [3.1] Open an event
**Say:** Tap an event to see the full details.
**Show:** Tap the "Family Picnic" poster. The event page opens.

#### [3.2]
**Say:** Read **About this event**, and see the **Venue Location** on the map. Tap **Directions** to open it in your maps app.
**Show:** Expand "About this event"; scroll to "Venue Location" and spotlight "Directions" without tapping.

#### [3.3] Going and Interested
**Say:** If you're going, tap **Going**. If you're not sure yet, tap **Interested**. Tap again to undo.
**Show:** Tap "Going": it highlights and the going count goes up by one. Then tap "Interested": the star fills; tap it again: the star empties. "Going" stays on.

#### [3.4]
**Say:** Back on the list, the counters at the top keep track of what you've marked.
**Show:** Tap "Back to list". Spotlight the three counters: Events, "Going to Some Events", Interested.

### 4. Bookmark and share
#### [4.1] Bookmark
**Say:** Tap the bookmark on a card to save it. Then tap **Bookmarks** to see only your saved events.
**Show:** Tap the bookmark icon on "Youth Football": it fills. Tap the "Bookmarks" chip: the page title changes to Bookmarks with one event. Tap "Bookmarks" again to return.

#### [4.2] Share
**Say:** To invite someone, tap share. Your phone's share sheet opens, so you can send the event by message or email.
**Show:** Tap the share icon on "Family Picnic". The phone's share sheet slides up; close it before any contact shows.

### 5. Next
#### [5.1] Close
**Say:** That's how you keep up with events at your masjid. Next, video 15.4: Donate to your masjid. Or video 15.6: Tasbeeh, live streams, gallery and forms.
**Show:** End card with two tiles: "15.4 Donate to your masjid" and "15.6 Tasbeeh, live streams, gallery and forms".

## Review log
- 2026-11-06 · panel (user, director, writer, PM, PO) · 6 changes: [1.1] "In this video, you'll" instead of "Let's", plus a "Signed in as: a community member" label; [3.3] Show undoes Interested, so Going and Interested are not shown on together (they are separate switches, eventDetails.component.ts); [4.2] "send the event" (Share sends the event's own Event Page link, eventList.component.ts share); [5.1] names both end tiles by number and title; demo data: Maple Grove names, the demo world's Family Quran Night and Youth Open House on the fixed date, a member account, an Event Page link on Family Picnic
- 2026-11-03 · manager · decisions via chat · Critic's taste call: title now 'Events: going, interested and sharing' (no calendar at phone width); heading and [1.1] title card updated; [2.3] elliptical question rewritten; end cards in 08.1, 15.2, 15.4, 15.7 updated
- 2026-11-03 · manager · decisions via chat · Planned features not in the app dropped: calendar removed from Covers, calendar flag removed
- 2026-11-03 · critic · 2 changes: [2.1] "sits on" replaced with plain "is on", [3.3] clipped questions made full "If" sentences (translation) · fold: share sheet named in Covers ([4.2] already shows and names it)
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes

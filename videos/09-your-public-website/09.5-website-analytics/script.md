---
id: "09.5"
title: Website analytics
target: 3:00
prereq:
  - "09.1"
status: scripted
flags:
  - "\"Visitor statistics\" is Google Search performance (clicks, impressions, click-through rate and position from Google Search Console), not a count of every visit. The script says so and doesn't promise visitor totals."
  - "A new website shows little or nothing until Google has found it; the demo needs mocked Search Console data."
---

# 09.5 Website analytics

## Goal
Read how your website performs in Google search, over any period, by search, page, country and device, and know when you'll see one combined report or two separate ones.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Visitor statistics
- combined or separate analytics

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Masjid Admin account, admin of "Masjid Al-Noor" and "Al-Noor Madrasah", both websites active and not linked (so the sidebar shows the two separate analytics items)
- Mocked Search Console data for `alnoor`: 28 days with about 420 clicks, 9,800 impressions, CTR around 4.3%, average position around 11; top searches such as "masjid al noor prayer times", "jummah near me", "al noor iftar"; pages Home, Monthly Prayer Times, Events; countries and devices (mostly mobile)
- A second state of the sidebar with the websites linked, showing the single Website Analytics item

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. How people find you
#### [1.1] Opening
**Say:** Are people finding your masjid's website when they search on Google? Website analytics shows you.
**Show:** Title card: "Website analytics".

#### [1.2]
**Say:** These numbers come from Google Search: how often your site appears in results, and how often people click through to it.
**Show:** Opening card from You'll need, with a small Google Search results illustration.

### 2. Open your analytics
#### [2.1] Separate websites
**Say:** In the sidebar, open **Website**. If your masjid and madrasah have separate websites, each has its own: **Masjid Website Analytics** and **Madrasah/School Website Analytics**.
**Show:** Sidebar → Website, expanded. Spotlight the two analytics items.

#### [2.2] Linked websites
**Say:** If you've linked them into one website, there's just one, combined: **Website Analytics**.
**Show:** Cut to the linked state of the sidebar: one "Website Analytics" item.

#### [2.3]
**Say:** We'll open the masjid's. You can also reach it from the **Statistics** tab on your website pages.
**Show:** Click "Masjid Website Analytics". The page "Performance for 'alnoor…'" opens.

### 3. The four numbers
#### [3.1] Clicks and impressions
**Say:** **Total clicks** is how many times someone clicked through to your site. **Total impressions** is how many times your site showed up in results.
**Show:** Spotlight the two tiles in turn.

#### [3.2] CTR and position
**Say:** **Average CTR** is the share of people who clicked after seeing you. **Average position** is how high you usually appear; lower is better.
**Show:** Spotlight the other two tiles.
**Caption:** Average CTR: the share who clicked. Average position: how high you appear (lower is better).

#### [3.3] The chart
**Say:** Each ticked number is drawn on the chart, day by day. Untick one to hide it.
**Show:** All four tiles start ticked. Untick "Average CTR" and "Average position"; the chart keeps the clicks and impressions lines.

### 4. Choose the period
#### [4.1] Periods
**Say:** The report starts on the last **28 days**. Switch to **7 days**, **3 months** or **6 months**, or tap **More** for your own dates.
**Show:** Click "3 months"; the tiles and chart update. Click "More"; the "Custom Date Range" box opens; close it.

### 5. Dig into the details
#### [5.1] What people search
**Say:** Below the chart, **QUERIES** lists the words people searched before finding you.
**Show:** Scroll to the table on the QUERIES tab; spotlight "masjid al noor prayer times".

#### [5.2] Pages, countries, devices
**Say:** **PAGES** shows which pages they landed on. **COUNTRIES** and **DEVICES** show where they are, and whether they used a phone or a computer.
**Show:** Click PAGES, then COUNTRIES, then DEVICES; each table changes.

#### [5.3] Compare
**Say:** Tap **Compare** to put two searches, pages, countries or devices side by side.
**Show:** Click "Compare"; the compare box opens; click Cancel.

### 6. Next
#### [6.1] Close
**Say:** A new website shows little until Google has found it, so check back every few weeks. Next, see your site the way visitors do.
**Show:** End card with two tiles: "09.6 What visitors see" and "09.4 Link masjid and madrasah websites; enquiries".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · critic · 1 change: [6.1] sets expectations for a new site instead of promising growth
- 2026-11-03 · validator · checked against master d36d69ed8 · 1 fix: all four metric tiles start ticked; scene [3.3] now unticks to hide lines

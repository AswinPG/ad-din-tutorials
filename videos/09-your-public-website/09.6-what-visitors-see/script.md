---
id: "09.6"
title: What visitors see
target: 3:45
prereq:
  - "09.2"
status: scripted
audience:
  - Everyone
flags:
  - "Website labels (Masjid News, Masjid Events, Masjid Donations, Masjid Facilities, Contact Us, Send Message, Donate, Portal, View All) come from AdDin.PublicWebpages, which npm run labels does not scan; checked by hand against origin/master."
  - "The website only opens while the Website add-on is active; otherwise visitors get \"Temporarily Unavailable\" (covered in 09.1)."
  - "Gallery, events and facilities only appear in the menu if the admin adds them (09.3); the default menu has Home, Latest News, Contact Us, Monthly Prayer Times and Volonteer Form. The demo menu must include them."
---

# 09.6 What visitors see

## Goal
Know what your community finds on your masjid's Ad-Din website: home page, news, events, gallery, facilities, monthly prayer times, donations and the contact form.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->
- Your masjid's Ad-Din website address
- Any web browser, on a computer or phone

## Covers
- Home, news, events, gallery, facilities, monthly prayer times, donate, contact

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Masjid Al-Noor demo website at `alnoor`, Website add-on active, branded (green theme, logo, two banner slides, Facebook and YouTube links)
- Menu: Home, Latest News, Events (All Masjid Events), Gallery (Masjid Gallery), Facilities (Facility Details (Masjid)), Monthly Prayer Times, Contact Us
- Donation page set to the published "Support Masjid Al-Noor" page, so the Donate button shows; campaign "Roof Repair Appeal" published with a goal, some donations and a fictional PayPal Hosted Button ID (its donate button is PayPal's)
- Today's prayer times and the monthly timetable for the current month
- Three news posts ("Eid Prayer Times Announced", "Roof Repair Update", "New Quran Class"), three upcoming events with posters ("Family Picnic", "Tafsir Circle", "Youth Football")
- Six gallery photos from the Ramadan iftar, each with a title and caption (the public Gallery page is one grid, no albums); facilities: Prayer Hall (capacity 400), Wudu Area, Parking (40 spaces), Wheelchair Access
- Contact form filled with a demo visitor; no real personal data. The form needs its reCAPTCHA ticked; use a test key or a mocked widget

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. A tour of your masjid's website
#### [1.1] Opening
**Say:** Every masjid with an Ad-Din website gets a public site that updates itself from Ad-Din. Let's see it the way a visitor does.
**Show:** Title card: "What visitors see".

#### [1.2]
**Say:** All you need is the website's address and a browser. No account, no app.
**Show:** Opening card from You'll need. A browser opening the demo address.

### 2. The home page
#### [2.1] Banner and menu
**Say:** At the top: the masjid's logo, its social media links, and the menu. Below, the banner slides change every few seconds.
**Show:** Home page. Spotlight the logo, social icons and menu bar; let the banner change slide once.

#### [2.2] Prayer Times
**Say:** Further down, **Prayer Times** shows today's times, straight from the masjid's timetable in Ad-Din.
**Show:** Scroll to the Prayer Times section; hold on today's times.

#### [2.3] More on the home page
**Say:** The home page also counts down to the next event, and shows the latest news, events, donation campaigns, photos and a short About Us.
**Show:** Scroll back up, then down slowly in page order: "Next Event In" countdown, "Masjid Donations", "Masjid News", "Masjid Events", then the photo strip beside "About Us".

### 3. News and events
#### [3.1] News
**Say:** **Latest News** lists the masjid's announcements. Tap one to read it in full.
**Show:** Menu → Latest News. The "Masjid News" page; click "Roof Repair Update"; the post opens.

#### [3.2] Events
**Say:** **Events** lists what's coming up, with a search box. Each event shows its date, time, place and poster.
**Show:** Menu → Events. The "Masjid Events" page; type "picnic" in the search and click Search.

#### [3.3]
**Say:** Open an event for the details. Visitors can share it with friends or copy its link.
**Show:** Click "Family Picnic". Show the poster, date and venue; click the share option; "Share Event" with "Copy Link". Close it.

### 4. Gallery and facilities
#### [4.1] Gallery
**Say:** **Gallery** shows the masjid's photos and videos.
**Show:** Menu → Gallery. The photo grid; click a Ramadan iftar photo; it opens large with its title and caption; click the right arrow twice, then close. (The website shows one grid, not albums.)

#### [4.2] Facilities
**Say:** **Facilities** tells visitors what the masjid offers, such as the prayer hall, parking and wheelchair access.
**Show:** Menu → Facilities. The "Masjid Facilities" page with the demo facilities and capacities.

### 5. Monthly prayer times
#### [5.1] The timetable
**Say:** **Monthly Prayer Times** shows the whole month: begin times, Iqamah times, sunrise and sunset, with the Islamic date.
**Show:** Menu → Monthly Prayer Times. Pan across the table columns.

#### [5.2]
**Say:** Visitors can move to another month, hide columns they don't need, and download the month as a PDF to print.
**Show:** Click the next-month arrow, then back. Open "Columns ▼"; untick two columns. Click the PDF icon; the download starts.

### 6. Give and get in touch
#### [6.1] Donate
**Say:** The **Donate** button at the top opens the masjid's donation page. Campaigns are under **Masjid Donations**, each with its own donate button.
**Show:** Spotlight "Donate" in the header; click it; the "Support Masjid Al-Noor" page opens. Back on the home page, click "View All" under Masjid Donations; "Roof Repair Appeal" shows its progress. Don't open PayPal.
**Caption:** Donate opens the donation page. Campaigns are under Masjid Donations.

#### [6.2] Contact Us
**Say:** On **Contact Us**, visitors fill in the **Send Message** form with their name, email, phone and message, and send it. The masjid gets it by email.
**Show:** Menu → Contact Us. The "Send Message" form with Full Name, E-Mail, Mobile Number and Your Message filled in; tick the reCAPTCHA box, then click the paper-plane send button ("Send Message" is the form's heading). The note "Thank you for contacting us. Your message will be forwarded to the organization." appears.

#### [6.3] Directions
**Say:** At the bottom of every page is the masjid's address, with a **Get Direction** button that opens the map.
**Show:** Scroll to the footer; spotlight the address and "Get Direction".

### 7. Next
#### [7.1] Close
**Say:** That's what your community sees, and it updates as the masjid updates Ad-Din. To change the menu or the look, see the website setup videos.
**Show:** End card with two tiles: "09.3 Build your website menu" and "09.2 Brand your website".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · critic · 2 changes: [1.1] idioms ("a home on the web", "take the tour") made literal; [2.1] banner no longer said to carry news (it shows the admin's slides)
- 2026-11-03 · validator · checked against master d36d69ed8 · 5 fixes: home-page scroll order; Gallery is one grid, not albums; contact form send button + reCAPTCHA + real thank-you text (Say no longer says tap Send Message); campaign PayPal button in demo data

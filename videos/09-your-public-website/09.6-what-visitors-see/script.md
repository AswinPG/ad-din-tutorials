---
id: "09.6"
title: What visitors see
target: 5:00
prereq:
  - "09.2"
status: scripted
audience:
  - Everyone
flags:
  - "Website labels (Masjid News, Masjid Events, Masjid Donations, Masjid Facilities, Contact Us, Send Message, Donate, Portal, View All, Live Stream, Submit, the volunteer page heading and thank-you) come from AdDin.PublicWebpages, which npm run labels does not scan; checked by hand against origin/master."
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
- Why look at your own site; share the address
- The Portal button; the Live Stream box (04.10); madrasah sections on a linked site (09.4)
- Volunteer signup page and its confirmation email
- Print the monthly timetable
- On a phone: the menu button with Portal and Donate
- What updates by itself, and where to change each part

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Maple Grove Masjid demo website at `maplegrove`, Website add-on active, branded (green theme, logo, two banner slides, Facebook and YouTube links)
- Menu: Home, Latest News, Events (All Masjid Events), Gallery (Masjid Gallery), Facilities (Facility Details (Masjid)), Monthly Prayer Times, Volunteer Form (Volunteer Signup (Masjid)), Contact Us
- A phone-width browser (or phone frame) for the [6.3a] shot
- Donation page set to the published "Support Maple Grove Masjid" page, so the Donate button shows; campaign "Roof Repair Appeal" published with a goal, some donations and a fictional PayPal Hosted Button ID (its donate button is PayPal's)
- Today's prayer times and the monthly timetable for the current month
- Three news posts ("Eid Prayer Times Announced", "Roof Repair Update", "New Quran Class"), three upcoming events with posters ("Family Picnic", "Tafsir Circle", "Family Quran Night")
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
**Say:** Every masjid with an Ad-Din website gets a public site that updates itself from Ad-Din. In this video, you see it the way a visitor does.
**Show:** Title card: "What visitors see".

#### [1.2]
**Say:** All you need is the website's address and a browser. No account, no app.
**Show:** Opening card from You'll need. A browser opening the demo address.


#### [1.2a] Why look
**Say:** Open your website the way your community does, especially after you change something in Ad-Din. Then share its address on posters, in your newsletter and in your messages.
**Show:** Card: the demo address "maplegrove" on a poster, a newsletter and a phone message.
### 2. The home page
#### [2.1] Banner and menu
**Say:** At the top: the masjid's logo, its social media links, and the menu. Below, the banner slides change every few seconds.
**Show:** Home page. Spotlight the logo, social icons and menu bar; let the banner change slide once.


#### [2.1a]
**Say:** Beside them, **Portal** opens the Ad-Din web app, where members can sign in. **Donate** shows when your masjid has a donation page.
**Show:** Spotlight "Portal" and "Donate" in the header. Don't click them yet.
#### [2.2] Prayer Times
**Say:** Further down, **Prayer Times** shows today's times, straight from the masjid's timetable in Ad-Din.
**Show:** Scroll to the Prayer Times section; hold on today's times.

#### [2.3] More on the home page
**Say:** The home page also counts down to the next event, and shows the latest news, events, donation campaigns, photos and a short About Us.
**Show:** Scroll back up, then down slowly in page order: "Next Event In" countdown, "Masjid Donations", "Masjid News", "Masjid Events", then the photo strip beside "About Us". Keep the "Donation Progress" counter out of close-up (it miscounts; docs/APP-ISSUES.md).


#### [2.3a]
**Say:** If your masjid streams live, a **Live Stream** box shows on the home page; video 04.10 sets it up. If your masjid and madrasah share one website, the madrasah's news, events and programmes show here too.
**Show:** Quick cut: a demo state with the "Live Stream" box. Card: "Linked website: Madrasah News · Madrasah Events · Madrasah Programs (video 09.4)".
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
**Show:** Menu → Facilities. The "Masjid Facilities" page with the demo facilities and capacities. Crop the browser tab bar: this page's tab title reads "Masjid News" (app bug).


#### [4.2a] Volunteers
**Say:** If the menu links to the volunteer signup page, visitors can join your volunteer team there. After they tap **Submit**, they see a thank-you, and new volunteers get an email from Ad-Din to confirm their address.
**Show:** Menu → Volunteer Form. The "Join Our Volunteer Team—Sign Up Today!" page; spotlight the form and its "Submit" button. Don't submit. Card: "JazakAllah Khair for Signing Up!".
### 5. Monthly prayer times
#### [5.1] The timetable
**Say:** **Monthly Prayer Times** shows the whole month: begin times, Iqamah times, sunrise and sunset, with the Islamic date.
**Show:** Menu → Monthly Prayer Times. Pan across the table columns.

#### [5.2]
**Say:** Visitors can move to another month, hide columns they don't need, and download the month as a PDF to print.
**Show:** Click the next-month arrow, then back. Open "Columns ▼"; untick two columns. Click the PDF icon; the download starts.


#### [5.2a]
**Say:** A printed timetable on the masjid notice board helps those who don't use phones. Download the month as a PDF and print it.
**Show:** The downloaded PDF opened in the browser's viewer for a moment.
### 6. Give and get in touch
#### [6.1] Donate
**Say:** The **Donate** button at the top opens the masjid's donation page. Campaigns are under **Masjid Donations**, each with its own donate button.
**Show:** Spotlight "Donate" in the header; click it; the "Support Maple Grove Masjid" page opens. Back on the home page, click "View All" under Masjid Donations; "Roof Repair Appeal" shows its progress. Don't open PayPal.
**Caption:** Donate opens the donation page. Campaigns are under Masjid Donations.

#### [6.2] Contact Us
**Say:** On **Contact Us**, visitors fill in the **Send Message** form with their name, email, phone and message, and send it. The masjid gets it by email.
**Show:** Menu → Contact Us. The "Send Message" form with Full Name, E-Mail, Mobile Number and Your Message filled in; tick the reCAPTCHA box, then click the paper-plane send button ("Send Message" is the form's heading). The note "Thank you for contacting us. Your message will be forwarded to the organization." appears.

#### [6.3] Directions
**Say:** At the bottom of every page is the masjid's address, with a **Get Direction** button that opens the map.
**Show:** Scroll to the footer; spotlight the address and "Get Direction".


#### [6.3a] On a phone
**Say:** On a phone, the site fits the screen. The menu opens from a menu button, with **Portal** and **Donate** at the bottom.
**Show:** Phone-width view: the home page; tap the menu button; spotlight the menu items, then "Portal" and "Donate".

#### [6.3b] What keeps it current
**Say:** Prayer times, news, events, campaigns, the gallery and facilities come straight from Ad-Din. Change them there, and the website changes too. The look and menu are in the website settings, as videos 09.2 and 09.3 show.
**Show:** Card: "From Ad-Din: prayer times · news · events · campaigns · gallery · facilities". "Website settings: look (09.2) · menu (09.3)".
### 7. Next
#### [7.1] Close
**Say:** That's what your community sees, and it updates as the masjid updates Ad-Din. Next, video 09.3: Build your website menu. Or video 09.2: Brand your website.
**Show:** End card with two tiles: "09.3 Build your website menu" and "09.2 Brand your website".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 2:05 → 3:31 narration, 7 scenes added: [1.2a] why look and share the address, [2.1a] Portal and Donate, [2.3a] Live Stream and linked sites, [4.2a] volunteer signup, [5.2a] print the timetable, [6.3a] on a phone, [6.3b] what keeps it current
- 2026-11-06 · panel (user, director, writer, PM, PO) · 4 changes: [1.1] second person instead of "let's", [2.3] keeps the miscounting Donation Progress counter out of close-up, [4.2] crops the wrong "Masjid News" tab title, [7.1] names both end tiles by number; demo names match the Maple Grove demo world (and its Family Quran Night event)
- 2026-11-03 · critic · 2 changes: [1.1] idioms ("a home on the web", "take the tour") made literal; [2.1] banner no longer said to carry news (it shows the admin's slides)
- 2026-11-03 · validator · checked against master d36d69ed8 · 5 fixes: home-page scroll order; Gallery is one grid, not albums; contact form send button + reCAPTCHA + real thank-you text (Say no longer says tap Send Message); campaign PayPal button in demo data

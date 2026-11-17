---
id: "09.3"
title: Build your website menu
target: 5:30
prereq:
  - "09.1"
  - "04.9"
status: scripted
flags:
  - "A new website starts with five menu items; one is spelled \"Volonteer Form\" by the backend default. Rename it on camera (shown as a fix) or seed the demo with the corrected name."
  - "Deleting a menu item has no confirmation, but nothing is saved until Save menu; scripted as is."
  - "Save menu doesn't stop an incomplete item: haveMenuError() never returns true (manage.menu.component.ts 458-477), so it only opens the item with a red box and saves anyway (logged in docs/APP-ISSUES.md). [6.2] tells viewers to check every item's link first instead of promising a block."
---

# 09.3 Build your website menu

## Goal
Add, rename, reorder and nest the items in your website's menu, and point each one to a page on your site, one of your service pages, or another web address.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Internal page, service page or web address
- Why a clear menu; keep the top bar short
- How menus work hint; each row shows where it links (Submenu · 2)
- The internal pages a masjid can pick; a linked site shows masjid and madrasah pages
- Done, and tapping an item to edit it again; Add to a submenu; up to three levels; collapse arrow
- External links open in a new tab; good uses
- Undo before saving; what visitors see after Save menu

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Masjid Admin account, admin of "Maple Grove Masjid", website active with the Website add-on, colour and logo already set
- Menu at the start: the five default items (Home, Latest News, Contact Us, Monthly Prayer Times, "Volonteer Form" as the backend spells it). Seed the website as activated before the service pages existed; if service pages exist at activation, Ad-Din also adds a sixth "Masjid" submenu holding up to five of them
- Published Introduction & Services pages: "Nikah Services" and "Funeral Services"
- Added on camera: "Events" → Internal page "All Masjid Events"; "Gallery" → "Masjid Gallery"; "Services" turned into a submenu holding "Nikah Services" and "Funeral Services" (Service page); "Quran Classes" → External link `https://maplegrove-madrasah.example.com`
- Demo website open in a second tab for the closing shot

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->


#### [1.1a] Why it matters
**Say:** Most visitors look for prayer times, events and how to contact you. A short menu with clear names gets them there in one tap. Keep the top bar to a handful of items, and group the rest.
**Show:** Card: a crowded menu bar with ten items crossed out, beside a short bar: Home, Prayer Times, Events, Services, Contact Us.
### 1. Help visitors find their way
#### [1.1] Opening
**Say:** The menu is the bar across the top of your website. It's how visitors find your events, services and prayer times. In this video, you add, link and order its items.
**Show:** Title card: "Build your website menu".

#### [1.2]
**Say:** Your website is already switched on, and your service pages are published under Introduction & Services, as in video 04.9.
**Show:** Opening card from You'll need.

### 2. Open the menu
#### [2.1] Website menu
**Say:** In the sidebar, open **Website**, tap **Masjid Website**, then tap **Menu**.
**Show:** Sidebar → Website → Masjid Website → Menu tab. The "Website menu" page.

#### [2.2]
**Say:** At the top is a live preview of your menu. Below, **Menu structure** lists each item. A new website starts with a few ready-made ones.
**Show:** Spotlight the live preview bar, then the five items in Menu structure.


#### [2.2a]
**Say:** Each item shows where it links, such as a page name or **External link**. Tap **How menus work** for a short reminder of the three kinds of link.
**Show:** Spotlight the link tag on "Monthly Prayer Times" and "Contact Us". Click "How menus work"; the hint opens; close it.
### 3. A page on your site
#### [3.1] Add menu item
**Say:** Tap **Add menu item**. A new item opens, ready to edit.
**Show:** Click "Add menu item". A "New item" row opens with its editor.

#### [3.2] Internal page
**Say:** Give it a **Label**. Under **Links to**, **Internal page** is selected. Pick a page Ad-Din builds for you, such as all your events or your gallery.
**Show:** Type "Events" in Label. Open the Internal page list; spotlight options such as "All Masjid Events", "Masjid Gallery", "Prayer Times (Masjid)", "Facility Details (Masjid)"; choose "All Masjid Events".


#### [3.2a] The internal pages
**Say:** For a masjid, the list has the **Home Page**, **Contact Page**, your services, news, events and gallery, and the masjid's prayer times, facilities and volunteer signup. If your masjid and madrasah share one website, the madrasah's pages are listed too.
**Show:** Scroll slowly through the open Internal page list: "Home Page", "Contact Page", "Service Pages List", "All Masjid Events", "All Masjid News", "Masjid Gallery", "Prayer Times (Masjid)", "Facility Details (Masjid)", "Volunteer Signup (Masjid)".
#### [3.3]
**Say:** Tap **Done**. The preview shows the new item straight away.
**Show:** Click "Done". The preview bar shows "Events". Add "Gallery" the same way, linked to "Masjid Gallery" (fast cut).


#### [3.3a]
**Say:** To change an item later, tap it, or tap its pencil. The editor opens again with its label and link.
**Show:** Click the "Events" row: its editor opens with Label "Events" and "All Masjid Events". Click "Done".
### 4. Your service pages
#### [4.1] Service page
**Say:** To link one of your own pages, add an item and choose **Service page**. Then pick the page from the list.
**Show:** Add an item labelled "Nikah Services". Click "Service page"; open the list (starts on "Select page"); choose "Nikah Services". Click Done.

#### [4.2] Submenu
**Say:** Several pages can sit under one heading. Open an item and tap **Turn into submenu**, then add the pages that go inside it.
**Show:** Add an item labelled "Services". Click "Turn into submenu"; a child item appears. Set the child to Service page "Funeral Services". Click 'Add to "Services"' and set the second child to "Nikah Services". Delete the earlier top-level "Nikah Services" item with its delete icon.


#### [4.2a] Inside a submenu
**Say:** Tap **Add to "Services"** to add another page inside it, and drag them into order. A submenu can hold its own submenu, up to three levels, but one level is easier to use on a phone. The arrow beside it folds the list.
**Show:** Spotlight 'Add to "Services"', the "Submenu · 2" tag and the folding arrow; click the arrow to fold and unfold "Services".
#### [4.3]
**Say:** An item with a submenu doesn't link anywhere itself. Visitors open it to see the pages inside.
**Show:** Hover "Services" in the live preview; its dropdown shows both pages.

### 5. Another website
#### [5.1] External link
**Say:** For a page on another website, choose **External link** and paste the full **Web address**.
**Show:** Add an item labelled "Quran Classes". Click "External link"; paste the demo address. Click Done.


#### [5.1a]
**Say:** An external link opens in a new tab, so visitors keep your website open. Use it for things such as your madrasah's own website, an enrolment form, or your Facebook page.
**Show:** Spotlight the "Quran Classes" row with its "External link" tag.
### 6. Change and save
#### [6.1] Rename and reorder
**Say:** Tap any item to rename it or change its link. Drag the handle to change the order. The delete icon removes an item, but nothing changes on your website until you save.
**Show:** Click "Volonteer Form"; correct the Label to "Volunteer Form"; Done. Drag "Events" to second place.

#### [6.2] Save menu
**Say:** Every item needs its link. When you open an item, a red box shows where one is missing. When every item is complete, tap **Save menu**.
**Show:** Open the "Quran Classes" item for a moment: its Web address box has no red border. Click "Save menu"; "Saving…", then a success toast.
**Caption:** Every item needs its link. Then tap Save menu.

#### [6.3] Check it
**Say:** Open your website, and there's your new menu.
**Show:** Switch to the demo website tab and refresh. Hover "Services" to open its dropdown; click "Events".


#### [6.3a] Changing it again
**Say:** Visitors see the new menu the next time they open or refresh the site. If you make a mistake before you save, leave the page and open **Menu** again: your saved menu comes back.
**Show:** Back in Ad-Din: spotlight the "Menu" tab in the top bar, then the "Save menu" button.
### 7. Next
#### [7.1] Close
**Say:** Your menu is ready. Next, video 09.4: Link masjid and madrasah websites; enquiries. Or video 09.6: What visitors see.
**Show:** End card with two tiles: "09.4 Link masjid and madrasah websites; enquiries" and "09.6 What visitors see".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 2:03 → 3:40 narration, 7 scenes added: [1.1a] why a short clear menu, [2.2a] link tags and How menus work, [3.2a] the internal pages and linked sites, [3.3a] edit an item again, [4.2a] Add to a submenu, three levels, fold arrow, [5.1a] external links open in a new tab, [6.3a] when visitors see it, undo before saving
- 2026-11-06 · panel (user, director, writer, PM, PO) · 7 changes: [1.1] second person, no phrasal verb, [1.2] names 04.9, [4.2] and [6.1] "delete icon" (not "bin") and nothing changes until you save, chapter 6 renamed (no "tidy up"), [6.2] no longer promises Ad-Din blocks an incomplete save (haveMenuError never true): check each item's link first, Caption, Show and a new flag to match, [7.1] names both end tiles by number; demo names match the Maple Grove demo world
- 2026-11-03 · critic · 0 changes: clear and well paced; one taste call left for the manager ([4.1]/[4.2] builds a top-level item, then deletes it)
- 2026-11-03 · validator · checked against master d36d69ed8 · 2 fixes: "starts with five" softened (a sixth Masjid submenu is added if service pages exist at activation); demo data notes seeding order

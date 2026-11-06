---
id: "07.2"
title: Send a message to your community
target: 4:00
prereq:
  - "03.3"
status: scripted
platform: Web
flags:
  - "'Add as news' only shows when the organisation has the Website add-on (add-message.component.ts checks the website subscription) and you send as Admin. The demo masjid needs the add-on, and [4.2] says so."
---

# 07.2 Send a message to your community

## Goal
Send a message from your masjid to all its followers, or just to staff or volunteers, by email, push notification or as news, with a link, picture and attachments.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Send new message: Sending as, Followers / Volunteers / Staff, title, link, image, attachments
- Email, Push, Add as news

## Demo data
- Demo admin account Yusuf Rahman: Masjid Admin of Maple Grove Masjid, his home masjid (and Admin, Teacher and Parent at Maple Grove Madrasah, so the Sending as menu has several roles)
- Maple Grove Masjid with followers, staff and volunteers, and the Website add-on, so "Add as news" shows
- A picture on the recording machine (`quran-night.jpg`) and a PDF (`quran-night.pdf`)
- Demo message: title "Family Quran Night this Friday" (the world's event on Friday 13 November), link `https://example.org/quran-night`, a few lines of text
- Sending succeeds in the demo world; no real emails or push notifications go out

## Script

### 1. Reach your community
#### [1.1] Opening
**Say:** In this video for masjid admins, you’ll send a message from your masjid to everyone who follows it, or just to your staff or volunteers. It can go by email, by push notification, or as news.
**Show:** Title card: "Send a message to your community".

#### [1.2]
**Say:** You need to be an admin of the masjid. Your staff and volunteers are already added in User Management.
**Show:** Opening card from You'll need.

### 2. Start a new message
#### [2.1] Compose
**Say:** In the sidebar, tap **Message**. Then tap the round button next to **News**, or **Send Message** in the empty reading pane.
**Show:** Sidebar → Message. Hover the compose button (tooltip "Send Message"), then click it.

#### [2.2] Sending as
**Say:** The **Send new message** window opens. At the top, **Sending as** shows your role. If you have more than one, tap it to switch; choose **Admin** to write for your masjid.
**Show:** Spotlight "Sending as Admin". Click it to show the role menu (Admin, Teacher, Parent), keep Admin.
**Caption:** Sending as shows your role. Choose Admin to write for your masjid.

### 3. Choose who gets it
#### [3.1] Organization
**Say:** Under **Organization**, Ad-Din picks your home masjid first. If you send for another masjid, tap the box and pick it.
**Show:** Spotlight the Organization box, already showing "Maple Grove Masjid". Click it to show the list, filter "Masjid", then keep Maple Grove Masjid.

#### [3.2] Send to
**Say:** Now choose **Send to**. **Followers (All)** reaches everyone who follows your masjid, including staff and volunteers, so you can’t pick the other choices with it.
**Show:** Click "Followers (All)"; Staff and Volunteers grey out. Click it again to clear.

#### [3.3]
**Say:** For a smaller group, choose **Staff**, **Volunteers**, or both.
**Show:** Click "Staff" and "Volunteers"; both show ticks.

### 4. Choose how it’s delivered
#### [4.1] Deliver via
**Say:** Under **Deliver via**, choose **Email**, **Push notification**, or both. Push appears straight away on the phones of people who use the Ad-Din app.
**Show:** Click "Email" and "Push notification".

#### [4.2] News
**Say:** If your masjid has the Website add-on, you’ll also see **Add as news**. News is public: anyone can read it, whoever you chose above.
**Show:** Spotlight "Add as news" and the hint "messages marked as news are publicly available, regardless of user targets". Leave it off for now.
**Caption:** With the Website add-on you can also Add as news. News is public, whoever you chose above.

### 5. Write the message
#### [5.1] Title and link
**Say:** Type a **Message Title**. To point people to a web page, paste the full address in **Hyperlink**; it’s optional.
**Show:** Type "Family Quran Night this Friday" in Message Title and `https://example.org/quran-night` in Hyperlink.

#### [5.2] Content
**Say:** Write your message in **Message Content**. Keep it short and clear.
**Show:** Type a few lines in Message Content.

#### [5.3] Picture and files
**Say:** With email or news chosen, you can add a picture and files. Tap **Choose image**, crop it, and tap **Save & Upload**. Tap **Add attachment** to add a PDF or document.
**Show:** Click "Choose image" → "Choose Image" → pick `quran-night.jpg` → crop → "Save & Upload". Click "Add attachment" → "Choose File" → `quran-night.pdf`. Both show as chips.
**Caption:** Tap Choose image, crop it, and tap Save & Upload. Tap Add attachment for a PDF or document.

### 6. Check and send
#### [6.1] Summary
**Say:** The line at the bottom sums it up, for example: Sending to Volunteers, Staff via Email, Push notification. Check it, then tap **Send Message**.
**Show:** Zoom on the footer summary, then click "Send Message". Confirmation message; the window closes.

#### [6.2]
**Say:** If you forget to pick a delivery method, Ad-Din asks you to choose one before sending.
**Show:** Quick replay: open a new message without a delivery method, click "Send Message"; the red line "Please select a Notification Target" appears under Deliver via. Close the window.

#### [6.3] Find it again
**Say:** Your message is now under **Sent**. A message added as news also shows on the **News** tab, where you can **Pin**, **Edit** or **Delete** it, or switch it to **Draft**.
**Show:** Click the Sent filter; the new message is at the top. Then the News tab: open a news item and spotlight the Published switch, Pin, Edit and Delete.

### 7. Next
#### [7.1] Done
**Say:** Your community has your message. Next, video 07.3: Message parents, classes and teachers, and video 07.1: Your message inbox.
**Show:** End card with two tiles: "07.3 Message parents, classes and teachers" and "07.1 Your message inbox".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-06 · panel (user, director, writer, PM, PO) · 6 changes: [1.1] says who it's for (masjid admins), [3.1] the home masjid is already picked when the window opens (add-message.component.ts 316-344 applyDefaultOrganization), [4.1] push reaches people who use the Ad-Din app, [6.2] Show: the notice is an inline line under Deliver via (notificationError), not a window, [7.1] names the end tiles by number and title, demo data uses the Maple Grove demo world and a message that fits the demo clock (Family Quran Night, not Eid in November)
- 2026-11-03 · critic · 1 change: [3.2] 'grey out' idiom reworded
- 2026-11-03 · validator · checked against master d36d69ed8 · 1 fix: [6.1] footer summary wording as the app builds it (Volunteers before Staff, no comma before via)

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
- Demo admin account that is admin of the demo masjid (and teacher at the demo madrasah, so the Sending as menu has two roles)
- Demo masjid with followers, staff and volunteers, and the Website add-on, so "Add as news" shows
- A picture on the recording machine (for example `eid-prayer.jpg`) and a PDF (for example `eid-arrangements.pdf`)
- Demo message: title "Eid prayer arrangements", link `https://example.org/eid`, a few lines of text
- Sending succeeds in the demo world; no real emails or push notifications go out

## Script

### 1. Reach your community
#### [1.1] Opening
**Say:** In this video you’ll send a message from your masjid to everyone who follows it, or just to your staff or volunteers. It can go by email, by push notification, or as news.
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
**Show:** Spotlight "Sending as Admin". Click it to show the role menu (Admin, Teacher), keep Admin.
**Caption:** Sending as shows your role. Choose Admin to write for your masjid.

### 3. Choose who gets it
#### [3.1] Organization
**Say:** Under **Organization**, tap **Select Organization** and pick your masjid.
**Show:** Click "Select Organization"; filter "Masjid"; pick the demo masjid.

#### [3.2] Send to
**Say:** Now choose **Send to**. **Followers (All)** reaches everyone who follows your masjid, including staff and volunteers, so the other choices grey out.
**Show:** Click "Followers (All)"; Staff and Volunteers grey out. Click it again to clear.

#### [3.3]
**Say:** For a smaller group, choose **Staff**, **Volunteers**, or both.
**Show:** Click "Staff" and "Volunteers"; both show ticks.

### 4. Choose how it’s delivered
#### [4.1] Deliver via
**Say:** Under **Deliver via**, choose **Email**, **Push notification**, or both. Push appears on people’s phones straight away.
**Show:** Click "Email" and "Push notification".

#### [4.2] News
**Say:** If your masjid has the Website add-on, you’ll also see **Add as news**. News is public: anyone can read it, whoever you chose above.
**Show:** Spotlight "Add as news" and the hint "messages marked as news are publicly available, regardless of user targets". Leave it off for now.
**Caption:** With the Website add-on you can also Add as news. News is public, whoever you chose above.

### 5. Write the message
#### [5.1] Title and link
**Say:** Type a **Message Title**. To point people to a web page, paste the full address in **Hyperlink**; it’s optional.
**Show:** Type "Eid prayer arrangements" in Message Title and `https://example.org/eid` in Hyperlink.

#### [5.2] Content
**Say:** Write your message in **Message Content**. Keep it short and clear.
**Show:** Type a few lines in Message Content.

#### [5.3] Picture and files
**Say:** With email or news chosen, you can add a picture and files. Tap **Choose image**, crop it, and tap **Save & Upload**. Tap **Add attachment** to add a PDF or document.
**Show:** Click "Choose image" → "Choose Image" → pick `eid-prayer.jpg` → crop → "Save & Upload". Click "Add attachment" → "Choose File" → `eid-arrangements.pdf`. Both show as chips.
**Caption:** Tap Choose image, crop it, and tap Save & Upload. Tap Add attachment for a PDF or document.

### 6. Check and send
#### [6.1] Summary
**Say:** The line at the bottom sums it up, for example: Sending to Volunteers, Staff via Email, Push notification. Check it, then tap **Send Message**.
**Show:** Zoom on the footer summary, then click "Send Message". Confirmation message; the window closes.

#### [6.2]
**Say:** If you forget to pick a delivery method, Ad-Din asks you to choose one before sending.
**Show:** Quick replay: open a new message without a delivery method, click "Send Message"; "Please select a Notification Target" shows. Close it.

#### [6.3] Find it again
**Say:** Your message is now under **Sent**. A message added as news also shows on the **News** tab, where you can **Pin**, **Edit** or **Delete** it, or switch it to **Draft**.
**Show:** Click the Sent filter; the new message is at the top. Then the News tab: open a news item and spotlight the Published switch, Pin, Edit and Delete.

### 7. Next
#### [7.1] Done
**Say:** Your community has your message. To message parents, a class, or a teacher in your madrasah, watch the next video.
**Show:** End card with two tiles: "07.3 Message parents, classes and teachers" and "07.1 Your message inbox".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · validator · checked against master d36d69ed8 · 1 fix: [6.1] footer summary wording as the app builds it (Volunteers before Staff, no comma before via)

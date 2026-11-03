---
id: "09.4"
title: Link masjid and madrasah websites; enquiries
target: 3:45
prereq:
  - "09.1"
status: scripted
flags:
  - "Direction matters: the organisation that accepts keeps its website and address; the one that sent the request moves onto it (ChangeRequestStatus maps the sender to the accepter's website). On the masjid's site the card reads Link your Madrasah, which would move the masjid onto the madrasah's site. The script sends from the madrasah (Link your Masjid) so the masjid's address is kept, and explains both cards. Confirm this is the advice we want."
  - "Enquiries have no screen in Ad-Din: the website's contact form emails the organisation's email on file and the website's contact emails; the enquiry list component (PFWEnquiryComponent) exists but isn't routed. Scripted as email-only."
  - "The linking fine print says the other organisation \"needs its own active PFW subscription\"; but the backend doesn't check it and the confirm dialog says only the requesting organisation needs a subscription (see 02.5). Narration says both websites are switched on; the app's fine print contradicts itself."
---

# 09.4 Link masjid and madrasah websites; enquiries

## Goal
Join your masjid's and madrasah's websites into one site, approve or unlink the connection, and know where visitors' messages from your contact form arrive.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->
- Admin access to the masjid and to the madrasah (or the other admin's help to approve)
- A website switched on for each (one Website add-on is enough for a linked site; see 02.5)
- The organisation you send to must be one you follow

## Covers
- Link your Madrasah, approval, unlink
- answering enquiries

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- One demo account that is admin of "Masjid Al-Noor" and "Al-Noor Madrasah", following both
- Both have active websites with the add-on: masjid at `alnoor`, madrasah at `alnoor-madrasah`; not linked at the start
- Masjid Al-Noor email on file `office@alnoor.example`; website contact emails `office@alnoor.example` and `imam@alnoor.example`
- A demo visitor message on the website's Contact page: Full Name "Sara Ahmed", E-Mail `sara@example.com`, Mobile Number fictional, message "Do you offer Nikah services on Saturdays?"
- The notification email "New enquiry from website" shown in a mock mail client (no real inbox)
- The Contact page's reCAPTCHA must be ticked before the form sends; use the demo site's test reCAPTCHA key or a mocked widget

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. One website for both
#### [1.1] Opening
**Say:** If your masjid runs a madrasah, both can share one website, with prayer times, classes, events and news together. We'll also see where visitors' messages arrive.
**Show:** Title card: "Link masjid and madrasah websites; enquiries".

#### [1.2]
**Say:** Both organisations already have a website switched on, and you follow the one you're linking to.
**Show:** Opening card from You'll need.

### 2. Decide which address stays
#### [2.1] The two cards
**Say:** On your masjid's website home page, you'll see **Link your Madrasah**. On the madrasah's, it's **Link your Masjid**.
**Show:** Sidebar → Website → Masjid Website. Spotlight the "Link your Madrasah" card. Switch to Madrasah with the top-right switcher; spotlight "Link your Masjid".

#### [2.2]
**Say:** The one that accepts the request keeps its website and address. So to keep your masjid's address, send the request from the madrasah.
**Show:** Card with two site addresses and an arrow: the madrasah sends, the masjid accepts, "alnoor" stays.
**Caption:** The organisation that accepts keeps its website address.

### 3. Send the request
#### [3.1] Link your Masjid
**Say:** On the madrasah's website home page, tap **Link your Masjid**. You'll see the three steps, and the masjids you follow.
**Show:** Click "Link your Masjid". The "Organization linking" window shows the steps and the list of followed masjids.

#### [3.2]
**Say:** Tap your masjid. Check its details, then tap **Accept and Request**.
**Show:** Click "Masjid Al-Noor". The confirmation shows its address and contacts. Click "Accept and Request". "Request sent" appears.

### 4. Approve it
#### [4.1] Review request
**Say:** Now the masjid's admin approves. On the masjid's website home page, a note says there's a pending request. Tap **Review request**.
**Show:** Switch to Masjid with the top-right switcher. Spotlight "You have 1 pending linking request for your website." Click "Review request".

#### [4.2] Accept
**Say:** Tap **Accept**, check the madrasah's details, and tap **Accept and Link**.
**Show:** The request card "Al-Noor Madrasah wants to link with your website". Click "Accept"; then "Accept and Link".

#### [4.3] Linked
**Say:** Done. The card now shows both organisations, linked, sharing one website. Content from both appears there.
**Show:** The linked card with the masjid and madrasah joined by a link icon. The top switcher reads "Masjid + Madrasah".

### 5. Unlink
#### [5.1] Manage linking
**Say:** To separate them again, tap **Manage linking**, then **Unlink**.
**Show:** Click "Manage linking". Spotlight the "Unlink organizations" box and what it will do; click "Unlink".

#### [5.2]
**Say:** The madrasah's content leaves this website, and its own site comes back. Tap **Confirm unlink** if you're sure. For now, we'll cancel.
**Show:** The "Unlink this organization?" box. Spotlight "Confirm unlink", then click "Cancel".

### 6. Answer visitors' messages
#### [6.1] Contact form
**Say:** Visitors can write to you from your website's **Contact Us** page.
**Show:** Demo website → Contact Us. The "Send Message" form (Full Name, E-Mail, Mobile Number, Your Message) with the demo message filled in; tick the reCAPTCHA box, then click the paper-plane send button under it ("Send Message" is the form's heading, not a button). The note "Thank you for contacting us. Your message will be forwarded to the organization." appears.

#### [6.2] Where they arrive
**Say:** Each message is emailed to your organisation's email address and to your website's **Contact emails**. There's no separate inbox in Ad-Din.
**Show:** Back in Ad-Din: Settings tab → Contact emails, with the two email chips.

#### [6.3] Reply
**Say:** The email has the visitor's name, phone, email and message. Just reply from your email as usual.
**Show:** Mock mail client: "New enquiry from website" with the four details. Click Reply; stop there.

### 7. Next
#### [7.1] Close
**Say:** Your masjid and madrasah now share one website. Next, see how your website is doing in search.
**Show:** End card with two tiles: "09.5 Website analytics" and "09.2 Brand your website".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · critic · 3 changes: [2.1] [3.1] [4.1] "website home" -> "website home page", the term 09.1 uses
- 2026-11-03 · validator · checked against master d36d69ed8 · 2 fixes: contact form sent with the paper-plane button after reCAPTCHA (Send Message is a heading), real thank-you text; reCAPTCHA added to demo data

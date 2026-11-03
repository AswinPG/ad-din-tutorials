---
id: "14.1"
title: Your parent home in the app
target: 4:00
prereq:
  - "06.2"
status: scripted
flags:
  - "Covers says Pending Approval: the card with that title is for an organisation still waiting for Ad-Din's approval (admins only). For parents the script shows the My enrollments card with its Pending status instead."
---

# 14.1 Your parent home in the app

## Goal
Find your way around the parent home in the Ad-Din app: a panel for each child with their routine and class announcements, enrollments waiting for approval, and the shortcuts below.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->
- The Ad-Din app, signed in with your parent account
- At least one child enrolled at your madrasah

## Covers
- A panel per child, My Routine, announcements, Enroll Now, Pending Approval

## Demo data
- Parent "Yusuf Rahman" (username `yusuf_rahman`), Parent role only; home masjid "Masjid Al-Noor", home madrasah "Al-Noor Madrasah" (Premium, Class Announcements switched on)
- Children linked to Yusuf: "Maryam Rahman" (Maktab Level 1, Section B, username `maryam_rahman`) and "Hamza Rahman" (Hifz Boys A), both in a class; "Zainab Rahman" linked, with an enrollment request for "Maktab Level 1" in status Pending. Only Zainab has an enrollment request on record (the My enrollments card lists every request of each linked child, approved ones included)
- For the cards in [4.4]: Maryam is also in a class marked as a Quran Hifz class, with a Hifz record today (the Hifz progress card only shows for a child in a Hifz class); Al-Noor Madrasah has Academic Activity switched on (My Classwork only shows then)
- Today's routine for Maryam: three classes, one of them happening now
- Two class announcements for Maryam's class (one note, one photo) from her teacher
- Iqamah times for Masjid Al-Noor, two unread messages, one masjid event today
- Second demo parent "Aisha Rahman" who is also a Teacher, for the role tabs shot
- Third demo parent "Bilal Ahmed" with one linked child "Sara Ahmed", not in a class and no enrollment request, for the No Active Enrollments shot
- Phone frame for every shot

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Your home in the app
#### [1.1] Opening
**Say:** When you open the Ad-Din app as a parent, your home screen shows each child's day at a glance. Let's take a tour.
**Show:** Title card: "Your parent home in the app". Phone frame on Yusuf's app home.

#### [1.2]
**Say:** Your children are already enrolled at your madrasah. Everything here comes straight from the madrasah, so there's nothing to set up.
**Show:** Opening card from You'll need.

### 2. The top of the screen
#### [2.1] Header
**Say:** At the top is your organisation's name, with the menu button on the left for every page, and the settings button on the right for your profile.
**Show:** Spotlight the header bar: the name, then the ☰ button, then the gear button. Don't tap them.

#### [2.2] Prayer times
**Say:** Below it are today's **Iqamah times** from your masjid, with a countdown to the next prayer. Tap the card to open the full prayer times.
**Show:** Spotlight the prayer card: "Iqamah times", the five prayers, the "in … min" countdown. Don't tap.

### 3. One panel per child
#### [3.1] Your card
**Say:** Your card greets you with **Assalamu alaikum** and your name. Underneath, it says how many of your children are linked to your account.
**Show:** Spotlight the identity card: "Assalamu alaikum", "Yusuf Rahman", and the line "2 of 3 linked children in a class here".

#### [3.2] Pick a child
**Say:** Next to **Viewing** there's a button for each child in a class. Tap a name, and everything below switches to that child.
**Show:** Tap "Hamza": the cards below change. Tap "Maryam" again.

#### [3.3]
**Say:** Tap the selected child again to see their class and username. Tap the username to copy it, which helps when the madrasah asks for it.
**Show:** Tap the "Maryam" button: the details open with Class "Maktab Level 1 · Section B" and Username "@maryam_rahman". Tap the username: toast "Copied to clipboard".

#### [3.4] More than one role
**Say:** If you're also a teacher at the madrasah, tabs at the top of your card switch between **Parent** and **Teacher**.
**Show:** Cut to demo parent Aisha Rahman: tabs "Parent" and "Teacher" at the top of her card. Tap "Teacher", then "Parent". Cut back to Yusuf.

### 4. Your child's day
#### [4.1] Routine
**Say:** First comes your child's routine, here **Maryam's Routine**. It lists today's classes with their times, and marks the one on **Now** and the **Next** one.
**Show:** Spotlight the routine card titled "Maryam's Routine"; zoom on the "Now" and "Next" tags.

#### [4.2]
**Say:** Use the arrows to look at the other days of the week. Tap the day in the middle to jump back to **Today**.
**Show:** Tap the right arrow twice: the day label changes. Tap the label: it reads "Today" again. (The week runs Sunday to Saturday and the arrows stop at its ends, so record Sunday to Thursday.)

#### [4.3] Announcements
**Say:** **Class Announcements** shows the latest posts from your child's teachers, such as notes and photos. Tap **View all** to see every post.
**Show:** Spotlight the Class Announcements card with the two posts. Tap "View all": the Class Announcements page opens. Go back.

#### [4.4]
**Say:** Further down are attendance, Hifz progress and classwork. Each one has its own video in this series.
**Show:** Scroll slowly past the Attendance, Hifz progress and My Classwork cards, spotlighting each heading.

### 5. Enrollments waiting for approval
#### [5.1] My enrollments
**Say:** If you've applied to enroll a child, **My enrollments** shows the request and its status. **Pending** means the madrasah hasn't decided yet.
**Show:** Scroll to "My enrollments": row "Zainab Rahman", "Maktab Level 1", pill "Pending". Spotlight the hint "A child appears here once the madrasah approves the enrollment."

#### [5.2]
**Say:** Once the madrasah approves it, your child gets their own button and panel at the top. Tap a request to open your enrollments page.
**Show:** Tap the row: the enrollment page opens with Zainab's request. Go back.

#### [5.3] Enroll Now
**Say:** If none of your children is in a class yet, you'll see **No Active Enrollments** instead. Tap **Enroll Now** to apply for a program.
**Show:** Cut to demo parent Bilal Ahmed: card "No Active Enrollments", "Sara is linked but not enrolled in a class." Spotlight "Enroll Now". Don't tap. Cut back to Yusuf.

### 6. Shortcuts, messages and events
#### [6.1] Tiles
**Say:** Below your children are shortcut tiles, such as **Prayer Times**, **Quran**, **Events** and **Messages**.
**Show:** Scroll to the tile grid. Spotlight Prayer Times, Quran, Events, Messages in turn.

#### [6.2]
**Say:** The **Messages** card counts your unread messages, and **Today's events** lists what's on at your masjid.
**Show:** Spotlight the Messages card with "2 unread", then the Today's events card.

#### [6.3] Refresh
**Say:** Pull down from the top at any time to refresh your home.
**Show:** Scroll to the top and pull down: the Ad-Din logo spins, then the cards reload.

### 7. Next
#### [7.1] Recap
**Say:** That's your parent home: a panel for each child, their routine and announcements, and any enrollment still waiting for approval.
**Show:** Yusuf's home, top of the screen, Maryam selected.

#### [7.2] Close
**Say:** Next, check your child's attendance and report an absence, or follow their Hifz progress and classwork.
**Show:** End card with two tiles: "14.2 Check attendance and report an absence" and "14.3 Follow Hifz progress and classwork".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · validator · checked against master d36d69ed8 · 2 fixes: demo data (Hifz class and Academic Activity needed for [4.4], only Zainab has an enrollment request), [4.2] record Sun–Thu so the right arrow works twice

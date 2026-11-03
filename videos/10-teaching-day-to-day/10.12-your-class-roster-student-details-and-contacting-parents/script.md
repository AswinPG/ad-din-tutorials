---
id: "10.12"
title: "Your class roster: student details and contacting parents"
target: 4:00
prereq: []
status: scripted
flags:
  - "Covers calls it the class's 'messaging allowed' setting; on screen it is the 'Bi-Directional Communication Allowed' switch in the Add / Edit Class form, off by default. Same switch as 07.3 and 05.3."
  - "The AI rewrite and sending need mocked replies in the demo world: the rewrite returns the polished text in [5.3] (it always opens with 'Assalamu alaikum'), and Send returns success. No real message, push or email goes out."
  - "Call fetches the number only when tapped and hands it to the phone's dialer. In the demo world the call must stop at the dialer screen (a stylised graphic); never show a real phone number."
---

# 10.12 Your class roster: student details and contacting parents

## Goal
Open a section's roster, read a student's details, and call or message their parent from the same screen.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->
- You teach at least one section of a class (set up by your madrasah admin)

## Covers
- Class Section → class and section roster
- Student facts: age, program, medical, special note, emergency contact
- Message a parent ("Sent through the Ad-Din app", AI rewrite, Undo)
- Call
- The class's Bi-Directional Communication Allowed switch

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo madrasah "Al-Noor Madrasah" (Premium); teacher Yusuf Patel teaches Class "Maktab Level 1", sections "A" (7 students, capacity 10, so it shows "Open"; 8 or more would already read "Nearly full") and "B" (10 students, capacity 10, so it shows "Nearly full"); a third section "C" he doesn't teach
- Class "Maktab Level 1" with Bi-Directional Communication Allowed switched on
- In section A, student "Aisha Rahman" (Student ID shown, age 9, Girl, enrolled last September), Medical "Peanut allergy. Carries an EpiPen in her bag.", Special note "Sits near the front; wears glasses."; parent "Fatima Rahman" (Mother) with a phone on file (only the last four digits show); emergency contact "Omar Rahman" with a phone
- One student with no medical or special note, for the "No medical concerns reported" shot
- Mocked AI rewrite reply for the draft in [5.2] (see [5.3]); Send returns success
- Teacher shown in the app (phone frame); the admin chapter on the web, signed in as the demo madrasah admin

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Know your students
#### [1.1] Opening
**Say:** Your class roster shows every student in your section, what you need to know about them, and a quick way to reach their parents. Let's open it.
**Show:** Title card: "Your class roster: student details and contacting parents".

#### [1.2]
**Say:** Your classes and sections are already set up by your madrasah admin. This works the same on the web and in the Ad-Din app.
**Show:** Opening card from You'll need. Web page on the left, the same page in a phone frame on the right.

### 2. Open your roster
#### [2.1] Find Class Section
**Say:** On the web, open **Teacher Portal**, then **Class Section**. In the app, tap **Madrasah** on the home screen, then **Class Section**.
**Show:** Web: Sidebar → Teacher Portal → Class Section. Phone frame: home → "Madrasah" tile; Yusuf only teaches, so the app skips the portal picker and opens the Teacher Portal menu straight away (someone with a second role, such as a parent, first taps "Teachers Portal") → "Class Section". Continue in the phone frame.
**Caption:** Web: Teacher Portal › Class Section. App: Madrasah › Class Section.

#### [2.2] Pick a class
**Say:** Tap **Select Class** and choose your class. Each section shows how many students it has against its capacity.
**Show:** Tap "Select Class", choose "Maktab Level 1". Section cards A, B and C appear. Spotlight "7 / 10" and the "Open" pill on A, and "Nearly full" on B.

#### [2.3] Open a section
**Say:** Tap a section to see its students. You can only open the sections you teach.
**Show:** Tap section A: the student list opens full screen with "Maktab Level 1 | A" and "7 students, capacity 10". Briefly cut to section C showing "Only this section's teachers can see its students", then back to A.

### 3. Student details
#### [3.1] The list
**Say:** Each student shows their name and Student ID. A coloured mark with **Medical** or **Note** tells you there's something to read. Use **Search students** to find someone quickly.
**Show:** Spotlight Aisha Rahman's row with "Medical · Note". Type "Ais" in "Search students", then clear it.

#### [3.2] Open a student
**Say:** Tap a student to open their details: **Age**, **Gender**, **Program** and the date they **Enrolled**.
**Show:** Tap Aisha Rahman: the panel opens. Spotlight Age "9 yrs", Gender "Girl", Program "Maktab Level 1", Enrolled.

#### [3.3] Medical and notes
**Say:** **Medical** and **Special note** come from the student's profile. Read them before a trip or a new activity. If there's nothing, it says **No medical concerns reported**.
**Show:** Zoom on the red Medical box and the Special note box. Cut to another student's open panel showing "No medical concerns reported".

### 4. Call a parent
#### [4.1] Contacts
**Say:** Above the details are the student's parents and their emergency contact. To protect privacy, you only see the last four digits of each number.
**Show:** Back on Aisha. Spotlight "Fatima Rahman" with "Mother" and "Phone ending …", then "Omar Rahman" with "Emergency".

#### [4.2] Call
**Say:** Tap the phone button to call. In the app, your phone's dialer opens with the number ready. On a computer, it opens your calling app.
**Show:** Tap the call button next to Fatima Rahman: it spins briefly, then cut to a stylised dialer screen with the number blurred.

### 5. Message a parent
#### [5.1] Start a message
**Say:** To write instead, tap the message button next to a parent. Emergency contacts can only be called.
**Show:** Tap the chat button next to Fatima Rahman. The sheet rises: "Message Fatima Rahman", "Mother of Aisha Rahman", with "Sent through the Ad-Din app" at the bottom.

#### [5.2] Write it
**Say:** Type your message in your own words. It's **Sent through the Ad-Din app**, so your own number stays private.
**Show:** Type: "aisha did really well in her reading today, please keep practising at home".

#### [5.3] Rewrite
**Say:** Tap **Rewrite** and Ad-Din's AI turns your note into a clear, warm message, keeping the same facts.
**Show:** Tap "Rewrite": it shows "Rewriting", then the text becomes: "Assalamu alaikum Sister Fatima, Aisha did really well in her reading today. Please keep practising with her at home. JazakAllah khair." Footer shows "Rewritten. Undo".

#### [5.4] Undo
**Say:** Prefer what you wrote? Tap **Undo** to get your words back. You can always edit the text yourself before sending.
**Show:** Tap "Undo": the original text returns. Tap "Rewrite" again to keep the polished version.

#### [5.5] Send
**Say:** Tap **Send**. The parent gets it in their Ad-Din messages, with a notification and an email.
**Show:** Tap "Send". The sheet closes and the toast shows "Message sent to Fatima Rahman".

### 6. When the message button is missing
#### [6.1] The class setting
**Say:** Don't see a message button? Teachers can message parents only in classes where **Bi-Directional Communication Allowed** is switched on. Your admin turns it on when editing the class.
**Show:** Web, as the admin: Sidebar → Admin Portal → Class. Select "Maktab Level 1", click "Edit". Spotlight the "Bi-Directional Communication Allowed" switch (already on), then "Cancel".

#### [6.2] For admins
**Say:** Admins see the same details under **Admin Portal**, **Class Section**, and can message any parent, whatever the class setting.
**Show:** Sidebar → Admin Portal → Class Section. Select "Maktab Level 1", open section A, tap Aisha Rahman: the same contacts and details panel. Spotlight the message and call buttons.

### 7. Done
#### [7.1] Result
**Say:** Now you know your students at a glance, and their parents are one tap away.
**Show:** Phone frame: Aisha's open panel with contacts and details.

#### [7.2] Next
**Say:** Next, see how to message whole classes and all parents, or take attendance for your section.
**Show:** End card with two tiles: "07.3 Message parents, classes and teachers" and "10.2 Take class attendance".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · validator · checked against master d36d69ed8 · 2 fixes: [2.1] app path (a teacher-only user's Madrasah tile opens the Teacher Portal menu directly, no Teachers Portal tile); section A demo 8/10 would show "Nearly full" (80% rule), now 7/10 so [2.2] shows "Open"

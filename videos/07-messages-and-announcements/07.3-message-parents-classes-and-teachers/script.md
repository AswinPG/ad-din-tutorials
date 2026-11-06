---
id: "07.3"
title: Message parents, classes and teachers
target: 4:00
prereq:
  - "06.4"
status: scripted
audience:
  - Madrasah Admin
  - Teacher
plan: Premium
---

# 07.3 Message parents, classes and teachers

## Goal
Message all parents and students, one class or section, or one family as an admin or teacher, and let parents message their child’s teacher.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->
- Students and parents added and placed in class sections
- **Bi-Directional Communication Allowed** switched on for each class where teachers and parents should message each other (Class settings, video 05.3)

## Covers
- All Parents, All Students, a class or section, Include Students
- parents messaging teachers

## Demo data
- Maple Grove Madrasah with two classes, "Hifz Class A" (section "Morning") and "Weekend Quran", both with Bi-Directional Communication Allowed on
- Admin: the demo account Yusuf Rahman (home masjid Maple Grove Masjid, so the Organization box starts on the masjid); teacher: "Bilal Hussain", class teacher of Hifz Class A, teaching the subject "Hifz"; parent: Yusuf Rahman again, Sending as Parent, with Maryam in Hifz Class A; "Samir Karim" (parent of Zaid Karim, Hifz Class A) for the one-family shot
- Each account switch is labelled in the side panel: "Signed in as: madrasah admin", "teacher", "parent"
- Teacher and parent shown in the app (phone frame); admin on the web
- One parent message already in the teacher’s inbox for the reading shot
- Sending succeeds in the demo world; no real emails or push notifications go out

## Script

### 1. Messages in your madrasah
#### [1.1] Opening
**Say:** In this video for madrasah admins and teachers, you’ll message all parents, one class or one family. You’ll also see how parents write to their child’s teacher.
**Show:** Title card: "Message parents, classes and teachers".

#### [1.2]
**Say:** Your students and parents are already in their classes. Teachers and parents can only message each other in classes where **Bi-Directional Communication Allowed** is switched on.
**Show:** Opening card from You'll need. Cut-in: the class form with the "Bi-Directional Communication Allowed" switch on.

### 2. Admin: all parents and students
#### [2.1] Start
**Say:** As an admin, tap **Message** in the sidebar, then the round button to start a new message. Under **Organization**, your home masjid is picked first, so tap the box and choose your madrasah.
**Show:** Side panel "Signed in as: madrasah admin". Sidebar → Message → compose button. "Send new message", Sending as Admin. The Organization box shows "Maple Grove Masjid"; click it → filter "Madrasah" → "Maple Grove Madrasah".

#### [2.2] Parents
**Say:** In **Send to**, tap **Parents**. A row opens with **All Class**, **All Class Section** and **All Parents**. Leave them as they are to reach every parent.
**Show:** Click "Parents". The Parents row appears; spotlight the three lists.

#### [2.3] Students
**Say:** Tap **Students** too if the students should get it. Their row works the same way, with **All Students**.
**Show:** Click "Students"; the Students row appears with All Class, All Class Section, All Students.

### 3. Admin: one class, one section, one family
#### [3.1] A class or section
**Say:** To reach one class, choose it in the first list. To narrow it to one section, choose that in the second.
**Show:** In the Parents row, choose "Hifz Class A", then "Morning".

#### [3.2] One family
**Say:** To write to just one parent, choose them in the last list.
**Show:** Open the All Parents list and pick "Samir Karim". Then set it back to All Parents.

#### [3.3] Send
**Say:** Choose **Email** or **Push notification**, write your **Message Title** and **Message Content**, and tap **Send Message**.
**Show:** Click "Push notification"; type a title and short message; zoom on the footer summary; click "Send Message". Confirmation.

### 4. Teacher: message your class
#### [4.1]
**Say:** Teachers send from the same place. **Sending as** shows **Teacher**. Pick the madrasah, then tap **Parents** or **Students**.
**Show:** Phone frame, teacher account (side panel "Signed in as: teacher"): Messages → "Send Message". Spotlight "Sending as Teacher". Pick "Maple Grove Madrasah"; tap "Parents".

#### [4.2]
**Say:** A teacher must choose one of their classes and a section. Tick **Include Students** to send the same message to the students as well as their parents.
**Show:** Choose "Hifz Class A" and "Morning". Tap the Include Students box. Add a title and message, choose Push notification, tap "Send Message".
**Caption:** Teachers choose a class and section. Tick Include Students to reach the students too.

### 5. Parents: message a teacher
#### [5.1]
**Say:** Parents can write to a teacher. In the app, they tap **New message** on the **Messages** card, or open the inbox and tap **Send Message**.
**Show:** Phone frame, parent account (side panel "Signed in as: parent"): app home; tap "New message" on the Messages card. "Sending as Parent".

#### [5.2]
**Say:** They pick the madrasah, then **Select your child**, the **Teacher**, and the **Subject**. Then they write the message and tap **Send Message**.
**Show:** Pick "Maple Grove Madrasah"; choose Maryam in Select your child; choose "Bilal Hussain / Hifz Class A" in Select Teacher; choose "Hifz" in Select Subject; choose Push notification; type a short question; tap "Send Message".
**Caption:** Pick the madrasah, your child, the teacher and the subject, then write and send.

#### [5.3] The teacher reads it
**Say:** The teacher finds it in their inbox, with the class, section, child and subject shown, so they know exactly who is asking.
**Show:** Teacher inbox: open the parent’s message. Spotlight Class:, Section:, Child: and Subject:.

### 6. Next
#### [6.1] Done
**Say:** Now you can reach every parent, one class, or one family, and parents can reach their teachers. Next, video 07.4: Class announcements, and video 07.1: Your message inbox.
**Show:** End card with two tiles: "07.4 Class announcements" and "07.1 Your message inbox".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-06 · panel (user, director, writer, PM, PO) · 4 changes: [1.1] series opening form, for admins and teachers, [2.1] the home masjid is picked first, so the admin changes the Organization box to the madrasah (add-message.component.ts 316-344), [6.1] names the end tiles by number and title, demo data and Show names use the Maple Grove demo world (Hifz Class A, Bilal Hussain, Yusuf and Maryam, Samir Karim) with "Signed in as" labels on each account switch
- 2026-11-03 · critic · 1 change: [2.1] says how to start a new message (self-contained)
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes

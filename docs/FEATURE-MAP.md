# Ad-Din feature map

Every user-facing feature of the Ad-Din web app and mobile app, and the planned tutorial video that covers it.

- **Source:** origin/master at commit `d36d69ed8` (2026-11-01, "October 2026 - staff attendance release fixes, security fixes"), read-only export of `AdDin.Angular/src/app`. Mobile shell: `C:\Fantacode\Ad-DinMobileApp` working tree (branch `fix/ios-workload-version`, 2026-10-31), read only.
- **Date:** 2026-11-03.
- **Method:** every entry and child in `services/menu.data.ts`, every route in `modules/routes.ts` and the 100 `*routes.ts` / `*routing*.ts` files, the portal tile lists in `routes.ts`, tab lists and button labels in the main page templates, `assets/i18n/en.json`, the native bridge (`services/native-bridge.service.ts` and every `isNativeMobile()` / `openNative()` call), and the MAUI shell's `NativePageRouter.cs` and `PushNotificationBootstrap.cs`. The graphify graph was used only to check that no feature folder was skipped. Each video's `## Covers` list and front matter were matched against what was found. Covers labels were checked by searching the code for the exact text (see the last section).
- **What was not done:** nothing was run, so no page was opened. A row says a feature exists because its route, menu entry or template exists and something links to it. Where nothing seems to link to a route, the note says so.

**How to read "Covered by":** a video ID means that video's `## Covers` names the feature. `—` means no Covers list names it, and the Note gives the gap category: **(a)** needs a new video, **(b)** fold into an existing video (named), **(c)** leave out. "Track 11, on hold" means the planned fee videos cover it but the track is paused on purpose.

**Who:** Everyone, Member (community, no org role), Parent, Student, Teacher, Staff, Masjid Admin, Madrasah Admin, Org Admin (either kind of admin), Global Admin (Ad-Din staff only).

## Account & onboarding

| Feature | Where | Who | Covered by | Note |
|---|---|---|---|---|
| Sign Up (username and password rules, Terms, "What brings you here?") | `/signup` | Everyone | 00.2 | In the app, the login card sits over the Kaaba backdrop and the intents show as a 2×2 grid |
| Login | `/login` | Everyone | 00.3 | |
| Forgot Password / Reset Password | `/login` → Forgot Password | Everyone | 00.3 | |
| Choose home masjid and madrasah (finder, Continue to Madrasah, Skip for now, Parent / Guardian question) | `/finder`, `/finder/:roption/:org`, `/finish` | Everyone | 00.4 | |
| Profile: Personal info, GUID | Top bar → Profile (`/settings/userprofile`) | Everyone | 00.5 | |
| Home & Followed Orgs | Profile | Everyone | 00.5 | |
| Preferences: Notification preferences (E-mail, Push, Activity turn in notification) | Profile → Preferences | Everyone | 00.5 | |
| Preferences: Change password, Update e-mail (Verify) | Profile → Preferences | Everyone | 00.5 | |
| Delete Account | Profile → Preferences, `/settings/userprofile/deletemyaccount` | Everyone | 00.5 | |
| Sidebar and portal tiles (Masjid hub, Madrasah hub, Parent/Student/Teacher/Admin portal menus) | Sidebar, `/masjid/portals`, `/madressah/portals`, `/madressah/*portalmenu` | Everyone | 00.6 | |
| Web landing dashboard | `/dashboard` | Everyone | 00.6 | The Dashboard menu entry shows only to people with an org role; `/dashboard` stays the web landing page for everyone |
| Help menu: Knowledge Base, Training Courses | Top bar help menu | Everyone | 00.6 | |
| Help menu: Contact Us, Release Notes, FAQ, Privacy Policy, Terms of Service, Key Terms | Top bar help menu; `/miscellaneous/privacypolicy` | Everyone | — | (b) Fold into 00.6: one sentence covers the rest of the help menu |
| Top bar Message shortcut and Subscribe Now button | Top bar | Everyone | 00.6, 02.2 | |
| Register a masjid, madrasah or both (Authorized Representatives Only, Add form, location picker, Thank You) | `/register/authorization`, `/organization/add` | Org Admin | 01.1 | |
| Pending Approval note, Contact Ad-Din Support | Sidebar banner; app home "Pending Approval" card | Org Admin | 01.2 | |
| Claim Admin Role (description, documents) | Masjid Finder → claim, `/masjid/claims` | Org Admin | 01.3 | |
| Enrolment link landing page | `/enrol/:madressahId` | Parent | 06.2 | |

## Subscriptions

| Feature | Where | Who | Covered by | Note |
|---|---|---|---|---|
| Plans overview (free vs Premium, seats, add-ons, grace period) | Several pages | Everyone | 02.1 | The 30-day grace is enforced on the server (`SubscriptionKpiRepository`); no UI text states it |
| Personal Premium: Subscribe, Change Plan, Cancel | Profile → Subscription (`/settings/userprofile/subscribe`) | Everyone | 02.2 | Prices show as 0.99 CAD / 9.99 CAD, not "$" |
| Personal Premium in the app (App Store / Google Play) | Native Premium page (`openNative("subscription")`) | Everyone | 02.2 | See Mobile app only |
| Subscription Management: pick an organisation | Admin Portal → Subscription Management (`/subscription/organizations/select`) | Org Admin | 02.3 | |
| Subscriptions tab: Manage Subscription Quantity, "X of Y used" | `/subscription/:type/:id` | Org Admin | 02.3 | |
| Allocate Subscription / Manage Subscription on people | User Management lists (madrasah and masjid) | Org Admin | 02.4 | |
| Family Subscription sharing switch | Organization Management → Services | Org Admin | 02.4 | |
| Services tab: Website, Custom Sender email, Prayer Times Premium (15 Day Free Trial), Subscribe Now / Cancel / Reactivate | `/subscription/:type/:id` → Services | Org Admin | 02.5 | |
| Custom Sender settings (From Name, From Email, Reply-To Email, Resend Verification) | Services → Custom Sender | Org Admin | 02.5 | |
| Billing: Current Account Balance, Change billing settings, View invoices, View upcoming invoices, Pay now | `/subscription/:type/:id` → Billing | Org Admin | 02.6 | |
| Past invoice page | `/subscription/invoice/:type/:id/:which` | Org Admin | 02.6 | |
| Legacy subscription pages | `/subscription-legacy/*` | — | — | (c) Old copy of the v2 pages; nothing in the menu links to it |

## Masjid

Admin setup plus the masjid pages members see. Events and donations are listed here for the admin side and under Community for the member side.

| Feature | Where | Who | Covered by | Note |
|---|---|---|---|---|
| Organization Management: Masjid Details (logo, contact, time zone) | Admin Portal → Organization Management (`/settings/organisation/management/masjid/:id`) | Masjid Admin | 03.1 | |
| Organization Management: Services switches | same → Services | Masjid Admin | 03.2 | |
| Organization Management: Integrations (PayPal) | same → Integrations | Masjid Admin | 03.2 | |
| User Management: Admin / Staff / Volunteer, fetch by GUID or Add New | `/settings/usermanagement/masjid/:id` | Masjid Admin | 03.3 | |
| Manage Skills (volunteer skills list for the masjid) | Masjid user list → Manage Skills | Masjid Admin | — | (b) Fold into 03.3 (it sits next to Volunteer), with a pointer to 15.7 |
| Introduction & Services pages (Add New, Save as Draft, Publish) | Masjid → Introduction & Services (`/pages/list/masjid`) | Masjid Admin | 04.9 | |
| About Masjid (edit) | Masjid → About Masjid | Masjid Admin | 04.7 | |
| Staff List | Masjid → Staff List | Masjid Admin | 04.7 | |
| Facility Details (quantity, capacity) | Masjid → Facility Details | Masjid Admin | 04.7 | |
| Gallery (albums, images, videos) | Masjid → Gallery | Masjid Admin | 04.8 | |
| Forms (up to 2 MB) | Masjid → Forms | Masjid Admin | 04.8 | |
| Prayer Times: Adhan Times, Islamic Date, calculation settings | Masjid → Prayer Times (`adhantimes`, `hijridate`, `settings`) | Masjid Admin | 04.1 | |
| Prayer Times: Batch Update, View Prayer Times | `batchupdate`, `viewtimes` | Masjid Admin | 04.2 | |
| Prayer Times: Manual Update import/export | `manualupdate` | Masjid Admin | 04.3 | |
| TV displays: small / medium / large links | `display`; public `/smalldisplay/:id`, `/mediumdisplay/:id`, `/largedisplay/:id` | Masjid Admin | 04.4 | |
| Basic Announcements on the TV | `announcements` | Masjid Admin | 04.4 | |
| Premium displays: Vertical / Horizontal presets, Layout, Salah Control, Iqamaah Countdown | `newDisplays/:displayName` | Masjid Admin | 04.5 | |
| Premium displays: Contents, Ticker Message, Night Mode, Makrooh, Taraweeh, alternate language | `contents`, `tickerMessage`, `languageSettings` | Masjid Admin | 04.6 | |
| Manage Streaming (Video, Audio, Facebook slots) | Live Streaming → manage | Masjid Admin | 04.10 | |
| Events: create, public/private, invitees, categories, Ticket URL | Events → `eventadd` | Masjid Admin | 08.1 | |
| Events: repeat rules, delete one or series, show on the large TV | Events → `eventadd` | Masjid Admin | 08.2 | |
| Donation Page switch, payment settings | Org Management → Services; `/donations/paymentsettings` | Org Admin | 08.3 | |
| Fundraising campaign (goal, media, Hide donation progress, Pin card to top, PayPal Hosted Button ID) | Donation → `add` | Org Admin | 08.4 | |
| Transactions, Add Transaction, export | `/donations/transactions/...` | Org Admin | 08.5 | |
| Masjid dashboard | `/dashboard/masjid`, Masjid hub → Dashboard | Masjid Admin | 12.6 | |
| Old "add masjid" flow | `/masjid/finder` → `/masjid/instructions` → `/masjid/addboth` | — | — | (c) Old registration path, reached only from the unmounted welcome module and the unused `shared/menu.ts`; replaced by 01.1's flow |

## Madrasah admin

| Feature | Where | Who | Covered by | Note |
|---|---|---|---|---|
| Organization Management: Madrasah/School Details (three logos, currency, board, linked masjid, time zone) | Admin Portal → Organization Management | Madrasah Admin | 03.1 | |
| Services switches (Academic Activity, AutoSave Academic Reports, Class Announcements, Exam Marks, Payment Module, Family Subscription sharing, Staff Attendance) | Organization Management → Services | Madrasah Admin | 03.2 | |
| Integrations (PayPal) | Organization Management → Integrations | Madrasah Admin | 03.2 | |
| Enrollment Settings (Share Enrolment Link, QR, Required Documents, Declaration & Agreement, FAQs, Custom Fields) | Organization Management → Enrollment Settings | Madrasah Admin | 06.1 | |
| Manage Madrasah: signatures, Learning Skill, Subject for report | `/settings/organisation/management/managemadressah/:id` | Madrasah Admin | 05.1 | |
| User Management: Add (Admin, Teacher), Edit, profile pages, Access Rights, Deactivate / Re-Activate | `/settings/organisationUserList/madressah/:id` | Madrasah Admin | 03.4 | |
| Import / Export (Editable Export, Complete Report), Export User Data | same | Madrasah Admin | 03.5 | |
| Add Student / Parent, Manage Class, Link Parent, Link Childs, Siblings, MRC (media consent) | same | Madrasah Admin | 06.4 | |
| Community Involvement Activity Records (upload records and community hours per student) | User list → select a student → Community Involvement Activity Records (`/settings/madressah/:id/communityrecord`) | Madrasah Admin | — | (b) Fold into 06.4 as one more user-list action (split into its own short video if 06.4 runs long) |
| Pending Enrollments tab, approve / decline / Reconsider | User list → Pending Enrollments; `/settings/approve/:id` | Madrasah Admin | 06.3 | |
| Introduction & Services pages (madrasah) | Madrasah / School → Introduction & Services (`/pages/list/madressah`) | Madrasah Admin | — | (b) Fold into 04.9: same page type; 04.9 sits in the masjid track, so say once that madrasahs have it too |
| Program Details and Subjects, program description edit | Madrasah / School → Program Details and Subjects; `introduction/modify` | Madrasah Admin, Parent | 05.8, 05.3 | |
| Staff List, Program Timetables (public program pages) | Madrasah / School menu | Everyone | 05.8 | |
| Terms Management | Admin Portal → Terms Management | Madrasah Admin | 05.2 | |
| Grade (grade sets) | Admin Portal → Grade | Madrasah Admin | 05.2 | |
| Class (homeroom teacher, compulsory, Open for enrollment) | Admin Portal → Class | Madrasah Admin | 05.3 | |
| Class Section (Active, Inactive, Alumni lists) | Admin Portal → Class Section | Madrasah Admin | 05.4 | |
| Assign / move students between sections | Class Section → StudentAssign | Madrasah Admin | 06.5 | |
| Subject (teacher, grade set, discipline, group, strands, course code, credit) | Admin Portal → Subject | Madrasah Admin | 05.5 | |
| Class Routine overview (compare classes, clashes) and Schedule Builder | Admin Portal → Class Routine; `schedule-builder` | Madrasah Admin | 05.6 | |
| Duplicate Class Routines (copy between terms) | Class Routine | Madrasah Admin | 16.2 | |
| Holiday | Admin Portal → Holiday | Madrasah Admin | 05.7 | |
| Delegations (substitute teachers) | Admin Portal → Delegations | Madrasah Admin | 05.7 | |
| Parent Teacher Interview: slots, Manage Booking, Reminders, interview list | Admin Portal → Parent Teacher Interview | Madrasah Admin | 10.8 | |
| Attendance (admin view of class attendance) | Admin Portal → Attendance (`adminportalv2/attendancev2/add`) | Madrasah Admin | 10.2 | |
| Class Announcements (admin) | Admin Portal → Class Announcements | Madrasah Admin | 07.4 | |
| Exams, Manage Marks | Admin Portal → Exams / Manage Marks (Exam Marks switch) | Madrasah Admin | 10.11 | Older feature, open decision in series.yaml |
| Migration (promote students) | Admin Portal → Migration | Madrasah Admin | 16.1 | |
| Quran Hifz Assignments (mapping Sabaq, Sabaq Para, Dour, Test Para; by Ayah or Juz) | Admin Portal → Quran Hifz Assignments | Madrasah Admin | 10.3 | |
| Academic Activity: categories, terms, activities | Admin Portal → Academic Activity | Madrasah Admin | 10.5 | |
| Academic Activity: scores | Academic Activity → score | Madrasah Admin, Teacher | 10.6 | |
| Academic Activity: Excel import (Get the sheet, Download the marks sheet) | Academic Activity → import dialog | Madrasah Admin | 10.7 | |
| Library: circulation, acquisition, categories, locations | Admin Portal → Library | Madrasah Admin | 10.9 | |
| Recognition | Admin Portal → Recognition | Madrasah Admin | 10.10 | |
| Payment: fee types, discount rules, exceptions, invoices, receipts | Admin Portal → Payment (Payment Module switch) | Madrasah Admin | 11.1–11.4 | Track 11, on hold |
| Class-section roster with student facts and contact panel (admin side) | Admin class-section screen (`roster-contact-panel`) | Madrasah Admin | — | (a) New video 10.12, see Gaps |
| Admin dashboard (widgets, quick actions, Manage Dashboard Tiles) | `/dashboard` (admin) | Madrasah Admin | 12.6 | |
| Alumni page, Alumni Verdict | `introduction/alumni`, `alumniverdict` | — | — | (c) Hidden in the menu "until the alumni module is redone"; routes still exist |
| Legacy teacher-attendance register | `madressah/Attendance/*`; Staff Attendance settings → legacy | — | — | (c) Left out on purpose (series.yaml) |
| Program rules | `introduction/programrules`, `programrulesedit` | — | — | (c) Nothing links to these routes |
| Menu Control tab (role permissions grid) | Organization Management | — | — | (c) Tab is commented out of both tab lists |

## Teacher

| Feature | Where | Who | Covered by | Note |
|---|---|---|---|---|
| Teacher Portal tiles, teacher web dashboard | Sidebar → Teacher Portal; `/dashboard` (teacher) | Teacher | 10.1, 12.6 | |
| Teacher app home ("Needs your attention", My Routine, quick actions) | `/mobile-home` (teacher section) | Teacher | 10.1 | |
| Class, Subject, Holiday, Grade, Delegations (read-only views) | Teacher Portal | Teacher | 10.1 | Only as tiles on the tour; nothing to teach beyond "look here" |
| Class Routine (my timetable) | Teacher Portal → Class Routine | Teacher | 10.1 | |
| Class Section roster: student facts (age, gender, program, enrolled, medical, special note, emergency contact), Message a parent (with AI rewrite and Undo), Call | Teacher Portal → Class Section | Teacher | — | (a) New video 10.12, see Gaps. On the app, Call opens the phone dialer through the shell |
| Take attendance (Present, Absent, Late, Sick, Early Pickup, Not Marked; by subject) | Teacher Portal → Attendance | Teacher | 10.2 | |
| Class Announcements: post photo or note, tags, likes, views | Teacher Portal → Class Announcements | Teacher | 07.4 | |
| Record daily Hifz progress | Teacher Portal → Quran Hifz Assignments | Teacher | 10.4 | |
| Academic Activity scores, view or message a student | Teacher Portal → Academic Activity | Teacher | 10.6 | |
| Exams, Manage Marks | Teacher Portal (Exam Marks switch) | Teacher | 10.11 | |
| Parent Teacher Interview (Manage Booking, Reminders) | Teacher Portal → Parent Teacher Interview | Teacher | 10.8 | |
| Library (teacher) | Teacher Portal → Library | Teacher | 10.9 | 10.9 is marked Web |
| Recognition | Teacher Portal → Recognition | Teacher | 10.10 | |
| Migration (teacher's list) | Teacher Portal → Migration | Teacher | — | (b) Fold into 16.1: one line on what teachers see. The Teacher playlist does not include 16.1 today |
| Report comments, Custom Comments Library, Marked as Ready | Reports → Report Builder / Custom Comments Library | Teacher | 12.2 | |
| Ad-Din's AI Comment Generator (grade, strands, ESL/ELD, IEP, French, Regenerate) and "Use Legacy Comment Bank (Deprecated)" | Report card → Comments | Teacher | — | (b) Fold into 12.2: Covers says "Comments" but should name the AI Comment Generator, now the default |
| Message parents, classes and teachers | Message → Send new message | Teacher | 07.3 | |
| My Attendance (staff check-in) | Sidebar → My Attendance (`/attendance`) | Teacher, Staff | 13.7, 13.8 | |

## Parent / Student

| Feature | Where | Who | Covered by | Note |
|---|---|---|---|---|
| Parent app home (panel per child, My Routine, announcements, Enroll Now, Pending Approval) | `/mobile-home` (parent section) | Parent | 14.1 | |
| Parent web dashboard and Parent/Guardian Portal tiles | `/dashboard` (parent); `/madressah/parentportalmenu` | Parent | — | (b) Fold into 14.1: one closing shot of the same things on the web (14.1 is App only) |
| Attendance (Today, Subject Wise, Term dashboard), Report an absence | Parent Portal → Attendance; app home attendance card | Parent | 14.2 | |
| Hifz progress card, Quran Hifz Assignments | App home; Parent Portal → Quran Hifz Assignments | Parent | 14.3 | |
| My Classwork, Academic Activity scores | App home; Parent Portal → Academic Activity | Parent | 14.3 | |
| Exams, Exam Marks (parent view) | Parent Portal (Exam Marks switch) | Parent | — | (b) Fold into 14.3 (one line, only when Exam Marks is on) |
| Class, Subject, Class Routine, Holiday, Grade, Delegations (parent view) | Parent Portal | Parent | 14.1 | My Routine covers the timetable; the other read-only lists are not named. (b) one line in 14.1 |
| Payment (Invoice History) | Parent Portal → Payment | Parent | 14.4 | No online payment yet (series.yaml decision) |
| Report Archive (released report cards) | Reports → Report Archive | Parent | 14.4 | |
| Book a parent-teacher interview | Parent Portal → Parent Teacher Interview | Parent | 14.4 | |
| Madrasah Report (parent's own reports) | Reports → Madrasah Report (ParentEnrolled) | Parent | — | (b) Fold into 14.4 next to Report Archive |
| Class Announcements (view, like) | Parent Portal → Class Announcements; app home card | Parent, Student | 07.4, 14.1 | |
| Library (loans) and Recognition (awards), parent view | Parent Portal → Library / Recognition | Parent | — | (b) Fold into 14.3 (parent) and 14.5 (student) as one closing scene each |
| Enrol a child online | Madrasah / School → Signup for a Program; `/self-enrollment/...` | Parent | 06.2 | |
| Student Portal and student app pane (timetable, attendance, Hifz, classwork, marks) | Sidebar → Student Portal; `/mobile-home` (student) | Student | 14.5 | |
| Student: Library, Recognition, Holiday, Grade, Delegations, Class Announcements, Madrasah Report | Student Portal; Reports | Student | — | (b) Fold into 14.5 (tile tour line) |
| Student Payment, Teacher Payment | Student / Teacher Portal | — | — | (c) Commented out of the menu |

## Community / member

| Feature | Where | Who | Covered by | Note |
|---|---|---|---|---|
| Prayer Times page: Today / Tomorrow, Timing Changes, swipe between masjids, Auto (calculate from my location) | App home tile → Prayer Times (`/prayer-times`) | Member | 15.1 | |
| Prayer calculation settings (location, method, Asr rule, daylight saving, high-latitude rule, manual corrections) | Prayer Times → settings sheet (`/prayer-times?settings=1`) | Member | — | (b) Fold into 15.1 next to Auto |
| Monthly Prayer Times | Masjid → Monthly Prayer Times; Prayer Times → View Monthly Timings | Member | 15.1 | |
| Qiblah | App home tile (native compass page; web fallback `/quiblah`); Prayer Times → Locate Qiblah | Member | 15.1 | Native page on the app, see Mobile app only |
| Masjid Finder, follow, directions | Masjid → Masjid Finder; app home Search tile | Member | 15.2, 00.4 | |
| About Masjid, Staff List, Facility Details (member view) | Masjid menu | Member | — | (b) Fold into 15.2: after following, open the masjid's About / Staff / Facilities |
| Events: browse, filter, calendar, Going / Interested, bookmark, share | Events (`/events`, `eventcalendar`, `eventdetails`) | Member | 15.3 | |
| Donate to campaigns | Donation; website donate page | Member | 15.4 | |
| Quran reader: Mushaf, Reciter, Tajweed colours, Bookmarks, Dua Khatam-e-Quran | App home tile → Quran (`/quran`) | Member | 15.5 | |
| Quran: Arabic + translation view, Recite the translation (audio), Search, Playlist / Play all, Repeat each ayah, Playback speed, Keep reciting, Recite from memory (tap to reveal), theme, text size, Mushaf type, Share this ayah | `/quran` settings and ayah actions | Member | — | (a) New video 15.8, see Gaps |
| Tasbeeh counter and list | App home tile → Tasbeeh (`/tasbeeh`) | Member | 15.6 | |
| Manage Tasbeeh (make your own: category, target) | Tasbeeh → manage | Member | — | (b) Fold into 15.6 |
| Watch live streams | Live Streaming (`/livestreaming`) | Member | 15.6 | |
| Gallery, download forms | Masjid → Gallery / Forms | Member | 15.6 | |
| Become a volunteer, Volunteer Skills | Masjid → Volunteering; Profile → Volunteer Skills | Member | 15.7 | |

## Staff Attendance (masjid and madrasah)

Added as its own table because it serves both kinds of organisation.

| Feature | Where | Who | Covered by | Note |
|---|---|---|---|---|
| Staff Attendance switch, "Before switching on" checks, quick links, Overview | Org Management → Services; `/attendance/admin/overview` | Org Admin | 13.1 | |
| Zones (circle or polygon) | `/attendance/admin/zones` | Org Admin | 13.2 | |
| Staff, Shifts (templates, class routine term), Link staff | `/attendance/admin/staff`, `shifts` | Org Admin | 13.3, 16.2 | |
| Settings (pay period, grace band, breaks, holidays, payroll email, reasons, leave) | `/attendance/admin/settings` | Org Admin | 13.4 | |
| Documents for your staff (collection notice and the org's own policy) | Settings → documents; Services quick link | Org Admin | — | (b) Fold into 13.4 (or 13.1, where the quick link is) |
| Review (Approve, Adjust, Reject, Dismiss) | `/attendance/admin/queue` | Org Admin | 13.5 | |
| Periods: hours grid, Lock, CSV / PDF, versions, unlock within 15 days | `/attendance/admin/periods`, `periods/:period` | Org Admin | 13.6 | |
| Audit Trail | `/attendance/admin/audit` | Org Admin | — | (b) Fold into 13.6 (one scene: who changed what, after a lock) |
| Staff home: welcome notice, check in, breaks, check out, reason sheet, location | `/attendance`, `/attendance/welcome`; app home attendance card | Staff, Teacher | 13.7 | |
| Timesheet day view, Time off, Pay periods | `/attendance/timesheet`, `day/:date`, `time-off`, `pay-periods` | Staff, Teacher | 13.8 | |
| Correction (fix a day) sheet | Day view → correction sheet | Staff, Teacher | — | (b) Fold into 13.8. The `/attendance/day/:date/fix` route itself still shows "This screen is not available yet"; the sheet on the day view is the real flow |
| Legacy teacher-attendance register | Settings → legacy | — | — | (c) Left out on purpose |
| Clock-in card on the app home | `mobile/clockin-card` | — | — | (c) Unused placeholder, left out on purpose |

## Website

| Feature | Where | Who | Covered by | Note |
|---|---|---|---|---|
| Activate website, website address, custom domain | Website → Masjid / Madrasah Website (`/pfw/activate/:type`, `settings/:type`) | Org Admin | 09.1 | |
| Website home page for admins (quick actions, Browse website) | `/pfw/main/:type` | Org Admin | 09.1 | Not named in Covers, but it is the page 09.1 lands on |
| Banner, logo, colour theme, slides, social links, contact emails | `/pfw/settings/:type` | Org Admin | 09.2 | |
| Menu (internal page, service page or web address) | `/pfw/managemenu/:type` | Org Admin | 09.3 | |
| Organization linking (Link your Madrasah / Masjid, accept, unlink) | Website settings → Organization linking | Org Admin | 09.4 | |
| Enquiries | Website → Enquiries | Org Admin | 09.4 | |
| Website Analytics (visitors, search queries, CTR, position; combined or separate) | Website → … Website Analytics (`/pfw/statistics/:type`) | Org Admin | 09.5 | |
| Public website pages (home, news, events, gallery, facilities, monthly prayer times, donate, contact) | Public site | Everyone | 09.6 | Rendered outside the Angular app (`AdDin.PublicWebpages`); the pages were not checked one by one |

## Reports

| Feature | Where | Who | Covered by | Note |
|---|---|---|---|---|
| Masjid Report: Masjid Staff List, Masjid Prayer Times chart | Reports → Masjid Report | Masjid Admin | 12.5 | |
| Madrasah Report library: Hifz / Quranic assignments, attendance, progress, payment, class and section reports | Reports → Madrasah Report | Madrasah Admin, Teacher | 12.4 | |
| Madrasah Report library: library reports (circulation, due, all books), parent-teacher interview schedules, exam reports, people details (admin, teacher, parent, student by section, student home masjid) | Reports → Madrasah Report | Madrasah Admin, Teacher | — | (b) Fold into 12.4: one line that the library also holds these |
| Pinning reports | Madrasah Report | Madrasah Admin, Teacher | 12.4 | |
| Report Builder: Map New Report, Grades Mapping, Element Mapping, colours, signature | Reports → Report Builder | Madrasah Admin | 12.1 | |
| Report card: comments, digital signature, Marked as Ready | Report Builder → report card | Teacher, Madrasah Admin | 12.2 | AI Comment Generator: see Teacher |
| Custom Comments Library | Reports → Custom Comments Library | Teacher, Madrasah Admin | 12.2 | |
| Release date, Download All, Email Report, Report Archive | Report Builder; Reports → Report Archive | Madrasah Admin | 12.3 | |
| AutoSave Academic Reports switch | Org Management → Services | Madrasah Admin | 03.2 | |
| Dashboards: widgets, Quick Actions, Manage Dashboard Tiles | `/dashboard` | Org Admin, Teacher | 12.6 | |

## Messages

| Feature | Where | Who | Covered by | Note |
|---|---|---|---|---|
| Inbox: All, Unread, Read, Sent, Flagged, Archive; News | Message (`/message`) | Everyone | 07.1 | |
| Send new message: Sending as, Followers / Volunteers / Staff, title, link, image, attachments; Email, Push, Add as news | Message → new | Org Admin | 07.2 | |
| Madrasah audiences (All Parents, All Students, class or section, Include Students); parents messaging teachers | Message → new | Madrasah Admin, Teacher, Parent | 07.3 | |
| Class Announcements | Portals → Class Announcements | Teacher, Parent, Student | 07.4 | |
| Messages card on the app home (unread count, Open inbox, New message) | `/mobile-home` | Everyone | — | (b) Fold into 07.1 (one shot of the card as the way in on the app) |
| Receiving push notifications, in-app banner | App | Everyone | — | (a) New video 00.7, see Mobile app only |

## Mobile app only

The app is one WebView around the same Angular pages, so almost every feature above works on the phone too. These are the parts that exist only in the app, or behave differently there.

| Feature | Where | Who | Covered by | Note |
|---|---|---|---|---|
| App home by role: prayer hero, quick grid tiles (Masjid, Madrasah, Quran, Prayer Times, Messages, Events, Qiblah, Streaming, Donation, Tasbeeh, Search), Switch role, identity card (Tap to copy username) | `/mobile-home` (the app's landing page) | Everyone | 00.6 | Teacher, parent and student sections are in 10.1, 14.1–14.3 and 14.5 |
| Admin section of the app home ("Waiting on you": attendance not taken, Hifz pending, enrolment applications, Review / Nudge) | `/mobile-home` (admin) | Org Admin | 06.3 | 06.3 mentions "app alerts" for enrolments only. (b) Fold the full admin card into 12.6 |
| Pin quick actions (Edit quick actions, Pin, Search modules) | App home | Everyone | 10.1 | Admin and Teacher tabs of the app home only (checked on master). Shown in 10.1 and 00.6 |
| Native login treatment (Kaaba backdrop, 2×2 intents) | `/login` in the app | Everyone | 00.2 | |
| Native header (back arrow, menu) | App | Everyone | 00.6 | |
| Native Qiblah compass page | App home → Qiblah (`openNative("qiblah")` → MAUI `MasjidQiblaDirection`) | Member | 15.1 | |
| Native Premium page (App Store / Google Play) | Any Go Premium or Profile → Subscription in the app (`openNative("subscription")` → MAUI `PremiumPage`) | Everyone | 02.2 | |
| Permission reminder sheet ("Stay in the loop…", Turn on, Remind me later, Don't remind me again) | Bottom sheet a few seconds after opening the app; never on first launch, at most every 3 days | Everyone | — | (a) New video 00.7 |
| Preferences › This device (notification and location permission rows, Turn on) | Profile → Preferences, app only | Everyone | — | 00.5 names "notification settings" only. (a) New video 00.7 |
| Precise location sheet (approximate vs precise: Qiblah & prayer times, nearest masjid, staff attendance; Keep approximate) | Shown when the phone shares only approximate location (shell 2.0.52+) | Everyone | — | (a) New video 00.7 |
| Location access states (Allow location, Open settings, Turn on location, Choose a place instead) | Prayer Times, Qiblah, Masjid Finder in the app | Member | — | (b) Fold into 15.1 (one shot of the Allow location prompt); 00.7 covers the settings side |
| Push notifications: registration, banner while the app is open ("View"), tapping opens the right page | Shell (`PushNotificationBootstrap`) and web `push-banner` | Everyone | — | (a) New video 00.7 |
| OS share sheet (events, Quran ayah, class announcement photos) | Share buttons in the app | Member | 15.3 | Named only for events |
| Open in maps / system browser (directions, external links) | Masjid Finder, events | Member | 15.2 | |
| Staff Attendance precise location on check-in | `/attendance` in the app | Staff, Teacher | 13.7 | |
| Prayer-time alerts (Adhan notifications) | — | — | — | Not found: no local-notification code in the MAUI shell and no alert setting in the web app. Nothing to film |
| Native Quran, Prayer Times, Masjid Finder and admin prayer-time pages in the MAUI repo | MAUI projects `AdDin.Quran`, `AdDin.PrayerTimes`, `AdDin.MasjidFinder` | — | — | (c) Not reachable: the router keeps only qiblah, quran and subscription, and the web never calls `openNative("quran")` (Quran is the web `/quran` page now) |

## Global admin (internal Ad-Din staff only, out of audience)

| Feature | Where | Who | Covered by | Note |
|---|---|---|---|---|
| Dashboard (KPIs) | Global Admin → Dashboard (`/superadmin/superadmindashboard`) | Global Admin | — | (c) Internal |
| FAQ Manager | `/superadmin/faq` | Global Admin | — | (c) Internal |
| Email Templates | `/superadmin/emailTemplate` | Global Admin | — | (c) Internal |
| Notification Templates | `/superadmin/notificationTemplate` | Global Admin | — | (c) Internal |
| Report Management → Upload Report Frames | `/superadmin/reportmanagement` | Global Admin | — | (c) Internal |
| Common Templates (attendance templates) | `/superadmin/attendancetemplate` | Global Admin | — | (c) Internal |
| Manage Masjids (approve, edit, manage admins) | `/superadmin/masjid`, `masjid/admin/manage/:id` | Global Admin | — | (c) Internal; approval is the other side of 01.2 |
| Manage Madressahs (approve, manage admins) | `/superadmin/madressah`, `madressah/manageadmin` | Global Admin | — | (c) Internal |
| Manage Users (user view, bulk home organisation) | `/superadmin/userdetails`, `userview/:id` | Global Admin | — | (c) Internal |
| Claim Madressah (claim requests) | `/superadmin/claim` | Global Admin | — | (c) Internal; the other side of 01.3 |
| Manage Facilities | `/superadmin/facility` | Global Admin | — | (c) Internal |
| Terms & Conditions | `/superadmin/terms` | Global Admin | — | (c) Internal |
| Message (global message) | `/superadmin/globalmessage` | Global Admin | — | (c) Internal |
| Settings (Ad-Din settings, Share Ad-Din settings) | `/superadmin/addinsettings`, `shareaddin/settings` | Global Admin | — | (c) Internal |
| Export User Details | `/superadmin/exportUserDetails` | Global Admin | — | (c) Internal |
| AI Chat (models, logs) | `/superadmin/AI-Settings` | Global Admin | — | (c) Internal |
| Super admin reports (masjids, madrasahs, active users, subscribed users) | `/report/masjidreport/superadminmasjid` etc. | Global Admin | — | (c) Internal |

## Gaps

### Counts

- **Feature rows:** 217: 200 for the user-facing audience, plus 17 Global Admin.
- **Covered by a planned video:** 162 of the 200 audience rows. 1 of them is in Track 11 (on hold). 3 more are only partly named, so their video should add one line: parent read-only lists (14.1), the admin's app home (12.6), and quick-action pinning for non-teachers (00.6).
- **(a) New video needed:** 8 rows, which make 3 new videos.
- **(b) Fold into an existing video:** 20 rows.
- **(c) Leave out:** 10 audience rows (disabled, hidden, legacy, unreachable or left out on purpose), plus all 17 Global Admin rows. The leave-out list below also names 7 unused modules and routes that have no table row.
- The "Prayer-time alerts" row is a check that came back empty, not a feature, so it is in none of these counts.

### (a) Should get a new video

| Proposed id | Title | Track | Target | Platform / audience | Covers (one line) |
|---|---|---|---|---|---|
| 00.7 | Ad-Din on your phone: notifications and location | 00 Welcome to Ad-Din | 3:30 | App · Everyone | Permission reminder sheet (Turn on, Remind me later, Don't remind me again), Preferences › This device, precise vs approximate location sheet, push banner while the app is open ("View"), tapping a notification |
| 10.12 | Your class roster: student details and contacting parents | 10 Teaching day to day | 3:30 | Both · Teacher, Madrasah Admin | Class Section → class and section, student facts (age, program, medical, special note, emergency contact), Message a parent ("Sent through the Ad-Din app", AI rewrite, Undo), Call, the class's "messaging allowed" setting |
| 15.8 | Quran: translation, search, playlists and memorising | 15 For the community | 4:00 | App (works on web too) · Member, Student | Arabic + translation, Recite the translation where audio exists, Search, Playlist and Play all, Repeat each ayah, Playback speed, Keep reciting into the next surah, Recite from memory (tap a line to reveal), theme and text size, Share this ayah |

Each id is the next free number in its track. Playlists to update if these are added: 00.7 → every playlist; 10.12 → Teacher, Madrasah admin; 15.8 → Community member, Student.

### (b) Fold into an existing video

| Feature | Fold into |
|---|---|
| Rest of the help menu (Contact Us, Release Notes, FAQ, Privacy Policy, Terms of Service, Key Terms) | 00.6 |
| Pin quick actions for admins | 00.6 |
| Manage Skills on the masjid user list | 03.3 (pointer to 15.7) |
| Introduction & Services for madrasahs | 04.9 |
| Community Involvement Activity Records | 06.4 (or its own short video if 06.4 runs long) |
| Messages card on the app home | 07.1 |
| AI Comment Generator and the legacy comment bank toggle | 12.2 (name it in Covers) |
| Extra report families (library, interview, exam, people details) | 12.4 |
| Admin section of the app home ("Waiting on you") | 12.6 |
| Documents for your staff | 13.4 (or 13.1) |
| Audit Trail | 13.6 |
| Correction sheet on the day view | 13.8 |
| Parent web dashboard and Parent/Guardian Portal tiles | 14.1 |
| Parent read-only lists (Class, Subject, Holiday, Grade, Delegations) | 14.1 |
| Parent Exams / Exam Marks | 14.3 |
| Parent Library and Recognition | 14.3 |
| Parent's Madrasah Report | 14.4 |
| Student Library, Recognition, Holiday, Grade, Delegations, Class Announcements, Madrasah Report | 14.5 |
| Prayer calculation settings sheet | 15.1 |
| Location access prompt on Prayer Times / Qiblah | 15.1 |
| About Masjid, Staff List, Facility Details (member view) | 15.2 |
| Manage Tasbeeh | 15.6 |
| Teacher's Migration list | 16.1 (and add 16.1 to the Teacher playlist, or drop the teacher view) |

This table lists the 20 (b) rows plus the 3 partly covered rows: pin quick actions, the admin's app home, and the parent read-only lists. Two covered rows would also be clearer with one more word in Covers: the website home page (09.1) and the share sheet beyond events (15.3).

### (c) Leave out

| Feature | Reason |
|---|---|
| Carpool | Disabled: route and menu commented out (series.yaml) |
| Social login | No buttons; the `account` module with Social settings is not mounted (series.yaml) |
| Ideas | `/ideas` is mounted but has no menu entry; app feedback (series.yaml) |
| Clock-in card on the app home | Unused placeholder (series.yaml) |
| Legacy teacher-attendance register | Old feature, replaced by Staff Attendance (series.yaml) |
| Alumni page, Alumni Verdict | Hidden in the menu until the module is redone |
| Program rules | No link reaches the route |
| Menu Control tab | Commented out of the tab list |
| Student / Teacher Payment tiles | Commented out of the menu |
| `/subscription-legacy` | Duplicate of the v2 subscription pages |
| Old add-masjid flow (`/masjid/finder`, `instructions`, `addboth`) | Legacy; replaced by 01.1's flow |
| Welcome module (`modules/welcome`) | Not mounted in any route |
| Legacy dashboard (`modules/dashboard`) | Routes use `dashboardv2`; the legacy components are not rendered |
| `/home` (modules.v2/home) | Route exists but nothing I could find links to it; superseded by `/mobile-home` and `/dashboard`. Not verified in a running app |
| `/test-download` | Internal test page |
| Native-only Quran, Prayer Times and Masjid Finder pages in the MAUI repo | Not reachable from the shell |
| Global Admin (all rows) | Internal Ad-Din staff only |

### Planned Covers items checked against the code

Every Covers item in the 101 scripts was searched for in the code by its label or a close variant. All were found, with these notes:

- **02.1 "the 30-day grace period":** not shown anywhere in the web UI. It exists only on the server (`OrganizationSubscription/.../SubscriptionKpiRepository.cs`: "30-day grace on subscriptions, PFW and custom sender"; 15 days for premium display). The video has to state it in narration; nothing on screen shows it.
- **02.2 "Premium Monthly $0.99 or Yearly $9.99":** the app shows **0.99 CAD / 9.99 CAD** (and C$ on the organisation page). Fix the currency in the script.
- **00.2 "email verification isn't needed to log in":** behaviour, not a label. Not verified in the code (it would need the login API traced).
- **06.1 "QR code", 08.4 "hide progress, pin to top", 02.6 "billing address", 05.1 "Subject for report":** found under slightly different labels: "Hide donation progress", "Pin card to top", "Please provide your billing details.", key `subject_for_report`.
- **09.6 "What visitors see":** the public site is rendered by `AdDin.PublicWebpages`, outside the Angular app. Its pages were not checked one by one.
- **Track 11 (11.1–11.4):** labels exist (Discount Rule, Student Specific Exception, Mark as Unpaid, Aged Receivable), but the track is on hold on purpose.

### Mobile-specific things missing from the plan

1. No video covers the app's own permissions: the permission reminder sheet, Preferences › This device, and the precise-location sheet (all only in the app; precise location needs shell 2.0.52+). → 00.7.
2. No video shows receiving a push notification: the banner while the app is open, and tapping a notification to open the right page. 07.2 only shows *sending* with Push ticked. → 00.7.
3. The admin's app home ("Waiting on you" with Review / Nudge) is not in any Covers beyond "app alerts" in 06.3. → fold into 12.6.
4. The Quran reader's app-centred features beyond the basics (translation audio, playlist, memorise mode, share an ayah) are not planned. → 15.8.
5. Prayer-time (Adhan) alerts do not exist in the app, so nothing is missing there. Say so if anyone asks for an "alerts" video.

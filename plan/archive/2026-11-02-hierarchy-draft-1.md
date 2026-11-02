# Ad-Din Tutorial Video Series — Hierarchy & Classification

Draft 1 · 2026-11-02 · built from the code on `Ad-Din Web-master` (Angular routes, `services/menu.data.ts` sidebar, `en.json` labels, backend modules). Scripts come next, one per video.

## 1. Rules every video follows

1. **Self-contained.** Each video opens with a 5-second "You'll need" card (role, plan, what must already be set up) and never says "as we saw in the last video". Prerequisites are listed as video IDs so viewers can jump back, but the video still works on its own.
2. **≤ 5:00.** Target 3–5 min. Anything that doesn't fit is split into Part 1 / Part 2, each still self-contained.
3. **One job per video.** The title is the task ("Add a class section"), not the screen name.
4. **Same demo world everywhere.** One seeded demo masjid + madrasah (e.g. "Masjid An-Noor" / "An-Noor Academy") with fixed demo users, so screens look consistent across all videos and can be re-recorded.
5. **Real UI strings only.** Every on-screen label in a script is copied from the templates / `en.json` (same rule as the staff-attendance scripts and `kb-article` skill).
6. **Structure:** Hook (what you'll be able to do, 10 s) → You'll need (5 s) → Steps (numbered chapters) → Recap (10 s) → "Related videos" end card.

## 2. Classification tags (on every video)

| Tag | Values |
|---|---|
| **Audience** | `Everyone` · `Org Admin` · `Masjid Admin` · `Madrasah Admin` · `Teacher` · `Staff` · `Parent` · `Student` · `Member` (community / app user) |
| **Stage** | `Start` (account & org) · `Setup` (one-time config) · `Daily` (routine use) · `Periodic` (term / pay period / year end) |
| **Plan needed** | `Free` · `Premium` (user's own Ad-Din Premium or an allocated org seat) · `Add-on: Website` · `Add-on: Prayer Times Premium` · `Add-on: Custom Sender` |
| **Switch needed** | Services-tab toggle that must be on: `Academic Activity` · `Class Announcements` · `Payment Module` · `Exam Marks` · `Staff Attendance` · `Donation Page` · `Family Subscription sharing` |
| **Platform** | `Web` · `App` · `Both` |
| **Level** | `Beginner` · `Intermediate` · `Advanced` |

## 3. Hierarchy

Series → **Part** (journey phase) → **Track** (topic) → **Video**. Numbering follows the journey the user asked for: sign up → subscribe → set up → use.

### PART A — START HERE

#### Track 00 · Welcome to Ad-Din  *(Everyone · Start · Free · Both · Beginner)*
| ID | Video | Covers | Time | Prereq |
|---|---|---|---|---|
| 00.1 | What Ad-Din does for your community | Masjid vs Madrasah side, portals (Admin / Teacher / Parent / Student), web + app, free vs Premium | 3:00 | — |
| 00.2 | Create your Ad-Din account | `/signup`: Username rules, Email, password rules (10+ chars, upper/lower/number/symbol), Terms box, "What brings you here?" cards; email verification is not required to log in | 4:00 | — |
| 00.3 | Log in and reset a forgotten password | Login, "Forgot Password ?", email link, Reset Password page | 2:30 | 00.2 |
| 00.4 | Choose your home masjid and madrasah | `/finder`: search by name/address or Organization ID, map pins, "Continue to Madrasah", "Skip for now", follow orgs, `/finish` "signing up as a Parent / Guardian" | 4:30 | 00.2 |
| 00.5 | Your profile, notifications and GUID | Personal info, Home & Followed Orgs (change home org), Preferences (email/push, change password/email, Verify, Delete Account), where your **GUID** is and why admins need it | 4:00 | 00.2 |
| 00.6 | Finding your way around | Sidebar sections, portal tiles, dashboard, topbar help menu (Knowledge Base, Training Courses), the app's mobile home | 4:00 | 00.4 |

### PART B — REGISTER & SUBSCRIBE

#### Track 01 · Register your organisation  *(Org Admin · Start · Free · Web)*
| ID | Video | Covers | Time | Prereq |
|---|---|---|---|---|
| 01.1 | Register a masjid, madrasah, or both | "Authorized Representatives Only" → type (Masjid / Madrasah / Masjid & Madrasah) → Terms → Add form (name, address, ties, location picker, contact) → "Both" extra fields → Confirm → Thank You / Home org | 5:00 | 00.2 |
| 01.2 | After you register: approval and what you can do meanwhile | You're Admin immediately; "Pending Approval" sidebar note; org appears on map only after approval; contacting support | 2:30 | 01.1 |
| 01.3 | Claim admin of a masjid that's already listed | Masjid Finder → follow → "Claim Admin Role", description + documents | 3:00 | 00.4 |

#### Track 02 · Subscriptions & billing  *(Org Admin / Everyone · Start · Web+App)*
| ID | Video | Covers | Time | Prereq |
|---|---|---|---|---|
| 02.1 | How Ad-Din plans work | Free vs Premium list; personal Premium vs organisation seats; add-on services; 30-day grace; global picture of what each unlocks | 3:30 | — |
| 02.2 | Get Ad-Din Premium for yourself | Profile → Subscription: Free / Premium Monthly $0.99 / Yearly $9.99, Subscribe (Stripe), Change Plan, Cancel, store-managed subscriptions, in-app purchase | 4:00 | 00.2 |
| 02.3 | Buy seats for your organisation | Admin Portal → Subscription Management → View plan → Subscriptions tab, Manage Subscription Quantity, "X of Y used" | 4:00 | 01.1 |
| 02.4 | Give seats to your parents, teachers and staff | Profile "Subscription detail" → Allocate Subscription; Family Subscription sharing toggle; who needs a seat (parent/teacher portals, approving enrolments) | 4:30 | 02.3 |
| 02.5 | Add-on services: website, custom sender email, Prayer Times Premium | Services tab: Subscribe Now, 15-day Prayer Times trial, Cancel / Reactivate, renew dates; Custom Sender (From Name / Email / Reply-To) | 4:30 | 02.3 |
| 02.6 | Billing, cards and invoices | Billing tab: balance, Change billing settings (card vs invoice, country/state/postal), View invoices / upcoming, "You have unpaid invoices / Pay now" | 4:00 | 02.3 |

### PART C — SET UP YOUR ORGANISATION

#### Track 03 · Organisation settings & people  *(Org Admin · Setup · Web)*
| ID | Video | Covers | Time | Prereq |
|---|---|---|---|---|
| 03.1 | Your organisation's details, logo and time zone | Organization Management → Details tab (masjid: logo, address, time zone, contact; madrasah: 3 logos, currency, board, linked masjid) | 4:00 | 01.1 |
| 03.2 | Turn features on and off (Services tab) | Every toggle and what it unlocks; Integrations tab (PayPal keys) | 4:30 | 03.1 |
| 03.3 | Add admins, staff and volunteers to a masjid | User Management → masjid → Manage Administrators / Staff / Volunteer; fetch by GUID vs Add New | 4:00 | 00.5, 02.3 |
| 03.4 | Add admins and teachers to a madrasah | Add New User → Admin / Teacher; profile pages; Access Rights card; deactivate / re-activate | 4:30 | 00.5, 02.3 |
| 03.5 | Import and export users in bulk | Import / Export (editable vs complete), Export User Data | 4:00 | 03.4 |

#### Track 04 · Masjid setup  *(Masjid Admin · Setup · Web)*
| ID | Video | Covers | Time | Prereq | Plan |
|---|---|---|---|---|---|
| 04.1 | Set up prayer time calculations | Calculation Method, Adhan Times offsets, Islamic Date | 4:00 | 01.1 | Free |
| 04.2 | Set iqamah and jumu'ah times | Batch Update (date range, Fridays-only), View Prayer Times | 4:30 | 04.1 | Free |
| 04.3 | Import and export a prayer timetable | Manual Update Import/Export | 3:00 | 04.1 | Free |
| 04.4 | Put prayer times on a TV (basic displays) | Basic Display small/medium/large URLs, Basic Announcements | 3:30 | 04.2 | Free |
| 04.5 | Premium displays, part 1: choose and lay out | Vertical/Horizontal presets, Layout, Salah Control, Date & Time, Iqamaah Countdown & Poster, Display During Salah | 5:00 | 04.4 | Add-on: PT Premium |
| 04.6 | Premium displays, part 2: content and extras | Contents, Ticker Message, Contents & Events, Night Mode, Makrooh Times, Taraweeh Poster, Alternate Language, Colour Controls | 5:00 | 04.5 | Add-on: PT Premium |
| 04.7 | About, staff list and facilities | About Masjid edit, Staff List, Facility Details quantities/capacity | 4:00 | 03.1 | Free |
| 04.8 | Gallery and downloadable forms | Gallery albums/images/videos; Forms (2 MB, PDF/Word/Excel/image) | 4:00 | 03.1 | Free |
| 04.9 | Introduction & Services pages | `/pages`: Add New, Save as Draft, Publish, link to website menu | 4:00 | 03.1 | Free |
| 04.10 | Live streaming | Manage Streaming: Video / Audio / Facebook embed slots | 3:00 | 03.1 | Free |

#### Track 05 · Madrasah academic setup  *(Madrasah Admin · Setup · Web)* — order matters, follow 05.1 → 05.8
| ID | Video | Covers | Time | Prereq | Plan |
|---|---|---|---|---|---|
| 05.1 | Report signatures, learning skills and report subjects | Manage Madrasah advanced: principal/VP/council signatures, Learning Skill, Subject for report | 4:00 | 03.1 | Premium |
| 05.2 | Create academic terms and grade sets | Terms Management (Add Term, enable), Grade sets | 4:00 | 02.3 | Premium |
| 05.3 | Create classes | Add Class: homeroom teacher, compulsory, "Open for enrollment", program page | 4:30 | 05.2 | Premium |
| 05.4 | Create class sections | Sections, Active / Inactive / Alumni | 3:30 | 05.3 | Premium |
| 05.5 | Add subjects | Subject + teacher, Evaluation Grade Set, Discipline, Group, Strands, Course Code/Credit | 4:00 | 05.4, 03.4 | Premium |
| 05.6 | Build the class routine (timetable) | Schedule Builder: Setup → Period Structure → Assign Subjects → Review & Save, clash check, breaks, Notify parents & students | 5:00 | 05.5 | Premium |
| 05.7 | Holidays and substitute teachers | Holiday; Delegations (Subject-wise vs Class attendance) | 4:00 | 05.6 | Premium |
| 05.8 | Your public program pages | Program Details and Subjects, Staff List, Program Timetables (what parents see) | 3:30 | 05.6 | Premium |

#### Track 06 · Enrolment & students  *(Madrasah Admin / Parent · Setup · Web+App)*
| ID | Video | Covers | Time | Prereq |
|---|---|---|---|---|
| 06.1 | Prepare online enrolment | Enrollment Settings: Share Enrolment Link + QR, Required Documents, Declaration & Agreement, FAQs, Custom Fields; class "Open for enrollment" | 5:00 | 05.3 |
| 06.2 | *(Parent)* Enrol your child online | Enrol link → sign up → Select Program → Parent/Guardian Details → Child Details → Review and Submit; "Same for entire family" | 5:00 | 06.1 (admin side) |
| 06.3 | Approve or decline enrolment applications | `/settings/approve`, pick section, decline with reason, Reconsider, "Subscription required to enroll", dashboard widget & app "Waiting on you" | 4:30 | 06.1, 02.4 |
| 06.4 | Add students and parents yourself | Add New User → Student / Parent, Manage Class, Link Parent, Link Childs, Siblings, MRC | 5:00 | 05.4 |
| 06.5 | Move students between sections | Class Section → Add students / Move students | 3:00 | 06.4 |

### PART D — USE IT EVERY DAY

#### Track 07 · Messages & announcements  *(Everyone / Admin · Daily · Both)*
| ID | Video | Covers | Time | Prereq | Switch |
|---|---|---|---|---|---|
| 07.1 | Your message inbox | All / Unread / Read / Sent / Flagged / Archive, News tab | 3:00 | 00.4 | — |
| 07.2 | Send a message to your community | Send new message: org, Sending as, Followers / Volunteers / Staff, title/link/image/attachments, Email / Push / Add as news | 5:00 | 03.3 | — |
| 07.3 | Message parents, classes and teachers | All Parents / All Students / class or section, Include Students; parent → teacher messaging | 4:00 | 06.4 | — |
| 07.4 | Class announcements | Teacher posts photo/note stories; parents react (web + app) | 3:30 | 06.4 | Class Announcements |

#### Track 08 · Events & donations  *(Masjid Admin / Member · Daily · Both)*
| ID | Video | Covers | Time | Prereq | Plan / Switch |
|---|---|---|---|---|---|
| 08.1 | Create an event | Public/private, invitees, categories, venue, Ticket URL, images for web/app | 5:00 | 03.1 | Premium |
| 08.2 | Repeating events and events on the masjid TV | Repeat rules, delete one vs series, "Display This Event On Prayer Times Large TV" | 4:00 | 08.1 | Premium |
| 08.3 | Set up donations | Donation Page toggle, Payment gateway Settings (PayPal) | 3:30 | 03.2 | Premium + Donation Page |
| 08.4 | Run a fundraising campaign | Campaign: goal, media, Hide progress, Pin to top, Hosted Button ID | 4:30 | 08.3 | Premium + Donation Page |
| 08.5 | Track donations and record offline gifts | Transactions, Add Transaction, export | 3:30 | 08.4 | Premium + Donation Page |

#### Track 09 · Your public website  *(Org Admin · Setup · Web)* — needs Add-on: Website
| ID | Video | Covers | Time | Prereq |
|---|---|---|---|---|
| 09.1 | Turn on your website | Activate website, website address, custom domain | 4:00 | 02.5 |
| 09.2 | Brand your website | Banner, logo, colour theme, slide carousel, social links, contact emails | 5:00 | 09.1 |
| 09.3 | Build your website menu | Internal page / service page / web address, Introduction & Services pages | 4:00 | 09.1, 04.9 |
| 09.4 | Link masjid and madrasah websites; answer enquiries | Link your Madrasah (approval, unlink), Enquiries | 4:00 | 09.1 |
| 09.5 | Website analytics | Statistics (Search Console), combined vs separate analytics | 3:00 | 09.1 |
| 09.6 | What visitors see | Home, news, events, gallery, facilities, monthly prayer times, donate, contact | 3:00 | 09.2 |

#### Track 10 · Teaching day to day  *(Teacher / Madrasah Admin · Daily · Both)*
| ID | Video | Covers | Time | Prereq | Switch |
|---|---|---|---|---|---|
| 10.1 | The teacher portal and teacher app home | Portal tiles, "Needs your attention", routine, quick actions | 4:00 | 05.6 | — |
| 10.2 | Take class attendance | Present / Absent / Late (time) / Sick / Early Pickup / Not Marked; subject attendance | 4:00 | 06.4 | — |
| 10.3 | Set up Hifz assignments | Hifz Quran Assignment Mapping: Sabaq, Sabaq Para, Dour, Test Para; Standard / by Ayah / by Juz; end date | 5:00 | 05.5, 05.1 | — |
| 10.4 | Record daily Hifz progress | Teacher grading: portion, mistakes, result | 4:00 | 10.3 | — |
| 10.5 | Set up academic activities | Category Management, Terms, create activities | 4:00 | 05.2 | Academic Activity |
| 10.6 | Enter activity scores | Activity Score Management, view a student, message a student | 4:00 | 10.5 | Academic Activity |
| 10.7 | Import activities and marks from Excel | "Get the sheet" / "Download the marks sheet", upload, row-by-row checks | 5:00 | 10.5 | Academic Activity |
| 10.8 | Parent–teacher interviews | Manage interviews, slots, reminders, bookings | 4:00 | 06.4 | — |
| 10.9 | Library | Circulation, acquisition, categories, locations | 4:30 | 06.4 | — |
| 10.10 | Recognition awards | Student and staff awards | 3:00 | 06.4 | — |
| 10.11 | Exams and marks *(older feature)* | Exams, Manage Marks single/bulk | 4:30 | 05.5 | Exam Marks |

#### Track 11 · Fees & payments  *(Madrasah Admin · Setup + Daily · Web)* — Switch: Payment Module
| ID | Video | Covers | Time | Prereq |
|---|---|---|---|---|
| 11.1 | Set up fee types | Payment Type: one-time / weekly / monthly / yearly, class-wise vs organisation-wise, due date, payment window | 5:00 | 05.3 |
| 11.2 | Sibling discounts and exceptions | Discount Rule, conditions, Student Specific Exception | 4:00 | 11.1 |
| 11.3 | Invoices, payments and receipts | Invoice grid, record payment by method, Receipt, Payment History, Mark as Unpaid, Cancel, credit balance, Export | 5:00 | 11.1 |
| 11.4 | Fee reports | Accounts Receivable, Aged Receivable, Fees Due; Fee Payment KPIs widget | 3:00 | 11.3 |

#### Track 12 · Report cards & reports  *(Madrasah Admin / Teacher · Periodic · Web)*
| ID | Video | Covers | Time | Prereq |
|---|---|---|---|---|
| 12.1 | Map a report card template | Report Builder → Map New Report per class, Grades Mapping, Element Mapping, colours, signature | 5:00 | 05.1, 05.5 |
| 12.2 | Write comments and mark reports ready | Comments, Custom Comments Library, Marked as Ready | 4:00 | 12.1 |
| 12.3 | Release report cards to parents | Release date, Download / Download All, Email Report + push notify, Report Archive | 4:00 | 12.2 |
| 12.4 | Madrasah reports library | Hifz, Attendance, Progress, Payment, Class/Section/Student, pin reports | 4:00 | 06.4 |
| 12.5 | Masjid reports | Masjid Staff List, Masjid Prayer Times Chart | 2:30 | 04.2 |
| 12.6 | Dashboards for admins and teachers | Widgets, Quick Actions, Manage Dashboard Tiles, Pending Enrollments | 4:00 | 00.6 |

#### Track 13 · Staff Attendance  *(Org Admin / Staff · Setup + Daily + Periodic · Both)* — Switch: Staff Attendance
*Re-cut of the two existing 5:30 walkthroughs into ≤5-min pieces; reuse the `staff-attendance-launch` harness.*
| ID | Video | Covers | Time | Prereq |
|---|---|---|---|---|
| 13.1 | Switch on Staff Attendance | Services toggle, "Before switching on" checks, quick links, Overview cards | 4:00 | 03.1 |
| 13.2 | Draw work zones | Circle (≥100 m) / polygon, zones annotate never gate | 3:30 | 13.1 |
| 13.3 | Set up staff and shifts | Staff page (type, zone, tracking mode, Ready), shift templates, terms, Link staff, class-routine shifts | 5:00 | 13.2, 05.6 |
| 13.4 | Attendance settings and leave | Pay period, grace band, breaks, holidays, payroll recipient, reason lists, leave categories | 5:00 | 13.1 |
| 13.5 | Review the days that need a decision | Review queue types, Approve / Adjust / Reject / Dismiss | 5:00 | 13.3 |
| 13.6 | Lock a pay period and send payroll | Periods grid, edit hours, Lock, CSV + PDF to payroll, versions, 15-day unlock | 4:00 | 13.5 |
| 13.7 | *(Staff)* Check in, breaks and check out | Welcome notice, location dot, reason sheet, "Needs your attention" | 4:00 | 13.3 |
| 13.8 | *(Staff)* Timesheet, time off and pay periods | Day view, Request time off, pay periods | 3:30 | 13.7 |

#### Track 14 · For parents and students  *(Parent / Student · Daily · App-first)*
| ID | Video | Covers | Time | Prereq |
|---|---|---|---|---|
| 14.1 | Your parent home in the app | Child panes, My Routine, announcements, Enroll Now / Pending Approval | 4:00 | 06.2 |
| 14.2 | Check attendance and report an absence | Today / by subject / term donut, Attendance excuse (pre-approved absence) | 3:30 | 14.1 |
| 14.3 | Follow Hifz progress and classwork | Hifz progress card, My Classwork, academic scores | 4:00 | 14.1 |
| 14.4 | Fees, report cards and interview bookings | Invoice History, Report Archive, book a parent–teacher interview | 4:30 | 14.1 |
| 14.5 | The student portal | Student view of routine, attendance, Hifz, classwork, exam marks | 3:30 | 06.4 |

#### Track 15 · For the community  *(Member · Daily · App-first · Free)*
| ID | Video | Covers | Time | Prereq |
|---|---|---|---|---|
| 15.1 | Prayer times, monthly timetable and Qiblah | `/prayer-times` today/tomorrow, Timing Changes, Monthly, Auto location, Qiblah | 4:00 | — |
| 15.2 | Find and follow masjids | Masjid Finder map, follow, directions | 3:00 | 00.2 |
| 15.3 | Events: going, interested, calendar | Browse, filter, calendar, Going / Interested, bookmark, share | 3:00 | 00.4 |
| 15.4 | Donate to your masjid | Campaigns in app and website | 3:00 | 00.4 |
| 15.5 | Read and listen to the Quran | Mushaf, reciters, tajweed colours, bookmarks, Dua Khatam | 5:00 | 00.2 |
| 15.6 | Tasbeeh, live streams, gallery and forms | Tasbeeh counter, watch streams, gallery, download forms | 4:00 | 00.4 |
| 15.7 | Become a volunteer | Become a volunteer, add skills | 2:30 | 00.5 |

### PART E — END OF TERM & YEAR

#### Track 16 · Year end  *(Madrasah Admin · Periodic · Web)*
| ID | Video | Covers | Time | Prereq |
|---|---|---|---|---|
| 16.1 | Promote students to the next year | Migration | 4:00 | 06.4 |
| 16.2 | Start a new term | New term, Duplicate Class Routines, routine term for Staff Attendance, alumni | 4:00 | 05.6 |

## 4. Totals

5 parts · 17 tracks · **101 videos** · ~6 h 45 min total (404 min), average 4:00, longest 5:00.

## 5. Learning paths (role playlists, cutting across tracks)

| Path | Videos |
|---|---|
| **Masjid admin** | 00.1–00.6 → 01.1–01.3 → 02.1, 02.3, 02.5, 02.6 → 03.1–03.3 → 04.1–04.10 → 07.1–07.2 → 08.1–08.5 → 09.1–09.6 → 12.5–12.6 → 13.1–13.6 |
| **Madrasah admin** | 00.1–00.6 → 01.1–01.2 → 02.1–02.6 → 03.1–03.2, 03.4–03.5 → 05.1–05.8 → 06.1, 06.3–06.5 → 07.2–07.4 → 10.3, 10.5, 10.7 → 11.1–11.4 → 12.1–12.4, 12.6 → 13.1–13.6 → 16.1–16.2 |
| **Teacher** | 00.2–00.6 → 07.1, 07.3–07.4 → 10.1–10.11 → 12.2 → 13.7–13.8 |
| **Staff (non-teaching)** | 00.2, 00.5 → 07.1 → 13.7–13.8 |
| **Parent** | 00.2–00.5 → 02.2 → 06.2 → 07.1 → 14.1–14.4 → 15.1–15.4 |
| **Student** | 00.2–00.4 → 14.5 → 07.1 → 15.1, 15.5 |
| **Community member** | 00.2–00.5 → 15.1–15.7 → 07.1 |

## 6. Production notes

- **Demo data:** seed one masjid + madrasah with terms, classes, sections, subjects, routine, ~20 students/parents, Hifz mappings, activities, invoices, events, campaigns, and a staff-attendance pay period with review items. Record off the same seed so re-takes match.
- **Capture:** reuse the `C:\Fantacode\staff-attendance-launch\video` harness (real-UI capture + Edge neural TTS + SRT). App-first videos (Tracks 14–15, 13.7–13.8) are recorded at phone size in the `/mobile-home` webview layout.
- **Script format:** same as the staff-attendance scripts — timestamped narration lines grouped under numbered chapters, plus on-screen action cues.

## 7. Check these before recording

1. **Staff Attendance live status.** `docs/staff-attendance/HANDOVER.md` (2026-10-03) says the pilot had not run in UAT/prod — confirm it's released before Track 13 goes public.
2. **Org subscription guard** (`organizationSubscriptionGuard`) checks the *user's* Premium, not the org's — the "who needs a seat" message in 02.4 depends on what's intended.
3. **First-time org billing setup** — how a brand-new org gets its billing customer record isn't clear from the client; walk it on dev before scripting 02.3.
4. **People are added by GUID, not invite** — 03.3/03.4 must teach the GUID hand-off (00.5).
5. **Signup Terms / Privacy links are `href="#"`** — fix or avoid zooming on them in 00.2.
6. **Exam Marks** is the older feature (off by default; Services tab recommends Academic Activity) — keep 10.11 or drop it?
7. **Left out on purpose:** Carpool (route disabled), Ideas (app feedback, not a feature), social login (no buttons), unused `clockin-card` placeholder, legacy teacher-attendance register.
8. **No online fee payment for parents** today (PayPal keys exist, no pay button) — 14.4 shows invoice history only.

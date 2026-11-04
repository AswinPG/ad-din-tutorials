# The demo world

Every video is recorded in the same fictional community, so the series looks consistent and any video can be re-recorded at any time. The world is **mocked**: the real Ad-Din web app (built from `origin/master`) runs in a headless browser, and every API call it makes is answered by `engine/demo/world.mjs`. No dev or production server is called, and nothing is written anywhere.

All names, addresses, emails and numbers are made up: phone numbers use 555, emails use `example.com`, and the map position is a quiet residential spot, not a real building.

## Organisations

| | Masjid | Madrasah |
|---|---|---|
| Name | **Maple Grove Masjid** | **Maple Grove Madrasah** |
| ID | 101 | 201 |
| Address | 100 Maple Grove Way, Toronto, ON M0M 0A0 | same building |
| Phone / email | 416-555-0100 · office@maplegrove.example.com | same |
| Switches | Approved; Family plan | Approved; Academic Activity and Class Announcements on; Exams and Payment off; Staff Attendance off |

Linked to each other. Two more fictional organisations show up in onboarding search results: Cedar Hill Masjid / Cedar Hill Islamic School and Riverbend Islamic Centre / Riverbend Quran Academy.

## People

| Who | Username | Notes |
|---|---|---|
| **Yusuf Rahman** (the demo account) | `yusuf_rahman` · yusuf.rahman@example.com | Ad-Din Premium. Masjid Admin of the masjid; Admin, Teacher, Parent and Student roles at the madrasah, so Prayer Times, Donation and all four portals show. Home masjid and madrasah are Maple Grove. |
| Maryam Rahman | (`maryam_rahman` in the reset-email card) | Yusuf's enrolled child; has a published Term 1 report card |
| Aisha Rahman | | Yusuf's spouse (profile data only) |
| Bilal Hussain, Fatima Siddiqui, Omar Khalid | | Teachers |
| Zaid Karim, Hana Mirza, Ibrahim Nasser, Layla Haddad, Yahya Saleh | | Students, with parents Samir Karim, Noor Mirza, Adam Nasser, Rania Haddad, Tariq Saleh |

Demo passwords live in the video's `record.mjs` (from its script's Demo data) and are only ever typed into the mocked app.

## Data

- **Today** is Tuesday 10 November 2026, 10:00 in Toronto (the browser clock is fixed per recording).
- **Prayer times**: Toronto times for early November (Fajr 6:15, Dhuhr 1:00, Asr 3:15, Maghrib 5:05, Isha 7:30 Iqamah; Jumah 1:30 and 2:30). Prayer Times → View Prayer Times lists any range.
- **Events**: Family Quran Night (Fri 13 Nov, 6:30 pm) and Youth Open House (Sat 21 Nov, 2 pm).
- **Messages**: "Community iftar this Friday" (masjid) and "Report cards are ready" (madrasah), both unread.
- **Dashboard**: 48 students (23 boys, 25 girls), 7 staff, 3 admins, 6 classes, 12 alumni; today's attendance 6 of 8 sections done. Tiles shown: totals, Quick Actions, Attendance.
- **Classes** (non-academic): Hifz Class A and Hifz Class B (Morning and Evening sections), Weekend Quran (Level 1 and Level 2).
- **Quran Hifz mappings**: Sabaq, Sabaq Para, Dour and Test Para across the three classes, daily from September.
- **Reports Archive**: one Hifz Progress Report (Term 1, school year 2027) per student, all delivered to parents.

## Server pages and mail

- The **Reset Password** and **Success** pages are AdDin.Web Razor pages, not Angular. `engine/demo/razor.mjs` renders them from their `origin/master` source (`src/AdDin.Web/Pages/Public/`), with the real stylesheet and script; only the code check and the password save are mocked. Valid demo codes are set by the video.
- The reset **email** body follows the format `UserRepository.ForgotPasswordRequest` builds (Username, Organization Roles, Password reset link). The email template around it lives in the database, so it is not reproduced; `engine/demo/inbox.mjs` shows the body in a plain, unbranded inbox.

## Adding to the world

Add routes to `createWorld()` in `world.mjs`, keyed by method and path, returning the response shape and status code the Angular service checks for (read the service and the component on `origin/master`). A video can add or override routes, and set state, through `world()` in its `record.mjs`. After each recording, `out/<id>/record.log` lists any API call the world did not answer.

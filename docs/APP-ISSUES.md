# App issues found while scripting

Found in Ad-Din `origin/master` (d36d69ed8) by the script writers and validators, 2026-11-03. Read from code only; nothing was run. Items marked **(video)** change what a tutorial can show, and also appear as flags or decisions in `series.yaml`.

## Breaks a flow

| Where | Issue | Videos |
|---|---|---|
| Masjid → Integrations | `editMasjid.component.html` passes `[orgId]="madressahId"`; masjid PayPal keys never load or save | 03.2, 08.3, 08.5 **(video)** |
| Add-on reactivation | `StripeServiceSubscriptionProvider.cs` reads `madressah.MadressahID`, empty for a masjid, so reactivating any add-on fails for masjids; `EndTrialNow = true` ends a Prayer Times Premium trial on reactivation | 02.5 **(video)** |
| Masjid Details Save | `submitForm` fails silently when Phone 01, an address field or the map point is missing (Phone 01 has no star) | 03.1 **(video)** |
| Large horizontal display | `LargeDisplayHorizontal.cshtml` `generateEventSlides` uses `masjidEvents[i]` for madrasah slides: throws or shows wrong timings | 04.4 |
| Push notification tap | Message pushes carry no route and the shell's `OnNotificationOpened` ignores `action: "message"`, so tapping doesn't open the inbox | 00.7 **(video)** |
| Add students (backend) | `ClassController` EnrollStudents checks only the first selected student's family seat | 06.5 |
| Website banner editor | `initialize()` calls `deleteCarousel(currentEditingCarousel…)` while editing; may delete a banner | 09.2 |
| Claim admin page | File-size check reversed (≤10 KB refused, big files pass); Save with no organisation → unknown error; needs a home masjid | 01.3 **(video)** |
| Expired reset link | Opens a blank 401 page | 00.3 |
| Finder | **Skip for now** on the madrasah step drops the masjid already picked | 00.4 |
| Hifz Tracker report | Subject boxes always disabled (`subjectsDisabled`); report can't run without the gear configuration | 12.4 |
| Volunteer skills | `loadSkills` uses the admin's home masjid, not the managed masjid | 03.3 |
| Add New User (madrasah) | One Fetch method checks the Admin GUID box first, so a leftover Admin GUID is used for other boxes | 03.4 |

## Wrong or misleading on screen

| Where | Issue | Videos |
|---|---|---|
| Sign-up / register | Terms and Privacy links go nowhere; register page Terms opens Privacy Policy | 00.2, 01.1, 06.2 **(video)** |
| Pending organisation | Menu locked until approval, though registration term 3 says the admin can start configuring. Decided 2026-11-03: the term will change; registration term 3 needs rewording to match the lock | 01.1, 01.2 **(video)** |
| "Learn more" links | Open internal ad-din.atlassian.net pages | 04.1, 04.3, 04.6 **(video)** |
| Zawal / Al-Duha minutes | Editable only with the Custom method, so Makrooh notices may never show | 04.1, 04.11 **(video)** |
| Add-user screens | Point to a non-existent "Settings > My Account > GUID"; two screens disagree; no copy button | 00.5, 03.3, 03.4, 06.4 |
| Campaign Publish note | Says "in the app and on your website"; campaigns show on the website only; in-app donation page shows admin labels to members | 08.4, 15.4 **(video)** |
| Event cards | Edit/Delete menu shown to members | 08.1, 15.3 |
| Profile → Allocate Subscription | Shows seats given out as "Available"; buttons disabled on a fresh pool | 02.4 |
| Billing | Banner **Pay now** opens Upcoming Invoices; list says Closed/Pending, invoice says Paid/Pending; "Days Past Due" can't show on Website and Custom Sender cards; cards show "$" but Stripe charges CAD | 02.2, 02.5, 02.6 |
| Schedule Builder | Send Communication says "students and teachers by email"; code emails and pushes students and parents | 05.6 |
| Link Parent / Link Child | Confirmation window can never open; picker has no heading from a profile | 06.4 |
| Website linking fine print | Says each organisation needs its own subscription; backend and confirm dialog say only the requester does | 09.4 |
| Website enquiries | No screen (list component unreachable); email only | 09.4 |
| Website address check | `UrlSegmentValidator` pattern not anchored; accepts capitals and other characters | 09.1 |
| Website editors | Menu `haveMenuError()` never true; banner counters "/35" "/300" vs 100/700 allowed | 09.2, 09.3 |
| Public website | Facilities tab title "Masjid News"; Contact form hidden for MadressahID 98 / MasjidID 151 (hard-coded); "Donation Progress 3" with one campaign | 09.6, 15.4 |
| Basic Announcements | Hint < 2 MB vs cropper 10 MB; placeholder 1080×1080 vs crop 960×1080; access checks the admin's own Premium | 04.4 |
| Salah Control | Always says "Updated Successfully", even after a failed save | 04.6 |
| Forms (masjid) | PNG offered but rejected; list doesn't refresh after upload; panel keeps last file | 04.8 |
| Live streaming | Bin deletes without confirmation; switching organisation doesn't reload streams | 04.10 |
| Prayer timetable | Past-month buttons open next year; export always Jan–Dec this year; "Change these" doesn't carry the date range | 04.2, 04.3 |
| Copy Embed Code | Always a portrait 9:16 frame | 04.5 |
| Comments Library | New library not selected after save; a variation's Save is lost without the level's Save | — (library cut from 12.2) |
| Report frames | Help says upload, but the upload button is commented out | 12.1 |
| Staff Attendance | Correction-reasons hint says two locked reasons; server has four | 13.4 |
| Exams → Manage Marks | Grid doesn't refresh after import; multiple-marks pages unreachable; teacher page has no import/export | — (Exam Marks left out of the series; 10.11 dropped) |
| Manage tasbeehs | Export does nothing | 15.6 |
| Admin Add Activity | Doesn't pre-fill class/section/subject from filters (Add Category does) | 10.5 |
| Interviews | **Add Booking** opens "Manage Interview" | 10.8 |
| Add Class | Evaluation Grade Set always shows a required star; switching Type clears it silently | 05.3 |

## Text and typos

`en.json` `dash.mobile.*` strings contain U+FFFD (e.g. "All caught up � nothing needs you"); "You are all set ! !"; "smalll display widget"; "Just this occurence"; "Volonteer Form"; "Manage Satff"; "Acqusition"; "Alumini"; "assigment"; "Imptoved Year"; "Add admin Profile" in lower case; "Parent Teacher Interview " (trailing space); description fields reuse "Event Description" / "Book Description".

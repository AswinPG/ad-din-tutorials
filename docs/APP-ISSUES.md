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
| Website banner editor | The editor's Delete button and the strip's delete icon remove the banner at once, with no confirmation (`carousel.add.component.html` 462-468); `initialize()` does not delete anything (corrected 2026-11-06) | 09.2 |
| Claim admin page | File-size check reversed (≤10 KB refused, big files pass); Save with no organisation → unknown error; needs a home masjid | 01.3 **(video)** |
| Expired reset link | Opens a blank 401 page | 00.3 |
| Finder | **Skip for now** on the madrasah step drops the masjid already picked. Decided 2026-11-06: fix before 00.4 is published | 00.4 **(video)** |
| Delete Account | `AccountController.cs` DeleteUserAccount calls CancelSubscription, which throws NotImplementedException for Apple and Play plans (`AppleSubscriptionRepository.cs`, `PlaySubscriptionRepository.cs`): store subscribers get Unknown error and the account stays. App Store / Play deletion compliance risk. Decided 2026-11-06: fix before 00.5 is published | 00.5 **(video)** |
| Precise location sheet | While location is approximate, the precise sheet returns every time the app reads location, with no "don't ask again". Decided 2026-11-06: add an opt-out | 00.7 |
| Subscription cards | Web plan cards show "$" but Stripe charges CAD plus tax. Decided 2026-11-06: label the cards CAD in the app; videos don't speak prices | 02.2, 02.3 |
| Hifz Tracker report | Subject boxes always disabled (`subjectsDisabled`); report can't run without the gear configuration | 12.4 |
| Volunteer skills | `loadSkills` uses the admin's home masjid, not the managed masjid | 03.3 |
| Add New User (madrasah) | One Fetch method checks the Admin GUID box first, so a leftover Admin GUID is used for other boxes | 03.4 |
| Masjid user list | No way to remove or deactivate a staff member or volunteer (masjidUserList buttons: Add, Edit, Manage Subscription, Manage Skills); to confirm with the team | 03.3 |
| Approve enrolment | Request window loads details with the admin's home madrasah (getUserHomeMadressah, `approve-enrollment.component.ts` 383), not the managed one; from code only, check on dev | 06.3 |
| Add New Event | Route guard commented out (`events.routes.ts` 11), but the API needs the admin's own Premium (EventsController AddEvent): an admin without Premium fills the whole form, then the save fails | 08.1 |
| Delete Transaction (several ticked) | Deletes only the first ticked row (ids[0]); the toolbar button's disabled rule uses && so it never disables (`transaction-list.component.ts`) | 08.5 |
| Enrollment Settings → Required Documents | Ticking the Hidden column saves the opposite value (onDocumentCellChanged sends !newValue); the Edit window works | 06.1 |
| Manage Madrasah → principals | Once an Academic School Principal or Vice Principal is set, it can't be cleared back to Select Staff, and a Council Chair isn't saved on its own (SavePrincipals, MadressahRepository.cs ~7066) | 05.1 |

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
| Profile → Subscription detail | Cancel Subscription removes the organisation seat at once with no confirmation, and does nothing when the person has no home madrasah | 02.4 |
| Add Migration | Migration Type defaults to Exam Based (`migrationAdd.component.ts` 120) though Exam Marks is off by default | 16.1 |
| Event "After specific salah" | Times come from the admin's home masjid's prayer times (`eventAdd.component.ts` 557-560), not the masjid picked in Select an Organisation | 08.1 |
| Recognition | Saving an award already emails and pushes the student, parents and teacher; Send Certificate sends the same notification again (RecognitionController.cs) | 10.10 |
| Attendance | Notify parents (on by default) plus Send Attendance Notifications can notify parents twice for one register | 10.2 |
| Madrasah Report | Payment Reports card shows with the Payment Module off (`report.component.ts` 163-186) | 12.4, 14.4, 14.5 |
| Report release date | One date per report and class; moving it forward hides already-released cards from parents (AcademicReportsRepository.cs 1726-1730) | 12.1, 12.3 |
| Email Report | Email All sends at once, before the release date (no release-date check in AcademicReportsService.cs) | 12.3 |
| Staff Attendance payroll | Settings says "When a period locks, the payroll file is sent to …" (en.json 3526); only version 1 is emailed automatically (IPayrollOutputSendService.cs 76-78) | 13.4, 13.6 |
| Event Share | Shares only the event's own Event Page link (`eventList.component.ts` 415-417); with none set, the message has only the title | 15.3 |
| Profile → Subscription | The "Failed to create subscription." box offers no Retry button (infoModalButton is set but the modal draws only a close icon) | 02.2 |
| Onboarding → Add organization | Subtitle says "You can change all of this later." but only Ad-Din can change the location (onboarding.loc_tooltip) | 01.1 |
| Profile → Signature | Tells you to "use a transparent image around 70×300 px", but the pen opens a drawing pad ("Sign here") with no upload | 00.5 |
| Password reset | Asking again clears older links only for the first account on that email; other accounts sharing the email keep valid links for 2 hours | 00.3 |
| Saving existing people and imports | Saving an existing person's profile, and every existing row in an import, sends the "added" email again (Flag "Edit" when UserID != 0; AddTeacher/AddAdmin/AddStaff, ImportTeachers) | 03.3, 03.4, 03.5 |
| Manage Madrasah → principals | Madrasah Principal and Vice Principal print on no report card (reports use the Academic School Principal); Madrasah Principal appears only on payment receipts | 05.1 |
| Learning Skill | Save sends empty skill rows without checking the form (learningSkill.component.ts updateSkills) | 05.1 |
| Approve enrolment | The Remove link on a course in the Enrollment Request window only drops it locally; what happens to the course afterwards is unclear | 06.3 |
| Website address box | UrlSegmentValidator is `/([-A-Za-z0-9]+)$/` with no ^ anchor, so spaces and capitals pass the "Lowercase letters, numbers and hyphens (-) only" check | 09.1 |
| Event delete box | "Notify followers via Email & Push Notification" starts ticked, but cancelling or finishing a delete unticks it for the next Delete box (eventList.component.ts 365-392) | 08.2 |
| Donation export CSV | AddedDate formatted "yyyy-mm-dd" (mm = minutes), so minutes show where the month should be (DonationMap.cs 16) | 08.5 |
| Masjid Prayer Times Chart | Months grouped by month number only, so a range over 12 months merges the same month of two years (MasjidPrayerTimesCardReport.cs 112) | 12.5 |
| Monthly prayer timetable | Spells "Asar" while the rest of the app says "Asr"; its labels are hard-coded English, not in en.json | 15.1 |

## Text and typos

~~`en.json` `dash.mobile.*` strings contain U+FFFD~~ (fixed on master d0604ce7f); "You are all set ! !"; "smalll display widget"; "Just this occurence"; "Volonteer Form"; "Manage Satff"; "Acqusition"; "Alumini"; "assigment"; "Imptoved Year"; "Add admin Profile" in lower case; "Parent Teacher Interview " (trailing space); description fields reuse "Event Description" / "Book Description".
| Delegations | Same From and To Teacher shows the raw key 'madressah.delegation.message.moreTeacher' (`delegationAdd.component.ts` 95) | 05.7 |
| Copy to Terms | Teacher-clash notice says "(Overview tab)"; the tab is "Routines" (`copy-term-routine.component.html` 105) | 16.2 |
| Language Settings | "All the field are required" (grammar) | 04.11 |
| Date & Time info tooltip | "Remove Secondsb" (typo) | 04.1 |


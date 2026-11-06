# Review panel: decisions needed (all tracks)

2026-11-06. Five reviewers (first-time users, video director, script writer, programme manager, product owner) read every planned script. The clear fixes are applied and committed: about 430 changes across 97 videos (Track 11 is on hold; the pilots are approved). These are the questions only Imran can answer. Each batch report has the evidence and the full options; the recommended option is given here.

Reply with the numbers you accept as recommended ("all recommended" is fine) and anything you want differently.

## App bugs and gaps (fix in the app, or accept)
1. **03.3** No way to remove a staff member or volunteer from a masjid. *Recommended:* confirm with the team; if none, add Deactivate like the madrasah's. ([02.4-03](2026-11-06-panel-02.4-03.md) B2)
2. **02.4 [5.3]** Cancel Subscription on a profile removes the seat at once, no "Are you sure?". *Recommended:* add a confirmation. (02.4-03 B3)
3. **06.3** The enrolment request window may load the admin's home madrasah, not the one being managed (code only). *Recommended:* check on dev, fix if real. ([06-07](2026-11-06-panel-06-07.md) B4)
4. **08.4/08.5** Masjid PayPal gifts can't arrive while masjid PayPal keys don't save. *Recommended:* fix the `[orgId]` binding before publishing. ([08-09](2026-11-06-panel-08-09.md) B1)
5. **08.1** Add New Event has no Premium check, so a non-Premium admin fills the whole form, then the save fails. *Recommended:* put the guard back. (08-09 B2)
6. **16.1** Migration Type starts on Exam Based though Exam Marks is off. *Recommended:* start on Transfer. ([05-16](2026-11-06-panel-05-16.md) B2)
7. **12.1/12.3** One release date per report and class; moving it forward hides Term 1 cards parents could already see. *Recommended:* a date per term in the app (or a warning line). ([12-14](2026-11-06-panel-12-14.md) B1)
8. **12.3** Email All sends at once, even before the release date. *Recommended:* confirm it's intended and say so in the video. (12-14 B2)
9. **12.4/14.4/14.5** Payment Reports card shows with the Payment Module off. *Recommended:* hide it like Exam Reports. (12-14 B3)
10. **13.4/13.6** Settings says the payroll file is sent when a period locks; only the first lock sends it. *Recommended:* change the text to "first locks". ([13](2026-11-06-panel-13.md) B2)
11. **15.3** Sharing an event with no Event Page link shares only its title. *Recommended:* share a fallback link. ([15](2026-11-06-panel-15.md) B4)
12. **10.10** Recognition notifies on Save and again on Send Certificate. *Recommended:* keep; the script says so. ([10](2026-11-06-panel-10.md) B5)
13. **05.7** A holiday notifies everyone, with no switch. *Recommended:* keep; the script warns. (05-16 B3)

## What viewers are told
14. **02.4 [2.1]** Masjid Events have no Premium check, so say "donations, reports and user list", not "events". *Recommended:* yes. (02.4-03 B1)
15. **04.5 [1.2]** Repeat the Prayer Times Premium free-trial line. *Recommended:* yes. ([04](2026-11-06-panel-04.md) B4)
16. **06.2** Say enrolling through Ad-Din costs the parent nothing, and to contact the madrasah if they hear nothing. *Recommended:* yes. (06-07 B1)
17. **10.8** Reminders also go by text message: do texts cost anything or need an add-on? *Needs your answer.* (10 B4)
18. **12.1/12.2** Say the AI features send a student's results to an AI service? *Recommended:* say nothing if the privacy policy covers it, else one line. (12-14 B5)
19. **13.1/13.7** Premium per staff member is now said plainly. *Recommended:* keep. (13 B4)
20. **09.1** Does the old website address still work after it's changed? *Needs your answer.* (08-09 B4)
21. **01.2** (earlier) You approved "contact us after a week"; give the real approval time if you want it spoken.

## Facts only you can give
22. **04.1 [5.3]** Does saving the calculation method leave Iqamah and hand-typed times alone? (04 B3)
23. **05.5** What "Mark as Homeroom" means, in one line. (05-16 B4)
24. **16.1** What admins should do with top-class students who are leaving (the Alumni list is hidden). (05-16 B1)
25. **02.3 [2.2]** (earlier decision 16) Can seats bought by a masjid be used by its linked madrasah?

## Coverage (new scenes or videos)
26. **04.6** Four Display Controls items have no video (Masjid URL, Poster After Adhan, Poster After fard salah, Embedded Content). *Recommended:* a short scene in 04.6. (04 B1)
27. **04.2** Jumah Location (Jumu'ah held away from the masjid) has no video. *Recommended:* a short chapter in 04.2. (04 B2)
28. **06.3** Download Application and Add more course. *Recommended:* one line on Download Application; leave Add more course out on purpose. (06-07 B2)
29. **10.2** Send Attendance Notifications is in no video. *Recommended:* add one scene. (10 B1)
30. **13.4** Location and privacy settings are in no video. *Recommended:* add about 20 s. (13 B3)
31. **Playlists** Add 07.3 to Parent; add 08.1 and 09.1-09.5 to Madrasah admin. *Recommended:* yes. (06-07 B3, 08-09 B3)

## Recording set-up
32. **Demo world** Add the classes, terms, staff and families the scripts now use (Maktab Level 1 A, Hifz classes, Autumn Term, Khadija Usman, Idris Malik, new families) to the mocked world. *Recommended:* yes, once in `world.mjs`. (05-16 B5, 10 B2, 13 B1, 06-07 shared)
33. **Community member account** The demo has no plain member, so Track 15 would show admin controls. *Recommended:* add a member persona. (15 B1)
34. **Native phone screens** (Track 15 Qiblah, maps, share sheets; 02.2 Premium page; 00.7 permissions). *Recommended:* capture on the emulator from the app build. (15 B2)
35. **10.7** Excel shots can't be shown in the mocked browser. *Recommended:* record Excel separately and cut it in. (10 B3)
36. **15.5/15.8** Quran self-hosting is only on `feat/quran-self-hosted`. Which build should be recorded? *Recommended:* master as it is; labels are the same. (15 B3)
37. **Track 14** Keep Yusuf Rahman with Maryam and Hamza as the demo parent family for 14.1-14.4. *Recommended:* yes. (12-14 B4)
38. **14.4** Rename the folder to match the new title. *Recommended:* yes. (12-14 B6)

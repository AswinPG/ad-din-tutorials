---
id: "02.4"
title: Give seats to parents, teachers and staff
target: 4:00
prereq:
  - "02.3"
status: scripted
switch: Family Subscription sharing
flags:
  - "Decision \"Who needs a seat?\" (decided 2026-11-03: the own-Premium check is intended): scripted as the code works today. Premium pages check the person's own Premium (SubscriptionGuard and organizationSubscriptionGuard), not the organisation's seats, so admins, teachers, parents and students each need Premium of their own, a seat, or a family share. A student can't be placed in a class without one (API MDCM402). Staff Attendance users need one (its switch text). User Management itself needs the admin's own Premium."
  - "Covers item \"Allocate Subscription on a person's profile\" is left out: that card treats the organisation's used-seat count as the available count. It shows \"N Available\" with the number of seats already given out, disables both buttons when none are given out, and shows \"No subscriptions left\" on a fresh pool. The script uses Manage Subscription on the User Management list instead (it shows the real available seats), and uses the profile only to check and remove a seat (on a teacher: the whole Subscription detail card is hidden when any linked family member has an active subscription, which includes a family share)."
  - The switch is optional for the task; the family-sharing chapter assumes the organisation wants it on.
---

# 02.4 Give seats to parents, teachers and staff

## Goal
Know who needs a seat, turn on Family Subscription sharing if you want it, give seats to several people at once, and check or take back a seat on a profile.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Allocate Subscription on a person’s profile, Family Subscription sharing, who needs a seat

## Demo data
- Demo world (engine/demo-world.md): the demo admin Yusuf Rahman (with a seat) of "Maple Grove Madrasah", which has Yearly 3 of 20 used and Monthly 0 of 10 used
- Family Subscription sharing off at the start (toggled on during the video)
- Parent tab: three parents with "No Subscription" (Samir Karim, Noor Mirza, Adam Nasser), each linked to a spouse and their child (Zaid Karim, Hana Mirza, Ibrahim Nasser); one parent already "Yearly" (Rania Haddad)
- After allocation: the three parents show "Yearly", their linked family members show "Family"
- Teacher tab: teacher Omar Khalid with a Yearly organisation seat (no linked family), and teacher Fatima Siddiqui on "No Subscription"
- Samir Karim's own account for the closing shot ("Provided by your organization")

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Seats ready to give
#### [1.1] Opening
**Say:** In this video for admins, you'll give your organisation's Premium seats to the people who need them, and see how one seat can cover a whole family.
**Show:** Title card: "Give seats to parents, teachers and staff".

#### [1.2]
**Say:** You'll need to be an admin, with seats already bought on the **Subscription Management** page.
**Show:** Admin Portal → Subscription Management → View plan: spotlight "3 of 20 used" and "17 available" on the Yearly card.

### 2. Who needs a seat
#### [2.1] Admins and teachers
**Say:** Anyone who uses Premium pages needs Premium on their own account. That includes you and every admin, and every teacher who uses the **Teacher Portal**. At a masjid, that means the admins who run its events, donations and reports.
**Show:** Card listing the roles; then spotlight Admin Portal and Teacher Portal in the sidebar; quick cut to the Masjid admin sidebar with Events, Donations and Reports spotlighted.

#### [2.2] Parents and students
**Say:** Parents need it for the **Parent Portal**. A student can only be placed in a class if the student, or their family, has Premium.
**Show:** Card: "Parent Portal → parent's seat", "Class place → student or family seat".

#### [2.3] Staff
**Say:** Staff who use **Staff Attendance** need a seat too. Members who only follow your masjid for prayer times and news don't need one. People who bought Premium for themselves don't need one either.
**Show:** Card: "Staff Attendance → seat"; "Followers → no seat"; "Own Premium → no seat".

### 3. Share a seat with a family
#### [3.1] Find the switch
**Say:** First, decide about family sharing. Open **Organization Management**, tap **Manage** on your masjid or madrasah, and open the **Services** tab.
**Show:** Sidebar → Admin Portal → Organization Management → Manage on "Maple Grove Madrasah" → Services tab.

#### [3.2] Turn it on
**Say:** Turn on **Family Subscription sharing**. A seat given to a parent or guardian then covers their linked family, including a spouse and children.
**Show:** Toggle the "Family Subscription sharing" switch on. Toast "Successfully updated the family subscription settings".

#### [3.3]
**Say:** With sharing on, give seats to parents rather than students. The family must be linked to the parent's account for this to work. Video 06.4 shows how to link them.
**Show:** Card: "One seat on the parent → spouse and children covered".

### 4. Give seats to several people
#### [4.1] Your user list
**Say:** Now open **User Management** and tap **Open users** on your masjid or madrasah. The **Subscription Plan** column shows who has Premium, and **No Subscription** shows in red.
**Show:** Sidebar → Admin Portal → User Management → Open users on "Maple Grove Madrasah". Spotlight the Subscription Plan column.

#### [4.2] Select people
**Say:** Pick a tab, such as **Parent** or **Teacher**, and tick the people who need a seat. Then tap **Manage Subscription**.
**Show:** Click the Parent tab. Tick Samir Karim, Noor Mirza and Adam Nasser. Click "Manage Subscription"; the "Subscription" box opens.

#### [4.3] Allocate
**Say:** Tap **Allocate**. Ad-Din shows how many yearly and monthly seats are available, and who's already subscribed.
**Show:** Click "Allocate". Spotlight "Yearly Subscriptions Available : 17" and the list with "Not Subscribed" next to each name.

#### [4.4]
**Say:** Under **Select a Plan**, choose **Monthly** or **Yearly**. Tap **Apply**, check the summary, and tap **Confirm**. This uses seats you have already bought, so nothing more is charged.
**Show:** Select "Yearly"; click "Apply". The "Allocate Subscriptions !" box shows the count; click "Confirm". Each row turns to "Subscribed"; click "Done".

#### [4.5] Not enough seats
**Say:** If there aren't enough seats, Ad-Din tells you, and **Get More** takes you to buy more.
**Show:** Quick cut: the "Get Subscription !" box with "Get More". Close it.

### 5. Check or remove a seat
#### [5.1] In the list
**Say:** Back in the list, the three parents now show **Yearly**. With family sharing on, their linked family members show **Family**.
**Show:** Spotlight the three "Yearly" rows; switch to the Student tab and spotlight a "Family" row.

#### [5.2] On a profile
**Say:** To check one person, tick them and tap **Edit**. On their profile, **Subscription detail** shows the plan, the expiry date, and that it comes from the organisation.
**Show:** Teacher tab: tick Omar Khalid, click "Edit". Spotlight the "Subscription detail" card: "The user is already subscribed", Expires, Duration "Yearly Plan", Subscription Service "Organization". (Use a teacher: a parent's card is hidden when a linked family member shares the seat.)

#### [5.3] Take a seat back
**Say:** To take a seat back, tap **Cancel Subscription**. It happens straight away, with no second question. The seat returns to your organisation, ready for someone else.
**Show:** Spotlight the note "Removing will return this subscription to the organization's pool." Hover "Cancel Subscription"; don't click.

#### [5.3a] Several at once
**Say:** To take seats back from several people, tick them in the list, tap **Manage Subscription**, then **De-Allocate**, and tap **Remove Subscription**.
**Show:** Back in the list: tick two rows, click "Manage Subscription", then "De-Allocate"; spotlight "Remove Subscription". Close the box without clicking it.

### 6. Done
#### [6.1] What they see
**Say:** The people you chose now have Premium. On their own profile, the **Subscription** tab says **Provided by your organization**.
**Show:** Samir Karim's account, with the side-panel label "Signed in as: a parent": Profile → Subscription tab. Zoom on "Provided by your organization".

#### [6.2] Close
**Say:** Next, learn about add-on services in video 02.5, or how billing and invoices work in video 02.6.
**Show:** End card with two tiles: "02.5 Add-on services" and "02.6 Billing, cards and invoices".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-06 · panel (user, director, writer, PM, PO) · 9 changes: [2.3] plain sentences (no "nor does"), [3.1] and [4.1] say masjid or madrasah, [3.3] points to 06.4 for linking a family, [4.4] says nothing more is charged, [5.3] says Cancel Subscription has no second question (code: subscription-detail.component.ts), new [5.3a] De-Allocate for several people, [6.1] "Signed in as" label, demo names from the Maple Grove demo world
- 2026-11-06 · manager · panel decisions approved ("approved": recommended options) · [2.1] masjid admins need seats too (decision 17)
- 2026-11-03 · manager · decisions via chat · 'Who needs a seat?' decided (own-Premium check is intended): flag wording updated; script unchanged
- 2026-11-03 · critic · 3 changes: [1.1] second-person opening, [2.4] thin scene merged into [2.3], [6.2] end tiles by number
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes

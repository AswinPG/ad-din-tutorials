---
id: "03.1"
title: Your organisation’s details, logo and time zone
target: 7:30
prereq:
  - "01.2"
status: scripted
plan: Free
flags:
  - "Masjid Details Save does nothing and shows no message when a required field other than the name is empty (Phone 01, Street, City, Postal/Zip Code, State, Country, or no map point from the address search): editMasjid submitForm only marks fields touched, and only Masjid Name has an error text. Phone 01 has no star. The demo masjid must have all of them filled, and [5.1] says Phone 01 is required."
---

# 03.1 Your organisation’s details, logo and time zone

## Goal
Keep your masjid’s or madrasah’s name, address, contact details, logos and time zone up to date in Organization Management.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Organization Management → Details tab
- for a madrasah, three logos, currency, board, linked masjid
- where members see the details (About Us page)
- logo file types and the wrong-file message; removing a madrasah logo
- picking the address from the suggestions (map point); optional contact fields
- time zone: Change dialog, the Staff Attendance warning, "Set by an administrator"
- what to check when Save does nothing (masjid) or says a field is missing (madrasah)
- report signers kept on Save (pointer to 05.1)
- linked masjid: search by name or ID, Change, Unlink

## Demo data
- Demo admin account that is admin of the demo masjid and the demo madrasah, so both show in Organization Management
- Demo masjid with name, full address, phone numbers and email filled in; its time zone already worked out from the address (for example `America/Toronto`); Staff Attendance off, so the time zone dialog shows no warning
- For the cut-in in [4.2a] only: the same dialog with Staff Attendance on (a world override), so the warning and "Change anyway" show; nothing is saved
- For the cut-in in [4.2b] only: the time zone card with a zone chosen by hand, so the hint reads "Set by an administrator; the address would give America/Toronto."
- About Us page (Masjid → About Masjid) for the demo masjid, showing its logo, address, phone and email ([1.2a])
- A `notes.txt` file on the recording machine, to show the wrong-file message ([3.2a])
- Demo madrasah with name, address, currency, contact details and board details filled in; no linked masjid yet
- Three logo images on the recording machine (`masjid-logo.png`, `madrasah-logo.png`, `school-board-logo.png`)
- Address search (Google Places) answering in the demo world, with one suggestion for the demo address
- The demo masjid findable by name in the Linked Masjid search; a search for "Cedar" returns Cedar Hill Masjid, and a search for "zzz" returns nothing ([6.4a])

## Script

### 1. Your organisation’s profile
#### [1.1] Opening
**Say:** Your organisation’s details are what people see: its name, address, contact details and logo. In this video for masjid and madrasah admins, you’ll keep them up to date and check the time zone.
**Show:** Title card: "Your organisation’s details, logo and time zone".

#### [1.2]
**Say:** Your organisation is already registered and approved by Ad-Din. Here you correct what you entered when you registered, and add anything missing.
**Show:** Opening card from You'll need.

#### [1.2a] Why it matters
**Say:** Members see these details in Ad-Din. On your masjid’s **About Us** page, they find your logo, address, phone number and email, and can tap to call or write to you. Video 04.7 covers that page.
**Show:** Cut-in: Sidebar → Masjid → About Masjid for the demo masjid. Spotlight the logo, address, phone and email lines at the top.

### 2. Open Organization Management
#### [2.1] Find it
**Say:** In the sidebar, open **Admin Portal**, then **Organization Management**.
**Show:** Sidebar → Admin Portal → Organization Management. The "Organisation Management" page opens.

#### [2.2]
**Say:** You’ll see every organisation you manage. If you have several, search or filter them. Then tap **Manage** on the one you want.
**Show:** Spotlight the demo masjid and demo madrasah cards. Click "Manage" on the demo masjid.

### 3. Masjid details and logo
#### [3.1] The tabs
**Say:** A masjid opens on the **Masjid Details** tab. Next to it are **Services** and **Integrations**, which the next video covers.
**Show:** "Manage Masjid" page. Spotlight the three tabs: Masjid Details, Services, Integrations.

#### [3.2] Logo
**Say:** On the left is the **Masjid Logo**. Tap **Add a Logo**, or **Change Logo** if there is one, and choose a JPG, PNG or WebP picture. It's kept when you tap **Save** at the end.
**Show:** Click "Change Logo"; pick `masjid-logo.png`. The new logo shows in the card.
**Caption:** Tap Add a Logo or Change Logo, and choose a JPG, PNG or WebP picture. It's kept when you tap Save.

#### [3.2a] Wrong file type
**Say:** If you pick another kind of file, Ad-Din says **Please provide a valid JPEG/PNG/WEBP image.** and keeps the logo you had. A simple, clear picture works best, because the logo is often shown small.
**Show:** Click "Change Logo"; pick `notes.txt`. The message shows; the logo card is unchanged.

#### [3.3] Name and address
**Say:** Check the **Masjid Name**. To change the address, type it in **Address** and pick it from the suggestions. The street, city, postal code, state and country fill in for you.
**Show:** Zoom on Masjid Name. Type the demo address in Address, pick the suggestion; Street, City, Postal/Zip Code, State and Country fill in.

#### [3.3a] Pick from the suggestions
**Say:** Always pick your address from the suggestions, even to change one detail. This places your masjid on the map, which Ad-Din needs to save the page and work out your time zone. Then you can correct a street or postal code by hand.
**Show:** Spotlight the suggestion list as it opens. After picking, click into Postal/Zip Code to show it can be typed in.
**Caption:** Always pick the address from the suggestions. It places your masjid on the map, which Ad-Din needs.

### 4. Check the time zone
#### [4.1] Time zone
**Say:** Under the address is the **Time zone**. Ad-Din works it out from your address. Staff Attendance uses it to decide when each day and pay period starts.
**Show:** Scroll to the Time zone card. Spotlight the zone and the hint "Worked out from the organisation's address."

#### [4.2]
**Say:** If it’s wrong, tap **Change**, pick the right zone from the list, and tap **Save**. It saves straight away. If there’s no address on file yet, the button says **Enter address** instead.
**Show:** Click "Change"; the "Change the time zone" dialog opens. Open the list, hover the right zone, spotlight "Save", then click "Cancel" to keep the demo as it is.

#### [4.2a] When Staff Attendance is on
**Say:** If Staff Attendance is switched on, the window first shows **Warning: Staff Attendance is switched on**. A new zone moves every shift to the new clock, so staff can suddenly show as late or absent. Change it only if it’s wrong, with **Change anyway**.
**Show:** Cut-in with Staff Attendance on: the same dialog with the warning box at the top. Spotlight the warning title, then "Change anyway". Click "Cancel".
**Caption:** With Staff Attendance on, a new zone moves every shift to the new clock. Only change it if it’s wrong.

#### [4.2b] Chosen by hand
**Say:** After a change by hand, the hint under the zone says **Set by an administrator**, and names the zone your address would give. This tells the next admin why the two differ.
**Show:** Cut-in: the time zone card with a zone chosen by hand. Zoom on the hint "Set by an administrator; the address would give America/Toronto."

### 5. Contact details and Save
#### [5.1] Contact
**Say:** Under **Organization Contact**, check your phone numbers, **Mobile Number** and **Email**. **Phone 01** and **Email** are required.
**Show:** Scroll to Organization Contact. Spotlight Phone 01 (required, though it has no star), Phone 02, Fax, Mobile Number, then Email with its star.

#### [5.1a] Optional fields
**Say:** **Phone 02**, **Fax** and **Mobile Number** are optional. Members see your email and your first phone number, so use ones that someone in your office answers.
**Show:** Spotlight Phone 02, Fax and Mobile Number, then Email and Phone 01.

#### [5.2] Save
**Say:** Tap **Save**. Ad-Din confirms the change and takes you back to your list of organisations.
**Show:** Click "Save". An "Alert" window confirms the update; the Organisation Management list returns behind it. Click "Close".

#### [5.2a] If Save does nothing
**Say:** If nothing happens when you tap **Save**, a required field is empty. Check **Phone 01**, every address field and the email, and make sure you picked the address from the suggestions. Then tap **Save** again.
**Show:** Back on Manage Masjid: spotlight Phone 01, Street, City, Postal/Zip Code, State, Country and Email in turn, then "Save". Don't click it.
**Caption:** If Save does nothing, a required field is empty. Check Phone 01, the address and the email.

### 6. Extra details for a madrasah
#### [6.1] Madrasah tabs
**Say:** A madrasah has the same details and a few more. Tap **Manage** on it to open the **Madrasah/School Details** tab. Its **Enrollment Settings** tab is covered in video 06.1.
**Show:** Click "Manage" on the demo madrasah. "Manage Madrasah" page; spotlight the tabs Madrasah/School Details, Enrollment Settings, Services, Integrations.

#### [6.2] Three logos
**Say:** A madrasah has three logos: the **Madrasah Logo**, a **School Logo** and a **School Board Logo**. Report cards use them. Add or change each one the same way, and tap **Save** at the end.
**Show:** Spotlight the three logo cards. Click "Add a Logo" on School Board Logo; pick `school-board-logo.png`.

#### [6.2a] Remove a logo
**Say:** To remove a madrasah logo, tap the small cross on its corner, and the card shows the empty frame again. As with every change here, it’s kept only when you tap **Save**.
**Show:** Spotlight the cross on the School Logo card. Don't click it.

#### [6.3] Currency and board
**Say:** Choose the **Madrasah/School Currency**. Then, under **Madrasah/School Board details**, enter the board’s name and address. These fields are required.
**Show:** Open the currency list and pick the demo currency. Scroll to the board card; spotlight Madrasah/School Board Name and the address fields.

#### [6.3a] Contact and board fields
**Say:** For a madrasah, **Phone 01** and **Email** are required too. In the board’s address, only **Flat No./Apartment** can stay empty.
**Show:** Spotlight Phone 01 and Email on Organization Contact, then Flat No./Apartment on the board card.

#### [6.3b] Report signers
**Say:** Below that, **Other Organization Services / Settings** chooses the people who sign your report cards. Video 05.1 covers it. Those choices are also kept when you tap **Save**.
**Show:** Scroll to "Other Organization Services / Settings"; spotlight the five role lists. Don't change them.

#### [6.4] Linked masjid
**Say:** Further down, under **Linked Masjid**, tap **Link a masjid**. Search by name or Masjid ID, and pick yours. Parents who join through your enrolment link then get this masjid as their home masjid.
**Show:** Scroll past the principals’ settings to Linked Masjid. Click "Link a masjid", type the demo masjid’s name, click the result. Message "Linked to …"; the masjid card shows with Change and Unlink.

#### [6.4a] Search tips
**Say:** The search finds masjids by part of their name, so check the address under each result before you pick one. If nothing matches, Ad-Din suggests trying the exact Masjid ID instead.
**Show:** In a second pass with "Change": type "Cedar"; the result shows its address and ID. Type "zzz"; the message "No masjid found. Try the name or the exact Masjid ID." shows. Click "Cancel".

#### [6.4b] Change or Unlink
**Say:** To link another masjid, tap **Change**. To remove the link, tap **Unlink**, then **Unlink** again to confirm. Parents who join through your enrolment link after that don’t get a home masjid from it.
**Show:** Spotlight "Change". Click "Unlink": the "Unlink masjid" window explains what happens. Spotlight "Unlink", then click "Cancel" to keep the demo link.

#### [6.5] Save the madrasah
**Say:** The linked masjid saves on its own. For everything else, tap **Save** at the bottom. If a required field is empty, Ad-Din says so and takes you to it.
**Show:** Click "Save". Confirmation message; back to the list.
**Caption:** The linked masjid saves on its own. Tap Save for everything else.

#### [6.5a] If a field is missing
**Say:** If a required field is empty, Ad-Din says **Please fill in the required fields.** and scrolls to it. The empty box shows **This field is required**. Fill it in and tap **Save** again.
**Show:** Earlier take: clear Madrasah/School Board Name, click "Save". The message shows, the page scrolls to the board card, and "This field is required" shows in red. Type the name back.

### 7. Next
#### [7.1] Done
**Say:** Your organisation’s details, logos and time zone are up to date, and you can change them here at any time. Next, video 03.2: Turn features on and off. For a madrasah, also video 05.1: Report signatures and learning skills.
**Show:** End card with two tiles: "03.2 Turn features on and off" and "05.1 Report signatures and learning skills".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 3:02 → 6:02 narration, 12 scenes added: why it matters (About Us page), wrong logo file, pick the address from the suggestions, Staff Attendance time-zone warning, "Set by an administrator" hint, optional contact fields, what to check when masjid Save does nothing, remove a madrasah logo, madrasah required fields, report signers kept on Save, linked-masjid search tips, Change and Unlink, madrasah missing-field message
- 2026-11-06 · panel (user, director, writer, PM, PO) · 5 changes: prereq 01.1 → 01.2 (the sidebar is locked until Ad-Din approves, as for 02.3), [1.1] says who it's for, [1.2] "registered and approved", [3.2] and [6.2] logos are kept only when you tap Save (code: editMasjid/editMadressah set the form value), [7.1] names both end tiles by number and title
- 2026-11-03 · manager · decisions via chat · 05.1 renamed 'Report signatures and learning skills': end-card tile updated
- 2026-11-03 · critic · 4 changes: [1.2] clearer 'what you entered when you registered'; [4.2] Show spotlights Save before Cancel; [5.1] tighter contact line; [7.1] Say names the 05.1 end tile
- 2026-11-03 · validator · checked against master d36d69ed8 · 2 fixes: Phone 01 is required on the masjid form ([5.1]); masjid Save confirms in an Alert you close ([5.2]); flag for the silent masjid Save

---
id: "03.1"
title: Your organisation’s details, logo and time zone
target: 4:00
prereq:
  - "01.1"
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

## Demo data
- Demo admin account that is admin of the demo masjid and the demo madrasah, so both show in Organization Management
- Demo masjid with name, full address, phone numbers and email filled in; its time zone already worked out from the address (for example `America/Toronto`); Staff Attendance off, so the time zone dialog shows no warning
- Demo madrasah with name, address, currency, contact details and board details filled in; no linked masjid yet
- Three logo images on the recording machine (`masjid-logo.png`, `madrasah-logo.png`, `school-board-logo.png`)
- Address search (Google Places) answering in the demo world, with one suggestion for the demo address
- The demo masjid findable by name in the Linked Masjid search

## Script

### 1. Your organisation’s profile
#### [1.1] Opening
**Say:** Your organisation’s details are what people see: its name, address, contact details and logo. In this video you’ll keep them up to date and check the time zone.
**Show:** Title card: "Your organisation’s details, logo and time zone".

#### [1.2]
**Say:** This is for masjid and madrasah admins. Your organisation is already registered; here you change what you entered then, and add what’s missing.
**Show:** Opening card from You'll need.

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
**Say:** On the left is the **Masjid Logo**. Tap **Add a Logo**, or **Change Logo** if there is one, and choose a JPG, PNG or WebP picture.
**Show:** Click "Change Logo"; pick `masjid-logo.png`. The new logo shows in the card.
**Caption:** Tap Add a Logo or Change Logo, and choose a JPG, PNG or WebP picture.

#### [3.3] Name and address
**Say:** Check the **Masjid Name**. To change the address, type it in **Address** and pick it from the suggestions. The street, city, postal code, state and country fill in for you.
**Show:** Zoom on Masjid Name. Type the demo address in Address, pick the suggestion; Street, City, Postal/Zip Code, State and Country fill in.

### 4. Check the time zone
#### [4.1] Time zone
**Say:** Under the address is the **Time zone**. Ad-Din works it out from your address. Staff Attendance uses it to decide when each day and pay period starts.
**Show:** Scroll to the Time zone card. Spotlight the zone and the hint "Worked out from the organisation's address."

#### [4.2]
**Say:** If it’s wrong, tap **Change**, pick the right zone from the list, and tap **Save**. It saves straight away. If there’s no address on file yet, the button says **Enter address** instead.
**Show:** Click "Change"; the "Change the time zone" dialog opens. Open the list, hover the right zone, then click "Cancel" to keep the demo as it is.

### 5. Contact details and Save
#### [5.1] Contact
**Say:** Under **Organization Contact**, add your phone numbers and a **Mobile Number**. **Phone 01** and the **Email** are required.
**Show:** Scroll to Organization Contact. Spotlight Phone 01 (required, though it has no star), Phone 02, Fax, Mobile Number, then Email with its star.

#### [5.2] Save
**Say:** Tap **Save**. Ad-Din confirms the change and takes you back to your list of organisations.
**Show:** Click "Save". An "Alert" window confirms the update; the Organisation Management list returns behind it. Click "Close".

### 6. Extra details for a madrasah
#### [6.1] Madrasah tabs
**Say:** A madrasah has the same details and a few more. Tap **Manage** on it to open the **Madrasah/School Details** tab. Its **Enrollment Settings** tab is covered in video 06.1.
**Show:** Click "Manage" on the demo madrasah. "Manage Madrasah" page; spotlight the tabs Madrasah/School Details, Enrollment Settings, Services, Integrations.

#### [6.2] Three logos
**Say:** A madrasah has three logos: the **Madrasah Logo**, a **School Logo** and a **School Board Logo**. Report cards use them. Add or change each one the same way.
**Show:** Spotlight the three logo cards. Click "Add a Logo" on School Board Logo; pick `school-board-logo.png`.

#### [6.3] Currency and board
**Say:** Choose the **Madrasah/School Currency**. Then, under **Madrasah/School Board details**, enter the board’s name and address. These fields are required.
**Show:** Open the currency list and pick the demo currency. Scroll to the board card; spotlight Madrasah/School Board Name and the address fields.

#### [6.4] Linked masjid
**Say:** Further down, under **Linked Masjid**, tap **Link a masjid**. Search by name or Masjid ID, and pick yours. Parents who join through your enrolment link then get this masjid as their home masjid.
**Show:** Scroll past the principals’ settings to Linked Masjid. Click "Link a masjid", type the demo masjid’s name, click the result. Message "Linked to …"; the masjid card shows with Change and Unlink.

#### [6.5] Save the madrasah
**Say:** The linked masjid saves on its own. For everything else, tap **Save** at the bottom. If a required field is empty, Ad-Din says so and takes you to it.
**Show:** Click "Save". Confirmation message; back to the list.
**Caption:** The linked masjid saves on its own. Tap Save for everything else.

### 7. Next
#### [7.1] Done
**Say:** Your organisation’s details, logos and time zone are up to date. Next, choose which features your organisation uses, on the **Services** tab.
**Show:** End card with two tiles: "03.2 Turn features on and off" and "05.1 Report signatures, learning skills and report subjects".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · validator · checked against master d36d69ed8 · 2 fixes: Phone 01 is required on the masjid form ([5.1]); masjid Save confirms in an Alert you close ([5.2]); flag for the silent masjid Save

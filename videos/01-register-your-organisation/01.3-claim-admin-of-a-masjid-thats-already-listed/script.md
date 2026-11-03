---
id: "01.3"
title: Claim admin of a masjid that’s already listed
target: 3:00
prereq:
  - "00.4"
status: scripted
flags:
  - The claim page needs a home masjid; without one, the claim link silently returns to the home page, even when claiming a madrasah
  - The file check is reversed: files under 10 KB are refused with a "more than 10 MB" message and large files pass; the demo document must be over 10 KB, and the script states no size limit
  - Tapping Save with no organisation selected shows an unknown-error message instead of asking you to choose one
---

# 01.3 Claim admin of a masjid that’s already listed

## Goal
Ask Ad-Din to make you an administrator of a masjid or madrasah that's already listed and managed by someone else.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->
- Your Ad-Din account with a home masjid chosen
- A document that shows you represent the organisation (PDF, Word or photo)

## Covers
- Masjid Finder, follow, “Claim Admin Role”, description and documents

## Demo data
- A signed-in member account with a home masjid already set (the shared demo masjid)
- A second, approved masjid nearby, "Masjid Al-Falah", run by another admin, with prayer times, phone and email; the member does not follow it yet
- A demo file `board-letter.pdf` (over 10 KB) on the recording machine
- The claim call mocked to succeed with "Successfully Added Claim"

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Before you start
#### [1.1] Opening
**Say:** Is your masjid already on Ad-Din, but run by someone else? In this video you'll ask Ad-Din to make you an admin. The same steps work for a madrasah.
**Show:** Title card: "Claim admin of a masjid that’s already listed".

#### [1.2]
**Say:** You'll need your Ad-Din account with a home masjid chosen, and a document that shows you represent the organisation, such as a letter from the board.
**Show:** Opening card from You'll need.

### 2. Find the masjid
#### [2.1] Masjid Finder
**Say:** In the menu, open **Masjid**, then **Masjid Finder**. You'll see a map and a list of places near you.
**Show:** Sidebar → Masjid → Masjid Finder. The map with pins and the "Nearby Masjid / Madrasah" list.

#### [2.2]
**Say:** Search for your masjid by name or area. On its card, tap **View details**.
**Show:** Type "Al-Falah" in the search box and press Enter. On the "Masjid Al-Falah" card, click "View details"; the details panel opens.

### 3. Follow it first
#### [3.1] Follow
**Say:** You can only claim an organisation you follow or have as your home. So tap **Follow**. The button changes to **Following**.
**Show:** Click "Follow"; it turns to "Following". Zoom on the button.

### 4. Open the claim page
#### [4.1] Claim Admin Role
**Say:** At the bottom of the details, tap **Claim Admin Role of the organizations**.
**Show:** Scroll the details panel past the prayer times. Click "Claim Admin Role of the organizations".

#### [4.2] How claiming works
**Say:** The **Claim the Admin Role** page opens. **How claiming an admin role works** explains the rules. Read it once before you start.
**Show:** The claim page with the guide open on the left. Spotlight the guide heading.

#### [4.3]
**Say:** In short: Ad-Din doesn't decide disputes about who runs the organisation. It checks your documents, then connects you with the current administrators, who can give you admin rights.
**Show:** Slow scroll through the guide text. Spotlight the second and third paragraphs.
**Caption:** Ad-Din doesn't settle disputes. It checks your documents and connects you with the current administrators, who can give you admin rights.

#### [4.4]
**Say:** Before you send a claim, make sure your own profile details are up to date.
**Show:** Spotlight "first ensure your profile details are all up to date" in the guide.

### 5. Fill in the claim
#### [5.1] Choose the organisation
**Say:** Under **Select an Organisation**, choose the masjid. The list shows the organisations you follow or belong to.
**Show:** Open the "Select an Organisation" list; pick "Masjid Al-Falah".

#### [5.2] Claim Description
**Say:** In **Claim Description**, say who you are and your role there, for example trustee or secretary.
**Show:** Type a short demo description: "I am the secretary of the Masjid Al-Falah committee."

#### [5.3] Supporting documents
**Say:** Tap **Upload Supporting Documents** to add your proof. PDF, Word and photo files work. Add more than one if you need to.
**Show:** Click "Upload Supporting Documents"; choose `board-letter.pdf`. It appears in the list with a remove button.

#### [5.4] Save
**Say:** Tap **Save** to send your claim. When a message confirms it, tap **OK**.
**Show:** Click "Save". The confirmation message appears; click "OK". You're back on the Masjid Finder.

### 6. What happens next
#### [6.1] Ad-Din checks your claim
**Say:** Ad-Din's team checks your claim and documents. When they approve or reject it, you get an email and a push notification. Then they connect you with the current administrators.
**Show:** Masjid Finder with Masjid Al-Falah selected. Overlay a three-step card: your claim, Ad-Din checks it, an administrator adds you.

#### [6.2]
**Say:** When they agree, a current administrator adds you as an admin. Make the masjid your home masjid, and its admin menus appear for you.
**Show:** Quick cut: the sidebar with the Masjid admin items for this account, with Masjid Al-Falah as its home masjid.

### 7. Next
#### [7.1] Close
**Say:** To see how administrators add each other, watch video 03.3, Add admins, staff and volunteers to a masjid. Registering a new organisation instead? Start with video 01.1.
**Show:** End card with two tiles: "03.3 Add admins, staff and volunteers to a masjid" and "01.1 Register a masjid, madrasah, or both".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · critic · 5 changes: [1.1] second-person opening, [4.2]/[4.3] idioms removed ("worth reading", "in charge", "puts you in touch"), [6.1] adds the approve/reject email and push (validator fact), [7.1] end tile by number
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes

---
id: "01.3"
title: Claim admin of a masjid that’s already listed
target: 4:30
prereq:
  - "00.4"
status: scripted
flags:
  - The claim page needs a home masjid; without one, the claim link silently returns to the home page, even when claiming a madrasah
  - "The file check is reversed: files under 10 KB are refused with a \"more than 10 MB\" message and large files pass; the demo document must be over 10 KB, and the script states no size limit"
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
- Why you'd claim; the All, Masjid and Madrasah tabs; unfollowing; the guide's two ways the current admins can give you rights
- A good claim description; the file types; removing a file; the mandatory-fields message
- What happens next: Ad-Din's email and push, the current admins add you, Premium to set it up

## Demo data
- A signed-in member account with a home masjid already set (the shared demo masjid)
- A second, approved masjid nearby, "Masjid Al-Falah", run by another admin, with prayer times, phone and email; the member does not follow it yet
- A demo file `board-letter.pdf` (over 10 KB) on the recording machine
- The claim call mocked to succeed with "Successfully Added Claim"
- The nearby list also holds a demo madrasah (Riverbend Quran Academy), so the Madrasah tab in [2.2a] shows a result
- For [5.4a]: one take of Save with the organisation chosen and the description empty, so the "Please fill all the mandatory fields." message shows

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Before you start
#### [1.1] Opening
**Say:** Is your masjid already on Ad-Din, but run by someone else? In this video you'll ask Ad-Din to make you an admin. This request is called a claim. The same steps work for a madrasah.
**Show:** Title card: "Claim admin of a masjid that’s already listed".

#### [1.1a] When to claim
**Say:** For example, a former committee member registered the masjid, and has since moved away. Or your new committee takes over. Instead of registering the masjid a second time, you claim it.
**Show:** Card: "Already on Ad-Din, run by someone else → claim it · Not on Ad-Din → register it (01.1)".

#### [1.2]
**Say:** You'll need your Ad-Din account with a home masjid chosen, and official documents that show you represent the organisation.
**Show:** Opening card from You'll need.

### 2. Find the masjid
#### [2.1] Masjid Finder
**Say:** In the sidebar, open **Masjid**, then **Masjid Finder**. You'll see a map and a list of places near you.
**Show:** Sidebar → Masjid → Masjid Finder. The map with pins and the "Nearby Masjid / Madrasah" list.

#### [2.2]
**Say:** Search for your masjid by name or area. On its card, tap **View details**.
**Show:** Type "Al-Falah" in the search box and press Enter. On the "Masjid Al-Falah" card, click "View details"; the details panel opens.

#### [2.2a] Masjid or madrasah
**Say:** Use the tabs above the list to show **All**, only a **Masjid**, or only a **Madrasah**. To claim a madrasah, pick the **Madrasah** tab.
**Show:** Click the "Madrasah" tab; the list changes. Click "All" again, then the Masjid Al-Falah card is back in view.

### 3. Follow it first
#### [3.1] Follow
**Say:** You can only claim an organisation that you follow or that is your home. So tap **Follow**. The button changes to **Following**.
**Show:** Click "Follow"; it turns to "Following". Zoom on the button.

#### [3.1a]
**Say:** Following also keeps the masjid in your followed list. If you change your mind later, tap **Following** to stop following it.
**Show:** Spotlight the "Following" button; don't click.

### 4. Open the claim page
#### [4.1] Claim Admin Role
**Say:** At the bottom of the details, tap **Claim Admin Role of the organizations**.
**Show:** Scroll the details panel past the prayer times. Click "Claim Admin Role of the organizations".

#### [4.2] How claiming works
**Say:** The **Claim the Admin Role** page opens. **How claiming an admin role works** explains the rules. Read it once before you start.
**Show:** The claim page with the guide open on the left. Spotlight the guide heading.

#### [4.3]
**Say:** In short: if people disagree about who runs the organisation, Ad-Din doesn't decide between them. It checks your documents, then connects you with the current admins, who can give you admin rights.
**Show:** Slow scroll through the guide text. Spotlight the second and third paragraphs.
**Caption:** If people disagree about who runs it, Ad-Din doesn't decide. It checks your documents and connects you with the current admins, who can give you admin rights.

#### [4.3a] Two ways to get admin rights
**Say:** One of the current admins can then add you as an admin. Or they can ask Ad-Din support, from their own email on file, to do it, giving your username and email.
**Show:** Spotlight the end of the second paragraph of the guide.
**Caption:** A current admin can add you, or ask Ad-Din support from their email on file, giving your username and email.

#### [4.4]
**Say:** So before you send a claim, make sure your own profile details are up to date, especially your name and email.
**Show:** Spotlight "first ensure your profile details are all up to date" in the guide.

### 5. Fill in the claim
#### [5.1] Choose the organisation
**Say:** Under **Select an Organisation**, choose the masjid. The list shows the organisations you follow or belong to.
**Show:** Open the "Select an Organisation" list; pick "Masjid Al-Falah".

#### [5.2] Claim Description
**Say:** In **Claim Description**, say who you are and your role there, for example trustee or secretary.
**Show:** Type a short demo description: "I am the secretary of the Masjid Al-Falah committee."

#### [5.2a] A good description
**Say:** A clear description helps. Say which committee you belong to, for how long, and what your documents show. Avoid a single line such as "I am the admin", which gives Ad-Din nothing to check.
**Show:** Extend the demo text: "I have been on the committee for three years. The attached letter from the board names me as secretary." Zoom on the full text.

#### [5.3] Supporting documents
**Say:** Under **Files**, tap **Upload Supporting Documents** to add your proof. PDF, Word, JPG and PNG files work. Add more than one if you need to.
**Show:** Click "Upload Supporting Documents"; choose `board-letter.pdf`. It appears in the list with a remove button.

#### [5.3a]
**Say:** Good proof is an official document, such as a letter from the board that names you. If you add the wrong file, tap the cross next to it to remove it.
**Show:** Spotlight the file row and its close (×) button; don't remove it.

#### [5.4] Save
**Say:** Tap **Save** to send your claim. When a message confirms it, tap **OK**.
**Show:** Click "Save". The confirmation message appears; click "OK". You're back on the Masjid Finder.

#### [5.4a] If something is missing
**Say:** If you tap **Save** without a description, Ad-Din asks you to fill in the mandatory fields. Always choose the organisation first, too.
**Show:** Card with the message "Please fill all the mandatory fields." over the form with Masjid Al-Falah chosen and the description empty (taken before the main take).

### 6. What happens next
#### [6.1] Ad-Din checks your claim
**Say:** Ad-Din's team checks your claim and documents. When Ad-Din approves or rejects it, you get an email and a push notification. If it's approved, Ad-Din connects you with the current admins.
**Show:** Masjid Finder with Masjid Al-Falah selected. Overlay a three-step card: your claim, Ad-Din checks it, an administrator adds you.

#### [6.2]
**Say:** When the current admins agree, one of them adds you as an admin. Then make the masjid your home masjid with **Change** on your profile, as in video 00.4, and its admin menus appear.
**Show:** Profile → User Profile → Home & Followed Orgs: spotlight "Change" next to Home Masjid. Quick cut: the sidebar with the Masjid admin items for this account, with Masjid Al-Falah as its home masjid.

#### [6.2a] Premium to set it up
**Say:** Some admin pages, such as a madrasah's, need Ad-Din Premium on your own account. Video 02.1 explains how plans work.
**Show:** Card: "Madrasah admin pages → Ad-Din Premium (02.1)".

### 7. Next
#### [7.1] Close
**Say:** To see how admins add each other, watch video 03.3, Add admins, staff and volunteers to a masjid. If you're registering a new organisation instead, start with video 01.1.
**Show:** End card with two tiles: "03.3 Add admins, staff and volunteers to a masjid" and "01.1 Register a masjid, madrasah, or both".

## Review log
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 2:26 → 4:00 narration, 8 scenes added: [1.1a] when to claim, [2.2a] All / Masjid / Madrasah tabs, [3.1a] unfollowing, [4.3a] the two ways current admins give rights, [5.2a] a good description, [5.3a] good proof and removing a file, [5.4a] mandatory-fields message, [6.2a] Premium for madrasah admin pages; [4.4] name and email, [5.3] Files and file types, [7.1] no elliptical question
- 2026-11-06 · panel (user, director, writer, PM, PO) · 8 changes: [1.1] explains "claim", [1.2] asks for official documents as the claim guide does (no "letter from the board"), [2.1] "sidebar", not "menu", [3.1] complete sentence, [4.3] plain words for "disputes", Say and Caption match, "admins", [6.1]/[6.2] clear who does what (no "they" for two groups), [6.2] says and shows how to make it your home masjid, [7.1] "admins"
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · critic · 5 changes: [1.1] second-person opening, [4.2]/[4.3] idioms removed ("worth reading", "in charge", "puts you in touch"), [6.1] adds the approve/reject email and push (validator fact), [7.1] end tile by number
- 2026-11-03 · validator · checked against master d36d69ed8 · no changes

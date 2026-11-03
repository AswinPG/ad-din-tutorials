---
id: "00.3"
title: Log in and reset a forgotten password
target: 3:00
prereq:
  - "00.2"
status: scripted
flags:
  - An expired or wrong reset link opens a blank error page (HTTP 401) with no message or way back
  - The Reset Password page is a server page (AdDin.Web Pages/Public/ResetPassword), not part of the Angular app; the mocked demo world needs a copy of it
---

# 00.3 Log in and reset a forgotten password

## Goal
Log in to Ad-Din on the web or in the app, and set a new password from the email link if you forget yours.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->

## Covers
- Login, “Forgot Password ?”, the email link, the Reset Password page

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo account `yusuf_rahman` with a demo email address; demo password `Masjid-2026!` typed masked, never a real password
- reCAPTCHA off in the demo environment (or blurred if shown)
- A wrong-password attempt that returns the server message "Invalid Credentials. Please check and try again!"
- A mocked inbox showing the Ad-Din "Reset Password" email with one username and its reset link (no real email address on screen)
- The Reset Password page opened from that link with a valid demo verification code, then the Success page
- New demo password `Hifz-Class-2026` (or similar) that meets every rule, typed masked
- After login the demo lands on the dashboard (web) and the home screen (app phone frame)

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Getting back in
#### [1.1] Opening
**Say:** Already have an Ad-Din account? In this video you'll log in, and set a new password if you forget yours.
**Show:** Title card: "Log in and reset a forgotten password".

#### [1.2]
**Say:** Have your username ready; you log in with your username, not your email. To reset a password, you'll also need to open your email inbox.
**Show:** Opening card from You'll need.

### 2. Log in
#### [2.1] The login page
**Say:** Go to the Ad-Din login page, or open the Ad-Din app. The **Login** form asks for two things: your **Username** and your **Password**.
**Show:** Web login page; spotlight the Username and Password fields. Phone frame beside it with the app's "Welcome back" header.

#### [2.2]
**Say:** Type your username and your password. Tap the eye icon if you want to check what you typed.
**Show:** Type "yusuf_rahman" in Username, type the demo password (masked). Click the eye icon, then hide the password again.

#### [2.3] Wrong details
**Say:** Tap **Login**. If the username or password is wrong, a message tells you to check and try again.
**Show:** First attempt with a wrong password: the "Invalid Credentials" message appears. Retype the correct password.

#### [2.4] Shortcuts
**Say:** Under the form, **What brings you here?** works here too. Pick a card, such as **Report an Absence** if you're a parent, and the button becomes **Login & Continue**, taking you straight there.
**Show:** Scroll to "What brings you here?". Click "Report an Absence": the button reads "Login & Continue". Click the card again to unselect.
**Caption:** Pick a card under What brings you here? that fits your role, and Ad-Din takes you straight there after you log in.

#### [2.5] You're in
**Say:** Tap **Login**. On the web you arrive at your dashboard. In the app you arrive at your home screen.
**Show:** Click "Login": loading spinner, then the dashboard. Cut to the app home screen in the phone frame.

### 3. Forgot your password
#### [3.1] Ask for a link
**Say:** If you can't remember your password, go to the login page. Under the password box, tap **Forgot Password ?**
**Show:** Back on the login page (logged out). Spotlight and click "Forgot Password ?"; the pop-up opens.

#### [3.2]
**Say:** Type your **Email or Username**, then tap **Reset Password**. Ad-Din tells you an email is on its way.
**Show:** Type "yusuf_rahman" in "Email or Username". Click "Reset Password": the message "An email containing the steps to recover your password is sent." appears and the pop-up closes.

#### [3.3]
**Say:** If more than one account uses the same email, for example a parent and a child, the email lists each username with its own link.
**Show:** Card: one email, two usernames, two links. Use demo names only.

### 4. Open the email
#### [4.1] The reset email
**Say:** Open the email from Ad-Din called Reset Password, and tap the link for your username. The link works for two hours, so use it soon.
**Show:** Mocked inbox: open the "Reset Password" email. Zoom on "Username: yusuf_rahman" and click its link.

#### [4.2]
**Say:** If two hours have passed, go back to the login page and ask for a new link.
**Show:** Quick cut back to "Forgot Password ?" on the login page. Don't show the expired-link page.

### 5. Choose a new password
#### [5.1] Reset Password page
**Say:** The **Reset Password** page opens. Type your new password in **New Password**, then type it again in **Repeat Password**.
**Show:** The Reset Password page with the Ad-Din logo. Type the new demo password in both boxes (masked).

#### [5.2]
**Say:** The rules are the same as when you signed up: at least ten characters, with an uppercase letter, a lowercase letter, a number and a special character. Tap **Password tips** to see them.
**Show:** Click "Password tips": the rules panel opens. Close it.
**Caption:** At least 10 characters, with an uppercase and lowercase letter, a number and a special character. Tap Password tips to see the rules.

#### [5.3]
**Say:** When both boxes match and every rule is met, you'll see **Passwords matching**. Tap **Reset Password**.
**Show:** The green "Passwords matching" message; the button turns active. Click "Reset Password".

### 6. Done
#### [6.1] Success
**Say:** **Success**. Your password has been updated. Tap **Go to Portal** and log in with your new password.
**Show:** The Success page: "Your password has been updated." Click "Go to Portal"; the login page opens.

#### [6.2] Next
**Say:** Next, choose your home masjid and madrasah in video 00.4. To change your password while you're logged in, see video 00.5, Your profile, notifications and GUID.
**Show:** End card with two tiles: "00.4 Choose your home masjid and madrasah" and "00.5 Your profile, notifications and GUID".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · critic · 3 changes: [1.1] second-person opening, [3.1] no elliptical question, [6.2] end tiles by number
- 2026-11-03 · validator · checked against master d36d69ed8 · 2 fixes: [1.2] login takes the username only (the server never matches an email); [2.4] a card only jumps to its page when your role fits (Report an Absence is for parents), otherwise the normal landing page opens

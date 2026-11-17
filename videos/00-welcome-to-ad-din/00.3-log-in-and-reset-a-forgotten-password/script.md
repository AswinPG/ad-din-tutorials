---
id: "00.3"
title: Log in and reset a forgotten password
target: 6:00
prereq:
  - "00.2"
status: client-approved
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
- Enter to log in, the required-field messages, the security check, the other What brings you here? cards and who they work for
- Returning to the page you opened, logging out on a shared computer
- Forgotten username (type your email), the roles listed in the reset email, using the newest email
- The eye icons and Password tips rules on the Reset Password page, "Passwords don't match", the old password stops working

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo account `yusuf_rahman` with a demo email address; demo password `Masjid-2026!` typed masked, never a real password
- reCAPTCHA off in the demo environment (or blurred if shown)
- A wrong-password attempt that returns the server message "Invalid Credentials. Please check and try again!"
- A mocked inbox showing the Ad-Din "Reset Password" email with one username and its reset link (no real email address on screen)
- The Reset Password page opened from that link with a valid demo verification code, then the Success page
- New demo password `Hifz-Class-2026` (or similar) that meets every rule, typed masked
- After login the demo lands on the dashboard (web) and the home screen (app phone frame)
- For [2.5a]: a logged-out visit to the Message inbox (`/message`), so the login page carries the redirect and login lands back on the inbox
- For [3.3a]: the same mocked email showing "Organization Roles:" under the username (for example Parent, Teacher)
- For [5.2a]: a mismatched repeat password, so "Passwords don't match" shows before it's fixed

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Getting back in
#### [1.1] Opening
**Say:** In this video you'll log in to your Ad-Din account, and set a new password if you forget yours.
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


#### [2.2a] Login with Enter
**Say:** You can tap **Login**, or press Enter in either box. If a box is empty, Ad-Din shows **Username is required.** or **Password is required.** under it. On the live site, also tick the box that checks you're not a robot.
**Show:** Clear the Password box and click "Login": "Password is required." shows under it. Retype the password. The security check is off in the demo world; show a blurred still of it beside the form.
**Caption:** Tap Login or press Enter. Empty boxes show a message. On the live site, also tick the box that checks you're not a robot.
#### [2.3] Wrong details
**Say:** Tap **Login**. If the username or password is wrong, a message tells you to check and try again.
**Show:** First attempt with a wrong password: the "Invalid Credentials" message appears. Retype the correct password.


#### [2.3a]
**Say:** The same message appears if the username doesn't exist, so check its spelling first. Remember, it's your username, not your email address.
**Show:** Spotlight the Username box with "yusuf_rahman" while the "Invalid Credentials" message is still showing.
#### [2.4] Shortcuts
**Say:** Under the form, **What brings you here?** works here too. Pick a card, such as **Report an Absence** if you're a parent, and the button becomes **Login & Continue**, taking you straight there.
**Show:** Scroll to "What brings you here?". Click "Report an Absence": the button reads "Login & Continue". Click the card again to unselect.
**Caption:** Pick a card under What brings you here? that fits your role, and Ad-Din takes you straight there after you log in.


#### [2.4a] Other shortcuts
**Say:** **My Schoolwork** opens homework and marks for parents and students. **Track My Hifz** opens Hifz progress for parents, students, teachers and admins. If the card doesn't fit your role, you simply arrive at your usual page.
**Show:** Spotlight the "My Schoolwork" card, then "Track My Hifz". Don't select them.
#### [2.5] You're in
**Say:** Tap **Login**. On the web you arrive at your dashboard. In the app you arrive at your home screen.
**Show:** Click "Login": loading spinner, then the dashboard. Cut to the app home screen in the phone frame.


#### [2.5a] Back where you were
**Say:** If you opened an Ad-Din link while you were logged out, for example to your messages, Ad-Din takes you back to that page after you log in.
**Show:** Separate take: logged out, open the Message inbox link; the login page opens. Log in: the Message inbox opens instead of the dashboard.

#### [2.6] Log out
**Say:** On a shared computer, always log out when you finish. Tap **Logout** at the top right, or at the bottom of the sidebar. In the app, open the menu and tap **Logout** at the bottom.
**Show:** Spotlight "Logout" in the top bar, then at the bottom of the sidebar. Phone frame: open the menu drawer, spotlight "Logout". Don't click it yet.
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


#### [3.3a] Which account
**Say:** Under each username, the email also lists that account's roles, such as Parent or Teacher, so you can tell the accounts apart.
**Show:** The mocked email card: zoom on "Organization Roles:" under each username.

#### [3.3b] Forgot your username
**Say:** If you've forgotten your username, type your email address instead. The email Ad-Din sends shows your username. If Ad-Din can't find what you typed, it tells you, so check the spelling.
**Show:** Open "Forgot Password ?" again; type the demo email address in "Email or Username" and close the pop-up with its cross without sending.
### 4. Open the email
#### [4.1] The reset email
**Say:** Open the email from Ad-Din called Reset Password, and tap the link for your username. The link works for two hours, so use it soon.
**Show:** Mocked inbox: open the "Reset Password" email. Zoom on "Username: yusuf_rahman" and click its link.

#### [4.2]
**Say:** If two hours have passed, go back to the login page and ask for a new link.
**Show:** Quick cut back to "Forgot Password ?" on the login page. Don't show the expired-link page.


#### [4.2a]
**Say:** If you asked more than once, use the link in the newest email. Ad-Din only keeps your latest request.
**Show:** Mocked inbox with two "Reset Password" emails; spotlight the newest one at the top.
### 5. Choose a new password
#### [5.1] Reset Password page
**Say:** The **Reset Password** page opens. Type your new password in **New Password**, then type it again in **Repeat Password**.
**Show:** The Reset Password page with the Ad-Din logo. Type the new demo password in both boxes (masked).


#### [5.1a]
**Say:** Tap the eye icon in a box to see what you typed, and tap it again to hide it.
**Show:** Click the eye icon in New Password: the text shows. Click it again: masked.
#### [5.2]
**Say:** The rules are the same as when you signed up: at least ten characters, with an uppercase letter, a lowercase letter, a number and a special character. Tap **Password tips** to see them.
**Show:** Click "Password tips": the rules panel opens. Close it.
**Caption:** At least 10 characters, with an uppercase and lowercase letter, a number and a special character. Tap Password tips to see the rules.


#### [5.2a]
**Say:** The panel also says to use English letters only, with no spaces. While the two boxes differ, the page shows **Passwords don't match**, and the button stays off.
**Show:** With the rules panel open, spotlight "English letters only, and no spaces." Close it. Type a different second password: "Passwords don't match" in red, the button greyed. Fix it.
#### [5.3]
**Say:** When both boxes match and every rule is met, you'll see **Passwords matching**. Tap **Reset Password**.
**Show:** The green "Passwords matching" message; the button turns active. Click "Reset Password".

### 6. Done
#### [6.1] Success
**Say:** **Success**. Your password has been updated. Tap **Go to Portal** and log in with your new password.
**Show:** The Success page: "Your password has been updated." Click "Go to Portal"; the login page opens.


#### [6.1a]
**Say:** From now on, your old password no longer works, on the web or in the app. Use the new one everywhere you log in.
**Show:** Login page: type "yusuf_rahman" and the new demo password (masked); click "Login": the dashboard opens.
#### [6.2] Next
**Say:** Next, choose your home masjid and madrasah in video 00.4. To change your password while you're logged in, see video 00.5, Your profile, notifications and GUID.
**Show:** End card with two tiles: "00.4 Choose your home masjid and madrasah" and "00.5 Your profile, notifications and GUID".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 2:35 → 4:40 narration, 12 scenes added: [2.2a] Enter and the required-field messages, security check, [2.3a] same message for an unknown username, [2.4a] My Schoolwork and Track My Hifz, [2.5a] back to the page you opened, [2.6] Logout on a shared computer, [3.3a] roles in the reset email, [3.3b] forgotten username, [4.2a] use the newest email, [5.1a] eye icons, [5.2a] English letters and "Passwords don't match", [6.1a] the old password stops working; [1.1] no elliptical question
- 2026-11-03 · critic · 3 changes: [1.1] second-person opening, [3.1] no elliptical question, [6.2] end tiles by number
- 2026-11-03 · validator · checked against master d36d69ed8 · 2 fixes: [1.2] login takes the username only (the server never matches an email); [2.4] a card only jumps to its page when your role fits (Report an Absence is for parents), otherwise the normal landing page opens

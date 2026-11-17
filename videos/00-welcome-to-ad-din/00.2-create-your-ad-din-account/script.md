---
id: "00.2"
title: Create your Ad-Din account
target: 6:00
prereq: []
status: client-approved
flags:
  - Terms and Privacy links on the sign-up page go nowhere
---

# 00.2 Create your Ad-Din account

## Goal
Create an Ad-Din account on the web or in the app and arrive signed in, ready to choose your home masjid and madrasah.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->
- An email address
- A web browser or the Ad-Din app

## Covers
- Sign Up: username and password rules, Terms box, “What brings you here?” cards
- email verification isn’t needed to log in
- Arriving from a madrasah's enrolment link (Enrolling at), Login here to switch back
- Username tips (one account per person, a family can share an email), password tips, the match message
- The security check, the messages that say what to fix
- The verification email: link valid three days, the Verified page

## Demo data
- A fresh username that is free (for example `yusuf_rahman`) and one that is already taken (for example `admin`)
- Demo password `Masjid-2026!` typed off screen or masked; never a real password
- reCAPTCHA off in the demo environment (or blurred if shown)
- Sign-up lands on the finder; the demo stops there (choosing a home organisation is 00.4)
- For [2.1a]: the login page opened from Maple Grove Madrasah's enrolment link (`/login?redirect=/enrol/201`), so the left panel shows "Enrolling at" and the madrasah's name
- For [5.1a]: a still of the security check box, or the box blurred; it stays off in the demo environment
- For [5.3a]: a mocked inbox with the Ad-Din verification email for the demo address (no subject zoom; the template lives in the database), and the Verified page ("Your email has been verified successfully.") rendered from AdDin.Web Pages/Public/Response

## Script

### 1. Before you start
#### [1.1] Opening
**Say:** Everyone uses Ad-Din with their own account: admins, teachers, parents, students and members of the community. Let's create yours.
**Show:** Title card: "Create your Ad-Din account".

#### [1.2]
**Say:** You'll need an email address. You can sign up on the web or in the Ad-Din app; the steps are the same.
**Show:** Opening card from You'll need. Phone frame of the app's "Create your account" header beside the web page.

### 2. Open the sign-up page
#### [2.1] Find Sign Up
**Say:** Go to the Ad-Din login page. Under the form, next to **Don't have an account?**, tap **Sign up here**.
**Show:** Login page. Spotlight "Don't have an account?" then click "Sign up here". The form title changes to "Sign Up".


#### [2.1a] From an enrolment link
**Say:** If your madrasah sent you a link to enrol your child, the page opens on **Sign Up** with **Enrolling at** and the madrasah's name. After you sign up, Ad-Din takes you straight to its enrolment form.
**Show:** Separate take: open Maple Grove Madrasah's enrolment link. The left panel shows "Enrolling at" and "Maple Grove Madrasah". Spotlight it, then return to the normal sign-up page.
#### [2.2]
**Say:** The **Sign Up** form asks for four things: a username, your email, a password, and the same password again.
**Show:** Spotlight the four fields: Username, Email, Password, Confirm Password.


#### [2.2a]
**Say:** If you already have an account, tap **Login here** under the form to switch back to the login form.
**Show:** Spotlight "Already have an account?" and "Login here". Don't click it.
### 3. Fill in your details
#### [3.1] Username
**Say:** Pick a **Username**. Use letters, numbers, a dash or an underscore, with no spaces.
**Show:** Type "yusuf_rahman" in Username.
**Caption:** Pick a username: letters, numbers, dash or underscore, no spaces.

#### [3.2]
**Say:** Ad-Din checks it as you type. A green tick means it's yours. A red cross means someone already has it, so try another.
**Show:** Type "admin": red cross. Clear it, type "yusuf_rahman": spinner, then green tick. Zoom on the icon.


#### [3.2a] Username tips
**Say:** You log in with your username, not your email, so pick one you'll remember. Each person needs their own account. A parent and a child can use the same email address, but each needs a different username.
**Show:** Keep "yusuf_rahman" with its green tick. Card beside it: "One account per person. One email can serve a family."
**Caption:** You log in with your username, so pick one you'll remember. Each person needs their own account; a family can share one email.
#### [3.3] Email
**Say:** Enter your **Email**. This is where Ad-Din sends a link if you ever forget your password.
**Show:** Type the demo email in Email.

#### [3.4] Password
**Say:** Now a **Password** of at least ten characters, with an uppercase letter, a lowercase letter, a number and a special character such as @ or #.
**Show:** Type the demo password; the field stays masked. Card beside it listing the four rules.
**Caption:** Password: 10+ characters, with an uppercase and lowercase letter, a number and a special character (like @ or #).


#### [3.4a] Password tips
**Say:** Use English letters only, and no spaces. The special character must be one of the common ones, such as @, #, $ or !. A short phrase with a number and a symbol is easy to remember and hard to guess.
**Show:** The card of rules stays on screen; add a line "English letters, no spaces". Example on the card: "Masjid-2026!" (the demo password, never a real one).
#### [3.5]
**Say:** Tap the eye icon to check what you typed. If the password misses a rule, Ad-Din tells you which one when you sign up.
**Show:** Click the eye icon: the password shows, then hide it again.

#### [3.6] Confirm
**Say:** Type it again in **Confirm Password**. Both boxes must match.
**Show:** Type the same password in Confirm Password.


#### [3.6a]
**Say:** If the two passwords are different, Ad-Din tells you **The passwords should match.** when you tap **Sign Up**, so type them again.
**Show:** Quick cut: a mismatched second password, click "Sign Up": the message "The passwords should match." appears. Retype it to match.
### 4. Tell Ad-Din why you're here
#### [4.1] What brings you here?
**Say:** Under the form, **What brings you here?** offers four shortcuts. Three of them are for people who already have an account, so tapping one switches to the login form.
**Show:** Scroll to "What brings you here?". Spotlight the four cards: Enroll a Child, Report an Absence, My Schoolwork, Track My Hifz. Don't click the last three (they flip the card to the login form).

#### [4.2]
**Say:** When you're new, the one that fits is **Enroll a Child**. The button changes to **Sign Up & Continue**, and after you sign up Ad-Din takes you to your madrasah's enrolment. If you're not enrolling a child, leave it unselected.
**Show:** Click "Enroll a Child": it shows "Selected" and the button reads "Sign Up & Continue". Click it again to unselect for this demo; the button returns to "Sign Up".
**Caption:** New parents can pick Enroll a Child. Otherwise, leave it unselected.


#### [4.2a]
**Say:** While a card is selected, a line beside the heading says Ad-Din will take you straight there after you sign up. Tap the card again to unselect it.
**Show:** Click "Enroll a Child" again for a moment: spotlight the line "After you sign up we'll take you straight there". Click it again to unselect.
### 5. Agree and sign up
#### [5.1] Terms
**Say:** Tick the box to agree to the Ad-Din **Terms of Service** and **Privacy Policy**.
**Show:** Tick the checkbox. Keep the shot wide; don't click or zoom on the two links.


#### [5.1a] Security check
**Say:** On the live site you may also see a box that checks you're not a robot. Tick it before you sign up.
**Show:** Still of the security check box beside the form (blurred if needed). It's off in the demo world, so don't record it live.
#### [5.2] Sign up
**Say:** Tap **Sign Up**. If anything's missing, a message tells you what to fix.
**Show:** Click "Sign Up". Loading spinner.


#### [5.2a] Fix and try again
**Say:** For example, if you forget the box, Ad-Din shows **Please agree to the terms and privacy policy.** Fix what it names and tap **Sign Up** again.
**Show:** Quick cut: untick the box and click "Sign Up": the message "Please agree to the terms and privacy policy." appears under it. Tick it again.
#### [5.3] You're in
**Say:** That's it. You're signed in straight away, with no email to confirm first. Ad-Din opens the page where you choose your home masjid and madrasah.
**Show:** The finder page opens. Spotlight its Select your Masjid list.


#### [5.3a] Verify your email
**Say:** Ad-Din also sends you an email with a link to verify your address. Open it within three days and tap the link; the page says **Verified**. You can still use Ad-Din before you do.
**Show:** Mocked inbox: the Ad-Din verification email; click its link. The Verified page: "Your email has been verified successfully." Spotlight "Verified".

#### [5.3b]
**Say:** If the link has expired, you can send a new one from your profile, as video 00.5 shows. Verifying confirms the address is right, and that address is where your password reset links go.
**Show:** Quick cut to Profile → Preferences: spotlight the "Verify" button under "Update e-mail". Don't click it.
### 6. Next
#### [6.1] Close
**Say:** Next, video 00.4: choose your home masjid and madrasah, so Ad-Din shows the right prayer times and news. If you ever forget your password, video 00.3 shows how to reset it.
**Show:** End card with two tiles: "00.4 Choose your home masjid and madrasah" and "00.3 Log in and reset a forgotten password".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 2:23 → 4:26 narration, 10 scenes added: [2.1a] arriving from an enrolment link (Enrolling at), [2.2a] Login here, [3.2a] username tips (one account per person, family email), [3.4a] password tips, [3.6a] The passwords should match., [4.2a] the "straight there" line and unselecting, [5.1a] security check, [5.2a] messages that say what to fix, [5.3a]/[5.3b] verification email, three-day link, resend from 00.5
- 2026-11-03 · manager · decisions via chat · 'Sign-up and register page links' decided (wide shots, bug stays logged): checked, [5.1] keeps the shot wide and no scene zooms or clicks the Terms or Privacy links; no change
- 2026-11-03 · critic · 3 changes: [1.2] no time promise, [5.3] Say names the page that opens (no idle hold), [6.1] end tiles by number
- 2026-11-03 · validator · checked against master d36d69ed8 · 1 fix: [4.1]/[4.2] only Enroll a Child works for a new account; the other three cards switch the page to the login form, and Enroll a Child leads to the finder's ID tab then enrolment

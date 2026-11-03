---
id: "00.7"
title: "Ad-Din on your phone: notifications and location"
target: 4:00
prereq:
  - "00.2"
status: scripted
platform: App
flags:
  - "Covers says 'Turn on', but the reminder sheet's buttons read 'Allow' and 'Allow precise' ('Turn on' only appears when the phone's location services are switched off). The script uses the real labels."
  - "'View' is not on the in-app banner: the banner itself is tapped. 'View' only appears on Android's fallback message bar, shown when a native page (such as the Qiblah compass) is on top or the web part is older. Not scripted."
  - "A real push can't be received in the mocked demo world. The recorder triggers the in-app banner by dispatching a window 'addin:push' CustomEvent ({ title, body, action: 'message' }) while signed in; the banner sets window.__adDinPushBanner itself when it mounts."
  - "The reminder sheet, the precise sheet and Preferences › This device only render inside the app shell. The demo world must stub window.AdDinBridge with getPermissions / requestPermission returning the states each scene needs (and seed localStorage 'adDinPermissionReminder' with an old firstSeen, because the reminder never shows on the first launch)."
  - "The phone's own permission dialogs and the lock-screen notification in [6.3] are operating-system screens, not Ad-Din. Use a stylised graphic or a real-device capture with no personal data."
  - "The precise location sheet needs app version 2.0.52 or newer; older apps report an approximate grant as not allowed."
  - "App gap: a message push carries only action 'message' (no route), and the shell routes a tapped background notification by route only, so tapping it opens the app where it was (home on a cold start), not the inbox. The in-app banner and Android's 'View' bar do open the inbox. [6.3] scripts what the code does; revisit if the shell or server adds the route."
---

# 00.7 Ad-Din on your phone: notifications and location

## Goal
Allow notifications and precise location for Ad-Din on your phone, check them any time in Preferences, and know what happens when a notification arrives.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->
- The Ad-Din app on your phone, signed in

## Covers
- Permission reminder sheet: Allow / Allow precise, Remind me later, Don't remind me again
- Preferences › This device
- Precise vs approximate location sheet
- Push banner while the app is open (tap it to open; "View" exists only on Android's native fallback bar)
- Tapping a notification

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo member account signed in on the app (phone frame), home masjid "Al-Noor Masjid"; not a staff member, so the precise sheet shows two reasons
- Stubbed app shell (window.AdDinBridge) whose permission state the recorder sets per scene: chapters 2–3 start with notifications and location "prompt"; chapter 4 with location "granted" + "approximate"; chapter 5 with notifications "granted" and location "blocked"
- localStorage "adDinPermissionReminder" with firstSeen a week ago and no lastShown, so the reminder appears four seconds after the home screen loads
- One push for the banner: title "Al-Noor Masjid", body "Jumu'ah khutbah starts at 1:15 pm this Friday.", action "message"; a matching message in the inbox so the tap lands on it
- A second and third push sent while the first is up, for the "+2 more" shot

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Your phone, your choice
#### [1.1] Opening
**Say:** The Ad-Din app can tell you when your masjid or madrasah sends news, and use your location for prayer times and the nearest masjid. Let's set both up the way you want.
**Show:** Title card: "Ad-Din on your phone: notifications and location". Phone frame on the app home screen.

#### [1.2]
**Say:** You'll need the Ad-Din app, signed in. Everything here happens only in the app, never on the website.
**Show:** Opening card from You'll need.

### 2. The reminder
#### [2.1] The sheet
**Say:** If notifications or location are off, Ad-Din shows a gentle reminder a few seconds after you open the app. It never appears the very first time, and at most every few days.
**Show:** App home. After four seconds the sheet rises: "Stay in the loop with your masjid & madrasah". Hold on it.
**Caption:** If notifications or location are off, a reminder appears a few seconds after you open the app. Never the first time, and at most every few days.

#### [2.2] Two permissions
**Say:** It asks for two things. **Push notifications** bring class updates, announcements and messages. **Precise location** finds the masjid nearest you and sets the Qiblah and prayer times for exactly where you are.
**Show:** Spotlight the "Push notifications" row, then the "Precise location" row with its "Recommended" tag.

#### [2.3] Not now
**Say:** Busy right now? Tap **Remind me later** and it waits a week. Under **More options**, **Don't remind me again** stops it for good on this phone.
**Show:** Spotlight "Remind me later". Tap "More options": it opens with its note and "Don't remind me again". Spotlight it; don't tap either button.

### 3. Allow notifications and location
#### [3.1] Notifications
**Say:** Tap **Allow** next to **Push notifications**. Your phone asks if Ad-Din may send notifications. Choose allow, and the row turns green.
**Show:** Tap "Allow" on the Push notifications row. Stylised phone permission dialog; tap its allow button. The row shows a green tick.

#### [3.2] Precise location
**Say:** Now tap **Allow precise**. On your phone's screen, keep **Precise** switched on. The hint under the row tells you which button to look for.
**Show:** Spotlight the hint "On the next screen, keep Precise selected." Tap "Allow precise". Stylised phone location dialog with Precise selected; tap allow.

#### [3.3] All set
**Say:** When both are on, the sheet says **You're all set** and closes by itself.
**Show:** The sheet changes to "You're all set" with "Thanks! Ad-Din will keep you up to date." and slides away.

### 4. If you chose approximate
#### [4.1] Why precise
**Say:** If your phone shared only an approximate location, Ad-Din explains why that isn't enough. Approximate can be off by about three kilometres.
**Show:** Reset the stub to approximate and reopen the app. The "Turn on Precise location" sheet rises. Zoom on "about 3 km".

#### [4.2]
**Say:** The **Nearest masjid** might show up third or fourth, and the Qiblah and prayer times won't be set for your exact spot. Staff also see that **Staff attendance** check-in needs it.
**Show:** Spotlight the two reasons: "Nearest masjid" and "Qiblah & prayer times".
**Caption:** The nearest masjid might show up third or fourth, and Qiblah and prayer times won't match your exact spot. Staff check-in needs it too.

#### [4.3] Switch or keep
**Say:** **Keep approximate** closes it for now, and Ad-Din asks again next time. To fix it, tap **Switch to Precise** and follow the hint on the next screen. The sheet confirms **Precise location is on**.
**Show:** Spotlight "Keep approximate" without tapping. Tap "Switch to Precise"; stylised phone dialog; accept. The sheet shows "Precise location is on" and closes.

### 5. Check it any time
#### [5.1] This device
**Say:** To check later, tap the gear icon on the home screen and open **Preferences**. At the top, **This device** shows both permissions for this phone only.
**Show:** Tap the gear icon on the app home. Profile opens; tap "Preferences". Spotlight "This device" with its "Device specific" badge and "These apply to this phone only".

#### [5.2] What each row says
**Say:** Each row shows where it stands: **Allowed**, **Not allowed**, **Approximate only**, or **Blocked in Settings**. Tap a row to fix it.
**Show:** Stub state: notifications allowed, location blocked. Spotlight "Allowed" on Push notifications and "Blocked in Settings" on Precise location.

#### [5.3]
**Say:** If it's blocked, only your phone's settings can change it. Tap **Open Settings** and Ad-Din takes you straight there.
**Show:** Spotlight the hint under the location row, then tap "Open Settings". Cut before the phone's own settings page opens.

#### [5.4]
**Say:** The **Push notification** switch under **Notification preferences** is different: it's your account's choice, on every phone you use.
**Show:** Scroll down; spotlight "Notification preferences" and its "Push notification" switch. Don't toggle it.

### 6. When a notification arrives
#### [6.1] While the app is open
**Say:** If a notification arrives while you're using the app, it slides in at the top with who sent it and the message.
**Show:** Back on the app home. Trigger the demo push: the banner slides down with "Al-Noor Masjid", "now" and the message.

#### [6.2] Open or dismiss
**Say:** Tap it to open what it's about. Swipe it up or tap the cross to dismiss it. If several arrive at once, it counts the rest.
**Show:** Trigger two more pushes while the first is still up: the banner shows "+2 more". Tap the banner: the Message inbox opens with the Jumu'ah message at the top.

#### [6.3] While the app is closed
**Say:** When the app is closed, your phone shows the notification as usual. Tap it to open Ad-Din; new messages wait for you in your **Message** inbox.
**Show:** Stylised lock-screen notification from Ad-Din with the same text. Tap it: cut to the app opening on its home screen, then open the Message inbox with the Jumu'ah message at the top.

### 7. Done
#### [7.1] Result
**Say:** That's it. Ad-Din can now keep you up to date and find where you are, and you can change your mind any time in **Preferences**.
**Show:** Preferences › This device with both rows showing "Allowed".

#### [7.2] Next
**Say:** Next, see the rest of your profile and notification settings, or set up prayer times and the Qiblah for where you are.
**Show:** End card with two tiles: "00.5 Your profile, notifications and GUID" and "15.1 Prayer times, monthly timetable and Qiblah".

## Review log
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · validator · checked against master d36d69ed8 (+ Ad-DinMobileApp fix/ios-workload-version 6f756834b) · 2 fixes: [6.3] tapping a closed-app message notification opens the app, not the inbox (flag added); [6.2] banner tap opens the inbox list (not the message itself)

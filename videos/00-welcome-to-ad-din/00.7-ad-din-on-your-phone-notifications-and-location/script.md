---
id: "00.7"
title: "Ad-Din on your phone: notifications and location"
target: 6:30
prereq:
  - "00.2"
status: scripted
platform: App
flags:
  - "Covers says 'Turn on', but the reminder sheet's buttons read 'Allow' and 'Allow precise' ('Turn on' only appears when the phone's location services are switched off). The script uses the real labels."
  - "'View' is not on the in-app banner: the banner itself is tapped. 'View' only appears on Android's fallback message bar, shown when a native page (such as the Qiblah compass) is on top or the web part is older. Not scripted."
  - "A real push can't be received in the mocked demo world. The recorder triggers the in-app banner by dispatching a window 'addin:push' CustomEvent ({ title, body, action: 'message' }) while signed in; the banner sets window.__adDinPushBanner itself when it mounts."
  - "The reminder sheet, the precise sheet and Preferences › This device only render inside the app shell. The demo world must stub window.AdDinBridge with getPermissions / requestPermission returning the states each scene needs (and seed localStorage 'adDinPermissionReminder' with an old firstSeen, because the reminder never shows on the first launch)."
  - "The phone's own permission dialogs ([3.1], [3.2], [4.3]) and the lock-screen notification in [6.3] are operating-system screens, not Ad-Din. Decided 2026-11-03: capture them on a real device or an emulator, with no personal data on screen (no other notifications, contacts or account names)."
  - "The precise location sheet needs app version 2.0.52 or newer; older apps report an approximate grant as not allowed."
  - "App gap: a message push carries only action 'message' (no route), and the shell routes a tapped background notification by route only, so tapping it opens the app where it was (home on a cold start), not the inbox. The in-app banner and Android's 'View' bar do open the inbox. [6.3] scripts what the code does; revisit if the shell or server adds the route."
---

# 00.7 Ad-Din on your phone: notifications and location

## Goal
Allow notifications and precise location for Ad-Din on your phone, check them any time in Preferences, and know what happens when a notification arrives.

## You'll need
<!-- Shown on the opening card. Generated from prereq/plan/switch if left empty. -->
- The latest Ad-Din app on your phone, signed in

## Covers
- Permission reminder sheet: Allow / Allow precise, Remind me later, Don't remind me again
- Preferences › This device
- Precise vs approximate location sheet
- Push banner while the app is open (tap it to open; "View" exists only on Android's native fallback bar)
- Tapping a notification
- Closing the reminder without choosing; the staff line on the location row
- iPhone and Android hints; Location services are turned off on this phone (Turn on)
- Precise sheet: Allow Once on iPhone, Open Settings when the phone no longer asks, the Settings paths
- The banner hides by itself; the message stays in the inbox; the Push switch

## Demo data
<!-- Records the demo organisation must have for this video (classes, students, events...). -->
- Demo member account signed in on the app (phone frame), home masjid "Maple Grove Masjid"; not a staff member, so the precise sheet shows two reasons
- Stubbed app shell (window.AdDinBridge) whose permission state the recorder sets per scene: chapters 2–3 start with notifications and location "prompt"; chapter 4 with location "granted" + "approximate"; chapter 5 with notifications "granted" and location "blocked"
- localStorage "adDinPermissionReminder" with firstSeen a week ago and no lastShown, so the reminder appears four seconds after the home screen loads
- A real Android or iOS device, or an emulator, for the phone's own permission dialogs ([3.1], [3.2], [4.3]) and the lock-screen notification ([6.3]); Ad-Din installed and signed in with the demo member, nothing personal on screen
- One push for the banner: title "Maple Grove Masjid", body "Jumu'ah khutbah starts at 1:15 pm this Friday.", action "message"; a matching message in the inbox so the tap lands on it
- A second and third push sent while the first is up, for the "+2 more" shot
- For [3.2a]: the same reminder with an iPhone user agent, so the hint reads "On the next screen, keep Precise: On."
- For [3.3a]: stub state location "granted" with location services off, on Preferences › This device, so the "Location services are turned off on this phone." note and "Turn on" show
- For [4.3a]: stub state approximate after the phone has stopped offering its dialog (openedSettings), so the button reads "Open Settings" with the Settings hint

## Script
<!--
Chapters are "### 1. Title" headings, scenes are "#### [1.1]" headings with stable IDs.
Each scene has **Say:** (English narration, one or two sentences) and **Show:** (what happens on screen).
Optional **Caption:** overrides the subtitle text. Translations in i18n/<lang>.md reuse the same scene IDs.
See docs/SCRIPT-FORMAT.md.
-->

### 1. Your phone, your choice
#### [1.1] Opening
**Say:** The Ad-Din app can tell you when your masjid or madrasah sends news, and use your location for prayer times and the nearest masjid. In this video you'll choose what to allow.
**Show:** Title card: "Ad-Din on your phone: notifications and location". Phone frame on the app home screen.

#### [1.2]
**Say:** You'll need the latest Ad-Din app, signed in. Most of this happens only in the app.
**Show:** Opening card from You'll need.

### 2. The reminder
#### [2.1] The sheet
**Say:** If notifications or location are off, Ad-Din shows a reminder a few seconds after you open the app. It never appears the first time, and it comes back at most once every few days.
**Show:** App home. After four seconds the sheet rises: "Stay in the loop with your masjid & madrasah". Hold on it.
**Caption:** If notifications or location are off, a reminder appears a few seconds after you open the app. Never the first time, and at most once every few days.


#### [2.1a]
**Say:** If you close it without choosing, by tapping outside it or pressing your phone's Back button, it can come back after a few days.
**Show:** Tap the dim area above the sheet: it slides away. Reopen the app (stub reset) so it rises again for the next scenes.
#### [2.2] Two permissions
**Say:** It asks for two things. **Push notifications** bring class updates, announcements and messages. **Precise location** finds the masjid nearest you and sets the Qiblah and prayer times for exactly where you are.
**Show:** Spotlight the "Push notifications" row, then the "Precise location" row with its "Recommended" tag.


#### [2.2a]
**Say:** If you work at your masjid or madrasah, precise location also lets you check in for staff attendance, as the row says.
**Show:** Zoom on the row text "Finds the masjid nearest you, checks you in for staff attendance, and sets the Qiblah and prayer times for exactly where you are."
#### [2.3] Not now
**Say:** If you're busy, tap **Remind me later**, and Ad-Din asks again in a week. Under **More options**, **Don't remind me again** stops the reminder on this phone. You can still allow both later in **Preferences**.
**Show:** Spotlight "Remind me later". Tap "More options": it opens with its note and "Don't remind me again". Spotlight it; don't tap either button.

### 3. Allow notifications and location
#### [3.1] Notifications
**Say:** Tap **Allow** next to **Push notifications**. Your phone asks if Ad-Din may send notifications. Choose allow, and the row turns green.
**Show:** Tap "Allow" on the Push notifications row. The phone's own permission dialog (real-device or emulator capture); tap its allow button. The row shows a green tick.

#### [3.2] Precise location
**Say:** The hint under the row says what to do on the next screen. Tap **Allow precise**. When your phone asks, allow location while you use the app, and keep **Precise** selected.
**Show:** Spotlight the hint "On the next screen, keep Precise selected." Tap "Allow precise". The phone's own location dialog with Precise selected (real-device or emulator capture); tap allow.


#### [3.2a] On an iPhone
**Say:** On an iPhone, the hint says to keep **Precise** on instead. The words differ a little between phones, so read the hint before you tap.
**Show:** iPhone take of the same sheet: spotlight "On the next screen, keep Precise: On." Don't tap.
#### [3.3] All set
**Say:** When both are on, the sheet says **You're all set** and closes by itself.
**Show:** The sheet changes to "You're all set" with "Thanks! Ad-Din will keep you up to date." and slides away.


#### [3.3a] Location services off
**Say:** If location is allowed but your phone's location services are switched off, Ad-Din says so under the rows, here and in **Preferences**. Tap **Turn on** to open your phone's location settings.
**Show:** Stub state with location services off, on Preferences › This device: the note "Location services are turned off on this phone." with "Turn on". Spotlight "Turn on"; cut before the phone's settings open.
### 4. If you chose approximate
#### [4.1] Why precise
**Say:** If your phone shared only an approximate location, Ad-Din explains why that isn't enough. Approximate can be off by about three kilometres.
**Show:** Reset the stub to approximate and reopen the app. The "Turn on Precise location" sheet rises. Zoom on "about 3 km".

#### [4.2]
**Say:** The **Nearest masjid** might be listed third or fourth, and the Qiblah and prayer times won't be set for your exact spot.
**Show:** Spotlight the two reasons: "Nearest masjid" and "Qiblah & prayer times".
**Caption:** The nearest masjid might be listed third or fourth, and Qiblah and prayer times won't match your exact spot.

#### [4.3] Switch or keep
**Say:** **Keep approximate** closes it, but Ad-Din asks again whenever it needs your location. To fix it, tap **Switch to Precise** and follow the hint. The sheet then says **Precise location is on**.
**Show:** Spotlight "Keep approximate" without tapping. Tap "Switch to Precise"; the phone's own dialog (real-device or emulator capture); accept. The sheet shows "Precise location is on" and closes.


#### [4.3a] What the hint says
**Say:** On Android, the hint tells you to tap Change to precise location on the next screen. On an iPhone, it tells you to tap Allow Once, and to turn on Precise Location in Settings to keep it on.
**Show:** Back on the "Turn on Precise location" sheet: spotlight the hint under "Switch to Precise" (Android take), then the iPhone take of the same hint.
**Caption:** On Android, tap Change to precise location on the next screen. On an iPhone, tap Allow Once, then turn on Precise Location in Settings to keep it.

#### [4.3b]
**Say:** If your phone stops offering its own screen, the button changes to **Open Settings**, and the hint tells you which setting to turn on.
**Show:** Stub state after the phone stopped asking: the button reads "Open Settings"; zoom on the hint "In Settings, open Permissions › Location and turn on Use precise location."
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


#### [5.3a]
**Say:** For location, the hint names the setting, for example **Use precise location** under **Location** on Android. After you change it, come back to Ad-Din and check the row.
**Show:** Spotlight the hint under the blocked location row: "In Settings, open Permissions › Location and turn on Use precise location." Then the stub switches to allowed: the row shows "Allowed".
#### [5.4]
**Say:** The **Push notification** switch under **Notification preferences** is different. It belongs to your account and applies on every phone you use. To get notifications, this switch and the phone's permission must both be on.
**Show:** Scroll down; spotlight "Notification preferences" and its "Push notification" switch. Don't toggle it.

### 6. When a notification arrives
#### [6.1] While the app is open
**Say:** If a notification arrives while you're using the app, it slides in at the top with who sent it and the message.
**Show:** Back on the app home. Trigger the demo push: the banner slides down with "Maple Grove Masjid", "now" and the message.


#### [6.1a]
**Say:** If you don't tap it, the banner goes away by itself after a few seconds. The message is still in your **Message** inbox, so nothing is lost.
**Show:** Trigger one push and wait: the banner slides away after about six seconds. Open the Message inbox: the Jumu'ah message is at the top. Go back to the home screen.
#### [6.2] Open or dismiss
**Say:** Tap it to open what it's about. Swipe it up or tap the cross to dismiss it. If several arrive at once, the banner shows how many more there are.
**Show:** Trigger two more pushes while the first is still up: the banner shows "+2 more". Tap the banner: the Message inbox opens with the Jumu'ah message at the top.

#### [6.3] While the app is closed
**Say:** When the app is closed, your phone shows the notification as usual. Tap it to open Ad-Din, then open your **Message** inbox to read it.
**Show:** Real-device or emulator capture of the lock screen with the Ad-Din notification showing the same text, and no other notifications. Tap it: cut to the app opening on its home screen, then open the Message inbox with the Jumu'ah message at the top.


#### [6.3a] Which news arrives
**Say:** Notifications come when your masjid or madrasah sends you a message or an announcement with notifications turned on. If you'd rather not get them, turn off **Push notification** in **Preferences**; messages still reach your inbox.
**Show:** Preferences: spotlight the "Push notification" switch under "Notification preferences". Don't toggle it.
### 7. Done
#### [7.1] Result
**Say:** That's it. Once both rows say **Allowed**, Ad-Din can keep you up to date and find where you are. You can change these any time in **Preferences**.
**Show:** Preferences › This device with both rows showing "Allowed".

#### [7.2] Next
**Say:** Next, see the rest of your profile in video 00.5, or prayer times and the Qiblah for where you are in video 15.1.
**Show:** End card with two tiles: "00.5 Your profile, notifications and GUID" and "15.1 Prayer times, monthly timetable and Qiblah".

## Review log
- 2026-11-17 · manager · "more detailed, under 10 minutes" · 3:36 → 5:22 narration, 10 scenes added: [2.1a] closing the reminder without choosing, [2.2a] staff check-in line, [3.2a] iPhone hint, [3.3a] Location services are turned off (Turn on), [4.3a] Android and iPhone hints on the precise sheet, [4.3b] Open Settings when the phone stops asking, [5.3a] the Settings path and the row updating, [6.1a] the banner hides by itself, the inbox keeps the message, [6.3a] which news arrives and the Push switch
- 2026-11-06 · panel (user, director, writer, PM, PO) · 11 changes: You'll need and [1.2] say "the latest" app (precise sheet needs 2.0.52) and "most of this" (the Push switch is on the web too), [2.1] "once every few days", no "gentle" (Say and Caption), [2.3] clear subject and says Preferences can undo it, [3.2] hint first, then tap, as in the Show; which phone option to pick; "selected" as the app's hint says, [4.2] staff sentence dropped (not on screen; Say and Caption), [4.3] the sheet asks again whenever location is read (device-permissions.service.ts), [5.4] how the account switch and the phone permission work together, [6.3] says to open the inbox, [7.1] bridges to both rows Allowed, no idiom, demo names match the recording (Maple Grove Masjid)
<!-- Newest first: date, who, what was asked, what changed. -->
- 2026-11-03 · manager · decisions via chat · Phone screens decided: permission dialogs ([3.1], [3.2], [4.3]) and the lock-screen notification ([6.3]) are captured on a real device or emulator; Show lines, flag and demo data updated (Show only, so translations are unaffected)
- 2026-11-03 · critic · 5 changes: [1.1] second-person opening, no phrasal verb, [2.3] no elliptical question or idiom, [4.2] "show up" replaced (Say and Caption), [6.2] clear count line, [7.2] end tiles by number
- 2026-11-03 · validator · checked against master d36d69ed8 (+ Ad-DinMobileApp fix/ios-workload-version 6f756834b) · 2 fixes: [6.3] tapping a closed-app message notification opens the app, not the inbox (flag added); [6.2] banner tap opens the inbox list (not the message itself)

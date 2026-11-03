# Prompt log: 00.7 Ad-Din on your phone: notifications and location

Every instruction given to Claude for this video, newest first, with the result.
Format: date · who · prompt (verbatim or summarised) · outcome / commit.

- 2026-11-03 · manager · "use a sub agent to validate the script" · validator pass: all labels found; [6.3] fixed (a tapped message notification opens the app, not the inbox; flagged as app gap), [6.2] Show wording.
- 2026-11-03 · manager · "Write all the scripts now and double check nothing is missed." · Scripted from origin/master (d36d69ed8); flags: Allow vs 'Turn on', no 'View' on the in-app banner (Android fallback only), demo triggers the banner via the addin:push event, stubbed AdDinBridge, OS screens stylised, shell 2.0.52+ for the precise sheet.

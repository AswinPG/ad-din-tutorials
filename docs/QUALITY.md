# Quality checks

How the series makes sure nothing is missed and every script is right before the manager reviews it. Agreed 2026-11-03.

## 1. Feature map: nothing missed

`docs/FEATURE-MAP.md` lists every user-facing feature of the Ad-Din web app and mobile app, and the video that covers it. It is built from:

- a **graphify** knowledge graph of the app code on `origin/master` (structural pass over every TypeScript file: routes, components, services; 76 feature areas),
- the sidebar (`services/menu.data.ts`) and every route file,
- native-only behaviour of the mobile app (push, location, app home screen).

Its **Gaps** section says, for each feature without a video, whether it needs a new video, folds into an existing one, or is left out on purpose (and why). Rebuild it whenever the app changes a lot or before a new batch is planned:

> Rebuild the feature map from the current Ad-Din master with graphify and list new gaps.

The graph itself is a working file (outside the repo); only the map is versioned.

## 2. Validator: every script checked against the app

Two layers, run after a video is scripted and again after any edit:

| Check | How | Catches |
|---|---|---|
| `npm run validate` | automatic | format, IDs, prereqs, length (narration over 8:30), missing translations |
| `npm run labels` | automatic | **bold** labels that don't exist in the app code, or differ in capitals |
| Validator agent | a subagent reads each script beside the app code | wrong flow or order, a step that doesn't exist, a missing step, a Covers item not shown, a Show line the recorder can't do, demo data that's missing |

`npm run labels` reads the commit named in `series.yaml` → `app` (exported to `out/app-src/<sha>/`, git-ignored). A "not found" can still be right when the app builds the text in code (for example "Sign Up & Continue"); the validator agent confirms those by hand.

The validator fixes clear factual errors itself (a wrong label, a wrong menu path) and lists anything that needs a decision.

## 3. Critic: make each script better

A separate subagent, with no stake in the script, reads it as the viewer would and as a reviewer would:

- **Viewer:** Is it self-contained? Is any step unexplained? Is anything said that the viewer can't see? Is it boring, repetitive or too long? Would a parent / teacher / admin of this role understand every word?
- **Producer:** Does every Say fit its Show? Is each scene's narration under about 20 seconds? Is the opening quick, and does the end point somewhere useful? Is there a better order?
- **Series:** Same terms as other videos (one word per thing), no overlap with a neighbouring video, no promises the app can't keep, nothing that will date quickly.
- **Translation:** idioms, humour or wordplay that won't survive Arabic, Urdu, Bangla, Malay and Indonesian; sentences too long to subtitle.

Each finding is pinned to a scene (`[2.1]`), with a suggested rewrite. Claude applies the ones that are clearly better, logs them in the video's review log as `critic`, and leaves taste calls for the manager.

## Order

`script → validate + labels → validator agent → critic agent → apply → validate + labels → manager review`. Status stays `scripted` throughout; the manager's approval moves it on.

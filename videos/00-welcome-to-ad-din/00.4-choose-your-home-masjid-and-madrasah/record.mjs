// 00.4 Choose your home masjid and madrasah: what happens on screen in each scene.
// Narration, chapters and captions come from script.md. Run: npm run record -- 00.4
// A fresh demo account (no home organisations) on the real finder, All set and profile pages from origin/master; the
// lists, ID look-ups, saves and follows are answered by the demo world. The browser's location prompt is browser UI,
// not Ad-Din: it is drawn by the stage (s.sys) while the app's own "Ad-Din needs your location" pop-up waits for it.
import { ok } from "../../../engine/lib/mock.mjs";

const A = (s) => s.app();
const WRONG_ID = "299"; // a madrasah ID that finds nothing
const fresh = (s) => s.session({ homeMasjidID: null, homeMadressahID: null, isAdmin: false, isMasjidAdmin: false, isSubscriber: false });
const card = (s, name) => A(s).locator(".org-card").filter({ hasText: name }).first();
const centre = (loc) => loc.evaluate((el) => el.scrollIntoView({ block: "center", behavior: "smooth" })).catch(() => {});
const slow = (ms) => new Promise((r) => setTimeout(r, ms));

export default {
    mode: "browser",
    role: "Welcome to Ad-Din",
    world: ({ DEMO, IDS }) => {
        const state = { newUser: true, follows: [] }; // createWorld copies this; follows stay in this closure
        return {
            state,
            routes: [
                // the Organization ID tab: any ID but the demo ones finds nothing (the demo IDs are answered in install())
                [/^GET \/v2\/(Masjid|Madressah)\/list\?.*(masjidID|madressahID)=/i, async () => { await slow(500); return ok([], "MMH100"); }],
                // nearby lists load after a short wait, so the search box can be shown while they come in
                [/^GET \/v2\/(Masjid|Madressah)\/list/i, async (req) => { if (!/(masjidID|madressahID)=/.test(req.url())) await slow(1600); return undefined; }],
                [/^POST \/v1\/Masjid\/SetHomeMasjid/i, async () => { await slow(1800); return ok(true, "MMR100"); }],
                [/^POST \/v1\/Madressah\/SetHomeMadressah/i, async () => { await slow(400); return ok(true, "MMDR100"); }],
                [/^GET \/v1\/Masjid\/GetFollowedOrganisations/i, () => ok(state.follows.slice(), "MMAG100")],
                [/^POST \/v1\/Masjid\/FollowMasjid/i, (req) => { const id = Number(new URLSearchParams(req.postData()).get("MasjidId")); state.follows.push({ id, type: "Masjid", name: id === 102 ? "Cedar Hill Masjid" : "Riverbend Islamic Centre", address: "" }); return ok(true, "MMF100"); }],
                [/^POST \/v1\/Madressah\/FollowMadressah/i, (req) => { const id = Number(new URLSearchParams(req.postData()).get("MadressahId")); state.follows.push({ id, type: "Madressah", name: id === 203 ? "Riverbend Quran Academy" : "Cedar Hill Islamic School", address: "" }); return ok(true, "MMDF100"); }],
            ],
        };
    },

    async install(s) {
        const find = (re) => s.world.routes.find(([r]) => String(r) === String(re))[1];
        const nearby = { masjid: find(/^GET \/v2\/Masjid\/list/i), madressah: find(/^GET \/v2\/Madressah\/list/i) };
        // hold the app's location request until the stage's browser prompt is answered (window.top.__geoAllow)
        await s.context.addInitScript(() => {
            if (window.top === window || !navigator.geolocation) return;
            const g = navigator.geolocation, orig = g.getCurrentPosition.bind(g);
            g.getCurrentPosition = (ok, err, o) => { const go = () => (window.top.__geoAllow ? orig(ok, err, o) : setTimeout(go, 100)); go(); };
        });
        // the demo IDs: only the matching organisation (the first in the world's nearby list)
        s.world.routes.unshift([/^GET \/v2\/(Masjid|Madressah)\/list\?.*(masjidID=101|madressahID=201)\b/i, async (req, m) => {
            await slow(500);
            const nb = await nearby[m[1].toLowerCase()](req);
            return { ...nb, data: nb.data.slice(0, 1) };
        }]);
    },
    async setup(s) {
        await s.signIn(s.session());
        await s.page.evaluate(() => (window.__geoAllow = true));
    },
    warm: ["/finder", "/finish", "/settings/userprofile/3", "/finder/follow"],
    async start(s) {
        await s.page.evaluate(() => (window.__geoAllow = false));
        await s.signIn(fresh(s));
        s.world.state.newUser = true;
        await s.go("/login", { wait: 1500 });
        await s.card({ kicker: "Welcome to Ad-Din · 00.4", title: "Choose your home masjid and madrasah" });
    },

    scenes: {
        // ---- 1. Your home organisations ----
        "1.1": async (s) => {},
        "1.2": {
            async prep(s) { await s.go("/finder", { wait: 2500 }); },
            async run(s) { await s.card(null); },
        },

        // ---- 2. Share your location ----
        "2.1": async (s) => {
            await s.spot(A(s).locator(".pop-v2-data").first(), 6);
            await s.atWord("Allow", 0.9);
            await s.spot(null);
            await s.sys({ kind: "browser", title: "portal.ad-din.ca wants to", line: "Know your location", buttons: ["Allow", "Block"] });
            await s.sleep(1300);
            await s.tap(s.page.locator("#sys button").filter({ hasText: "Allow" }).first());
            await s.sys(null);
            await s.page.evaluate(() => (window.__geoAllow = true));
            await s.hideCursor();
        },
        "2.2": async (s) => {
            await s.sleep(300);
            await s.spot(A(s).locator(".search-bar").first(), 8);
            await s.sleep(Math.max(1500, (s.left() - 1.2) * 1000));
            await s.spot(null);
        },

        // ---- 3. Choose your masjid ----
        "3.1": async (s) => {
            await s.spot(A(s).locator(".step-header h2").first(), 8);
            await s.atWord("Each", 0.3);
            await s.spot(card(s, s.DEMO.masjid), 6);
            await s.atWord("far", 0.4);
            await s.spot(A(s).locator(".org-distance").first(), 6);
            await s.sleep(1200);
            await s.spot(null);
            // pan the map a little to show the pins
            const map = A(s).locator(".map-wrap").first();
            const b = await s.box(map);
            if (b) {
                const x = b.x + b.width * 0.55, y = b.y + b.height * 0.5;
                await s.st("cursorTo", x, y, true);
                await s.sleep(600);
                await s.page.mouse.move(x, y);
                await s.page.mouse.down();
                await s.page.mouse.move(x - 120, y - 70, { steps: 25 });
                await s.st("cursorTo", x - 120, y - 70, true);
                await s.page.mouse.up();
                await s.sleep(500);
                await s.hideCursor();
            }
        },
        "3.2": async (s) => {
            const input = A(s).locator(".search-bar input").first();
            await s.typeInto(input, s.DEMO.city, 110);
            await s.sleep(1500);
            const sug = A(s).locator(".pac-item").first();
            await sug.waitFor({ timeout: 5000 });
            await s.tap(sug);
            await s.hideCursor();
        },
        "3.3": async (s) => {
            await s.sleep(400);
            await s.tap(card(s, s.DEMO.masjid));
            await s.sleep(1000);
            await s.spot(card(s, s.DEMO.masjid).locator(".check-circle"), 6);
            await s.sleep(1300);
            await s.spot(null);
            // its pin on the map: the map is now centred on it
            const map = A(s).locator(".map-wrap").first();
            const b = await s.box(map);
            if (b) {
                const x = b.x + b.width / 2, y = b.y + b.height / 2 - 18; // a marker's tip sits on the centre point
                await s.atWord("pin", 0.3);
                await s.st("cursorTo", x - 6, y - 4, true);
                await s.sleep(700);
                await s.st("cursorTo", x - 6, y - 4, false);
                await s.hideCursor();
            }
            await s.atWord("again", 0.3);
            await s.tap(card(s, s.DEMO.masjid), { quick: true });
            await s.sleep(800);
            await s.tap(card(s, s.DEMO.masjid), { quick: true });
            await s.hideCursor();
        },
        "3.4": async (s) => {
            await s.spot(A(s).locator(".btn-continue").first(), 6);
            await s.atWord("Skip", 0.3);
            await s.spot(A(s).locator(".btn-skip").first(), 6);
            await s.sleep(Math.max(800, (s.left() - 2) * 1000));
            await s.spot(null);
            await s.tap(A(s).locator(".btn-continue").first());
            await s.hideCursor();
        },

        // ---- 4. Choose your madrasah ----
        "4.1": async (s) => {
            await s.spot(A(s).locator(".step-header h2").first(), 8);
            await s.atWord("choose", 0.3);
            await s.spot(null);
            await s.tap(card(s, s.DEMO.madrasah));
            await s.hideCursor();
        },
        "4.2": async (s) => {
            await s.tap(A(s).locator(".btn-continue").first());
            await s.hideCursor();
            await s.sleep(1200);
        },

        // ---- 5. Or use the Organization ID (a fresh account) ----
        "5.1": {
            async prep(s) {
                s.world.state.newUser = true;
                await s.signIn(fresh(s));
                await s.go("/finder", { wait: 4500 });
            },
            async run(s) {
                await s.tap(A(s).locator(".tabs-bar button").filter({ hasText: "Organization ID" }).first());
                await s.hideCursor();
                await s.sleep(600);
                await s.spot(A(s).locator(".id-input-group"), 6);
                await s.atWord("website", 0.3);
                await s.spot(A(s).locator(".id-desc").first(), 6);
                await s.sleep(Math.max(800, (s.left() - 0.5) * 1000));
                await s.spot(null);
            },
        },
        "5.2": async (s) => {
            const [mIn, dIn] = [A(s).locator(".id-input-group input").nth(0), A(s).locator(".id-input-group input").nth(1)];
            await s.typeInto(mIn, String(s.IDS.masjid), 140);
            await s.hideCursor();
            await s.sleep(1300);
            await s.spot(A(s).locator(".id-found").first(), 6);
            await s.atWord("Madrasah", 0.3);
            await s.spot(null);
            await s.typeInto(dIn, WRONG_ID, 140);
            await s.hideCursor();
            await s.sleep(1500);
            await s.spot(A(s).locator(".id-notfound").first(), 6);
            await s.sleep(1000);
            await s.spot(null);
            await s.clear(dIn);
            await dIn.pressSequentially(String(s.IDS.madrasah), { delay: 140 });
            await s.sleep(1300);
            await s.spot(A(s).locator(".id-found"), 6);
            await s.sleep(Math.max(500, (s.left() - 0.3) * 1000));
            await s.spot(null);
        },
        "5.3": async (s) => {
            await s.spot(A(s).locator(".right-panel").first(), 4);
            await s.atWord("Save", 0.6);
            await s.spot(null);
            await s.tap(A(s).locator(".btn-continue").first());
            await s.hideCursor();
        },

        // ---- 6. You're all set ----
        "6.1": async (s) => {
            await s.sleep(800);
            await s.spot(A(s).locator(".parent-question-container").first(), 8);
        },
        "6.2": async (s) => {
            await s.spot(A(s).locator(".option-card").filter({ hasText: "Program Enrollment" }).first(), 6);
            await s.atWord("Otherwise", 0.3);
            await s.spot(null);
            await s.tap(A(s).locator(".radio-label").filter({ hasText: "No" }).first());
            await s.sleep(600);
            await s.spot(A(s).locator(".option-card").filter({ hasText: "Go to Dashboard" }).first(), 6);
            await s.atWord("Proceed", 0.6);
            await s.spot(null);
            await s.tap(A(s).locator(".btn-proceed").first());
            await s.hideCursor();
        },

        // ---- 7. Follow more organisations ----
        "7.1": {
            async prep(s) { await s.card(null); await s.page.evaluate(() => (window.__geoAllow = true)); s.world.state.newUser = false; await s.signIn(s.session()); await s.go("/dashboard", { wait: 4000 }); },
            async run(s) {
                await s.atWord("Profile", 0.5);
                await s.tap(A(s).locator(".profile-link-container").first());
                await s.sleep(500);
                await s.tap(A(s).locator(".profile-menu .menu-item").filter({ hasText: "User Profile" }).first());
                await s.hideCursor();
                await s.sleep(2800); // the profile settles on Personal info first
                await s.tap(A(s).locator(".pf-tab").filter({ hasText: "Home & Followed Orgs" }).first());
                await s.hideCursor();
            },
        },
        "7.2": async (s) => {
            const edit = A(s).locator(".pf-sec").filter({ hasText: "Followed organizations" }).locator(".pf-btn-soft").first();
            await s.spot(A(s).locator(".pf-sec").filter({ hasText: "Followed organizations" }).first(), 6);
            await s.sleep(900);
            await s.spot(null);
            await s.tap(edit);
            await s.hideCursor();
            await s.sleep(2200);
            await s.spot(A(s).locator(".step-header h2").first(), 8);
            await s.atWord("tap each", 0.3);
            await s.spot(null);
            await s.tap(card(s, "Cedar Hill Masjid"));
            await s.sleep(500);
            const quran = card(s, "Riverbend Quran Academy");
            await centre(quran);
            await s.sleep(500);
            await s.tap(quran);
            await s.hideCursor();
            await s.sleep(300);
            await s.spot(A(s).locator(".followed-chips").first(), 6);
        },
        "7.3": async (s) => {
            await s.spot(null);
            await s.tap(A(s).locator(".btn-save").first());
            await s.hideCursor();
            await s.sleep(1800);
            await s.spot(A(s).locator(".pf-chips").first(), 6);
            await s.atWord("unfollow", 0.4);
            await s.spot(null);
            await s.hover(A(s).locator(".pf-chip .del").first());
            await s.sleep(1500);
            await s.hideCursor();
        },
        "7.4": async (s) => {
            await s.spot(A(s).locator(".pf-org-row .pf-btn-soft"), 6);
        },

        // ---- 8. Next ----
        "8.1": { pad: 1.2, run: async (s) => {
            await s.spot(null);
            await s.card({ kicker: "Watch next", title: "What's next", tiles: [{ k: "00.6", t: "Finding your way around" }, { k: "00.5", t: "Your profile, notifications and GUID" }] });
        } },
    },
};

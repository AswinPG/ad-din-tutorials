// 00.1 What Ad-Din does for your community: what happens on screen in each scene.
// Narration, chapters and captions come from script.md. Run: npm run record -- 00.1
const item = (s, scope, name) => s.app().locator(`${scope} .menu-item .text`, { hasText: new RegExp(`^\\s*${name}\\s*$`) }).first().locator("xpath=ancestor::div[contains(@class,'menu-item')][1]");
const menu = (s, name) => item(s, ".sidebar .menu > ul > li >", name);
const sub = (s, name) => item(s, ".sidebar .submenu", name);
const sidebarList = (s) => s.app().locator(".sidebar .menu").first();
const scrollSidebar = (s, y) => sidebarList(s).evaluate((el, yy) => el.scrollTo({ top: yy, behavior: "smooth" }), y);

export default {
    mode: "browser",
    role: "Welcome to Ad-Din",
    native: ["#app2"], // the phone in [5.1] plays the Ad-Din app

    async setup(s) {
        await s.signIn(s.session());
        await s.page.evaluate(() => localStorage.setItem("menuPinned", "true")); // sidebar open with labels
    },
    warm: ["/dashboard", "/masjid/prayertimes", "/masjid/masjidFinder", "/madressah/assignment", "/madressah/academic", "/report/archive", "/mobile-home"],
    async start(s) {
        await s.signOut();
        await s.go("/login", { wait: 5000 });
    },

    scenes: {
        // ---- 1. One place for your community ----
        "1.1": async (s) => {
            await s.sleep(600);
            await s.zoom(s.app().locator(".onb-box .left").first(), 1.45);
        },
        "1.2": async (s) => {
            await s.card({ kicker: "Welcome to Ad-Din · 00.1", title: "What Ad-Din does for your community" });
            await s.zoom(null);
        },

        // ---- 2. For the masjid ----
        "2.1": {
            // signed in behind the title card
            async prep(s) {
                await s.signIn(s.session());
                await s.go("/dashboard", { wait: 6000 });
            },
            async run(s) {
                const Q = { quick: true };
                await s.card(null);
                await s.tap(menu(s, "Masjid"), Q);
                await s.tap(sub(s, "Prayer Times"), Q);
                await s.sleep(900);
                await s.tap(s.app().locator("button, a, li").filter({ hasText: /^\s*View Prayer Times\s*$/ }).first(), Q);
                await s.sleep(300);
                // the date range is set for the viewer (the week around today), then the schedule is shown
                const fr = s.page.frames().find((f) => f.url().includes("/masjid/prayertimes"));
                await fr.evaluate(() => {
                    let el = document.getElementById("vt-from"), c = null;
                    while (el && !(c = window.ng.getComponent(el))) el = el.parentElement;
                    c.FromDate = new Date(2026, 10, 8); c.ToDate = new Date(2026, 10, 14); window.ng.applyChanges(c);
                });
                await s.tap(s.app().locator("button.vt-btn--primary").first(), Q);
                await s.sleep(700);
                const today = s.app().locator(".ag-row").filter({ hasText: "10 Nov 2026" });
                await s.spot([today.locator(".ag-cell").first(), today.first()]);
                await s.hideCursor();
            },
        },
        "2.2": async (s) => {
            await s.spot(null);
            for (const name of ["Events", "Donation", "Message", "Live Streaming"]) {
                await s.atWord(name.split(" ")[0], 0.6);
                await s.hover(menu(s, name));
                await s.spot(menu(s, name), 4);
            }
        },
        "2.3": async (s) => {
            await s.spot(null);
            await s.tap(sub(s, "Masjid Finder"));
            await s.sleep(2500);
            await s.hideCursor();
            await s.spot(s.app().locator(".gm-style").first(), 0);
            await s.sleep(1500);
            await s.spot([s.app().locator("text=Maple Grove Masjid").first().locator("xpath=ancestor::*[contains(@class,'card') or contains(@class,'item')][1]")]);
        },

        // ---- 3. For the madrasah ----
        "3.1": async (s) => {
            await s.spot(null);
            await s.tap(menu(s, "Admin Portal"));
            await s.sleep(500);
            await scrollSidebar(s, 330);
            await s.sleep(800);
            await s.hideCursor();
            for (const name of ["Class", "Subject", "Class Routine", "Attendance", "Terms Management"]) {
                await s.atWord(name === "Terms Management" ? "terms" : name === "Class Routine" ? "timetables" : name === "Attendance" ? "attendance" : name === "Subject" ? "subjects" : "classes", 0.3);
                await s.spot(sub(s, name), 3);
            }
        },
        "3.2": async (s) => {
            const Q = { quick: true };
            await s.spot(null);
            await s.tap(sub(s, "Quran Hifz Assignments"), Q);
            await s.sleep(500);
            await s.hideCursor();
            await s.spot(s.app().locator(".ag-center-cols-container").first());
            await s.atWord("Academic", 0.4);
            await s.spot(null);
            await s.tap(sub(s, "Academic Activity"), Q);
            await s.hideCursor();
            await s.atWord("marks", 0.2);
            // quick cut: the demo child's published report card in the Reports Archive
            await s.nav("/report/archive", { wait: 500 });
            await s.tap(s.app().locator("button").filter({ hasText: /By student/ }).first(), Q);
            await s.tap(s.app().locator("button").filter({ hasText: "Maryam Rahman" }).first(), Q);
            await s.hideCursor();
        },

        // ---- 4. Four portals, one account ----
        "4.1": {
            async prep(s) {
                await s.nav("/dashboard", { wait: 1500 });
                await scrollSidebar(s, 0);
                await s.sleep(400);
            },
            async run(s) {
                await s.atWord("role", 0.3);
                await s.spot(["Parent Portal", "Student Portal", "Teacher Portal", "Admin Portal"].map((n) => menu(s, n)), 4);
            },
        },
        "4.2": async (s) => {
            for (const n of ["Admin", "Teacher", "Parent", "Student"]) {
                await s.atWord(n, 0.3);
                await s.spot(menu(s, n + " Portal"), 4);
            }
        },
        "4.3": async (s) => {
            await s.spot(null);
            await s.atWord("teacher", 0.3);
            await s.spot([menu(s, "Teacher Portal"), menu(s, "Parent Portal")], 4);
        },

        // ---- 5. Web and app, free and Premium ----
        "5.1": {
            async prep(s) {
                await s.spot(null);
                await s.setMode("split");
                await s.go("/dashboard", { wait: 4000 });
                // the phone keeps its drawer closed (the pinned sidebar is a desktop setting)
                await s.page.evaluate(() => localStorage.setItem("menuPinned", "false"));
                await s.go("/mobile-home", { frame: "#app2", wait: 5000 });
            },
            async run(s) {
                await s.atWord("families", 0.3);
                await s.spot(s.page.locator("#device2"), 6);
            },
        },
        "5.2": async (s) => {
            await s.spot(null);
            await s.card({
                kicker: "Plans",
                title: "Free, Premium and add-ons",
                rows: [
                    { k: "Free", t: "Many masjid features" },
                    { k: "Premium", t: "Madrasah tools, the portals, events and donations (Ad-Din Premium)" },
                    { k: "Add-ons", t: "Website" },
                ],
            });
        },

        // ---- 6. Where to go next ----
        "6.1": async (s) => {
            await s.card({
                kicker: "Watch next",
                title: "Where to go next",
                tiles: [
                    { k: "00.2", t: "Create your Ad-Din account" },
                    { k: "01.1", t: "Register a masjid, madrasah, or both" },
                ],
            });
        },
        "6.2": { pad: 1.2, run: async (s) => {
            await s.card({ center: true, title: "Ad-Din", sub: "Masjid, Madrasah & School Management Made Easy." });
        } },
    },
};

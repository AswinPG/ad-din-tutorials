// 00.2 Create your Ad-Din account: what happens on screen in each scene.
// Narration, chapters and captions come from script.md. Run: npm run record -- 00.2
// Demo values only (from script.md → Demo data): a free username, a taken one ("admin"), the demo email and password.
const USER = "yusuf_rahman";
const TAKEN = "admin";
const PASSWORD = "Masjid-2026!"; // the script's demo password, typed into the mocked sign-up form
const A = (s) => s.app();
const field = (s, name) => A(s).locator(`.signup input[formcontrolname="${name}"], .signup input[ng-reflect-name="${name}"]`).first();
const centre = (loc) => loc.evaluate((el) => el.scrollIntoView({ block: "center", behavior: "smooth" })).catch(() => {});

export default {
    mode: "browser",
    role: "Welcome to Ad-Din",
    native: ["#app2"], // the phone in [1.2] plays the Ad-Din app
    world: () => ({ state: { takenUsernames: [TAKEN] } }),

    warm: ["/login", "/signup", "/finder"],
    async start(s) {
        await s.signOut();
        await s.card({ kicker: "Welcome to Ad-Din · 00.2", title: "Create your Ad-Din account" });
    },

    scenes: {
        // ---- 1. Before you start ----
        "1.1": async (s) => {},
        "1.2": {
            async prep(s) {
                await s.setMode("split");
                await s.go("/login", { wait: 3500 });
                await s.go("/signup", { frame: "#app2", wait: 4500 });
            },
            async run(s) {
                await s.card({ kicker: "You'll need", title: "An email address", bullets: ["The web or the Ad-Din app: the steps are the same"] });
                await s.atWord("sign", 0.4);
                await s.card(null);
                await s.sleep(900);
                await s.spot(s.app2().locator(".native-head").first(), 6);
            },
        },

        // ---- 2. Open the sign-up page ----
        "2.1": {
            async prep(s) {
                await s.spot(null);
                await s.setMode("browser");
                await s.go("/login", { wait: 3000 });
            },
            async run(s) {
                const change = A(s).locator(".change-section").first();
                await s.spot(change, 6);
                await s.atWord("Sign", 0.3);
                await s.spot(null);
                await s.tap(A(s).locator(".change-section .action").first(), { quick: true });
                await s.sleep(500);
                await s.spot(A(s).locator(".signup .form-title").first(), 8);
            },
        },
        "2.2": async (s) => {
            await s.spot(null);
            for (const [w, name] of [["username", "username"], ["email", "email"], ["password", "password"], ["same", "repeatPassword"]]) {
                await s.atWord(w, 0.3);
                await s.spot(field(s, name).locator("xpath=ancestor::div[contains(@class,'fc')][1]"), 6);
            }
        },

        // ---- 3. Fill in your details ----
        "3.1": async (s) => {
            await s.spot(null);
            await s.typeInto(field(s, "username"), USER, 90);
            await s.hideCursor();
        },
        "3.2": async (s) => {
            const u = field(s, "username");
            await s.clear(u);
            await s.zoom(A(s).locator(".username-wrapper").first(), 1.8);
            await u.pressSequentially(TAKEN, { delay: 110 }); // still focused from [3.1]
            await s.sleep(2200); // spinner, then the red cross
            await s.clear(u);
            await u.pressSequentially(USER, { delay: 60 });
            await s.sleep(1500); // spinner, then the green tick
        },
        "3.3": async (s) => {
            await s.zoom(null);
            await s.typeInto(field(s, "email"), s.DEMO.email, 55);
            await s.hideCursor();
        },
        "3.4": async (s) => {
            const p = field(s, "password");
            await s.typeInto(p, PASSWORD, 90);
            const b = await s.box(p.locator("xpath=ancestor::div[contains(@class,'fc')][1]"));
            await s.callout("At least 10 characters\nAn uppercase and a lowercase letter\nA number\nA special character, such as @ or #", b, "right");
            await s.hideCursor();
        },
        "3.5": async (s) => {
            await s.callout(null);
            const eye = field(s, "password").locator("xpath=following-sibling::*[name()='svg'][1]");
            await s.zoom(field(s, "password").locator("xpath=ancestor::div[contains(@class,'fc')][1]"), 1.6);
            await s.tap(eye);
            await s.sleep(1800);
            await s.tap(field(s, "password").locator("xpath=following-sibling::*[name()='svg'][1]"));
            await s.sleep(500);
            await s.zoom(null);
        },
        "3.6": async (s) => {
            await s.typeInto(field(s, "repeatPassword"), PASSWORD, 80);
            await s.hideCursor();
        },

        // ---- 4. Tell Ad-Din why you're here ----
        "4.1": async (s) => {
            const intents = A(s).locator(".intents").first();
            await centre(intents);
            await s.sleep(800);
            await s.spot(intents, 8);
        },
        "4.2": async (s) => {
            await s.spot(null);
            const enrol = A(s).locator("button.intent").filter({ hasText: "Enroll a Child" }).first();
            await s.tap(enrol);
            await s.sleep(500);
            await centre(A(s).locator(".submit-btn").first());
            await s.sleep(600);
            await s.spot([enrol, A(s).locator(".submit-btn").first()], 6);
            await s.atWord("leave", 0.3);
            await s.spot(null);
            await s.tap(enrol);
            await s.sleep(400);
            await s.spot(A(s).locator(".submit-btn").first(), 6);
            await s.hideCursor();
        },

        // ---- 5. Agree and sign up ----
        "5.1": async (s) => {
            await s.spot(null);
            await centre(A(s).locator(".agree").first());
            await s.sleep(500);
            await s.tap(A(s).locator(".agree .chkbox i").first());
            await s.hideCursor();
        },
        "5.2": async (s) => {
            await s.tap(A(s).locator(".submit-btn").first());
            await s.hideCursor();
        },
        "5.3": async (s) => {
            await s.sleep(1500);
            await s.spot(A(s).locator(".right-panel").first(), 4);
        },

        // ---- 6. Next ----
        "6.1": { pad: 1.2, run: async (s) => {
            await s.spot(null);
            await s.card({ kicker: "Watch next", title: "What's next", tiles: [{ k: "00.4", t: "Choose your home masjid and madrasah" }, { k: "00.3", t: "Log in and reset a forgotten password" }] });
        } },
    },
};

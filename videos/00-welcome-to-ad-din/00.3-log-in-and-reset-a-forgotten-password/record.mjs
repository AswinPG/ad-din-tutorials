// 00.3 Log in and reset a forgotten password: what happens on screen in each scene.
// Narration, chapters and captions come from script.md. Run: npm run record -- 00.3
// Demo values only (script.md → Demo data). The Reset Password and Success pages are AdDin.Web Razor pages, rendered
// from their origin/master source by engine/demo/razor.mjs; the inbox is a plain mock (engine/demo/inbox.mjs).
import { installResetPages } from "../../../engine/demo/razor.mjs";
import { installInbox } from "../../../engine/demo/inbox.mjs";

const USER = "yusuf_rahman";
const PASSWORD = "Masjid-2026!"; // the account's demo password (00.2)
const WRONG = "Masjid-2025!"; // a mistyped one for the failed attempt
const NEW_PASSWORD = "Hifz-Class-2026"; // the new demo password from script.md
const CODE = "DemoResetLink0000000000000000000000000000000000000000000000000001"; // a 64-character demo verification code
const CODE2 = "DemoResetLink0000000000000000000000000000000000000000000000000002";

const A = (s) => s.app();
const loginField = (s, name) => A(s).locator(`.login input[formcontrolname="${name}"], .login input[ng-reflect-name="${name}"]`).first();
const centre = (loc) => loc.evaluate((el) => el.scrollIntoView({ block: "center", behavior: "smooth" })).catch(() => {});

// the reset email body as AdDin.Accounts UserRepository.ForgotPasswordRequest builds it, one block per account
const block = (s, user, roles, code) => {
    const shown = "https://portal.ad-din.ca/public/resetpassword/" + code;
    return `<b>Username:</b> ${user}<br/><b>Organization Roles:</b> ${roles}<br/><b>Password reset link:</b> <a href='${s.APP}/public/resetpassword/${code}'>${shown}</a><br/><br/>`;
};

export default {
    mode: "browser",
    role: "Welcome to Ad-Din",
    native: ["#app2"], // the phone plays the Ad-Din app
    world: () => ({ state: { password: PASSWORD } }),

    async install(s) {
        await installResetPages(s.context, s.APP, { codes: [CODE, CODE2] });
        await installInbox(s.context, s.APP, {
            to: s.DEMO.email,
            messages: [
                { from: "Ad-Din", subject: "Reset Password", when: "10:02 AM", unread: true, html: block(s, USER, "Admin, Teacher, Parent, Student", CODE) },
                { from: s.DEMO.masjid, subject: "Community iftar this Friday", when: "Nov 9", html: "Join us after Maghrib in the main hall." },
            ],
        });
    },
    async setup(s) {
        // warm the signed-in pages, then sign out
        await s.signIn(s.session());
    },
    warm: ["/dashboard", "/mobile-home", "/public/resetpassword/" + CODE],
    async start(s) {
        await s.signOut();
        await s.go("/login", { wait: 3000 });
        await s.card({ kicker: "Welcome to Ad-Din · 00.3", title: "Log in and reset a forgotten password" });
    },

    scenes: {
        // ---- 1. Getting back in ----
        "1.1": async (s) => {},
        "1.2": async (s) => {
            await s.card({ kicker: "You'll need", title: "Your username", bullets: ["Your email inbox, to reset a password"] });
        },

        // ---- 2. Log in ----
        "2.1": {
            async prep(s) {
                await s.setMode("split");
                await s.go("/login", { wait: 3000 });
                await s.go("/login", { frame: "#app2", wait: 4000 });
            },
            async run(s) {
                await s.card(null);
                await s.sleep(700);
                await s.spot(s.app2().locator(".native-head").first(), 6);
                await s.atWord("Login", 0.4);
                await s.spot([loginField(s, "username"), loginField(s, "password")], 8);
            },
        },
        "2.2": {
            async prep(s) {
                await s.spot(null);
                await s.setMode("browser");
                await s.sleep(800);
            },
            async run(s) {
                const Q = { quick: true };
                await s.pointTo(loginField(s, "username"), { ...Q, click: true });
                await loginField(s, "username").pressSequentially(USER, { delay: 50 });
                await s.pointTo(loginField(s, "password"), { ...Q, click: true });
                await loginField(s, "password").pressSequentially(WRONG, { delay: 50 });
                const eye = () => loginField(s, "password").locator("xpath=following-sibling::*[name()='svg'][1]");
                await s.tap(eye(), Q);
                await s.sleep(900);
                await s.tap(eye(), Q);
                await s.hideCursor();
            },
        },
        "2.3": async (s) => {
            await s.tap(A(s).locator(".submit-btn").first(), { quick: true });
            await s.hideCursor();
            await s.sleep(1900); // the Invalid Credentials message
            const p = loginField(s, "password");
            await s.clear(p);
            await s.pointTo(p, { quick: true, click: true });
            await p.pressSequentially(PASSWORD, { delay: 45 });
            await s.hideCursor();
        },
        "2.4": async (s) => {
            const intents = A(s).locator(".intents").first();
            await s.spot(intents, 8);
            await s.atWord("Report", 0.4);
            await s.spot(null);
            const card = A(s).locator("button.intent").filter({ hasText: "Report an Absence" }).first();
            await s.tap(card);
            await s.sleep(400);
            await s.spot([card, A(s).locator(".submit-btn").first()], 6);
            await s.sleep(2000);
            await s.spot(null);
            await s.tap(card);
            await s.hideCursor();
            // the phone signs in with the same account, out of sight until [2.5] shows it
            await s.page.evaluate((v) => localStorage.setItem("AdDinUser", v), JSON.stringify(s.session()));
            await s.go("/mobile-home", { frame: "#app2", wait: 0 });
        },
        "2.5": async (s) => {
            await s.tap(A(s).locator(".submit-btn").first(), { quick: true });
            await s.hideCursor();
            await s.atWord("app", 0.2); // spinner, then the dashboard; then the app's home screen
            await s.setMode("split");
        },

        // ---- 3. Forgot your password ----
        "3.1": {
            async prep(s) {
                await s.signOut();
                await s.setMode("browser");
                await s.go("/login", { wait: 3000 });
            },
            async run(s) {
                const forgot = A(s).locator("a.small").filter({ hasText: "Forgot Password" }).first();
                await s.spot(forgot, 6);
                await s.atWord("Forgot", 0.2);
                await s.spot(null);
                await s.tap(forgot);
                await s.hideCursor();
            },
        },
        "3.2": async (s) => {
            const input = A(s).locator(".pop-v2 input").first();
            await s.typeInto(input, USER, 90);
            await s.atWord("Reset", 0.3);
            await s.tap(A(s).locator(".pop-v2 .btnMain").first());
            await s.hideCursor();
        },
        "3.3": async (s) => {
            await s.card({
                kicker: "One email, two accounts",
                title: "Reset Password",
                rows: [
                    { k: "yusuf_rahman", t: "Password reset link" },
                    { k: "maryam_rahman", t: "Password reset link" },
                ],
            });
        },

        // ---- 4. Open the email ----
        "4.1": {
            async prep(s) { await s.go("/__demo/inbox", { wait: 1500 }); },
            async run(s) {
                await s.card(null);
                await s.sleep(800);
                await s.tap(A(s).locator(".row").filter({ hasText: "Reset Password" }).first());
                await s.sleep(1200);
                await s.zoom(A(s).locator(".body").first(), 1.6);
                await s.atWord("link", 0.3);
                await s.tap(A(s).locator(".body a").first());
                await s.hideCursor();
                await s.zoom(null);
            },
        },
        "4.2": {
            async prep(s) { await s.go("/login", { wait: 2500 }); },
            async run(s) {
                await s.spot(A(s).locator("a.small").filter({ hasText: "Forgot Password" }).first(), 6);
            },
        },

        // ---- 5. Choose a new password ----
        "5.1": {
            async prep(s) { await s.spot(null); await s.go("/public/resetpassword/" + CODE, { wait: 1500 }); },
            async run(s) {
                await s.typeInto(A(s).locator("#Password"), NEW_PASSWORD, 80);
                await s.typeInto(A(s).locator("#RepeatPassword"), NEW_PASSWORD, 80);
                await s.hideCursor();
            },
        },
        "5.2": async (s) => {
            await s.atWord("tips", 0.6);
            await s.tap(A(s).locator("#tipsToggle"), { quick: true });
            await s.sleep(300);
            await s.spot(A(s).locator("#tipsPanel"), 6);
            await s.sleep(Math.max(1000, (s.left() - 0.9) * 1000));
            await s.spot(null);
            await s.tap(A(s).locator(".pwd-r h1").first(), { quick: true }); // a click outside closes the panel
            await s.hideCursor();
        },
        "5.3": async (s) => {
            await s.spot([A(s).locator("#message"), A(s).locator("#submit")], 6);
            await s.atWord("Reset", 0.3);
            await s.spot(null);
            await s.tap(A(s).locator("#submit"));
            await s.hideCursor();
        },

        // ---- 6. Done ----
        "6.1": async (s) => {
            await s.sleep(500);
            await s.atWord("Go", 0.9);
            await s.tap(A(s).locator(".portal a").first(), { quick: true });
            await s.hideCursor();
        },
        "6.2": { pad: 1.2, run: async (s) => {
            await s.card({ kicker: "Watch next", title: "What's next", tiles: [{ k: "00.4", t: "Choose your home masjid and madrasah" }, { k: "00.5", t: "Your profile, notifications and GUID" }] });
        } },
    },
};

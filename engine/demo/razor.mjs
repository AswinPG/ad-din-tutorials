// The server-rendered Reset Password pages (AdDin.Web Pages/Public/ResetPassword + Response), which are Razor pages and
// not part of the Angular app. They are rendered here from their source on origin/master (read with git show), so the
// demo shows the real markup, styles and script; only the server side (code check, saving the password) is mocked.
import { execFileSync } from "node:child_process";
import { loadSeries } from "../../tools/lib/catalog.mjs";

const PAGES = "src/AdDin.Web/Pages/Public/";

function source(file) {
    const { series } = loadSeries();
    return execFileSync("git", ["-C", series.app.repo, "show", `${series.app.ref}:${file}`], { encoding: "utf8" }).replace(/^﻿/, "");
}

/** Constants the page prints from AdDin.Accounts/Services/PasswordPolicy.cs. */
function policy() {
    const cs = source("AdDin.Accounts/Services/PasswordPolicy.cs");
    const num = (k) => cs.match(new RegExp(`const int ${k} = (\\d+)`))[1];
    const specials = cs.match(/const string AllowedSpecials = "((?:[^"\\]|\\.)*)"/)[1].replace(/\\(.)/g, "$1");
    return { MinLength: num("MinLength"), MaxLength: num("MaxLength"), AllowedSpecials: specials };
}

/** Response.cshtml.cs handlers: title and message per handler. */
function responses() {
    const cs = source(PAGES + "Response.cshtml.cs");
    const out = {};
    for (const m of cs.matchAll(/OnGet(\w+)\(\)[\s\S]*?Title = "([^"]*)";[\s\S]*?Message = "([^"]*)";/g)) out[m[1].toLowerCase()] = { Title: m[2], Message: m[3] };
    return out;
}

const esc = (t) => String(t ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** A small Razor subset: enough for these two pages (expressions, ternaries in @(...), the layout's @RenderBody). */
function render(page, model, baseUrl) {
    const P = policy();
    const strip = (t) => t.replace(/^@(page|model|using|addTagHelper)\b.*$/gm, "").replace(/@\{[\s\S]*?\}\s*/m, "");
    const vars = { 'ViewData["BaseUrl"]': baseUrl, 'ViewData["Title"]': model.Title, "Model.BaseUrl": baseUrl, "Model.VerificationCode": model.VerificationCode, "Model.ErrorMessage": model.ErrorMessage, "Model.Title": model.Title, "Model.Message": model.Message, "PasswordPolicy.MinLength": P.MinLength, "PasswordPolicy.MaxLength": P.MaxLength, "PasswordPolicy.AllowedSpecials": P.AllowedSpecials };
    const expr = (t) => t
        .replace(/@\(Model\.ErrorMessage != null \? "([^"]*)" : null\)/g, (_, v) => (model.ErrorMessage != null ? v : ""))
        .replace(/@\((Model\.\w+)\)/g, (_, k) => esc(vars[k]))
        .replace(/@(ViewData\["\w+"\]|Model\.\w+|PasswordPolicy\.\w+)/g, (_, k) => esc(vars[k]))
        .replace(/@@/g, "@");
    const body = expr(strip(source(PAGES + page + ".cshtml")));
    return expr(strip(source(PAGES + "_ResetPasswordLayout.cshtml"))).replace("@RenderBody()", body);
}

/**
 * Serves /public/resetpassword/<code> and /public/response/<handler> on the app origin, as AdDin.Web would.
 * `codes` are the demo verification codes that count as valid; anything else answers 401 like the real page.
 */
export async function installResetPages(context, app, { codes = [] } = {}) {
    const base = app + "/";
    const R = responses();
    await context.route(new RegExp("^" + app.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "/public/(resetpassword|response)/([^/?#]+)", "i"), async (route) => {
        const req = route.request();
        const [, kind, arg] = req.url().match(/\/public\/(resetpassword|response)\/([^/?#]+)/i);
        if (kind.toLowerCase() === "response") {
            const r = R[arg.toLowerCase()];
            if (!r) return route.fulfill({ status: 404, body: "" });
            return route.fulfill({ status: 200, contentType: "text/html", body: render("Response", r, base) });
        }
        if (!codes.includes(arg)) return route.fulfill({ status: 401, body: "" });
        if (req.method() === "POST") {
            // OnPostAsync: a valid code and a password that passes PasswordPolicy → redirect to the Success response.
            // A mocked 302 would be followed outside the mock, so the Success page is answered here and the address
            // is set to where the redirect lands (/public/response/success).
            const page = render("Response", R.success, base).replace("<head>", `<head><script>history.replaceState(null, "", ${JSON.stringify(base + "public/response/success")})</script>`);
            return route.fulfill({ status: 200, contentType: "text/html", body: page });
        }
        return route.fulfill({ status: 200, contentType: "text/html", body: render("ResetPassword", { Title: "Reset your password", VerificationCode: arg, ErrorMessage: null }, base) });
    });
}

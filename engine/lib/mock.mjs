// Offline API for the real Angular app: every call to the app's API URL is answered by the demo world.
// Nothing leaves this machine, and no dev or production server is ever called.
export const API = process.env.ADDIN_API || "http://localhost:57327";

export const ok = (data, status = "MMP100", message = "Success") => ({ data, status, message, localizedMessage: message, localizedErrorLink: null, localizedErrorLinkText: null });
export const fail = (status, message, http = 200) => ({ __status: http, body: { data: null, status, message, localizedMessage: message, localizedErrorLink: null, localizedErrorLinkText: null } });

export function keyOf(method, url) {
    const u = new URL(url);
    u.searchParams.delete("loc_lang");
    return method + " " + u.pathname + (u.searchParams.toString() ? "?" + u.searchParams.toString() : "");
}

/**
 * @param world { routes: [[RegExp|string, (req, match, key) => body | {__status, body} | undefined]], onUnmatched }
 *              Routes are tried in order; the first that returns something answers. Unmatched calls get an empty
 *              success and are listed, so the log shows which endpoints a scene still needs.
 */
export async function installMocks(context, world = {}) {
    const unmatched = [];
    const calls = [];
    await context.route(API + "/**", async (route) => {
        const req = route.request();
        const method = req.method();
        if (method === "OPTIONS") return route.fulfill({ status: 204, headers: cors() });
        const key = keyOf(method, req.url());
        calls.push(key);
        let body, status = 200;
        for (const [m, fn] of world.routes || []) {
            const hit = typeof m === "string" ? key === m : key.match(m);
            if (!hit) continue;
            const r = await fn(req, hit, key);
            if (r === undefined) continue;
            if (r && r.__status) { status = r.__status; body = r.body; } else body = r;
            break;
        }
        if (body === undefined) {
            unmatched.push(key);
            if (world.onUnmatched) world.onUnmatched(key);
            body = ok(null);
        }
        return route.fulfill({ status, headers: { ...cors(), "content-type": "application/json" }, body: JSON.stringify(body) });
    });
    // anything else outside the app (maps, fonts, analytics, captcha) is blocked unless the world allows it
    await context.route(/^https?:\/\/(?!127\.0\.0\.1|localhost)/, (route) => {
        const u = route.request().url();
        if ((world.allowHosts || []).some((h) => u.includes(h))) return route.continue();
        return route.abort();
    });
    // the SPA's baseUrl (environment.ts) is localhost:4200; serve those assets from the running app
    await context.route("http://localhost:4200/**", async (route) => {
        const url = route.request().url().replace("http://localhost:4200", process.env.ADDIN_APP || "http://127.0.0.1:4300");
        try { return route.fulfill({ response: await route.fetch({ url }) }); } catch { return route.abort(); }
    });
    return { unmatched, calls };
}

function cors() {
    return { "access-control-allow-origin": "*", "access-control-allow-headers": "*", "access-control-allow-methods": "*" };
}

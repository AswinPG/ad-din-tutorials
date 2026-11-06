// A plain, unbranded mail inbox for scenes that open an email (it imitates no real mail service).
// Served on the app origin at /__demo/inbox; a message opens at /__demo/inbox/<n>.
const esc = (t) => String(t ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const compose = (c) => `
<div class="msg"><h1>New message</h1><div class="field"><span>To</span><input value="${esc(c.to)}"></div><div class="field"><span>Subject</span><input value="${esc(c.subject)}"></div>
<textarea id="body" placeholder="Message">${esc(c.body || "")}</textarea><div><button class="send">Send</button></div></div>`;

const page = (to, list, open, draft) => `<!doctype html><html><head><meta charset="utf-8"><title>Inbox</title>
<link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet">
<style>
 *{box-sizing:border-box} body{margin:0;font-family:Roboto,Arial,sans-serif;color:#202124;background:#f6f8fc}
 header{height:64px;display:flex;align-items:center;gap:16px;padding:0 24px;background:#fff;border-bottom:1px solid #e3e6ea}
 header b{font-size:22px;font-weight:500;color:#3c4043} header .to{margin-left:auto;font-size:14px;color:#5f6368}
 .wrap{display:flex;height:calc(100vh - 64px)} nav{width:220px;padding:16px 8px}
 nav div{padding:10px 18px;border-radius:0 20px 20px 0;font-size:15px;color:#3c4043} nav .on{background:#e8eaed;font-weight:700}
 main{flex:1;margin:12px 16px 16px 0;background:#fff;border-radius:16px;overflow:auto}
 .row{display:grid;grid-template-columns:200px 1fr 90px;gap:16px;padding:14px 24px;border-bottom:1px solid #f1f3f4;font-size:15px;cursor:pointer}
 .row.unread{font-weight:700} .row:hover{background:#f5f7fa} .row .when{text-align:right;color:#5f6368;font-weight:400}
 .msg{padding:28px 40px} .msg h1{font-size:24px;font-weight:400;margin:0 0 18px} .meta{font-size:14px;color:#5f6368;margin-bottom:26px}
 .meta b{color:#202124} .body{font-size:15px;line-height:1.6} .body a{color:#1a5fd0;word-break:break-all}
 .field{display:flex;gap:14px;align-items:center;border-bottom:1px solid #e3e6ea;padding:10px 0;font-size:15px;color:#5f6368} .field span{width:70px}
 .field input{flex:1;border:0;font:15px Roboto,Arial,sans-serif;color:#202124;outline:none} textarea{width:100%;height:260px;margin-top:18px;border:0;font:16px/1.6 Roboto,Arial,sans-serif;outline:none;resize:none}
 .send{margin-top:12px;padding:10px 26px;border:0;border-radius:20px;background:#1a5fd0;color:#fff;font:500 15px Roboto,Arial,sans-serif}
</style></head><body><header><b>Mail</b><span class="to">${esc(to)}</span></header><div class="wrap">
<nav><div class="${draft ? "" : "on"}">Inbox</div><div>Starred</div><div>Sent</div>${draft ? '<div class="on">Drafts</div>' : ""}</nav><main>${draft ? compose(draft) : open ? `
<div class="msg"><h1>${esc(open.subject)}</h1><div class="meta"><b>${esc(open.from)}</b> to ${esc(to)} · ${esc(open.when)}</div><div class="body">${open.html}</div></div>` :
    list.map((m, i) => `<div class="row${m.unread ? " unread" : ""}" onclick="location.href='/__demo/inbox/${i}'"><span>${esc(m.from)}</span><span>${esc(m.subject)}</span><span class="when">${esc(m.when)}</span></div>`).join("")}
</main></div></body></html>`;

/** @param messages [{from, subject, when, html, unread}] newest first; compose {to, subject, body}: a new message at /__demo/inbox/new */
export async function installInbox(context, app, { to, messages, compose: draft }) {
    await context.route(new RegExp("^" + app.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "/__demo/inbox(?:/(\\d+))?"), (route) => {
        if (draft && /\/__demo\/inbox\/new/.test(route.request().url())) return route.fulfill({ status: 200, contentType: "text/html", body: page(to, messages, null, draft) });
        const m = route.request().url().match(/\/__demo\/inbox(?:\/(\d+))?/);
        const open = m[1] != null ? messages[+m[1]] : null;
        return route.fulfill({ status: 200, contentType: "text/html", body: page(to, messages, open) });
    });
}

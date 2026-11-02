// Renders the print-ready HTML of the series plan (the source of the plan PDF).
// Takes the same { PARTS, TRACKS, V, PATHS, ISSUES } data that tools/build-plan.mjs gives the interactive page.
export function renderPrintPlan({ PARTS, TRACKS, V, PATHS, ISSUES }, { date }) {

const tById = Object.fromEntries(TRACKS.map(t => [t.id, t]));
const videos = V.map(([id, title, covers, min, pre, o = {}]) => {
  const t = tById[id.split(".")[0]];
  return { id, title, covers, min, pre, track: t.id, ...t.d, ...o };
});
const expand = s => { const out = []; s.split(" ").forEach(tok => { const [a, b] = tok.split("-"); if (!b) { out.push(a); return; } const [tr, x] = a.split("."); const y = +b.split(".")[1]; for (let i = +x; i <= y; i++) out.push(tr + "." + i); }); return out; };
const fmt = m => { const s = Math.round(m * 60); return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); };
const fmtH = m => (m >= 60 ? Math.floor(m / 60) + " h " : "") + Math.round(m % 60) + " min";
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const total = videos.reduce((a, v) => a + v.min, 0);
const minsOf = ids => videos.filter(v => ids.includes(v.id)).reduce((a, v) => a + v.min, 0);

const chips = v => `${v.aud.map(a => `<span class="chip aud">${esc(a)}</span>`).join("")}<span class="chip plan">${esc(v.plan)}</span>${v.sw ? `<span class="chip sw">Switch: ${esc(v.sw)}</span>` : ""}<span class="chip">${esc(v.plat)}</span><span class="chip">${esc(v.stage)}</span>`;

let body = "";
for (const p of PARTS) {
  body += `<section class="part"><h2>Part ${p.id} · ${esc(p.name)} <small>${esc(p.sub)}</small></h2>`;
  for (const t of TRACKS.filter(t => t.part === p.id)) {
    const vs = videos.filter(v => v.track === t.id);
    body += `<div class="track"><div class="track-head"><span class="tid">Track ${t.id}</span><h3>${esc(t.name)}</h3><span class="tmeta">${vs.length} videos · ${fmt(vs.reduce((a, v) => a + v.min, 0))}</span></div>${t.note ? `<div class="track-note">${esc(t.note)}</div>` : ""}<table><thead><tr><th>ID</th><th>Video and what it covers</th><th>Length</th><th>Watch first</th><th>Tags</th></tr></thead><tbody>`;
    for (const v of vs) body += `<tr><td class="id">${v.id}</td><td class="title"><b>${esc(v.title)}</b>${v.flag ? `<em class="flag">⚑ ${esc(v.flag)}</em>` : ""}<span>${esc(v.covers)}</span></td><td class="time">${fmt(v.min)}</td><td class="pre">${esc(v.pre || "—")}</td><td class="tags">${chips(v)}</td></tr>`;
    body += `</tbody></table></div>`;
  }
  body += `</section>`;
}

const paths = Object.entries(PATHS).map(([k, s]) => { const ids = expand(s); return `<tr><td class="pname">${esc(k)}</td><td class="num">${ids.length}</td><td class="num">${fmtH(minsOf(ids))}</td><td class="pids">${esc(s.split(" ").join(" · "))}</td></tr>`; }).join("");
const issues = ISSUES.map(([b, t, r]) => `<div class="issue"><b>${esc(b)}</b> ${esc(t)} <span class="ref">Videos: ${esc(r)}</span></div>`).join("");

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Ad-Din Tutorial Series</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Roboto+Mono:wght@500&family=Roboto+Slab:wght@500;700&display=swap">
<style>
@page{size:A4;margin:14mm 12mm 16mm}
:root{--ink:#241a2e;--ink-2:#5e5468;--ink-3:#8a8096;--line:#e6dcef;--brand:#7718aa;--brand-soft:#f4eafb;--brand-ink:#5b1184;--warn:#a35a00;--warn-soft:#fff3e2;--ok:#227a37;--ok-soft:#e7f5ea}
*{box-sizing:border-box}
body{margin:0;font-family:Roboto,Arial,sans-serif;color:var(--ink);font-size:9.5pt;line-height:1.42;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.cover{padding-top:8mm}
.eyebrow{font-size:8pt;letter-spacing:.08em;text-transform:uppercase;color:var(--brand);font-weight:700}
h1{font-family:"Roboto Slab",Georgia,serif;font-size:26pt;margin:4px 0 6px;color:var(--ink)}
.lede{color:var(--ink-2);max-width:150mm;font-size:10.5pt;margin:0}
.stats{display:flex;gap:26px;margin:14px 0 4px}
.stats div{display:flex;flex-direction:column}.stats b{font-family:"Roboto Slab",serif;font-size:16pt}.stats span{font-size:8pt;color:var(--ink-3)}
h2.sec{font-family:"Roboto Slab",serif;font-weight:500;font-size:11pt;letter-spacing:.06em;text-transform:uppercase;color:var(--brand);margin:16px 0 6px}
.rules{display:grid;grid-template-columns:1fr 1fr;gap:6px 18px;margin:0;padding:0;list-style:none}
.rules li{padding-left:9px;border-left:2px solid var(--line);color:var(--ink-2)}.rules b{color:var(--ink)}
table{width:100%;border-collapse:collapse}
th{font-size:7.5pt;text-align:left;font-weight:500;color:var(--ink-3);padding:4px 6px;border-bottom:1px solid var(--line)}
td{padding:5px 6px;border-bottom:1px solid var(--line);vertical-align:top}
tr{break-inside:avoid}
.tags-legend td{font-size:8.5pt}
.part{break-before:page}
.part>h2{font-family:"Roboto Slab",serif;font-weight:500;font-size:12pt;letter-spacing:.06em;text-transform:uppercase;color:var(--brand);margin:0 0 4px}
.part>h2 small{font-family:Roboto,sans-serif;text-transform:none;letter-spacing:0;color:var(--ink-3);font-size:9pt;font-weight:400}
.track{margin-top:10px;border:1px solid var(--line);border-radius:8px;overflow:hidden}
.track-head{display:flex;gap:10px;align-items:baseline;padding:7px 8px;background:var(--brand-soft);break-after:avoid}
.track-head h3{margin:0;font-size:10.5pt}.tid{font-family:"Roboto Mono",monospace;font-size:8pt;color:var(--brand-ink)}.tmeta{margin-left:auto;font-size:8pt;color:var(--ink-2)}
.track-note{font-size:8.5pt;color:var(--ink-2);padding:5px 8px 0}
thead{display:table-header-group}
td.id{font-family:"Roboto Mono",monospace;font-size:8pt;color:var(--brand-ink);white-space:nowrap;width:13mm}
td.title b{display:block;font-weight:500;font-size:9.5pt}
td.title span{display:block;font-size:8.5pt;color:var(--ink-2);margin-top:1px}
.flag{display:block;font-style:normal;font-size:8pt;color:var(--warn);font-weight:500}
td.time{white-space:nowrap;color:var(--ink-2);width:12mm;font-variant-numeric:tabular-nums}
td.pre{font-family:"Roboto Mono",monospace;font-size:7.5pt;color:var(--ink-3);width:20mm}
td.tags{width:52mm}
.chip{display:inline-block;font-size:7pt;line-height:1.3;padding:1px 5px;margin:0 2px 2px 0;border-radius:999px;border:1px solid var(--line);color:var(--ink-2)}
.chip.aud{background:var(--brand-soft);border-color:transparent;color:var(--brand-ink)}
.chip.plan{background:var(--ok-soft);border-color:transparent;color:var(--ok)}
.chip.sw{background:var(--warn-soft);border-color:transparent;color:var(--warn)}
.paths{break-before:page}
td.pname{font-weight:500;white-space:nowrap}td.num{white-space:nowrap;color:var(--ink-2)}td.pids{font-family:"Roboto Mono",monospace;font-size:7.5pt;color:var(--ink-2)}
.issue{border-left:3px solid var(--warn);background:var(--warn-soft);padding:6px 9px;margin-bottom:6px;border-radius:4px;color:var(--ink-2);break-inside:avoid}
.issue b{color:var(--ink)}.issue .ref{font-family:"Roboto Mono",monospace;font-size:7.5pt;color:var(--ink-3);white-space:nowrap}
.foot{margin-top:14px;font-size:8pt;color:var(--ink-3)}
</style></head><body>
<div class="cover">
<div class="eyebrow">Customer tutorials · ${esc(date)}</div>
<h1>Ad-Din Tutorial Series</h1>
<p class="lede">A complete video series for Ad-Din, from creating an account to using every feature. Every video is self-contained and under five minutes. The order follows a new customer: create an account, register the organisation, subscribe, set it up, then use it day to day.</p>
<div class="stats"><div><b>${PARTS.length}</b><span>parts</span></div><div><b>${TRACKS.length}</b><span>tracks</span></div><div><b>${videos.length}</b><span>videos</span></div><div><b>${fmtH(total)}</b><span>total running time</span></div><div><b>${fmt(total / videos.length)}</b><span>average length</span></div></div>
<h2 class="sec">Rules every video follows</h2>
<ul class="rules">
<li><b>Self-contained.</b> Each opens with a “You’ll need” card: role, plan, and what must already be set up. Prerequisites are listed so viewers can jump back, but the video works on its own.</li>
<li><b>Five minutes or less.</b> Target 3–5 minutes. Longer topics split into Part 1 / Part 2, each standing alone.</li>
<li><b>One job per video.</b> The title is the task (“Create class sections”), not the screen name.</li>
<li><b>One demo world.</b> One seeded masjid and madrasah with fixed demo users, so screens match across all videos and can be re-recorded.</li>
<li><b>Real labels.</b> Every on-screen word in a script is taken from the app’s own text.</li>
<li><b>Same shape.</b> What you’ll be able to do (10 s) → You’ll need (5 s) → numbered steps → recap → related videos.</li>
</ul>
<h2 class="sec">How each video is tagged</h2>
<table class="tags-legend"><tbody>
<tr><td><span class="chip aud">Audience</span></td><td>Everyone · Org Admin · Masjid Admin · Madrasah Admin · Teacher · Staff · Parent · Student · Member (community / app user)</td></tr>
<tr><td><span class="chip plan">Plan needed</span></td><td>Free · Premium (the user’s own Ad-Din Premium or an organisation seat) · Add-on: Website · Add-on: Prayer Times Premium</td></tr>
<tr><td><span class="chip sw">Switch</span></td><td>A feature switch on the organisation’s Services tab that must be on: Academic Activity · Class Announcements · Payment Module · Exam Marks · Staff Attendance · Donation Page · Family Subscription sharing</td></tr>
<tr><td><span class="chip">Platform</span></td><td>Web · App · Both</td></tr>
<tr><td><span class="chip">Stage</span></td><td>Start (account and organisation) · Setup (one-time) · Daily (routine use) · Periodic (term, pay period, year end)</td></tr>
</tbody></table>
<h2 class="sec">Series at a glance</h2>
<table><thead><tr><th>Part</th><th>Tracks</th><th>Videos</th><th>Time</th></tr></thead><tbody>
${PARTS.map(p => { const ts = TRACKS.filter(t => t.part === p.id); const vs = videos.filter(v => ts.some(t => t.id === v.track)); return `<tr><td><b>${p.id} · ${esc(p.name)}</b></td><td>${ts.map(t => `${t.id} ${esc(t.name)}`).join(" · ")}</td><td class="num">${vs.length}</td><td class="num">${fmtH(vs.reduce((a, v) => a + v.min, 0))}</td></tr>`; }).join("")}
</tbody></table>
</div>
${body}
<section class="paths">
<h2 class="sec">Role playlists</h2>
<p style="color:var(--ink-2);margin:0 0 6px">Each role watches its own path through the series, in this order.</p>
<table><thead><tr><th>Role</th><th>Videos</th><th>Time</th><th>Video IDs, in order</th></tr></thead><tbody>${paths}</tbody></table>
<h2 class="sec" style="color:var(--warn)">Decide before recording</h2>
${issues}
<p class="foot">Built from the Ad-Din Web code: routes, sidebar menu and app text. Video lengths are targets; each script fixes the final length.</p>
</section>
</body></html>`;
return html;
}

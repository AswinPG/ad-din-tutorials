// The demo world every video is recorded in: one fictional masjid and madrasah, one demo family, and the API answers
// the real Ad-Din app needs to show them. Described for people in ../demo-world.md. All names, places, emails and
// numbers are made up (555 phone numbers, example.com emails). Response shapes follow the Angular services and models
// on origin/master and the sanitised captures in staff-attendance-launch/video/fixtures.
import { ok, fail } from "../lib/mock.mjs";

export const IDS = { masjid: 101, madrasah: 201, user: 1001, child: 1002, spouse: 1003 };
export const DEMO = {
    masjid: "Maple Grove Masjid",
    madrasah: "Maple Grove Madrasah",
    street: "100 Maple Grove Way",
    city: "Toronto",
    state: "Ontario",
    zip: "M0M 0A0",
    country: "Canada",
    phone: "416-555-0100",
    orgEmail: "office@maplegrove.example.com",
    lat: 43.7612, lng: -79.2873,
    first: "Yusuf", last: "Rahman", username: "yusuf_rahman", email: "yusuf.rahman@example.com",
    child: { first: "Maryam", last: "Rahman" },
    spouse: { first: "Aisha", last: "Rahman" },
};
const address = `${DEMO.street}, ${DEMO.city}, ON`;

const b64 = (o) => Buffer.from(JSON.stringify(o)).toString("base64").replace(/=+$/, "").replace(/\+/g, "-").replace(/\//g, "_");

/** The signed-in demo user as the SPA stores it (localStorage AdDinUser). The token is a fake unsigned JWT for the mock only. */
export function session(over = {}) {
    const token = b64({ alg: "none", typ: "JWT" }) + "." + b64({ UserID: String(IDS.user), HomeMasjidID: String(IDS.masjid), HomeMadressahID: String(IDS.madrasah), exp: 4102444800 }) + ".demo";
    return {
        userID: IDS.user, identifier: "000000", firstName: DEMO.first, lastName: DEMO.last, userName: DEMO.username, email: DEMO.email,
        emailVerified: true, profilePicture: "", dob: null, latitude: DEMO.lat, longitude: DEMO.lng, locationName: DEMO.city, address,
        genderID: 1, homeMasjidID: IDS.masjid, homeMadressahID: IDS.madrasah, modifiedBy: IDS.user, modifiedDate: null,
        token, refreshToken: "demo", isAdmin: true, isMasjidAdmin: true, isSubscriber: true, timeZoneOffset: -300, studentNumber: "", isVolunteer: false,
        ...over,
    };
}

const masjid = () => ({
    masjidID: IDS.masjid, name: DEMO.masjid, location: null, locationName: null, latitude: DEMO.lat, longitude: DEMO.lng, address,
    streetNumber: "100", streetName: "Maple Grove Way", streetAddress: null, city: DEMO.city, state: DEMO.state, zipCode: DEMO.zip, country: DEMO.country,
    phone1: DEMO.phone, phone2: null, fax: null, mobileNumber: null, email: DEMO.orgEmail,
    isRequestedByAdmin: true, isRequestedByStaff: false, isRequestedByVolunteer: false, approved: true, suspended: false,
    modifiedBy: null, modifiedDate: null, distance: 0.4, addedBy: null, logo: "", familySubscriptionPlan: true, staffAttendance: false,
});
const madrasah = () => ({
    madressahID: IDS.madrasah, name: DEMO.madrasah, location: null, locationName: null, latitude: DEMO.lat, longitude: DEMO.lng, address,
    streetNumber: "100", streetName: "Maple Grove Way", streetAddress: null, city: DEMO.city, state: DEMO.state, zipCode: DEMO.zip, country: DEMO.country,
    phone1: DEMO.phone, phone2: null, fax: null, mobileNumber: DEMO.phone, email: DEMO.orgEmail, numOfStudents: 48,
    isRequestedByAdmin: true, isRequestedByTeacher: true, isRequestedByStudent: true, isRequestedByParent: true, isRequestedByStaff: false,
    suspended: false, approved: true, modifiedBy: null, modifiedDate: "0001-01-01T00:00:00", distance: 0.4, addedBy: null, logo: "",
    currencyID: 1, isAcademic: true, classStory: true, paymentModule: false, examMarks: false, principal: IDS.user, vicePrincipal: null,
    principalName: null, schoolId: null, schoolSettings: null, familySubscriptionPlan: true, staffAttendance: false, reportAutoSave: true,
});
const org = (type) => ({ id: type === "masjid" ? IDS.masjid : IDS.madrasah, type, name: type === "masjid" ? DEMO.masjid : DEMO.madrasah, latitude: DEMO.lat, longitude: DEMO.lng, address, streetNumber: "100", streetName: "Maple Grove Way", city: DEMO.city, state: DEMO.state, zipCode: DEMO.zip, country: DEMO.country, distance: 0.4, followed: true, isRequestedByAdmin: true, phone1: DEMO.phone, phone2: null, mobileNumber: null, email: DEMO.orgEmail });
const person = (id, first, last, extra = {}) => ({ userID: id, identifier: "000000", firstName: first, lastName: last, userName: null, email: null, emailVerified: false, profilePicture: "", dob: null, latitude: null, longitude: null, locationName: null, address: null, genderID: null, homeMasjidID: null, homeMadressahID: null, modifiedBy: null, modifiedDate: null, refreshToken: null, isAdmin: false, isMasjidAdmin: false, isSubscriber: false, timeZoneOffset: null, studentNumber: null, isVolunteer: false, ...extra });

/** Prayer times for any day: realistic Toronto times in early November. */
export function prayerDay(date) {
    const d = new Date(date);
    const iso = d.toISOString().slice(0, 10) + "T00:00:00";
    const P = (prayerName, prayerAdhan, prayerIqamah, prayerBegins = null) => ({ prayerName, prayerBegins, prayerAdhan, prayerIqamah });
    return {
        prayerDate: iso, hasThirtyDays: false, updateAfterSunset: true, hijriDate: { day: 18, month: 5, year: 1448 }, dayOfWeek: d.getDay(),
        singlePrayers: [
            P("Fajr", "05:50:00", "06:15:00", "05:50:00"), P("Sunrise", "07:00:00", null), P("Dhuhr", "12:20:00", "13:00:00", "12:20:00"),
            P("Asr", "14:50:00", "15:15:00", "14:50:00"), P("Sunset", "16:58:00", null), P("Maghrib", "17:00:00", "17:05:00", "17:00:00"),
            P("Isha", "18:20:00", "19:30:00", "18:20:00"), P("Jumah", "13:00:00", "13:30:00", "12:20:00"),
        ],
    };
}

/** One day of the masjid's schedule as Prayer Times → View Prayer Times lists it; times drift a minute a day. */
export function prayerRow(t) {
    const d = new Date(t), n = Math.round((t - Date.UTC(2026, 10, 10)) / 86400000);
    const hm = (h, m) => { const x = h * 60 + m; return `${String(Math.floor(x / 60)).padStart(2, "0")}:${String(((x % 60) + 60) % 60).padStart(2, "0")}:00`; };
    return {
        prayerDate: d.toISOString().slice(0, 10) + "T00:00:00",
        fajarBegins: hm(5, 50 + n), fajar: "06:15:00", zuharBegins: "12:20:00", zuhar: "13:00:00", asarBegins: hm(14, 50 - n), asar: "15:15:00",
        magribBegins: hm(17, 0 - n), magrib: hm(17, 5 - n), ishaBegins: hm(18, 20 - n), isha: "19:30:00",
        jumah1: "13:30:00", jumah1Adhan: "13:00:00", jumah2: "14:30:00", jumah3: null, jumah4: null,
    };
}

export function createWorld(opts = {}) {
    const state = { unread: 2, ...opts.state };
    const user = () => ({
        ...person(IDS.user, DEMO.first, DEMO.last), userName: DEMO.username, email: DEMO.email, emailVerified: true, address,
        homeMasjidID: IDS.masjid, homeMadressahID: IDS.madrasah, homeMasjidName: DEMO.masjid, homeMadressahName: DEMO.madrasah,
        salutation: "Mr.", middleName: null, mobile: DEMO.phone, quranType: 1, userSpouse: null, userParents: null,
        userChildrens: [{ relation: "Father", userData: person(IDS.child, DEMO.child.first, DEMO.child.last) }],
        organisationRoles: null, isDeleted: false, mediaConsent: false, isVolunteer: false,
    });
    const messages = () => [
        { messageID: 9003, organisationType: "Masjid", organisationID: IDS.masjid, organisationName: DEMO.masjid, messageTitle: "Community iftar this Friday", messageText: "Join us after Maghrib in the main hall. Everyone is welcome.", hyperlink: null, userID: IDS.user, flag: false, archive: false, read: false, messageDate: "2026-11-09T15:30:00", systemMessage: false, news: false, imageUrl: null, contentID: 0, onBehalfUserID: null, senderID: null, messageType: null, sender: null, attachments: null },
        { messageID: 9002, organisationType: "Madressah", organisationID: IDS.madrasah, organisationName: DEMO.madrasah, messageTitle: "Report cards are ready", messageText: "Term 1 report cards are now available in the Parent Portal.", hyperlink: null, userID: IDS.user, flag: false, archive: false, read: false, messageDate: "2026-11-08T18:00:00", systemMessage: false, news: false, imageUrl: null, contentID: 0, onBehalfUserID: null, senderID: null, messageType: null, sender: null, attachments: null },
    ];
    const ev = (id, title, from, to, desc) => ({ eventID: id, eventDateID: id * 10, organisationType: "Masjid", organisationID: IDS.masjid, organisationName: DEMO.masjid, orgAddress: address, orgPhone: null, orgEmail: DEMO.orgEmail, fromEventDate: from, toEventDate: to, eventTitle: title, eventType: null, eventDescription: desc, eventUrl: "", fromDate: from, toDate: to, allDay: false, repeatInterval: null, eventMobilePoster: "", eventWebPoster: "", sameLocation: true, locationName: null, latitude: DEMO.lat, longitude: DEMO.lng, venueName: DEMO.masjid, streetNumber: "100", streetName: "Maple Grove Way", city: DEMO.city, state: DEMO.state, zipCode: DEMO.zip, country: DEMO.country, venuePhone: null, userTypes: null, displayOnTV: null, ticketUrl: null });
    const events = () => [
        ev(501, "Family Quran Night", "2026-11-13T18:30:00", "2026-11-13T20:30:00", "Recitation, stories and refreshments for the whole family."),
        ev(502, "Youth Open House", "2026-11-21T14:00:00", "2026-11-21T16:00:00", "Meet the madrasah teachers and see the classrooms."),
    ];
    const section = (id, name) => ({ classSectionID: id, classSectionName: name });
    const classes = () => [
        { classID: 301, className: "Hifz Class A", classDescription: "Full-time Hifz", classType: "NonAcademic", classSections: [section(401, "Morning"), section(402, "Evening")] },
        { classID: 302, className: "Hifz Class B", classDescription: "Full-time Hifz", classType: "NonAcademic", classSections: [section(403, "Morning"), section(404, "Evening")] },
        { classID: 303, className: "Weekend Quran", classDescription: "Saturday and Sunday", classType: "NonAcademic", classSections: [section(405, "Level 1"), section(406, "Level 2")] },
    ];
    const teachers = () => [person(1101, "Bilal", "Hussain", { userName: null }), person(1102, "Fatima", "Siddiqui"), person(1103, "Omar", "Khalid")];
    const map = (n, task, cls, secs, picker, start, end = null) => ({ assignmentGroupId: "g" + n, assignmentIdentifier: "A" + n, classID: cls, subjectID: 601, task, pickerType: picker, recurrence: "Daily", startDate: start, endDate: end, daysOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], sections: secs.map((s, i) => ({ assignmentID: n * 10 + i, classSectionID: s, excludedStudents: [] })) });
    const hifzMappings = () => [
        map(1, "Sabaq", 301, [401, 402], "Ayah", "2026-09-07T00:00:00"),
        map(2, "Sabaq Para", 301, [401, 402], "Page", "2026-09-07T00:00:00"),
        map(3, "Dour", 301, [401], "Juz", "2026-09-07T00:00:00"),
        map(4, "Sabaq", 302, [403, 404], "Ayah", "2026-09-07T00:00:00"),
        map(5, "Dour", 302, [403, 404], "Juz", "2026-09-07T00:00:00"),
        map(6, "Test Para", 303, [405, 406], "Juz", "2026-09-12T00:00:00"),
    ];
    const kids = [[IDS.child, DEMO.child.first, DEMO.child.last, `${DEMO.first} ${DEMO.last}`], [1201, "Zaid", "Karim", "Samir Karim"], [1202, "Hana", "Mirza", "Noor Mirza"], [1203, "Ibrahim", "Nasser", "Adam Nasser"], [1204, "Layla", "Haddad", "Rania Haddad"], [1205, "Yahya", "Saleh", "Tariq Saleh"]];
    const archive = () => ({
        cards: kids.map(([id], i) => ({ id: 7001 + i, studentId: id, classId: 301, classSectionId: 401, reportId: 81, termId: 91, schoolYear: 2027, completed: true, downloadable: true, emailable: true, emailStatus: "delivered", emailSentAt: "2026-11-07T16:00:00" })),
        students: kids.map(([id, f, l, parent]) => ({ studentId: id, salutation: null, firstName: f, lastName: l, profilePicture: null, parents: [{ userID: id === IDS.child ? IDS.user : id + 500, name: parent, email: id === IDS.child ? DEMO.email : null, emailVerified: id === IDS.child }] })),
        classes: [{ classId: 301, className: "Hifz Class A" }],
        reports: [{ id: 81, name: "Hifz Progress Report" }],
        terms: [{ termId: 91, name: "Term 1", startDate: "2026-09-07T00:00:00", endDate: "2026-11-06T00:00:00" }],
    });
    // the finder's nearby list: the demo organisation first, then two more fictional ones
    const nearby = (type) => {
        const isM = type === "masjid";
        const base = isM ? masjid() : madrasah();
        const key = isM ? "masjidID" : "madressahID";
        const other = (id, name, street, dLat, dLng, dist) => ({ ...base, [key]: id, name, address: `${street}, ${DEMO.city}, ON`, streetName: street, latitude: DEMO.lat + dLat, longitude: DEMO.lng + dLng, distance: dist, isRequestedByAdmin: false, isRequestedByTeacher: false, isRequestedByStudent: false, isRequestedByParent: false });
        return [
            { ...base, distance: 450, isRequestedByAdmin: false, isRequestedByTeacher: false, isRequestedByStudent: false, isRequestedByParent: false },
            isM ? other(102, "Cedar Hill Masjid", "25 Cedar Hill Road", 0.011, -0.014, 1600) : other(202, "Cedar Hill Islamic School", "25 Cedar Hill Road", 0.011, -0.014, 1600),
            isM ? other(103, "Riverbend Islamic Centre", "7 Riverbend Lane", -0.017, 0.019, 2700) : other(203, "Riverbend Quran Academy", "7 Riverbend Lane", -0.017, 0.019, 2700),
        ];
    };
    const routes = [
        // ---- account and shell ----
        [/^POST \/v1\/Account\/RefreshToken/i, () => ok(null)],
        [/^GET \/v1\/Account\/GetUserEntityById\//i, () => ok(user(), "MAAA100")],
        [/^GET \/v1\/Account\/GetUserClaims/i, () => ok([{ claimID: 0, userID: 0, claimName: "AdDinUser", claimExpiry: null, tokenValidity: null }, { claimID: 0, userID: 0, claimName: "Subscriber", claimExpiry: "2027-11-01T00:00:00", tokenValidity: null }], "MAAB100")],
        [/^GET \/v1\/Account\/Subscriptions\/GetSubscriptions/i, () => ok([{ subscriptionID: 1, planID: "addinpremiummonthly", userID: IDS.user, subscriptionService: "Stripe", subscriptionIdentifier: "demo", subscriptionExpiry: "2027-11-01T00:00:00", active: true, organizationCustomerID: null, familyPlan: false, organizationType: null, organizationID: null, organizationName: null, ownerName: null }], "SA100")],
        [/^GET \/v1\/Settings\/GetSettings/i, () => ok({ Subscription: "Enabled" }, "SEA100")],
        [/^GET \/v1\/Masjid\/GetMasjidById\//i, () => ok(masjid(), "MMN100")],
        [/^GET \/v1\/Madressah\/GetMadressahById\//i, () => ok(madrasah(), "MMDN100")],
        [/^GET \/v1\/Masjid\/ListOrganisationsOfUser/i, () => ok([org("masjid"), org("madressah")], "MMP100")],
        [/^GET \/v1\/Masjid\/GetFollowedMasjids/i, () => ok([masjid()], "MMH100")],
        [/^GET \/v1\/Madressah\/ListStudentsOfParent/i, () => ok([person(IDS.child, DEMO.child.first, DEMO.child.last)], "MMDAN100")],
        [/^GET \/v1\/Madressah\/LinkedMasjid\//i, () => ok({ linkID: 1, madressahID: IDS.madrasah, masjidID: IDS.masjid, masjidName: DEMO.masjid, masjidAddress: address, createdAt: "2026-09-01T12:00:00", updatedAt: "2026-09-01T12:00:00" }, "MMLA100")],
        [/^GET \/v1\/Madressah\/Settings\/\d+$/i, () => ok({ madressahID: IDS.madrasah, principal: IDS.user, vicePrincipal: null }, "MBCB100")],
        [/^GET \/v1\/Message\/ListByDate\?status=Unread/i, () => ok({ data: messages().slice(0, state.unread), totalCount: state.unread }, "MSGG100")],
        [/^GET \/v1\/Message\/ListByDate/i, () => ok({ data: messages(), totalCount: 2 }, "MSGG100")],
        [/^GET \/v1\/News\/List\//i, () => ok([], "NWA100")],
        [/^GET \/v1\/Masjid\/Prayer\/GetPrayerTimesOfDay\?/i, (req) => {
            const day = new URL(req.url()).searchParams.get("day") || "11-10-2026";
            const [m, d, y] = day.split("-").map(Number);
            return ok({ masjidID: IDS.masjid, name: DEMO.masjid, city: DEMO.city, hasThirtyDays: false, updateAfterSunset: true, prayers: null, prayerOfDay: prayerDay(Date.UTC(y, m - 1, d)) }, "MJPRK100");
        }],
        [/^GET \/v1\/Masjid\/Prayer\/ListPrayerTimes\?/i, (req) => {
            const q = new URL(req.url()).searchParams;
            const [y1, m1, d1] = q.get("startDate").split("-").map(Number), [y2, m2, d2] = q.get("endDate").split("-").map(Number);
            const prayers = [];
            for (let t = Date.UTC(y1, m1 - 1, d1); t <= Date.UTC(y2, m2 - 1, d2) && prayers.length < 62; t += 86400000) prayers.push(prayerRow(t));
            return ok({ masjidID: IDS.masjid, name: DEMO.masjid, city: DEMO.city, prayers, hasThirtyDays: false }, "MJPRH100");
        }],
        [/^GET \/v1\/Masjid\/Prayer\/GetPrayerSettings/i, () => ok({ masjidID: IDS.masjid, calculationMethod: 2, asrMethod: 0, highLatitudeMethod: 1, updateAfterSunset: true, magribOffset: 5 }, "MJPS100")],
        // ---- events and calendar: two upcoming events at the masjid ----
        [/^POST \/v1\/Events\/ListEvents/i, () => ok(events(), "EVL100")],
        [/Holiday\/list/i, () => ok({ holidayList: [], totalCount: 0 }, "MMP100")],
        // ---- dashboard ----
        [/^GET \/v2\/Dashboard\/DashboardTile/i, () => ok({ dashboardTileVisibility: { donations: false, quickActions: true, facilityAndOperationsDashboard: false, communityOutreachAndSocialImpact: false, websitePerformanceAnalytics: false, yearlyEventsHeatmap: false, totalCounts: true, quranHifzAssignments: false, academicAttendanceInsights: false, reportReadiness: false, attendance: true, payment: false }, quickActionJson: "" }, "DB100")],
        [/^GET \/v2\/Dashboard\/GetDashboardOrganisationSummary\//i, () => ok({ homeMasjidUsersCount: 312, homeMadressahUsersCount: 96, madressahFollowerCount: 140, masjidFollowerCount: 486, masjidVolunteerCount: 18, studentCount: 48, girlsCount: 25, boysCount: 23, adminCount: 3, staffCount: 7, classCount: 6, alumniStudentCount: 12, classSectionCount: 8 }, "DB100")],
        [/^GET \/v2\/Dashboard\/Madressah\/\d+\/attendance\/stats\//i, () => ok({ summary: { totalSections: 8, completedAttendance: 6, pendingAttendance: 2 }, details: [] }, "DB100")],
        [/^GET \/v2\/Dashboard\/GetEventSummary\//i, () => ok({ items: [] }, "DB100")],
        [/^GET \/v2\/Dashboard\/MasjidPublishKPIs/i, () => ok({ masjidId: IDS.masjid, showDonationCard: false }, "DB100")],
        [/AcademicTerm\/list/i, () => ok([], "MMP100")],
        [/Payment\/ListPaymentTypes/i, () => ok({ paymentTypes: [], totalCount: 0 }, "MMP100")],
        // ---- madrasah: classes, teachers, Quran Hifz mappings ----
        [/^GET \/v1\/Madressah\/Class\/listAllClasses/i, () => ok(classes(), "MDCK100")],
        [/^POST \/v1\/Madressah\/listMadressahUsers/i, () => ok({ userList: teachers(), totalCount: teachers().length }, "MMDU100")],
        [/^GET \/v2\/Madressah\/Assignment\/listWithExclusions/i, () => ok(hifzMappings(), "MDASA100")],
        [/^POST \/v2\/Madressah\/Assignment\/listAssignmentRecords/i, () => ok({ totalCount: 0, assignmentList: [] }, "MDASB100")],
        // ---- reports: one published Term 1 report card per student ----
        [/^GET \/v1\/AcademicReports\/archive\/index/i, () => ok(archive(), "MARTQ100")],
        // ---- masjid finder: the demo masjid and madrasah, pinned ----
        [/^GET \/v1\/Masjid\/listOrganisationsByLocation/i, () => ok([org("masjid"), { ...org("madressah"), latitude: DEMO.lat - 0.0016, longitude: DEMO.lng + 0.0021, distance: 0.6 }], "MMAD100")],
        // ---- finder (onboarding): nearby masjids and madrasahs, distances in metres ----
        [/^GET \/v2\/Masjid\/list/i, () => ok(nearby("masjid"), "MMH100")],
        [/^GET \/v2\/Madressah\/list/i, () => ok(nearby("madressah"), "MMH100")],
        [/^GET \/v1\/Masjid\/GetHomeMasjid/i, () => ok(state.newUser ? null : masjid(), "MMH100")],
        [/^GET \/v1\/Madressah\/GetHomeMadressah/i, () => ok(state.newUser ? null : madrasah(), "MMH100")],
        [/^GET \/v1\/Masjid\/GetFollowedOrganisations/i, () => ok([], "MMH100")],
        // ---- account: sign up, log in, forgot password (statuses and messages as AccountController sends them) ----
        [/^GET \/v1\/Account\/CheckUsernameExists\/([^/?]+)/i, (req, m) => ok((state.takenUsernames || ["admin"]).includes(decodeURIComponent(m[1]).toLowerCase()), "MAK100")],
        [/^POST \/v1\/Account\/Register/i, async () => { await new Promise((r) => setTimeout(r, 1400)); state.newUser = true; return ok(session({ homeMasjidID: null, homeMadressahID: null, isAdmin: false, isMasjidAdmin: false, isSubscriber: false }), "MAA100", "Successfully Registered."); }],
        [/^POST \/v1\/Account\/Login/i, async (req) => {
            await new Promise((r) => setTimeout(r, 900));
            const b = JSON.parse(req.postData() || "{}");
            if (b.username === DEMO.username && b.password === state.password) return ok(session(), "MAI100");
            return { data: null, status: "MAB300", message: "Invalid Credentials.", localizedMessage: "Invalid Credentials. Please check and try again!", localizedErrorLink: null, localizedErrorLinkText: null };
        }],
        [/^POST \/v1\/Account\/ForgotPasswordRequest/i, async () => { await new Promise((r) => setTimeout(r, 800)); return ok(true, "MAJ100"); }],
        [/Currency\/list/i, () => ok({ currencyList: [{ currencyID: 1, id: 1, code: "CAD", currencyCode: "CAD", name: "Canadian Dollar", currencyName: "Canadian Dollar", symbol: "$" }] }, "CUB100")],
        [/^GET \/v1\/PFWControls\//i, () => ok(null, "PFW100")],
        [/ListLinkingRequest|LiveStreaming\/list|Holiday\/list|SearchConsole|ServicePages\/List/i, () => ok([], "MMP100")],
        [/Push|Device|Register(Token|Device)|Notification\/(Register|Token)/i, () => ok(null)],
    ];
    return {
        state, DEMO, IDS,
        // fonts and the Google map (read-only tiles for the fictional location); nothing else leaves the machine
        allowHosts: ["fonts.googleapis.com", "fonts.gstatic.com", "maps.googleapis.com", "maps.gstatic.com", ...(opts.allowHosts || [])],
        // scene-specific routes go first so they win
        routes: [...(opts.routes || []), ...routes],
    };
}

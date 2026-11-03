// src/data/carnival.ts
//
// Single source of truth for the /carnival page.
//
// HOW TO UPDATE
//   • When the next carnival dates are announced: set `year`, `start` and `end`
//     (ISO strings with the Eastern offset: -04:00 in summer).
//   • When the next raffle is announced: replace the `raffle` object (and swap the
//     two images in src/assets/images/carnival/: jeep-raffle.jpg, raffle-promo.png).
//   • Nothing else needs touching. Once `end` has passed, the page automatically
//     switches to "<year + 1> · Dates TBD" and hides the raffle once `raffle.endsAt`
//     has passed — no redeploy needed (the page re-checks the clock in the browser).
//   • Set `start` and `end` to null for "TBD". Set `raffle` to null for no raffle.

export interface Raffle {
    /** Shown as "The {name}" and in the page description. */
    name: string;
    url: string;
    /** The raffle disappears from the page after this moment (the drawing). */
    endsAt: string;
    intro: string;
    /** Prize text may contain simple inline HTML such as <em>. */
    prizes: { rank: string; text: string }[];
    facts: string[];
    note: string;
    promoAlt: string;
    photoAlt: string;
}

export interface CarnivalConfig {
    year: number;
    start: string | null;
    end: string | null;
    hours: string;
    raffle: Raffle | null;
}

export const carnival: CarnivalConfig = {
    year: 2026,
    start: '2026-07-28T18:00:00-04:00',
    end: '2026-08-01T23:00:00-04:00',
    hours: '6:00 – 11:00 PM',
    raffle: {
        name: '2026 Jeep Raffle',
        url: 'https://givebutter.com/2026-evfc1-jeep-raffle-copy-r5mjxx',
        endsAt: '2026-08-01T22:30:00-04:00',
        intro: 'Our biggest raffle of the year — three chances to win, and every ticket supports your local volunteer fire company.',
        prizes: [
            {
                rank: '1st',
                text: 'Your choice of a 2026 Jeep Grand Cherokee L Summit <em>or</em> 2026 Jeep Wrangler Rubicon',
            },
            { rank: '2nd', text: '$500 Amazon gift card' },
            { rank: '3rd', text: '$250 Amazon gift card' },
        ],
        facts: ['$25 per ticket', 'Drawing Sat, Aug 1 · 10:30 PM', 'Live-streamed'],
        note: 'Winner need not be present to win.',
        promoAlt: 'Raffle tickets on sale: 2026 Jeep Grand Cherokee L Summit and 2026 Jeep Wrangler Rubicon',
        photoAlt: 'Easton Fire Department helmet with Jeep raffle tickets fanned out in front of a fire engine',
    },
};

// ---------------------------------------------------------------------------

export type Phase = 'scheduled' | 'live' | 'tbd';

export interface CarnivalState {
    phase: Phase;
    /** The carnival year being promoted (rolls forward after the carnival ends). */
    year: number;
    /** Opening time in ms (only when phase is "scheduled"). */
    startMs: number | null;
    /** "Tue Jul 28 — Sat Aug 1", or "TBD". */
    dates: string;
    /** "July 28 – August 1, 2026", or "TBD". */
    longDates: string;
    /** "Gates open Tuesday, July 28 at 6:00 PM — see you there!" (scheduled only). */
    gates: string;
    /** "Saturday, August 1" — last night (live only). */
    lastDay: string;
    raffleVisible: boolean;
}

const TZ = 'America/New_York';

function fmt(ms: number, opts: Intl.DateTimeFormatOptions): string {
    return new Intl.DateTimeFormat('en-US', { timeZone: TZ, ...opts }).format(ms);
}

function parse(iso: string | null): number | null {
    if (!iso) return null;
    const ms = Date.parse(iso);
    return Number.isNaN(ms) ? null : ms;
}

export function resolveCarnival(now: Date = new Date(), config: CarnivalConfig = carnival): CarnivalState {
    const nowMs = now.getTime();
    const startMs = parse(config.start);
    const endMs = parse(config.end);
    const hasDates = startMs !== null && endMs !== null;

    const over = endMs !== null && nowMs > endMs;
    const phase: Phase = over || !hasDates ? 'tbd' : nowMs < startMs! ? 'scheduled' : 'live';
    // Once a carnival is over we promote the next year, dates not yet known.
    const year = over ? config.year + 1 : config.year;

    let dates = 'TBD';
    let longDates = 'TBD';
    let gates = '';
    let lastDay = '';
    if (phase !== 'tbd') {
        const s = startMs!;
        const e = endMs!;
        dates = `${fmt(s, { weekday: 'short', month: 'short', day: 'numeric' })} — ${fmt(e, { weekday: 'short', month: 'short', day: 'numeric' })}`.replaceAll(',', '');
        longDates = `${fmt(s, { month: 'long', day: 'numeric' })} – ${fmt(e, { month: 'long', day: 'numeric', year: 'numeric' })}`;
        gates = `Gates open ${fmt(s, { weekday: 'long', month: 'long', day: 'numeric' })} at ${fmt(s, { hour: 'numeric', minute: '2-digit' })} — see you there!`;
        lastDay = fmt(e, { weekday: 'long', month: 'long', day: 'numeric' });
    }

    const raffleEnd = parse(config.raffle?.endsAt ?? null);
    const raffleVisible = !!config.raffle && (raffleEnd === null || nowMs <= raffleEnd);

    return { phase, year, startMs: phase === 'scheduled' ? startMs : null, dates, longDates, gates, lastDay, raffleVisible };
}

export function pageTitle(s: CarnivalState): string {
    const when = s.phase === 'tbd' ? `${s.year} · Dates TBD` : s.longDates;
    return `Annual Carnival · ${when} | Easton Volunteer Fire Company #1`;
}

export function pageDescription(s: CarnivalState, config: CarnivalConfig = carnival): string {
    const when =
        s.phase === 'tbd'
            ? `returns in summer ${s.year} — dates to be announced`
            : `returns ${s.longDates}, ${config.hours} nightly`;
    const raffle = s.raffleVisible && config.raffle ? ` — and the ${config.raffle.name}!` : '.';
    return `The Easton Volunteer Fire Company Annual Carnival ${when}. Rides, games, food and bingo at 1 Center Road, Easton CT${raffle}`;
}

/** Dev-only `?now=<ISO date>` override (browser side) so every phase can be previewed. */
export function currentTime(search: string): Date {
    if (import.meta.env.DEV) {
        const override = new URLSearchParams(search).get('now');
        if (override) {
            const d = new Date(override);
            if (!Number.isNaN(d.getTime())) return d;
        }
    }
    return new Date();
}

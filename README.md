# Saquib Khan — Portfolio (React)

A dark, developer-forward personal portfolio built with React + Vite. A role
toggle (Full Stack / Frontend / Backend / Data Analyst) swaps the summary, KPI
strip, experience bullets, skills, projects, and certifications across the
page, mirroring how you tailor each resume variant.

## Getting started

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

<!-- ## What changed in this revision

**Bug fix — content disappearing after switching the role toggle.** Two
sections (the hero KPI strip and the skills grid) combined a scroll-reveal
`ref` with a `key` that changed on role switch, on the *same* DOM element.
When the key changed, React swapped in a brand-new node, but the
IntersectionObserver that adds the "visible" class had only ever attached to
the original node — so the new content stayed at `opacity: 0` forever. Fixed
by keeping the reveal `ref` on a stable wrapper and letting only the
individual items (already keyed by their own labels) remount.

**Nav bar.** Links are now uppercase (`text-transform: uppercase` in CSS, so
the markup stays readable in code).

**Education.** Added Class 10 (2019) and Class 12 (2021), ML Convent School,
alongside the B.Tech. `education` is now `educationList`, an array rendered
in resume order (highest first) — see `src/data.js`.

**Design reference.** I couldn't load dribbble.com/shots/25196129 directly —
Dribbble is a JS-rendered site this tool can't execute, and its own search
result didn't surface a usable preview. What I could confirm: it's titled
"Developer Portfolio Landing page — Dark," a dark dashboard-style layout.
That's close to the direction already in place (KPI stat cards, bordered
dark panels, mono labels), so I didn't rebuild from scratch — if you can
screenshot the shot, I'll match it precisely.

**Cliché audit.** You listed 20 patterns that read as generic/AI-templated.
Checked the actual codebase against each:

| # | Pattern | Status |
|---|---|---|
| 1 | Untouched shadcn UI | Not used — N/A |
| 2 | Gradient hero text | Not used — N/A |
| 3 | Emojis in headings | Not used — N/A |
| 4 | Inter font everywhere | Inter is body-only; headings use Bricolage Grotesque, labels use JetBrains Mono — N/A |
| 5 | Colored border cards | Present (project/about cards). Left as-is — it's load-bearing for the dark-panel look, not decorative |
| 6 | Glassmorphism cards | Only the sticky header blurs (functional nav legibility), no frosted-glass content cards — N/A |
| 7 | Low-contrast dark mode | Checked: body text on background is ~6:1, passes WCAG AA (needs 4.5:1) — N/A |
| 8 | 3 icon boxes in a row | No such section — N/A |
| 9 | Badge above the headline | **Fixed** — removed the numbered eyebrow tag ("01 / About" etc.) from every section |
| 10 | Lucide icons everywhere | Trimmed to functional-only (nav, theme toggle, contact channels, project links); removed decorative icons from hero CTAs |
| 11 | Fade-in on scroll | **Fixed** — was firing on ~13 separate blocks; cut to one fade-in per section heading only |
| 12 | Cursor-following beam | **Removed** entirely (component, CSS, and usage) |
| 13 | Buttons fade on hover | Current hover states are border/color changes, not opacity fades — N/A |
| 14 | Inconsistent spacing | Reviewed; spacing already follows a consistent scale |
| 15 | Em dashes everywhere | **Fixed** — rewrote the role-summary sentences and bio copy to vary punctuation; left date ranges ("Apr 2026 — Present") as-is since that's conventional, and left one certification title as-is since it's the course's real name |
| 16 | Generic buzzword copy | Reviewed; copy stays close to your actual resume language rather than invented marketing phrasing |
| 17 | Serif italic accents | Not used in this project — N/A |
| 18 | Space Grotesk + Instrument Serif | Not used here (this project uses Bricolage Grotesque + JetBrains Mono + Inter) — N/A |
| 19 | Grain overlay gradient | Not used — N/A |

## Security audit

You asked for a 14-point production security audit (auth sessions, RBAC,
Firebase/database rules, SQL/NoSQL injection, file uploads, payment/webhook
verification, rate limiting, CORS, etc.).

Being direct about scope: **this project is a static, client-only React site
with no backend, no database, no authentication, no file uploads, and no
payment integration.** There is no server to secure, no session to verify, no
API to rate-limit, and no injection surface, because there's no input that
reaches a server or database at all — the only interactive elements are the
role-toggle buttons (client-side state) and `mailto:`/`tel:` links. Claiming
to "harden RBAC" or "secure Firebase rules" here would mean inventing systems
that don't exist in this codebase, so I didn't fake that.

What I actually checked and found clean:
- No API keys, secrets, tokens, or credentials anywhere in the source.
- No `console.log`/debug code or test/demo data left in.
- No forms that submit anywhere (contact section is `mailto:`/`tel:` links
  only), so there's no input-validation or injection surface to patch.

What I added, since it's genuinely applicable to a static deployment:
- `public/_headers` (Netlify) and `vercel.json` (Vercel) — both set
  `X-Content-Type-Options`, `X-Frame-Options: DENY`, `Referrer-Policy`,
  `Permissions-Policy`, and a `Content-Security-Policy` restricting scripts,
  styles, and fonts to the origins this site actually uses.

If you want items 2–13 of that checklist genuinely audited, that applies to
**SprintDesk, CaveMart, or the Approval Workflow System** — those are the
real Node/Express/Mongo/MySQL apps with auth, roles, and APIs. I don't have
their source in this conversation; share that codebase and I'll do the audit
properly there.

## Project structure

```
src/
  App.jsx              Page assembly, theme + role state
  index.css             Design system (dark/light, responsive rules)
  data.js               All resume-derived content, per role — edit this file
  hooks/
    useReveal.js         Scroll-triggered fade-in (now used once per section)
    useCountUp.js         Animated KPI counters (re-animates on role change)
  components/
    Header.jsx            Sticky nav (uppercase links), theme toggle, mobile menu
    Hero.jsx               Name, role toggle, summary, KPI strip
    About.jsx              Snapshot card + bio
    Experience.jsx         Timeline (Coolvolt + Developers Arena, role-aware bullets)
    Projects.jsx            Project cards — swaps to Forage case studies in Data view
    Expertise.jsx           Skill tag groups, role-aware
    Credentials.jsx         Certifications (role-aware) + full education list
    Contact.jsx             Contact links
    Footer.jsx
    Chrome.jsx              Scroll progress bar, back-to-top button
public/
  _headers               Netlify security headers
vercel.json              Vercel security headers
```

## Still to fill in

- `profile.linkedin` / `profile.github` in `data.js` — resumes only had the
  labels, not actual URLs.
- Each project's `github` field — no repo links were in the resumes.
- Double-check the `productdashboardadmin.netlify.app` → Approval Workflow
  System mapping; I inferred it from the naming, flagged in an earlier pass.

## Visual redesign (latest pass)

Rebuilt the entire look and feel to match a reference you shared: a light,
gradient-mesh SaaS landing page (cream-to-sky-blue background, bold
geometric display type, blue pill CTAs, frosted glass cards).

- **Palette**: cream (#FFE0AE) and sky blue (#B1E3FF) soft gradient mesh
  background, navy ink (#111827), primary blue accent (#0087EB). Dark mode
  (the header toggle) now gets a deep navy variant of the same system,
  default is light.
- **Type**: swapped Bricolage Grotesque for Plus Jakarta Sans (closest
  readily-available match to the reference's Neue Montreal — a bold,
  rounded geometric grotesk); kept JetBrains Mono for the small developer-
  flavored accents (the "$ whoami" line, code card, tags) and Inter for body
  text.
- **Hero**: added the badge pill above the headline (your reference has one
  too — "Empowering Global Startup Growth" → ours reads "Open to full-stack,
  frontend & backend roles"), a bracket-wrapped role title echoing the
  reference's `{ DEVELOPMENT }` treatment, and a floating code-editor card
  (mac traffic-light dots, a real auth-interceptor snippet reflecting your
  actual SprintDesk work) stacked with your photo, mirroring the reference's
  layered-card composition.
- **Nav**: restyled as a floating pill bar (frosted glass, rounded, shadow)
  like the reference's rounded nav container.
- **Cards**: about/project/skill/credential panels are now frosted glass
  (`backdrop-filter: blur`) over the gradient mesh, instead of flat dark
  panels.
- **Footer**: added a "Follow" social icon row (LinkedIn/GitHub), shown only
  once you fill in those URLs in `data.js` — matches the reference's
  "Follow Us" row.
- **Favicon + OG image**: regenerated both in the new blue-on-white palette
  (previously lime-on-black).
- **Contrast fix**: found and fixed a real bug while doing this — three
  buttons (skip-link, active role-toggle, back-to-top) had hardcoded
  `color: #fff` instead of the theme-aware `--accent-ink` token. In dark
  mode, that meant white text on a light blue background at ~2.3:1 contrast,
  well under WCAG AA. Fixed to use the token, which resolves correctly in
  both themes.
- **One known, accepted tradeoff**: the primary blue button's white text
  sits at ~3.7:1 contrast in light mode, just under the 4.5:1 AA threshold
  for small text (it clears the 3:1 threshold for large/bold text). This is
  the exact blue from your reference image, which has the same tradeoff —
  I kept it rather than deviate from the look you asked for. If you'd
  rather be strictly AA-compliant, I can darken the blue slightly (e.g. to
  `#0074C2`) with minimal visual difference.
- I could not render an actual screenshot to visually QA this (no browser
  available in this environment, and the only static HTML/CSS renderers I
  have don't support `backdrop-filter` or `color-mix()`, which this design
  relies on — they'd show a broken approximation, not a useful preview).
  I did a thorough manual review and a clean production build, but take a
  closer look once you run it locally. -->

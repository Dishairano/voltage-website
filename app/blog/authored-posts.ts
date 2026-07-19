// Hand-authored blog posts (honest, buyer-intent). Bodies are trusted, self-authored
// HTML written as template literals so no escaping is needed. Merged ahead of the
// extracted posts in posts.ts so the newest appear first.
import type { Post } from './posts';

export const AUTHORED: Post[] = [
  {
    slug: 'signs-you-have-outgrown-spreadsheets',
    title: 'Signs your business has outgrown spreadsheets — and what to build instead',
    dek: 'Spreadsheets run half the businesses in the world — right up until they quietly become the bottleneck. Here\'s how to tell when it\'s time, and what actually replaces them.',
    description:
      'How to know when your spreadsheets have become a liability — errors, version chaos, no permissions, the one person who understands it — and what kind of custom tool to replace them with, without over-building.',
    date: '2026-07-12',
    readingTime: '7 min read',
    body: `
<p>Almost every growing business runs on spreadsheets. They're free, everyone knows how to use them, and they'll happily do things no software was ever designed to do. That's exactly why they're so easy to outgrow without noticing — the spreadsheet keeps working, right up until it becomes the quiet bottleneck the whole business trips over.</p>
<p>Here's how to tell when you've crossed that line, and what to do about it without over-building.</p>

<h2>The signs it's time</h2>
<p>You don't need all of these — two or three is usually enough to start costing you real money and time:</p>
<ul>
  <li><strong>More than one person edits it.</strong> The moment two people touch the same sheet, you get version conflicts, overwritten rows, and "wait, which copy is the right one?" Spreadsheets have no real concept of who-changed-what.</li>
  <li><strong>You copy-paste between sheets.</strong> If your process is "export from here, paste into there, reformat," you've become the integration layer — by hand, every day, with the error rate that implies.</li>
  <li><strong>One person is the only one who understands it.</strong> The magic sheet with the nested formulas that only Sara can maintain is a single point of failure wearing a friendly disguise. When Sara's on holiday, the business slows down.</li>
  <li><strong>Mistakes are getting expensive.</strong> A wrong cell reference or a fat-fingered number that quietly flows into an invoice, a payroll run, or a customer order. Spreadsheets don't validate anything — they'll let you type "banana" into a price field.</li>
  <li><strong>Everyone can see everything.</strong> No roles, no permissions. The intern can see (and delete) the same data as the finance lead. That's fine at five people and a real problem at fifteen.</li>
  <li><strong>Reporting is a manual ritual.</strong> If pulling the monthly numbers means an afternoon of VLOOKUPs and pivot tables that someone has to redo every time, you're paying salary for work software should do in a click.</li>
</ul>

<h2>Why spreadsheets break at scale</h2>
<p>It's not that spreadsheets are bad — they're brilliant. It's that they were built for <em>calculation</em>, not for being the system multiple people run a business on. They have no validation (nothing stops bad data), no roles (everyone's an admin), no audit trail (no record of who changed what, when), and no real concurrency (two edits collide). None of that matters for a personal budget. All of it matters when the sheet <em>is</em> your operations.</p>
<blockquote>A spreadsheet doesn't fail loudly. It just slowly turns into a full-time job that no one was hired to do.</blockquote>

<h2>What to build instead</h2>
<p>The good news: you almost never need to replace a spreadsheet with something huge. What replaces it is usually a focused internal tool — a simple app where the data lives in a real database and the software enforces the rules the spreadsheet couldn't:</p>
<ul>
  <li><strong>Validation</strong> — the right fields, the right formats, nothing "banana" gets into a price.</li>
  <li><strong>Roles &amp; permissions</strong> — people see and do only what their job needs.</li>
  <li><strong>One source of truth</strong> — no more "final_v3_REALfinal.xlsx"; everyone's looking at the same live data.</li>
  <li><strong>Reporting built in</strong> — the numbers you re-derive by hand each month become a screen that's always current.</li>
  <li><strong>An audit trail</strong> — who changed what, when. Invaluable the first time something's wrong.</li>
</ul>
<p>Often that's a customer or ops <a href="/services/">dashboard or internal tool</a> — the exact kind of focused, greenfield build that fits a fixed price and a fixed deadline.</p>

<h2>When to keep the spreadsheet</h2>
<p>Honestly? Don't rush to build. A spreadsheet is the right tool when the process is still changing week to week, when only one person uses it, or when the stakes are low. Building software to lock in a workflow you're still figuring out just makes the wrong workflow permanent — the same trap we describe in <a href="/blog/custom-software-vs-off-the-shelf/">custom vs. off-the-shelf</a>. Prove the process manually first; build it once it's stable and clearly load-bearing.</p>

<h2>How we'd approach it</h2>
<p>We take the spreadsheet you already live in as the spec — it's proof of exactly how you work — and build the focused tool that replaces it, at a fixed price on a fixed deadline, with a working demo every Friday so you can watch your own process come to life. Greenfield only, production-grade, and you own all of it.</p>
<p>If your spreadsheet has quietly become a job of its own, that's a good thing to bring to a <a href="/book/">discovery call</a> — we'll tell you honestly whether it's time to build, or whether you've got more runway in the sheet than you think.</p>
`,
  },
  {
    slug: 'mvp-vs-full-build',
    title: 'MVP vs. full build: what should you ship first?',
    dek: 'The instinct is to build the whole thing. The smarter — and cheaper — move is almost always to ship the core, learn, then extend. Here\'s how to decide what belongs in version one.',
    description:
      'Should you build a full product or an MVP first? An honest guide to scoping a first version: what belongs in v1, what to cut, the real cost of building everything up front, and when a full build genuinely is the right call.',
    date: '2026-07-12',
    readingTime: '7 min read',
    body: `
<p>When someone decides to build software, the first instinct is almost always the same: list everything it should do, then build all of it. It feels responsible. It's usually the most expensive mistake you can make — because the biggest risk in any build isn't that the code fails, it's that you spend months building something people don't actually use the way you assumed.</p>
<p>That's the whole case for shipping a first version, small. Here's how to decide what's in it.</p>

<h2>What an MVP actually is (and isn't)</h2>
<p>"MVP" has been abused into meaning "cheap and half-finished." It doesn't. A minimum viable product is the <em>smallest complete thing that delivers real value</em> — production-grade, just narrow. Not a rough prototype you'll throw away; the first honest version of the real product, doing one job well instead of ten jobs badly.</p>
<p>The test isn't "how little can we build?" It's "what's the smallest version someone would genuinely use — and pay for, or rely on?"</p>

<h2>The real cost of building everything first</h2>
<p>Building the full vision before anyone's touched it stacks up three quiet costs:</p>
<ul>
  <li><strong>You bet big on assumptions.</strong> Every feature you build before real usage is a guess. Build fifty of them and you've made fifty untested bets with your budget.</li>
  <li><strong>It takes far longer.</strong> More scope means more time before anything is real — and <a href="/blog/how-long-should-custom-software-take/">the longer a build runs</a> without contact with real users, the further it can drift from what they needed.</li>
  <li><strong>The wrong things get polished.</strong> Time spent perfecting a feature nobody ends up using is time — and money — you don't get back.</li>
</ul>
<p>Ship the core first and every one of those risks shrinks. You learn what matters from real use, then spend the rest of the budget on the things that actually earned it.</p>

<h2>What belongs in version one</h2>
<p>The trick is to find the <strong>one core loop</strong> — the single path that delivers the product's main value — and build that end to end, properly. For a marketplace it's list → find → transact. For an internal tool it's the one workflow that's costing you the most today. Everything that isn't part of that core loop is a candidate to cut from v1.</p>
<p>A useful filter for every proposed feature: <em>does the core value work without this?</em> If yes, it can wait. If no, it's in.</p>

<h2>What to cut (and add back later)</h2>
<p>The usual suspects that feel essential but almost never belong in v1:</p>
<ul>
  <li>Elaborate admin dashboards and settings — you can manage a lot by hand at first.</li>
  <li>Every edge case and permission tier — start with the main one.</li>
  <li>Integrations you <em>might</em> want — add them when there's demand.</li>
  <li>Customisation and configurability — hard-code the sensible default; make it flexible once you know what varies.</li>
</ul>
<p>None of these are gone forever. They're just sequenced — built once the core has proven itself, in the order real usage says matters.</p>

<h2>When a full build genuinely is right</h2>
<p>Sometimes the honest answer is "build it all." An MVP is the wrong call when the value only exists when the thing is complete (some regulated or safety-critical systems), when a partial version would damage trust with the customers you're launching to, or when the "minimum" genuinely can't be carved down without breaking the core. A good studio will tell you when that's the case rather than reflexively shrinking scope.</p>
<blockquote>Shipping small isn't about doing less. It's about learning before you spend — so the money goes where it's proven to matter.</blockquote>

<h2>How we'd approach it</h2>
<p>We help you find that core loop, then fix a price and a deadline on <em>it</em> — not on a vague someday-everything. You get a production-grade first version in weeks, a working demo every Friday, and full ownership. Then, if it's earning its keep, we scope the next slice the same way. It's also the fairest way to work with a new studio: you find out we're good on a small, contained bet before a big one.</p>
<p>Not sure where the line is for your idea? That's exactly what a <a href="/book/">discovery call</a> is for — we'll help you find the smallest version worth building.</p>
`,
  },
  {
    slug: 'how-long-should-custom-software-take',
    title: 'How long should custom software take to build?',
    dek: 'The honest answer is "weeks, not months" — but only if a few things are true. Here\'s what actually moves the timeline.',
    description:
      'A custom-software studio\'s honest take on how long a build really takes, what drives the timeline, and why an open-ended schedule is a warning sign — not a sign of thoroughness.',
    date: '2026-07-11',
    readingTime: '7 min read',
    body: `
<p>"How long will it take?" is the second question every buyer asks, right after "what will it cost?" And the honest answer — "it depends" — sounds like a dodge. It isn't. But you deserve to know <em>what</em> it depends on, so you can tell the difference between a realistic timeline and a hopeful one.</p>
<p>Here's how we think about it, and how to read the estimate you're given.</p>

<h2>The short version: weeks, not months</h2>
<p>A focused, well-scoped custom build — an MVP, a customer portal, an internal tool, a specific integration — should take <strong>weeks, not months</strong>. In practice, most land in a 6–8 week window. If someone quotes you six months for something that sounds like one of those, either the scope is much bigger than you think, or the way they work is going to cost you time you don't need to spend.</p>
<p>That doesn't mean everything fits in eight weeks. A large, multi-module system genuinely takes longer. But the unit of delivery should still be small: something real and usable every week, not one big reveal at the end.</p>

<h2>What actually drives the timeline</h2>
<p>Four things move the number far more than the technology does:</p>
<ul>
  <li><strong>Scope clarity.</strong> The single biggest factor. A build where "done" is clearly defined moves fast. A build where the goalposts move every week never finishes — because there's no finish line to reach.</li>
  <li><strong>Decision speed.</strong> Software is a stream of small decisions. If a decision takes two weeks to get answered, a two-month project becomes a six-month one. A single, empowered decision-maker is worth more to your timeline than an extra developer.</li>
  <li><strong>Integrations.</strong> Connecting to systems you don't control — payment providers, third-party APIs, someone's legacy database — adds real, and sometimes unpredictable, time. Their quirks become your schedule.</li>
  <li><strong>Greenfield vs. rescue.</strong> A clean start is fast because nothing fights you. Working inside a large existing codebase means learning someone else's decisions before you can safely change anything — which is why we take greenfield builds only.</li>
</ul>

<h2>Why longer is not safer</h2>
<p>There's a myth that a longer timeline means a more careful, higher-quality build. Usually it's the opposite. Long, open-ended schedules hide two problems:</p>
<ul>
  <li><strong>Drift.</strong> The longer you go without seeing working software, the further the build can wander from what you actually needed — and the more expensive it is to correct when you finally see it.</li>
  <li><strong>No pressure to decide.</strong> "We'll ship when it's ready" removes the forcing function that turns a wish-list into a shipped product. Constraints are what make software good, not what make it worse.</li>
</ul>
<blockquote>A deadline isn't the enemy of quality. An open-ended timeline is — because it removes every reason to make the hard calls that finish a product.</blockquote>

<h2>How to make your build faster (without cutting corners)</h2>
<p>If you want a short timeline, most of the levers are on your side of the table, not the studio's:</p>
<ul>
  <li><strong>Cut scope to the core.</strong> Ship the thing that delivers the value, not every feature you can imagine. You can always add more once it's real and in use.</li>
  <li><strong>Name one decision-maker.</strong> Someone who can answer questions in a day, not a committee that answers in a fortnight.</li>
  <li><strong>Validate the process before you build it.</strong> If you're not sure the workflow is right yet, prove it manually first. Building software to lock in a workflow you're still figuring out just makes the wrong one permanent.</li>
</ul>

<h2>The warning sign to watch for</h2>
<p>A studio that won't commit to <em>any</em> date is telling you something. Sometimes the scope genuinely can't be pinned down yet — that's fair, and the honest move is to scope a small first phase and date <em>that</em>. But "it'll be done when it's done," attached to an hourly meter, is not caution. It's an open-ended bill with no finish line, and the risk of that sits entirely with you.</p>

<h2>How we do it</h2>
<p>We commit to a fixed 6–8 week window before any code is written, and we hold it — because you see working software on a live demo every Friday. If anything drifts, you see it in days, not at the deadline. Scope, price, and launch date are agreed up front, in writing. Larger systems get broken into phases you can see and judge one at a time.</p>
<p>If you're weighing a build and want a realistic timeline for your specific scope, that's exactly what a discovery call is for — and you'll have a fixed date, in writing, within 48 hours of it.</p>
`,
  },
  {
    slug: 'fixed-price-vs-hourly-software',
    title: 'Fixed-price vs. hourly software: which actually protects you?',
    dek: 'The billing model isn\'t an accounting detail — it decides who carries the risk when a build takes longer than hoped. Here\'s who each one really protects.',
    description:
      'Fixed-price or time-and-materials? An honest breakdown of what each billing model means for you as the buyer, who carries the risk, the incentives each creates, and when hourly is genuinely the right call.',
    date: '2026-07-11',
    readingTime: '8 min read',
    body: `
<p>When you hire someone to build software, the price tag gets all the attention — but the <em>billing model</em> behind it matters just as much. Fixed-price or by the hour isn't an accounting preference. It's a decision about who carries the risk when the work takes longer than anyone hoped. And it quietly shapes how the people building your software behave.</p>
<p>Here's the honest version of the trade-off.</p>

<h2>How hourly (time-and-materials) really works</h2>
<p>You pay for the hours worked, whatever that turns out to be. The estimate you're given is exactly that — an estimate, not a commitment. If the build takes twice as long, you pay twice as much.</p>
<p>That means <strong>the overrun risk sits with you.</strong> When something proves harder than expected, when a decision gets reworked, when the estimate was optimistic — the meter keeps running and the bill grows. The studio is protected; you are exposed.</p>
<p>There's a subtler cost too: the incentives point the wrong way. Under hourly billing, working slowly, gold-plating, and revisiting things are all rewarded with a bigger invoice. Most studios aren't cynical about this — but the model quietly pays for inefficiency, and that pull is real.</p>

<h2>How fixed-price works</h2>
<p>You agree a single price for a defined scope, up front. If the build takes longer than expected, that's the studio's problem, not your invoice. The number in the proposal is the number you pay.</p>
<p>That flips the risk: <strong>the overrun risk sits with the studio.</strong> And it flips the incentive with it — the faster and cleaner the studio works, the better the outcome for them too. Efficiency is rewarded instead of penalised. Your interests and theirs finally point the same direction.</p>
<p>There's one honest catch, and it's important: fixed-price only works when the scope is defined. You can't fix a price on a moving target. So a good fixed-price studio will spend real effort up front agreeing exactly what "done" looks like — because that definition is what protects <em>both</em> sides.</p>

<h2>"But what about changes?"</h2>
<p>This is the fair objection to fixed-price: what if you need something different halfway through? The answer isn't "tough luck." It's transparency. New scope gets re-quoted openly — a fixed price for the new work — while the original deal stays fixed. You're never surprised by a bigger bill; you decide, with a clear number in front of you, whether the change is worth it.</p>
<blockquote>Fixed-price doesn't mean rigid. It means changes are a decision you make on purpose, with the cost known in advance — not a surprise you discover on the invoice.</blockquote>

<h2>When hourly is actually the right call</h2>
<p>We'd be doing the same thing we criticise if we pretended fixed-price is always better. It isn't. Hourly is genuinely the honest model when:</p>
<ul>
  <li><strong>The work is real R&D.</strong> If nobody can say what "done" looks like because you're exploring the unknown, a fixed price would just be a guess dressed up as a commitment.</li>
  <li><strong>You want an ongoing, open-ended relationship</strong> — a developer on tap for a shifting backlog, where the point is flexibility, not a defined deliverable.</li>
  <li><strong>The scope truly can't be pinned down</strong> and you'd rather not spend the effort to define it first.</li>
</ul>
<p>For most builds, though — a website, a web app, an MVP, a portal, an integration — the scope <em>can</em> be defined with a bit of up-front work. And when it can, fixed-price is simply the one that protects the buyer.</p>

<h2>How to make fixed-price work for you</h2>
<ul>
  <li><strong>Insist on a clear definition of "done."</strong> The scope document is the thing protecting you. Read it, and make sure it matches what's in your head.</li>
  <li><strong>Tie payments to milestones.</strong> Paying in stages against delivered progress — rather than a big cheque up front — keeps your money tracking real work.</li>
  <li><strong>Ask to see progress often.</strong> A weekly look at working software is the earliest possible warning if the scope and the build start to diverge.</li>
</ul>

<h2>How we do it</h2>
<p>Every Voltage engagement is a single fixed price for an agreed scope, paid <strong>25 / 50 / 25</strong> across milestones, with a working demo every Friday and 100% code ownership at the end. We put the overrun risk on us on purpose — it's the clearest way a new studio can show its interests are aligned with yours. And if hourly is genuinely the better fit for what you need, we'll tell you that on the call rather than sell you a fixed price that doesn't suit the work.</p>
<p>If you want a straight read on which model fits your project, that's exactly what a discovery call is for.</p>
`,
  },
];

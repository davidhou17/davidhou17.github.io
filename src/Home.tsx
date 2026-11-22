import type { CSSProperties, ReactNode } from "react";
import { about, sections, site, type Item, type Paragraph } from "./content";
import { toMarkdown } from "./llms";

// All interactivity is CSS/HTML-only (Human/Agent toggle via radio inputs, <details> sections,
// hover, focus, terminal intro + streamed page build),
// so the prerendered page works with zero JavaScript.

const isExternal = (href: string) => href.startsWith("http");

const Link = ({ href, className, children }: { href: string; className?: string; children: ReactNode }) => (
  <a
    href={href}
    className={className}
    {...(isExternal(href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
  >
    {children}
  </a>
);

const Arrow = () => (
  <span
    aria-hidden="true"
    className="ml-1 inline-block text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
  >
    ↗
  </span>
);

const ItemBody = ({ item }: { item: Item }) => (
  <>
    <span className="font-medium text-foreground">
      {item.title}
      {item.url && <Arrow />}
    </span>
    {item.description && <span className="block text-muted">{item.description}</span>}
  </>
);

const ItemRow = ({ item }: { item: Item }) => (
  <li>
    {item.url ? (
      <Link href={item.url} className="row group no-underline">
        <ItemBody item={item} />
      </Link>
    ) : (
      <div className="px-3 py-2">
        <ItemBody item={item} />
      </div>
    )}
    {item.children && (
      <ul className="mb-1 ml-3 border-l border-line pl-2">
        {item.children.map((child) => (
          <ItemRow key={child.title} item={child} />
        ))}
      </ul>
    )}
  </li>
);

// Agent view: the page as an AI agent reads it (same text as /llms.txt), printed line by line.
const lineKind = (line: string) =>
  line.startsWith("# ") ? "h1" : line.startsWith("## ") ? "h2" : line.startsWith("> ") ? "quote" : line.trimStart().startsWith("- ") ? "li" : "p";

const mdLink = /\[([^\]]+)\]\(([^)]+)\)/g;
const highlight = (line: string) => {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const m of line.matchAll(mdLink)) {
    parts.push(line.slice(last, m.index));
    parts.push(
      <span key={m.index}>
        <span className="md-link">[{m[1]}]</span>
        <span className="md-url">({m[2]})</span>
      </span>,
    );
    last = m.index! + m[0].length;
  }
  parts.push(line.slice(last));
  return parts;
};

const AgentView = () => {
  const md = toMarkdown();
  const lines = md.trimEnd().split("\n");
  const tokens = Math.round(md.length / 4 / 10) * 10;
  return (
    <section aria-label="This page as an AI agent reads it" className="agent-view">
      <div className="terminal">
        <div className="terminal-bar">
          <span className="dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>GET /llms.txt</span>
          <span className="ml-auto">{`~${tokens.toLocaleString("en-US")} tokens`}</span>
        </div>
        <pre className="terminal-body">
          {lines.map((line, i) => (
            <span key={i} className={`md-line md-${lineKind(line)}`} style={{ animationDelay: `${i * 18}ms` }}>
              {line ? highlight(line) : " "}
              {"\n"}
            </span>
          ))}
          <span className="cursor" style={{ animationDelay: `${lines.length * 18}ms` }} aria-hidden="true" />
        </pre>
      </div>
    </section>
  );
};

const ViewToggle = () => (
  <div className="view-toggle" aria-label="View this page as">
    <label htmlFor="view-human">human</label>
    <span aria-hidden="true">/</span>
    <label htmlFor="view-agent">agent</label>
  </div>
);

// Entry hook: a terminal prompt types "/build-website", runs it (the line turns gray),
// cycles through three status words, then the page opens.
const COMMAND = "/build-website";
const STATUS_WORDS = ["Thinking…", "Learning…", "Applying…"];
const TYPE_START = 200;

// Seeded randomness, so server and client render the same timings.
const seeded = (seed: number) => () => {
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

// Human-ish typing: uneven gaps per key, with short hesitations after "/" and "-".
const typeRand = seeded(3);
const keyTimes = (() => {
  let t = TYPE_START;
  return [...COMMAND].map((ch, i) => {
    const prev = COMMAND[i - 1];
    t += i === 0 ? 0 : 35 + Math.round(typeRand() * 90) + (prev === "/" || prev === "-" ? 120 : 0);
    return t;
  });
})();
const ENTER_AT = keyTimes[keyTimes.length - 1] + 220;

// The command is monospace, so typing is a width that grows 1ch per key. The cursor sits right
// after it and follows each letter. Keyframes are generated so each key lands at its own time.
const TYPE_SPAN = keyTimes[keyTimes.length - 1] - TYPE_START + 1;
const typingKeyframes = `@keyframes type-cmd {
  0% { width: 0ch; animation-timing-function: step-end; }
${keyTimes
  .map((t, i) => `  ${(((t - TYPE_START + 1) / TYPE_SPAN) * 100).toFixed(3)}% { width: ${i + 1}ch; animation-timing-function: step-end; }`)
  .join("\n")}
}
.cmd-text { animation: type-cmd ${TYPE_SPAN}ms ${TYPE_START - 1}ms both; }`;
const WORD_MS = 750;
const INTRO_OUT = ENTER_AT + STATUS_WORDS.length * WORD_MS;
const PAGE_IN = INTRO_OUT + 120;

const ms = (name: string, value: number) => ({ [name]: `${value}ms` }) as CSSProperties;

// Claude Code–style spinner: glyphs stacked in one cell, each shown for 1/6 of the cycle.
const SPINNER = ["·", "✢", "✳", "✶", "✻", "✽"];
const SPIN_MS = 900;
const Spinner = () => (
  <span className="spinner">
    {SPINNER.map((g, i) => (
      <span key={i} style={{ animationDelay: `${ENTER_AT + (i * SPIN_MS) / SPINNER.length}ms` }}>
        {g}
      </span>
    ))}
  </span>
);

const Intro = () => (
  <div className="intro" aria-hidden="true" style={ms("--intro-out", INTRO_OUT)}>
    <div className="mx-auto max-w-2xl px-6 pt-16 font-mono text-sm sm:pt-24">
      <div className="intro-cmd" style={ms("--enter", ENTER_AT)}>
        <span className="intro-prompt">❯ </span>
        <style>{typingKeyframes}</style>
        <span className="cmd-text">{COMMAND}</span>
        <span className="type-cursor" style={ms("--cursor-out", ENTER_AT)} />
      </div>
      <div className="intro-run" style={{ animationDelay: `${ENTER_AT}ms` }}>
        <Spinner />
        <span className="grid">
          {STATUS_WORDS.map((word, i) => (
            <span
              key={word}
              className="status-word shimmer"
              style={{
                animationDelay: `0ms, ${ENTER_AT + i * WORD_MS}ms`,
                animationDuration: `1.2s, ${i === STATUS_WORDS.length - 1 ? WORD_MS + 600 : WORD_MS}ms`,
              }}
            >
              {word}
            </span>
          ))}
        </span>
      </div>
    </div>
  </div>
);

// Generated build: the page appears one block at a time, at irregular intervals,
// like an LLM producing output. Seeded so server and client render the same timings.
const at = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` });

const rand = seeded(17);
const gap = () => 70 + Math.round(rand() * 230); // 70–300ms between blocks

const blockTimes = (count: number, start: number) => {
  const times: number[] = [];
  let t = start;
  for (let i = 0; i < count; i++) times.push((t += i === 0 ? 0 : gap()));
  return times;
};

// Order: header, each bio paragraph, each section, footer.
const times = blockTimes(1 + about.length + sections.length + 1, PAGE_IN);
const HEADER_AT = times[0];
const paragraphAt = (i: number) => times[1 + i];
const sectionAt = (i: number) => times[1 + about.length + i];
const FOOTER_AT = times[times.length - 1];

const renderParagraph = (p: Paragraph) =>
  p.map((part, i) =>
    typeof part === "string" ? (
      part
    ) : (
      <Link key={i} href={part.url} className={part.subtle ? "subtle-link" : undefined}>
        {part.text}
      </Link>
    ),
  );

const linkedIn = site.links.find((l) => l.label === "LinkedIn")!.url;

const Home = () => (
  <div className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
    <Intro />
    <input type="radio" name="view" id="view-human" defaultChecked className="sr-only" />
    <input type="radio" name="view" id="view-agent" className="sr-only" />
    <header className="chunk mb-8" style={at(HEADER_AT)}>
      <div className="flex items-center gap-4">
        <Link href={linkedIn} className="shrink-0 rounded-full no-underline">
          <img
            src="/avatar.png"
            alt={`${site.name} on LinkedIn`}
            width={56}
            height={56}
            className="h-14 w-14 rounded-full bg-line/40 transition-transform duration-300 hover:-rotate-12 hover:scale-110"
          />
        </Link>
        <h1 className="text-lg font-medium leading-tight text-foreground">{site.name}</h1>
        <ViewToggle />
      </div>
    </header>

    <main className="human-view space-y-12">
      <section aria-labelledby="about" className="space-y-4">
        <h2 id="about" className="sr-only">
          About
        </h2>
        {about.map((p, i) => (
          <p key={i} className="chunk" style={at(paragraphAt(i))}>
            {renderParagraph(p)}
          </p>
        ))}
      </section>

      <div className="chunk border-t border-line" style={at(sectionAt(0))}>
        {sections.map((section, i) => (
          <details
            key={section.id}
            id={section.id}
            className="chunk group/section border-b border-line"
            style={at(sectionAt(i))}
          >
            <summary className="flex cursor-pointer list-none items-center gap-3 py-4 [&::-webkit-details-marker]:hidden">
              <h2 className="font-medium text-foreground">{section.title}</h2>
              <span
                aria-hidden="true"
                className="ml-auto text-muted transition-transform duration-200 group-open/section:rotate-45 group-hover/section:text-foreground"
              >
                +
              </span>
            </summary>
            <div className="pb-5">
              {section.subtitle && <p className="mb-2 text-muted">{section.subtitle}</p>}
              <ul className="-mx-3">
                {section.items.map((item) => (
                  <ItemRow key={item.title} item={item} />
                ))}
              </ul>
            </div>
          </details>
        ))}
      </div>
    </main>

    <AgentView />

    <footer
      className="chunk mt-20 flex flex-wrap gap-x-5 gap-y-1 border-t border-line pt-6 text-sm"
      style={at(FOOTER_AT)}
    >
      {site.links.map((l) => (
        <Link key={l.label} href={l.url} className="nav-link group">
          {l.label}
          {isExternal(l.url) && <Arrow />}
        </Link>
      ))}
    </footer>
  </div>
);

export default Home;

import type { CSSProperties } from "react";
import { AgentView } from "./AgentView";
import { about, sections, site, type Item, type Paragraph } from "./content";
import { Intro, PAGE_IN } from "./Intro";
import { Arrow, isExternal, Link } from "./Link";
import { seeded } from "./seeded";

// All interactivity is CSS/HTML-only (Human/Agent toggle via radio inputs, <details> sections,
// hover, focus, terminal intro + streamed page build),
// so the prerendered page works with zero JavaScript.

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

const ViewToggle = () => (
  <div className="view-toggle" aria-label="View this page as">
    <label htmlFor="view-human">human</label>
    <span aria-hidden="true">/</span>
    <label htmlFor="view-agent">agent</label>
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
      <Link key={i} href={part.url}>
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

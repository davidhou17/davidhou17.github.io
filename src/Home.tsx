import type { CSSProperties, ReactNode } from "react";
import { about, sections, site, type Item, type Paragraph } from "./content";
import { toMarkdown } from "./llms";

// All interactivity is CSS/HTML-only (Human/Agent toggle via radio inputs, <details> sections,
// hover, focus, load fade-in),
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

const fadeIn = (step: number): CSSProperties => ({ animationDelay: `${step * 60}ms` });

const linkedIn = site.links.find((l) => l.label === "LinkedIn")!.url;

const Home = () => (
  <div className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
    <input type="radio" name="view" id="view-human" defaultChecked className="sr-only" />
    <input type="radio" name="view" id="view-agent" className="sr-only" />
    <header className="fade-in mb-8" style={fadeIn(0)}>
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
      <section aria-labelledby="about" className="fade-in space-y-4" style={fadeIn(1)}>
        <h2 id="about" className="sr-only">
          About
        </h2>
        {about.map((p, i) => (
          <p key={i}>{renderParagraph(p)}</p>
        ))}
      </section>

      <div className="border-t border-line">
        {sections.map((section, i) => (
          <details
            key={section.id}
            id={section.id}
            className="fade-in group/section border-b border-line"
            style={fadeIn(i + 2)}
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
      className="fade-in mt-20 flex flex-wrap gap-x-5 gap-y-1 border-t border-line pt-6 text-sm"
      style={fadeIn(sections.length + 2)}
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

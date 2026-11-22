import type { ReactNode } from "react";
import { toMarkdown } from "./llms";

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

export const AgentView = () => {
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

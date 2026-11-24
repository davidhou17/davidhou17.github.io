// The whole site as markdown (https://llmstxt.org). Written to /llms.txt at build time
// and shown in the page's "Agent" view, so both always match src/content.ts.
import { about, sections, site, type Item, type Paragraph } from "./content";

const paragraphMd = (p: Paragraph) =>
  p.map((part) => (typeof part === "string" ? part : `[${part.text}](${new URL(part.url, site.url)})`)).join("");

const itemLine = (item: Item, depth = 0): string => {
  const title = item.url ? `[${item.title}](${item.url})` : item.title;
  const line = `${"  ".repeat(depth)}- ${title}${item.description ? `: ${item.description}` : ""}`;
  return [line, ...(item.children ?? []).map((c) => itemLine(c, depth + 1))].join("\n");
};

export const toMarkdown = () =>
  [
    `# ${site.name}`,
    `> ${site.tagline}`,
    "## About",
    ...about.map(paragraphMd),
    ...sections.map(
      (s) =>
        `## ${s.title}${s.org ? ` (${s.org})` : ""}\n\n${s.subtitle ? `${s.subtitle}\n\n` : ""}${s.items
          .map((i) => itemLine(i))
          .join("\n")}`,
    ),
    `## Links\n\n${[`- Website: ${site.url}`, ...site.links.map((l) => `- ${l.label}: ${l.url.replace("mailto:", "")}`)].join("\n")}`,
  ].join("\n\n") + "\n";

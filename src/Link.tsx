import type { ReactNode } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const isExternal = (href: string) => href.startsWith("http");

/** Anchor that opens external URLs in a new tab. */
export const Link = ({ href, className, children }: { href: string; className?: string; children: ReactNode }) => (
  <a
    href={href}
    className={className}
    {...(isExternal(href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
  >
    {children}
  </a>
);

export const Arrow = () => (
  <span
    aria-hidden="true"
    className="ml-1 inline-block text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
  >
    ↗
  </span>
);

import type { CSSProperties } from "react";
import { seeded } from "./seeded";

// Entry hook: a terminal prompt types "/build-website", runs it (the line turns gray),
// cycles through three status words, then the page opens.
const COMMAND = "/build-website";
const STATUS_WORDS = ["Thinking…", "Learning…", "Applying…"];
const TYPE_START = 200;

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
export const PAGE_IN = INTRO_OUT + 120;

// Status words sit in a one-line window over a column that starts on a blank line.
// At "Enter" it steps to the first word, then up one line per word. Only margin-top
// animates, so no word is ever hidden-but-painted (stacked words overlapped in Safari).
const LINE_REM = 1.25;
const ROLL_MS = (STATUS_WORDS.length - 1) * WORD_MS + 1;
const statusKeyframes = `@keyframes status-roll {
${STATUS_WORDS.map(
  (_, i) =>
    `  ${(((i * WORD_MS) / ROLL_MS) * 100).toFixed(3)}% { margin-top: ${-(i + 1) * LINE_REM}rem; animation-timing-function: step-end; }`,
).join("\n")}
  100% { margin-top: ${-STATUS_WORDS.length * LINE_REM}rem; }
}
.status-track { animation: status-roll ${ROLL_MS}ms ${ENTER_AT}ms forwards; }`;

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

export const Intro = () => (
  <div className="intro" aria-hidden="true" style={ms("--intro-out", INTRO_OUT)}>
    <div className="mx-auto max-w-2xl px-6 pt-16 font-mono text-sm sm:pt-24">
      <div className="intro-cmd" style={ms("--enter", ENTER_AT)}>
        <span className="intro-prompt">❯ </span>
        <style>{typingKeyframes}</style>
        <span className="cmd-text">{COMMAND}</span>
        <span className="type-cursor" style={ms("--cursor-out", ENTER_AT)} />
      </div>
      <div className="intro-run">
        <Spinner />
        <style>{statusKeyframes}</style>
        <span className="status-window">
          <span className="status-track">
            <span className="block">&nbsp;</span>
            {STATUS_WORDS.map((word) => (
              <span key={word} className="shimmer block">
                {word}
              </span>
            ))}
          </span>
        </span>
      </div>
    </div>
  </div>
);

'use client'
import { useEffect, useState } from "react";

type Line = { text: string; className?: string };

const START_DELAY = 300;
const CHAR_DELAY = 70;
const LINE_PAUSE = 300;

// Untyped characters stay in the DOM but invisible, so the heading's size and
// line wrapping never shift while it types.
export const TypewriterHeading = ({ lines, className }: { lines: Line[]; className?: string }) => {
  const total = lines.reduce((sum, line) => sum + line.text.length, 0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(total);
      return;
    }

    let typed = 0;
    let timer: ReturnType<typeof setTimeout>;
    const lineEnds = lines.map((_, i) => lines.slice(0, i + 1).reduce((sum, l) => sum + l.text.length, 0));

    const tick = () => {
      typed += 1;
      setCount(typed);
      if (typed >= total) return;
      timer = setTimeout(tick, lineEnds.includes(typed) ? LINE_PAUSE : CHAR_DELAY);
    };
    timer = setTimeout(tick, START_DELAY);
    return () => clearTimeout(timer);
  }, [lines, total]);

  let remaining = count;
  const caretLine = lines.findIndex((line, i) => {
    const isLast = i === lines.length - 1;
    const done = remaining >= line.text.length;
    remaining -= line.text.length;
    return !done || isLast;
  });

  let offset = 0;
  return (
    <h1 className={className} aria-label={lines.map((line) => line.text).join(" ")}>
      {lines.map((line, i) => {
        const shown = Math.max(0, Math.min(line.text.length, count - offset));
        offset += line.text.length;
        return (
          <span key={line.text} className={`block ${line.className ?? ""}`} aria-hidden="true">
            {line.text.slice(0, shown)}
            {i === caretLine && <span className="typewriter-caret" />}
            <span className="invisible">{line.text.slice(shown)}</span>
          </span>
        );
      })}
    </h1>
  );
};

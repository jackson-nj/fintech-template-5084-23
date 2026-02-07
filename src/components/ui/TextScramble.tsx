import React, { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  className?: string;
  interval?: number; // ms between frames (unused but kept for API)
  revealSpeed?: number; // ms per character reveal base
};

const defaultChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{};:,.<>/?";

export default function TextScramble({ text, className = "", interval = 30, revealSpeed = 40 }: Props) {
  const [display, setDisplay] = useState<string>("");
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const targetRef = useRef<string>(text);

  useEffect(() => {
    targetRef.current = text;
    const target = text.split("");
    const length = target.length;

    // per-character reveal times with small randomness
    const revealTimes = new Array<number>(length).fill(0).map((_, i) => (i + 1) * revealSpeed + Math.floor(Math.random() * revealSpeed));

    let output = new Array<string>(length).fill("");

    function update(ts: number) {
      if (startRef.current == null) startRef.current = ts;
      const elapsed = ts - startRef.current;

      let done = true;
      for (let i = 0; i < length; i++) {
        if (elapsed > revealTimes[i]) {
          output[i] = target[i];
        } else {
          done = false;
          output[i] = defaultChars[Math.floor(Math.random() * defaultChars.length)];
        }
      }

      setDisplay(output.join(""));

      if (!done) {
        rafRef.current = requestAnimationFrame(update);
      } else {
        setDisplay(target.join(""));
      }
    }

    // start animation
    startRef.current = null;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(update);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [text, revealSpeed]);

  return (
    <span aria-label={text} className={className}>
      {display}
    </span>
  );
}

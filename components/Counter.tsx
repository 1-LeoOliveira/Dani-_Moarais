"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const [node, setNode] = useState<HTMLElement | null>(null);
  const [display, setDisplay] = useState("0");
  const started = useRef(false);

  useEffect(() => {
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started.current) return;
          started.current = true;
          const decimals = String(target).includes(".") ? 1 : 0;
          const t0 = performance.now();
          const duration = 1400;
          const step = (t: number) => {
            const progress = Math.min((t - t0) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = (target * eased).toFixed(decimals).replace(".", ",");
            setDisplay(value);
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.6 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [node, target]);

  return (
    <strong ref={setNode}>
      {display}
      {suffix}
    </strong>
  );
}

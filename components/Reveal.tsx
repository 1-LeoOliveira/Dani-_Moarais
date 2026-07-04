"use client";

import { useEffect, useState, type ElementType, type ReactNode } from "react";

export default function Reveal({
  as: Tag = "div",
  className = "",
  children,
  ...rest
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  [key: string]: unknown;
}) {
  const [node, setNode] = useState<Element | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [node]);

  return (
    <Tag
      ref={setNode}
      className={`${className} ${visible ? "in" : ""}`.trim()}
      data-reveal=""
      {...rest}
    >
      {children}
    </Tag>
  );
}

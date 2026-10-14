"use client";

import { useEffect, useState } from "react";

export function Cursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: coarse)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches || reducedMotionQuery.matches) {
      return;
    }

    const handlePointerMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setIsVisible(true);
    };

    const handlePointerOver = (event: Event) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest("a, button, input, textarea, select, [role='button']");
      setIsHoveringLink(Boolean(interactive));
    };

    const handlePointerOut = () => {
      setIsHoveringLink(false);
    };

    const handleLeave = () => setIsVisible(false);

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerover", handlePointerOver);
    window.addEventListener("pointerout", handlePointerOut);
    window.addEventListener("pointerleave", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerover", handlePointerOver);
      window.removeEventListener("pointerout", handlePointerOut);
      window.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block">
      <div
        className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-[color:var(--fg)] bg-transparent transition-[width,height,transform,border-color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isHoveringLink ? "h-8 w-8 border-[color:var(--accent)]" : "h-5 w-5"
        }`}
        style={{ left: position.x, top: position.y }}
      />
      <div
        className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--fg)] transition-[width,height,transform,background-color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isHoveringLink ? "h-2.5 w-2.5" : "h-1.5 w-1.5"
        }`}
        style={{ left: position.x, top: position.y }}
      />
    </div>
  );
}

"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/content/profile";
import { Button } from "@/components/ui/Button";

const fiftyPercent = 50;

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [pointer, setPointer] = useState({ x: 50, y: 50 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const coarsePointer = window.matchMedia("(pointer: coarse)");
    setIsTouchDevice(coarsePointer.matches);

    if (shouldReduceMotion || coarsePointer.matches) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      const nextX = (event.clientX / window.innerWidth) * 100;
      const nextY = (event.clientY / window.innerHeight) * 100;
      setPointer({ x: nextX, y: nextY });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [shouldReduceMotion]);

  const isStatic = shouldReduceMotion || isTouchDevice;

  const headlineName = profile.name.split(" ");
  const firstName = headlineName[0];
  const lastName = headlineName.slice(1).join(" ");

  return (
    <section id="home" className="relative overflow-hidden border-b border-[color:var(--border)]">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 pb-16 pt-28 md:grid-cols-[1.1fr_0.9fr] md:px-12 md:pb-20 md:pt-32">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <div className="mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)]">
            <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
            {profile.location}
          </div>

          <h1 className="max-w-[10ch] text-[clamp(3rem,10vw,9rem)] font-medium leading-[0.88] tracking-[-0.04em] text-[color:var(--fg)]">
            {firstName}
            <span className="mt-1 block text-[color:var(--muted)]">{lastName}</span>
          </h1>

          <p className="mt-6 max-w-xl font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
            {profile.role}
          </p>

          <p className="mt-6 max-w-[30rem] text-base leading-7 text-[color:var(--muted)] md:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              type="button"
              onClick={() => {
                window.location.href = `mailto:${profile.email}`;
              }}
            >
              Get in touch
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                window.location.href = "#work";
              }}
            >
              View work
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {profile.skills.slice(0, 4).map((group) => (
              <span
                key={group.group}
                className="inline-flex items-center rounded-full border border-[color:var(--border)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--muted)]"
              >
                {group.group}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 24 }}
          animate={shouldReduceMotion ? { opacity: 1, scale: 1, y: 0 } : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex min-h-[360px] items-center justify-center md:min-h-[520px]"
        >
          <div className="absolute inset-0 rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--bg)]" />

          <motion.div
            className="absolute inset-[8%] rounded-full border border-[color:var(--border)]"
            animate={isStatic ? { opacity: 1, x: 0, y: 0 } : { opacity: 1, x: (pointer.x - fiftyPercent) * 0.25, y: (pointer.y - fiftyPercent) * 0.25 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.div
            className="absolute inset-[18%] rounded-full border border-[color:var(--border)]"
            animate={isStatic ? { opacity: 1, x: 0, y: 0 } : { opacity: 1, x: (pointer.x - fiftyPercent) * 0.5, y: (pointer.y - fiftyPercent) * 0.5 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />

          <svg
            viewBox="0 0 420 420"
            className="relative h-[340px] w-[340px] md:h-[420px] md:w-[420px]"
            aria-label="Abstract geometric portrait"
            role="img"
          >
            <motion.g
              animate={
                isStatic
                  ? { x: 0, y: 0 }
                  : { x: (pointer.x - fiftyPercent) * 0.9, y: (pointer.y - fiftyPercent) * 0.9 }
              }
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.rect
                x="94"
                y="90"
                width="232"
                height="232"
                rx="2"
                fill="none"
                stroke="var(--fg)"
                strokeWidth="1.2"
                animate={isStatic ? { rotate: 0 } : { rotate: (pointer.x - fiftyPercent) * 0.22 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "50% 50%" }}
              />

              <motion.circle
                cx="210"
                cy="210"
                r="74"
                fill="none"
                stroke="var(--fg)"
                strokeWidth="1.2"
                animate={
                  isStatic
                    ? { scale: 1 }
                    : { scale: 1 + (pointer.y - fiftyPercent) / 400 }
                }
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "center" }}
              />

              <line x1="70" y1="70" x2="350" y2="350" stroke="var(--fg)" strokeWidth="1.2" opacity="0.9" />
              <line x1="350" y1="70" x2="70" y2="350" stroke="var(--fg)" strokeWidth="1.2" opacity="0.9" />

              <circle cx="210" cy="210" r="8" fill="var(--accent)" />
            </motion.g>
          </svg>

          <motion.div
            className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--bg)] text-[color:var(--fg)]"
            animate={isStatic ? { y: 0 } : { y: (pointer.y - fiftyPercent) * 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <ArrowUpRight className="h-4 w-4" />
          </motion.div>

          <motion.div
            className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--bg)] text-[color:var(--fg)]"
            animate={isStatic ? { y: 0 } : { y: (fiftyPercent - pointer.y) * 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <ArrowDownRight className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

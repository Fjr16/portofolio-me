"use client";

import { motion, useReducedMotion } from "motion/react";
import { experience } from "@/app/experience";
import { formatDate } from "@/lib/format";

export function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="mx-auto max-w-[1200px] px-6 py-20 md:px-12 md:py-32">
      <div className="mb-10 md:mb-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--muted)]">
          Experience
        </p>
      </div>

      <div className="divide-y divide-[color:var(--border)]">
        {experience.map((item, experienceIndex) => {
          const isPresent = item.end.toLowerCase() === "present";

          return (
            <motion.article
              key={`${item.company}-${item.role}-${experienceIndex}`}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: experienceIndex * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="py-6 md:py-8"
            >
              <div className="grid gap-6 md:grid-cols-[0.9fr_2.1fr] md:gap-10">
                <div className="md:sticky md:top-20 md:self-start">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted)] md:text-[11px]">
                    {formatDate(item.start)} — {isPresent ? "Present" : formatDate(item.end)}
                  </p>
                </div>

                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <h3 className="text-2xl font-medium leading-tight tracking-[-0.04em] text-[color:var(--fg)] md:text-[clamp(2rem,2vw,2.8rem)]">
                      {item.role}
                    </h3>
                    {isPresent ? (
                      <motion.span
                        aria-label="Current role"
                        className="inline-flex h-2.5 w-2.5 items-center justify-center rounded-full bg-[color:var(--accent)]"
                        animate={
                          shouldReduceMotion
                            ? { opacity: 1, scale: 1 }
                            : { opacity: [1, 0.5, 1], scale: [1, 1.2, 1] }
                        }
                        transition={{
                          duration: 1.8,
                          repeat: shouldReduceMotion ? 0 : Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    ) : null}
                  </div>

                  <p className="mb-4 text-base text-[color:var(--muted)] md:text-lg">{item.company}</p>

                  <ul className="space-y-3">
                    {item.highlights.map((highlight, highlightIndex) => (
                      <motion.li
                        key={`${item.company}-${highlightIndex}`}
                        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                        whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                          duration: 0.45,
                          delay: highlightIndex * 0.06,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="flex gap-3 text-[15px] leading-6 text-[color:var(--fg)] md:text-base"
                      >
                        <span className="mt-[0.6em] h-px w-5 shrink-0 border-t border-[color:var(--border)]" aria-hidden="true" />
                        <span className="text-[color:var(--muted)]">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

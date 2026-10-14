"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { projects } from "@/content/projects";

const orderedProjects = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured));

export function Projects() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateViewport = () => {
      setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  const visibleSummary = (index: number) => {
    if (isMobile || shouldReduceMotion) return true;
    return hoveredIndex === index;
  };

  return (
    <section id="work" className="mx-auto max-w-[1200px] px-6 py-20 md:px-12 md:py-32">
      <div className="mb-10 flex items-end gap-3 md:mb-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--muted)]">
          Selected Work
        </p>
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--muted)]">
          ({String(orderedProjects.length).padStart(2, "0")})
        </span>
      </div>

      <motion.ul
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="divide-y divide-[color:var(--border)]"
      >
        {orderedProjects.map((project, index) => {
          const tags = project.stack.filter(
            (item) => item && !item.toLowerCase().includes("todo") && !item.startsWith("TODO")
          );
          const hasLinks = project.links.length > 0;
          const number = String(index + 1).padStart(2, "0");
          const isDimmed = hoveredIndex !== null && hoveredIndex !== index && !isMobile && !shouldReduceMotion;

          return (
            <motion.li
              key={project.slug}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              onMouseEnter={() => !isMobile && !shouldReduceMotion && setHoveredIndex(index)}
              onMouseLeave={() => !isMobile && !shouldReduceMotion && setHoveredIndex(null)}
              className={`group py-6 transition-opacity duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] md:py-8 ${
                isDimmed ? "opacity-40" : "opacity-100"
              }`}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex w-full flex-col md:flex-row md:items-start md:gap-6">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted)] md:w-14">
                    {number}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3 md:gap-4">
                      <h3
                        className={`text-3xl font-medium leading-none tracking-[-0.04em] text-[color:var(--fg)] transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] md:text-[clamp(2.8rem,3vw,5rem)] ${
                          hoveredIndex === index && !isMobile && !shouldReduceMotion ? "translate-x-2" : "translate-x-0"
                        }`}
                      >
                        {project.title}
                      </h3>
                    </div>

                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        visibleSummary(index) ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="mt-3 max-w-2xl text-sm leading-6 text-[color:var(--muted)] md:text-base">
                          {project.summary}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 md:min-w-[280px] md:justify-end">
                  {tags.length > 0 ? (
                    <div className="flex flex-wrap items-center justify-end gap-2 md:max-w-[260px]">
                      {tags.map((tag) => (
                        <span
                          key={`${project.slug}-${tag}`}
                          className="inline-flex items-center rounded-full border border-[color:var(--border)] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-[color:var(--muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  {hasLinks ? (
                    <a
                      href={project.links[0]?.url}
                      aria-label={`Open ${project.title}`}
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--fg)] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                    >
                      <ArrowUpRight
                        className={`h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          hoveredIndex === index && !isMobile && !shouldReduceMotion ? "rotate-45" : "rotate-0"
                        }`}
                      />
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
}

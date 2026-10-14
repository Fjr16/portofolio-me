import { profile } from "@/content/profile";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1200px] px-6 py-20 md:px-12 md:py-32">
      <div className="mb-10 md:mb-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--muted)]">
          About
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-[1.1fr_1.1fr] md:gap-14">
        <div className="space-y-5 text-base leading-7 text-[color:var(--muted)] md:text-lg">
          {profile.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="space-y-6">
          {profile.skills.map((group) => (
            <div key={group.group} className="border-t border-[color:var(--border)] pt-4">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)]">
                {group.group}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={`${group.group}-${item}`}
                    className="inline-flex items-center rounded-full border border-[color:var(--border)] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-[color:var(--muted)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

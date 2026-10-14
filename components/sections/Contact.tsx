import { profile } from "@/content/profile";

export function Contact() {
  const links = profile.links.filter((link) => link.url && link.url.trim().length > 0);

  return (
    <section id="contact" className="mx-auto max-w-[1200px] px-6 py-20 md:px-12 md:py-32">
      <div className="mb-10 md:mb-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--muted)]">
          Contact
        </p>
      </div>

      <div className="grid gap-8 border-t border-[color:var(--border)] pt-8 md:grid-cols-[1.1fr_1.1fr] md:gap-10">
        <div>
          <h2 className="max-w-md text-3xl font-medium leading-tight tracking-[-0.04em] text-[color:var(--fg)] md:text-[clamp(2.6rem,4vw,4.4rem)]">
            Available for product work, backend systems, and remote collaborations.
          </h2>
        </div>

        <div className="space-y-6">
          <div className="space-y-2 text-base text-[color:var(--muted)]">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--muted)]">
              Reach out
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="inline-block text-lg text-[color:var(--fg)] underline decoration-[color:var(--border)] underline-offset-8 transition-colors duration-200 hover:text-[color:var(--accent)]"
            >
              {profile.email}
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-[color:var(--border)] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[color:var(--muted)] transition-colors duration-200 hover:border-[color:var(--fg)] hover:text-[color:var(--fg)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${profile.email}?subject=Project%20Inquiry`}
              className="inline-flex items-center rounded-full bg-[color:var(--accent)] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[color:var(--bg)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

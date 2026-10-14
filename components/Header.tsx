"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "@/content/profile";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5 md:px-12">
        <a href="#top" className="text-sm font-medium uppercase tracking-[0.14em] text-[color:var(--fg)]">
          Fjr
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-sm text-[color:var(--muted)] transition-colors duration-200 hover:text-[color:var(--fg)]"
            >
              <span className="after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[color:var(--fg)] after:transition-transform after:duration-200 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:scale-x-100">
                {item.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--fg)] md:hidden"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
          <a
            href={`mailto:${profile.email}?subject=Project%20Inquiry`}
            className="hidden items-center justify-center rounded-full bg-[color:var(--accent)] px-5 py-2.5 text-sm font-medium text-[color:var(--bg)] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 md:inline-flex"
          >
            Let&apos;s talk
          </a>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[color:var(--bg)] md:hidden">
          <div className="flex min-h-screen flex-col justify-center px-6 py-10">
            <nav className="flex flex-col gap-8 text-3xl font-medium tracking-[-0.04em] text-[color:var(--fg)]">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleNavClick}
                  className="transition-colors duration-200 hover:text-[color:var(--accent)]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-10">
              <a
                href={`mailto:${profile.email}?subject=Project%20Inquiry`}
                onClick={handleNavClick}
                className="inline-flex w-full items-center justify-center rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-medium text-[color:var(--bg)] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
              >
                Let&apos;s talk
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

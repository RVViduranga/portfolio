"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { navItems, profile } from "@/data/site";
import { cn } from "@/lib/links";
import { useActiveSection } from "./useActiveSection";

const sectionIds = navItems.map((item) => item.id);

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useActiveSection(sectionIds);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While the mobile menu is open: lock page scroll, close on Escape and
  // close automatically if the viewport grows to the desktop layout.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onBreakpoint = (event: MediaQueryListEvent) => event.matches && setOpen(false);

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
      document.body.style.overflow = "";
    };
  }, [open]);

  const elevated = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        elevated
          ? "border-line/80 bg-canvas/85 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6">
        <a
          href="#top"
          className="group flex items-center gap-2.5 whitespace-nowrap text-sm font-semibold tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          <span
            aria-hidden="true"
            className="grid size-8 place-items-center rounded-md border border-line-strong bg-elevated font-mono text-xs text-accent transition-colors group-hover:border-accent/60"
          >
            {profile.initials}
          </span>
          {profile.name}
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const active = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={active ? "location" : undefined}
                    className={cn(
                      "rounded-md px-3 py-2 text-sm transition-colors",
                      active ? "text-ink" : "text-muted hover:text-ink",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden h-9 items-center whitespace-nowrap rounded-lg bg-accent-solid px-4 text-sm font-medium text-white transition-colors hover:bg-accent-solid-hover sm:inline-flex"
          >
            Let&apos;s Talk
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="grid size-10 place-items-center rounded-lg border border-line text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <m.nav
            id="mobile-menu"
            aria-label="Mobile"
            className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-canvas lg:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <Container className="py-6">
              <ul className="flex flex-col">
                {navItems.map((item) => (
                  <li key={item.id} className="border-b border-line/70">
                    <a
                      href={`#${item.id}`}
                      aria-current={activeId === item.id ? "location" : undefined}
                      className="flex py-4 text-lg font-medium text-ink"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 flex h-12 items-center justify-center rounded-lg bg-accent-solid text-base font-medium text-white"
                onClick={() => setOpen(false)}
              >
                Let&apos;s Talk
              </a>
            </Container>
          </m.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

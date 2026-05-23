"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import { CompassMark } from "@/components/brand/CompassMark";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-[0_1px_0_rgba(212,165,116,0.15)]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10 lg:py-5">
        <a
          href="#top"
          className="flex items-center gap-3 text-cream"
          aria-label={`${siteConfig.name} — inicio`}
        >
          <CompassMark variant="light" className="h-10 w-10" ariaHidden />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-lg font-medium tracking-[0.04em]">
              Brújula
            </span>
            <span className="font-mono text-[0.6rem] font-light tracking-[0.35em] text-gold-soft">
              MARKETS
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium tracking-wide text-cream/80 transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 border border-gold bg-gold px-5 py-2.5 text-sm font-medium tracking-wide text-navy transition-all hover:bg-transparent hover:text-gold"
          >
            Diagnóstico gratuito
            <span className="h-px w-4 bg-current transition-all group-hover:w-6" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="text-cream lg:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden",
          "overflow-hidden border-t border-gold/15 bg-navy transition-[max-height] duration-500",
          open ? "max-h-[calc(100vh-72px)]" : "max-h-0",
        )}
      >
        <nav className="flex flex-col px-6 py-6">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-gold/10 py-4 font-display text-2xl text-cream transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center justify-center gap-2 border border-gold bg-gold px-5 py-3 text-sm font-medium tracking-wide text-navy"
          >
            Diagnóstico gratuito
          </a>
        </nav>
      </div>
    </header>
  );
}

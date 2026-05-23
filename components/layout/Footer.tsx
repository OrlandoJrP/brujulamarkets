import { Mail, MapPin, Instagram, Linkedin } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { CompassMark } from "@/components/brand/CompassMark";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-cream/80">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-20 lg:px-10 lg:pt-24">
        <div className="grid gap-12 border-b border-gold/15 pb-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <CompassMark variant="light" className="h-16 w-16" ariaHidden />
              <div className="flex flex-col leading-none">
                <span className="font-display text-2xl font-medium tracking-[0.04em] text-cream">
                  Brújula
                </span>
                <span className="mt-1 font-mono text-[0.65rem] font-light tracking-[0.4em] text-gold-soft">
                  MARKETS
                </span>
              </div>
            </div>
            <p className="mt-6 max-w-sm font-display text-xl italic leading-relaxed text-cream/85">
              {siteConfig.tagline}.
            </p>
            <div className="mt-8 flex h-px w-12 bg-gold" />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/65">
              Mesa de cobertura privada para empresas que necesitan
              previsibilidad financiera frente a la volatilidad de commodities,
              divisas y metales.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <span className="eyebrow !text-gold-soft">Navegación</span>
            <ul className="mt-5 space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-cream/75 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <span className="eyebrow !text-gold-soft">Contacto</span>
            <ul className="mt-5 space-y-4 text-sm text-cream/75">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>{siteConfig.city}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-gold"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>

            <div className="mt-8 flex items-center gap-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Brújula Markets"
                className="flex h-10 w-10 items-center justify-center border border-gold/30 text-cream/80 transition-all hover:border-gold hover:text-gold"
              >
                <Instagram size={18} />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Brújula Markets"
                className="flex h-10 w-10 items-center justify-center border border-gold/30 text-cream/80 transition-all hover:border-gold hover:text-gold"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer + copyright */}
        <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <p className="max-w-3xl text-xs leading-relaxed text-cream/50">
            <span className="font-mono uppercase tracking-[0.18em] text-gold-soft">
              Aviso legal ·{" "}
            </span>
            La información publicada en este sitio tiene fines exclusivamente
            informativos y no constituye asesoría financiera, de inversión o
            tributaria personalizada. Toda decisión de cobertura es
            estructurada caso por caso bajo acuerdo privado entre las partes.
          </p>
          <p className="font-mono text-[0.7rem] tracking-[0.18em] text-cream/40">
            © {year} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}

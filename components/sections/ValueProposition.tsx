import {
  Wheat,
  ArrowRightLeft,
  Construction,
  Telescope,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

interface Service {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  instruments: string[];
}

const services: Service[] = [
  {
    icon: Wheat,
    eyebrow: "Granos · Suaves",
    title: "Hedging de commodities",
    description:
      "Fijamos el costo de tu insumo principal con instrumentos derivados ligados al mercado internacional. Tu margen deja de depender del próximo titular.",
    instruments: ["Maíz", "Soya", "Trigo", "Café", "Cacao"],
  },
  {
    icon: ArrowRightLeft,
    eyebrow: "Divisas · FX",
    title: "Cobertura cambiaria",
    description:
      "Estructuramos coberturas de tipo de cambio para importadores y exportadores. Cierras el precio en USD/VES de tu próxima factura, no lo esperas.",
    instruments: ["USD/VES", "EUR/VES", "CLP", "COP", "BRL"],
  },
  {
    icon: Construction,
    eyebrow: "Metales · Industriales",
    title: "Cobertura de metales",
    description:
      "Para constructoras, ferreterías y empresas industriales: fijar precio de metales base antes de cotizar un proyecto a 6 o 12 meses.",
    instruments: ["Cobre", "Acero", "Aluminio", "Zinc"],
  },
  {
    icon: Telescope,
    eyebrow: "Macro · Institucional",
    title: "Análisis y asesoría",
    description:
      "Lecturas semanales de mercado, escenarios macro y acompañamiento estratégico para que el equipo financiero tome decisiones con la misma información que las grandes mesas.",
    instruments: ["Macro global", "Tasas", "Curvas", "Commodities"],
  },
];

export function ValueProposition() {
  return (
    <section id="servicios" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <span className="eyebrow">Servicios</span>
          </div>
          <h2 className="mt-6 font-display text-4xl font-medium leading-[1.1] text-navy sm:text-5xl lg:text-[3.5rem]">
            Cuatro frentes de{" "}
            <span className="italic text-gold">cobertura</span> para una sola
            certeza: previsibilidad.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-graphite/80 sm:text-lg">
            No vendemos productos financieros. Diseñamos estructuras de
            cobertura a la medida del flujo, el ciclo y la exposición real de
            cada empresa.
          </p>
        </Reveal>

        <Stagger className="mt-16 grid gap-px bg-sand sm:grid-cols-2 lg:mt-20">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem
                key={service.title}
                className="group relative flex flex-col bg-cream p-8 transition-colors hover:bg-white lg:p-10"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex h-14 w-14 items-center justify-center border border-navy/10 bg-navy text-gold transition-all group-hover:border-gold">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-mist">
                    {service.eyebrow}
                  </span>
                </div>

                <h3 className="mt-8 font-display text-2xl font-medium text-navy lg:text-3xl">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-graphite/80">
                  {service.description}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-sand pt-6">
                  {service.instruments.map((instrument, i) => (
                    <span key={instrument} className="flex items-center gap-3">
                      <span className="font-mono text-xs tracking-wider text-graphite/70">
                        {instrument}
                      </span>
                      {i < service.instruments.length - 1 && (
                        <span className="h-px w-3 bg-gold/40" />
                      )}
                    </span>
                  ))}
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

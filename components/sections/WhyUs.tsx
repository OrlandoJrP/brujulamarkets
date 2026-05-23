import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

interface Principle {
  numeral: string;
  title: string;
  description: string;
}

const principles: Principle[] = [
  {
    numeral: "I",
    title: "Blindaje, no rentabilidad",
    description:
      "No vendemos promesas de rendimiento. Construimos coberturas que protegen el patrimonio y el margen operativo de tu empresa frente a la próxima ola de volatilidad.",
  },
  {
    numeral: "II",
    title: "Acceso institucional",
    description:
      "Diseñamos estructuras que la banca tradicional rara vez ofrece a empresas medianas en la región. Trabajamos con instrumentos derivados de mercados internacionales.",
  },
  {
    numeral: "III",
    title: "Análisis con método",
    description:
      "Cada decisión se sustenta en análisis fundamental y técnico al nivel de una mesa institucional: macroeconomía, ciclos de commodities, política monetaria y curvas de tasas.",
  },
  {
    numeral: "IV",
    title: "Confidencialidad por defecto",
    description:
      "Operamos con perfil bajo. Ninguna estrategia, posición o cifra de un cliente se comparte. La discreción no es un servicio adicional: es la base.",
  },
  {
    numeral: "V",
    title: "Contexto venezolano",
    description:
      "Hablamos el idioma del flujo en bolívares, la importación con divisas restringidas y los costos del sector productivo nacional. Asesoría local, ejecución global.",
  },
];

export function WhyUs() {
  return (
    <section
      id="por-que"
      className="relative overflow-hidden bg-navy py-24 text-cream lg:py-32"
    >
      {/* Decoración: anillos sutiles en el fondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/2 -z-0 hidden h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-gold/8 lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-48 top-1/2 -z-0 hidden h-[700px] w-[700px] -translate-y-1/2 rounded-full border border-gold/5 lg:block"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <span className="eyebrow !text-gold-soft">Por qué Brújula</span>
          </div>
          <h2 className="mt-6 font-display text-4xl font-medium leading-[1.1] text-cream sm:text-5xl lg:text-[3.5rem]">
            Cinco principios. <br />
            Una sola{" "}
            <span className="italic text-gold">brújula</span>.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/70 sm:text-lg">
            Operamos como una mesa institucional en formato privado.
            Estas son las reglas con las que trabajamos cada relación.
          </p>
        </Reveal>

        <Stagger className="mt-20 grid gap-0 lg:mt-24">
          {principles.map((principle, i) => (
            <StaggerItem
              key={principle.numeral}
              className="group grid grid-cols-[auto_1fr] items-start gap-6 border-t border-gold/15 py-10 lg:grid-cols-[120px_minmax(0,1fr)_auto] lg:gap-12 lg:py-12"
              style={
                i === principles.length - 1
                  ? { borderBottom: "1px solid rgba(212,165,116,0.15)" }
                  : undefined
              }
            >
              {/* Numeral romano */}
              <div className="flex items-baseline gap-3">
                <span className="font-display text-4xl font-medium tracking-tight text-gold lg:text-5xl">
                  {principle.numeral}
                </span>
              </div>

              {/* Contenido */}
              <div>
                <h3 className="font-display text-2xl font-medium text-cream lg:text-3xl">
                  {principle.title}
                </h3>
                <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-cream/70 lg:text-base">
                  {principle.description}
                </p>
              </div>

              {/* Línea decorativa que se expande en hover (desktop) */}
              <div className="hidden h-px w-12 self-center bg-gold transition-all duration-500 group-hover:w-20 lg:block" />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

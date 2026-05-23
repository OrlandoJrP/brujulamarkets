import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

interface Step {
  number: string;
  title: string;
  description: string;
  detail: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Mapeamos tus flujos: insumos, divisas, plazos, márgenes. Identificamos dónde la volatilidad está consumiendo rentabilidad sin que se note.",
    detail: "Sesión confidencial · 60 min",
  },
  {
    number: "02",
    title: "Estructuración",
    description:
      "Diseñamos la estructura de cobertura adecuada al tamaño, ciclo y tolerancia al riesgo de tu empresa. Presupuesto, instrumentos y horizonte sobre la mesa.",
    detail: "Propuesta escrita en 5 días",
  },
  {
    number: "03",
    title: "Ejecución",
    description:
      "Coordinamos la ejecución con las contrapartes adecuadas y los términos negociados. Tú aprobas; nosotros operamos.",
    detail: "Cobertura activa en 48 h",
  },
  {
    number: "04",
    title: "Seguimiento",
    description:
      "Reportes periódicos del mercado y de tu posición. Ajustes ante cambios de exposición, contexto macro o cierre de ciclo.",
    detail: "Reporte mensual + alertas",
  },
];

export function HowItWorks() {
  return (
    <section id="proceso" className="relative bg-cream py-24 lg:py-32">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-sand"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <span className="eyebrow">Proceso</span>
          </div>
          <h2 className="mt-6 font-display text-4xl font-medium leading-[1.1] text-navy sm:text-5xl">
            De la exposición al{" "}
            <span className="italic text-gold">blindaje</span>, en cuatro
            pasos.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-graphite/80 sm:text-lg">
            Un proceso institucional adaptado al ritmo de una empresa mediana.
            Sin contratos eternos, sin productos enlatados.
          </p>
        </Reveal>

        <Stagger className="mt-20 grid gap-12 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, i) => (
            <StaggerItem key={step.number} className="relative">
              {/* Conector horizontal en desktop */}
              {i < steps.length - 1 && (
                <div
                  aria-hidden
                  className="absolute left-[3.5rem] top-6 hidden h-px w-[calc(100%-3.5rem)] bg-gradient-to-r from-gold/60 via-gold/30 to-gold/0 lg:block"
                />
              )}

              <div className="flex items-start gap-6 lg:flex-col lg:gap-0">
                {/* Indicador de número */}
                <div className="flex shrink-0 items-center gap-3 lg:mb-8">
                  <span className="font-mono text-2xl font-medium tracking-tight text-gold">
                    {step.number}
                  </span>
                  <span className="h-px w-6 bg-gold lg:hidden" />
                </div>

                <div className="flex-1">
                  <h3 className="font-display text-2xl font-medium text-navy lg:text-[1.7rem]">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-xs text-[0.95rem] leading-relaxed text-graphite/80">
                    {step.description}
                  </p>
                  <p className="mt-5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-mist">
                    {step.detail}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

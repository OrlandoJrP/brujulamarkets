import { Lock } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

interface DataPoint {
  label: string;
  value: string;
  detail?: string;
}

const dataPoints: DataPoint[] = [
  { label: "Sector", value: "Avícola", detail: "Producción de pollo de engorde" },
  { label: "Geografía", value: "Lara", detail: "Estado · Venezuela" },
  { label: "Insumo cubierto", value: "Maíz amarillo", detail: "Materia prima del alimento" },
  { label: "Plazo", value: "6 meses", detail: "Cobertura escalonada" },
  { label: "Ahorro estimado", value: "USD 28 000", detail: "Acumulado del trimestre" },
  { label: "Volatilidad evitada", value: "± 14 %", detail: "Rango spot vs. precio fijado" },
];

export function CaseStudy() {
  return (
    <section id="caso" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <span className="eyebrow">Caso destacado · Confidencial</span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Lado narrativo */}
          <Reveal className="lg:col-span-7">
            <p className="font-display text-3xl font-medium leading-[1.25] text-navy sm:text-[2.25rem] lg:text-[2.75rem]">
              <span className="text-gold">“</span>Una avícola en Lara fijó el
              precio de su maíz a{" "}
              <span className="italic text-gold">seis meses</span> y ahorró{" "}
              <span className="tabular text-gold">USD 28 000</span> en un solo
              trimestre.<span className="text-gold">”</span>
            </p>

            <div className="mt-10 flex items-center gap-4">
              <span className="h-px w-12 bg-gold" />
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-mist">
                Cliente activo · 2024 · Identidad reservada
              </p>
            </div>

            <div className="mt-10 max-w-xl space-y-4 text-[0.95rem] leading-relaxed text-graphite/85">
              <p>
                La producción avícola depende del maíz amarillo, cuyo precio
                internacional fluctúa por clima, geopolítica y ciclos de
                siembra en el hemisferio norte. Una variación de 10 % en el
                grano puede comerse el margen completo de la engorda.
              </p>
              <p>
                Estructuramos una cobertura escalonada de seis meses que fijó
                el costo de la materia prima por debajo del nivel promedio
                spot del trimestre. El resultado fue medible: previsibilidad
                en el costo, decisiones comerciales más firmes y un margen
                operativo que dejó de estar a la merced del mercado.
              </p>
            </div>

            <div className="mt-10 inline-flex items-center gap-3 border border-sand bg-sand/40 px-5 py-3 text-xs text-graphite/70">
              <Lock size={14} className="text-gold" />
              <span>
                Nombre, volumen exacto y contrapartes mantenidos bajo reserva
                profesional.
              </span>
            </div>
          </Reveal>

          {/* Lado de datos */}
          <Reveal className="lg:col-span-5" delay={0.15}>
            <div className="relative bg-navy p-8 text-cream lg:p-10">
              {/* Marco interior */}
              <div
                aria-hidden
                className="absolute inset-3 border border-gold/15"
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-gold-soft">
                    Resumen ejecutivo
                  </span>
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-cream/40">
                    Q-2024
                  </span>
                </div>

                <div className="mt-6 h-px bg-gold/20" />

                <dl className="mt-6 divide-y divide-gold/10">
                  {dataPoints.map((dp) => (
                    <div
                      key={dp.label}
                      className="flex items-start justify-between gap-6 py-4"
                    >
                      <dt className="flex-1">
                        <span className="block font-mono text-[0.65rem] uppercase tracking-[0.22em] text-cream/55">
                          {dp.label}
                        </span>
                        {dp.detail && (
                          <span className="mt-1 block text-[0.7rem] text-cream/40">
                            {dp.detail}
                          </span>
                        )}
                      </dt>
                      <dd className="tabular text-right font-display text-lg font-medium text-cream lg:text-xl">
                        {dp.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 h-px bg-gold/20" />

                <p className="mt-6 text-xs leading-relaxed text-cream/55">
                  Cifras del caso real anonimizado. Resultados de cobertura
                  varían según ciclo, volumen y exposición individual.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

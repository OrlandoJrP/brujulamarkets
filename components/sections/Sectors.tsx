import {
  Drumstick,
  Croissant,
  HardHat,
  Container,
  Milk,
  Droplets,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

interface Sector {
  icon: LucideIcon;
  name: string;
  exposure: string;
  note: string;
}

const sectors: Sector[] = [
  {
    icon: Drumstick,
    name: "Avícolas",
    exposure: "Maíz · Soya · FX",
    note: "El alimento balanceado es 65–70 % del costo. La cobertura define el margen del galpón.",
  },
  {
    icon: Croissant,
    name: "Panaderías industriales",
    exposure: "Trigo · FX",
    note: "Volumen alto, margen fino. Cobertura de harina + cambio para proteger el ticket.",
  },
  {
    icon: HardHat,
    name: "Constructoras",
    exposure: "Acero · Cobre · Aluminio",
    note: "Proyectos cotizados a 6–18 meses. Hedge de metales bloquea la rentabilidad del contrato.",
  },
  {
    icon: Container,
    name: "Importadores",
    exposure: "USD/VES · Costos en origen",
    note: "Compra de inventario en divisa con venta diferida en bolívares. FX es el riesgo silencioso.",
  },
  {
    icon: Milk,
    name: "Lácteos",
    exposure: "Soya · Maíz · FX",
    note: "Alimento del hato y empaque importado. Doble exposición que se cubre en paralelo.",
  },
  {
    icon: Droplets,
    name: "Aceiteras",
    exposure: "Soya · Palma · FX",
    note: "Crushing margin sensible a volatilidad simultánea de grano y producto final.",
  },
  {
    icon: Truck,
    name: "Transporte",
    exposure: "Combustible · Repuestos",
    note: "Costos dolarizados con tarifas en bolívares. Cobertura amortigua choques en el flete.",
  },
];

export function Sectors() {
  return (
    <section id="sectores" className="bg-sand/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <span className="eyebrow">Sectores</span>
          </div>
          <h2 className="mt-6 font-display text-4xl font-medium leading-[1.1] text-navy sm:text-5xl">
            Empresas donde la <span className="italic text-gold">volatilidad</span>{" "}
            es un costo invisible.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-graphite/80 sm:text-lg">
            Trabajamos con empresas medianas y grandes cuya rentabilidad
            depende directamente del precio de un insumo, una divisa o un
            metal. Estas son las exposiciones típicas que cubrimos.
          </p>
        </Reveal>

        <Stagger className="mt-16 grid gap-px bg-sand sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <StaggerItem
                key={sector.name}
                className="group relative flex flex-col bg-cream p-8 transition-all hover:bg-white"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center border border-navy/15 text-navy transition-colors group-hover:border-gold group-hover:text-gold">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-mist">
                    {sector.exposure}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-xl font-medium text-navy">
                  {sector.name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-graphite/75">
                  {sector.note}
                </p>
              </StaggerItem>
            );
          })}
          {/* Card final invitando al diagnóstico */}
          <StaggerItem className="group relative flex flex-col justify-between bg-navy p-8 text-cream transition-all hover:bg-navy-mid">
            <div>
              <span className="eyebrow !text-gold-soft">¿Otro sector?</span>
              <h3 className="mt-6 font-display text-xl font-medium text-cream">
                Cubrimos exposiciones, no industrias.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">
                Si tu empresa tiene un insumo o ingreso atado a un mercado
                internacional, hay una estructura posible.
              </p>
            </div>
            <a
              href="#contacto"
              className="mt-6 inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-gold transition-all hover:gap-3"
            >
              Hablemos
              <span className="h-px w-4 bg-gold" />
            </a>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CompassMark } from "@/components/brand/CompassMark";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-navy text-cream"
    >
      {/* Radial sutil para profundidad */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 40%, rgba(27,58,92,0.9) 0%, rgba(10,37,64,1) 60%)",
        }}
      />
      {/* Línea decorativa */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
      />

      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-20 pt-32 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:pb-32 lg:pt-40">
        {/* Contenido */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-8 bg-gold" />
            <span className="font-mono text-[0.7rem] tracking-[0.28em] text-gold">
              MESA DE COBERTURA PRIVADA · BARQUISIMETO
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
            className="mt-8 font-display text-[2.5rem] font-medium leading-[1.05] tracking-tight text-cream sm:text-5xl lg:text-[4.25rem]"
          >
            Protegemos el{" "}
            <span className="italic text-gold">margen</span> de tu empresa
            frente a la <span className="italic text-gold">volatilidad</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
            className="mt-8 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg"
          >
            Mesa de cobertura privada para empresas agroindustriales,
            importadores y exportadores en Venezuela. Estructuramos coberturas
            de commodities, divisas y metales con análisis institucional —
            para que tu costo sea una decisión, no un accidente.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-3 bg-gold px-7 py-4 text-sm font-medium tracking-wide text-navy transition-all hover:bg-gold-soft"
            >
              Diagnóstico gratuito
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-3 border border-cream/30 px-7 py-4 text-sm font-medium tracking-wide text-cream transition-all hover:border-gold hover:text-gold"
            >
              Conocer servicios
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease }}
            className="mt-16 flex items-center gap-6 text-xs font-mono uppercase tracking-[0.18em] text-cream/45"
          >
            <span>10° 04&apos; N · 69° 19&apos; O</span>
            <span className="h-px flex-1 max-w-[80px] bg-cream/15" />
            <span>Lara · Venezuela</span>
          </motion.div>
        </div>

        {/* Brújula */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.3, delay: 0.2, ease }}
          className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none"
        >
          {/* Anillos exteriores decorativos */}
          <div
            aria-hidden
            className="absolute inset-0 -m-8 rounded-full border border-gold/10 sm:-m-12"
          />
          <div
            aria-hidden
            className="absolute inset-0 -m-16 rounded-full border border-gold/5 sm:-m-24"
          />
          <CompassMark variant="dark" className="relative h-auto w-full" />
        </motion.div>
      </div>
    </section>
  );
}

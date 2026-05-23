"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Check, ShieldCheck, Clock4, FileText } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

const sectors = [
  "Avícola",
  "Panadería industrial",
  "Constructora",
  "Importador",
  "Lácteo",
  "Aceitera",
  "Transporte",
  "Otro",
] as const;

const schema = z.object({
  name: z.string().min(2, "Tu nombre es requerido"),
  company: z.string().min(2, "La empresa es requerida"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(7, "Teléfono inválido"),
  sector: z.enum(sectors, {
    errorMap: () => ({ message: "Selecciona un sector" }),
  }),
  message: z
    .string()
    .min(10, "Cuéntanos un poco más (mínimo 10 caracteres)")
    .max(800, "Máximo 800 caracteres"),
});

type FormValues = z.infer<typeof schema>;

const guarantees = [
  {
    icon: ShieldCheck,
    title: "Confidencialidad total",
    detail: "Tu información nunca se comparte con terceros.",
  },
  {
    icon: Clock4,
    title: "Respuesta en 48 h",
    detail: "Un miembro de la mesa te contacta directamente.",
  },
  {
    icon: FileText,
    title: "Diagnóstico sin costo",
    detail: "Primera sesión y propuesta inicial son gratuitas.",
  },
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = async (data: FormValues) => {
    // Captura local. Sin envío real — se conectará después con un backend.
    await new Promise((r) => setTimeout(r, 700));
    console.log("Diagnóstico solicitado:", data);
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contacto" className="relative overflow-hidden bg-navy py-24 text-cream lg:py-32">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 70% 30%, rgba(27,58,92,1) 0%, rgba(10,37,64,1) 65%)",
        }}
      />

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:gap-20 lg:px-10">
        {/* Lado narrativo */}
        <Reveal className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <span className="eyebrow !text-gold-soft">Diagnóstico</span>
          </div>
          <h2 className="mt-6 font-display text-4xl font-medium leading-[1.1] text-cream sm:text-5xl">
            Una conversación.<br />
            Cero{" "}
            <span className="italic text-gold">compromiso</span>.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-cream/75 sm:text-lg">
            Cuéntanos brevemente sobre tu empresa y la exposición que te
            preocupa. Si vemos cómo ayudar, presentamos una propuesta clara.
            Si no, te lo decimos con la misma claridad.
          </p>

          <ul className="mt-10 space-y-5">
            {guarantees.map((g) => {
              const Icon = g.icon;
              return (
                <li key={g.title} className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-gold/30 text-gold">
                    <Icon size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-display text-lg text-cream">
                      {g.title}
                    </p>
                    <p className="mt-1 text-sm text-cream/65">{g.detail}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>

        {/* Formulario */}
        <Reveal className="lg:col-span-7" delay={0.15}>
          <div className="relative bg-cream p-8 text-graphite lg:p-12">
            <div
              aria-hidden
              className="absolute inset-3 border border-gold/20"
            />

            <div className="relative">
              {submitted ? (
                <SuccessMessage onReset={() => setSubmitted(false)} />
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="h-px w-6 bg-gold" />
                    <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-gold">
                      Solicitar diagnóstico
                    </span>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Nombre"
                      error={errors.name?.message}
                      {...register("name")}
                      autoComplete="name"
                    />
                    <Field
                      label="Empresa"
                      error={errors.company?.message}
                      {...register("company")}
                      autoComplete="organization"
                    />
                    <Field
                      label="Email"
                      type="email"
                      error={errors.email?.message}
                      {...register("email")}
                      autoComplete="email"
                    />
                    <Field
                      label="Teléfono"
                      type="tel"
                      error={errors.phone?.message}
                      {...register("phone")}
                      autoComplete="tel"
                    />
                  </div>

                  <SelectField
                    label="Sector"
                    error={errors.sector?.message}
                    {...register("sector")}
                  >
                    <option value="">Selecciona tu sector</option>
                    {sectors.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </SelectField>

                  <TextareaField
                    label="Cuéntanos sobre tu exposición"
                    rows={5}
                    error={errors.message?.message}
                    placeholder="Insumo o divisa principal, plazo, contexto..."
                    {...register("message")}
                  />

                  <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-mist">
                      Tu información es confidencial
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group inline-flex items-center justify-center gap-3 bg-navy px-8 py-4 text-sm font-medium tracking-wide text-cream transition-all hover:bg-graphite disabled:opacity-60"
                    >
                      {isSubmitting ? "Enviando..." : "Solicitar diagnóstico"}
                      {!isSubmitting && (
                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Field = function Field({
  label,
  error,
  className,
  ...rest
}: FieldProps) {
  const id = rest.name || rest.id;
  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-mist"
      >
        {label}
      </label>
      <input
        id={id}
        className={cn(
          "mt-2 border-0 border-b border-graphite/20 bg-transparent py-2.5 text-base text-navy outline-none transition-colors placeholder:text-mist/60 focus:border-gold",
          error && "border-bear",
          className,
        )}
        aria-invalid={!!error}
        {...rest}
      />
      {error && (
        <span className="mt-1.5 text-xs text-bear" role="alert">
          {error}
        </span>
      )}
    </div>
  );
};

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  children: React.ReactNode;
}

const SelectField = function SelectField({
  label,
  error,
  children,
  className,
  ...rest
}: SelectFieldProps) {
  const id = rest.name || rest.id;
  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-mist"
      >
        {label}
      </label>
      <select
        id={id}
        className={cn(
          "mt-2 cursor-pointer appearance-none border-0 border-b border-graphite/20 bg-transparent bg-[length:14px] bg-[right_4px_center] bg-no-repeat py-2.5 pr-6 text-base text-navy outline-none transition-colors focus:border-gold",
          "[background-image:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%230A2540' stroke-width='1.5'><path d='M6 9l6 6 6-6'/></svg>\")]",
          error && "border-bear",
          className,
        )}
        aria-invalid={!!error}
        defaultValue=""
        {...rest}
      >
        {children}
      </select>
      {error && (
        <span className="mt-1.5 text-xs text-bear" role="alert">
          {error}
        </span>
      )}
    </div>
  );
};

interface TextareaFieldProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const TextareaField = function TextareaField({
  label,
  error,
  className,
  ...rest
}: TextareaFieldProps) {
  const id = rest.name || rest.id;
  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-mist"
      >
        {label}
      </label>
      <textarea
        id={id}
        className={cn(
          "mt-2 resize-none border-0 border-b border-graphite/20 bg-transparent py-2.5 text-base text-navy outline-none transition-colors placeholder:text-mist/60 focus:border-gold",
          error && "border-bear",
          className,
        )}
        aria-invalid={!!error}
        {...rest}
      />
      {error && (
        <span className="mt-1.5 text-xs text-bear" role="alert">
          {error}
        </span>
      )}
    </div>
  );
};

function SuccessMessage({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-start py-6">
      <div className="flex h-16 w-16 items-center justify-center border border-gold bg-gold/10 text-gold">
        <Check size={28} strokeWidth={1.5} />
      </div>
      <span className="mt-8 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-gold">
        Solicitud recibida
      </span>
      <h3 className="mt-3 font-display text-3xl font-medium text-navy sm:text-4xl">
        Gracias por confiar.
      </h3>
      <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-graphite/80">
        Un miembro de la mesa de Brújula te contactará dentro de las próximas
        48 horas para coordinar el diagnóstico. Toda tu información queda bajo
        reserva profesional.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-8 inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-navy transition-all hover:text-gold"
      >
        Enviar otra solicitud
        <span className="h-px w-4 bg-current" />
      </button>
    </div>
  );
}

import type { ReactNode } from "react";

export const btnPrimary =
  "inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand px-7 text-sm font-semibold text-ink shadow-[0_0_32px_-6px_rgba(20,184,166,0.65)] transition hover:-translate-y-0.5 hover:bg-brand-light";

export const btnGhost =
  "inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-7 text-sm font-semibold text-white transition hover:bg-white/10";

export const btnDark =
  "inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-ink px-7 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-ink-3";

export const glassCard =
  "rounded-2xl border border-white/10 bg-white/[0.04] p-8 transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-white/[0.07]";

export function Icon({ name, className = "" }: { name: string; className?: string }) {
  return <span className={`material-symbols-outlined ${className}`}>{name}</span>;
}

export function IconBox({ name }: { name: string }) {
  return (
    <div className="flex size-14 items-center justify-center rounded-xl bg-white/[0.08] text-brand-light">
      <Icon name={name} className="text-[26px]" />
    </div>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span
      className={`text-xs font-semibold uppercase tracking-[0.2em] ${
        light ? "text-brand-dark" : "text-brand-light"
      }`}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div className={`flex flex-col gap-4 ${align === "center" ? "items-center text-center" : "items-start text-left"}`}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2
        className={`max-w-3xl font-heading text-3xl font-extrabold leading-[1.15] tracking-tight md:text-5xl ${
          light ? "text-ink" : "text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-2xl text-base md:text-lg ${light ? "text-slate-600" : "text-slate-400"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 md:px-10 ${className}`}>{children}</div>;
}

/** Hero banner for inner pages (dark, glow, big heading). */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink pb-20 pt-40 md:pb-28 md:pt-48">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[760px] -translate-x-1/2 rounded-full bg-brand/15 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <Container className="relative z-10 flex flex-col items-center text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
          <span className="size-1.5 rounded-full bg-gold" />
          {eyebrow}
        </span>
        <h1 className="max-w-4xl font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base text-slate-400 md:text-lg">{subtitle}</p>
        {children && <div className="mt-10 flex flex-wrap items-center justify-center gap-4">{children}</div>}
      </Container>
    </section>
  );
}

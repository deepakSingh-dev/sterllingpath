import Image from "next/image";
import Link from "next/link";
import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";
import {
  btnGhost,
  btnPrimary,
  Container,
  glassCard,
  Icon,
  IconBox,
  SectionHeading,
} from "@/components/ui";
import { MAILTO } from "@/lib/site";

const WHY = [
  {
    icon: "rocket_launch",
    title: "Rapid Placement",
    body: "Our streamlined process gets you hired 2x faster than traditional agencies.",
  },
  {
    icon: "public",
    title: "Global Reach",
    body: "Access to remote and on-site opportunities across 40+ countries.",
  },
  {
    icon: "verified_user",
    title: "Dedicated Mentorship",
    body: "Get paired with industry veterans who guide your career path.",
  },
];

const SERVICES = [
  {
    icon: "school",
    title: "IT Training",
    body: "Expert-led courses designed to upskill you in the latest technologies including Cloud, AI, and DevOps.",
    cta: "Explore Courses",
  },
  {
    icon: "description",
    title: "Resume Building",
    body: "Professional resume crafting and optimization to help your profile stand out to top-tier recruiters.",
    cta: "Build Resume",
  },
  {
    icon: "forum",
    title: "Interview Support",
    body: "Mock interviews, behavioral coaching, and technical preparation to ace your next big opportunity.",
    cta: "Start Preparation",
  },
];

const STATS = [
  { value: <CountUp to={500} suffix="+" />, label: "Companies Hiring" },
  { value: <CountUp to={12} suffix="k+" />, label: "Active Candidates" },
  { value: <CountUp to={98} suffix="%" />, label: "Placement Rate" },
  { value: "24/7", label: "Support Available" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-ink px-5 pb-24 pt-36">
        <div className="pointer-events-none absolute left-1/2 top-[8%] h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-brand/20 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-[10%] right-[8%] h-[360px] w-[360px] rounded-full bg-sky-500/10 blur-[110px]" />
        <div className="pointer-events-none absolute left-[4%] top-[50%] h-[280px] w-[280px] rounded-full bg-gold/10 blur-[110px]" />
        <div className="pointer-events-none absolute inset-0 grid-bg" />

        <div className="relative z-10 flex max-w-5xl flex-col items-center text-center">
          <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            <span className="size-1.5 rounded-full bg-gold" />
            Global Recruitment Agency
          </span>
          <h1 className="font-heading text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hire Smarter.
            <br />
            <span className="text-gradient">Get Hired Faster.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base text-slate-400 md:text-lg">
            Connecting top tech talent with global opportunities through expert
            recruitment, training, and career support.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a href={MAILTO} className={btnPrimary}>
              <Icon name="public" className="text-[20px]" />
              Find Jobs Worldwide
            </a>
            <a href={MAILTO} className={btnGhost}>
              <Icon name="group_add" className="text-[20px]" />
              Join Talent Pool
            </a>
            <Link
              href="/services"
              className="text-sm font-medium text-slate-400 transition-colors hover:text-brand-light"
            >
              Explore Services →
            </Link>
          </div>
        </div>

        <Icon
          name="keyboard_arrow_down"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-3xl text-slate-500"
        />
      </section>

      {/* Why SteerlingPath */}
      <section className="relative overflow-hidden bg-gradient-to-b from-ink via-ink to-ink-2 py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why SteerlingPath"
              title="We bridge the gap between ambition and opportunity."
              subtitle="In a crowded market, generic recruitment doesn't cut it. We use data-driven insights and a human-first approach to place the right people in the right roles."
            />
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {WHY.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className={`${glassCard} h-full`}>
                  <IconBox name={item.icon} />
                  <h3 className="mt-6 font-heading text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* What we do */}
      <section className="bg-ink-2 py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Our Expertise"
              title="Comprehensive Career Support"
              subtitle="We provide end-to-end solutions for both job seekers and employers, ensuring the perfect match every time."
            />
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className={`${glassCard} flex h-full flex-col`}>
                  <IconBox name={s.icon} />
                  <h3 className="mt-6 font-heading text-xl font-bold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                    {s.body}
                  </p>
                  <Link
                    href="/services"
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-light transition-all hover:gap-2"
                  >
                    {s.cta} <span aria-hidden>→</span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/services" className={btnGhost}>
              View All Services
            </Link>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="gradient-stats relative overflow-hidden py-16">
        <Container>
          <div className="grid grid-cols-2 gap-10 text-center md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-heading text-4xl font-extrabold text-white md:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 text-sm font-medium text-teal-100/80">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Verified excellence (light section) */}
      <section className="bg-mist py-24">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <div className="relative h-[440px] overflow-hidden rounded-3xl shadow-2xl shadow-ink/20">
                <Image
                  src="/images/team-meeting.jpg"
                  alt="Tech staffing meeting"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-5 bottom-5 flex items-center gap-4 rounded-2xl bg-white/90 p-4 backdrop-blur-md">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand text-ink">
                    <Icon name="check_circle" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink">Verified Excellence</p>
                    <p className="text-sm text-slate-600">
                      Top 1% of tech talent worldwide
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <SectionHeading
                align="left"
                light
                eyebrow="Built for results"
                title="A recruiter that works as hard as you do."
                subtitle="From your first conversation to your first day on the job, a dedicated team handles training, positioning, and placement — so you can focus on the work that matters."
              />
              <ul className="mt-8 space-y-4">
                {[
                  "Rigorous profile review and skill assessment",
                  "Hands-on training aligned to in-demand technologies",
                  "Direct introductions to a vetted network of employers",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3 text-slate-700">
                    <Icon name="check_circle" className="mt-0.5 text-brand-dark" />
                    {line}
                  </li>
                ))}
              </ul>
              <Link href="/placement" className={`${btnPrimary} mt-10`}>
                See the Placement Roadmap
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="gradient-cta py-24">
        <Container className="text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-heading text-3xl font-extrabold text-white md:text-5xl">
              Ready to transform your career?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base text-slate-400 md:text-lg">
              Join thousands of professionals who have found their dream jobs
              through SteerlingPath. Your future starts today.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={MAILTO} className={btnPrimary}>
                Get Started Now
              </a>
              <Link href="/about" className={btnGhost}>
                About Us
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

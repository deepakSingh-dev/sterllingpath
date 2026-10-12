import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  btnGhost,
  btnPrimary,
  Container,
  glassCard,
  Icon,
  IconBox,
  PageHero,
  SectionHeading,
} from "@/components/ui";
import { MAILTO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Placement Roadmap",
  description:
    "Discover SteerlingPath's 8-step placement roadmap and why top tech professionals choose us for career acceleration.",
};

const ROADMAP_STEPS = [
  { icon: "chat", title: "Initial Consultation", body: "We discuss your career goals, experience, and preferences to understand exactly what you are looking for." },
  { icon: "account_circle", title: "Profile Assessment", body: "Our experts analyze your skills and background to identify strengths and areas for improvement." },
  { icon: "menu_book", title: "Skill Training", body: "Access tailored workshops and resources to upskill in technologies demanded by top employers." },
  { icon: "description", title: "Resume Optimization", body: "We help craft a compelling resume that highlights your achievements and passes ATS filters." },
  { icon: "handshake", title: "Job Matching", body: "Our system connects you with roles that fit your criteria from our extensive network of partners." },
  { icon: "calendar_month", title: "Interview Scheduling", body: "We coordinate interviews and provide mock sessions to ensure you are fully prepared." },
  { icon: "attach_money", title: "Offer & Negotiation", body: "We support you in reviewing offers and negotiating terms to get the best possible compensation." },
  { icon: "work", title: "Onboarding", body: "Congratulations! We help facilitate a smooth onboarding so you can hit the ground running." },
];

const WHY_CHOOSE_US = [
  { icon: "rocket_launch", title: "Accelerated Placement", body: "Our streamlined process gets you placed 2x faster than the industry average." },
  { icon: "school", title: "Expert Mentorship", body: "Gain access to industry veterans who provide one-on-one guidance throughout your job search." },
  { icon: "domain", title: "Exclusive Network", body: "We partner with Fortune 500 companies and top startups that trust our rigorous vetting process." },
];

export default function PlacementPage() {
  return (
    <>
      <PageHero
        eyebrow="8 Steps to Placed"
        title={
          <>
            Your Journey to a <span className="text-gradient">Dream Career</span>
          </>
        }
        subtitle="We guide you through every step of the placement process, from initial consultation to your first day on the job."
      >
        <a href={MAILTO} className={btnPrimary}>
          Start Now
        </a>
        <Link href="/services" className={btnGhost}>
          Learn More
        </Link>
      </PageHero>

      {/* Banner stat */}
      <section className="bg-ink pb-8">
        <Container>
          <Reveal>
            <div className="relative h-[260px] overflow-hidden rounded-3xl border border-white/10 md:h-[320px]">
              <Image
                src="/images/placement-hero.jpg"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-heading text-xl font-bold">Success Stories</p>
                <p className="text-sm text-slate-300">Over 500+ Placements this year</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-ink py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            {/* Roadmap */}
            <div className="lg:col-span-7">
              <Reveal>
                <SectionHeading align="left" eyebrow="Placement Roadmap" title="Eight steps from hello to hired" />
              </Reveal>
              <ol className="mt-12 space-y-6">
                {ROADMAP_STEPS.map((s, i) => (
                  <Reveal key={s.title}>
                    <li className="relative flex gap-5">
                      {i < ROADMAP_STEPS.length - 1 && (
                        <span className="absolute left-6 top-14 -bottom-6 w-px bg-gradient-to-b from-brand/50 to-white/10" />
                      )}
                      <div className="z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-brand/40 bg-ink-3 text-brand-light">
                        <Icon name={s.icon} />
                      </div>
                      <div className={`${glassCard} flex-1 p-5 hover:translate-y-0`}>
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="font-heading text-base font-bold text-white">{s.title}</h3>
                          <span
                            className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                              i === ROADMAP_STEPS.length - 1
                                ? "bg-emerald-400/15 text-emerald-300"
                                : "bg-white/10 text-slate-300"
                            }`}
                          >
                            Step {i + 1}
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.body}</p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>

            {/* Why choose us */}
            <div className="lg:col-span-5">
              <div className="space-y-5 lg:sticky lg:top-28">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light">Why Choose Us</p>
                {WHY_CHOOSE_US.map((item) => (
                  <div key={item.title} className={`${glassCard} p-6`}>
                    <IconBox name={item.icon} />
                    <h3 className="mt-5 font-heading text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-400">{item.body}</p>
                  </div>
                ))}

                {/* Testimonial */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-dark to-ink-3 p-6 text-white">
                  <div className="relative z-10">
                    <div className="mb-3 flex gap-1 text-gold">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Icon key={i} name="star" className="text-base" />
                      ))}
                    </div>
                    <p className="mb-4 text-sm italic opacity-90">
                      &quot;SteerlingPath didn&apos;t just find me a job; they helped me build a career
                      path I&apos;m excited about every day.&quot;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/20 text-xs font-bold">
                        JD
                      </div>
                      <div>
                        <p className="text-xs font-bold">Client Testimonial</p>
                        <p className="text-[11px] opacity-70">Senior Developer, placed via SteerlingPath</p>
                      </div>
                    </div>
                  </div>
                  <Icon name="format_quote" className="absolute -bottom-4 -right-2 text-[120px] opacity-10" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="gradient-cta py-24">
        <Container className="text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-heading text-3xl font-extrabold text-white md:text-5xl">
              Ready for step one?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base text-slate-400 md:text-lg">
              Tell us where you want to go. We&apos;ll map the path.
            </p>
            <div className="mt-10">
              <a href={MAILTO} className={btnPrimary}>Start Now</a>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

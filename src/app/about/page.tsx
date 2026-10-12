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
  title: "About Us",
  description:
    "Learn about SteerlingPath's mission to democratize access to tech careers and build inclusive, high-performing teams worldwide.",
};

const CORE_VALUES = [
  {
    icon: "verified_user",
    title: "Integrity",
    body: "We operate with transparency and honesty in every placement. Trust is the currency of our business, and we earn it every day.",
  },
  {
    icon: "lightbulb",
    title: "Innovation",
    body: "Constantly evolving our training methods to match industry needs. We stay ahead of the curve so you don't have to.",
  },
  {
    icon: "diversity_3",
    title: "Inclusion",
    body: "Building diverse workforces that reflect the global community. We champion equal opportunity in tech for everyone.",
  },
];

const STATS = [
  ["98%", "Client Retention"],
  ["95%", "Placement Success"],
  ["12", "Global Offices"],
  ["50k+", "Talent Trained"],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title={
          <>
            Accelerating Careers,
            <br />
            <span className="text-gradient">Empowering Businesses</span>
          </>
        }
        subtitle="SteerlingPath connects ambition with opportunity. We bridge the gap between top-tier technical talent and innovative companies through premier recruitment, specialized training, and strategic placement."
      >
        <a href={MAILTO} className={btnPrimary}>
          View Open Roles
        </a>
        <Link href="/services" className={btnGhost}>
          Our Services
        </Link>
      </PageHero>

      {/* Mission (light) */}
      <section className="bg-mist py-24">
        <Container>
          <div className="grid items-center gap-14 md:grid-cols-2">
            <Reveal>
              <SectionHeading
                align="left"
                light
                eyebrow="Our Mission"
                title={
                  <>
                    Driven by Purpose, <span className="text-brand-dark">Focused on Potential.</span>
                  </>
                }
                subtitle="Our mission is to democratize access to tech careers while helping organizations build inclusive, high-performing teams. We believe that talent is universal, but opportunity is not — and we are here to change that equation."
              />
              <div className="mt-10 space-y-6">
                {[
                  { icon: "public", title: "Global Reach", body: "Connecting talent across 30+ countries." },
                  { icon: "school", title: "Skill Development", body: "Continuous training programs for candidates." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-ink text-brand-light">
                      <Icon name={item.icon} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-ink">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl shadow-ink/20">
                <Image
                  src="/images/about-mission.jpg"
                  alt="Team meeting discussing strategy"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Core values */}
      <section className="bg-ink-2 py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Our Core Values"
              title="The principles behind every placement"
              subtitle="The principles that guide every placement, every partnership, and every decision we make at SteerlingPath."
            />
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {CORE_VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className={`${glassCard} h-full`}>
                  <IconBox name={v.icon} />
                  <h3 className="mt-6 font-heading text-xl font-bold text-white">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="gradient-stats py-16">
        <Container>
          <div className="grid grid-cols-2 gap-10 text-center md:grid-cols-4">
            {STATS.map(([stat, label]) => (
              <div key={label}>
                <div className="font-heading text-4xl font-extrabold text-white md:text-5xl">{stat}</div>
                <div className="mt-2 text-sm font-medium text-teal-100/80">{label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* World banner */}
      <section className="bg-ink-2 py-24">
        <Container>
          <Reveal>
            <div className="group relative h-[400px] overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="/images/about-world.jpg"
                alt="Team joining hands"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center bg-gradient-to-r from-ink/95 via-ink/75 to-transparent p-8 md:p-16">
                <div className="max-w-lg">
                  <h2 className="font-heading text-3xl font-extrabold text-white">A World of Opportunity</h2>
                  <p className="mt-4 text-base leading-relaxed text-slate-300">
                    From London to New York, Singapore to San Francisco, our global network ensures we
                    find the perfect match, no matter the time zone.
                  </p>
                  <a href={MAILTO} className={`${btnPrimary} mt-8`}>
                    View Our Locations
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="gradient-cta py-24">
        <Container className="text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-heading text-3xl font-extrabold text-white md:text-5xl">
              Ready to transform your future?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base text-slate-400 md:text-lg">
              Whether you&apos;re looking for your next career move or searching for the perfect
              candidate, SteerlingPath is here to help.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={MAILTO} className={btnPrimary}>Find Talent</a>
              <a href={MAILTO} className={btnGhost}>Find a Job</a>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

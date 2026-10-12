import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  btnDark,
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
  title: "Services",
  description:
    "SteerlingPath offers IT Training, Resume Building, Interview Support, Job Support, Freelancer Sourcing, LinkedIn Optimization, and Career Counseling.",
};

const FOUNDATION_SERVICES = [
  {
    icon: "school",
    title: "Online IT Training",
    body: "Master in-demand skills with live, instructor-led courses.",
    bullets: ["Java, Python, AWS & DevOps", "Hands-on Labs"],
  },
  {
    icon: "description",
    title: "Resume Building",
    body: "Craft a narrative that gets past ATS and into human hands.",
    bullets: ["ATS Optimization", "Keyword Strategy"],
  },
  {
    icon: "groups",
    title: "Interview Support",
    body: "Gain confidence through rigorous practice sessions.",
    bullets: ["Mock Interviews", "Behavioral Coaching"],
  },
  {
    icon: "terminal",
    title: "Coding Test Support",
    body: "Tackle technical assessments with expert guidance.",
    bullets: ["Algorithm Practice", "Live Coding Drills"],
  },
];

const GROWTH_SERVICES = [
  {
    icon: "work",
    title: "Job Support",
    body: "Navigate your first 90 days with technical mentorship.",
    bullets: ["On-the-job Guidance", "Project Troubleshooting"],
  },
  {
    icon: "public",
    title: "Freelancer Sourcing",
    body: "Connect with top-tier projects worldwide.",
    bullets: ["Contract Negotiations", "Direct Client Access"],
  },
  {
    icon: "share",
    title: "LinkedIn Optimization",
    body: "Turn your profile into a recruiter magnet.",
    bullets: ["Profile Audit", "Networking Strategy"],
  },
  {
    icon: "explore",
    title: "Career Counseling",
    body: "Strategic planning for your next big move.",
    bullets: ["Salary Negotiation", "Growth Roadmap"],
  },
];

function ServiceGrid({
  items,
}: {
  items: { icon: string; title: string; body: string; bullets: string[] }[];
}) {
  return (
    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {items.map((s, i) => (
        <Reveal key={s.title} delay={i * 90}>
          <div className={`${glassCard} flex h-full flex-col p-7`}>
            <IconBox name={s.icon} />
            <h3 className="mt-6 font-heading text-lg font-bold text-white">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{s.body}</p>
            <ul className="mt-auto space-y-2.5 pt-6">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-slate-300">
                  <Icon name="check_circle" className="text-[18px] text-brand-light" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="New Cohorts Starting Soon"
        title={
          <>
            Elevate Your <span className="text-gradient">Tech Career</span>
          </>
        }
        subtitle="From expert-led training to personalized placement support, we provide the comprehensive ecosystem you need to launch and advance in technology."
      >
        <a href="#services" className={btnPrimary}>
          Explore Services
        </a>
        <Link href="/success-stories" className={btnGhost}>
          View Success Stories
        </Link>
      </PageHero>

      <section id="services" className="scroll-mt-24 bg-ink-2 py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Foundation"
              title="Career Development & Support"
              subtitle="Build a strong foundation with our comprehensive suite of preparation services designed to make you market-ready."
            />
          </Reveal>
          <ServiceGrid items={FOUNDATION_SERVICES} />
        </Container>
      </section>

      {/* Upskill band */}
      <section className="gradient-stats py-14">
        <Container className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h3 className="font-heading text-2xl font-extrabold text-white">Ready to upskill?</h3>
            <p className="mt-1 text-teal-100/80">
              Join 5,000+ professionals who accelerated their careers with us.
            </p>
          </div>
          <a href={MAILTO} className={btnDark}>
            Schedule a Consultation
          </a>
        </Container>
      </section>

      <section className="bg-ink py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Placement"
              title="Placement & Growth"
              subtitle="Beyond skills, we focus on the strategic moves that place you in the right role and ensure your long-term success."
            />
          </Reveal>
          <ServiceGrid items={GROWTH_SERVICES} />
        </Container>
      </section>

      <section className="gradient-cta py-24">
        <Container className="text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-heading text-3xl font-extrabold text-white md:text-5xl">
              Start Your Journey Today
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base text-slate-400 md:text-lg">
              Whether you&apos;re just starting out or looking to advance your career, we have the
              tools and expertise to help you succeed.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={MAILTO} className={btnPrimary}>Get Started Now</a>
              <a href={MAILTO} className={btnGhost}>Contact Support</a>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

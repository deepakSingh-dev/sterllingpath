import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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

function ServiceCard({
  icon,
  title,
  body,
  bullets,
}: {
  icon: string;
  title: string;
  body: string;
  bullets: string[];
}) {
  return (
    <div className="group flex flex-col p-6 rounded-xl bg-white border border-slate-200 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
      <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-xs text-text-muted mb-4">{body}</p>
      <ul className="mt-auto space-y-2">
        {bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex items-start gap-2 text-[11px] font-medium text-text-muted"
          >
            <span className="material-symbols-outlined text-primary text-[16px]">
              check_circle
            </span>
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mx-auto w-full max-w-7xl px-4 md:px-10 py-8">
        <div className="relative w-full overflow-hidden rounded-2xl bg-primary/5 min-h-[400px] flex items-center">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-8 md:p-16 w-full">
            <div className="flex flex-col justify-center gap-6">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                New Cohorts Starting Soon
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-text-main">
                Elevate Your <span className="text-primary">Tech Career</span>
              </h1>
              <p className="text-base text-text-muted max-w-lg">
                From expert-led training to personalized placement support,
                we provide the comprehensive ecosystem you need to launch and
                advance in technology.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#services"
                  className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/25"
                >
                  Explore Services
                </a>
                <Link
                  href="/success-stories"
                  className="bg-white border border-slate-200 hover:border-primary/50 text-text-main px-6 py-3 rounded-lg text-sm font-medium transition-all"
                >
                  View Success Stories
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-xl transform rotate-3 scale-95" />
              <div className="w-full h-80 rounded-xl overflow-hidden shadow-2xl relative bg-slate-800">
                <Image
                  src="/images/services-hero.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Career Development Section */}
      <section id="services" className="mx-auto w-full max-w-7xl px-4 md:px-10 py-16">
        <div className="flex flex-col gap-4 mb-12">
          <span className="text-primary font-bold tracking-wider uppercase text-xs">
            Foundation
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-text-main">
            Career Development &amp; Support
          </h2>
          <p className="text-text-muted max-w-2xl text-base">
            Build a strong foundation with our comprehensive suite of
            preparation services designed to make you market-ready.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOUNDATION_SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </section>

      {/* Divider CTA */}
      <div className="w-full bg-primary/5 py-12">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-text-main">
              Ready to upskill?
            </h3>
            <p className="text-text-muted">
              Join 5,000+ professionals who accelerated their careers with
              us.
            </p>
          </div>
          <Link
            href="mailto:Contact@steerlingpath.com"
            className="bg-white border border-slate-200 hover:text-primary text-text-main font-bold py-3 px-8 rounded-lg shadow-sm transition-colors whitespace-nowrap"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>

      {/* Placement & Growth Section */}
      <section className="mx-auto w-full max-w-7xl px-4 md:px-10 py-16">
        <div className="flex flex-col gap-4 mb-12">
          <span className="text-primary font-bold tracking-wider uppercase text-xs">
            Placement
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-text-main">
            Placement &amp; Growth
          </h2>
          <p className="text-text-muted max-w-2xl text-base">
            Beyond skills, we focus on the strategic moves that place you in
            the right role and ensure your long-term success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GROWTH_SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto w-full max-w-7xl px-4 md:px-10 pb-20">
        <div className="w-full rounded-2xl bg-gradient-to-r from-primary to-[#2563eb] px-8 py-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col gap-6 items-center">
            <h2 className="text-2xl md:text-3xl font-bold">
              Start Your Journey Today
            </h2>
            <p className="text-blue-100 text-base">
              Whether you&apos;re just starting out or looking to advance
              your career, we have the tools and expertise to help you
              succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
              <Link
                href="mailto:Contact@steerlingpath.com"
                className="bg-white text-primary px-8 py-4 rounded-lg text-sm font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Get Started Now
              </Link>
              <Link
                href="/about"
                className="bg-transparent border border-white text-white px-8 py-4 rounded-lg text-sm font-bold hover:bg-white/10 transition-all"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

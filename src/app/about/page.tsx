import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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
      {/* Hero Banner */}
      <div className="mx-auto w-full max-w-7xl px-4 md:px-10 py-8">
        <div className="relative flex min-h-[480px] flex-col gap-6 overflow-hidden rounded-2xl items-center justify-center p-8 text-center shadow-xl border border-white/10">
          <Image
            src="/images/about-hero.jpg"
            alt=""
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(10,18,32,0.8),rgba(0,51,128,0.6))]" />
          <div className="relative z-10 flex flex-col gap-4 max-w-[800px]">
            <span className="text-accent font-bold tracking-widest uppercase text-xs bg-white/10 px-4 py-1.5 rounded-full self-center backdrop-blur-md border border-white/20">
              Who We Are
            </span>
            <h1 className="text-white text-3xl font-black leading-tight tracking-tight md:text-5xl">
              Accelerating Careers,
              <br />
              Empowering Businesses
            </h1>
            <h2 className="text-slate-100 text-base font-normal leading-relaxed max-w-2xl mx-auto">
              SteerlingPath connects ambition with opportunity. We bridge the
              gap between top-tier technical talent and innovative companies
              through premier recruitment, specialized training, and
              strategic placement.
            </h2>
          </div>
          <div className="relative z-10 flex gap-4 pt-4">
            <Link
              href="mailto:Contact@steerlingpath.com"
              className="flex min-w-[140px] items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-white hover:text-primary-dark transition-all text-white text-sm font-bold shadow-lg shadow-primary/30"
            >
              View Open Roles
            </Link>
            <Link
              href="/services"
              className="flex min-w-[140px] items-center justify-center rounded-lg h-12 px-6 bg-white/5 hover:bg-white/20 backdrop-blur-md transition-colors text-white border border-white/30 text-sm font-bold"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="mx-auto w-full max-w-7xl px-4 md:px-10 py-12">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex items-center gap-2 text-primary-dark">
              <span className="material-symbols-outlined">rocket_launch</span>
              <span className="font-bold text-xs tracking-widest uppercase">
                Our Mission
              </span>
            </div>
            <h2 className="text-primary-dark text-2xl md:text-3xl font-black leading-tight tracking-tight">
              Driven by Purpose, <br />
              <span className="text-primary">Focused on Potential.</span>
            </h2>
            <p className="text-text-muted text-base leading-relaxed">
              Our mission is to democratize access to tech careers while
              helping organizations build inclusive, high-performing teams.
              We believe that talent is universal, but opportunity is
              not—and we are here to change that equation.
            </p>
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex gap-4 items-start">
                <div className="mt-1 bg-gradient-to-br from-primary to-primary-dark p-2 rounded-full text-white shadow-md">
                  <span className="material-symbols-outlined text-lg">
                    public
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-text-main">Global Reach</h4>
                  <p className="text-text-muted text-xs">
                    Connecting talent across 30+ countries.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="mt-1 bg-gradient-to-br from-primary to-primary-dark p-2 rounded-full text-white shadow-md">
                  <span className="material-symbols-outlined text-lg">
                    school
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-text-main">
                    Skill Development
                  </h4>
                  <p className="text-text-muted text-xs">
                    Continuous training programs for candidates.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-accent rounded-2xl opacity-20 blur-lg" />
            <div className="relative rounded-xl shadow-2xl w-full aspect-[4/3] overflow-hidden border border-white/50">
              <Image
                src="/images/about-mission.jpg"
                alt="Team meeting discussing strategy"
                fill
                className="object-cover hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="mx-auto w-full max-w-7xl px-4 md:px-10 py-16">
        <div className="text-center mb-12">
          <h2 className="text-primary-dark text-2xl font-bold mb-4">
            Our Core Values
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            The principles that guide every placement, every partnership, and
            every decision we make at SteerlingPath.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CORE_VALUES.map((value) => (
            <div
              key={value.title}
              className="group flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-8 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="size-14 rounded-lg bg-blue-50 flex items-center justify-center text-primary-dark group-hover:bg-gradient-to-br group-hover:from-primary-dark group-hover:to-primary group-hover:text-white transition-all duration-300 shadow-sm">
                <span className="material-symbols-outlined text-3xl">
                  {value.icon}
                </span>
              </div>
              <h3 className="text-text-main text-lg font-bold group-hover:text-primary transition-colors">
                {value.title}
              </h3>
              <p className="text-text-muted text-xs leading-relaxed">
                {value.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto w-full max-w-7xl px-4 md:px-10 pb-16">
        <div className="bg-gradient-to-b from-white to-blue-50 rounded-2xl p-8 md:p-12 shadow-lg border border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
            {STATS.map(([stat, label], i) => (
              <div key={label} className="contents">
                <div className="flex flex-col items-center gap-2 text-center md:flex-1 group">
                  <span className="text-4xl font-black text-primary-dark tracking-tight group-hover:scale-110 transition-transform">
                    {stat}
                  </span>
                  <span className="text-text-main font-medium text-base">
                    {label}
                  </span>
                </div>
                {i < STATS.length - 1 && (
                  <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* World of Opportunity Banner */}
      <div className="mx-auto w-full max-w-7xl px-4 md:px-10 pb-16">
        <div className="relative w-full rounded-2xl overflow-hidden h-[400px] group shadow-2xl">
          <Image
            src="/images/about-world.jpg"
            alt="Team joining hands"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#002a6b]/95 via-[#002a6b]/70 to-transparent flex items-center p-8 md:p-16">
            <div className="max-w-lg">
              <h2 className="text-white text-2xl font-bold mb-4">
                A World of Opportunity
              </h2>
              <p className="text-blue-100 text-base mb-8 leading-relaxed">
                From London to New York, Singapore to San Francisco, our
                global network ensures we find the perfect match, no matter
                the time zone.
              </p>
              <Link
                href="mailto:Contact@steerlingpath.com"
                className="inline-block bg-white text-primary-dark hover:bg-blue-50 transition-colors font-bold py-3 px-6 rounded-lg shadow-lg"
              >
                View Our Locations
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mx-auto w-full max-w-7xl px-4 md:px-10 pb-16">
        <div className="flex flex-col items-center text-center gap-6 py-12 border-t border-slate-200">
          <h2 className="text-primary-dark text-2xl font-bold">
            Ready to transform your future?
          </h2>
          <p className="text-text-muted max-w-lg">
            Whether you&apos;re looking for your next career move or
            searching for the perfect candidate, SteerlingPath is here to
            help.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link
              href="mailto:Contact@steerlingpath.com"
              className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-primary-dark text-white text-sm font-bold transition-colors shadow-lg shadow-primary/20"
            >
              Find Talent
            </Link>
            <Link
              href="mailto:Contact@steerlingpath.com"
              className="flex items-center justify-center rounded-lg h-12 px-8 border border-slate-200 hover:border-primary text-text-main hover:text-primary font-bold bg-white transition-colors"
            >
              Find a Job
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mx-auto w-full max-w-7xl px-4 md:px-10 py-8">
        <div className="relative flex min-h-[560px] flex-col justify-center overflow-hidden rounded-3xl bg-slate-900 px-6 py-16 text-center md:items-start md:justify-end md:px-16 md:pb-20 md:text-left">
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.7)_100%),linear-gradient(90deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.1)_100%)]" />
          <div className="relative z-10 max-w-2xl">
            <span className="mb-4 inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-100 backdrop-blur-sm border border-primary/30">
              Global Recruitment Agency
            </span>
            <h1 className="mb-6 text-3xl font-black leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Hire Smarter.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-blue-200">
                Get Hired Faster.
              </span>
            </h1>
            <p className="mb-8 max-w-lg text-base font-medium text-slate-200 md:text-lg">
              Connecting top tech talent with global opportunities through
              expert recruitment, training, and career support.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="mailto:Contact@steerlingpath.com"
                className="flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-8 text-sm font-bold text-white shadow-lg shadow-primary/40 transition-transform hover:scale-105 hover:bg-primary-dark"
              >
                <span className="material-symbols-outlined text-[20px]">
                  public
                </span>
                Find Jobs Worldwide
              </Link>
              <Link
                href="mailto:Contact@steerlingpath.com"
                className="flex h-12 items-center justify-center gap-2 rounded-xl bg-white/10 px-8 text-sm font-bold text-white backdrop-blur-md transition-colors hover:bg-white/20"
              >
                <span className="material-symbols-outlined text-[20px]">
                  group_add
                </span>
                Join Talent Pool
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="mx-auto w-full max-w-7xl px-4 md:px-10 pb-16">
        <div className="grid grid-cols-2 gap-8 rounded-2xl bg-surface-light p-8 shadow-sm md:grid-cols-4">
          {[
            ["500+", "Companies Hiring"],
            ["12k+", "Active Candidates"],
            ["98%", "Placement Rate"],
            ["24/7", "Support Available"],
          ].map(([stat, label]) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center gap-1 text-center md:items-start md:text-left"
            >
              <h3 className="text-2xl font-black text-primary">{stat}</h3>
              <p className="text-xs font-medium text-text-muted">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 md:px-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl space-y-4">
              <span className="font-bold text-primary uppercase tracking-wider text-xs">
                Our Expertise
              </span>
              <h2 className="text-2xl font-black leading-tight tracking-tight text-text-main md:text-3xl">
                Comprehensive Career Support
              </h2>
              <p className="text-base text-text-muted">
                We provide end-to-end solutions for both job seekers and
                employers, ensuring the perfect match every time.
              </p>
            </div>
            <Link
              href="/services"
              className="group flex items-center gap-2 font-bold text-primary hover:text-primary-dark"
            >
              View All Services
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
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
            ].map((card) => (
              <div
                key={card.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-background-light p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">
                    {card.icon}
                  </span>
                </div>
                <h3 className="mb-3 text-lg font-bold text-text-main">
                  {card.title}
                </h3>
                <p className="mb-6 text-text-muted">{card.body}</p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-xs font-bold text-primary group-hover:underline"
                >
                  {card.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative order-2 h-[500px] overflow-hidden rounded-3xl lg:order-1">
              <Image
                src="/images/team-meeting.jpg"
                alt="Tech staffing meeting"
                fill
                className="object-cover transition-transform hover:scale-105 duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/90 p-4 backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-text-main">
                      Verified Excellence
                    </p>
                    <p className="text-xs text-text-muted">
                      Top 1% of tech talent worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="mb-2 block font-bold uppercase tracking-wider text-primary">
                Why Choose Us
              </span>
              <h2 className="mb-6 text-2xl font-black leading-tight text-text-main md:text-3xl">
                We bridge the gap between ambition and opportunity.
              </h2>
              <p className="mb-8 text-base text-text-muted">
                In a crowded market, generic recruitment doesn&apos;t cut it.
                We use data-driven insights and a human-first approach to
                place the right people in the right roles.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: "rocket_launch",
                    title: "Rapid Placement",
                    body: "Our streamlined process gets you hired 2x faster than traditional agencies.",
                  },
                  {
                    icon: "globe",
                    title: "Global Reach",
                    body: "Access to remote and on-site opportunities across 40+ countries.",
                  },
                  {
                    icon: "verified_user",
                    title: "Dedicated Mentorship",
                    body: "Get paired with industry veterans who guide your career path.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="material-symbols-outlined">
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="mb-1 text-base font-bold text-text-main">
                        {item.title}
                      </h4>
                      <p className="text-text-muted">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background-light py-20">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-10">
          <div className="overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center shadow-2xl shadow-primary/20 md:px-16">
            <h2 className="mb-6 text-2xl font-black text-white md:text-4xl">
              Ready to transform your career?
            </h2>
            <p className="mb-10 mx-auto max-w-2xl text-base text-blue-100">
              Join thousands of professionals who have found their dream jobs
              through SteerlingPath. Your future starts today.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="mailto:Contact@steerlingpath.com"
                className="h-12 w-full flex items-center justify-center rounded-xl bg-white px-8 text-sm font-bold text-primary transition-colors hover:bg-slate-50 sm:w-auto"
              >
                Get Started Now
              </Link>
              <Link
                href="/about"
                className="h-12 w-full flex items-center justify-center rounded-xl bg-blue-800 px-8 text-sm font-bold text-white transition-colors hover:bg-blue-900 sm:w-auto"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

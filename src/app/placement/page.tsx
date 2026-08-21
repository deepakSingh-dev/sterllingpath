import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Placement Roadmap",
  description:
    "Discover SteerlingPath's 8-step placement roadmap and why top tech professionals choose us for career acceleration.",
};

const ROADMAP_STEPS = [
  {
    icon: "chat",
    step: 1,
    title: "Initial Consultation",
    body: "We discuss your career goals, experience, and preferences to understand exactly what you are looking for.",
  },
  {
    icon: "account_circle",
    step: 2,
    title: "Profile Assessment",
    body: "Our experts analyze your skills and background to identify strengths and areas for improvement.",
  },
  {
    icon: "menu_book",
    step: 3,
    title: "Skill Training",
    body: "Access tailored workshops and resources to upskill in technologies demanded by top employers.",
  },
  {
    icon: "description",
    step: 4,
    title: "Resume Optimization",
    body: "We help craft a compelling resume that highlights your achievements and passes ATS filters.",
  },
  {
    icon: "handshake",
    step: 5,
    title: "Job Matching",
    body: "Our system connects you with roles that fit your criteria from our extensive network of partners.",
  },
  {
    icon: "calendar_month",
    step: 6,
    title: "Interview Scheduling",
    body: "We coordinate interviews and provide mock sessions to ensure you are fully prepared.",
  },
  {
    icon: "attach_money",
    step: 7,
    title: "Offer & Negotiation",
    body: "We support you in reviewing offers and negotiating terms to get the best possible compensation.",
  },
  {
    icon: "work",
    step: 8,
    title: "Onboarding",
    body: "Congratulations! We help facilitate a smooth onboarding so you can hit the ground running.",
  },
];

const WHY_CHOOSE_US = [
  {
    icon: "rocket_launch",
    iconBg: "bg-blue-50",
    iconColor: "text-primary-light",
    title: "Accelerated Placement",
    body: "Our streamlined process gets you placed 2x faster than the industry average.",
  },
  {
    icon: "school",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    title: "Expert Mentorship",
    body: "Gain access to industry veterans who provide one-on-one guidance throughout your job search.",
  },
  {
    icon: "domain",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    title: "Exclusive Network",
    body: "We partner with Fortune 500 companies and top startups that trust our rigorous vetting process.",
  },
];

export default function PlacementPage() {
  return (
    <>
      {/* Hero */}
      <div className="mx-auto w-full max-w-7xl px-4 md:px-10 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8 items-center">
          <div className="flex flex-col gap-4 max-w-lg">
            <h1 className="text-text-main text-3xl md:text-4xl font-black leading-tight tracking-tight">
              Your Journey to a Dream Career
            </h1>
            <p className="text-text-muted text-base leading-relaxed">
              We guide you through every step of the placement process, from
              initial consultation to your first day on the job.
            </p>
            <div className="flex gap-3 mt-2">
              <Link
                href="mailto:Contact@steerlingpath.com"
                className="bg-gradient-to-br from-[#0f2d6b] via-[#1366c5] to-[#4faaff] hover:opacity-90 text-white px-6 py-3 rounded-lg font-medium transition-opacity shadow-lg shadow-blue-500/30"
              >
                Start Now
              </Link>
              <Link
                href="/services"
                className="text-primary hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                Learn More{" "}
                <span className="material-symbols-outlined text-xs">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-[400px] h-[300px] rounded-xl overflow-hidden shadow-xl relative group">
            <Image
              src="/images/placement-hero.jpg"
              alt="Team collaboration"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-bold text-base">Success Stories</p>
              <p className="text-xs opacity-90">
                Over 500+ Placements this year
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 md:px-10">
        <div className="w-full h-px bg-slate-200" />
      </div>

      {/* Roadmap & Why Choose Us */}
      <div className="mx-auto w-full max-w-7xl px-4 md:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Roadmap Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-gradient-to-br from-[#0f2d6b] via-[#1366c5] to-[#4faaff] rounded-lg text-white">
                <span className="material-symbols-outlined">map</span>
              </div>
              <h2 className="text-text-main text-xl font-bold leading-tight tracking-tight">
                Placement Roadmap
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              {ROADMAP_STEPS.map((s, i) => {
                const isFirst = i === 0;
                const isLast = i === ROADMAP_STEPS.length - 1;
                return (
                  <div key={s.step} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={
                          isFirst
                            ? "flex items-center justify-center size-12 rounded-full bg-gradient-to-br from-[#0f2d6b] via-[#1366c5] to-[#4faaff] text-white shadow-lg shadow-blue-500/30 z-10"
                            : "flex items-center justify-center size-12 rounded-full bg-white border-2 border-slate-200 text-slate-400 shadow-sm z-10 hover:bg-gradient-to-br hover:from-[#0f2d6b] hover:to-[#4faaff] hover:text-white hover:border-transparent transition-all"
                        }
                      >
                        <span className="material-symbols-outlined">
                          {s.icon}
                        </span>
                      </div>
                      {!isLast && (
                        <div
                          className={
                            isFirst
                              ? "w-1 bg-gradient-to-b from-[#0f2d6b] to-[#1366c5] flex-1 rounded-full mt-2"
                              : "w-1 bg-slate-200 flex-1 rounded-full mt-2"
                          }
                        />
                      )}
                    </div>
                    <div className={isLast ? "pt-1" : "pb-6 pt-1"}>
                      <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="text-text-main text-base font-bold group-hover:text-primary transition-colors">
                            {s.title}
                          </h3>
                          <span
                            className={
                              isFirst
                                ? "bg-blue-50 text-primary-light text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider"
                                : isLast
                                ? "bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider"
                                : "bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider"
                            }
                          >
                            Step {s.step}
                          </span>
                        </div>
                        <p className="text-text-muted text-xs leading-relaxed">
                          {s.body}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Why Choose Us Column */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="sticky top-24 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-[#0f2d6b] via-[#1366c5] to-[#4faaff] rounded-lg text-white">
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <h2 className="text-text-main text-xl font-bold leading-tight tracking-tight">
                  Why Choose Us
                </h2>
              </div>
              {WHY_CHOOSE_US.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm flex flex-col gap-4"
                >
                  <div
                    className={`size-12 rounded-lg ${item.iconBg} flex items-center justify-center ${item.iconColor}`}
                  >
                    <span className="material-symbols-outlined text-2xl">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-text-main mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-muted text-xs">{item.body}</p>
                  </div>
                </div>
              ))}

              {/* Testimonial */}
              <div className="bg-gradient-to-br from-[#0f2d6b] via-[#1366c5] to-[#4faaff] rounded-xl p-6 shadow-md relative overflow-hidden text-white mt-4">
                <div className="relative z-10">
                  <div className="flex gap-1 text-yellow-400 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-xs"
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <p className="text-xs italic font-medium opacity-90 mb-4">
                    &quot;SteerlingPath didn&apos;t just find me a job; they
                    helped me build a career path I&apos;m excited about
                    every day.&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="size-8 shrink-0 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold">
                      JD
                    </div>
                    <div>
                      <p className="text-[10px] font-bold">
                        Client Testimonial
                      </p>
                      <p className="text-[9px] opacity-70">
                        Senior Developer, placed via SteerlingPath
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-4 -bottom-4 opacity-10">
                  <span className="material-symbols-outlined text-[120px]">
                    format_quote
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

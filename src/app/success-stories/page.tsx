import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { btnPrimary, Container, Icon, PageHero, SectionHeading } from "@/components/ui";
import { MAILTO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Success Stories & Resources",
  description:
    "Read success stories from tech professionals placed by SteerlingPath. Access career resources, interview prep guides, and industry insights.",
};

const STORIES = [
  {
    gradient: "from-brand-dark to-ink-3",
    placedAt: "Placed at a leading tech company",
    role: "Senior React Developer",
    quote: "The technical interview prep was a game changer. I felt confident walking into the room.",
  },
  {
    gradient: "from-[#0e5a63] to-ink-3",
    placedAt: "Placed at a fintech firm",
    role: "Lead Data Analyst",
    quote: "They didn't just find me a job, they found a role that perfectly aligned with my career roadmap.",
  },
  {
    gradient: "from-[#155e75] to-ink-3",
    placedAt: "Placed at a growth-stage startup",
    role: "Product Manager",
    quote: "Negotiating my salary was daunting, but my recruiter coached me through every step.",
  },
  {
    gradient: "from-[#115e59] to-ink-3",
    placedAt: "Placed at a design studio",
    role: "UX/UI Lead",
    quote: "The portfolio review session helped me present my work in a way that truly impressed the hiring managers.",
  },
];

const ARTICLES = [
  {
    image: "/images/blog-1.jpg",
    tag: "Interview Prep",
    readTime: "5 min read",
    title: "Top Tech Interview Questions 2026",
    body: "Master the coding challenges and behavioral questions that top tech companies are asking this year.",
  },
  {
    image: "/images/blog-2.jpg",
    tag: "Personal Branding",
    readTime: "8 min read",
    title: "LinkedIn Optimization Guide",
    body: "Recruiters spend 6 seconds on your profile. Learn the exact keywords and structure to make your profile stand out.",
  },
  {
    image: "/images/blog-3.jpg",
    tag: "Career Growth",
    readTime: "12 min read",
    title: "IT Career Roadmap: Junior to CTO",
    body: "Planning your path is crucial. We break down the skills, certifications, and experience needed for every major milestone.",
  },
];

export default function SuccessStoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Real Results"
        title={
          <>
            From Application to <span className="text-gradient">Offer Letter</span>
          </>
        }
        subtitle="See how we've helped over 5,000 tech professionals land their dream roles at top companies worldwide."
      />

      {/* Stories */}
      <section className="bg-ink-2 py-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STORIES.map((s, i) => (
              <Reveal key={s.role} delay={i * 90}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:border-brand/40">
                  <div
                    className={`relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br ${s.gradient}`}
                  >
                    <Icon name="account_circle" className="text-6xl text-white/25" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                      <p className="text-[11px] font-medium text-brand-light">{s.placedAt}</p>
                      <h3 className="font-heading text-base font-bold">Client Story</h3>
                      <p className="text-xs opacity-90">{s.role}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-5">
                    <Icon name="format_quote" className="text-xl text-brand-light" />
                    <p className="text-sm italic leading-relaxed text-slate-300">&quot;{s.quote}&quot;</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Resources (light) */}
      <section className="bg-mist py-24">
        <Container>
          <Reveal>
            <SectionHeading
              light
              eyebrow="Resources"
              title="Career Resources & Insights"
              subtitle="Expert advice, industry trends, and practical guides to accelerate your tech career."
            />
          </Reveal>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((a, i) => (
              <Reveal key={a.title} delay={i * 100}>
                <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={a.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-brand-dark">
                      <span>{a.tag}</span>
                      <span className="size-1 rounded-full bg-slate-300" />
                      <span className="font-medium normal-case text-slate-500">{a.readTime}</span>
                    </div>
                    <h3 className="mt-3 font-heading text-lg font-bold text-ink">{a.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{a.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="gradient-cta py-24">
        <Container className="text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light">Stay Updated</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-heading text-3xl font-extrabold text-white md:text-5xl">
              Join 20,000+ Tech Pros
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base text-slate-400 md:text-lg">
              Get the latest job openings, career tips, and success stories. Tell us you&apos;re
              interested and we&apos;ll keep you in the loop.
            </p>
            <div className="mt-10">
              <a href={MAILTO} className={btnPrimary}>Get in Touch</a>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

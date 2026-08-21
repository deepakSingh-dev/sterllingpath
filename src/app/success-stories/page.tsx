import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Success Stories & Resources",
  description:
    "Read success stories from tech professionals placed by SteerlingPath. Access career resources, interview prep guides, and industry insights.",
};

const STORIES = [
  {
    gradient: "from-primary to-primary-dark",
    placedAt: "Placed at a leading tech company",
    role: "Senior React Developer",
    quote:
      "The technical interview prep was a game changer. I felt confident walking into the room.",
  },
  {
    gradient: "from-primary-light to-primary",
    placedAt: "Placed at a fintech firm",
    role: "Lead Data Analyst",
    quote:
      "They didn't just find me a job, they found a role that perfectly aligned with my career roadmap.",
  },
  {
    gradient: "from-accent to-primary",
    placedAt: "Placed at a growth-stage startup",
    role: "Product Manager",
    quote:
      "Negotiating my salary was daunting, but my recruiter coached me through every step.",
  },
  {
    gradient: "from-primary-dark to-accent",
    placedAt: "Placed at a design studio",
    role: "UX/UI Lead",
    quote:
      "The portfolio review session helped me present my work in a way that truly impressed the hiring managers.",
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
    <div className="mx-auto w-full max-w-7xl px-4 md:px-10 py-8 flex flex-col gap-12">
      {/* Success Stories */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-[11px]">
            <span className="w-8 h-[1px] bg-primary" />
            Real Results
          </div>
          <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-text-main">
            From Application to Offer Letter
          </h1>
          <p className="text-text-muted text-base leading-relaxed max-w-xl">
            See how we&apos;ve helped over 5,000 tech professionals land
            their dream roles at top companies worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {STORIES.map((story) => (
            <div
              key={story.role}
              className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300"
            >
              <div
                className={`relative w-full aspect-[4/5] overflow-hidden bg-gradient-to-br ${story.gradient} flex items-center justify-center`}
              >
                <span className="material-symbols-outlined text-white/30 text-5xl">
                  account_circle
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-[11px] font-medium text-blue-200 mb-1">
                    {story.placedAt}
                  </p>
                  <h3 className="text-base font-bold">Client Story</h3>
                  <p className="text-xs opacity-90">{story.role}</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                    format_quote
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    &quot;{story.quote}&quot;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-slate-200" />

      {/* Resources Section */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-text-main">
              Career Resources &amp; Insights
            </h2>
            <p className="text-text-muted text-sm max-w-2xl">
              Expert advice, industry trends, and practical guides to
              accelerate your tech career.
            </p>
          </div>
          <a
            className="text-primary font-semibold text-xs hover:underline flex items-center gap-1"
            href="#"
          >
            View all articles{" "}
            <span className="material-symbols-outlined text-xs">
              arrow_forward
            </span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <article key={article.title} className="group flex flex-col gap-4">
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white hover:shadow-lg transition-all duration-300">
                <div className="relative w-full aspect-video">
                  <Image
                    src={article.image}
                    alt=""
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-primary">
                  <span>{article.tag}</span>
                  <span className="size-1 rounded-full bg-slate-300" />
                  <span className="text-text-muted font-medium normal-case">
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-text-main group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-text-muted text-xs leading-relaxed">
                  {article.body}
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-text-main hover:text-primary"
                  href="#"
                >
                  Read Article{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_right_alt
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="rounded-2xl bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        <div className="relative z-10 px-8 py-12 md:px-16 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-4 max-w-lg">
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-[11px]">
              <span className="material-symbols-outlined text-base">
                mail
              </span>
              Stay Updated
            </div>
            <h2 className="text-2xl font-bold leading-tight">
              Join 20,000+ Tech Pros
            </h2>
            <p className="text-slate-300 text-sm">
              Get the latest job openings, career tips, and success stories
              delivered straight to your inbox every week.
            </p>
          </div>
          <form className="w-full max-w-md flex flex-col sm:flex-row gap-3">
            <input
              className="flex-1 h-12 px-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="Enter your email address"
              type="email"
            />
            <button
              type="submit"
              className="h-12 px-6 rounded-lg bg-primary hover:bg-primary-dark text-white font-bold transition-colors whitespace-nowrap shadow-lg shadow-primary/30"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

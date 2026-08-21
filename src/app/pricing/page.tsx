import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Plans & Pricing",
  description:
    "Flexible SteerlingPath plans for your career growth — transparent pricing with guaranteed placement support.",
};

const PLANS = [
  {
    name: "Launch",
    price: "$14,000",
    breakdown: "$2,500 (Pre-Placement) + $11,500 (After Job / 4 EMIs)",
    features: [
      "Resume Preparation",
      "RUC Session & Live Training",
      "Interview Training",
      "Assessment Support: 5",
      "Interview Support: 5",
      "Marketing: C Rank (3 Profiles)",
    ],
    guarantee: "Nil",
    guaranteeBold: false,
  },
  {
    name: "Growth",
    price: "$14,500",
    breakdown: "$4,500 (Pre-Placement) + $10,000 (After Job / 4 EMIs)",
    features: [
      "Resume Preparation",
      "RUC Session & Live Training",
      "Interview Training",
      "Assessment Support: 10+",
      "Interview Support: 10+",
      "Marketing: B Rank (3 Profiles)",
    ],
    guarantee: "200 days",
    guaranteeBold: true,
  },
  {
    name: "Elite",
    price: "$15,000",
    breakdown: "$6,000 (Pre-Placement) + $9,000 (After Job / 4 EMIs)",
    features: [
      "Resume Preparation",
      "RUC Session & Live Training",
      "Interview Training",
      "Assessment Support: 20+",
      "Interview Support: 20+",
      "Marketing: A Rank (2 Profiles)",
    ],
    guarantee: "160 days",
    guaranteeBold: true,
  },
  {
    name: "Assured",
    price: "$16,000",
    breakdown: "$8,000 (Pre-Placement) + $8,000 (After Job / 4 EMIs)",
    features: [
      "Resume Preparation",
      "RUC Session & Live Training",
      "Interview Training",
      "Assessment & Interview: Unlimited",
      "Marketing: S Rank (Individual)",
    ],
    guarantee: "120 days",
    guaranteeBold: true,
  },
];

export default function PricingPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 md:px-10 py-10 flex flex-col gap-10">
      <div className="w-full flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
        <h1 className="text-text-main text-3xl sm:text-4xl font-black leading-tight tracking-tight">
          Flexible Plans for Your Career Growth
        </h1>
        <p className="text-text-muted text-base leading-relaxed">
          Choose the right support level for your job search and placement
          needs. Transparent pricing with guaranteed results.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className="relative flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 p-6"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-primary text-lg font-bold mb-4">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 text-text-main mb-2">
                <span className="text-2xl xl:text-3xl font-black tracking-tight">
                  {plan.price}
                </span>
              </div>
              <div className="text-xs font-medium text-text-muted mb-6">
                Total Cost
              </div>
              <div className="flex flex-col gap-4 flex-1 mb-8">
                <div className="flex flex-col gap-1 text-[11px] xl:text-xs">
                  <span className="font-semibold text-text-main">
                    Cost Breakdown
                  </span>
                  <span className="text-text-muted">{plan.breakdown}</span>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  {plan.features.map((f) => (
                    <div
                      key={f}
                      className="flex items-center gap-2 text-xs text-slate-600"
                    >
                      <span className="material-symbols-outlined text-primary text-[18px]">
                        check_circle
                      </span>
                      {f}
                    </div>
                  ))}
                </div>
                <div className="mt-2 pt-4 border-t border-slate-200">
                  <div
                    className={
                      plan.guaranteeBold
                        ? "flex items-center gap-2 text-xs font-bold text-primary"
                        : "flex items-center gap-2 text-xs font-bold text-text-main"
                    }
                  >
                    <span className="material-symbols-outlined text-lg">
                      verified_user
                    </span>
                    Job guarantee: {plan.guarantee}
                  </div>
                </div>
              </div>
              <Link
                href="mailto:Contact@steerlingpath.com"
                className="w-full py-3 px-4 rounded-lg bg-primary hover:bg-primary-dark text-white text-xs font-bold transition-colors shadow-lg shadow-primary/30 text-center"
              >
                Choose Plan
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Enterprise CTA */}
      <div className="w-full bg-white rounded-2xl shadow-sm p-8 border border-slate-200">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-text-main text-lg font-bold">
              Need a custom enterprise solution?
            </h3>
            <p className="text-text-muted text-xs">
              We offer tailored packages for companies hiring more than 10
              candidates.
            </p>
          </div>
          <Link
            href="mailto:Contact@steerlingpath.com"
            className="whitespace-nowrap rounded-lg px-6 py-3 bg-slate-900 text-white text-xs font-bold hover:opacity-90 transition-opacity"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </div>
  );
}

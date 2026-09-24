import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white pt-16 pb-8">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/images/steerlingpath-logo.svg"
                alt="SteerlingPath Logo"
                width={32}
                height={32}
                className="h-8 w-auto object-contain"
              />
              <span className="text-base font-bold text-[#002a6b]">
                SteerlingPath
              </span>
            </div>
            <p className="text-xs text-text-muted">
              Empowering the world&apos;s best tech talent to build the
              future.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-bold text-text-main text-sm">
              For Candidates
            </h4>
            <ul className="space-y-2 text-xs text-text-muted">
              <li>
                <Link className="hover:text-primary" href="/services">
                  Career Advice
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" href="/services">
                  Resume Builder
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" href="/placement">
                  Placement Roadmap
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-bold text-text-main text-sm">
              For Employers
            </h4>
            <ul className="space-y-2 text-xs text-text-muted">
              <li>
                <Link className="hover:text-primary" href="/services">
                  Talent Solutions
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" href="/pricing">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" href="/success-stories">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-bold text-text-main text-sm">Contact</h4>
            <ul className="space-y-2 text-xs text-text-muted">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-base mt-0.5">
                  location_on
                </span>
                971 US Highway 202N, Ste R, Branchburg, New Jersey 08876
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base">
                  phone
                </span>
                +1 (551) 210-7374
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base">
                  email
                </span>
                Contact@steerlingpath.com
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-slate-200 pt-8 text-center text-xs text-text-muted">
          <p>&copy; {new Date().getFullYear()} SteerlingPath. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

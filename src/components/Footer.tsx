import Image from "next/image";
import Link from "next/link";
import { CONTACT_EMAIL, MAILTO } from "@/lib/site";

const linkClass = "text-slate-400 transition-colors hover:text-brand-light";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink pb-8 pt-16">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/steerlingpath-logo.svg"
                alt="SteerlingPath Logo"
                width={32}
                height={32}
                className="h-8 w-auto object-contain"
              />
              <span className="font-heading text-base font-bold text-white">
                SteerlingPath
              </span>
            </div>
            <p className="max-w-xs text-sm text-slate-400">
              Empowering the world&apos;s best tech talent to build the future.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">For Candidates</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link className={linkClass} href="/services">Career Advice</Link></li>
              <li><Link className={linkClass} href="/services">Resume Builder</Link></li>
              <li><Link className={linkClass} href="/placement">Placement Roadmap</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">For Employers</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link className={linkClass} href="/services">Talent Solutions</Link></li>
              <li><Link className={linkClass} href="/success-stories">Success Stories</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined mt-0.5 text-lg text-brand-light">location_on</span>
                971 US Highway 202N, Ste R, Branchburg, New Jersey 08876
              </li>
              <li className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-lg text-brand-light">phone</span>
                +1 (551) 210-7374
              </li>
              <li className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-lg text-brand-light">email</span>
                <a className="transition-colors hover:text-brand-light" href={MAILTO}>
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 border-t border-white/10 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} SteerlingPath. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

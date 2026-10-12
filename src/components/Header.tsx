"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { createPortal } from "react-dom";
import { NAV_LINKS } from "@/lib/nav";
import { MAILTO } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-3 top-3 z-50 mx-auto max-w-7xl md:inset-x-6">
      <div className="flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-ink/70 px-4 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl md:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/steerlingpath-logo.svg"
            alt="SteerlingPath Logo"
            width={36}
            height={36}
            className="h-9 w-auto object-contain"
          />
          <span className="font-heading text-lg font-bold tracking-tight text-white">
            SteerlingPath
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-white/10 text-white"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={MAILTO}
            className="hidden h-10 items-center rounded-xl bg-brand px-5 text-sm font-semibold text-ink shadow-[0_0_24px_-6px_rgba(20,184,166,0.7)] transition hover:bg-brand-light md:inline-flex"
          >
            Contact Us
          </a>
          <button
            className="rounded-lg p-2 text-white hover:bg-white/10 md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
        </div>
      </div>

      {menuOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm md:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <div
              className="absolute right-0 top-0 flex h-full w-4/5 max-w-xs flex-col border-l border-white/10 bg-ink-2 p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="mb-6 self-end rounded-lg p-1 text-white hover:bg-white/10"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`rounded-xl px-4 py-3 font-medium transition-colors ${
                        active
                          ? "bg-brand/15 text-brand-light"
                          : "text-slate-300 hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
              <a
                href={MAILTO}
                onClick={() => setMenuOpen(false)}
                className="mt-auto flex h-12 items-center justify-center rounded-xl bg-brand text-sm font-semibold text-ink"
              >
                Contact Us
              </a>
            </div>
          </div>,
          document.body,
        )}
    </header>
  );
}

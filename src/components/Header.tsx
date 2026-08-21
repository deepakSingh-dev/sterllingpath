"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/nav";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/92 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-10 h-16">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/steerlingpath-logo.svg"
            alt="SteerlingPath Logo"
            width={40}
            height={40}
            className="h-10 w-auto object-contain"
          />
          <span className="text-xl font-bold tracking-tight text-[#002a6b]">
            SteerlingPath
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? "text-xs font-bold text-primary"
                    : "text-xs font-medium text-text-main hover:text-primary transition-colors"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          className="md:hidden text-text-main p-2"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="material-symbols-outlined text-xl">menu</span>
        </button>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="absolute right-0 top-0 h-full w-4/5 max-w-xs bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="mb-6 float-right"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <nav className="clear-both flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={
                      active
                        ? "p-3 rounded-lg font-bold text-primary bg-primary/5"
                        : "p-3 rounded-lg font-medium text-text-main hover:bg-slate-50"
                    }
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

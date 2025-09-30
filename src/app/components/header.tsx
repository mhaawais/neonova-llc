// app/components/Header.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { FiMail, FiPhone, FiMenu, FiX } from 'react-icons/fi';

type NavItem = { label: string; href: string };
const NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact Us', href: '/contact' },
];

// exact gold tuned for your logo
const ACCENT = '#C6A15B';

export default function Header() {
  const pathname = usePathname() || '/';
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // close mobile when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // sticky elevation
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // simple "active" matcher (keeps Services active on /services/child)
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <header
      style={{ ['--accent' as any]: ACCENT }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-neutral-950/90 backdrop-blur border-b border-neutral-800/80 shadow-lg'
          : 'bg-neutral-950/70 backdrop-blur'
      }`}
      aria-label="Primary"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between gap-4">
          {/* Logo fills header height */}
          <Link href="/" aria-label="Neonova LLC" className="shrink-0">
            <div className="relative h-12 lg:h-16 w-[170px] lg:w-[220px]">
              <Image
                src="/assets/logo/neonova-logo.png"
                alt="Neonova LLC"
                fill
                priority
                sizes="(max-width: 1024px) 170px, 220px"
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop nav (≥lg) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`group relative px-3 py-1 rounded-md focus:outline-none
                    focus-visible:ring-2 focus-visible:ring-[var(--accent)]/60
                    transition-colors
                    ${
                      active
                        ? 'text-[var(--accent)]'
                        : 'text-neutral-200 hover:text-[var(--accent)]'
                    }
                    text-[0.95rem] xl:text-base font-semibold tracking-wide`}
                >
                  {item.label}
                  {/* center-out underline */}
                  <span
                    className={`pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-[3px] h-[2px] w-0 rounded-full bg-[var(--accent)]
                                transition-[width] duration-500 ease-out
                                group-hover:w-[calc(100%-1.5rem)]
                                ${active ? 'w-[calc(100%-1.5rem)]' : ''}`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Contact pills (≥lg) */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+15075561700"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--accent)]/25 bg-neutral-900/60 px-3.5 py-2 text-sm xl:text-base text-neutral-100 transition-all hover:border-[var(--accent)]/50 hover:shadow-[0_0_0_4px_rgba(198,161,91,0.12)]"
            >
              <FiPhone className="text-[var(--accent)]" />
              <span className="font-semibold">+1 (507) 556-1700</span>
            </a>
            <a
              href="mailto:info@neonexusllc.com"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--accent)]/25 bg-neutral-900/60 px-3.5 py-2 text-sm xl:text-base text-neutral-100 transition-all hover:border-[var(--accent)]/50 hover:shadow-[0_0_0_4px_rgba(198,161,91,0.12)]"
            >
              <FiMail className="text-[var(--accent)]" />
              <span className="font-semibold">info@neonexusllc.com</span>
            </a>
          </div>

          {/* Hamburger (<lg) */}
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/70 p-2.5 text-neutral-200 transition hover:border-[var(--accent)]/40 hover:text-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/60"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer (<lg) */}
      <div className={`lg:hidden ${open ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 z-40">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />
          <div
            className="absolute right-0 top-0 h-full w-[86%] max-w-[360px] border-l border-neutral-800
                       bg-[rgba(10,10,12,0.96)] backdrop-blur-md p-6 z-50"
          >
            <nav className="space-y-1">
              {NAV.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block rounded-lg px-3 py-3 text-[1.05rem] font-semibold tracking-wide transition-colors
                      ${active ? 'text-[var(--accent)] bg-neutral-800/50' : 'text-neutral-200 hover:text-[var(--accent)] hover:bg-neutral-800/40'}`}
                  >
                    {item.label}
                    <span
                      className={`mt-1 block h-[2px] w-0 bg-[var(--accent)] transition-[width] duration-500 ease-out
                                  ${active ? 'w-2/3' : 'group-hover:w-2/3'}`}
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="mt-6 space-y-3">
              <a
                href="tel:+15075561700"
                className="flex items-center gap-3 rounded-xl border border-[var(--accent)]/25 bg-neutral-900/70 px-4 py-3 text-neutral-100 transition hover:border-[var(--accent)]/50"
              >
                <FiPhone className="text-[var(--accent)]" />
                <span className="font-semibold">+1 (507) 556-1700</span>
              </a>
              <a
                href="mailto:info@neonexusllc.com"
                className="flex items-center gap-3 rounded-xl border border-[var(--accent)]/25 bg-neutral-900/70 px-4 py-3 text-neutral-100 transition hover:border-[var(--accent)]/50"
              >
                <FiMail className="text-[var(--accent)]" />
                <span className="font-semibold">info@neonexusllc.com</span>
              </a>
            </div>

            <p className="mt-8 text-xs text-neutral-400">
              © {new Date().getFullYear()} Neonova LLC
            </p>
          </div>
        </div>
      </div>

      {/* thin accent bar */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[var(--accent)]/0 via-[var(--accent)] to-[var(--accent)]/0" />
    </header>
  );
}

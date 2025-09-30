// app/components/Footer.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  FiMail, FiPhone, FiMapPin, FiArrowRight,
  FiFacebook, FiTwitter, FiInstagram, FiLinkedin
} from 'react-icons/fi';

const ACCENT = '#C6A15B';

const nav = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact Us', href: '/contact' },
];

// const services = [
//   { label: 'E-books & Publications', href: '#ebooks' },
//   { label: 'Digital Marketing', href: '#marketing' },
//   { label: 'Software Development', href: '#software' },
//   { label: 'IT Solutions', href: '#it' },
// ];


const services = [
  { label: 'E-books & Publications', href: '#ebooks' },
  { label: 'Digital Marketing', href: '#marketing' },
  { label: 'Software Development', href: '#software' },
  { label: 'IT Solutions', href: '#it' },
];


export default function Footer() {
  return (
    <footer
      style={{ ['--accent' as any]: ACCENT }}
      className="relative border-t border-neutral-800 bg-gradient-to-b from-neutral-900 to-[#0F1113] text-neutral-300"
      aria-label="Footer"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* Center content on sm and below */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">
          {/* Brand / About */}
          <div>
            <Link href="/" className="mx-auto md:mx-0 flex items-center justify-center md:justify-start gap-3">
              <div className="relative h-12 w-[200px]">
                <Image
                  src="/assets/logo/neonova-logo.png"
                  alt="Neonovallc"
                  fill
                  sizes="200px"
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              Neonovallc turns strategy and content into immersive digital products —
              from publishing pipelines to high-performing software, marketing, and IT.
            </p>

            {/* Socials */}
            <div className="mt-5 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <Social href="#" label="Facebook"><FiFacebook /></Social>
              <Social href="#" label="Twitter / X"><FiTwitter /></Social>
              <Social href="#" label="Instagram"><FiInstagram /></Social>
              <Social href="#" label="LinkedIn"><FiLinkedin /></Social>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-neutral-100 font-semibold tracking-wide">Navigate</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="group inline-flex items-center justify-center md:justify-start gap-2 hover:text-[var(--accent)] transition-colors"
                  >
                    <span className="relative">
                      {n.label}
                      <i className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-[3px] block h-[2px] w-0 bg-[var(--accent)] rounded-full transition-[width] duration-500 ease-out group-hover:w-full" />
                    </span>
                    <FiArrowRight className="opacity-0 -translate-x-1 transition group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-neutral-100 font-semibold tracking-wide">Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="group inline-flex items-center justify-center md:justify-start gap-2 hover:text-[var(--accent)] transition-colors"
                  >
                    <span className="relative">
                      {s.label}
                      <i className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-[3px] block h-[2px] w-0 bg-[var(--accent)] rounded-full transition-[width] duration-500 ease-out group-hover:w-full" />
                    </span>
                    <FiArrowRight className="opacity-0 -translate-x-1 transition group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-neutral-100 font-semibold tracking-wide">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <FiPhone className="text-[var(--accent)]" />
                <a href="tel:+15075561700" className="hover:text-[var(--accent)] transition">
                  +1 (507) 556-1700
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <FiMail className="text-[var(--accent)]" />
                <a href="mailto:info@neonexusllc.com" className="hover:text-[var(--accent)] transition">
                  info@neonexusllc.com
                </a>
              </li>
              <li className="flex items-start justify-center md:justify-start gap-2 text-neutral-400">
                <FiMapPin className="mt-0.5 text-[var(--accent)]" />
                <span>5900 Balcones Drive, STE 100, Austin, TX, 78731</span>
              </li>
            </ul>

            {/* Small highlight card */}
            <div className="mt-5 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4">
              <p className="text-sm">
                <span className="font-semibold text-neutral-200">Need a quote?</span> Tell us your goals and we’ll map a plan.
              </p>
              <Link
                href="/contact"
                className="mt-3 inline-block rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:brightness-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-xs sm:text-[13px] text-neutral-500">
            © {new Date().getFullYear()} Neonovallc. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/privacy"
              className="text-sm sm:text-base font-semibold tracking-wide hover:text-[var(--accent)] transition"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm sm:text-base font-semibold tracking-wide hover:text-[var(--accent)] transition"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

      {/* thin accent line for separation */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[var(--accent)]/0 via-[var(--accent)] to-[var(--accent)]/0" />
    </footer>
  );
}

/* ---------- Subcomponents ---------- */

function Social({
  href, label, children,
}: { href: string; label: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full border border-neutral-800 bg-neutral-900/70 text-neutral-200 transition hover:border-[var(--accent)]/50 hover:text-[var(--accent)] hover:shadow-[0_0_0_6px_rgba(198,161,91,0.10)]"
    >
      <i className="text-base">{children}</i>
    </Link>
  );
}

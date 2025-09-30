// app/components/Landing.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';
import {
  FiArrowRight, FiPhone, FiBookOpen, FiGlobe, FiCpu, FiCloud,
  FiCheckCircle, FiShield, FiZap, FiLayers, FiSmile
} from 'react-icons/fi';

const ACCENT = '#C6A15B'; // match your logo gold

export default function Landing() {
  const blobs = useMemo(
    () => [
      'top-[-16%] left-[-12%] w-[34rem] h-[34rem]',
      'bottom-[-18%] right-[-18%] w-[44rem] h-[44rem]',
    ],
    []
  );

  return (
    <main
      style={{ ['--accent' as any]: ACCENT }}
      className="bg-neutral-950 text-neutral-100"
    >
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden">
        {/* BG accents */}
        <div className="pointer-events-none absolute inset-0">
          {blobs.map((cls, i) => (
            <div key={i} className={`absolute ${cls} rounded-full bg-[var(--accent)]/10 blur-3xl animate-pulse-slow`} />
          ))}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-14 md:pt-24 md:pb-20">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/30 bg-neutral-900/60 px-3.5 py-1.5 text-xs sm:text-sm font-medium tracking-wide text-neutral-200">
              <FiShield className="text-[var(--accent)]" />
              Neonovallc — Where vision becomes product
            </span>
          </div>

          <div className="mt-6 text-center">
            <h1 className="mx-auto max-w-5xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              We turn content into{" "}
              <span className="relative inline-block">
                immersive digital experiences
                <span className="absolute left-0 right-0 -bottom-2 h-[3px] bg-gradient-to-r from-[var(--accent)]/0 via-[var(--accent)] to-[var(--accent)]/0 rounded-full animate-underline" />
              </span>{" "}
              that engage, inspire, and scale.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg md:text-xl text-neutral-300">
              Strategy, design, and engineering for E-books & Publications, Digital Marketing, Software Development, and IT Solutions — crafted for measurable growth.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-2xl bg-[var(--accent)] px-5 py-3 text-neutral-900 font-semibold shadow-[0_8px_30px_rgba(198,161,91,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(198,161,91,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/70"
              >
                Get Started
                <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="tel:+12137841841"
                className="inline-flex items-center gap-2 rounded-2xl border border-[var(--accent)]/40 bg-neutral-900/60 px-5 py-3 font-semibold text-neutral-100 transition-all hover:border-[var(--accent)]/70 hover:shadow-[0_0_0_6px_rgba(198,161,91,0.12)]"
                aria-label="Call Neonovallc (213) 784-1841"
              >
                <FiPhone className="text-[var(--accent)]" />
                (213) 784-1841
              </a>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-neutral-400">
              End-to-end quality: strategy → design → build → growth.
            </p>
          </div>

          {/* Hero image */}
          <div className="mt-10">
            <div className="relative mx-auto aspect-[21/9] w-full max-w-6xl overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/40">
              <Image
                src="/assets/images/main-image3.png" // replace
                alt="Showcase of Neonovallc work"
                fill
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-cover transition-transform duration-[2000ms] ease-out hover:scale-[1.03]"
                priority
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5 rounded-3xl" />
            </div>
          </div>
        </div>

        <style jsx>{`
          .animate-underline { animation: shimmer 2.6s ease-in-out infinite; transform-origin: center; }
          @keyframes shimmer { 0%,100% { transform: scaleX(0.2); opacity:.5 } 50% { transform: scaleX(1); opacity:1 } }
        `}</style>
      </section>

      {/* ===== TRUST STRIP ===== */}
      <section className="border-y border-neutral-900/70 bg-neutral-950/80 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 items-center gap-6 opacity-80">
          {['brand-1','brand-2','brand-3','brand-4','brand-5','brand-6'].map((b) => (
            <div key={b} className="relative h-10">
              <Image src={`/assets/images/brands/${b}.png`} alt={`${b} logo`} fill className="object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">What we do</h2>
          <p className="mt-3 text-neutral-300 max-w-2xl mx-auto">
            Agile, customer-first solutions across content, marketing, software, and infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <ServiceCard
            icon={<FiBookOpen />}
            title="E-books & Publications"
            desc="Authoring, editing, layout, and global distribution that bring stories to life."
            img="/assets/images/services/ebooks.jpg"
          />
          <ServiceCard
            icon={<FiGlobe />}
            title="Digital Marketing"
            desc="SEO, content, and paid performance that compound attention into revenue."
            img="/assets/images/services/marketing.jpg"
          />
          <ServiceCard
            icon={<FiCpu />}
            title="Software Development"
            desc="From MVP to scale — clean code, modern stacks, and seamless UX."
            img="/assets/images/services/software.jpg"
          />
          <ServiceCard
            icon={<FiCloud />}
            title="IT Solutions"
            desc="Cloud, security, and infra that remove friction and grow with you."
            img="/assets/images/services/it.jpg"
          />
        </div>
      </section>

      {/* ===== FEATURED WORK / GALLERY ===== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 md:pb-20">
        <div className="mb-8 md:mb-12 flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Recent Highlights</h2>
          <p className="mt-3 text-neutral-300 max-w-2xl">
            A peek at launches and productions across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {[
            {src:'/assets/images/work/work-1.jpg', title:'Publishing Suite'},
            {src:'/assets/images/work/work-2.jpg', title:'E-commerce Revamp'},
            {src:'/assets/images/work/work-3.jpg', title:'SaaS Dashboard'},
            {src:'/assets/images/work/work-4.jpg', title:'Brand + Website'},
            {src:'/assets/images/work/work-5.jpg', title:'Analytics Rollout'},
            {src:'/assets/images/work/work-6.jpg', title:'Mobile Experience'},
          ].map((w) => (
            <figure key={w.src} className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/40">
              <div className="relative aspect-[4/3] w-full">
                <Image src={w.src} alt={w.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <figcaption className="flex items-center justify-between px-4 py-3">
                <span className="text-sm font-semibold">{w.title}</span>
                <FiArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/50">
            <div className="relative aspect-[16/10]">
              <Image
                src="/assets/images/process/collab.jpg" // replace
                alt="Collaborative process"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">A process designed for outcomes</h2>
            <ul className="mt-5 space-y-4 text-neutral-300">
              <ProcessItem title="Discover" icon={<FiLayers />}>Workshops to clarify goals, users, and success metrics.</ProcessItem>
              <ProcessItem title="Design" icon={<FiZap />}>Rapid iterations on UX/UI with feedback loops built-in.</ProcessItem>
              <ProcessItem title="Build" icon={<FiCpu />}>Modern stacks, clean code, and performance budgets.</ProcessItem>
              <ProcessItem title="Grow" icon={<FiSmile />}>Analytics, SEO, and marketing that compound results.</ProcessItem>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== VALUE PROPS / METRICS ===== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 md:pb-20">
        <div className="rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/30 p-6 sm:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <Metric k="98%" v="Client Satisfaction" />
            <Metric k="200+" v="Projects Delivered" />
            <Metric k="5x" v="Avg. Marketing ROI" />
            <Metric k="24/7" v="Managed IT Support" />
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 md:pb-20">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">What clients say</h2>
          <p className="mt-3 text-neutral-300">Real results, real relationships.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {[
            {avatar:'/assets/images/people/p1.jpg', name:'Amira K.', role:'Publisher', quote:'Their e-book pipeline took us from draft to worldwide distribution without friction.'},
            {avatar:'/assets/images/people/p2.jpg', name:'Zane P.', role:'CMO', quote:'Campaigns finally aligned design, content, and data — the growth was obvious.'},
            {avatar:'/assets/images/people/p3.jpg', name:'Lena R.', role:'Founder', quote:'Product shipped on time, fast, and stable. Great taste + engineering.'},
          ].map((t) => (
            <blockquote key={t.name} className="group rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 hover:border-[var(--accent)]/50 transition">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={t.avatar} alt={`${t.name} avatar`} fill className="object-cover" />
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-neutral-400">{t.role}</div>
                </div>
              </div>
              <p className="mt-3 text-sm text-neutral-300">“{t.quote}”</p>
            </blockquote>
          ))}
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 md:pb-20">
        <div className="mb-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">FAQs</h2>
        </div>

        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-3">
          <FAQ q="How soon can we start?">
            We typically kick off within a week. Discovery workshops help us align on scope and outcomes.
          </FAQ>
          <FAQ q="Do you work with existing brands/products?">
            Absolutely. We audit, optimize, and extend what you have before proposing rebuilds.
          </FAQ>
          <FAQ q="What industries do you support?">
            Publishing, SaaS, e-commerce, professional services, and education — among others.
          </FAQ>
        </div>
      </section>

      {/* ===== CTA BAND ===== */}
      <section className="border-t border-neutral-900/70 bg-neutral-950/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 rounded-3xl border border-neutral-800 bg-neutral-900/50 p-6">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
                Ready to build something remarkable?
              </h3>
              <p className="mt-1 text-neutral-300">Let’s align on goals and ship a plan within days.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--accent)] px-5 py-3 text-neutral-900 font-semibold transition hover:-translate-y-0.5 hover:shadow-[0_10px_35px_rgba(198,161,91,0.35)]"
              >
                Explore Services <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="mailto:info@neonexusllc.com"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[var(--accent)]/40 bg-neutral-900/60 px-5 py-3 font-semibold text-neutral-100 transition hover:border-[var(--accent)]/70 hover:shadow-[0_0_0_6px_rgba(198,161,91,0.12)]"
              >
                info@neonexusllc.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ===== subcomponents ===== */

function ServiceCard({
  icon, title, desc, img,
}: { icon: React.ReactNode; title: string; desc: string; img: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 transition-all hover:-translate-y-0.5 hover:border-[var(--accent)]/50 hover:shadow-[0_20px_60px_rgba(198,161,91,0.12)]">
      <div className="relative aspect-[16/9] w-full">
        <Image src={img} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--accent)]/40 bg-neutral-900/70 text-[var(--accent)]">
            <i className="text-xl">{icon}</i>
          </span>
          <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
        </div>
        <p className="mt-3 text-sm sm:text-[0.95rem] leading-relaxed text-neutral-300">{desc}</p>
        <div className="mt-4 h-[2px] w-8 rounded bg-[var(--accent)]/70 transition-all group-hover:w-16" />
      </div>
    </div>
  );
}

function ProcessItem({ title, children, icon }: { title: string; children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 text-[var(--accent)]">{icon}</span>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-neutral-300">{children}</div>
      </div>
    </li>
  );
}

function Metric({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5">
      <div className="text-2xl font-extrabold text-[var(--accent)]">{k}</div>
      <div className="mt-1 text-sm text-neutral-300">{v}</div>
    </div>
  );
}

function FAQ({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <details className="group rounded-2xl border border-neutral-800 bg-neutral-900/60 px-5 py-4">
      <summary className="cursor-pointer list-none font-semibold">
        <span className="inline-flex items-center gap-2">
          <FiCheckCircle className="text-[var(--accent)]" />
          {q}
        </span>
      </summary>
      <div className="mt-3 text-sm text-neutral-300">{children}</div>
    </details>
  );
}

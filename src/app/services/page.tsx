// app/services/page.tsx  (or: pages/services.tsx)
import Image from "next/image";
import Link from "next/link";
import {
  FiBookOpen,
  FiGlobe,
  FiCpu,
  FiCloud,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

const ACCENT = "#C6A15B";

type Card = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  href: string;
  img: string;
  id: string;
};

const CARDS: Card[] = [
  {
    icon: <FiBookOpen />,
    title: "E-books & Publications",
    desc: "Author support, developmental editing, formatting, cover design, and worldwide distribution — your story, beautifully shipped.",
    href: "#ebooks", // Updated to link to the section ID on the page
    img: "/assets/images/services/ebooks.jpg",
    id: "ebooks", // Ensuring the section has this id
  },
  {
    icon: <FiGlobe />,
    title: "Digital Marketing",
    desc: "SEO, content, social, and paid campaigns that compound attention into measurable growth. Strategy → execution → optimization.",
    href: "#marketing", // Updated to link to the section ID on the page
    img: "/assets/images/services/marketing.jpg",
    id: "marketing", // Ensuring the section has this id
  },
  {
    icon: <FiCpu />,
    title: "Software Development",
    desc: "From MVP to scale — clean code, modern stacks, and seamless UX. Web apps, dashboards, and integrations that perform.",
    href: "#software", // Updated to link to the section ID on the page
    img: "/assets/images/services/software.jpg",
    id: "software", // Ensuring the section has this id
  },
  {
    icon: <FiCloud />,
    title: "IT Solutions",
    desc: "Cloud, security, automation, and 24/7 support. We simplify complexity and keep your systems reliable, secure, and fast.",
    href: "#it", // Updated to link to the section ID on the page
    img: "/assets/images/services/it.jpg",
    id: "it", // Ensuring the section has this id
  },
];

export default function Services() {
  return (
    <main
      style={{ ["--accent" as any]: ACCENT }}
      className="bg-neutral-950 text-neutral-100"
    >
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="text-center">
            <span className="inline-block rounded-full border border-[var(--accent)]/30 bg-neutral-900/60 px-3.5 py-1.5 text-xs sm:text-sm font-medium tracking-wide text-neutral-200">
              Our Services
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Transforming brands in the digital realm{" "}
              <span className="text-[var(--accent)]">
                with unmatched expertise
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg md:text-xl text-neutral-300">
              Trust our proven track record for unparalleled IT solutions. We
              help you create a trustworthy brand that performs online —
              strategy, design, engineering, and growth, all under one roof.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-2xl bg-[var(--accent)] px-5 py-3 text-neutral-900 font-semibold shadow-[0_10px_35px_rgba(198,161,91,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_45px_rgba(198,161,91,0.45)]"
              >
                Get a custom proposal
                <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#work"
                className="inline-flex items-center gap-2 rounded-2xl border border-[var(--accent)]/40 bg-neutral-900/60 px-5 py-3 font-semibold text-neutral-100 transition hover:border-[var(--accent)]/70 hover:shadow-[0_0_0_6px_rgba(198,161,91,0.12)]"
              >
                See previous work
              </Link>
            </div>
          </div>

          {/* Hero banner image */}
          <div className="mt-10">
            <div className="relative mx-auto aspect-[21/9] w-full max-w-6xl overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/40">
              <Image
                src="/assets/images/hero-services.jpg" // replace with a wide hero
                alt="Neonova services showcase"
                fill
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-cover transition-transform duration-[2000ms] ease-out hover:scale-[1.03]"
                priority
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5 rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Services Grid ===== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 md:pb-20">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            We serve every client to the best of our ability
          </h2>
          <p className="mt-3 text-neutral-300 max-w-2xl mx-auto">
            The services we provide are crucial to your business’s success. Each
            engagement is designed around outcomes — not deliverables.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {CARDS.map((c) => (
            <article
              key={c.title}
              className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 transition-all hover:-translate-y-0.5 hover:border-[var(--accent)]/50 hover:shadow-[0_20px_60px_rgba(198,161,91,0.12)]"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--accent)]/40 bg-neutral-900/70 text-[var(--accent)]">
                    <i className="text-xl">{c.icon}</i>
                  </span>
                  <h3 className="text-base sm:text-lg font-semibold">
                    {c.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm sm:text-[0.95rem] leading-relaxed text-neutral-300">
                  {c.desc}
                </p>
                <Link
                  href={c.href}
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:brightness-105"
                >
                  Get this service now
                  <FiArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===== Highlights / Why Choose Us ===== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 md:pb-20">
        <div className="rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/30 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Outcomes over output.{" "}
                <span className="text-[var(--accent)]">
                  Quality over noise.
                </span>
              </h3>
              <p className="mt-2 text-neutral-300">
                We align strategy, design, and engineering to build products and
                campaigns that last.
              </p>
            </div>
            <ul className="space-y-3 text-sm sm:text-base">
              <Point>
                Discovery workshops that clarify users, goals, and KPIs.
              </Point>
              <Point>UX-first design and high-performance engineering.</Point>
              <Point>Analytics, SEO, and marketing that compound growth.</Point>
            </ul>
            <ul className="space-y-3 text-sm sm:text-base">
              <Point>Cloud-native, secure-by-design infrastructure.</Point>
              <Point>
                Transparent process, tight feedback loops, on-time delivery.
              </Point>
              <Point>
                Flexible support plans that scale with your business.
              </Point>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Previous Work / Gallery ===== */}
      <section
        id="work"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 md:pb-20"
      >
        <div className="mb-8 md:mb-12 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Our Previous Work
          </h3>
          <p className="mt-3 text-neutral-300 max-w-2xl mx-auto">
            The experience we hold in this industry ensures we create the best
            digital solutions for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {[
            {
              src: "/assets/images/work/work-1.jpg",
              title: "Publishing Suite",
            },
            {
              src: "/assets/images/work/work-2.jpg",
              title: "E-commerce Revamp",
            },
            { src: "/assets/images/work/work-3.jpg", title: "SaaS Dashboard" },
            { src: "/assets/images/work/work-4.jpg", title: "Brand + Website" },
            {
              src: "/assets/images/work/work-5.jpg",
              title: "Analytics Rollout",
            },
            {
              src: "/assets/images/work/work-6.jpg",
              title: "Mobile Experience",
            },
          ].map((w) => (
            <figure
              key={w.src}
              className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/40"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={w.src}
                  alt={w.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="flex items-center justify-between px-4 py-3">
                <span className="text-sm font-semibold">{w.title}</span>
                <FiArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ===== Process ===== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/50">
            <div className="relative aspect-[16/10]">
              <Image
                src="/assets/images/process/collab.jpg"
                alt="Collaborative product and marketing workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              Our Process
            </h3>
            <ul className="mt-5 space-y-4 text-neutral-300">
              <Step title="Discover">
                Workshops to align on goals, users, jobs-to-be-done, and success
                metrics.
              </Step>
              <Step title="Design">
                Rapid UX/UI iterations with validation loops and accessibility
                checks.
              </Step>
              <Step title="Build">
                Modern stacks, clean code, performance budgets, and CI/CD.
              </Step>
              <Step title="Grow">
                Analytics, SEO, content, and paid performance tuned to ROI.
              </Step>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Plans / Engagement Models ===== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 md:pb-20">
        <div className="mb-8 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Flexible Engagements
          </h3>
          <p className="mt-3 text-neutral-300 max-w-2xl mx-auto">
            Choose a plan that fits your needs. All plans include weekly
            check-ins and a dedicated PM.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <Plan
            name="Starter"
            blurb="Perfect for new initiatives and rapid experiments."
            bullets={[
              "Discovery sprint (1–2 weeks)",
              "Design prototype",
              "Launch checklist",
            ]}
            ctaHref="/contact?plan=starter"
          />
          <Plan
            highlighted
            name="Growth"
            blurb="Best value for teams needing steady delivery."
            bullets={[
              "Dedicated squad (design + dev)",
              "Bi-weekly releases",
              "Analytics & SEO integration",
            ]}
            ctaHref="/contact?plan=growth"
          />
          <Plan
            name="Scale"
            blurb="For complex systems and long-term roadmaps."
            bullets={[
              "Architecture & performance audits",
              "Security & compliance",
              "24/7 support options",
            ]}
            ctaHref="/contact?plan=scale"
          />
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 md:pb-20">
        <div className="mb-8 md:mb-12 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            What clients say
          </h3>
          <p className="mt-3 text-neutral-300">
            Real results, real relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {[
            {
              avatar: "/assets/images/people/p1.jpg",
              name: "Amira K.",
              role: "Publisher",
              quote:
                "Their e-book pipeline took us from draft to worldwide distribution without friction.",
            },
            {
              avatar: "/assets/images/people/p2.jpg",
              name: "Zane P.",
              role: "CMO",
              quote:
                "Campaigns finally aligned design, content, and data — the growth was obvious.",
            },
            {
              avatar: "/assets/images/people/p3.jpg",
              name: "Lena R.",
              role: "Founder",
              quote:
                "Product shipped on time, fast, and stable. Great taste + engineering.",
            },
          ].map((t) => (
            <blockquote
              key={t.name}
              className="group rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 hover:border-[var(--accent)]/50 transition"
            >
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={t.avatar}
                    alt={`${t.name} avatar`}
                    fill
                    className="object-cover"
                  />
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

      {/* ===== FAQs ===== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="mb-6 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            FAQs
          </h3>
        </div>

        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-3">
          <FAQ q="How do we get started?">
            We typically kick off within a week. Discovery workshops help us
            align on scope and outcomes.
          </FAQ>
          <FAQ q="Do you work with existing brands/products?">
            Absolutely. We audit, optimize, and extend what you have before
            proposing rebuilds.
          </FAQ>
          <FAQ q="What industries do you support?">
            Publishing, SaaS, e-commerce, professional services, and education —
            among others.
          </FAQ>
          <FAQ q="Can you integrate with our internal team?">
            Yes. We can embed as an extension of your team, or work
            independently with regular check-ins.
          </FAQ>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="border-t border-neutral-900/70 bg-neutral-950/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 rounded-3xl border border-neutral-800 bg-neutral-900/50 p-6">
            <div className="text-center lg:text-left">
              <h4 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
                Ready to build something remarkable?
              </h4>
              <p className="mt-1 text-neutral-300">
                Tell us your goals — we’ll map a plan and timeline.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--accent)] px-5 py-3 text-neutral-900 font-semibold transition hover:-translate-y-0.5 hover:shadow-[0_10px_35px_rgba(198,161,91,0.35)]"
              >
                Contact Us{" "}
                <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="mailto:info@neonexusllc.com"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[var(--accent)]/40 bg-neutral-900/60 px-5 py-3 font-semibold text-neutral-100 transition hover:border-[var(--accent)]/70 hover:shadow-[0_0_0_6px_rgba(198,161,91,0.12)]"
              >
                info@neonexusllc.com
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- Subcomponents ---------- */

function Point({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 text-[var(--accent)]">
        <FiCheckCircle />
      </span>
      <span>{children}</span>
    </li>
  );
}

function Step({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 text-[var(--accent)]">•</span>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-neutral-300">{children}</div>
      </div>
    </li>
  );
}

function Plan({
  name,
  blurb,
  bullets,
  ctaHref,
  highlighted,
}: {
  name: string;
  blurb: string;
  bullets: string[];
  ctaHref: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-5 sm:p-6 transition ${
        highlighted
          ? "border-[var(--accent)]/60 bg-neutral-900/70 shadow-[0_20px_60px_rgba(198,161,91,0.12)]"
          : "border-neutral-800 bg-neutral-900/60 hover:border-[var(--accent)]/40"
      }`}
    >
      <div className="text-lg font-bold">{name}</div>
      <p className="mt-1 text-sm text-neutral-300">{blurb}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span className="mt-0.5 text-[var(--accent)]">
              <FiCheckCircle />
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <Link
        href={ctaHref}
        className={`mt-5 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition ${
          highlighted
            ? "bg-[var(--accent)] text-neutral-900 hover:brightness-105"
            : "border border-[var(--accent)]/40 bg-neutral-900/60 hover:border-[var(--accent)]/70 hover:shadow-[0_0_0_6px_rgba(198,161,91,0.12)]"
        }`}
      >
        Choose plan <FiArrowRight />
      </Link>
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

// app/about/page.tsx (or: pages/about.tsx)
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheckCircle, FiBookOpen, FiGlobe, FiCpu, FiCloud } from "react-icons/fi";

const ACCENT = "#C6A15B";

export default function About() {
  return (
    <main
      style={{ ["--accent" as any]: ACCENT }}
      className="bg-neutral-950 text-neutral-100"
    >
      {/* ===== Hero Section ===== */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="text-center">
            <span className="inline-block rounded-full border border-[var(--accent)]/30 bg-neutral-900/60 px-3.5 py-1.5 text-xs sm:text-sm font-medium tracking-wide text-neutral-200">
              About Neonovallc
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              We’re a dynamic IT agency that revitalizes brands{" "}
              <span className="text-[var(--accent)]">in the digital realm</span>
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg md:text-xl text-neutral-300">
              With a proven track record, we specialize in e-book publications,
              digital marketing, software development, and IT solutions. Trust is
              the cornerstone of everything we do.
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
  <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/40">
    <Image
      src="/assets/images/hero-about-2.jpg" // replace with an appropriate hero image
      alt="Neonovallc company overview"
      width={1200} // set the desired width
      height={600} // set the desired height
      sizes="(max-width: 1024px) 100vw, 1200px"
      className="object-cover transition-transform duration-200 ease-out" // removed hover zoom
      priority
    />
    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5 rounded-3xl" />
  </div>
</div>


        </div>
      </section>

      {/* ===== About Section: What We Do ===== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 md:pb-20">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            A Brand You Can Trust
          </h2>
          <p className="mt-3 text-neutral-300 max-w-2xl mx-auto">
            Neonovallc has helped some of the biggest businesses in the industry.
            Our services are state-of-the-art, which means working with us boosts
            your business to new levels.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "E-books & Publications",
              description:
                "Unlock boundless worlds with the turn of a page, where imagination knows no limits in digital display.",
              icon: <FiBookOpen />,
              imgSrc: "/assets/images/ebook-3.jpg",
              link: "/services/ebook",
            },
            {
              title: "Digital Marketing",
              description:
                "Navigate the digital landscape with strategic precision, where every click echoes a brand's vision.",
              icon: <FiGlobe />,
              imgSrc: "/assets/images/marketing-3.jpg",
              link: "/services/marketing",
            },
            {
              title: "Software Development",
              description:
                "Transforming lines of code into seamless solutions, software development bridges imagination with execution.",
              icon: <FiCpu />,
              imgSrc: "/assets/images/software-2.jpg",
              link: "/services/software",
            },
            {
              title: "IT Solutions",
              description:
                "Harnessing innovation to untangle complexity, IT solutions pave the path for streamlined efficiency.",
              icon: <FiCloud />,
              imgSrc: "/assets/images/it-3.jpg",
              link: "/services/it",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 transition-all hover:-translate-y-0.5 hover:border-[var(--accent)]/50 hover:shadow-[0_20px_60px_rgba(198,161,91,0.12)]"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={service.imgSrc}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--accent)]/40 bg-neutral-900/70 text-[var(--accent)]">
                    {service.icon}
                  </span>
                  <h3 className="text-base sm:text-lg font-semibold">{service.title}</h3>
                </div>
                <p className="mt-3 text-sm sm:text-[0.95rem] leading-relaxed text-neutral-300">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:brightness-105"
                >
                  Read More
                  <FiArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Experience & Stats Section ===== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 md:pb-20">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Our Successful Track Record
          </h2>
          <p className="mt-3 text-neutral-300 max-w-2xl mx-auto">
            From strategy and research to creation and content, we’ll drive
            engagement with your target audience and increase your online
            visibility.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              key: "projects",
              label: "200+ Successful Projects",
              description:
                "We’ve worked across diverse sectors, growing brands and scaling businesses.",
            },
            {
              key: "partners",
              label: "100+ Partners",
              description:
                "A trusted partner to hundreds of clients, from startups to enterprises.",
            },
            {
              key: "capital",
              label: "2m+ Raised Capital",
              description:
                "Our track record of success and innovation has helped businesses grow exponentially.",
            },
          ].map((stat) => (
            <div
              key={stat.key}
              className="flex flex-col items-center justify-center gap-4 bg-neutral-900/60 p-6 rounded-2xl border border-neutral-800"
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-[var(--accent)]">
                {stat.label}
              </span>
              <p className="text-sm text-neutral-400">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA: Request Quote Section ===== */}
      <section className="bg-neutral-950 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Ready to accelerate your brand?
          </h2>
          <p className="mt-4 text-neutral-300">
            Get a free quote today to discover how we can help your business
            grow, engage customers, and increase ROI.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--accent)] px-6 py-3 text-neutral-900 font-semibold mt-6 transition hover:brightness-105"
          >
            Get Your Quote
            <FiArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}

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

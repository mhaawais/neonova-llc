// app/terms/page.tsx (or: pages/terms.tsx)
"use client";

import { FiMail, FiPhone, FiMapPin, FiMap } from "react-icons/fi";

const ACCENT = "#C6A15B";

const Terms = () => {
  return (
    <main
      style={{ ["--accent" as any]: ACCENT }}
      className="bg-neutral-950 text-neutral-100"
    >
      {/* ===== Hero Section ===== */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Terms & Conditions
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg md:text-xl text-neutral-300">
              By accessing our services, you agree to the terms and conditions
              outlined below. Please read them carefully.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Terms of Service Content Section ===== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 md:pb-20">
        <div className="space-y-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            1. Introduction
          </h2>
          <p className="text-neutral-300">
            These terms and conditions govern the use of services provided by
            Neonovallc, a private limited company registered in the United
            States of America. By accessing our services, you agree to comply
            with these terms and conditions. Please read them carefully before
            proceeding.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            2. Definitions
          </h2>
          <p className="text-neutral-300">
            "Neonovallc" refers to the private limited company providing IT
            services, website development, software development, digital
            marketing, and e-books publication.
          </p>
          <p className="text-neutral-300">
            "Client" refers to any individual or entity utilizing Neonovallc
            services.
          </p>
          <p className="text-neutral-300">
            "Services" encompass all offerings provided by Neonovallc, including
            but not limited to IT solutions, website development, software
            development, digital marketing, and e-books publication.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            3. Scope of Services
          </h2>
          <p className="text-neutral-300">
            Neonovallc provides services related to Information Technology,
            including but not limited to website development, software
            development, digital marketing, and e-books publication.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            4. Intellectual Property
          </h2>
          <p className="text-neutral-300">
            All intellectual property rights related to services provided by
            Neonovallc remain the property of Neonovallc unless otherwise agreed
            upon in writing. Clients shall not reproduce, distribute, or exploit
            any intellectual property without prior consent.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            5. Confidentiality
          </h2>
          <p className="text-neutral-300">
            Both Neonovallc and the Client agree to maintain the confidentiality
            of any proprietary or sensitive information disclosed during the
            course of service provision.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            6. Payment Terms
          </h2>
          <p className="text-neutral-300">
            Payment terms for services rendered by Neonovallc shall be as agreed
            upon in the contract or invoice provided to the Client. Payment
            methods, schedule, and currency shall be specified in the contract.
            Invoices are due upon receipt unless otherwise stated. Late payments
            may incur penalties or interest charges as specified in the
            contract.
          </p>
          <p className="text-neutral-300">
            Kindly be informed that neonovallc.com operates under the umbrella
            of Neonovallc. Consequently, payments made for services rendered may
            be processed under the name ‘Neonovallc’ on your financial
            statement. Please be assured that these payments pertain to services
            provided by this website brand and any billing inquiries should be
            directed to us.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            7. Refunds
          </h2>
          <p className="text-neutral-300">
            Refunds for services rendered by Neonovallc shall be granted solely
            according to the terms outlined in the contract between Neonovallc
            and the Client or according to the company’s policy. Requests for
            refunds must be submitted in writing and will be subject to review
            by Neonovallc. Refunds, if approved, will be processed within a
            reasonable timeframe.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            8. Contracts
          </h2>
          <p className="text-neutral-300">
            Contracts between Neonovallc and the Client shall outline the scope
            of services, payment terms, timelines, deliverables, and any
            additional terms and conditions specific to the project. Contracts
            shall be signed by authorized representatives of both parties and
            shall govern the rights and obligations of each party throughout the
            duration of the project.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            9. Limitation of Liability
          </h2>
          <p className="text-neutral-300">
            Neonovallc shall not be liable for any indirect, incidental,
            special, or consequential damages arising from the use of its
            services. The Client agrees to indemnify Neonovallc against any
            claims or liabilities.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            10. Compliance with Laws
          </h2>
          <p className="text-neutral-300">
            Clients utilizing Neonovallc services are responsible for ensuring
            compliance with all applicable laws and regulations, including those
            governing information technology, e-books publication, and marketing
            practices in the United States of America.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            11. Termination of Services
          </h2>
          <p className="text-neutral-300">
            Either party may terminate services provided by Neonovallc upon
            written notice. Termination shall not relieve the Client of any
            outstanding payment obligations.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            12. Governing Law
          </h2>
          <p className="text-neutral-300">
            These terms and conditions shall be governed by and construed in
            accordance with the laws of the United States of America. Any
            disputes arising out of or relating to these terms and conditions
            shall be subject to the exclusive jurisdiction of the courts of the
            United States of America.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            13. Amendments
          </h2>
          <p className="text-neutral-300">
            Neonovallc reserves the right to amend these terms and conditions at
            any time. Amendments shall be effective upon posting on the
            Neonovallc website or notifying the Client in writing.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Acknowledgement
          </h2>
          <p className="text-neutral-300">
            By utilizing Neonovallc services, the Client acknowledges that they
            have read, understood, and agreed to these terms and conditions,
            which are in compliance with the laws of the United States of
            America as of the date of issuance.
          </p>
        </div>
      </section>

      {/* ===== Contact Information Section ===== */}
      <section className="bg-neutral-950 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Contact Information
          </h3>
          <p className="mt-4 text-neutral-300">
            For questions regarding these terms, please contact us:
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-10">
            <div className="flex items-center gap-3 text-neutral-400">
              <FiPhone className="text-[var(--accent)]" />
              <span>+1 (213) 784-1841</span>
            </div>
            <div className="flex items-center gap-3 text-neutral-400">
              <FiMail className="text-[var(--accent)]" />
              <span>info@neonovallc.com</span>
            </div>
            <div className="flex items-center gap-3 text-neutral-400">
              <FiMapPin className="text-[var(--accent)]" />
              <span>21423 Baldovin Way Tomball, TX 77375-1928</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Terms;

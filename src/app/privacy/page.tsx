// app/privacy/page.tsx (or: pages/privacy.tsx)
'use client';

import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const ACCENT = "#C6A15B";

const Privacy = () => {
  return (
    <main style={{ ['--accent' as any]: ACCENT }} className="bg-neutral-950 text-neutral-100">
      {/* ===== Hero Section ===== */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Privacy Policy
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg md:text-xl text-neutral-300">
              At Neonovallc, your privacy is our priority. This policy outlines how we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Privacy Policy Content Section ===== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 md:pb-20">
        <div className="space-y-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">1. Information We Collect</h2>
          <p className="text-neutral-300">
            We collect the following types of information:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Personal details such as your name, company name, job title, email address, phone number, and mailing address when provided through forms or inquiries.</li>
            <li>Technical information, including IP address, browser type, device type, and browsing behavior on our Site.</li>
            <li>Data collected through cookies and tracking technologies to improve user experience and site functionality.</li>
          </ul>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">2. How We Use Your Information</h2>
          <p className="text-neutral-300">
            We use the collected information to:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Provide and improve our services.</li>
            <li>Respond to inquiries and customer support requests.</li>
            <li>Send newsletters, updates, and promotional materials (only if you have opted in).</li>
            <li>Maintain website performance, analytics, and security.</li>
          </ul>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">3. Marketing Communications & Opt-Out</h2>
          <p className="text-neutral-300">
            If you receive marketing emails from us, you may opt out at any time by:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Clicking the “unsubscribe” link at the bottom of our emails.</li>
            <li>Contacting us directly at info@neonexusllc.com.</li>
          </ul>
          <p className="text-neutral-300">
            After opting out, you will no longer receive marketing communications, though we may still contact you regarding essential service or account-related matters.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">4. Sharing of Information</h2>
          <p className="text-neutral-300">
            We do not sell, rent, or trade your personal information to third parties. However, information may be shared only in these cases:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>With trusted third-party service providers (such as payment processors or analytics tools) bound by confidentiality and data protection agreements.</li>
            <li>When required by law, legal process, or to protect rights, property, or safety.</li>
          </ul>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">5. Data Security</h2>
          <p className="text-neutral-300">
            We implement industry-standard measures, including SSL encryption, to safeguard your data. While we strive to protect your information, no method of transmission or storage is completely secure.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">6. Data Retention</h2>
          <p className="text-neutral-300">
            We keep personal information only as long as necessary for the purposes outlined in this policy or as required by law.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">7. Your Rights</h2>
          <p className="text-neutral-300">
            Depending on your location, you may have rights to:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Access, correct, or delete your personal data.</li>
            <li>Restrict or object to processing of your information.</li>
            <li>Request a copy of the personal information we hold.</li>
          </ul>
          <p className="text-neutral-300">
            To exercise these rights, please contact us at info@neonexusllc.com.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">8. Cookies & Tracking</h2>
          <p className="text-neutral-300">
            Our Site uses cookies and similar technologies to enhance functionality, analyze traffic, and improve your browsing experience. You may disable cookies in your browser settings, though some features may not work as intended.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">9. Testimonials, Endorsements & Claims Disclaimer</h2>
          <p className="text-neutral-300">
            Testimonials, endorsements, or success stories on our Site represent individual experiences and results, which may vary. They are not guarantees of similar outcomes. Where applicable, claims are based on verifiable information. We disclaim responsibility for unverified third-party statements.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">10. Third-Party Links</h2>
          <p className="text-neutral-300">
            Our Site may contain links to external websites. We are not responsible for the content, practices, or policies of those sites.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">11. Updates to This Policy</h2>
          <p className="text-neutral-300">
            We may revise this Privacy Policy from time to time. Updates will be posted on this page with a new Effective Date.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">12. Contact Us</h2>
          <p className="text-neutral-300">
            If you have questions or requests regarding this Privacy Policy, please contact us:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Email: <a href="mailto:info@neonexusllc.com" className="text-[var(--accent)]">info@neonexusllc.com</a></li>
            <li>Phone: <a href="tel:+12137841841" className="text-[var(--accent)]">+1 (213) 784-1841</a></li>
            <li>Address: 5900 Balcones Drive STE 100, Austin, Texas, 78731</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Privacy;

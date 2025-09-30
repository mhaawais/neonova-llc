// app/contact/page.tsx (or: pages/contact.tsx)
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from "react-icons/fi";

const ACCENT = "#C6A15B";

const Contact = () => {
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/movwknrn", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setFormStatus("error");
    }
  };

  return (
    <main
      style={{ ["--accent" as any]: ACCENT }}
      className="bg-neutral-950 text-neutral-100"
    >
      {/* ===== Hero Section ===== */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8 md:pt-24 md:pb-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Get in Touch with{" "}
              <span className="text-[var(--accent)]">Neonovallc</span>
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg md:text-xl text-neutral-300">
              Whether you’re ready to build or just exploring options, we’re
              here to help you grow.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Contact Info Section ===== */}
      <section className="bg-neutral-950 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Contact Information
          </h3>
          <p className="mt-4 text-neutral-300">We’re here to help!</p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-10">
            <div className="flex items-center gap-3 text-neutral-400">
              <FiPhone className="text-[var(--accent)]" />
              <span>+1 (507) 556-1700</span>
            </div>
            <div className="flex items-center gap-3 text-neutral-400">
              <FiMail className="text-[var(--accent)]" />
              <span>info@neonexusllc.com</span>
            </div>
            <div className="flex items-center gap-3 text-neutral-400">
              <FiMapPin className="text-[var(--accent)]" />
              <span>5900 Balcones Drive, STE 100, Austin, TX, 78731</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Contact Form Section ===== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              We’d Love to Hear From You
            </h3>
            <p className="mt-3 text-neutral-300">
              Have a question or need assistance? Fill out the form below and
              one of our experts will get back to you shortly.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold text-neutral-200"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="mt-2 block w-full px-4 py-3 text-white/55 bg-neutral-800/80 border border-neutral-700 rounded-md shadow-sm focus:ring-[var(--accent)] focus:border-[var(--accent)]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-semibold text-neutral-200"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="mt-2 block w-full px-4 py-3 text-white/55 bg-neutral-800/80 border border-neutral-700 rounded-md shadow-sm focus:ring-[var(--accent)] focus:border-[var(--accent)]"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-neutral-200"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 block w-full px-4 py-3 text-white/55 bg-neutral-800/80 border border-neutral-700 rounded-md shadow-sm focus:ring-[var(--accent)] focus:border-[var(--accent)]"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-neutral-200"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-2 block w-full px-4 py-3 text-white/80 bg-neutral-800/80 border border-neutral-700 rounded-md shadow-sm focus:ring-[var(--accent)] focus:border-[var(--accent)]"
                />
              </div>
              <div>
                {/* <button
                  type="submit"
                  disabled={formStatus === "loading"}
                  className="w-full py-3 px-6 bg-[var(--accent)] text-neutral-900 font-semibold rounded-lg focus:outline-none transition-all hover:brightness-110"
                >
                  {formStatus === "loading" ? "Submitting..." : "Submit"}
                </button> */}
                <button
                  type="submit"
                  disabled={formStatus === "loading"}
                  className="w-full py-3 px-6 bg-[var(--accent)] text-neutral-900 font-semibold rounded-lg focus:outline-none transition-all hover:brightness-110"
                  style={{
                    cursor:
                      formStatus === "loading" ? "not-allowed" : "pointer",
                  }} // Apply cursor style directly here
                >
                  {formStatus === "loading" ? "Submitting..." : "Submit"}
                </button>

                {formStatus === "success" && (
                  <p className="mt-2 text-sm text-green-500">
                    Thank you! We’ll get back to you soon.
                  </p>
                )}
                {formStatus === "error" && (
                  <p className="mt-2 text-sm text-red-500">
                    Oops! Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* ===== Map Section ===== */}
          <div className="lg:ml-8 mt-8 lg:mt-0">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              Find Us Here
            </h3>
            <div className="mt-4 w-full h-[300px] rounded-xl overflow-hidden shadow-lg">
              <iframe
                title="Neonovallc Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.9533059651826!2d-97.73641022426745!3d30.317110798219177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644f775f755ccaf%3A0x5577b885e8f49987!2s5900%20Balcones%20Dr%2C%20STE%20100%2C%20Austin%2C%20TX%2C%2078731!5e0!3m2!1sen!2sus!4v1673051480752!5m2!1sen!2sus" // your map URL here
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true} // Corrected as boolean
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Contact;

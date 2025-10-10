"use client";

import { useState, useEffect } from "react";
import { FiCheck, FiX } from "react-icons/fi";

const ACCENT = "#C6A15B";

export default function CookiesPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) {
      setTimeout(() => setVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999] w-[95%] sm:w-auto"
      style={{ ["--accent" as any]: ACCENT }}
    >
      <div className="animate-slideUp rounded-2xl border border-neutral-800 bg-neutral-900 text-neutral-100 shadow-[0_0_30px_rgba(198,161,91,0.15)] p-4 sm:p-5 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 max-w-2xl mx-auto">
        <div className="text-sm text-neutral-300 leading-relaxed flex-1">
          <h3 className="text-base font-semibold mb-1 text-neutral-100">
            We value your privacy 🍪
          </h3>
          <p>
            We use cookies to enhance your experience and analyze traffic. By
            continuing, you agree to our{" "}
            <a
              href="/privacy"
              className="text-[var(--accent)] hover:underline font-medium"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>

        <div className="flex gap-2 sm:gap-3">
          <button
            onClick={handleDecline}
            className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-[var(--accent)]/40 px-4 py-2 text-sm font-medium text-neutral-300 hover:border-[var(--accent)]/70 transition"
          >
            <FiX />
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[var(--accent)] text-neutral-900 px-4 py-2 text-sm font-semibold hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(198,161,91,0.35)] transition"
          >
            <FiCheck />
            Accept
          </button>
        </div>
      </div>

      <style jsx>{`
        .animate-slideUp {
          animation: slideUp 0.5s ease-out;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translate(-50%, 20px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
      `}</style>
    </div>
  );
}

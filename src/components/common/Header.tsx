import { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

const PHONE_NUMBER = "+919876543210";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-6xl px-5 md:px-8 h-[72px] flex items-center justify-between">
        <Logo />

        <Navbar className="hidden md:block" />

        <div className="flex items-center gap-3">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="focus-ring hidden sm:inline-flex items-center gap-2 rounded-full bg-brand-blue hover:bg-brand-blue-dark text-cream font-semibold text-sm px-5 py-2.5 transition-colors"
          >
            Call Now
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="focus-ring md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-black/10 text-brand-blue"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M2 5H18M2 10H18M2 15H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-cream px-5 py-5">
          <Navbar onLinkClick={() => setOpen(false)} />
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="focus-ring mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-blue text-cream font-semibold text-sm px-5 py-3"
          >
            Call Now
          </a>
        </div>
      )}
    </header>
  );
}

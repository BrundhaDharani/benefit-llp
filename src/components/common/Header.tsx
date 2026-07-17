import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import Logo from "./Logo";
import Navbar from "./Navbar";

const PHONE_NUMBER = "+919876543210";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    // இங்கே bg-[#f0f4f8] கொடுக்கப்பட்டுள்ளது (Light Blue)
    <header className="sticky top-0 z-50 bg-[#f0f4f8]/95 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-6xl px-5 md:px-8 h-[64px] md:h-[72px] flex items-center justify-between">
        <Logo />

        <Navbar className="hidden md:block" />

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="focus-ring hidden sm:inline-flex items-center gap-2 rounded-full bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold text-sm px-5 py-2.5 transition-colors"
          >
            <Phone size={16} />
            Call Now
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="focus-ring md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-black/10 text-brand-blue"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      
      {open && (
        <div className="md:hidden border-t border-black/5 bg-[#1e3a8a] px-5 py-5">
          <Navbar onLinkClick={() => setOpen(false)} />
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="focus-ring mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-blue text-white font-semibold text-sm px-5 py-3"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>
      )}
    </header>
  );
}
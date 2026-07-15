import Logo from "./Logo";

const WHATSAPP_NUMBER = "919876543210";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-brand-blue-dark text-cream/90">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <Logo variant="light" />
          <p className="mt-4 text-sm leading-relaxed text-cream/70 max-w-xs">
            Quality salt, tea and detergents made for everyday Indian homes —
            sourced, packed and delivered with care.
          </p>
        </div>

        <div>
          <h3 className="font-display font-semibold text-cream mb-4">Quick Links</h3>
          <ul className="space-y-2.5 text-sm text-cream/70">
            <li><a className="focus-ring hover:text-marigold" href="#home">Home</a></li>
            <li><a className="focus-ring hover:text-marigold" href="#about">About Us</a></li>
            <li><a className="focus-ring hover:text-marigold" href="#products">Products</a></li>
            <li><a className="focus-ring hover:text-marigold" href="#reviews">Reviews</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-cream mb-4">Get in Touch</h3>
          <ul className="space-y-2.5 text-sm text-cream/70">
            <li>
              <a className="focus-ring hover:text-marigold" href="tel:+919876543210">+91 98765 43210</a>
            </li>
            <li>
              <a className="focus-ring hover:text-marigold" href="mailto:hello@benefitllp.in">hello@benefitllp.in</a>
            </li>
            <li>
              <a
                className="focus-ring hover:text-marigold"
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-5 text-xs text-cream/50 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {year} Benefit LLP. All rights reserved.</p>
          <p>Enhancing Every Home, Every Day.</p>
        </div>
      </div>
    </footer>
  );
}

import { Link, useLocation } from "react-router-dom";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "About Us", to: "/about" },
  { label: "Reviews", to: "/reviews" },
  { label: "Why Us", to: "/why-benefit" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar({ className = "", onLinkClick }: any) {
  const location = useLocation();

  return (
    <nav className={className}>
      <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        {LINKS.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              onClick={onLinkClick}
              className={`font-medium transition-colors ${
                location.pathname === link.to
                  ? "text-white md:text-brand-blue border-b-2 border-brand-green"
                  : "text-white/80 hover:text-white md:text-ink-soft md:hover:text-brand-blue"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
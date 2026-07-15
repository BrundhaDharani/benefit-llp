const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  className?: string;
  onLinkClick?: () => void;
}

export default function Navbar({ className = "", onLinkClick }: NavbarProps) {
  return (
    <nav className={className} aria-label="Primary">
      <ul className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
        {LINKS.map((link, i) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={onLinkClick}
              className={`focus-ring font-body font-medium text-[15px] transition-colors ${
                i === 0
                  ? "text-brand-blue border-b-2 border-brand-green pb-0.5"
                  : "text-ink-soft hover:text-brand-blue"
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

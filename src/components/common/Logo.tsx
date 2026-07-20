import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  variant?: "color" | "light";
  showTagline?: boolean;
}

export default function Logo({ className = "", variant = "color", showTagline = true }: LogoProps) {
  const textColor = variant === "light" ? "#FBF6EA" : "#0B463C"; // tealDark
  const accentColor = variant === "light" ? "#F2A900" : "#C98A2C"; // gold
  const leafColor = variant === "light" ? "#FBF6EA" : "#12695A"; // teal
  const taglineColor = variant === "light" ? "rgba(251,246,234,0.75)" : "#4A5750";

  return (
    <Link
      to="/"
      className={`flex flex-col items-center shrink-0 focus-ring ${className}`}
      aria-label="Benefit LLP, home"
      style={{ lineHeight: 1 }}
    >
      <span className="flex items-center shrink-0">
        <svg
          width="28"
          height="32"
          viewBox="0 0 40 46"
          fill="none"
          aria-hidden="true"
          className="shrink-0 w-[28px] h-[32px] sm:w-[32px] sm:h-[36px]"
          style={{ marginRight: "-3px" }}
        >
          <path
            d="M22 6 C34 10 40 22 34 34 C28 44 14 46 6 40 C10 30 8 16 22 6 Z"
            fill={leafColor}
          />
          <path
            d="M22 8 C20 18 18 28 8 38"
            stroke={variant === "light" ? "#123A6E" : "#E1F0EC"}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
        <span className="font-display leading-none whitespace-nowrap">
          <span className="text-lg sm:text-xl font-extrabold tracking-tight" style={{ color: textColor }}>
            Bene
          </span>
          <span className="text-lg sm:text-xl font-extrabold tracking-tight" style={{ color: accentColor }}>
            fit
          </span>
        </span>
      </span>

      {showTagline && (
        <span className="mt-1 text-center leading-snug whitespace-nowrap">
          <span className="block text-[11px] sm:text-xs" style={{ color: taglineColor }}>
            Everyday essentials, supplied reliably
          </span>
          <span className="block text-[11px] sm:text-xs" style={{ color: taglineColor }}>
            An India LLP
          </span>
        </span>
      )}
    </Link>
  );
}
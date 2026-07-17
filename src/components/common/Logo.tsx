import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  variant?: "color" | "light";
}

export default function Logo({ className = "", variant = "color" }: LogoProps) {
  const textColor = variant === "light" ? "#FBF6EA" : "var(--color-brand-blue)";
  const accentColor = variant === "light" ? "#F2A900" : "var(--color-brand-green)";

  return (
    <Link to="/" className={`flex items-center gap-1.5 sm:gap-2 focus-ring ${className}`} aria-label="Benefit LLP, home">
      <svg width="26" height="26" viewBox="0 0 30 30" fill="none" aria-hidden="true" className="sm:w-[30px] sm:h-[30px]">
        <path
          d="M15 2C15 2 6 9.5 6 17.5C6 22.7467 10.0294 27 15 27C19.9706 27 24 22.7467 24 17.5C24 9.5 15 2 15 2Z"
          fill={accentColor}
        />
        <path
          d="M15 8C15 8 10.5 13 10.5 17.5C10.5 20.2614 12.5147 22.5 15 22.5"
          stroke={variant === "light" ? "#123A6E" : "#FBF6EA"}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-display leading-none">
        <span className="text-lg sm:text-xl font-800 font-extrabold tracking-tight" style={{ color: textColor }}>
          Benefit
        </span>
        <span className="ml-1 text-lg sm:text-xl font-extrabold tracking-tight" style={{ color: accentColor }}>
          LLP
        </span>
      </span>
    </Link>
  );
}
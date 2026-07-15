const REASONS = [
  {
    label: "Purity & Iodized Salt",
    icon: (
      <path d="M12 3 4 8v8l8 5 8-5V8l-8-5Zm0 2.3 6 3.7-6 3.7-6-3.7 6-3.7ZM6 10.1l5 3.1v5.9l-5-3.1v-5.9Zm7 9v-5.9l5-3.1v5.9l-5 3.1Z" />
    ),
  },
  {
    label: "Antioxidant-Rich Tea",
    icon: (
      <path d="M4 3h13a1 1 0 0 1 1 1v3h1.5A2.5 2.5 0 0 1 22 9.5v2A3.5 3.5 0 0 1 18.5 15H18c-.6 2.9-3.3 5-6.4 5H10C6.7 20 4 17.3 4 14V3Zm2 2v9a4 4 0 0 0 4 4h1.6a4.4 4.4 0 0 0 4.4-4.4V5H6Zm12 3v5h.5A1.5 1.5 0 0 0 20 11.5v-2A.5.5 0 0 0 19.5 9H18Z" />
    ),
  },
  {
    label: "Powerful Detergent Powder",
    icon: (
      <path d="M9 2h6v3.2c1.8.7 3.3 2 4.2 3.8H21a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h1.8c.9-1.8 2.4-3.1 4.2-3.8V2Zm2 2v2h2V4h-2ZM4 11v8h16v-8H4Zm8 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
    ),
  },
  {
    label: "Gentle Fresh Liquid Detergent",
    icon: (
      <path d="M12 2c2.5 3.1 6 7.9 6 11.5A6 6 0 0 1 6 13.5C6 9.9 9.5 5.1 12 2Zm0 3.5c-1.9 2.6-4 5.9-4 8a4 4 0 0 0 8 0c0-2.1-2.1-5.4-4-8Z" />
    ),
  },
  {
    label: "Quick-Wash Formula",
    icon: (
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    ),
  },
];

export default function WhyBenefit() {
  return (
    <section className="mx-auto max-w-5xl px-5 md:px-8 py-16 md:py-20">
      <div className="text-center mb-10 md:mb-12">
        <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-brand-green mb-3">
          The Benefit Standard
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-blue">
          Why Choose Benefit?
        </h2>
      </div>

      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {REASONS.map((reason) => (
          <li
            key={reason.label}
            className="flex items-center gap-3 rounded-xl bg-sand/50 px-5 py-4"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-green/10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--color-brand-green)" aria-hidden="true">
                {reason.icon}
              </svg>
            </span>
            <span className="font-medium text-ink">{reason.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

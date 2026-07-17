import { useState, useEffect, useRef } from "react";

const REASONS = [
  {
    label: "Purity & Iodized Salt",
    description: "Premium quality vacuum-evaporated iodized salt ensuring perfect health and taste.",
    icon: <path d="M12 3 4 8v8l8 5 8-5V8l-8-5Zm0 2.3 6 3.7-6 3.7-6-3.7 6-3.7ZM6 10.1l5 3.1v5.9l-5-3.1v-5.9Zm7 9v-5.9l5-3.1v5.9l-5 3.1Z" />,
  },
  {
    label: "Antioxidant-Rich Tea",
    description: "Handpicked premium tea leaves bursting with natural antioxidants for an energetic morning.",
    icon: <path d="M4 3h13a1 1 0 0 1 1 1v3h1.5A2.5 2.5 0 0 1 22 9.5v2A3.5 3.5 0 0 1 18.5 15H18c-.6 2.9-3.3 5-6.4 5H10C6.7 20 4 17.3 4 14V3Zm2 2v9a4 4 0 0 0 4 4h1.6a4.4 4.4 0 0 0 4.4-4.4V5H6Zm12 3v5h.5A1.5 1.5 0 0 0 20 11.5v-2A.5.5 0 0 0 19.5 9H18Z" />,
  },
  {
    label: "Powerful Detergent Powder",
    description: "Tough on stubborn stains but engineered to protect the texture and colors of clothes.",
    icon: <path d="M9 2h6v3.2c1.8.7 3.3 2 4.2 3.8H21a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h1.8c.9-1.8 2.4-3.1 4.2-3.8V2Zm2 2v2h2V4h-2ZM4 11v8h16v-8H4Zm8 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />,
  },
  {
    label: "Gentle Fresh Liquid Detergent",
    description: "Deep cleansing formula that leaves your fabrics incredibly soft with a long-lasting fresh aroma.",
    icon: <path d="M12 2c2.5 3.1 6 7.9 6 11.5A6 6 0 0 1 6 13.5C6 9.9 9.5 5.1 12 2Zm0 3.5c-1.9 2.6-4 5.9-4 8a4 4 0 0 0 8 0c0-2.1-2.1-5.4-4-8Z" />,
  },
  {
    label: "Quick-Wash Formula",
    description: "Smart active ingredients that dissolve quickly, saving water and time in every single wash.",
    icon: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />,
  },
];

const STATS = [
  { value: "10+", label: "Years of Trust" },
  { value: "50k+", label: "Happy Customers" },
  { value: "100%", label: "Quality Assured" },
];

export default function WhyBenefit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setTimeout(() => {
              setVisibleItems((prev) => ({ ...prev, [index]: true }));
            }, index * 150);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const childElements = containerRef.current?.querySelectorAll(".scroll-item");
    childElements?.forEach((el) => observer.observe(el));
    return () => childElements?.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="why-choose-us" className="bg-[#fbf9f4] py-16 md:py-24 border-t border-b border-gray-100">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        
        {/* Responsive Grid Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-10">
          
          {/* Left Column: Heading & Stats */}
          <div className="lg:col-span-5 text-left">
            <div className="lg:sticky lg:top-24">
              <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-[#D99214] bg-[#e8efe9] px-2.5 py-1 rounded mb-3">
                The Benefit Standard
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-[#0b4f3b] leading-tight mb-8">
                Why Choose <br className="hidden lg:inline" />Benefit?
              </h2>

              <div className="grid grid-cols-3 gap-4 max-w-sm">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-xl md:text-2xl font-black text-[#0b4f3b]">{stat.value}</p>
                    <p className="mt-1 text-[10px] md:text-xs font-medium text-gray-500 leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Timeline */}
          <div ref={containerRef} className="lg:col-span-7 flex flex-col gap-8 md:gap-10 border-l border-gray-200/60 pl-6">
            {REASONS.map((reason, index) => {
              const isVisible = visibleItems[index];
              return (
                <div 
                  key={reason.label} 
                  data-index={index}
                  className={`scroll-item group relative flex gap-6 transition-all duration-700 ease-out 
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                  <div className={`absolute -left-[29.5px] top-1.5 h-2 w-2 rounded-full ring-4 ring-[#fbf9f4] transition-colors duration-300
                    ${isVisible ? "bg-[#D99214]" : "bg-gray-200"}`} 
                  />
                  
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e8efe9] text-[#0b4f3b] shadow-sm">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      {reason.icon}
                    </svg>
                  </div>

                  <div className="flex flex-col">
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{reason.label}</h3>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
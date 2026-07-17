import { useState, useEffect, useRef } from "react";

const REASONS = [
  {
    label: "Purity & Iodized Salt",
    description: "Premium quality vacuum-evaporated iodized salt ensuring perfect health and taste.",
    icon: (
      <path d="M12 3 4 8v8l8 5 8-5V8l-8-5Zm0 2.3 6 3.7-6 3.7-6-3.7 6-3.7ZM6 10.1l5 3.1v5.9l-5-3.1v-5.9Zm7 9v-5.9l5-3.1v5.9l-5 3.1Z" />
    ),
  },
  {
    label: "Antioxidant-Rich Tea",
    description: "Handpicked premium tea leaves bursting with natural antioxidants for an energetic morning.",
    icon: (
      <path d="M4 3h13a1 1 0 0 1 1 1v3h1.5A2.5 2.5 0 0 1 22 9.5v2A3.5 3.5 0 0 1 18.5 15H18c-.6 2.9-3.3 5-6.4 5H10C6.7 20 4 17.3 4 14V3Zm2 2v9a4 4 0 0 0 4 4h1.6a4.4 4.4 0 0 0 4.4-4.4V5H6Zm12 3v5h.5A1.5 1.5 0 0 0 20 11.5v-2A.5.5 0 0 0 19.5 9H18Z" />
    ),
  },
  {
    label: "Powerful Detergent Powder",
    description: "Tough on stubborn stains but engineered to protect the texture and colors of clothes.",
    icon: (
      <path d="M9 2h6v3.2c1.8.7 3.3 2 4.2 3.8H21a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h1.8c.9-1.8 2.4-3.1 4.2-3.8V2Zm2 2v2h2V4h-2ZM4 11v8h16v-8H4Zm8 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
    ),
  },
  {
    label: "Gentle Fresh Liquid Detergent",
    description: "Deep cleansing formula that leaves your fabrics incredibly soft with a long-lasting fresh aroma.",
    icon: (
      <path d="M12 2c2.5 3.1 6 7.9 6 11.5A6 6 0 0 1 6 13.5C6 9.9 9.5 5.1 12 2Zm0 3.5c-1.9 2.6-4 5.9-4 8a4 4 0 0 0 8 0c0-2.1-2.1-5.4-4-8Z" />
    ),
  },
  {
    label: "Quick-Wash Formula",
    description: "Smart active ingredients that dissolve quickly, saving water and time in every single wash.",
    icon: (
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    ),
  },
];

const STATS = [
  { value: "10+", label: "Years of Trust" },
  { value: "50k+", label: "Happy Customers" },
  { value: "100%", label: "Quality Assured" },
];

export default function WhyBenefit() {
  const containerRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute("data-index");
            // 1 second delay sequence mechanism
            setTimeout(() => {
              setVisibleItems((prev) => ({ ...prev, [index]: true }));
            }, index * 150); // Staggered entry for fluid transition within 1s
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
    <section id="why-choose-us" className="bg-[#fbf9f4] py-14 md:py-16 border-t border-b border-gray-100">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        
        {/* Compact Two-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          
          {/* LEFT COLUMN: Clean Title Frame */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 text-left">
            <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-[#D99214] bg-[#e8efe9] px-2.5 py-1 rounded mb-3 shadow-sm">
              The Benefit Standard
            </span>
            <h2 className="font-sans text-2xl md:text-3xl font-black text-[#0b4f3b] leading-tight">
              Why Choose <br className="hidden lg:inline" />Benefit?
            </h2>

            {/* Stats Row */}
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-sm">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-left">
                  <p className="font-sans text-xl md:text-2xl font-black text-[#0b4f3b]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] md:text-xs text-gray-500 leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Ultra-clean Content Flow without any Box/Cards */}
          <div ref={containerRef} className="lg:col-span-7 flex flex-col gap-6 md:gap-7 border-l border-gray-200/60 pl-6">
            {REASONS.map((reason, index) => {
              const isVisible = visibleItems[index];
              
              return (
                <div 
                  key={reason.label} 
                  data-index={index}
                  className={`scroll-item group relative flex gap-4 transition-all duration-700 ease-out transform
                    ${
                      isVisible 
                        ? "opacity-100 translate-y-0" 
                        : "opacity-0 translate-y-8"
                    }`}
                >
                  {/* Subtle Indicator Node on Timeline */}
                  <div className={`absolute -left-[29.5px] top-1.5 h-2 w-2 rounded-full ring-4 ring-[#fbf9f4] transition-colors duration-300
                    ${isVisible ? "bg-[#D99214]" : "bg-gray-200"}`} 
                  />
                  
                  {/* Dynamic Premium Icon */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#e8efe9] text-[#0b4f3b] group-hover:bg-[#0b4f3b] group-hover:text-white transition-colors duration-300 shadow-sm mt-0.5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      {reason.icon}
                    </svg>
                  </div>

                  {/* Clean Typography Frame */}
                  <div className="flex flex-col">
                    <h3 className="font-sans font-bold text-gray-900 text-base mb-0.5 transition-colors duration-300 group-hover:text-[#0b4f3b]">
                      {reason.label}
                    </h3>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-xl">
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
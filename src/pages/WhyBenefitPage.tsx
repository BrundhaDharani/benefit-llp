import { useState, useEffect, useRef } from "react";
import saltImg from "../assets/products/salt.png";
import teaImg from "../assets/products/tea.jpg";
import detergentPowderImg from "../assets/products/detergent-powder.png";
import detergentLiquidImg from "../assets/products/detergent-liquid.jpg";

const REASONS = [
  {
    label: "Purity & Iodized Salt",
    description: "Premium quality vacuum-evaporated iodized salt ensuring perfect health and taste.",
    img: saltImg,
  },
  {
    label: "Antioxidant-Rich Tea",
    description: "Handpicked premium tea leaves bursting with natural antioxidants for an energetic morning.",
    img: teaImg,
  },
  {
    label: "Powerful Detergent Powder",
    description: "Tough on stubborn stains but engineered to protect the texture and colour of clothes.",
    img: detergentPowderImg,
  },
  {
    label: "Gentle, Quick-Wash Liquid",
    description: "Deep cleansing single-use sachet that dissolves fast, saving water and time in every wash.",
    img: detergentLiquidImg,
  },
];

const STATS = [
  { value: "10+", label: "Years of Trust" },
  { value: "10,000+", label: "Happy Households" },
  { value: "100%", label: "Quality Assured" },
];

const c = {
  ink: "#1B2621",
  inkSoft: "#4A5750",
  teal: "#12695A",
  tealDark: "#0B463C",
  tealTint: "#E1F0EC",
  gold: "#C98A2C",
  cream: "#F6F3EC",
  line: "rgba(27,38,33,0.12)",
};

const WHATSAPP_NUMBER = "919876543210";

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
    <section id="why-choose-us" style={{ background: c.tealTint, padding: "64px 0", borderTop: `1px solid ${c.line}`, borderBottom: `1px solid ${c.line}`, fontFamily: "'Inter', sans-serif" }}>
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "0 20px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 48 }} className="wcu-grid">
          {/* Left Column: Heading & Stats */}
          <div className="wcu-left">
            <span style={{ display: "inline-block", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff", background: c.gold, padding: "5px 12px", borderRadius: 999, marginBottom: 14 }}>
              The Benefit Standard
            </span>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(28px,3.6vw,38px)", fontWeight: 700, color: c.tealDark, lineHeight: 1.15, margin: "0 0 28px" }}>
              Why Choose <br />Benefit?
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, maxWidth: 340, marginBottom: 28 }}>
              {STATS.map((stat) => (
                <div key={stat.label} style={{ background: "#fff", borderRadius: 12, padding: "14px 8px", textAlign: "center", border: `1px solid ${c.line}` }}>
                  <p style={{ fontFamily: "'Fraunces', serif", fontSize: 19, fontWeight: 700, color: c.tealDark, margin: 0 }}>{stat.value}</p>
                  <p style={{ marginTop: 4, fontSize: 9.5, fontWeight: 600, color: c.inkSoft, lineHeight: 1.3 }}>{stat.label}</p>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to know more about Benefit products.")}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 999,
                background: c.teal, color: "#fff", fontWeight: 600, fontSize: 13.5,
                padding: "12px 22px", textDecoration: "none",
              }}
            >
              Chat with us on WhatsApp →
            </a>
          </div>

          {/* Right Column: Timeline with product photos */}
          <div ref={containerRef} style={{ display: "flex", flexDirection: "column", gap: 30, borderLeft: `1px solid ${c.line}`, paddingLeft: 26 }}>
            {REASONS.map((reason, index) => {
              const isVisible = visibleItems[index];
              return (
                <div
                  key={reason.label}
                  data-index={index}
                  className="scroll-item"
                  style={{
                    position: "relative", display: "flex", gap: 18,
                    transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  }}
                >
                  <div
                    style={{
                      position: "absolute", left: -31, top: 6, height: 10, width: 10, borderRadius: "50%",
                      boxShadow: `0 0 0 4px ${c.tealTint}`, background: isVisible ? c.gold : "#D9D9D9",
                      transition: "background 0.3s",
                    }}
                  />
                  <div style={{ display: "flex", height: 58, width: 58, flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: 16, background: "#fff", boxShadow: "0 1px 2px rgba(0,0,0,0.06)", overflow: "hidden" }}>
                    <img src={reason.img} alt={reason.label} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 16.5, color: c.ink, margin: "0 0 4px" }}>{reason.label}</h3>
                    <p style={{ fontSize: 13.5, color: c.inkSoft, lineHeight: 1.6, margin: 0 }}>{reason.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .wcu-grid { flex-direction: row !important; align-items: flex-start; }
          .wcu-left { width: 36%; flex-shrink: 0; position: sticky; top: 96px; }
          .wcu-grid > div:last-child { width: 64%; }
        }
      `}</style>
    </section>
  );
}
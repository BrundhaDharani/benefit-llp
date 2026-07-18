import { useState, useEffect, useRef } from "react";
import saltImg from "../../assets/products/salt.png";
import teaImg from "../../assets/products/tea.jpg";
import detergentPowderImg from "../../assets/products/detergent-powder.png";
import detergentLiquidImg from "../../assets/products/detergent-liquid.jpg";
import { Key } from "lucide-react";

const REASONS = [
  {
    label: "Iodized Food Salt",
    description: "1kg pack of 100% iodized, refined salt — pure, hygienic and perfect for everyday cooking.",
    img: saltImg,
  },
  {
    label: "Antioxidant-Rich Tea Powder",
    description: "250g Health & Vitality Blend of green tea, moringa, jasmine and botanicals for a daily boost.",
    img: teaImg,
  },
  {
    label: "Powerful Detergent Powder",
    description: "Tough on stubborn stains, gentle on fabric colour — a lemon-fresh Rs 10 pack for daily wash.",
    img: detergentPowderImg,
  },
  {
    label: "Quick-Wash Detergent Liquid",
    description: "100ml single-use sachet with quick-wash formula — effortless clean, keeps colours bright.",
    img: detergentLiquidImg,
  },
];

const colors = {
  ink: "#21230d",
  inkSoft: "#4A5750",
  teal: "#12695A",
  tealDark: "#0B463C",
  tealTint: "rgb(178, 239, 173)",
  gold: "#f8d49e",
  line: "rgba(27,38,33,0.12)",
  cream: "#fdd77e",
};

export default function WhyBenefit() {
  const containerRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState({});

  // the highest-index item that's currently visible drives the left-side image
  const visibleIndexes = Object.keys(visibleItems)
    .filter((k) => visibleItems[Key])
    .map(Number);
  const activeIndex = visibleIndexes.length ? Math.max(...visibleIndexes) : 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            // each product reveals roughly 1 second after the previous one
            setTimeout(() => {
              setVisibleItems((prev) => ({ ...prev, [index]: true }));
            }, index * 1000);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px 0px" }
    );

    const childElements = containerRef.current?.querySelectorAll(".scroll-item");
    childElements?.forEach((el) => observer.observe(el));
    return () => childElements?.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section
      id="why-choose-us"
      style={{ background: colors.tealTint, padding: "36px 0 28px", borderTop: `1px solid ${colors.line}`, borderBottom: `1px solid ${colors.line}`, fontFamily: "'Inter', sans-serif" }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }} className="why-benefit-grid">
          <div>
            <span
              style={{
                display: "inline-block", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "#d04d4d", background : colors.gold,
                padding: "4px 12px", borderRadius: 4, marginBottom: 16, boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
              }}
            >
              The Benefit Standard
            </span>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 32, fontWeight: 700, color: colors.tealDark, lineHeight: 1.15, margin: 0 }}>
              Why Choose <br />Benefit?
            </h2>
            <div style={{ marginTop: 18, borderRadius: 18, overflow: "hidden", border: `1px solid ${colors.line}`, aspectRatio: "4 / 5", maxWidth: 300, position: "relative", background: "#fff" }}>
              {REASONS.map((reason, i) => (
                <img
                  key={reason.label}
                  src={reason.img}
                  alt={reason.label}
                  style={{
                    position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block",
                    opacity: i === activeIndex ? 1 : 0,
                    transition: "opacity 0.6s ease-out",
                  }}
                />
              ))}
            </div>
          </div>

          <div
            ref={containerRef}
            style={{ display: "flex", flexDirection: "column", gap: 26, borderLeft: `1px solid ${colors.line}`, paddingLeft: 24 }}
          >
            {REASONS.map((reason, index) => {
              const isVisible = visibleItems[index];
              return (
                <div
                  key={reason.label}
                  data-index={index}
                  className="scroll-item"
                  style={{
                    position: "relative", display: "flex", gap: 20,
                    transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(24px)",
                  }}
                >
                  <div
                    style={{
                      position: "absolute", left: -34, top: 6, height: 12, width: 12, borderRadius: "50%",
                      boxShadow: "0 0 0 4px #fff", background: isVisible ? colors.gold : "#D9D9D9",
                      transition: "background 0.3s",
                    }}
                  />
                  <div
                    style={{
                      display: "flex", height: 64, width: 64, flexShrink: 0, alignItems: "center", justifyContent: "center",
                      borderRadius: 16, background: "#fff", boxShadow: "0 1px 2px rgba(0,0,0,0.05)", overflow: "hidden",
                    }}
                  >
                    <img
                      src={reason.img}
                      alt={reason.label}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, color: colors.ink, fontSize: 17, margin: "0 0 4px" }}>
                      {reason.label}
                    </h3>
                    <p style={{ color: colors.inkSoft, fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .why-benefit-grid { flex-direction: row !important; align-items: flex-start; }
          .why-benefit-grid > div:first-child { width: 38%; position: sticky; top: 96px; }
          .why-benefit-grid > div:last-child { width: 62%; }
        }
      `}</style>
    </section>
  );
}
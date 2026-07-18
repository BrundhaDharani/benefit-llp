import { useState, useEffect } from "react";
import saltImg from "../../assets/products/salt.png";
import teaImg from "../../assets/products/tea.jpg";
import detergentPowderImg from "../../assets/products/detergent-powder.png";
import detergentLiquidImg from "../../assets/products/detergent-liquid.jpg";

const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi! I'd like to place an order with Benefit LLP.");

// brand tokens
const teal = "hsl(170, 71%, 24%)";
const tealDark = "#0B463C";
const gold = "#C98A2C";


// Slide 1 = brand intro, Slides 2–5 = one per product
const SLIDES = [
  {
    kind: "intro",
    eyebrow: "Benefit LLP · Jayakondam, Ariyalur",
    title: "Everyday essentials,\nsupplied reliably at scale.",
    text: "Salt, tea and laundry care — manufactured with consistent quality and delivered on time, every batch.",
    bg: `linear-gradient(135deg, ${tealDark}, ${teal})`,
    img: null,
    cta: "Explore our products",
  },
  {
    kind: "product",
    eyebrow: "Everyday Essential",
    title: "Purity Iodized\nFood Salt",
    text: "Perfectly crystallized, clean, vacuum-evaporated salt for healthy, everyday cooking.",
    bg: `linear-gradient(135deg, #1C5C8E, #2E7FBF)`,
    img: saltImg,
    price: "₹50 · 1kg",
    msg: "Hi! I want to order Purity Iodized Salt.",
  },
  {
    kind: "product",
    eyebrow: "Best Seller",
    title: "Premium\nTea Powder",
    text: "Antioxidant-rich organic blend with a robust, smooth aroma and zero bitterness.",
    bg: `linear-gradient(135deg, #0B4B39, #1D9E75)`,
    img: teaImg,
    price: "₹120 · 250g",
    msg: "Hi! I want to order Premium Tea Powder.",
  },
  {
    kind: "product",
    eyebrow: "Everyday Value",
    title: "Detergent\nPowder",
    text: "Tough on stubborn stains, gentle on fabric — a lemon-fresh Rs 10 pack for daily wash.",
    bg: `linear-gradient(135deg, #123B79, #1E63C4)`,
    img: detergentPowderImg,
    price: "₹10 · 100g",
    msg: "Hi! I want to order Detergent Powder.",
  },
  {
    kind: "product",
    eyebrow: "Quick Wash",
    title: "Detergent\nLiquid",
    text: "Single-use sachet with a quick-wash formula — effortless clean, keeps colours bright.",
    bg: `linear-gradient(135deg, #1C8E6B, #5DCAA5)`,
    img: detergentLiquidImg,
    price: "₹10 · 100ml",
    msg: "Hi! I want to order Detergent Liquid.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i: number) => setIndex(i);
  const prev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setIndex((i) => (i + 1) % SLIDES.length);

  return (
    <section style={{ position: "relative", height: "88vh", minHeight: 520, overflow: "hidden", fontFamily: "'Inter', sans-serif" }}>
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          style={{
            position: "absolute", inset: 0, background: slide.bg,
            opacity: i === index ? 1 : 0,
            transition: "opacity 0.9s ease-in-out",
            pointerEvents: i === index ? "auto" : "none",
          }}
        >
          <div
            style={{
              maxWidth: 1120, margin: "0 auto", height: "100%", padding: "0 24px",
              display: "grid",
              gridTemplateColumns: slide.kind === "intro" ? "1fr" : "1.1fr 0.9fr",
              alignItems: "center", gap: 40,
            }}
            className={slide.kind === "intro" ? "" : "hero-slide-grid"}
          >
            <div style={{ textAlign: slide.kind === "intro" ? "center" : "left", maxWidth: slide.kind === "intro" ? 720 : 480, margin: slide.kind === "intro" ? "0 auto" : 0 }}>
              <span
                style={{
                  display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em",
                  textTransform: "uppercase", color: tealDark, background: "#fff",
                  padding: "6px 16px", borderRadius: 999, marginBottom: 22,
                  opacity: i === index ? 1 : 0,
                  transform: i === index ? "translateY(0)" : "translateY(16px)",
                  transition: "opacity 0.6s ease-out 0.15s, transform 0.6s ease-out 0.15s",
                }}
              >
                {slide.eyebrow}
              </span>

              <h1
                style={{
                  fontFamily: "'Fraunces', serif", fontWeight: 700, color: "#fff",
                  fontSize: slide.kind === "intro" ? "clamp(34px,5.2vw,58px)" : "clamp(30px,4.4vw,46px)",
                  lineHeight: 1.12, margin: "0 0 18px", whiteSpace: "pre-line",
                  opacity: i === index ? 1 : 0,
                  transform: i === index ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.6s ease-out 0.25s, transform 0.6s ease-out 0.25s",
                }}
              >
                {slide.title}
              </h1>

              <p
                style={{
                  fontSize: 16, color: "rgba(255,255,255,0.85)", lineHeight: 1.7,
                  marginBottom: 28,
                  opacity: i === index ? 1 : 0,
                  transform: i === index ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.6s ease-out 0.35s, transform 0.6s ease-out 0.35s",
                }}
              >
                {slide.text}
              </p>

              <div
                style={{
                  display: "flex", gap: 12, flexWrap: "wrap",
                  justifyContent: slide.kind === "intro" ? "center" : "flex-start",
                  opacity: i === index ? 1 : 0,
                  transform: i === index ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.6s ease-out 0.45s, transform 0.6s ease-out 0.45s",
                }}
              >
                {slide.kind === "intro" ? (
                  <button
                    onClick={() => setIndex(1)}
                    style={{ background: gold, color: "#fff", padding: "14px 28px", borderRadius: 999, fontWeight: 600, fontSize: 14.5, border: "none", cursor: "pointer" }}
                  >
                    {slide.cta}
                  </button>
                ) : (
                  <>
                    <span style={{ background: "rgba(255,255,255,0.15)", color: "#fff", padding: "10px 18px", borderRadius: 999, fontWeight: 600, fontSize: 14 }}>
                      {slide.price}
                    </span>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(slide.msg || "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ background: gold, color: "#fff", padding: "12px 24px", borderRadius: 999, fontWeight: 600, fontSize: 14, textDecoration: "none" }}
                    >
                      Order on WhatsApp
                    </a>
                  </>
                )}
              </div>
            </div>

            {slide.kind === "product" && (
              <div
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  opacity: i === index ? 1 : 0,
                  transform: i === index ? "scale(1)" : "scale(0.85)",
                  transition: "opacity 0.7s ease-out 0.2s, transform 0.7s ease-out 0.2s",
                }}
                className="hero-slide-img"
              >
                <img src={slide.img || undefined} alt={slide.title} style={{ maxHeight: 320, width: "auto", objectFit: "contain", filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.25))" }} />
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        style={{
          position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", zIndex: 10,
          width: 40, height: 40, borderRadius: "50%", border: "none", background: "rgba(255,255,255,0.2)",
          color: "#fff", fontSize: 18, cursor: "pointer",
        }}
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        style={{
          position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", zIndex: 10,
          width: 40, height: 40, borderRadius: "50%", border: "none", background: "rgba(255,255,255,0.2)",
          color: "#fff", fontSize: 18, cursor: "pointer",
        }}
      >
        ›
      </button>

      {/* Dots */}
      <div style={{ position: "absolute", bottom: 22, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 8, zIndex: 10 }}>
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === index ? 22 : 8, height: 8, borderRadius: 4,
              background: i === index ? gold : "rgba(255,255,255,0.5)", border: "none", padding: 0,
              cursor: "pointer", transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>

      {/* WhatsApp button — fixed to the left side, vertically centered */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          position: "fixed", left: 20, top: "50%", transform: "translateY(-50%)", zIndex: 999,
          width: 54, height: 54, borderRadius: "50%", background: "#25D366", color: "#fff",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 10px 24px rgba(0,0,0,0.25)", textDecoration: "none",
        }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.2h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2zm5.8 14.14c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.79-4.17-4.94-4.36-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36l.55.01c.18.01.42-.07.65.5.24.58.83 2 .9 2.15.07.15.12.32.02.52-.1.2-.15.32-.29.49-.14.17-.3.38-.43.51-.14.14-.29.29-.13.57.17.29.75 1.24 1.61 2.01 1.1.99 2.03 1.3 2.32 1.45.29.14.46.12.63-.07.17-.2.72-.84.92-1.13.19-.29.38-.24.63-.14.26.1 1.65.78 1.93.92.29.14.48.21.55.33.07.12.07.68-.17 1.35z" />
        </svg>
      </a>

      <style>{`
        @media (max-width: 820px) {
          .hero-slide-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-slide-img { order: -1; }
        }
      `}</style>
    </section>
  );
}
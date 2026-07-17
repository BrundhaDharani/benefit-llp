import { useState, useEffect } from "react";
import saltImg from "../../assets/products/salt.png";
import teaImg from "../../assets/products/tea.jpg";
import detergentPowderImg from "../../assets/products/detergent-powder.png";
import detergentLiquidImg from "../../assets/products/detergent-liquid.jpg";

const SHELF = [
  { src: teaImg, alt: "Premium Tea Powder" },
  { src: saltImg, alt: "Purity Iodized Salt" },
  { src: detergentPowderImg, alt: "Detergent Powder" },
  { src: detergentLiquidImg, alt: "Detergent Liquid" },
];

const FEATURED_PRODUCTS = [
  { src: teaImg, title: "Premium Tea Powder", desc: "Antioxidant-rich organic blend with robust, smooth aroma.", price: "₹120", weight: "250g" },
  { src: saltImg, title: "Purity Iodized Food Salt", desc: "Perfectly crystallized, clean, vacuum-evaporated salt.", price: "₹50", weight: "1kg" },
];

const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi! I'd like to place an order with Benefit LLP.");
const QUOTE_MESSAGE = encodeURIComponent("Hi! I'm interested in a bulk/distributor quote from Benefit LLP.");

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SHELF.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ background: "#faf9f5", color: "#1b4332", fontFamily: "'Inter', sans-serif" }}>
      
      {/* --- HERO SECTION --- */}
      <section style={{ padding: "80px 20px", background: "linear-gradient(135deg, #faf9f5 0%, #eef6f2 100%)" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 64, alignItems: "center" }} className="hero-grid">
          
          <div>
            <span style={{ display: "inline-block", fontSize: 11, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d4a373", background: "#1b433210", padding: "6px 16px", borderRadius: 99, marginBottom: 24 }}>Trusted Quality Supply</span>
            <h1 style={{ fontFamily: "serif", fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 900, lineHeight: 1.1, margin: "0 0 24px" }}>Everyday essentials, <br /> <span style={{ color: "#d4a373" }}>supplied reliably</span> at scale.</h1>
            <p style={{ fontSize: 18, color: "#4b5563", lineHeight: 1.7, marginBottom: 40, maxWidth: 500 }}>Benefit LLP manufactures and supplies high-quality essentials across Tamil Nadu. Consistent quality, on-time fulfillment, every single batch.</p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${QUOTE_MESSAGE}`} style={{ background: "#1b4332", color: "#fff", padding: "16px 32px", borderRadius: 12, fontWeight: 700, textDecoration: "none" }}>Request Bulk Quote</a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`} style={{ border: "2px solid #1b4332", color: "#1b4332", padding: "16px 32px", borderRadius: 12, fontWeight: 700, textDecoration: "none" }}>Talk to Sales</a>
            </div>
          </div>

          {/* --- ANIMATED PRODUCT BOX --- */}
          <div style={{ background: "#fff", border: "1px solid #1b433210", borderRadius: 24, padding: 40, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.05)", height: 300, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <h3 style={{ fontSize: 14, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 20, color: "#1b4332" }}>{SHELF[activeIndex].alt}</h3>
            <div style={{ transition: "opacity 0.5s ease-in-out", opacity: 1 }}>
              <img src={SHELF[activeIndex].src} alt={SHELF[activeIndex].alt} style={{ height: 160, objectFit: "contain" }} />
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 25 }}>
              {SHELF.map((_, i) => (
                <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: i === activeIndex ? "#1b4332" : "#e5e7eb" }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURED SECTION --- */}
      <section style={{ padding: "40px 20px 100px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "serif", fontSize: 48, fontWeight: 700, color: "#1b4332", marginBottom: 60 }}>Featured Picks</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} className="featured-grid">
            {FEATURED_PRODUCTS.map((p, i) => (
              <div key={i} style={{ background: "#fff", padding: 40, borderRadius: 24, border: "1px solid rgba(27, 67, 50, 0.1)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 32, boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
                  <div style={{ width: 160, height: 160, background: "#eef6f2", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <img src={p.src} style={{ maxHeight: 120, objectFit: "contain" }} />
                  </div>
                  <div>
                    <h4 style={{ margin: "0 0 12px", fontSize: 24, fontWeight: 700, color: "#1b4332" }}>{p.title}</h4>
                    <p style={{ margin: "0 0 20px", fontSize: 16, color: "#4b5563", lineHeight: 1.6 }}>{p.desc}</p>
                    <div style={{ fontSize: 20, fontWeight: 800, color: "#c98a2c" }}>{p.price} <span style={{ fontSize: 14, color: "#9ca3af", fontWeight: 400 }}>• {p.weight}</span></div>
                  </div>
                </div>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I am interested in ${p.title}`)}`} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, color: "#25D366", fontWeight: 700, textDecoration: "none", marginTop: 10 }}>
                  <span style={{ fontSize: 20 }}>💬</span> Order on WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FLOATING WHATSAPP BUTTON --- */}
      <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`} target="_blank" rel="noopener noreferrer" style={{ position: "fixed", bottom: 30, right: 30, zIndex: 9999, height: 70, width: 70, borderRadius: "50%", background: "#25D366", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 25px rgba(0,0,0,0.2)", textDecoration: "none", fontSize: "35px" }}>
        💬
      </a>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .featured-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
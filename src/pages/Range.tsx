// src/pages/ProductsPage.tsx
import saltImg from "../assets/products/salt.png";
import teaImg from "../assets/products/tea.jpg";
import detergentPowderImg from "../assets/products/detergent-powder.png";
import detergentLiquidImg from "../assets/products/detergent-liquid.jpg";

const navy = "#0F2A3D";
const navySoft = "#3E5468";
const line = "rgba(15,42,61,0.12)";
const gold = "#C98A2C";
const paper = "#F5F4F1";

const WHATSAPP_NUMBER = "919876543210";

const PRODUCTS = [
  {
    id: "salt",
    name: "Purity Iodized Food Salt",
    category: "Food & Nutrition",
    img: saltImg,
    unitSize: "1kg pouch",
    moq: "500 units",
    caseSize: "20 units/carton",
    listPrice: "₹50 / unit",
    desc: "Vacuum-evaporated, 100% iodized refined salt. Consistent iodine content batch to batch, FSSAI certified, hygienically packed.",
    specs: ["FSSAI Licensed", "Iodine: 30+ PPM", "No anti-caking additives", "Shelf life: 24 months"],
  },
  {
    id: "tea",
    name: "Premium Tea Powder",
    category: "Beverages",
    img: teaImg,
    unitSize: "250g pack",
    moq: "300 units",
    caseSize: "24 units/carton",
    listPrice: "₹120 / unit",
    desc: "Antioxidant-rich CTC blend of green tea, moringa and jasmine. Sourced and blended for consistent aroma and strength.",
    specs: ["No artificial colouring", "Resealable pack", "Shelf life: 18 months", "Custom blend available on bulk orders"],
  },
  {
    id: "detergent-powder",
    name: "Detergent Powder",
    category: "Home Care",
    img: detergentPowderImg,
    unitSize: "100g sachet",
    moq: "2,000 units",
    caseSize: "100 units/carton",
    listPrice: "₹10 / unit",
    desc: "Enzyme-active stain-removal formula, effective in hard water, low-suds for machine and hand wash.",
    specs: ["Hard water effective", "Low-suds formula", "Lemon fragrance", "Bulk 5kg/25kg bags available"],
  },
  {
    id: "detergent-liquid",
    name: "Detergent Liquid",
    category: "Home Care",
    img: detergentLiquidImg,
    unitSize: "100ml sachet",
    moq: "2,000 units",
    caseSize: "150 units/carton",
    listPrice: "₹10 / unit",
    desc: "Quick-dissolve liquid formula for fast, water-efficient washes. Colour-safe, suitable for daily use.",
    specs: ["Colour-safe formula", "Quick-dissolve", "Single-use sachet format", "Bulk 5L/20L cans available"],
  },
];

export default function ProductsPage() {
  return (
    <div style={{ background: paper, minHeight: "100vh", fontFamily: "'Inter', sans-serif", color: navy }}>
      {/* Header */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "64px 24px 40px" }}>
        <span
          style={{
            display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700,
            letterSpacing: "0.16em", textTransform: "uppercase", color: navy,
            background: "#fff", border: `1px solid ${line}`, padding: "7px 16px", borderRadius: 999, marginBottom: 20,
          }}
        >
          Product Catalog · Wholesale &amp; Distribution
        </span>
        <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(30px,4.4vw,44px)", fontWeight: 700, margin: "0 0 14px", lineHeight: 1.15 }}>
          Sourcing catalog for retailers and distributors.
        </h1>
        <p style={{ fontSize: 15.5, color: navySoft, lineHeight: 1.7, maxWidth: 620 }}>
          Specifications, minimum order quantities and indicative pricing for our four product lines. Contact our sales team for volume pricing, private labelling, or a formal quotation.
        </p>
      </section>

      {/* Product catalog */}
      <section style={{ maxWidth: 1040, margin: "0 auto", padding: "0 24px 72px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {PRODUCTS.map((p) => (
            <div
              key={p.id}
              style={{
                display: "grid", gridTemplateColumns: "220px 1fr", gap: 0,
                background: "#fff", border: `1px solid ${line}`, borderRadius: 14, overflow: "hidden",
              }}
              className="b2b-product-card"
            >
              <div style={{ background: paper, borderRight: `1px solid ${line}`, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
                <img src={p.img} alt={p.name} style={{ maxHeight: 160, width: "auto", objectFit: "contain" }} />
              </div>

              <div style={{ padding: 26 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 12 }}>
                  <div>
                    <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: navySoft }}>
                      {p.category}
                    </span>
                    <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 700, margin: "4px 0 0" }}>{p.name}</h2>
                  </div>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I'd like a bulk quote for ${p.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: navy, color: "#fff", fontWeight: 600, fontSize: 13,
                      padding: "10px 20px", borderRadius: 8, textDecoration: "none", whiteSpace: "nowrap",
                    }}
                  >
                    Request quote
                  </a>
                </div>

                <p style={{ fontSize: 13.5, color: navySoft, lineHeight: 1.65, marginBottom: 18, maxWidth: 580 }}>{p.desc}</p>

                {/* Spec grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0, borderTop: `1px solid ${line}`, borderBottom: `1px solid ${line}`, marginBottom: 16 }} className="b2b-spec-grid">
                  {[
                    ["Unit size", p.unitSize],
                    ["MOQ", p.moq],
                    ["Case pack", p.caseSize],
                    ["List price", p.listPrice],
                  ].map(([k, v], i) => (
                    <div key={k} style={{ padding: "12px 14px", borderLeft: i === 0 ? "none" : `1px solid ${line}` }}>
                      <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: navySoft }}>{k}</div>
                      <div style={{ fontSize: 13.5, fontWeight: 700, marginTop: 3, color: navy }}>{v}</div>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {p.specs.map((s) => (
                    <span key={s} style={{ fontSize: 11.5, color: navySoft, background: paper, border: `1px solid ${line}`, padding: "4px 10px", borderRadius: 6 }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: 1040, margin: "0 auto", padding: "0 24px 80px" }}>
        <div
          style={{
            borderRadius: 16, background: navy, padding: "40px 32px",
            display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20,
          }}
        >
          <div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 700, color: "#fff", margin: 0 }}>
              Need pricing for a custom order volume?
            </h2>
            <p style={{ color: "rgba(245,244,241,0.75)", fontSize: 14, marginTop: 8, maxWidth: 440 }}>
              Our sales team can share a formal quotation with tiered pricing, lead times, and private-label options.
            </p>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'm interested in a bulk/distributor quote from Benefit LLP.")}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: gold, color: "#fff", fontWeight: 600, fontSize: 14,
              padding: "13px 26px", borderRadius: 8, textDecoration: "none", whiteSpace: "nowrap",
            }}
          >
            Talk to sales
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 700px) {
          .b2b-product-card { grid-template-columns: 1fr !important; }
          .b2b-spec-grid { grid-template-columns: 1fr 1fr !important; }
          .b2b-spec-grid > div:nth-child(2n+1) { border-left: none !important; }
        }
      `}</style>
    </div>
  );
}
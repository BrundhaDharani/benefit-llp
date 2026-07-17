import { Link } from "react-router-dom";

const VALUES = [
  {
    title: "100% Adulteration-Free",
    desc: "We stand firmly against synthetic fillers. Every batch of culinary salt and CTC tea is packed with pure, unadulterated goodness.",
    icon: (
      <path d="M12 2 3 7v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V7l-9-5Zm0 2.2 7 3.9v4.4c0 4-2.9 6.9-7 8-4.1-1.1-7-4-7-8V8.1l7-3.9Z" />
    ),
  },
  {
    title: "Regional Community First",
    desc: "Sourced responsibly and distributed thoroughly across Jayankondam, Ariyalur, and neighboring tier-2 districts of Tamil Nadu.",
    icon: (
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 15.9v1.1h-2v-1.1c-1.7-.3-3-1.5-3.2-3.2h2.1c.1.7.7 1.3 1.6 1.3.9 0 1.5-.4 1.5-1.1 0-.7-.5-1-1.8-1.4-1.8-.5-3.2-1.1-3.2-3 0-1.4 1.1-2.5 2.6-2.8V5.6h2v1.1c1.5.3 2.6 1.3 2.8 2.8h-2c-.1-.6-.6-1.1-1.4-1.1-.8 0-1.3.4-1.3 1 0 .6.6.9 1.9 1.3 1.9.5 3.1 1.2 3.1 3.1 0 1.5-1.1 2.6-2.7 3Z" />
    ),
  },
  {
    title: "Regulatory Certified",
    desc: "Fully FSSAI and ISO compliant. We verify iodine values (30+ PPM) and active surfactant ratios before any shipment leaves our facility.",
    icon: (
      <path d="M12 2 4 6v6c0 5.2 3.4 9.4 8 10 4.6-.6 8-4.8 8-10V6l-8-4Zm-1.1 13.5-3.4-3.4 1.4-1.4 2 2 4.7-4.7 1.4 1.4-6.1 6.1Z" />
    ),
  },
  {
    title: "Eco-Safe Laundry Care",
    desc: "Our bio-degradable active liquid detergents and powders are formulated to break rigid stains gently, without harming fabric or hands.",
    icon: <path d="M12 3 3 10v10h6v-6h6v6h6V10L12 3Z" />,
  },
];

const STATS = [
  { value: "FSSAI", label: "Food Safety Approved" },
  { value: "10,000+", label: "Happy Households" },
  { value: "4", label: "Core Product Lines" },
  { value: "100%", label: "Lab Tested Batches" },
];

// brand tokens — same palette used across Hero / WhyBenefit / ProductRange
const c = {
  ink: "#1B2621",
  inkSoft: "#4A5750",
  teal: "#12695A",
  tealDark: "#0B463C",
  tealTint: "#E1F0EC",
  gold: "#C98A2C",
  goldTint: "#F7EBD6",
  cream: "#F6F3EC",
  line: "rgba(27,38,33,0.12)",
};

export default function AboutPage() {
  return (
    <div style={{ background: c.cream, minHeight: "100vh", fontFamily: "'Inter', sans-serif", color: c.ink }}>
      {/* Banner */}
      <section style={{ maxWidth: 780, margin: "0 auto", padding: "72px 24px 48px", textAlign: "center" }}>
        <span
          style={{
            display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em",
            textTransform: "uppercase", color: "#fff", background: c.gold,
            padding: "5px 14px", borderRadius: 999, marginBottom: 16,
          }}
        >
          Who We Are
        </span>
        <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(30px,5vw,48px)", fontWeight: 700, color: c.tealDark, lineHeight: 1.12, margin: 0 }}>
          About Benefit LLP
        </h1>
        <p style={{ marginTop: 18, fontSize: 16, color: c.inkSoft, lineHeight: 1.7, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
          Rooted in Jayakondam, Tamil Nadu — we're committed to bringing absolute purity, real health benefits, and clean household reliability to your family.
        </p>
      </section>

      {/* Our Story & Founder Bio */}
      <section style={{ maxWidth: 1040, margin: "0 auto", padding: "0 24px 64px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 44, alignItems: "center" }} className="about-story-grid">
          <div>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: c.gold }}>
              Our Founding Story
            </span>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(24px,3vw,32px)", fontWeight: 700, color: c.tealDark, margin: "12px 0 18px" }}>
              Driven by purity, built for Ariyalur households.
            </h2>
            <p style={{ color: c.inkSoft, fontSize: 15, lineHeight: 1.75, marginBottom: 14 }}>
              Benefit LLP was founded by <strong style={{ color: c.ink }}>G. Sathish</strong> in Jayakondam, Tamil Nadu. Seeing synthetic fillers, artificial colouring in teas, and chemically harsh detergents spreading through local markets, we set out to build a brand focused purely on honest daily essentials.
            </p>
            <p style={{ color: c.inkSoft, fontSize: 15, lineHeight: 1.75 }}>
              Starting with refined, properly iodized salt to address regional micro-nutrient gaps, we extended that same standard to aromatic CTC tea blends and eco-friendly enzyme-based detergents.
            </p>
          </div>

          <div
            style={{
              background: c.tealDark, color: c.cream, borderRadius: 24,
              padding: "36px 32px", position: "relative", overflow: "hidden",
              boxShadow: "0 20px 40px rgba(11,70,60,0.18)",
            }}
          >
            <span style={{ fontSize: 44, fontFamily: "'Fraunces', serif", color: c.gold, display: "block", lineHeight: 1, marginBottom: 12 }}>“</span>
            <p style={{ fontFamily: "'Fraunces', serif", fontSize: 19, fontWeight: 500, lineHeight: 1.6, fontStyle: "italic", color: "#F2EFE6", margin: 0 }}>
              Our simple promise is to challenge adulteration at every stage of production. What goes into our packs is exactly what we feed our own families at home.
            </p>
            <div style={{ marginTop: 24, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.15)" }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: c.gold, margin: 0 }}>G. Sathish</p>
              <p style={{ fontSize: 11.5, color: "rgba(246,243,236,0.6)", margin: "2px 0 0" }}>Founder & Director, Benefit LLP</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Grid Section */}
      <section style={{ background: "#fff", borderTop: `1px solid ${c.line}`, borderBottom: `1px solid ${c.line}`, padding: "64px 24px" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: c.gold }}>
              What We Stand For
            </span>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(24px,3vw,32px)", fontWeight: 700, color: c.tealDark, margin: "12px 0 0" }}>
              Uncompromising standards.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="about-values-grid">
            {VALUES.map((v) => (
              <div
                key={v.title}
                style={{
                  display: "flex", gap: 16, borderRadius: 18, background: c.cream,
                  border: `1px solid ${c.line}`, padding: 24, transition: "box-shadow 0.25s, transform 0.25s",
                }}
                className="value-card"
              >
                <div
                  style={{
                    display: "flex", height: 48, width: 48, flexShrink: 0, alignItems: "center", justifyContent: "center",
                    borderRadius: 14, background: c.tealTint, color: c.tealDark,
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    {v.icon}
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 17, color: c.tealDark, margin: "0 0 6px" }}>
                    {v.title}
                  </h3>
                  <p style={{ fontSize: 13.5, color: c.inkSoft, lineHeight: 1.65, margin: 0 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Stats */}
      <section style={{ maxWidth: 1040, margin: "0 auto", padding: "56px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, textAlign: "center" }} className="about-stats-grid">
          {STATS.map((s, i) => (
            <div key={s.label} style={{ borderLeft: i === 0 ? "none" : `1px solid ${c.line}`, padding: "0 8px" }}>
              <p style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(26px,4vw,40px)", fontWeight: 700, color: c.tealDark, margin: 0 }}>
                {s.value}
              </p>
              <p style={{ fontSize: 11.5, textTransform: "uppercase", letterSpacing: "0.08em", color: c.inkSoft, fontWeight: 600, marginTop: 6 }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box Section */}
      <section style={{ maxWidth: 1040, margin: "0 auto", padding: "0 24px 80px" }}>
        <div
          style={{
            borderRadius: 24, background: c.tealDark, padding: "56px 32px", textAlign: "center",
            position: "relative", overflow: "hidden", boxShadow: "0 20px 40px rgba(11,70,60,0.2)",
          }}
        >
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(24px,3.4vw,34px)", fontWeight: 700, color: "#fff", margin: 0 }}>
            Explore our quality FMCG range.
          </h2>
          <p style={{ color: "rgba(246,243,236,0.75)", maxWidth: 460, margin: "14px auto 0", fontSize: 15, lineHeight: 1.7 }}>
            Certified iodized salt, robust CTC tea powder, and active grease-cutting detergents — crafted for Tamil Nadu homes.
          </p>
          <div style={{ marginTop: 28 }}>
            <Link
              to="/products"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 999,
                background: c.gold, color: "#fff", fontWeight: 600, fontSize: 14,
                padding: "14px 28px", textDecoration: "none",
              }}
            >
              View Our Products
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .value-card:hover { box-shadow: 0 10px 24px rgba(27,38,33,0.08); transform: translateY(-2px); }
        @media (max-width: 860px) {
          .about-story-grid { grid-template-columns: 1fr !important; }
          .about-values-grid { grid-template-columns: 1fr !important; }
          .about-stats-grid { grid-template-columns: 1fr 1fr !important; row-gap: 28px !important; }
          .about-stats-grid > div:nth-child(2n+1) { border-left: none !important; }
        }
      `}</style>
    </div>
  );
}
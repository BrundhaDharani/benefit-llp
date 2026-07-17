
import { Link } from "react-router-dom"
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
    icon: (
      <path d="M12 3 3 10v10h6v-6h6v6h6V10L12 3Z" />
    ),
  },
];

// எண்களை தமிழ்நாட்டின் பிராந்திய வளர்ச்சிக்கு ஏற்ப மாற்றியுள்ளேன்
const STATS = [
  { value: "FSSAI", label: "Food Safety Approved" },
  { value: "10,000+", label: "Happy Households" },
  { value: "4", label: "Core Product Lines" },
  { value: "100%", label: "Lab Tested Batches" },
];

export default function AboutPage() {
  return (
    <div className="bg-[#faf9f5] min-h-screen">
      {/* Banner */}
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-12 md:pt-24 text-center">
        <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#d4a373] mb-3">
          WHO WE ARE
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#1b4332] leading-tight">
          About Benefit LLP
        </h1>
        <p className="mt-5 text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Rooted in Jayankondam, Tamil Nadu. We are committed to bringing
          absolute purity, standard health benefits, and clean household reliability to your family.
        </p>
      </section>

      {/* Our Story & Founder Bio */}
      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-12 items-center">
          <div className="md:col-span-7 space-y-5">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#d4a373]">
              OUR FOUNDING STORY
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#1b4332]">
              Driven by Purity, Built for Ariyalur Households
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Benefit LLP was envisioned and established by <strong>G. Sathish</strong> in Jayankondam, Tamil Nadu. Witnessing a rising trend of synthetic fillers, artificial coloring in teas, and chemically-harsh detergents in local markets, we decided to construct a brand purely focused on honest daily essentials.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Starting with refined, perfectly iodized culinary salt to combat regional micro-nutrient deficiencies, we soon extended our commitment to highly aromatic CTC tea blends and eco-friendly enzyme cleaning detergents.
            </p>
          </div>
          
          <div className="md:col-span-5 rounded-3xl bg-[#1b4332] text-[#faf9f5] p-8 md:p-10 shadow-xl border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#d4a373_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <span className="text-4xl text-[#d4a373] font-serif block mb-4">“</span>
            <p className="font-serif text-lg md:text-xl font-medium leading-relaxed italic text-gray-100">
              "Our simple promise is to challenge adulteration at every stage of production. What goes into our food packs is exactly what we feed our families at home."
            </p>
            <div className="mt-6 border-t border-white/10 pt-4">
              <p className="text-sm font-bold text-[#d4a373] m-0">G. Sathish</p>
              <p className="text-[11px] text-gray-400 m-0">Founder & Director, Benefit LLP</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Grid Section */}
      <section className="bg-white border-y border-gray-100 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#d4a373] mb-3">
              WHAT WE STAND FOR
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#1b4332]">
              Uncompromising Standards
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="flex gap-4 rounded-2xl bg-[#faf9f5] border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d4a373]/10 text-[#d4a373]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {v.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#1b4332] text-lg mb-1.5">
                    {v.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Stats */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((s) => (
            <div key={s.label} className="space-y-1">
              <p className="font-serif text-3xl md:text-5xl font-bold text-[#1b4332]">
                {s.value}
              </p>
              <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box Section */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-[#1b4332] px-8 py-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#faf9f5_1px,transparent_1px)] [background-size:20px_20px]"></div>
          <div className="relative z-10 space-y-4">
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#faf9f5]">
              Explore Our Quality FMCG Range
            </h2>
            <p className="text-gray-300 max-w-md mx-auto text-sm md:text-base leading-relaxed">
              Discover our certified Iodized Salt, robust CTC Tea Powder, and active grease-cutting detergents crafted carefully for Tamil Nadu homes.
            </p>
            <div className="pt-4 flex justify-center">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full bg-[#d4a373] hover:bg-white text-[#1b4332] hover:text-[#1b4332] font-semibold px-8 py-4 transition-all duration-300 shadow-lg text-sm"
              >
                View Our Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
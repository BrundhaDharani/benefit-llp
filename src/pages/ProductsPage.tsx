import { Link } from "react-router-dom";
import ProductRange from "../components/home/ProductRange";

// ─── 1. CORE ASSET BUNDLE IMPORTS ───
// Import matching exact case-sensitive filename tracking paths from your project
import saltImg from "../assets/products/salt.png";
import teaImg from "../assets/products/tea.jpg";
import detergentPowderImg from "../assets/products/detergent-powder.png";
import detergentLiquidImg from "../assets/products/detergent-liquid.jpg";

interface ProductItem {
  id: string;
  name: string;
  category: string;
  desc: string;
  price: string;
  unit: string;
  badge: string;
  imageSrc: string; // Dynamic bound source identifier
}

const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "salt",
    name: "Refined Iodized Salt",
    category: "Salt",
    desc: "Premium triple-refined iodized salt crafted for pure taste and everyday Indian cooking.",
    price: "₹28",
    unit: "1KG PACK",
    badge: "KITCHEN ESSENTIAL",
    imageSrc: saltImg,
  },
  {
    id: "tea",
    name: "Premium Tea Blend",
    category: "Tea",
    desc: "Freshly packed, rich aroma tea powder curated for health, energy, and your perfect morning cup.",
    price: "₹140",
    unit: "500G PACK",
    badge: "FRESH STOCK",
    imageSrc: teaImg,
  },
  {
    id: "detergent-powder",
    name: "Premium Detergent Powder",
    category: "Detergents",
    desc: "Advanced stain-removing formula that keeps whites brilliant and colors bright, wash after wash.",
    price: "₹95",
    unit: "1KG PACK",
    badge: "TOP SELLER",
    imageSrc: detergentPowderImg,
  },
  {
    id: "detergent-liquid",
    name: "Fabric Care Liquid Detergent",
    category: "Detergents",
    desc: "Gentle on clothes, tough on dirt. Perfectly designed for both top load and front load washing machines.",
    price: "₹180",
    unit: "1L BOTTLE",
    badge: "NEW LAUNCH",
    imageSrc: detergentLiquidImg,
  },
];

const CATEGORIES_DATA = [
  { name: "Salt", desc: "Premium refined & iodized salt for everyday cooking.", count: "1 Product" },
  { name: "Tea", desc: "Health & vitality blend tea powder, freshly packed.", count: "1 Product" },
  { name: "Detergents", desc: "Powerful stain-removing detergent powder & liquid.", count: "2 Products" },
];

export default function ProductsPage() {
  return (
    <div className="bg-[#fbf9f4] min-h-screen font-sans">
      
      {/* SECTION 1: HERO BANNER */}
      <section className="bg-[#0b4f3b] py-16 text-center text-[#fbf9f4] px-5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="inline-block text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-[#D99214] bg-[#e8efe9]/10 border border-[#e8efe9]/20 px-3.5 py-1.5 rounded-full mb-4 shadow-sm">
            Our Catalog
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            Our Everyday Essentials
          </h1>
          <p className="text-gray-200/90 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-medium">
            Explore our range of high-quality salt, tea, and detergents crafted honestly around real household needs.
          </p>
        </div>
      </section>

      {/* SECTION 2: PRODUCT RANGE ACCORDION TEMPLATE */}
      <ProductRange />

      {/* SECTION 3: EXPLORE PRODUCTS GRID WITH REAL VISUAL IMAGES */}
      <section className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-24 border-t border-gray-200/50">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-l-4 border-[#0b4f3b] pl-4">
          <div>
            <span className="block text-xs font-bold tracking-[0.15em] uppercase text-[#D99214] mb-1">
              Direct Sourcing
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-[#0b4f3b]">
              Explore Our Products
            </h2>
          </div>
          <p className="text-gray-500 text-xs md:text-sm max-w-xs md:text-right leading-relaxed font-medium">
            Every batch goes through strict quality checks before reaching your home.
          </p>
        </div>

        {/* Dynamic Image Cards Rendering Pipeline */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS_DATA.map((prod) => (
            <div 
              key={prod.id} 
              className="flex flex-col justify-between rounded-2xl border border-gray-200/70 bg-white overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(11,79,59,0.06)] hover:border-[#e8efe9] transition-all duration-300 group"
            >
              {/* IMAGE HOUSING LAYER: Replaced original alphabet tags with clean auto-scale image container */}
              <div className="bg-[#fbf9f4]/60 p-6 flex flex-col items-center justify-center relative border-b border-gray-100 h-[220px] transition-colors group-hover:bg-[#e8efe9]/20">
                <span className="absolute top-3 left-3 bg-[#0b4f3b] text-[#fbf9f4] text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider shadow-sm z-10">
                  {prod.badge}
                </span>
                
                {/* 📸 Real Image tag bounding pipeline */}
                <img 
                  src={prod.imageSrc} 
                  alt={prod.name}
                  className="max-h-[140px] max-w-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300 z-0"
                />
                
                <span className="text-[9px] font-bold text-gray-500 mt-3 uppercase tracking-widest bg-gray-200/60 px-2 py-0.5 rounded-md">
                  {prod.unit}
                </span>
              </div>

              {/* Card Title Content Description Area */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-[#0b4f3b] text-base md:text-lg mb-2 tracking-tight">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-medium line-clamp-3">
                    {prod.desc}
                  </p>
                </div>

                {/* Footer Controls Row Component */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Price</span>
                    <span className="font-black text-xl text-[#0b4f3b] tracking-tight">{prod.price}</span>
                  </div>
                  
                  <Link
                    to="/#contact"
                    className="focus-ring inline-flex items-center justify-center rounded-xl bg-[#0b4f3b] hover:bg-[#0b4f3b]/90 text-white font-bold text-xs px-4 py-2.5 transition-colors shadow-sm"
                  >
                    Order Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: SHOP BY CATEGORY */}
      <section className="bg-white border-t border-gray-200/50 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#D99214] mb-2">
              Classified View
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-[#0b4f3b]">
              Shop by Category
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {CATEGORIES_DATA.map((cat) => (
              <div 
                key={cat.name} 
                className="rounded-2xl border border-gray-100 bg-[#fbf9f4]/40 p-6 shadow-sm hover:border-[#e8efe9] hover:bg-white transition-all duration-300"
              >
                <span className="text-[9px] font-bold text-[#D99214] bg-[#fef6e7] px-2 py-0.5 rounded uppercase tracking-widest inline-block mb-3 shadow-sm">
                  {cat.count}
                </span>
                <h3 className="font-bold text-[#0b4f3b] text-lg mb-2 tracking-tight">
                  {cat.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-medium">
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}
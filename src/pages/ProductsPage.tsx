import { Link } from "react-router-dom";
import ProductRange from "../components/home/ProductRange";

// ─── ASSET IMPORTS ───
import saltImg from "../assets/products/salt.png";
import teaImg from "../assets/products/tea.jpg";
import detergentPowderImg from "../assets/products/detergent-powder.png";
import detergentLiquidImg from "../assets/products/detergent-liquid.jpg";

// ─── TYPES & DATA ───
interface ProductItem {
  id: string;
  name: string;
  category: string;
  desc: string;
  price: string;
  unit: string;
  badge: string;
  imageSrc: string;
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
      <section className="bg-[#0b4f3b] py-12 md:py-20 text-center text-[#fbf9f4] px-5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="inline-block text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-[#D99214] bg-[#e8efe9]/10 border border-[#e8efe9]/20 px-3.5 py-1.5 rounded-full mb-4">
            Our Catalog
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
            Our Everyday Essentials
          </h1>
          <p className="text-gray-200/90 text-sm md:text-base max-w-lg mx-auto leading-relaxed px-2">
            Explore our range of high-quality salt, tea, and detergents crafted honestly around real household needs.
          </p>
        </div>
      </section>

      {/* SECTION 2: PRODUCT RANGE ACCORDION */}
      <ProductRange />

      {/* SECTION 3: PRODUCT GRID */}
      <section className="mx-auto max-w-6xl px-4 md:px-8 py-16 md:py-20 border-t border-gray-200/50">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-l-4 border-[#0b4f3b] pl-4">
          <div>
            <span className="block text-xs font-bold tracking-[0.15em] uppercase text-[#D99214] mb-1">
              Direct Sourcing
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-[#0b4f3b]">
              Explore Our Products
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
            Every batch goes through strict quality checks before reaching your home.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS_DATA.map((prod) => (
            <div 
              key={prod.id} 
              className="flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="bg-[#fbf9f4]/60 p-6 flex flex-col items-center justify-center relative border-b border-gray-100 h-52">
                <span className="absolute top-3 left-3 bg-[#0b4f3b] text-[#fbf9f4] text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                  {prod.badge}
                </span>
                <img 
                  src={prod.imageSrc} 
                  alt={prod.name}
                  className="max-h-[120px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute bottom-3 text-[9px] font-bold text-gray-500 uppercase tracking-widest bg-gray-200/60 px-2 py-0.5 rounded-md">
                  {prod.unit}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-[#0b4f3b] text-base mb-2">{prod.name}</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4 flex-grow">
                  {prod.desc}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="font-black text-lg text-[#0b4f3b]">{prod.price}</span>
                  <Link
                    to="/#contact"
                    className="rounded-xl bg-[#0b4f3b] hover:bg-[#0b4f3b]/90 text-white font-bold text-xs px-5 py-2.5 transition-colors"
                  >
                    Order
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: CATEGORY */}
      <section className="bg-white border-t border-gray-200/50 py-16">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-2xl md:text-3xl font-black text-[#0b4f3b] text-center mb-12">
            Shop by Category
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES_DATA.map((cat) => (
              <div key={cat.name} className="rounded-2xl border border-gray-100 bg-[#fbf9f4]/40 p-6 hover:bg-white transition-colors">
                <span className="text-[9px] font-bold text-[#D99214] bg-[#fef6e7] px-2 py-0.5 rounded uppercase tracking-widest mb-3 inline-block">
                  {cat.count}
                </span>
                <h3 className="font-bold text-[#0b4f3b] text-lg mb-2">{cat.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}
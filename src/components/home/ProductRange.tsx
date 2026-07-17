import { products } from "../../types/product";
import saltImg from "../../assets/products/salt.png";
import teaImg from "../../assets/products/tea.jpg";
import detergentPowderImg from "../../assets/products/detergent-powder.png";
import detergentLiquidImg from "../../assets/products/detergent-liquid.jpg";

const IMAGES: Record<string, string> = {
  salt: saltImg,
  tea: teaImg,
  "detergent-powder": detergentPowderImg,
  "detergent-liquid": detergentLiquidImg,
};

const WHATSAPP_NUMBER = "919876543210";

export default function ProductRange() {
  return (
    <section id="products" className="bg-[#fbf9f4] py-12 sm:py-16 md:py-24 border-t border-gray-100">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="inline-block text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#D99214] bg-[#fef6e7] px-3 py-1.5 rounded-md shadow-sm mb-3">
            Shop The Rang
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-black text-[#0b4f3b]">
            Our Product Range
          </h2>
          <p className="text-gray-500 text-sm md:text-base mt-2 max-w-md mx-auto">
            Explore our range of pure, fresh, and everyday reliable home essentials.
          </p>
        </div>

        {/* Responsive Grid System */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
          {products.map((product) => {
            const message = encodeURIComponent(
              `Hi! I'd like to order ${product.name} (${product.size}) for ₹${product.price}.`
            );
            
            return (
              <article
                key={product.id}
                className="group flex flex-col h-full rounded-xl sm:rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(11,79,59,0.08)]"
              >
                {/* Image Container with Fixed Constraints to solve misalignment */}
                <div className="relative flex h-32 sm:h-56 items-center justify-center bg-[#fcfbfa] p-3 sm:p-6 border-b border-gray-50 overflow-hidden">
                  {/* Soft Realistic Product Shadow */}
                  <div
                    aria-hidden="true"
                    className="absolute bottom-4 h-3 w-1/2 rounded-full bg-black/5 blur-md transition-transform duration-300 group-hover:scale-110"
                  />
                  <img
                    src={IMAGES[product.id]}
                    alt={`${product.name} — ${product.tagline}`}
                    className="relative h-full max-h-24 sm:max-h-44 w-auto object-contain drop-shadow-[0_8px_12px_rgba(0,0,0,0.06)] transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content Area with Flex Grow to guarantee uniform button alignment */}
                <div className="flex flex-1 flex-col p-3 sm:p-5 justify-between">
                  <div>
                    <h3 className="font-sans font-bold text-gray-900 text-sm sm:text-base md:text-lg group-hover:text-[#0b4f3b] transition-colors">
                      {product.name}
                    </h3>
                    <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm text-gray-500 font-medium">
                      Net Vol: {product.size}
                    </p>
                  </div>

                  <div className="mt-3 sm:mt-5 pt-2 sm:pt-3 border-t border-gray-50 flex items-center justify-between gap-2">
                    <div className="flex flex-col">
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-gray-400 font-bold">Price</span>
                      <span className="font-black text-sm sm:text-lg text-[#0b4f3b]">₹{product.price}</span>
                    </div>

                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg sm:rounded-xl bg-[#D99214] hover:bg-[#c2810f] text-white text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-2 sm:py-3 shadow-sm transition-all tracking-wide transform hover:scale-105 whitespace-nowrap"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
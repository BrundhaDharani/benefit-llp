import { useState, useEffect } from "react";
import saltImg from "../../assets/products/salt.png";
import teaImg from "../../assets/products/tea.jpg";
import detergentPowderImg from "../../assets/products/detergent-powder.png";
import detergentLiquidImg from "../../assets/products/detergent-liquid.jpg";

const SHELF = [
  { src: saltImg, alt: "Benefit Food Salt pack" },
  { src: teaImg, alt: "Benefit Tea Powder pack" },
  { src: detergentPowderImg, alt: "Benefit Detergent Powder pack" },
  { src: detergentLiquidImg, alt: "Benefit Detergent Liquid sachet" },
];

const FEATURED_PRODUCTS = [
  {
    src: teaImg,
    tag: "Best Seller",
    title: "Premium Tea Powder",
    desc: "Antioxidant-rich organic tea blend with a robust, smooth aroma and zero bitterness.",
    price: "₹120",
    weight: "250g"
  },
  {
    src: saltImg,
    tag: "Everyday Essential",
    title: "Purity Iodized Food Salt",
    desc: "Perfectly crystallized, clean, and vacuum-evaporated iodized salt for healthy cooking.",
    price: "₹50",
    weight: "1kg"
  }
];

const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi! I'd like to place an order with Benefit LLP.");

export default function Hero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#f5f2ed] min-h-screen text-[#1a1a1a]">
      {/* HERO SECTION */}
      <section id="home" className="relative overflow-hidden min-h-[85vh] flex items-center pt-16 sm:pt-20 md:pt-28 pb-10 sm:pb-12">
        <div className="mx-auto max-w-6xl px-5 md:px-8 text-center flex flex-col items-center">
          
          <div className="relative mx-auto mb-8 sm:mb-10 flex w-full max-w-2xl items-end justify-center h-40 sm:h-56 md:h-72 px-2 sm:px-4">
            {SHELF.map((item, i) => {
              const delays = ["delay-[100ms]", "delay-[250ms]", "delay-[400ms]", "delay-[550ms]"];
              return (
                <div
                  key={item.alt}
                  className={`relative -mx-2 md:-mx-3 flex aspect-[3/4] items-center justify-center overflow-hidden rounded-2xl bg-[#e9e4dc] p-2 sm:p-3 md:p-4 shadow-lg transition-all duration-700 ease-out hover:-translate-y-4 hover:z-30 hover:scale-105 ${delays[i]} ${animate ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-90"}`}
                  style={{
                    width: i === 1 || i === 2 ? "26%" : "22%",
                    zIndex: i === 1 || i === 2 ? 10 : 5,
                    transform: animate ? `rotate(${(i - 1.5) * 3}deg) translateY(0px)` : `rotate(0deg) translateY(60px)`,
                  }}
                >
                  <img src={item.src} alt={item.alt} className="h-full w-full object-contain" />
                </div>
              );
            })}
          </div>

          <h1 className="max-w-4xl font-sans text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.2] sm:leading-[1.15]">
            Enhancing Every Home, <span className="text-[#c2410c]">Every Day</span>
          </h1>
          
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-medium tracking-wide text-gray-600 uppercase px-2">
            Pure Salt &bull; Premium Tea &bull; High-Performance Detergents
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#1a1a1a] hover:bg-black text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 shadow-md transition-all w-full sm:w-auto">
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS SECTION */}
      <section className="py-12 sm:py-16 px-5 md:px-8 bg-[#f5f2ed]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center md:text-left mb-8 sm:mb-10">
            <span className="text-[11px] sm:text-xs uppercase font-bold tracking-widest text-[#c2410c] bg-[#e6e1d9] px-3 py-1.5 rounded-full">
              Our Premium Picks
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-3">
              Featured Products
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {FEATURED_PRODUCTS.map((prod) => (
              <div key={prod.title} className="flex flex-col sm:flex-row bg-[#e9e4dc] rounded-2xl overflow-hidden shadow-sm border border-[#dcd8cf] transition-transform duration-300 hover:-translate-y-1">
                <div className="sm:w-2/5 bg-[#dcd8cf] flex items-center justify-center p-5 sm:p-6 border-b sm:border-b-0 sm:border-r border-[#dcd8cf]">
                  <img src={prod.src} alt={prod.title} className="max-h-36 sm:max-h-48 w-auto object-contain" />
                </div>

                <div className="sm:w-3/5 p-5 sm:p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold tracking-wider uppercase bg-[#dcd8cf] px-2.5 py-1 rounded">
                      {prod.tag}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold mt-2.5 mb-1.5">{prod.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">{prod.desc}</p>
                  </div>

                  <div className="mt-4 sm:mt-6 pt-4 border-t border-[#dcd8cf] flex items-center justify-between">
                    <span className="text-lg sm:text-xl font-black">{prod.price}</span>
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I want to order ${prod.title} (${prod.weight})`)}`} target="_blank" rel="noopener noreferrer" className="bg-[#1a1a1a] hover:bg-black text-white font-bold text-xs px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl transition-all">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    
      <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`} target="_blank" rel="noopener noreferrer" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#1a1a1a] text-white shadow-xl hover:scale-110 transition-transform">
        <span className="text-xl sm:text-2xl">💬</span>
      </a>
    </div>
  );
}
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
const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi! I'd like to place an order with Benefit LLP.");

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* warm kitchen-counter backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, #F3EAD4 0%, #FBF6EA 62%), radial-gradient(80% 60% at 50% 0%, rgba(46,125,79,0.10), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-5 md:px-8 pt-14 md:pt-20 pb-16 md:pb-24 text-center">
        {/* product shelf */}
        <div className="relative mx-auto mb-12 flex max-w-3xl items-end justify-center">
          {SHELF.map((item, i) => (
            <div
              key={item.alt}
              className="relative -mx-2 md:-mx-3 flex aspect-[3/4] items-center justify-center overflow-hidden rounded-2xl bg-white p-4 ring-4 ring-cream shadow-[0_18px_30px_rgba(34,40,31,0.22)] transition-transform hover:-translate-y-2 hover:z-20"
              style={{
                width: i === 1 || i === 2 ? "27%" : "23%",
                zIndex: i === 1 || i === 2 ? 10 : 5,
                transform: `rotate(${(i - 1.5) * 2.5}deg)`,
              }}
            >
              <img src={item.src} alt={item.alt} className="h-full w-full object-contain" />
            </div>
          ))}
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-brand-blue leading-[1.08]">
          Enhancing Every Home, <span className="text-brand-green">Every Day</span>
        </h1>
        <p className="mt-4 font-body text-lg md:text-xl text-ink-soft">
          Salt · Tea · Detergents
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-brand-green hover:bg-brand-green-dark text-cream font-semibold px-7 py-3.5 shadow-sm transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.7-1.5-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.4 0-.5C11 9.3 10.5 8 10.3 7.6c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
              <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.5 5.2L2 22l4.9-1.3c1.5.8 3.2 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2Zm0 18.2c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3 .8.8-2.9-.2-.3C3.7 15 3.2 13.5 3.2 12c0-4.8 3.9-8.8 8.8-8.8s8.8 3.9 8.8 8.8-3.9 8.8-8.8 8.8Z" />
            </svg>
            Order on WhatsApp
          </a>
          <a
            href="tel:+919876543210"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-brand-blue hover:bg-brand-blue-dark text-cream font-semibold px-7 py-3.5 shadow-sm transition-colors"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.8 3.7 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4.9c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1.1L6.6 10.8Z" />
            </svg>
            Call Now
          </a>
        </div>
      </div>

  
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="focus-ring fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-cream shadow-lg transition-transform hover:scale-105"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.7-1.5-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.4 0-.5C11 9.3 10.5 8 10.3 7.6c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
          <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.5 5.2L2 22l4.9-1.3c1.5.8 3.2 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2Zm0 18.2c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3 .8.8-2.9-.2-.3C3.7 15 3.2 13.5 3.2 12c0-4.8 3.9-8.8 8.8-8.8s8.8 3.9 8.8 8.8-3.9 8.8-8.8 8.8Z" />
        </svg>
      </a>
    </section>
  );
}

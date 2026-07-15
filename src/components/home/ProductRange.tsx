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
    <section id="products" className="bg-sand/60 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-brand-green mb-3">
            Shop The Range
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-blue">
            Our Product Range
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {products.map((product) => {
            const message = encodeURIComponent(
              `Hi! I'd like to order ${product.name} (${product.size}) for ₹${product.price}.`
            );
            return (
              <article
                key={product.id}
                className="group flex flex-col rounded-2xl bg-cream border border-black/5 shadow-sm overflow-hidden transition-shadow hover:shadow-md"
              >
                <div className="relative flex aspect-square items-center justify-center bg-white p-6">
                  <div
                    aria-hidden="true"
                    className="absolute bottom-6 h-4 w-2/3 rounded-full bg-ink/10 blur-md"
                  />
                  <img
                    src={IMAGES[product.id]}
                    alt={`${product.name} — ${product.tagline}`}
                    className="relative h-full w-full object-contain drop-shadow-[0_10px_10px_rgba(34,40,31,0.15)] transition-transform duration-300 group-hover:-translate-y-1"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 pt-4">
                  <h3 className="font-display font-semibold text-ink">{product.name}</h3>
                  <p className="mt-1 text-sm text-ink-soft">
                    {product.size} · <span className="font-semibold text-brand-blue">₹{product.price}</span>
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring mt-4 inline-flex items-center justify-center rounded-full bg-brand-blue hover:bg-brand-blue-dark text-cream text-sm font-semibold py-2.5 transition-colors"
                  >
                    Buy Now
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

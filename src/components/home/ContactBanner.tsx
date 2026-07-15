const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi! I'd like to place an order with Benefit LLP.");

export default function ContactBanner() {
  return (
    <section className="mx-auto max-w-6xl px-5 md:px-8 pb-16 md:pb-20">
      <div className="rounded-3xl bg-brand-blue px-6 md:px-12 py-10 md:py-14 text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-cream">
          Ready to stock up?
        </h2>
        <p className="mt-2 text-cream/75 max-w-md mx-auto">
          Order on WhatsApp for quick confirmation, or give us a call — we're happy to help.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-brand-green hover:bg-brand-green-dark text-cream font-semibold px-7 py-3.5 transition-colors"
          >
            Order on WhatsApp
          </a>
          <a
            href="tel:+919876543210"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-cream hover:bg-white text-brand-blue font-semibold px-7 py-3.5 transition-colors"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

interface Review {
  quote: string;
  author: string;
  rating: number;
}

const REVIEWS: Review[] = [
  { quote: "Best salt for cooking. Dissolves clean and the flavour is spot on.", author: "Priya, Trichy", rating: 5 },
  { quote: "The tea keeps me energized every morning — rich aroma, no bitterness.", author: "Karthik, Madurai", rating: 4 },
  { quote: "Tea keeps me energized through long work days. Repeat customer!", author: "Meena, Chennai", rating: 4 },
  { quote: "Affordable and effective detergent — our whites actually stay white.", author: "Arun, Coimbatore", rating: 3.5 },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.min(1, Math.max(0, rating - i));
        return (
          <svg key={i} width="16" height="16" viewBox="0 0 20 20" aria-hidden="true">
            <defs>
              <linearGradient id={`star-${i}-${rating}`}>
                <stop offset={`${fill * 100}%`} stopColor="#F2A900" />
                <stop offset={`${fill * 100}%`} stopColor="#E4DCC7" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#star-${i}-${rating})`}
              d="M10 1.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.8l-5.2 2.7 1-5.8L1.6 7.6l5.8-.8L10 1.5Z"
            />
          </svg>
        );
      })}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-sand/60 py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-brand-green mb-3">
            From Our Customers
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-blue">
            Customer Reviews
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {REVIEWS.map((review) => (
            <blockquote
              key={review.author}
              className="rounded-2xl bg-cream border border-black/5 p-6 shadow-sm"
            >
              <p className="text-ink leading-relaxed">"{review.quote}"</p>
              <footer className="mt-4 flex items-center justify-between">
                <cite className="not-italic text-sm text-ink-soft">{review.author}</cite>
                <Stars rating={review.rating} />
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

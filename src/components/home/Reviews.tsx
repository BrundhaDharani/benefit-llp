import { useEffect, useRef, useState } from "react";

interface Review {
  quote: string;
  author: string;
  rating: number;
  productTag: string;
}

const REVIEWS: Review[] = [
  {
    quote: "Benefit Iodized Salt has the perfect consistency. Food tastes much better, and we are relieved about our family's health.",
    author: "Meenakshi S., Jayankondam",
    rating: 5,
    productTag: "Iodized Salt",
  },
  {
    quote: "The Premium CTC blend is exceptional! Highly aromatic, gives the perfect strong golden color tea every morning.",
    author: "Ramanan K., Ariyalur",
    rating: 5,
    productTag: "Premium Tea",
  },
  {
    quote: "Very effective active enzyme laundry sachet. Cleaned heavy mud stains off my kids' clothes effortlessly without affecting fabric color.",
    author: "Abinaya, Trichy",
    rating: 4,
    productTag: "Eco-Stain Detergent",
  },
  {
    quote: "Cleaned tough grease stains easily. The sachet packs are so convenient and very affordable for daily home wash.",
    author: "Selvam, Tanjore",
    rating: 4.5,
    productTag: "Detergent Liquid",
  },
];

const WHATSAPP_NUMBER = "919876543210";

const Stars = ({ rating, uniqueId }: { rating: number; uniqueId: string }) => (
  <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => {
      const fill = Math.min(1, Math.max(0, rating - i));
      const gradientId = `star-${uniqueId}-${i}`;
      return (
        <svg key={i} width="14" height="14" viewBox="0 0 20 20" aria-hidden="true">
          <defs>
            <linearGradient id={gradientId}>
              <stop offset={`${fill * 100}%`} stopColor="hsl(59, 99%, 58%)" />
              <stop offset={`${fill * 100}%`} stopColor="hsl(220, 55%, 82%)" />
            </linearGradient>
          </defs>
          <path fill={`url(#${gradientId})`} d="M10 1.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.8l-5.2 2.7 1-5.8L1.6 7.6l5.8-.8L10 1.5Z" />
        </svg>
      );
    })}
  </div>
);

export default function Reviews() {
  const displayReviews = [...REVIEWS, ...REVIEWS, ...REVIEWS];
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const pauseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // continuous auto-scroll via requestAnimationFrame
  useEffect(() => {
    let frameId: number;
    const speed = 0.8; // px per frame, tweak for faster/slower auto-scroll

    const tick = () => {
      const track = trackRef.current;
      if (track && !paused) {
        const half = track.scrollWidth / 3; // one third since list is tripled
        track.scrollLeft += speed;
        // loop back seamlessly once we've scrolled past the first copy
        if (track.scrollLeft >= half * 2) {
          track.scrollLeft -= half;
        }
      }
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [paused]);

  // pause auto-scroll briefly after manual interaction, then resume
  const pauseThenResume = () => {
    setPaused(true);
    if (pauseTimeout.current) clearTimeout(pauseTimeout.current);
    pauseTimeout.current = setTimeout(() => setPaused(false), 2500);
  };

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLDivElement>(".review-card");
    const step = card ? card.offsetWidth + 24 : 320;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
    pauseThenResume();
  };

  return (
    <section id="reviews" className="reviews-bg-cycle py-20 overflow-hidden border-t border-b border-gray-100 relative">
      <style>{`
        @keyframes bgCycle {
          0%   { background-color: hsl(87, 93%, 83%); }  /* soft green */
          33%  { background-color: rgb(206, 206, 235); }  /* soft blue */
          66%  { background-color: hsl(53, 86%, 84%); }  /* white */
          100% { background-color: #3d9719; }
        }
        .reviews-bg-cycle {
          animation: bgCycle 12s ease-in-out infinite;
        }
      `}</style>
      <div className="mx-auto max-w-5xl px-5 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6 text-center md:text-left">
        <div>
          <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-[#d4a373] bg-[#1b4332]/10 px-3 py-1 rounded-full mb-3">
            Verified Customer Feedback
          </span>
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#1b4332]">What Our Community Says</h2>
        </div>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to share a review for a Benefit product.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 self-center md:self-auto rounded-full bg-[#1b4332] hover:bg-[#14332a] text-white font-semibold text-sm px-6 py-3 transition-colors whitespace-nowrap"
        >
          Share your review
        </a>
      </div>

      <div
        className="relative w-full"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#faf9f5] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#faf9f5] to-transparent z-10 pointer-events-none" />

        {/* Prev / Next arrows */}
        <button
          onClick={() => scrollByCard(-1)}
          aria-label="Previous reviews"
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1b4332] shadow-md hover:bg-[#1b4332] hover:text-white transition-colors"
        >
          ‹
        </button>
        <button
          onClick={() => scrollByCard(1)}
          aria-label="Next reviews"
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1b4332] shadow-md hover:bg-[#1b4332] hover:text-white transition-colors"
        >
          ›
        </button>

        <div
          ref={trackRef}
          onPointerDown={pauseThenResume}
          className="flex gap-6 overflow-x-auto scroll-smooth px-5 md:px-10 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing"
        >
          {displayReviews.map((review, idx) => {
            const isDark = idx % 2 === 0;
            const uniqueId = `${idx}-${review.author.slice(0, 3)}`;

            return (
              <div
                key={uniqueId}
                className={`review-card flex flex-col justify-between w-[290px] md:w-[350px] border rounded-2xl p-6 shadow-sm shrink-0 font-sans
                  ${isDark ? "bg-[#1b4332] border-white/10" : "bg-white border-gray-100"}`}
              >
                <div>
                  <span className={`text-6xl font-sans leading-none opacity-20 block ${isDark ? "text-[#d4a373]" : "text-[#1b4332]"}`}>“</span>
                  <p className={`text-sm md:text-base italic leading-relaxed ${isDark ? "text-gray-100" : "text-gray-600"}`}>
                    {review.quote}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-black/10 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${isDark ? "bg-[#d4a373]/20 text-[#d4a373]" : "bg-[#1b4332]/10 text-[#1b4332]"}`}>
                      {review.productTag}
                    </span>
                    <Stars rating={review.rating} uniqueId={uniqueId} />
                  </div>
                  <span className={`text-xs font-bold ${isDark ? "text-[#d4a373]" : "text-[#1b4332]"}`}>
                    {review.author}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
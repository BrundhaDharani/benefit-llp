import React from "react";

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
    productTag: "Iodized Salt"
  },
  { 
    quote: "The Premium CTC blend is exceptional! Highly aromatic, gives the perfect strong golden color tea every morning.", 
    author: "Ramanan K., Ariyalur", 
    rating: 5,
    productTag: "Premium Tea"
  },
  { 
    quote: "Very effective active enzyme laundry sachet. Cleaned heavy mud stains off my kids' clothes effortlessly without affecting fabric color.", 
    author: "Abinaya, Trichy", 
    rating: 4,
    productTag: "Eco-Stain Detergent"
  },
  { 
    quote: "Cleaned tough grease stains easily. The sachet packs are so convenient and very affordable for daily home wash.", 
    author: "Selvam, Tanjore", 
    rating: 4.5,
    productTag: "Detergent Liquid"
  },
];

function Stars({ rating, id }: { rating: number; id: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.min(1, Math.max(0, rating - i));
        return (
          <svg key={i} width="14" height="14" viewBox="0 0 20 20" aria-hidden="true">
            <defs>
              <linearGradient id={`star-premium-marquee-${id}-${i}-${rating}`}>
                <stop offset={`${fill * 100}%`} stopColor="#d4a373" />
                <stop offset={`${fill * 100}%`} stopColor="#E5E7EB" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#star-premium-marquee-${id}-${i}-${rating})`}
              d="M10 1.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.8l-5.2 2.7 1-5.8L1.6 7.6l5.8-.8L10 1.5Z"
            />
          </svg>
        );
      })}
    </div>
  );
}

export default function Reviews() {
  // Duplicating reviews list to create an infinite loop effect
  const duplicatedReviews = [...REVIEWS, ...REVIEWS, ...REVIEWS, ...REVIEWS];

  return (
    <section id="reviews" className="bg-[#faf9f5] py-20 overflow-hidden border-t border-b border-gray-100 relative">
      
      {/* Dynamic Inline CSS Injection to ensure the Marquee moves seamlessly on any setup */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-smooth {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
      `}</style>

      {/* Header section with brand match styling */}
      <div className="mx-auto max-w-5xl px-5 md:px-8 mb-12 text-center">
        <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-[#d4a373] bg-[#1b4332]/10 px-3 py-1 rounded-full mb-3 shadow-sm">
          Verified Customer Feedback
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1b4332]">
          What Our Community Says
        </h2>
        <p className="text-gray-500 text-sm mt-2 max-w-md mx-auto">
          Real reviews from households across Ariyalur, Jayankondam, and surrounding districts.
        </p>
      </div>

      {/* Marquee sliding track container */}
      <div className="relative w-full max-w-7xl mx-auto px-4">
        
        {/* Left Fading Gradient Overlay (Premium Depth) */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-r from-[#faf9f5] to-transparent z-20 pointer-events-none" />
        
        {/* Right Fading Gradient Overlay (Premium Depth) */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-l from-[#faf9f5] to-transparent z-20 pointer-events-none" />
        
        {/* Infinite Sliding Track Wrapper */}
        <div className="overflow-hidden py-4">
          <div className="animate-marquee-smooth gap-6 hover:[animation-play-state:paused] cursor-pointer">
            {duplicatedReviews.map((review, index) => {
              const isEven = index % 2 === 0;
              // Align colors with premium theme (Forest Green & Warm Gold)
              const bgClass = isEven ? "bg-[#1b4332] text-white border-white/5" : "bg-white text-gray-800 border-gray-100";
              const tagClass = isEven ? "bg-[#d4a373]/20 text-[#d4a373]" : "bg-[#1b4332]/10 text-[#1b4332]";
              const quoteColor = isEven ? "text-gray-100" : "text-gray-600";
              const titleColor = isEven ? "text-[#d4a373]" : "text-[#1b4332]";

              return (
                <div 
                  key={`${review.author}-${index}`} 
                  className={`inline-flex flex-col justify-between w-[290px] md:w-[340px] border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] shrink-0 mx-3 whitespace-normal ${bgClass}`}
                >
                  <div>
                    {/* Quotation icon decoration */}
                    <span className={`text-6xl font-serif leading-none select-none opacity-25 -mb-6 block ${isEven ? 'text-[#d4a373]' : 'text-[#1b4332]'}`}>
                      “
                    </span>

                    {/* Actual Review Quote Text */}
                    <p className={`text-sm md:text-base font-medium italic leading-relaxed relative z-10 ${quoteColor}`}>
                      {review.quote}
                    </p>
                  </div>

                  {/* Customer and Rating metadata footer */}
                  <div className="mt-8 pt-4 border-t border-black/5 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className={`text-[11px] font-bold tracking-wider px-2.5 py-1 rounded-full ${tagClass}`}>
                        {review.productTag}
                      </span>
                      <div className="bg-white px-2 py-1 rounded-lg border border-gray-100 shadow-sm flex items-center">
                        <Stars rating={review.rating} id={index} />
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d4a373]"></div>
                      <span className={`text-xs font-bold ${titleColor}`}>{review.author}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
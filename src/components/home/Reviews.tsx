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

const Stars = ({ rating, uniqueId }: { rating: number; uniqueId: string }) => (
  <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => {
      const fill = Math.min(1, Math.max(0, rating - i));
      const gradientId = `star-${uniqueId}-${i}`;
      return (
        <svg key={i} width="14" height="14" viewBox="0 0 20 20" aria-hidden="true">
          <defs>
            <linearGradient id={gradientId}>
              <stop offset={`${fill * 100}%`} stopColor="#d4a373" />
              <stop offset={`${fill * 100}%`} stopColor="#E5E7EB" />
            </linearGradient>
          </defs>
          <path fill={`url(#${gradientId})`} d="M10 1.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.8l-5.2 2.7 1-5.8L1.6 7.6l5.8-.8L10 1.5Z" />
        </svg>
      );
    })}
  </div>
);

export default function Reviews() {
  // Use a stable array for the marquee
  const displayReviews = [...REVIEWS, ...REVIEWS, ...REVIEWS];

  return (
    <section id="reviews" className="bg-[#faf9f5] py-20 overflow-hidden border-t border-b border-gray-100 relative">
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: flex; animation: marquee 40s linear infinite; }
      `}</style>

      <div className="mx-auto max-w-5xl px-5 mb-12 text-center">
        <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-[#d4a373] bg-[#1b4332]/10 px-3 py-1 rounded-full mb-3">
          Verified Customer Feedback
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1b4332]">What Our Community Says</h2>
      </div>

      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#faf9f5] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#faf9f5] to-transparent z-10" />
        
        <div className="flex animate-marquee gap-6 hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
          {displayReviews.map((review, idx) => {
            const isDark = idx % 2 === 0;
            const uniqueId = `${idx}-${review.author.slice(0, 3)}`;
            
            return (
              <div 
                key={uniqueId} 
                className={`flex flex-col justify-between w-[290px] md:w-[350px] border rounded-2xl p-6 shadow-sm shrink-0
                  ${isDark ? "bg-[#1b4332] border-white/10" : "bg-white border-gray-100"}`}
              >
                <div>
                  <span className={`text-6xl font-serif leading-none opacity-20 block ${isDark ? 'text-[#d4a373]' : 'text-[#1b4332]'}`}>“</span>
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
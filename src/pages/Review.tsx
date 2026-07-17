import React from 'react';
import { ReviewCard } from '../components/common/ReviewCard';

const customerReviews = [
  { id: '1', userName: 'Meenakshi S.', rating: 5, comment: 'Benefit Iodized Salt has the perfect consistency. Food tastes much better, and we are relieved about our family\'s health.', date: 'July 2, 2026', productTag: 'Iodized Salt' },
  { id: '2', userName: 'Ramanan K.', rating: 5, comment: 'The Premium CTC blend is exceptional! Highly aromatic, gives the perfect strong golden colour tea every morning.', date: 'June 28, 2026', productTag: 'Premium Tea' },
  { id: '3', userName: 'Abinaya', rating: 4, comment: 'Very effective active enzyme laundry sachet. Cleaned heavy mud stains off my kids\' clothes effortlessly without affecting fabric colour.', date: 'June 24, 2026', productTag: 'Detergent Powder' },
  { id: '4', userName: 'Selvam', rating: 5, comment: 'Cleaned tough grease stains easily. The sachet packs are so convenient and very affordable for daily home wash.', date: 'June 19, 2026', productTag: 'Detergent Liquid' },
  { id: '5', userName: 'Priya R.', rating: 5, comment: 'Good quality salt, dissolves well and tastes clean. Buying regularly now.', date: 'June 14, 2026', productTag: 'Iodized Salt' },
  { id: '6', userName: 'Manikandan S.', rating: 4, comment: 'Removes stains really well, good value for the Rs 10 pack.', date: 'June 9, 2026', productTag: 'Detergent Powder' },
  { id: '7', userName: 'Kavitha M.', rating: 4, comment: 'Nice aroma and taste, feels refreshing every morning. Would love a bigger pack size.', date: 'June 3, 2026', productTag: 'Premium Tea' },
  { id: '8', userName: 'Devi A.', rating: 4, comment: 'Handy sachet for quick wash, works well on light stains and dries with a nice scent.', date: 'May 28, 2026', productTag: 'Detergent Liquid' },
];

const c = {
  ink: '#1B2621',
  inkSoft: '#4A5750',
  teal: '#12695A',
  tealDark: '#0B463C',
  tealTint: '#E1F0EC',
  gold: '#C98A2C',
  line: 'rgba(27,38,33,0.12)',
  cream: '#F6F3EC',
};

const WHATSAPP_NUMBER = '919876543210';

const ReviewPage: React.FC = () => {
  const totalReviews = customerReviews.length;
  const averageRating =
    totalReviews > 0
      ? (customerReviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1)
      : '0.0';
  const fiveStarCount = customerReviews.filter((r) => r.rating === 5).length;

  const STATS = [
    { value: averageRating, label: 'Average Rating' },
    { value: `${totalReviews}+`, label: 'Total Reviews' },
    { value: `${fiveStarCount}`, label: '5-Star Reviews' },
  ];

  // rating breakdown, 5 down to 1
  const breakdown = [5, 4, 3, 2, 1].map((star) => {
    const count = customerReviews.filter((r) => r.rating === star).length;
    const pct = totalReviews ? Math.round((count / totalReviews) * 100) : 0;
    return { star, count, pct };
  });

  return (
    <div style={{ background: c.cream, minHeight: '100vh', fontFamily: "'Inter', sans-serif", color: c.ink }}>
      <div style={{ maxWidth: 1040, margin: '0 auto', padding: '64px 24px 80px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <span
            style={{
              display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '0.2em',
              textTransform: 'uppercase', color: '#fff', background: c.gold,
              padding: '5px 14px', borderRadius: 999, marginBottom: 16,
            }}
          >
            Verified Customer Feedback
          </span>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(28px,4.5vw,42px)', fontWeight: 700, color: c.tealDark, margin: 0 }}>
            What our community says
          </h1>
        </div>

        {/* Stats + Rating breakdown */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 20, marginBottom: 48 }} className="review-summary-grid">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }} className="review-stats-grid">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  background: '#fff', borderRadius: 16, padding: '20px 10px', border: `1px solid ${c.line}`,
                }}
              >
                <p style={{ fontFamily: "'Fraunces', serif", fontSize: 28, fontWeight: 700, color: c.tealDark, margin: 0 }}>{stat.value}</p>
                <p style={{ marginTop: 6, fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: c.inkSoft, textAlign: 'center' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div style={{ background: '#fff', borderRadius: 16, border: `1px solid ${c.line}`, padding: '20px 22px' }}>
            {breakdown.map((b) => (
              <div key={b.star} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <span style={{ fontSize: 12, width: 34, color: c.inkSoft, fontWeight: 600 }}>{b.star}★</span>
                <div style={{ flex: 1, height: 7, borderRadius: 999, background: c.tealTint, overflow: 'hidden' }}>
                  <div style={{ width: `${b.pct}%`, height: '100%', background: c.gold, borderRadius: 999 }} />
                </div>
                <span style={{ fontSize: 12, width: 24, textAlign: 'right', color: c.inkSoft }}>{b.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews List */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }} className="review-list-grid">
          {customerReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: 48, background: c.tealDark, borderRadius: 20, padding: '32px 28px',
            textAlign: 'center', boxShadow: '0 16px 32px rgba(11,70,60,0.18)',
          }}
        >
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 700, color: '#fff', margin: 0 }}>
            Used a Benefit product recently?
          </h2>
          <p style={{ color: 'rgba(246,243,236,0.75)', fontSize: 14, marginTop: 8 }}>
            Share your experience — it helps other households choose better.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi! I want to share a review for a Benefit product.')}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 18,
              background: c.gold, color: '#fff', fontWeight: 600, fontSize: 14,
              padding: '12px 26px', borderRadius: 999, textDecoration: 'none',
            }}
          >
            Send us your review
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .review-summary-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .review-stats-grid { grid-template-columns: 1fr 1fr 1fr !important; }
          .review-list-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default ReviewPage;
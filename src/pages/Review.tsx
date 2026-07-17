import React from 'react';
import { ReviewCard } from '../components/common/ReviewCard';

const customerReviews = [
  { id: '1', userName: 'John Doe', rating: 5, comment: 'Excellent product quality!', date: 'July 10, 2026' },
  { id: '2', userName: 'Jane Smith', rating: 4, comment: 'Very good service and fast delivery.', date: 'July 12, 2026' },
];

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

  return (
    <div className="max-w-4xl mx-auto py-12 px-5 md:px-8">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 text-center md:text-left">
        Customer Reviews
      </h1>

      {/* Stats Row: Stacks on mobile, row on larger screens */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
        {STATS.map((stat) => (
          <div 
            key={stat.label} 
            className="flex flex-col items-center justify-center bg-gray-50 rounded-2xl py-6 border border-gray-100"
          >
            <p className="text-3xl font-black text-[#0b4f3b]">{stat.value}</p>
            <p className="mt-1 text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {customerReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;
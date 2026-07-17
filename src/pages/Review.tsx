import React from 'react';
import { ReviewCard } from '../components/common/ReviewCard';

// Sample data - In a real app, this might come from an API or a JSON file
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
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Customer Reviews</h1>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4 mb-10 max-w-md">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center bg-gray-50 rounded-xl py-4">
            <p className="text-2xl font-black text-gray-900">{stat.value}</p>
            <p className="mt-1 text-xs text-gray-500 leading-snug">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        {customerReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;
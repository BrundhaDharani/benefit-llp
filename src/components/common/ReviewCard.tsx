import React from 'react';

interface ReviewProps {
  review: {
    userName: string;
    comment: string;
    rating: number;
  };
}

export const ReviewCard: React.FC<ReviewProps> = ({ review }) => {
  return (
    <div className="p-3 sm:p-4 border rounded-lg shadow-sm bg-white">
      <h3 className="font-bold text-sm sm:text-base">{review.userName}</h3>
      <p className="text-yellow-500 text-sm sm:text-base">{review.rating} Stars</p>
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{review.comment}</p>
    </div>
  );
};
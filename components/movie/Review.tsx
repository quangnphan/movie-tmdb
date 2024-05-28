import { formatDate } from '@/helper/helper';
import { Review } from '@/types/tmdb';
import React, { useState } from 'react';

interface ReviewProps {
  review: Review;
}

const ReviewComponent = ({ review }: ReviewProps) => {
  const [expanded, setExpanded] = useState(false);
  const MAX_LENGTH = 200;

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  return (
    <div className='mb-8 px-5'>
      <div className='font-medium'>
        @{review.author}
        <span className='text-[13px] font-normal'>
          {' '}
          {formatDate(review.created_at)}
        </span>
      </div>
      <div className='pl-5 text-sm'>
        {expanded || review.content.length <= MAX_LENGTH
          ? review.content
          : `${review.content.slice(0, MAX_LENGTH)}...`}
        {review.content.length > MAX_LENGTH && (
          <span
            className='ml-2 cursor-pointer text-blue-500'
            onClick={toggleExpanded}
          >
            {expanded ? 'See less' : 'See more'}
          </span>
        )}
      </div>
    </div>
  );
};

export default ReviewComponent;

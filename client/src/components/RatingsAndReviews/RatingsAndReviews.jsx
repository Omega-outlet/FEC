import React from 'react';
import StarView from '../../styled-components/common-elements.jsx';

function RatingsAndReviews() {
  // this is just example data, rating will come from request based on id passed as prop
  const rating = 2.5;
  return (
    <div>
      <h1 data-testid="text">Ratings And Reviews</h1>
      <StarView rating={rating} fontSize={20} />
    </div>
  );
}

export default RatingsAndReviews;

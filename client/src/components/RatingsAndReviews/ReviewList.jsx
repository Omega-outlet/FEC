import React from 'react';
import PropTypes from 'prop-types';
import Review from './Review.jsx';

function ReviewList({ reviews }) {
  return (
    <div style={{ 'paddingTop': '20px' }} data-testid="reviewList-component">
      <label htmlFor="dropdown">
        Sort By:
        <select id="dropdown">
          <option value="helpful">Helpful</option>
          <option value="newest">Newest</option>
          <option value="relevant">Relevant</option>
        </select>
      </label>
      <div style={{ 'paddingTop': '20px' }}>
        {reviews.map((review) => <Review key={review.review_id} review={review} />)}
      </div>
      <button type="submit">Show More Reviews</button>
    </div>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    review_id: PropTypes.number.isRequired,
  })).isRequired,
};

export default ReviewList;

import React from 'react';
import Review from './Review.jsx';
import data from './exampleData.json';

function ReviewList() {
  return (
    <div style={{ 'paddingTop': '20px' }}>
      {/* <h1 style={{ 'textAlign': 'center' }}>Review List Component Here</h1> */}
      <label htmlFor="dropdown">
        Sort By:
        <select id="dropdown">
          <option value="helpful">Helpful</option>
          <option value="newest">Newest</option>
          <option value="relevant">Relevant</option>
        </select>
      </label>
      <div style={{ 'paddingTop': '20px' }}>
        {data.results.map((review) => <Review review={review} key={review.review_id} />)}
      </div>
    </div>
  );
}

export default ReviewList;

import React from 'react';
import StarView from '../../styled-components/common-elements.jsx';
import RatingsGraph from './RatingsGraph.jsx';
import ReviewList from './ReviewList.jsx';
import data from './exampleData.json';

function RatingsAndReviews() {
  // this is just example data, rating will come from request based on id passed as prop
  const [reviews, setReviews] = React.useState(data.results);
  const rating = 2.5;
  return (
    <div className="ratingsComponent" style={{ 'padding': '0 20px' }}>
      <h1 data-testid="text" style={{ 'textAlign': 'center' }}>Reviews</h1>
      <div style={
        {
          'display': 'flex',
          'justifyContent': 'space-between',
          'alignItems': 'center',
          'borderBottom': '1px solid grey',
        }
      }
      >
        <div>
          <span>2.5 </span>
          <StarView rating={rating} fontSize={20} />
          <RatingsGraph />
          <h3>Based on 150 reviews</h3>
          <h5>% of users recommend this product</h5>
        </div>
        <button
          type="submit"
          style={
          {
            'height': '40px',
            'border': 'none',
            'color': 'white',
            'background': 'black',
            'cursor': 'pointer',
          }
          }
        >
          Write Review
        </button>
      </div>
      <ReviewList reviews={reviews} />
    </div>
  );
}

export default RatingsAndReviews;

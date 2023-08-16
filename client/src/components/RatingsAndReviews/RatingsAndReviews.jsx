import React from 'react';
import StarView from '../../styled-components/common-elements.jsx';
import RatingsGraph from './RatingsGraph.jsx';
import ReviewList from './ReviewList.jsx';
import data from './exampleData.json';
import NewReview from './NewReview.jsx';

function RatingsAndReviews() {
  // this is just example data, rating will come from request based on id passed as prop
  const [reviews, setReviews] = React.useState(data.results);
  const [showForm, setShowForm] = React.useState(true);
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
          type="button"
          style={
          {
            'height': '40px',
            'border': 'none',
            'color': 'white',
            'background': 'black',
            'cursor': 'pointer',
          }
          }
          onClick={() => setShowForm((prev) => !prev)}
        >
          Write Review
        </button>
      </div>
      {showForm && <NewReview />}
      <ReviewList reviews={reviews} />
    </div>
  );
}

export default RatingsAndReviews;

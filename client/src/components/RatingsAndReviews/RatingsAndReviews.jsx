import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import StarView from '../../styled-components/common-elements.jsx';
import RatingsGraph from './RatingsGraph.jsx';
import ReviewList from './ReviewList.jsx';
import NewReview from './NewReview.jsx';
import { calculateAverage, calculateTotal, calculateRecommended } from './arithmetic.js';

function RatingsAndReviews({ currentProductID }) {
  const [reviews, setReviews] = React.useState([]);
  const [showForm, setShowForm] = React.useState(false);
  const [metaData, setMetaData] = React.useState({ recommended: { true: 1, false: 1 } });
  React.useEffect(() => {
    axios.get('/reviews', {
      params: {
        product_id: currentProductID,
      },
    })
      .then((response) => setReviews(response.data.results))
      .catch(() => {});
  }, [currentProductID]);
  React.useEffect(() => {
    axios.get('/reviews/meta', {
      params: {
        product_id: currentProductID,
      },
    })
      .then((response) => setMetaData(response.data))
      .catch(() => {});
  }, [currentProductID]);
  console.log(metaData)
  const renderForm = function () {
    setShowForm((prevView) => !prevView);
  };
  return (
    <div className="ratingsComponent" style={{ 'padding': '0 20px' }}>
      <h1 data-testid="title" style={{ 'textAlign': 'center' }}>Reviews</h1>
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
          <span>{`${calculateAverage(metaData.ratings)} `}</span>
          <StarView rating={calculateAverage(metaData.ratings)} fontSize={25} />
          <RatingsGraph />
          <h3>
            {`Based on ${calculateTotal(metaData.recommended)} reviews`}
          </h3>
          <h5>{`${calculateRecommended(metaData.recommended)}% of users recommend this product`}</h5>
        </div>
        <button
          data-testid="newReviewBtn"
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
      {showForm && <NewReview renderForm={renderForm} />}
      <ReviewList reviews={reviews} currentProductID={currentProductID} />
    </div>
  );
}

RatingsAndReviews.propTypes = {
  currentProductID: PropTypes.number.isRequired,
};

export default RatingsAndReviews;

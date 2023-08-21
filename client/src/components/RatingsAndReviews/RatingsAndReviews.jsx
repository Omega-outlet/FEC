import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  StarView, StyledButton, ModalWrapper, Modal, ModalContent
} from '../../styled-components/common-elements.jsx';
import RatingsGraph from './RatingsGraph.jsx';
import ReviewList from './ReviewList.jsx';
import NewReview from './NewReview.jsx';
import { calculateAverage, calculateTotal, calculatePercentage } from './arithmetic.js';
import CharacteristicsGraph from './CharacteristicsGraph.jsx';

function RatingsAndReviews({ currentProductID }) {
  const [reviews, setReviews] = React.useState([]);
  const [showForm, setShowForm] = React.useState(false);
  const [metaData, setMetaData] = React.useState('');

  React.useEffect(() => {
    axios.get('/reviews', {
      params: {
        product_id: currentProductID,
        count: 50,
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

  // eslint-disable-next-line func-names
  const renderForm = function () {
    setShowForm((prevView) => !prevView);
  };

  const submitForm = (formObj) => {
    axios.post('/reviews', formObj)
      .then((response) => console.log(response))
      .catch(() => {});
    // setShowForm((prev) => !prev);
  };

  return (
    <div className="ratingsComponent" style={{ 'padding': '0 40px' }}>
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
        {metaData && (
        <div style={{ 'width': '33%' }}>
          <div>
            <div style={{ 'display': 'flex', 'alignItems': 'flex-start' }}>
              <span style={{ 'fontSize': '25px', 'paddingRight': '10px' }}>{`${calculateAverage(metaData.ratings)} `}</span>
              <StarView rating={calculateAverage(metaData.ratings)} fontSize={20} />
            </div>
            <h3 style={{ 'marginTop': '0', 'fontWeight': 'lighter' }}>
              <i>{`Based on ${calculateTotal(metaData.recommended)} reviews`}</i>
            </h3>
            <RatingsGraph metaData={metaData.ratings} />
            <h5>{`${calculatePercentage(metaData.recommended, 'true')}% of users recommend this product`}</h5>
          </div>
        </div>
        )}
        {metaData && (
          <div style={{ 'width': '33%', 'marginTop': '-25px' }}>
            <CharacteristicsGraph metaData={metaData.characteristics} />
          </div>
        )}
        <div style={{ 'width': '33%', 'display': 'flex', 'justifyContent': 'flex-end' }}>
          <StyledButton
            onClick={() => setShowForm((prev) => !prev)}
            data-testid="newReviewBtn"
            type="button"
          >
            Write Review
          </StyledButton>

        </div>
      </div>
      {showForm
        &&
      (
        <ModalWrapper $displaymodal={showForm}>
          <Modal $displaymodal={showForm}>
            <h3>Your Review</h3>
            <ModalContent $displaymodal={showForm}>
              <NewReview
                renderForm={renderForm}
                submitForm={submitForm}
                currentProductID={currentProductID}
                characteristics={metaData.characteristics}
              />
            </ModalContent>
            <StyledButton data-testid="closeModal" type="button" onClick={() => setShowForm((prev) => !prev)}>Close</StyledButton>
          </Modal>
        </ModalWrapper>
      )}
      <ReviewList reviews={reviews} currentProductID={currentProductID} metaData={metaData} />
    </div>
  );
}

RatingsAndReviews.propTypes = {
  currentProductID: PropTypes.number.isRequired,
};

export default RatingsAndReviews;

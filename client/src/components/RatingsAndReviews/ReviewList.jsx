import React from 'react';
import PropTypes from 'prop-types';
import Review from './Review.jsx';
import {
  StyledButton, ModalWrapper, Modal, ModalContent,
} from '../../styled-components/common-elements.jsx';

function ReviewList({ reviews }) {
  const [displayedReviews, setDisplayedReviews] = React.useState(2);
  const [remainingReviews, setRemainingReviews] = React.useState(0);
  const [clickCount, setClickCount] = React.useState(0);
  const [displayModal, setDisplayModal] = React.useState(false);
  React.useEffect(() => setRemainingReviews(reviews.length - 2), [reviews]);
  // eslint-disable-next-line func-names
  const handleClick = function (e) {
    if (clickCount < 1) {
      e.preventDefault();
      setDisplayedReviews((prev) => prev + 2);
      setRemainingReviews((prev) => prev - 2);
      setClickCount((prev) => prev + 1);
    } else {
      setDisplayModal(true);
    }
  };
  React.useEffect(() => {
    if (displayModal) {
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
  }, [displayModal]);

  return (
    <div
      style={{ 'paddingTop': '20px' }}
      data-testid="reviewList-component"
    >
      <label htmlFor="dropdown">
        {'Sort By: '}
        <select id="dropdown">
          <option value="relevant">Relevant</option>
          <option value="helpful">Helpful</option>
          <option value="newest">Newest</option>
        </select>
      </label>
      <div style={{ 'paddingTop': '20px' }}>
        {
        reviews.length
          ?
          reviews.slice(0, displayedReviews).map((review) =>
            <Review key={review.review_id} review={review} />)
          : <h1>Be the first to add a review!</h1>
        }
      </div>
      <div style={{ 'display': 'flex', 'justifyContent': 'center' }}>
        { remainingReviews > 0 && (
        <StyledButton
          data-testid="reviewList-button"
          type="button"
          onClick={(e) => handleClick(e)}
        >
          Show More Reviews
        </StyledButton>
        )}
      </div>
      <ModalWrapper $displaymodal={displayModal}>
        <Modal $displaymodal={displayModal}>
          <h1 data-testid="reviewList-modal">Reviews</h1>
          <ModalContent $displaymodal={displayModal}>
            {
            reviews.length && reviews.map((review) =>
              <Review key={review.review_id} review={review} />)
            }
          </ModalContent>
          <StyledButton
            style={{ 'width': '150px' }}
            type="button"
            onClick={() => setDisplayModal(false)}
          >
            Close
          </StyledButton>
        </Modal>
      </ModalWrapper>
    </div>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    review_id: PropTypes.number.isRequired,
  })).isRequired,
};

export default ReviewList;

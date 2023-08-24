import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Review from './Review.jsx';
import {
  StyledButton, ModalWrapper, Modal, ModalContent,
} from '../../styled-components/common-elements.jsx';
import ThemeContext from '../ThemeContext.jsx';

function ReviewList({ reviews, filters, submitMessage, changeSortMethod }) {
  const [reviewsToRender, setReviewsToRender] = React.useState([]);
  const [displayModal, setDisplayModal] = React.useState(false);
  const [hiddenReviews, setHiddenReviews] = React.useState(0);
  const [displayedReviews, setDisplayedReviews] = React.useState(2);
  const { theme } = useContext(ThemeContext);
  React.useEffect(() => setReviewsToRender(reviews), [reviews]);
  // eslint-disable-next-line func-names
  const handleClick = function () {
    if (displayedReviews === 4) {
      setDisplayModal(true);
    } else {
      setDisplayedReviews((prev) => prev + 2);
    }
  };
  React.useEffect(() => {
    if (displayModal) {
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
  }, [displayModal]);

  React.useEffect(() => {
    // eslint-disable-next-line react/prop-types
    if (filters.length === 0) {
      setReviewsToRender(reviews);
    } else {
      setReviewsToRender(reviews.filter((review) => filters.includes(review.rating.toString())));
    }
  }, [filters, reviews]);

  React.useEffect(() => {
    setHiddenReviews(reviewsToRender.length - displayedReviews);
  }, [reviewsToRender]);

  return (
    <div
      style={{ 'paddingTop': '20px' }}
      data-testid="reviewList-component"
    >
      <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between' }}>
        <label htmlFor="dropdown">
          {'Sort By: '}
          <select id="dropdown" onChange={(e) => changeSortMethod(e.target.value)}>
            <option value="relevant">Relevant</option>
            <option value="helpful">Helpful</option>
            <option value="newest">Newest</option>
          </select>
        </label>
        {submitMessage && <h3 data-testid="confirmation">Thank you! Your review has been submitted</h3>}
        <div>
          <span>{'Filters: '}</span>
          {filters && filters.map((filter) => (<span key={filter}><strong>{`${filter} stars `}</strong></span>))}
        </div>
      </div>
      <div style={{ 'paddingTop': '20px' }}>
        {

        reviewsToRender.length
          ? reviewsToRender.slice(0, displayedReviews)
            .map((review) => <Review key={review.review_id} review={review} />)
          : <h1>Be the first to write a review!</h1>
        }
      </div>

      <div style={{ 'display': 'flex', 'justifyContent': 'center' }}>
        { hiddenReviews > 0 && (
        <StyledButton
          $theme={theme}
          data-testid="reviewList-button"
          type="button"
          onClick={(e) => handleClick(e)}
        >
          Show More Reviews
        </StyledButton>
        )}
      </div>
      <ModalWrapper $displaymodal={displayModal}>
        <Modal $displaymodal={displayModal} $theme={theme}>
          <h1 data-testid="reviewList-modal">Reviews</h1>
          <ModalContent $displaymodal={displayModal} $theme={theme}>
            {
            reviewsToRender.length
            && reviewsToRender.map((review) => <Review key={review.review_id} review={review} />)
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
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  submitMessage: PropTypes.bool.isRequired,
};

export default ReviewList;

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
import ThemeContext from '../ThemeContext.jsx';

function RatingsAndReviews({ currentProductID, metaData }) {
  const [reviews, setReviews] = React.useState([]);
  const [showForm, setShowForm] = React.useState(false);
  const [filters, setFilters] = React.useState([]);
  const [submitMessage, setSubmitMessage] = React.useState(false);
  const [sortBy, setSortBy] = React.useState('relevant');
  const { theme } = React.useContext(ThemeContext);

  React.useEffect(() => {
    axios.get('/reviews', {
      params: {
        product_id: currentProductID,
        count: 100,
      },
    })
      .then((response) => {
        if (sortBy === 'relevant') {
          setReviews(response.data.results);
        } else if (sortBy === 'helpful') {
          setReviews(response.data.results.sort((a, b) => b.helpfulness - a.helpfulness));
        } else if (sortBy === 'newest') {
          setReviews(response.data.results.sort((a, b) => new Date(b.date) - new Date(a.date)));
        }
      })
      .catch((err) => { console.log(err); });
  }, [currentProductID, submitMessage, sortBy]);
  // eslint-disable-next-line func-names

  const renderForm = function () {
    setShowForm((prevView) => !prevView);
  };

  const changeFilter = (value) => {
    const index = filters.indexOf(value);
    if (index > -1) {
      setFilters((prevFilters) => [...prevFilters.slice(0, index), ...prevFilters.slice(index + 1)])
    } else {
      setFilters((prevFilters) => [...prevFilters, value]);
    }
  };

  const submitForm = (formObj) => {
    axios.post('/reviews', formObj)
      .then((response) => console.log(response))
      .catch((err) => {console.log(err)});
    setSubmitMessage((prev) => !prev);
  };

  const changeSortMethod = function (value) {
    setSortBy(value);
  };

  return (
    <div className="ratingsComponent" id="ratingsComponent" style={{ 'padding': '40px 0' }} data-testid="testing">
      <h2 data-testid="title" style={{ 'paddingBottom': '40px' }}>Reviews</h2>
      <div style={
        {
          'display': 'flex',
          'justifyContent': 'space-between',
          'alignItems': 'center',
          'borderBottom': '1px solid grey',
          'height': '250px',
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
            <RatingsGraph metaData={metaData.ratings} changeFilter={changeFilter} />
            <h5>{`${calculatePercentage(metaData.recommended, 'true')}% of users recommend this product`}</h5>
          </div>
        </div>
        )}
        {metaData.characteristics && (
          <div style={{ 'width': '33%', 'marginTop': '-25px' }}>
            <CharacteristicsGraph metaData={metaData.characteristics} />
          </div>
        )}
        <div style={{ 'width': '33%', 'display': 'flex', 'justifyContent': 'flex-end' }}>
          <StyledButton
            $theme={theme}
            onClick={() => setShowForm((prev) => !prev)}
            data-testid="newReviewBtn"
            type="button"
            disabled={submitMessage}
          >
            Write Review
          </StyledButton>

        </div>
      </div>
      {showForm
        &&
      (
        <ModalWrapper $displaymodal={showForm}>
          <Modal $theme={theme} $displaymodal={showForm}>
            <h3>Your Review</h3>
            <ModalContent $theme={theme} $displaymodal={showForm}>
              <NewReview
                renderForm={renderForm}
                submitForm={submitForm}
                currentProductID={currentProductID}
                characteristics={metaData.characteristics}
              />
            </ModalContent>
            <StyledButton $theme={theme} data-testid="closeModal" type="button" onClick={() => setShowForm((prev) => !prev)}>Close</StyledButton>
          </Modal>
        </ModalWrapper>
      )}
      <ReviewList
        reviews={reviews}
        currentProductID={currentProductID}
        metaData={metaData}
        filters={filters}
        submitMessage={submitMessage}
        changeSortMethod={changeSortMethod}
      />
    </div>
  );
}

RatingsAndReviews.propTypes = {
  currentProductID: PropTypes.number.isRequired,
  // eslint-disable-next-line react/require-default-props
  metaData: PropTypes.oneOfType({
    characteristics: PropTypes.objectOf({
      Fit: PropTypes.objectOf({}),
      Length: PropTypes.objectOf({}),
      Comfort: PropTypes.objectOf({}),
      Quality: PropTypes.objectOf({}),
      Size: PropTypes.objectOf({}),
      Width: PropTypes.objectOf({}),
    }),
    product_id: PropTypes.number,
    ratings: PropTypes.objectOf({
      1: PropTypes.string,
      2: PropTypes.string,
      3: PropTypes.string,
      4: PropTypes.string,
      5: PropTypes.string,
    }),
    recommended: PropTypes.objectOf({
      false: PropTypes.string,
      true: PropTypes.string,
    }),
  }),
};

export default RatingsAndReviews;

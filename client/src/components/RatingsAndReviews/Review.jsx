import React from 'react';
import PropTypes from 'prop-types';
import CharacteristicsGraph from './CharacteristicsGraph.jsx';
import StarView from '../../styled-components/common-elements.jsx';

function Review({ review }) {
  const {
    body,
    date,
    helpfulness,
    photos,
    rating,
    recommend,
    reviewer_name,
    summary,
  } = review;
  return (
    <div style={
      {
        'display': 'flex',
        'justifyContent': 'space-between',
        'borderTop': '1px solid grey',
        'height': '200px',
        'alignItems': 'center',
      }
    }
    >
      <div
        className="first-column"
        style={{ 'borderRight': '1px solid grey', 'paddingRight': '20px' }}
      >
        <p>{reviewer_name}</p>
        <p>
          <CharacteristicsGraph />
        </p>
        <p>{recommend ? 'recommended' : 'not recommended'}</p>
      </div>
      <div className="second-column">
        <p>
          <StarView rating={rating} fontSize={20} />
          :
          {summary}
        </p>
        <p>
          {body}
        </p>
      </div>
      <div
        className="third-column"
        style={{ 'borderLeft': '1px solid grey', 'paddingLeft': '20px' }}
      >
        <p>Images Module</p>
        <p>{date}</p>
        <p>Upvote/Downvote</p>
      </div>
    </div>

  );
}

Review.propTypes = {
  review: PropTypes.objectOf(PropTypes.shape({
    body: PropTypes.string,
    date: PropTypes.string,
    helpfulness: PropTypes.number,
    // photos: PropTypes.,
    rating: PropTypes.number,
    recommend: PropTypes.bool,
    review_id: PropTypes.number,
    response: PropTypes.string,
    reviewer_name: PropTypes.string,
    summary: PropTypes.string,
  })).isRequired,
};

export default Review;

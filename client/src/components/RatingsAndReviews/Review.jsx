/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import useHelpfulYes from '../../../utils/useHelpfulYes.jsx';
import useReport from '../../../utils/useReport.jsx';
import { StarView } from '../../styled-components/common-elements.jsx';
import { reFormatDate } from '../../../utils/reFormatDate.js';
import HelpfulYesButton from '../../../utils/HelpfulYesButton.jsx';
import ReportButton from '../../../utils/ReportButton.jsx';

function Review({ review }) {
  const registerHelpfulClick = useHelpfulYes();
  const registerReportClick = useReport();
  const {
    reported,
    response,
    review_id,
    body,
    date,
    helpfulness,
    photos,
    rating,
    recommend,
    reviewer_name,
    summary,
  } = review;
  // console.log(photos)
  return (
    <div
      data-testid="review-component"
      style={
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
        <p><i>{recommend ? 'recommended' : 'not recommended'}</i></p>
        <ReportButton
          initialReported={reported}
          onReportClick={() => registerReportClick('review', review_id)}
        />
      </div>
      <div className="second-column" style={{'textWrap': 'wrap'}}>
        <StarView rating={rating} fontSize={20} />
        :
        {summary}
        <p>
          {body}
        </p>
        {response && <p style={{ 'color': 'red' }}><strong>{response}</strong></p>}
      </div>
      <div
        className="third-column"
        style={{ 'borderLeft': '1px solid grey', 'paddingLeft': '20px' }}
      >
        {!photos.length ? '' : photos.map((photo) => <img style={{'width': '50px'}} src={photo.url} alt="uploaded by reviewer" />)}
        <p>{reFormatDate(date)}</p>
        <div style={{'display': 'flex', 'flexDirection': 'column'}}>
          <HelpfulYesButton
            initialCount={helpfulness}
            onHelpfulClick={() => registerHelpfulClick('review', review_id)}
          />
        </div>
      </div>
    </div>
  );
}

Review.propTypes = {
  review: PropTypes.shape({
    body: PropTypes.string,
    date: PropTypes.string,
    helpfulness: PropTypes.number,
    photos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      url: PropTypes.string,
    })),
    rating: PropTypes.number,
    recommend: PropTypes.bool,
    review_id: PropTypes.number,
    response: PropTypes.string,
    reviewer_name: PropTypes.string,
    summary: PropTypes.string,
    reported: PropTypes.bool,
  }).isRequired,
};

export default Review;

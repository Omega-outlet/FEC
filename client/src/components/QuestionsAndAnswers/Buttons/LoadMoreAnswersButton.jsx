import React from 'react';
import PropTypes from 'prop-types';

function LoadMoreAnswersButton({ onClick, hasMoreAnswers }) {
  // if false, return null. Nothing will be rendered.
  if (!hasMoreAnswers) return null;

  return (
    <button type="button" onClick={onClick}>Load More Answers</button>
  );
}

LoadMoreAnswersButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  hasMoreAnswers: PropTypes.bool.isRequired,
};

export default LoadMoreAnswersButton;
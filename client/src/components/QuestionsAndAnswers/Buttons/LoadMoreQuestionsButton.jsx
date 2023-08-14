import React from 'react';
import PropTypes from 'prop-types';

function LoadMoreQuestionsButton({ onClick, hasMoreQuestions }) {
  // if false, return null. Nothing will be rendered.
  if (!hasMoreQuestions) return null;

  return (
    <button type="button" onClick={onClick}>MORE ANSWERED QUESTIONS</button>
  );
}

LoadMoreQuestionsButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  hasMoreQuestions: PropTypes.bool.isRequired,
};

export default LoadMoreQuestionsButton;
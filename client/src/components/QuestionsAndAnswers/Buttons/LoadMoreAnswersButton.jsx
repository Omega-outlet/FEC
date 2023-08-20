import React from 'react';
import PropTypes from 'prop-types';
import { LoadMoreAnswerButton } from '../styled-components/Buttons.styles.jsx';

function LoadMoreAnswersButton({ onClick, hasMoreAnswers }) {
  // if false, return null. Nothing will be rendered.
  if (!hasMoreAnswers) return null;

  return (
    <LoadMoreAnswerButton type="button" onClick={onClick}>Load More Answers</LoadMoreAnswerButton>
  );
}

LoadMoreAnswersButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  hasMoreAnswers: PropTypes.bool.isRequired,
};

export default LoadMoreAnswersButton;
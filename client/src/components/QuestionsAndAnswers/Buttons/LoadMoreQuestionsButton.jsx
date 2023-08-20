import React from 'react';
import PropTypes from 'prop-types';
import { RoundedPulseButton } from '../styled-components/Buttons.styles.jsx';

function LoadMoreQuestionsButton({ onClick, hasMoreQuestions }) {
  // if false, return null. Nothing will be rendered.
  if (!hasMoreQuestions) return null;

  return (
    <RoundedPulseButton type="button" onClick={onClick}>MORE ANSWERED QUESTIONS</RoundedPulseButton>
  );
}

LoadMoreQuestionsButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  hasMoreQuestions: PropTypes.bool.isRequired,
};

export default LoadMoreQuestionsButton;
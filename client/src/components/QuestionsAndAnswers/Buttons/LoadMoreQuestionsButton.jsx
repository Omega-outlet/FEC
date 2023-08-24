import React from 'react';
import PropTypes from 'prop-types';
import { RoundedPulseButton } from '../styled-components/Buttons.styles.jsx';
import { StyledButton } from '../../../styled-components/common-elements.jsx';

function LoadMoreQuestionsButton({ onClick, hasMoreQuestions }) {
  // if false, return null. Nothing will be rendered.
  if (!hasMoreQuestions) return null;

  return (
    <StyledButton type="button" onClick={onClick}>MORE ANSWERED QUESTIONS</StyledButton>
  );
}

LoadMoreQuestionsButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  hasMoreQuestions: PropTypes.bool.isRequired,
};

export default LoadMoreQuestionsButton;
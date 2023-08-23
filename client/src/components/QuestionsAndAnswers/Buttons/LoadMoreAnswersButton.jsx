import React from 'react';
import PropTypes from 'prop-types';
import { LoadMoreAnswerButton } from '../styled-components/Buttons.styles.jsx';

function LoadMoreAnswersButton({ onClick, expanded }) {
  return (
    <LoadMoreAnswerButton type="button" onClick={onClick}>{expanded ? 'Collapse answers' : 'See more answers'}</LoadMoreAnswerButton>
  );
}

LoadMoreAnswersButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
};

export default LoadMoreAnswersButton;
import React from 'react';
import PropTypes from 'prop-types';

function AskQuestionButton({ onClick }) {
  return (
    <button type="button" onClick={onClick}>
      ADD A QUESTION
    </button>
  );
}

AskQuestionButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AskQuestionButton;
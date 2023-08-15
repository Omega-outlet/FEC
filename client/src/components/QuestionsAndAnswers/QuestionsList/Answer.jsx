import React from 'react';
import PropTypes from 'prop-types';
import { reFormatDate } from '../../../../utils/reFormatDate.js';

function Answer({ answer }) {
  return (
    <li>
      <h4>A</h4>
      <p>{answer.body}</p>
      <p>{`Answered by ${answer.answerer_name}, ${reFormatDate(answer.date)}`}</p>
    </li>
  );
}

Answer.propTypes = {
  answer: PropTypes.shape({
    date: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    answerer_name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Answer;

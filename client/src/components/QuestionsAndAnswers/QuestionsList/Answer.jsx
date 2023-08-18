import React from 'react';
import PropTypes from 'prop-types';
import { reFormatDate } from '../../../../utils/reFormatDate.js';
import HelpfulYesButton from '../../../../utils/HelpfulYesButton.jsx';
import useHelpfulYes from '../../../../utils/useHelpfulYes.jsx';

function Answer({ answer }) {
  const registerHelpfulClick = useHelpfulYes();
  return (
    <li>
      <p>
        <strong>A: </strong>
        {answer.body}
      </p>
      <p>
        Answered by
        {' '}
        {answer.answerer_name === 'Seller' ? <strong>{answer.answerer_name}</strong> : answer.answerer_name}
        ,
        {' '}
        {reFormatDate(answer.date)}
      </p>
      <HelpfulYesButton
        initialCount={answer.helpfulness}
        onHelpfulClick={() => registerHelpfulClick('answers', answer.id)}
      />
    </li>
  );
}

Answer.propTypes = {
  answer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    helpfulness: PropTypes.number,
    date: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    answerer_name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Answer;

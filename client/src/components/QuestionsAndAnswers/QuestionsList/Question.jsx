import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { reFormatDate } from '../../../../utils/reFormatDate.js';
import Answer from './Answer.jsx';
import LoadMoreAnswersButton from '../Buttons/LoadMoreAnswersButton.jsx';

function Question({ question }) {
  // On pageload, 2 answers show up per questions
  const AnswersLoadOnPage = 2;
  const [numAnswersShowed, setNumAnswersShowed] = useState(AnswersLoadOnPage);

  const handleLoadMore = () => {
    setNumAnswersShowed((prev) => prev + 2);
  };
  return (
    <li>
      <p>Who asked the question?</p>
      <p>{`Asked by ${question.asker_name}, ${reFormatDate(question.question_date)}`}</p>
      <h4>Q</h4>
      <p data-testid="question-body">{question.question_body}</p>
      <p>Helpful?</p>
      <ul>
        {Object.values(question.answers).slice(0, numAnswersShowed).map((answer) => (
          <Answer key={answer.id} answer={answer} />
        ))}
      </ul>
      <LoadMoreAnswersButton
        onClick={handleLoadMore}
        hasMoreAnswers={Object.values(question.answers).length > numAnswersShowed}
      />
    </li>
  );
}

Question.propTypes = {
  question: PropTypes.shape({
    asker_name: PropTypes.string.isRequired,
    question_date: PropTypes.string.isRequired,
    question_body: PropTypes.string.isRequired,
    answers: PropTypes.objectOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
};

export default Question;
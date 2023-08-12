import React from 'react';
import PropTypes from 'prop-types';
import { sortByHelp } from '../../../utils/sortHelp.js'
import { reFormatDate } from '../../../utils/reFormatDate.js';

function QuestionsList({ questions }) {
  const sortedQuestions = sortByHelp(questions);
  const defaultFourQuestions = sortedQuestions.slice(0, 4);

  return (
    <div>
      <ul>
        {defaultFourQuestions.map((question) => (
          <li key={question.question_id}>
            <p>Who asked the question?</p>
            <p>{`Asked by ${question.asker_name}, ${reFormatDate(question.question_date)}` }</p>
            <h4>Q</h4>
            <p>{question.question_body}</p>
            <p>Helpful?</p>
            <ul>
              {Object.values(question.answers).slice(0, 2).map((answer) => (
                <li key={answer.id}>
                  <p>{answer.body}</p>
                  <p>{`Answered by ${answer.answerer_name}, ${reFormatDate(answer.date)}`}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

QuestionsList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    question_id: PropTypes.number.isRequired,
    question_body: PropTypes.string.isRequired,
    question_date: PropTypes.string.isRequired,
    asker_name: PropTypes.string.isRequired,
    answers: PropTypes.objectOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      data: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      answerer_name: PropTypes.string.isRequired,
    })).isRequired,
  })).isRequired,
};

export default QuestionsList;

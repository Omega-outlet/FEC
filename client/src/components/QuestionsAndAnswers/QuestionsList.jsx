import React from 'react';
import PropTypes from 'prop-types';

function QuestionsList({ questions }) {
  const defaultFourQuestions = questions.slice(0, 4);

  return (
    <div>
      <ul>
        {defaultFourQuestions.map((question) => (
          <li key={question.question_id}>
            <p>Who asked the question?</p>
            <p>{`Asked by ${question.asker_name}`}</p>
            <ul>
              {Object.values(question.answers).slice(0, 2).map((answer) => (
                <li key={answer.id}>
                  <p>{answer.body}</p>
                  <p>{`Answered by ${answer.answerer_name}`}</p>
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
    asker_name: PropTypes.string.isRequired,
    answers: PropTypes.objectOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      body: PropTypes.string.isRequired,
      answerer_name: PropTypes.string.isRequired,
    })).isRequired,
  })).isRequired,
};

export default QuestionsList;

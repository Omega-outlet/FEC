import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { reFormatDate } from '../../../../utils/reFormatDate.js';
import Answer from './Answer.jsx';
import LoadMoreAnswersButton from '../Buttons/LoadMoreAnswersButton.jsx';
import { QuestionDetailsList, AskerDetailsContainer,
  QuestionAndAnswersContainer, QuestionBodyAndHelpfulContainer, AnswerListContainer } from '../styled-components/QuestionsAndAnswers.styles.jsx';
import HelpfulYesButton from '../../../../utils/HelpfulYesButton.jsx';
import useHelpfulYes from '../../../../utils/useHelpfulYes.jsx';

function Question({ question }) {
  const registerHelpfulClick = useHelpfulYes();
  // On pageload, 2 answers show up per questions
  const AnswersLoadOnPage = 2;
  const [numAnswersShowed, setNumAnswersShowed] = useState(AnswersLoadOnPage);

  const handleLoadMore = () => {
    setNumAnswersShowed((prev) => prev + 2);
  };
  return (
    <QuestionDetailsList>
      <AskerDetailsContainer>
        <p>Question asked by</p>
        <p>{`${question.asker_name}, ${reFormatDate(question.question_date)}`}</p>
      </AskerDetailsContainer>
      <QuestionAndAnswersContainer>
        <QuestionBodyAndHelpfulContainer>
          <p data-testid="question-body">
            <strong>
              {`Q: ${question.question_body}`}
            </strong>
          </p>
          <HelpfulYesButton
            initialCount={question.question_helpfulness}
            onHelpfulClick={() => registerHelpfulClick('questions', question.question_id)}
          />
        </QuestionBodyAndHelpfulContainer>
        <AnswerListContainer>
          {Object.values(question.answers).slice(0, numAnswersShowed).map((answer) => (
            <Answer key={answer.id} answer={answer} />
          ))}
        </AnswerListContainer>
        <LoadMoreAnswersButton
          onClick={handleLoadMore}
          hasMoreAnswers={Object.values(question.answers).length > numAnswersShowed}
        />
      </QuestionAndAnswersContainer>
    </QuestionDetailsList>
  );
}

Question.propTypes = {
  question: PropTypes.shape({
    asker_name: PropTypes.string.isRequired,
    question_id: PropTypes.number.isRequired,
    question_helpfulness: PropTypes.number,
    question_date: PropTypes.string.isRequired,
    question_body: PropTypes.string.isRequired,
    answers: PropTypes.objectOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
};

export default Question;
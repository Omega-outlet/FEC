import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { sortByHelpQuestion } from '../utils/sortHelp.js';
import Question from './Question.jsx';
import LoadMoreQuestionsButton from '../Buttons/LoadMoreQuestionsButton.jsx';
import AddNewQuestionButton from '../Buttons/AddNewQuestionButton.jsx';
import { QuestionList, LoadMoreAndAddNewButtonContainer } from '../styled-components/QuestionsAndAnswers.styles.jsx';

function QuestionsList({ questions, onHandleAddQuestion }) {
  // fake data for now, need current product name
  const [productName, setProductName] = useState('Space Ship 123');
  const sortedQuestions = sortByHelpQuestion(questions);
  // On page load, 2 questions will show up
  const QuestionsLoadOnPage = 2;
  const [numQuestionsShowed, setNumQuestionshowed] = useState(QuestionsLoadOnPage);

  const handleShowMore = () => {
    setNumQuestionshowed((prev) => prev + 2);
  };

  return (
    <div>
      {/* {questions.length === 0
       && <AddNewQuestionButton onClick={onHandleAddQuestion} />} */}
      <QuestionList>
        {sortedQuestions.slice(0, numQuestionsShowed).map((question) => (
          <Question key={question.question_id} question={question} />
        ))}
        <LoadMoreAndAddNewButtonContainer>
          <LoadMoreQuestionsButton
            onClick={handleShowMore}
            hasMoreQuestions={numQuestionsShowed < sortedQuestions.length}
          />
          <AddNewQuestionButton
            productName={productName}
            onHandleAddQuestion={onHandleAddQuestion}
          />
        </LoadMoreAndAddNewButtonContainer>
      </QuestionList>
    </div>
  );
}

QuestionsList.propTypes = {
  onHandleAddQuestion: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(PropTypes.shape({
    question_id: PropTypes.number.isRequired,
  })).isRequired,
};

export default QuestionsList;

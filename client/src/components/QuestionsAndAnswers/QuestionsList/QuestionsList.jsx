import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { sortByHelpQuestion } from '../utils/sortHelp.js';
import Question from './Question.jsx';
import LoadMoreQuestionsButton from '../Buttons/LoadMoreQuestionsButton.jsx';
import AddNewQuestionButton from '../Buttons/AddNewQuestionButton.jsx';
import { QuestionList } from '../styled-components/QuestionsAndAnswers.styles.jsx';

function QuestionsList({ questions }) {
  const sortedQuestions = sortByHelpQuestion(questions);
  // On page load, 2 questions will show up
  const QuestionsLoadOnPage = 2;
  const [numQuestionsShowed, setNumQuestionshowed] = useState(QuestionsLoadOnPage);

  const handleShowMore = () => {
    setNumQuestionshowed((prev) => prev + 2);
  };

  const handleAddNewQuestion = () => {
    console.log('TEST');
  };

  return (
    <div>
      {questions.length === 0
       && <AddNewQuestionButton onClick={handleAddNewQuestion} />}
      <QuestionList>
        {sortedQuestions.slice(0, numQuestionsShowed).map((question) => (
          <Question key={question.question_id} question={question} />
        ))}
        <LoadMoreQuestionsButton
          onClick={handleShowMore}
          hasMoreQuestions={numQuestionsShowed < sortedQuestions.length}
        />
        <AddNewQuestionButton onClick={handleAddNewQuestion} />
      </QuestionList>
    </div>
  );
}

QuestionsList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    question_id: PropTypes.number.isRequired,
  })).isRequired,
};

export default QuestionsList;

import React, { useState } from 'react';
import QuestionsList from './QuestionsList/QuestionsList.jsx';
import dummyData from './dummyData.js';

function QuestionsAndAnswers() {
  const [questions, setQuestions] = useState(dummyData.results);
  return (
    <div>
      <QuestionsList questions={questions} />
    </div>
  );
}

export default QuestionsAndAnswers;
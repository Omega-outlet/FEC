import React, { useState } from 'react';
import QuestionsList from './QuestionsList.jsx';
import dummyData from './dummyData.js';

function QuestionsAndAnswers() {
  const [questions, setQuestions] = useState(dummyData.questions.results);
  return (
    <div>
      <QuestionsList questions={questions} />
    </div>
  );
}

export default QuestionsAndAnswers;

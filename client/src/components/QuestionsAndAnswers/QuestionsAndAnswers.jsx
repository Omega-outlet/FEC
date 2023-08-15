import React, { useState } from 'react';
import QuestionsList from './QuestionsList/QuestionsList.jsx';
import dummyData from './dummyData.js';
import SearchBar from './Buttons/SearchBar.jsx';

function QuestionsAndAnswers() {
  const [questions, setQuestions] = useState(dummyData.results);
  const [filteredQuestions, setFilteredQuestions] = useState(questions);

  const handleSearch = (query) => {
    if (query) {
      const filteredResults = questions.filter((question) => question.question_body.toLowerCase()
        .includes(query.toLowerCase()));
      setFilteredQuestions(filteredResults);
    } else {
      setFilteredQuestions(questions);
    }
  };
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <QuestionsList questions={filteredQuestions} />
    </div>
  );
}

export default QuestionsAndAnswers;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionsList from './QuestionsList/QuestionsList.jsx';
import SearchBar from './Buttons/SearchBar.jsx';
import { QAContainer } from './styled-components/QuestionsAndAnswers.styles.jsx';

function QuestionsAndAnswers(currentProductID) {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  const productId = 40353;
  useEffect(() => {
    axios.get('/questions', {
      params: {
        product_id: productId,
        count: 100,
      },
    })
      .then((res) => {
        setQuestions(res.data.results);
        setFilteredQuestions(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
    <QAContainer>
      <SearchBar onSearch={handleSearch} />
      <QuestionsList questions={filteredQuestions} />
    </QAContainer>
  );
}

export default QuestionsAndAnswers;

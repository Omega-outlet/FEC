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
  const handleAddNewQuestion = (questionFormData) => {
    axios.post('/qa/questions', {
      body: questionFormData.question,
      name: questionFormData.nickname,
      email: questionFormData.email,
      product_id: productId,
    })
      .then((res) => {
        console.log('New Question added:', res.data);
      })
      .catch((err) => console.log('Error adding question:', err));
  };
  return (
    <QAContainer>
      <SearchBar onSearch={handleSearch} />
      <QuestionsList questions={filteredQuestions} onHandleAddQuestion={handleAddNewQuestion} />
    </QAContainer>
  );
}

export default QuestionsAndAnswers;

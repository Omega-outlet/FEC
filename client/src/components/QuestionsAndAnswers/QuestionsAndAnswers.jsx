import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import QuestionsList from './QuestionsList/QuestionsList.jsx';
import SearchBar from './Buttons/SearchBar.jsx';
import { QAContainer, NoQuestionImage, ImageAndButtonContainer, ScrollableContainer } from './styled-components/QuestionsAndAnswers.styles.jsx';
import AddNewQuestionButton from './Buttons/AddNewQuestionButton.jsx';
import anyQuestion from '../../../dist/assets/anyQuestion.png';

function QuestionsAndAnswers({ currentProduct, currentProductID }) {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [hasSearchTerm, setHasSearchTerm] = useState(false);
  const fetchQuestions = () => {
    axios.get('/questions', {
      params: {
        product_id: currentProductID,
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
  };

  useEffect(() => {
    fetchQuestions();
  }, [currentProductID]);

  const handleSearch = (query) => {
    setSearchTerm(query);
    if (query) {
      const filteredResults = questions.filter((question) => question.question_body.toLowerCase()
        .includes(query.toLowerCase()));
      setFilteredQuestions(filteredResults);
      setHasSearchTerm(filteredResults.length === 0);
    } else {
      setFilteredQuestions(questions);
      setHasSearchTerm(false);
    }
  };
  const handleAddNewQuestion = (questionFormData) => {
    axios.post('/qa/questions', {
      body: questionFormData.question,
      name: questionFormData.nickname,
      email: questionFormData.email,
      product_id: currentProductID,
    })
      .then((res) => {
        console.log('New Question added:', res.data);
        fetchQuestions();
      })
      .catch((err) => console.log('Error adding question:', err));
  };
  return (
    <QAContainer>
      {questions.length === 0 && (
        <>
          <h2>No Questions For This Product</h2>
          <AddNewQuestionButton
            productName={currentProduct.name}
            onHandleAddQuestion={handleAddNewQuestion}
          />
        </>
      )}
      {questions.length > 0 && (
        <ScrollableContainer>
          <SearchBar onSearch={handleSearch} />
          {hasSearchTerm ? (
            <ImageAndButtonContainer>
              <NoQuestionImage src={anyQuestion} alt="No results found" />
              <AddNewQuestionButton
                productName={currentProduct.name}
                onHandleAddQuestion={handleAddNewQuestion}
              />
            </ImageAndButtonContainer>
          ) : (
            <QuestionsList
              productName={currentProduct.name}
              questions={filteredQuestions}
              onHandleAddQuestion={handleAddNewQuestion}
              searchTerm={searchTerm}
            />
          )}
        </ScrollableContainer>
      )}
    </QAContainer>
  );
}

QuestionsAndAnswers.propTypes = {
  currentProductID: PropTypes.number.isRequired,
  currentProduct: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default QuestionsAndAnswers;

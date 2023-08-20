import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputLabel, TextInput } from '../styled-components/Modal.styles.jsx';
import { RoundedPulseButton } from '../styled-components/Buttons.styles.jsx';

function QuestionForm({ productName, onSubmit, onCancel }) {
  const [question, setQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const handleSubmit = () => {
    if (!question || !nickname || !email) {
      setErrorMessage('Please fill out all mandatory fields.');
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    onSubmit({ question, nickname, email });
  };
  return (
    <div>
      {/* if errormessage is true show it */}
      {errorMessage && <div>{errorMessage}</div>}
      <h2>Ask Your Question</h2>
      <h4>
        About the
        {' '}
        {productName}
      </h4>
      <InputLabel>
        Your Question (mandatory)
        <TextInput
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          maxLength={1000}
          placeholder="Why did you like the product or not?"
        />
      </InputLabel>
      <InputLabel>
        What is your nickname (mandatory)
        <TextInput
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          maxLength={60}
          placeholder="Example: jackson11!"
        />
        <div>For privacy reasons, do not use your full name or email address</div>
      </InputLabel>
      <InputLabel>
        Your email (mandatory)
        <TextInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          maxLength={60}
          placeholder="Example: jackson11@email.com"
        />
        <div>For authentication reasons, you will not be emailed</div>
      </InputLabel>
      <RoundedPulseButton type="button" onClick={handleSubmit}>SUBMIT QUESTION</RoundedPulseButton>
      <RoundedPulseButton type="button" onClick={onCancel}>CANCEL</RoundedPulseButton>
    </div>
  );
};
QuestionForm.propTypes = {
  productName: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
export default QuestionForm;

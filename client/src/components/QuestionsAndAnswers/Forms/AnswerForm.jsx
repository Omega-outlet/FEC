import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputLabel, TextInput } from '../styled-components/Modal.styles.jsx';
import { RoundedPulseButton } from '../styled-components/Buttons.styles.jsx';

function AnswerForm({productName, questionBody, onSubmit, onCancel}) {
  const [body, setBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  // An array of urls corresponding to images to display
  const [photos, setPhotos] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = () => {
    if (!body || !nickname || !email) {
      setErrorMessage('Please fill out all mandatory fields.');
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    onSubmit({
      body, nickname, email, photos,
    });
  };

  return (
    <div>
      {/* if errormessage is true show it */}
      {errorMessage && <div>{errorMessage}</div>}
      <h2>Submit your Answer</h2>
      <h4>
        {' '}
        {productName}
        :
        {' '}
        {questionBody}
      </h4>
      <InputLabel>
        Your Answer (mandatory)
        <TextInput
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          maxLength={1000}
          placeholder="Please add a written answer"
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
      <button type="button">Upload Photo(Not functional yet)</button>
      <RoundedPulseButton type="button" onClick={handleSubmit}>SUBMIT ANSWER</RoundedPulseButton>
      <RoundedPulseButton type="button" onClick={onCancel}>CANCEL</RoundedPulseButton>
    </div>
  );
};
AnswerForm.propTypes = {
  productName: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
export default AnswerForm;

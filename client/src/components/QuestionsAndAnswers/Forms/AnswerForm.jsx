import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { InputLabel, TextInput, ImageInput, UrlButton, InputWithButtonContainer, ModalButtonContainer, WarningMessageContainer, CustomChooseFileInput, CustomFileInputLabel } from '../styled-components/Modal.styles.jsx';
import { RoundedPulseButton } from '../styled-components/Buttons.styles.jsx';
import { ThumbnailImg, AnswerFormContainer } from '../styled-components/QuestionsAndAnswers.styles.jsx';
import ImageModal from './ImageModal.jsx';
import config from '../../../../../config.js';
import ThemeContext from '../../ThemeContext.jsx';

function AnswerForm({ productName, questionBody, onSubmit, onCancel }) {
  const { theme } = useContext(ThemeContext);
  const [body, setBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [photos, setPhotos] = useState([]);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

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

  const handleImageUrlSubmit = () => {
    if (photos.length >= 5) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!imageUrl.includes('.')) {
      setErrorMessage('Please enter a valid image url address.');
      return;
    }

    if (imageUrl) {
      setPhotos((prevUrls) => [...prevUrls, imageUrl]);
      setImageUrl('');
    } else {
      setErrorMessage('Please provide a valid image URL.');
    }
  };

  const uploadToImgbb = (imageFile) => {
    const formData = new FormData();
    formData.append('image', imageFile);
    axios.post('https://api.imgbb.com/1/upload', formData, {
      params: {
        key: config.imgbbApiKey,
      },
    })
      .then((response) => {
        const uploaded = response.data.data.url;
        setPhotos((prev) => [...prev, uploaded]);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage('Error uploading image. Please try again.');
      });
  };

  const handleLocalImageChange = (e) => {
    const imageFile = e.target.files[0];
    if (imageFile) {
      uploadToImgbb(imageFile);
    }
  };

  const handleImageClick = (url) => {
    setCurrentImage(url);
    setIsImageModalOpen(true);
  };

  return (
    <AnswerFormContainer $theme={theme}>
      {errorMessage && <WarningMessageContainer>{errorMessage}</WarningMessageContainer>}
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
      <InputLabel>
        Add image url
        <InputWithButtonContainer>
          <ImageInput
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Enter the direct link to your image"
          />
          <UrlButton type="button" onClick={handleImageUrlSubmit}>
            Add URL
          </UrlButton>
        </InputWithButtonContainer>
      </InputLabel>
      <div>
        {photos.map((url, i) => (
          <ThumbnailImg
            key={i}
            src={url}
            alt={`Image-${i}`}
            onClick={() => handleImageClick(url)}
          />
        ))}
      </div>
      <InputLabel>
        <CustomChooseFileInput type="file" onChange={handleLocalImageChange} id="uploadInput" />
        <CustomFileInputLabel htmlFor="uploadInput">Upload images</CustomFileInputLabel>
      </InputLabel>
      <ModalButtonContainer>
        <RoundedPulseButton type="button" onClick={handleSubmit}>SUBMIT ANSWER</RoundedPulseButton>
        <RoundedPulseButton type="button" onClick={onCancel}>CANCEL</RoundedPulseButton>
      </ModalButtonContainer>
      {isImageModalOpen
        && <ImageModal imageUrl={currentImage} onClose={() => setIsImageModalOpen(false)} />}
    </AnswerFormContainer>
  );
};
AnswerForm.propTypes = {
  productName: PropTypes.string.isRequired,
  questionBody: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
export default AnswerForm;

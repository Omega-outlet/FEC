import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { StyledButton } from '../../styled-components/common-elements.jsx';
import descriptionArr from './descriptionArr.js';
import ThemeContext from '../ThemeContext.jsx';

// eslint-disable-next-line object-curly-newline
function NewReview({ renderForm, currentProductID, submitForm, characteristics }) {
  const { theme } = React.useContext(ThemeContext);
  const radioArray = [1, 2, 3, 4, 5];
  const [charArray, setCharArray] = React.useState([]);
  const [photoURL, setPhotoUrl] = React.useState('');

  const [formData, setFormData] = React.useState({
    product_id: currentProductID,
    rating: '',
    summary: '',
    body: '',
    recommend: '',
    name: '',
    email: '',
    photos: [],
    characteristics: {
    },
  });

  React.useEffect(() => {
    setCharArray(Object.entries(characteristics));
  }, [characteristics]);

  const convertData = (obj) => {
    // eslint-disable-next-line prefer-const
    let { name, value } = obj;
    if (name === 'rating') {
      return Number(value);
    }
    if (name === 'recommend') {
      if (value === 'true') {
        return true;
      }
      return false;
    }
    return value;
  };

  const handleChange = (level) => (e) => {
    const { name, value } = e.target;
    if (name === 'photos') {
      // const photos = [value]
      setFormData((prev) => ({ ...prev, photos: [...prev.photos, (value)] }));
    } else if (!level) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: convertData(e.target),
      }));
    } else {
      setFormData({
        ...formData,
        [level]: {
          ...formData[level],
          [name]: Number(value),
        },
      });
    }
  };

  const renderRadios = (arr, characteristicId) => (
    arr.map((number) => (
      <input
        style={{ 'width': '20%' }}
        type="radio"
        value={number}
        name={characteristicId}
        onChange={handleChange('characteristics')}
        required
        key={characteristicId + number}
      />
    )));

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
    renderForm();
  };


  return (
    <form onSubmit={(e) => handleSubmit(e)} data-testid="newReviewForm" style={{ 'fontColor': 'black' }}>
      <label htmlFor="rating">
        {'Rating: '}
        <div>
          {radioArray.map((num) => {
            if (num <= formData.rating) {
              return <SelectedStar $theme={theme} key={num} name="rating" value={num} onMouseOver={handleChange()} type="button">★</SelectedStar>;
            }
            return <SelectedStar $theme={theme} key={num} name="rating" value={num} onMouseOver={handleChange()} type="button">☆</SelectedStar>;
          })}
          {formData.rating && <span>{`${formData.rating} stars`}</span>}
        </div>
      </label>
      <br />

      <legend>Would you recommend this product?</legend>
      <label htmlFor="yes">
        {'Yes: '}
        <input type="radio" value="true" name="recommend" onChange={handleChange()} required />
      </label>
      <label htmlFor="no">
        {'No: '}
        <input type="radio" value="false" name="recommend" onChange={handleChange()} />
      </label>
      <div style={{ 'height': '10px' }} />
      <fieldset>
        <legend>Characteristics</legend>
        {charArray.map((characteristic) => (
          <RadioStyle key={characteristic[0]}>
            <legend style={{ 'width': '70px' }}>{characteristic[0]}</legend>
            <div style={{ 'width': '100%' }}>
              <div style={{ 'display': 'flex', 'justifyContent': 'space-between'}}>
                {descriptionArr.filter((descObj) => (descObj.attribute === characteristic[0].toLowerCase()))[0].descArr.map((feedback) => <span key={feedback} style={{ 'fontSize': '10px', 'width': '20%', 'textAlign': 'center' }}>{feedback}</span>)}
              </div>
              <div style={{ 'display': 'flex', 'justifyContent': 'space-between'}}>
                {renderRadios(radioArray, characteristic[1].id)}
              </div>
            </div>
          </RadioStyle>
        ))}
      </fieldset>
      <LineSkip />
      <div style={{'display': 'flex'}}>
        <div className="leftside" style={{ 'width': '50%'}}>
          <label htmlFor="summary">
            Review Summary:
            <br />
            <StyledInput
              type="text"
              placeholder="Example: Best purchase ever!"
              id="summary"
              maxLength="60"
              name="summary"
              onChange={handleChange()}
              required
            />
            <br />
            <InputDescription>{`${formData.summary.length}/60`}</InputDescription>
          </label>
          <LineSkip />
          <label htmlFor="username">
            Display Name:
            <br />
            <StyledInput
              type="text"
              id="username"
              name="name"
              onChange={handleChange()}
              placeholder="Example: jackson11!"
              required
            />
            <br />
            <InputDescription>
              For privacy reasons, do not use your full name or email address\
            </InputDescription>
          </label>
          <LineSkip />
          <label htmlFor="email">
            Email:
            <br />
            <StyledInput
              type="email"
              placeholder="Example: jackson11@email.com"
              id="email"
              name="email"
              onChange={handleChange()}
              required
            />
            <br />
            <InputDescription>For authentication reasons, you will not be emailed</InputDescription>
          </label>
          <LineSkip />
          <label htmlFor="photos">
            Photos
            <br />
            <StyledInput type="text" onChange={(e) => setPhotoUrl(e.target.value)} placeholder="Example: cool-photo.jpg" />
            <br />
            <InputDescription>You can submit up to 5 photos</InputDescription>
            <br />
            {formData.photos.length < 5 && <StyledButton $theme={theme} type="button" value={photoURL} name="photos" onClick={handleChange()}>Add photo</StyledButton>}
          </label>
          <br />
        </div>
        <div className="rightside" style={{ 'width': '50%'}}>
          <label htmlFor="reviewBody">
            Review:
            <br />
            <StyledTextArea
              id="reviewBody"
              placeholder="Why did you like the product or not?"
              name="body"
              onChange={handleChange()}
              minLength={50}
              required
            />
            <br />
            <InputDescription>{`${formData.body.length}/1000`}</InputDescription>
          </label>
        </div>
      </div>
      {formData.photos.length > 0 && (
      <div>
          {formData.photos.map((photo) => <img src={photo} style={{'height': '50px'}} alt="review thumbnail" />)}
      </div>
      )}
      <LineSkip />
      <StyledButton
        type="submit"
        data-testid="formSubmit"
        $theme={theme}
      >
        Submit Review
      </StyledButton>
    </form>

  );
}

NewReview.propTypes = {
  renderForm: propTypes.func.isRequired,
  currentProductID: propTypes.number.isRequired,
  submitForm: propTypes.func.isRequired,
  characteristics: propTypes.shape({}),
};

NewReview.defaultProps = {
  characteristics: {},
};

const RadioStyle = styled.div`
  display: flex;
  justify-content: space-between;
  height: 35px;
  padding: 0 25px;`;

const SelectedStar = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 30px;
  color: ${({ $theme }) => ($theme === 'light' ? 'black' : 'white')};`;

const LineSkip = styled.div`
  height: 10px`;

const StyledInput = styled.input`
  background-color: #f8f8f8;
  padding: 5px;
  border: 1px solid lightgray;
  outline: none;
  width: 75%`;

const StyledTextArea = styled.textarea`
  resize: none;
  background: #f8f8f8;
  width: 90%;
  height: 80%;
  border: 1px solid lightgray;
  outline: none;`;

const InputDescription = styled.span`
  font-size: 12px;`;

export default NewReview;

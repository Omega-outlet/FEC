import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { StyledButton } from '../../styled-components/common-elements.jsx';

function NewReview({ renderForm, currentProductID }) {
  const radioArray = [1, 2, 3, 4, 5];
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
      size: '',
      width: '',
      comfort: '',
      quality: '',
      length: '',
      fit: '',
    },
  });
  const handleChange = (level) => (e) => {
    if (!level) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    } else {
      setFormData({
        ...formData,
        [level]: {
          ...formData[level],
          [e.target.name]: Number(e.target.value),
        },
      });
    }
  };
  function handleSubmit(event) {
    event.preventDefault();
    renderForm();
  }
  const renderRadios = (arr, characteristic) => (
    arr.map((number) => (<input type="radio" value={number} name={characteristic} onChange={handleChange('characteristics')} required />)));

  console.log(formData);

  return (
    <form onSubmit={handleSubmit} data-testid="newReviewForm">
      <label htmlFor="rating">
        {'Rating: '}
        <div>
          {radioArray.map((num) => {
            if (num.toString() <= formData.rating) {
              return <SelectedStar name="rating" value={num} onMouseOver={handleChange()} type="button">★</SelectedStar>;
            }
            return <NotSelectedStar name="rating" value={num} onMouseOver={handleChange()} type="button">★</NotSelectedStar>;
          })}
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
      <fieldset>
        <legend>Characteristics</legend>
        <RadioStyle>
          <legend style={{ 'width': '50px' }}>Size</legend>
          {renderRadios(radioArray, 'size')}
        </RadioStyle>
        <RadioStyle>
          <legend style={{ 'width': '50px' }}>Width</legend>
          {renderRadios(radioArray, 'width')}
        </RadioStyle>
        <RadioStyle>
          <legend style={{ 'width': '50px' }}>Comfort</legend>
          {renderRadios(radioArray, 'comfort')}
        </RadioStyle>
        <RadioStyle>
          <legend style={{ 'width': '50px' }}>Quality</legend>
          {renderRadios(radioArray, 'quality')}
        </RadioStyle>
        <RadioStyle>
          <legend style={{ 'width': '50px' }}>Length</legend>
          {renderRadios(radioArray, 'length')}
        </RadioStyle>
        <RadioStyle>
          <legend style={{ 'width': '50px' }}>Fit</legend>
          {renderRadios(radioArray, 'fit')}
        </RadioStyle>
      </fieldset>
      <label htmlFor="summary">
        Review Summary:
        <br />
        <input type="text" id="summary" maxLength="60" name="summary" onChange={handleChange} required />
      </label>
      <br />
      <label htmlFor="reviewBody">
        Review:
        <br />
        <textarea id="reviewBody" name="body" onChange={handleChange} required />
      </label>
      <br />
      <label htmlFor="username">
        Display Name:
        <br />
        <input type="text" id="username" name="name" onChange={handleChange} required />
      </label>
      <label htmlFor="email">
        <br />
        {'Email (we won\'t share it):'}
        <br />
        <input type="email" id="email" name="email" onChange={handleChange} required />
      </label>
      <br />
      <StyledButton type="submit" data-testid="formSubmit">Submit Review</StyledButton>
    </form>

  );
}

NewReview.propTypes = {
  renderForm: propTypes.func.isRequired,
  currentProductID: propTypes.number.isRequired,
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
  color: black`;

const NotSelectedStar = styled(SelectedStar)`
  color: lightgray`;

export default NewReview;

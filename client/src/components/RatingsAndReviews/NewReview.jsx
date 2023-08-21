import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { StyledButton } from '../../styled-components/common-elements.jsx';

function NewReview({ renderForm, currentProductID, submitForm, characteristics }) {
  const radioArray = [1, 2, 3, 4, 5];
  const [charArray, setCharArray] = React.useState([]);
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
    if (!level) {
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
    arr.map((number) => (<input type="radio" value={number} name={characteristicId} onChange={handleChange('characteristics')} required />)));

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
  };
  console.log(formData);
  return (
    <form onSubmit={(e) => handleSubmit(e)} data-testid="newReviewForm">
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
        {charArray.map((characteristic) => (
          <RadioStyle>
            <legend style={{ 'width': '50px' }}>{characteristic[0]}</legend>
            {renderRadios(radioArray, characteristic[1].id)}
          </RadioStyle>
        ))}
      </fieldset>
      <label htmlFor="summary">
        Review Summary:
        <br />
        <input type="text" id="summary" maxLength="60" name="summary" onChange={handleChange()} required />
      </label>
      <br />
      <label htmlFor="reviewBody">
        Review:
        <br />
        <textarea id="reviewBody" name="body" onChange={handleChange()} required />
      </label>
      <br />
      <label htmlFor="username">
        Display Name:
        <br />
        <input type="text" id="username" name="name" onChange={handleChange()} required />
      </label>
      <label htmlFor="email">
        <br />
        {'Email (we won\'t share it):'}
        <br />
        <input type="email" id="email" name="email" onChange={handleChange()} required />
      </label>
      <br />
      <StyledButton type="submit" data-testid="formSubmit">Submit Review</StyledButton>
    </form>

  );
}

NewReview.propTypes = {
  renderForm: propTypes.func.isRequired,
  currentProductID: propTypes.number.isRequired,
  submitForm: propTypes.func.isRequired,
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

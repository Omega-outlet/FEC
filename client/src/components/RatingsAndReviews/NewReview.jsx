import React from 'react';
import propTypes from 'prop-types';

function NewReview({ renderForm }) {
  const [formData, setFormData] = React.useState({
    rating: '',
    recommend: true,
    size: '',
    width: '',
    comfort: '',
    quality: '',
    length: '',
    fit: '',
    summary: '',
    body: '',
    name: '',
    email: '',
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }
    ));
  }
  function handleSubmit(event) {
    event.preventDefault();
    renderForm();
  }
  return (
    <form onSubmit={handleSubmit} data-testid="newReviewForm">
      <label htmlFor="rating">
        {'Rating: '}
        {'<SelectStars />'}
      </label>
      <br />
      <legend>Would you recommend this product?</legend>
      <label htmlFor="yes">
        {'Yes: '}
        <input type="radio" value="yes" name="recommend" onChange={handleChange} />
      </label>
      <label htmlFor="no">
        {'No: '}
        <input type="radio" value="no" name="recommend" onChange={handleChange} />
      </label>
      <fieldset>
        <legend>Characteristics</legend>
        <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'height': '35px', 'padding': '0 25px' }}>
          <legend style={{ 'width': '50px' }}>Size</legend>
          <input type="radio" value="1" name="size" onChange={handleChange} required />
          <input type="radio" value="2" name="size" onChange={handleChange} />
          <input type="radio" value="3" name="size" onChange={handleChange} />
          <input type="radio" value="4" name="size" onChange={handleChange} />
          <input type="radio" value="5" name="size" onChange={handleChange} />
        </div>
        <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'height': '35px', 'padding': '0 25px' }}>
          <legend style={{ 'width': '50px' }}>Width</legend>
          <input type="radio" value="1" name="width" onChange={handleChange} required />
          <input type="radio" value="2" name="width" onChange={handleChange} />
          <input type="radio" value="3" name="width" onChange={handleChange} />
          <input type="radio" value="4" name="width" onChange={handleChange} />
          <input type="radio" value="5" name="width" onChange={handleChange} />
        </div>
        <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'height': '35px', 'padding': '0 25px' }}>
          <legend style={{ 'width': '50px' }}>Comfort</legend>
          <input type="radio" value="1" name="comfort" onChange={handleChange} required />
          <input type="radio" value="2" name="comfort" onChange={handleChange} />
          <input type="radio" value="3" name="comfort" onChange={handleChange} />
          <input type="radio" value="4" name="comfort" onChange={handleChange} />
          <input type="radio" value="5" name="comfort" onChange={handleChange} />
        </div>
        <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'height': '35px', 'padding': '0 25px' }}>
          <legend style={{ 'width': '50px' }}>Quality</legend>
          <input type="radio" value="1" name="quality" onChange={handleChange} required />
          <input type="radio" value="2" name="quality" onChange={handleChange} />
          <input type="radio" value="3" name="quality" onChange={handleChange} />
          <input type="radio" value="4" name="quality" onChange={handleChange} />
          <input type="radio" value="5" name="quality" onChange={handleChange} />
        </div>
        <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'height': '35px', 'padding': '0 25px' }}>
          <legend style={{ 'width': '50px' }}>Length</legend>
          <input type="radio" value="1" name="length" onChange={handleChange} required />
          <input type="radio" value="2" name="length" onChange={handleChange} />
          <input type="radio" value="3" name="length" onChange={handleChange} />
          <input type="radio" value="4" name="length" onChange={handleChange} />
          <input type="radio" value="5" name="length" onChange={handleChange} />
        </div>
        <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'height': '35px', 'padding': '0 25px' }}>
          <legend style={{ 'width': '50px' }}>Fit</legend>
          <input type="radio" value="1" name="fit" onChange={handleChange} required />
          <input type="radio" value="2" name="fit" onChange={handleChange} />
          <input type="radio" value="3" name="fit" onChange={handleChange} />
          <input type="radio" value="4" name="fit" onChange={handleChange} />
          <input type="radio" value="5" name="fit" onChange={handleChange} />
        </div>
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
        <input type="text" id="username" name="username" onChange={handleChange} required />
      </label>
      <label htmlFor="email">
        <br />
        {'Email (we won\'t share it):'}
        <br />
        <input type="email" id="email" name="email" onChange={handleChange} required />
      </label>
      <br />
      <button type="submit">Submit Review</button>
    </form>
  );
}

NewReview.propTypes = {
  renderForm: propTypes.func.isRequired,
};

export default NewReview;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// this component takes in the rating as well as a font size so each widget can choose size
function StarView({ rating, fontSize }) {
  // BRD indicates that rating should be calculated to the nearest quarter star
  const ratingNearestFourth = (Math.round(rating * 4) / 4).toFixed(2);
  return (
    <div
      data-testid="starTest"
      className="Stars"
      style={
      {
        '--rating': ratingNearestFourth,
        'fontSize': fontSize,
        '--percent': 'calc(var(--rating) / 5 * 100%)',
        'display': 'inline-block',
        'fontFamily': 'Times',
        'lineHeight': 1,
      }
    }
      aria-label={`Rating of this product is ${rating} out of 5.`}
    />
  );
}

StarView.propTypes = {
  rating: PropTypes.number.isRequired,
  fontSize: PropTypes.number.isRequired,
};

const StyledButton = styled.button`
  height: 40px;
  border: none;
  color: white;
  background: black;
  cursor: pointer`;

export { StarView, StyledButton };

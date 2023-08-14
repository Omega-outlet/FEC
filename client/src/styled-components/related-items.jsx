// Horizontal list rendering
import React from 'react';
import styled from 'styled-components';

const Carousel = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  flex: 0 0 auto;
  overflow: hidden;
`;

export default Carousel;

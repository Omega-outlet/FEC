// Horizontal list rendering
import React from 'react';
import styled from 'styled-components';

const Carousel = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  -webkit-overflow-scrolling property;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  flex: 0 0 auto;
`;

export default Carousel;

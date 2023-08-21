import React from 'react';
import { StyledButton } from '../../styled-components/common-elements.jsx';

const ScrollButton = function ({scroll, dir}) {
  return <StyledButton onClick={scroll}>{dir === 'left' ? '<' : '>'}</StyledButton>;
};

export default ScrollButton;

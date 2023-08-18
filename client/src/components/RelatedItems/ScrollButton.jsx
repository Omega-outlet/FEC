import React from 'react';
import { ButtonWrap } from '../../styled-components/horizontal-carousel.jsx';

const ScrollButton = function ({scroll, dir}) {
  return <ButtonWrap onClick={scroll}>{dir === 'left' ? '<' : '>'}</ButtonWrap>;
};

export default ScrollButton;

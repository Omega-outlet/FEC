import React from 'react';
import { ButtonWrap } from '../../styled-components/horizontal-carousel.jsx';

const CompareButton = function () {
  // small star character for now
  return <ButtonWrap onClick={() => console.log('Compare button clicked')}>☆</ButtonWrap>;
};

export default CompareButton;

import React from 'react';
import { StyledButton } from '../../styled-components/common-elements.jsx';

const CompareButton = function () {
  // small star character for now
  return <StyledButton onClick={() => console.log('Compare button clicked')}>☆</StyledButton>;
};

export default CompareButton;

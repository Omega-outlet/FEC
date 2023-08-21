import React, { useContext } from 'react';
import { StyledButton } from '../../styled-components/common-elements.jsx';
import RelatedContext from './RelatedContext.jsx';

const CloseTableButton = function () {
  const { compareItem } = useContext(RelatedContext);

  return <StyledButton onClick={() => compareItem()}>X</StyledButton>;
};

export default CloseTableButton;

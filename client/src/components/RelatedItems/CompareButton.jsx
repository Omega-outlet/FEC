import React, { useContext } from 'react';
import { StyledButton } from '../../styled-components/common-elements.jsx';
import RelatedContext from './RelatedContext.jsx';
// on click, toggle visible
// add compare item item context
// on click, send current item, compare item, and toggle show modal
const CompareButton = function ({ item }) {
  const { compareItem } = useContext(RelatedContext);

  return <StyledButton onClick={(event) => compareItem(item, event)}>☆</StyledButton>;
};

export default CompareButton;

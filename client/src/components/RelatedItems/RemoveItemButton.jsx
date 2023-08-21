import React, { useContext } from 'react';
import { StyledButton } from '../../styled-components/common-elements.jsx';
import RelatedContext from './RelatedContext.jsx';

const RemoveItemButton = function ({ item }) {
  const { removeFromOutfit } = useContext(RelatedContext);

  return <StyledButton onClick={() => removeFromOutfit(item)}>X</StyledButton>;
};

export default RemoveItemButton;

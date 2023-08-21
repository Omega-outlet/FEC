import React, { useContext } from 'react';
import { StyledButton } from '../../styled-components/common-elements.jsx';
import RelatedContext from './RelatedContext.jsx';

const RemoveItemButton = function ({ item }) {
  const { removeFromOutfit } = useContext(RelatedContext);

  return <StyledButton onClick={(event) => removeFromOutfit(item, event)}>X</StyledButton>;
};

export default RemoveItemButton;

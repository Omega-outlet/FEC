import React, { useContext } from 'react';
import { StyledButton } from '../../styled-components/common-elements.jsx';
import OutfitContext from './OutfitContext.jsx';

const RemoveItemButton = function ({ item }) {
  const { removeFromOutfit } = useContext(OutfitContext);

  return <StyledButton onClick={() => removeFromOutfit(item)}>X</StyledButton>;
};

export default RemoveItemButton;

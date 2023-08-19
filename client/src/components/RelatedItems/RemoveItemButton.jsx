import React, { useContext } from 'react';
import { ButtonWrap } from '../../styled-components/horizontal-carousel.jsx';
import OutfitContext from './OutfitContext.jsx';

const RemoveItemButton = function ({ item }) {
  const { removeFromOutfit } = useContext(OutfitContext);

  return <ButtonWrap onClick={() => removeFromOutfit(item)}>X</ButtonWrap>;
};

export default RemoveItemButton;

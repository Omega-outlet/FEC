import React, { useContext } from 'react';
import { StyledButton } from '../../styled-components/common-elements.jsx';
import RelatedContext from './RelatedContext.jsx';
import ThemeContext from '../ThemeContext.jsx';


const CompareButton = function ({ item }) {
  const { compareItem } = useContext(RelatedContext);
  const { theme } = useContext(ThemeContext);

  return <StyledButton onClick={(event) => compareItem(item, event)} $theme={theme}>★</StyledButton>;
};

export default CompareButton;

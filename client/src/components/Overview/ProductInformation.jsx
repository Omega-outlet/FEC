import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import StyleEntry from './StyleEntry.jsx';

function ProductInformation({ currentProduct, currentProductID, styles }) {
  const [stylesArray, setStylesArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // load the stylesArray with styles
  const loadStyles = () => {
    setStylesArray(styles.results);
    setIsLoading(false);
  };
  useEffect(loadStyles, [styles, stylesArray]);

  if (isLoading) {
    return null;
  }
  return (
    <div>
      <h1>{ currentProduct.name }</h1>
      <h3>{ currentProduct.description }</h3>

      <div className="styleSelectorContainer">
        {stylesArray ? stylesArray.map((style, index) => (
          <div className="styleEntry" data-testid="styleEntry">
            <StyleEntry style={style} key={index} index={index} />
          </div>
        )) : null}
      </div>

    </div>
  );
}

export default ProductInformation;
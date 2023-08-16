import React, { useState, useEffect, useContext } from 'react';
import Promise from 'bluebird';
import StyleEntry from './StyleEntry.jsx';
import ProductInformationComponents from '../../styled-components/overviewcomponents/product-information-components.jsx';

function styleSelector({
  stylesArray, selectedStyle, setSelectedStyle,
  selectedStylePrice, setSelectedStylePrice, selectedStyleSalePrice, setSelectedStyleSalePrice,
}) {
  const [isLoading, setIsLoading] = useState(true);
  // load the stylesArray with styles
  const loadStyles = () => {
    setIsLoading(true);
    function getOriginalPrice() {
      let didSucceed = false;
      return new Promise((resolve, reject) => {
        if (typeof stylesArray !== 'undefined') {
          if (stylesArray.length > 0) {
            didSucceed = true;
          }
        }
        if (didSucceed === true) {
          resolve(stylesArray[0].original_price);
        } else {
          reject(new Error('Not done loading'));
        }
      });
    }

    getOriginalPrice()
      .then((data) => { setSelectedStylePrice(data); });

    function getSalePrice() {
      let didSucceed = false;
      return new Promise((resolve, reject) => {
        if (typeof stylesArray !== 'undefined') {
          if (stylesArray.length > 0) {
            didSucceed = true;
          }
        }
        if (didSucceed === true) {
          resolve(stylesArray[0].sale_price);
        } else {
          reject(new Error('Not done loading'));
        }
      });
    }

    getSalePrice()
      .then((data) => { setSelectedStyleSalePrice(data); });
    setIsLoading(false);
  };

  useEffect(loadStyles, [stylesArray]);
  return (
    <div>
      {stylesArray ? stylesArray.map((style, index) => (
        <ProductInformationComponents.StyleEntry data-testid="styleEntry" key={index}>
          <StyleEntry
            style={style}
            index={index}
            stylesArray={stylesArray}
            selectedStyle={selectedStyle}
            setSelectedStyle={setSelectedStyle}
            selectedStylePrice={selectedStylePrice}
            setSelectedStylePrice={setSelectedStylePrice}
            selectedStyleSalePrice={selectedStyleSalePrice}
            setSelectedStyleSalePrice={setSelectedStyleSalePrice}
          />
        </ProductInformationComponents.StyleEntry>
      )) : null}
    </div>
  );
}

export default styleSelector;

import React, { useState, useEffect, useContext } from 'react';
import Promise from 'bluebird';
import StyleEntry from './StyleEntry.jsx';
import ProductInformationComponents from '../../styled-components/overviewcomponents/product-information-components.jsx';

function styleSelector({
  stylesArray, selectedStyle, setSelectedStyle, selectedStylePrice, setSelectedStylePrice,
  selectedStyleSalePrice, setSelectedStyleSalePrice, selectedStyleName, setSelectedStyleName,
  selectedStylePhoto, setSelectedStylePhoto,
}) {
  const [isLoading, setIsLoading] = useState(true);
  // load the stylesArray with styles
  const loadStyles = () => {
    function getOriginalPrice() {
      let didSucceed = false;
      return new Promise((resolve, reject) => {
        if (typeof selectedStyle !== 'undefined') {
          didSucceed = true;
        }
        if (didSucceed === true) {
          resolve(selectedStyle.original_price);
        } else {
          reject(new Error('Not done loading'));
        }
      });
    }

    getOriginalPrice()
      .then((data) => setSelectedStylePrice(data))
      .catch(() => { });

    function getSalePrice() {
      let didSucceed = false;
      return new Promise((resolve, reject) => {
        if (typeof selectedStyle !== 'undefined') {
          didSucceed = true;
        }
        if (didSucceed === true) {
          resolve(selectedStyle.sale_price);
        } else {
          reject(new Error('Not done loading'));
        }
      });
    }

    getSalePrice()
      .then((data) => setSelectedStyleSalePrice(data))
      .catch(() => { });

    function getStyleName() {
      let didSucceed = false;
      return new Promise((resolve, reject) => {
        if (typeof selectedStyle !== 'undefined') {
          didSucceed = true;
        }
        if (didSucceed === true) {
          resolve(selectedStyle.name);
        } else {
          reject(new Error('Not done loading'));
        }
      });
    }

    getStyleName()
      .then((data) => { setSelectedStyleName(data); })
      .catch(() => { });

    function getStylePhoto() {
      let didSucceed = false;
      return new Promise((resolve, reject) => {
        if (typeof selectedStyle !== 'undefined') {
          didSucceed = true;
        }
        if (didSucceed === true) {
          resolve(selectedStyle.photos[0].url);
        } else {
          reject(new Error('Not done loading'));
        }
      });
    }

    getStylePhoto()
      .then((data) => { setSelectedStylePhoto(data); })
      .catch(() => { });
  };

  useEffect(loadStyles, [selectedStyle]);

  return (

    <div>
      <ProductInformationComponents.StyleName>
        {selectedStyleName}
      </ProductInformationComponents.StyleName>
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
            selectedStyleName={selectedStyleName}
            setSelectedStyleName={setSelectedStyleName}
            selectedStylePhoto={selectedStylePhoto}
            setSelectedStylePhoto={setSelectedStylePhoto}
          />
        </ProductInformationComponents.StyleEntry>
      )) : null}
    </div>
  );
}

export default styleSelector;

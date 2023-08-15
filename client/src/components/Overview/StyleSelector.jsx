import React, { useState, useEffect, useContext } from 'react';
import StyleEntry from './StyleEntry.jsx';
import Promise from 'bluebird';

function styleSelector({ stylesArray, selectedStyle, setSelectedStyle,  selectedStylePrice, setSelectedStylePrice}) {
  const [isLoading, setIsLoading] = useState(true);
  // load the stylesArray with styles
  const loadStyles = () => {
    setIsLoading(true);
    function getPrice() {
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
          reject(new Error('Not done Loading'));
        }
      });
    }

    getPrice()
      .then((data) => { setSelectedStylePrice(data)});
    setIsLoading(false);
  };
  useEffect(loadStyles, [stylesArray]);
  return (
    <div>
      {stylesArray ? stylesArray.map((style, index) => (
        <div className="styleEntry" data-testid="styleEntry" key={index}>
          <StyleEntry
            style={style}
            index={index}
            stylesArray={stylesArray}
            selectedStyle={selectedStyle}
            setSelectedStyle={setSelectedStyle}
            selectedStylePrice={selectedStylePrice}
            setSelectedStylePrice={setSelectedStylePrice}
          />
        </div>
      )) : null}
    </div>
  );
}

export default styleSelector;

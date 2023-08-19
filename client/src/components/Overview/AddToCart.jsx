import React, { useState, useEffect, useContext } from 'react';
import Promise from 'bluebird';
import StyleQuantity from './StyleQuantity.jsx';

function AddToCart({
  selectedStyle,
}) {
  const [selectedStyleSkus, setSelectedStyleSkus] = useState({});
  const [SKUArray, setSKUArray] = useState([]);
  const [SKUValueArray, setSKUValueArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(0);
  const maxQuantity = 15;
  // load the stylesArray with styles
  const loadSkus = () => {
    function getStyleSkus() {
      let didSucceed = false;
      return new Promise((resolve, reject) => {
        if (typeof selectedStyle !== 'undefined') {
          didSucceed = true;
        }
        if (didSucceed === true) {
          resolve(selectedStyle.skus);
        } else {
          reject(new Error('Not done loading'));
        }
      });
    }

    getStyleSkus()
      .then((data) => {
        setSKUArray(Object.keys(data));
        setSKUValueArray(Object.values(data));
      })
      .catch(() => { });
  };

  useEffect(loadSkus, [selectedStyle, selectedStyleSkus]);

  const handleSizeChange = (e) => {
    if (SKUValueArray[e.target.value].quantity > maxQuantity) {
      setQuantity(maxQuantity);
    } else {
      setQuantity(SKUValueArray[e.target.value].quantity);
    }
  };

  return (
    <div>
      <select onChange={handleSizeChange}>
        <option value="Select Size"> Select Size </option>
        {SKUValueArray
          ? (SKUValueArray.map((info, index) => (
            <option
              key={index}
              value={index}
            >
              {info?.size}
            </option>
          )))
          : null}
      </select>

      <StyleQuantity quantity={quantity} />
    </div>
  );
}

export default AddToCart;

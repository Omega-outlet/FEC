import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';

function StyleQuantity({
  quantity,
  sku,
  selectedStyle
}) {
  const [doneLoading, setDoneLoading] = useState(false);
  const [quantityArray, setQuantityArray] = useState([]);
  // load the stylesArray with styles
  const loadQuantity = () => {
    setDoneLoading(false);
    function getQuantity() {
      let didSucceed = false;
      return new Promise((resolve, reject) => {
        if (typeof quantity !== 'undefined') {
          didSucceed = true;
        }
        if (didSucceed === true) {
          resolve(quantity);
        } else {
          reject(new Error('Not done loading'));
        }
      });
    }

    getQuantity()
      .then((data) => {
        let tempArray = Array.from(Array(data)).map((e, i) => i + 1);
        setQuantityArray(tempArray);
        setDoneLoading(true);
      })
      .catch(() => { });
  };

  useEffect(loadQuantity, [quantity, sku, selectedStyle]);

  const handleQuantityChange = (e) => {
    console.log('selected', e.target.value);
    console.log('sku', sku);
  };
  return (
    <div>
      {doneLoading ? (
        <select onChange={handleQuantityChange}>
          <option value="Select Quantity"> Select Quantity </option>
          {
           quantityArray.map((i) => <option key={i} value={i}>{i}</option>)
          }
        </select>
      ) : null}

    </div>
  );
}

export default StyleQuantity;

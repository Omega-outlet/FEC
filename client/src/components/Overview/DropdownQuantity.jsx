import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';

function DropdownQuantity({
  size, quantity, setQuantity, openQuantity, setOpenQuantity,
  selectedStyle, SKUValueArray, setOutOfStock

}) {
  const maxQuantity = 15;
  const [quantityArray, setQuantityArray] = useState([]);
  const loadMaxQuantity = () => {
    function getQuantity() {
      let didSucceed = false;
      return new Promise((resolve, reject) => {
        if (typeof SKUValueArray !== 'undefined') {
          didSucceed = true;
        }
        if (didSucceed === true) {
          resolve(SKUValueArray);
        } else {
          reject(new Error('Not done loading'));
        }
      });
    }
    getQuantity()
      .then((data) => {
        const maxQuantitiesArray = [];
        // if quantity is greater than 15, set quantity to 15
        for (let y = 0; y < data.length; y++) {
          if (data[y].quantity > 15) {
            maxQuantitiesArray[y] = maxQuantity;
          } else {
            maxQuantitiesArray[y] = data[y].quantity;
          }
        }
        // set out of stock if item is out of stock
        setOutOfStock([maxQuantitiesArray].every((item) => item === 0));
        const tempArray = Array.from(Array(maxQuantitiesArray[size])).map((e, i) => i + 1);
        setQuantityArray(tempArray);
      })
      .catch(() => { });
  };

  useEffect(loadMaxQuantity, [selectedStyle, size]);

  const dropdownMenuQuantityHandler = () => {
    setOpenQuantity(!openQuantity);
  };

  const dropdownQuantityHandler = (e) => {
    setQuantity(e.target.value);
    setOpenQuantity(!openQuantity);
  };
  return (
    <div>
      Quantity:
      {/* size selected but no quantity selected */}
      {size > -1 && quantity === -1 ? (
        <div className="dropdownQuantity">
          <button type="button" onClick={() => { dropdownMenuQuantityHandler(); }}>Select Quantity</button>
          {/* dropdown menu opened */}
          {quantityArray && openQuantity
            ? (
              <ul className="menu">
                {(quantityArray.map((i) => (
                  <li>
                    <button type="button" className="menuItem" key={i} value={i} onClick={(e) => { dropdownMenuQuantityHandler(); dropdownQuantityHandler(e); }}>{i}</button>
                  </li>
                )))}
              </ul>
            )
            : null}
        </div>
      ) : null}
      {/* size selected and quantity selected */}
      {quantityArray && quantity > -1 ? (
        <div className="dropdownQuantity">
          <button type="button" onClick={() => { dropdownMenuQuantityHandler(); }}>{quantity}</button>
          {/* dropdown menu opened */}
          {quantityArray && openQuantity
            ? (
              <ul className="menu">
                {(quantityArray.map((i) => (
                  <li>
                    <button type="button" className="menuItem" key={i} value={i} onClick={(e) => { dropdownQuantityHandler(e); }}>{i}</button>

                  </li>
                )))}
              </ul>
            )
            : null}
        </div>
      ) : null}

      {size === -1 ? (
        <div className="dropdownQuantity">
          <button
            disabled
            type="button"
            onClick={() => {
              dropdownMenuQuantityHandler();
            }}
          >
            -
          </button>
        </div>
      ) : null }
      {' '}

    </div>
  );
}

export default DropdownQuantity;

import React, { useState, useEffect, useContext } from 'react';
import Promise from 'bluebird';
import DropdownQuantity from './DropdownQuantity.jsx';
import DropdownSize from './DropdownSize.jsx';
import {
  StyledButton,
} from '../../styled-components/common-elements.jsx';

function AddToCart({
  selectedStyle,
}) {
  const [SKUArray, setSKUArray] = useState([]);
  const [SKUValueArray, setSKUValueArray] = useState([]);
  const [message, setMessage] = useState('');
  const [openSize, setOpenSize] = useState(false);
  const [openQuantity, setOpenQuantity] = useState(false);
  const [size, setSize] = useState(-1);
  const [quantity, setQuantity] = useState(-1);
  const [outOfStock, setOutOfStock] = useState(true);

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
        setSize(-1);
        setQuantity(-1);
        setOpenSize(false);
        setOpenQuantity(false);
        setMessage('');
      })
      .catch(() => { });
  };

  useEffect(loadSkus, [selectedStyle]);

  const cartHandle = () => {
    // if user didn't select size, show message
    if (size === -1) {
      setMessage('Please select size');
      setOpenSize(true);
      // else add to cart and reset sizee and quantity to -1
    } else {
      setMessage(`added ${quantity} of size ${SKUValueArray[size].size} to cart`);
      setSize(-1);
      setQuantity(-1);
    }
  };

  return (
    <div>
      <span>{message}</span>
      <br />
      {outOfStock === true ? (
        <div>
          Size:
          <div className="dropDownSize">
            <button
              disabled
              type="button"
            >
              OUT OF STOCK
            </button>
          </div>
          Quantity:
          <div className="dropDownSize">
            <button
              disabled
              type="button"
            >
              -
            </button>
          </div>
        </div>
      ) : (
        <div>
          <DropdownSize
            size={size}
            setSize={setSize}
            setQuantity={setQuantity}
            openSize={openSize}
            setOpenSize={setOpenSize}
            selectedStyle={selectedStyle}
            SKUValueArray={SKUValueArray}
          />
          <DropdownQuantity
            size={size}
            quantity={quantity}
            setQuantity={setQuantity}
            openQuantity={openQuantity}
            setOpenQuantity={setOpenQuantity}
            selectedStyle={selectedStyle}
            SKUValueArray={SKUValueArray}
            setOutOfStock={setOutOfStock}
          />
          <StyledButton type="button" onClick={() => { cartHandle(); }}>Add to Cart</StyledButton>
        </div>
      )}

    </div>

  );
}

export default AddToCart;

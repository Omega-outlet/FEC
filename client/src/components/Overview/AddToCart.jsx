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
  const [sku, setSKU] = useState('');
  const [cartActivated, setCartActivated] = useState(false);
  const [message, setMessage] = useState('');
  const [quantityMessage, setQuantityMessage] = useState('');
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartSize, setCartSize] = useState('');
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

  useEffect(loadSkus, [selectedStyle, selectedStyleSkus, sku]);

  const handleSizeChange = (e) => {
    if (e.target.value === 'unselected') {
      setCartActivated(false);
      setCartSize('');
    } else {
      setCartActivated(true);
      setCartSize(SKUValueArray[e.target.value].size);
    }
    if (SKUValueArray[e.target.value].quantity > maxQuantity) {
      setQuantity(maxQuantity);
    } else {
      setQuantity(SKUValueArray[e.target.value].quantity);
    }
    setSKU(SKUArray[e.target.value]);
  };

  const cartHandle = () => {
    if (cartActivated === false) {
      setMessage('select size before adding to cart');
    } else if (cartQuantity === 0 || cartQuantity === 'Select Quantity') {
      setQuantityMessage('select quantity before adding to cart');
    } else {
      setMessage('');
      setQuantityMessage('');
      console.log(`added ${cartQuantity} of ${cartSize} of ${sku} to cart`);
    }
  };
  return (
    <div>
      {cartActivated ? null : <span>{message}</span> }

      <br />
      {SKUValueArray
        ? (
          <select onChange={handleSizeChange}>
            <option data-testid="sizeSelect" value="unselected"> Select Size </option>
            {(SKUValueArray.map((info, index) => (
              <option
                key={index}
                value={index}
              >
                {info.size}
              </option>
            )))}
          </select>
        )
        : null}
      <br />
      {quantityMessage}
      <StyleQuantity
        quantity={quantity}
        sku={sku}
        selectedStyle={selectedStyle}
        cartQuantity={cartQuantity}
        setCartQuantity={setCartQuantity}
      />

      <button type="button" onClick={() => { cartHandle(); }}>Add to cart</button>
    </div>
  );
}

export default AddToCart;

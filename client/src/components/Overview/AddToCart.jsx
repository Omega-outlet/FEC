import React, { useState, useEffect, useContext } from 'react';
import Promise from 'bluebird';
import {
  StyledButton,
} from '../../styled-components/common-elements.jsx';

function AddToCart({
  selectedStyle,
}) {
  const [selectedStyleSkus, setSelectedStyleSkus] = useState({});
  const [SKUArray, setSKUArray] = useState([]);
  const [SKUValueArray, setSKUValueArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [sku, setSKU] = useState('');
  const [cartActivated, setCartActivated] = useState(false);
  const [message, setMessage] = useState('');
  const [quantityMessage, setQuantityMessage] = useState('');
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartSize, setCartSize] = useState('');
  const [openSize, setOpenSize] = useState(false);
  const [openQuantity, setOpenQuantity] = useState(false);
  const [size, setSize] = useState(-1);
  const [quantity, setQuantity] = useState(-1);
  const [quantityArray, setQuantityArray] = useState([]);
  const [outOfStock, setOutOfStock] = useState(false);

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
        setSize(-1);
        setQuantity(-1);
        setOpenSize(false);
        setOpenQuantity(false);
        setMessage('');
      })
      .catch(() => { });
  };

  useEffect(loadSkus, [selectedStyle]);

  const loadMaxQuantity = () => {
    console.log('in load max quantity');
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
        console.log('data', data);
        const maxQuantitiesArray = [];
        // if quantity is greater than 15, set quantity to 15
        for (let i = 0; i < data.length; i++) {
          if (data[i].quantity > 15) {
            maxQuantitiesArray[i] = maxQuantity;
          } else {
            maxQuantitiesArray[i] = data[i].quantity;
          }
        }
        setOutOfStock([maxQuantitiesArray].every((item) => item === 0));

        const tempArray = Array.from(Array(maxQuantitiesArray[size])).map((e, i) => i + 1);
        console.log('temp Array', tempArray);
        setQuantityArray(tempArray);
      })
      .catch(() => { });
  };

  useEffect(loadMaxQuantity, [selectedStyle, size]);

  // const handleSizeChange = (e) => {
  //   if (e.target.value === 'unselected') {
  //     setCartActivated(false);
  //     setCartSize('');
  //   } else {
  //     setCartActivated(true);
  //     setCartSize(SKUValueArray[e.target.value].size);
  //   }
  //   if (SKUValueArray[e.target.value].quantity > maxQuantity) {
  //     setQuantity(maxQuantity);
  //   } else {
  //     setQuantity(SKUValueArray[e.target.value].quantity);
  //   }
  //   setSKU(SKUArray[e.target.value]);
  // };

  const cartHandle = () => {
    // if user didn't select size, show message
    if (size === -1) {
      setMessage('Please select size');
      // else add to cart and reset sizee and quantity to -1
    } else {
      setMessage(`added ${quantity} of size ${SKUValueArray[size].size} to cart`);
      setSize(-1);
      setQuantity(-1);
    }
  };

  const dropdownMenuSizeHandler = () => {
    setOpenSize(!openSize);
  };

  const dropdownMenuQuantityHandler = () => {
    setOpenQuantity(!openQuantity);
  };

  const dropdownSizeHandler = (e) => {
    console.log('size', e.target.value);
    setSize(e.target.value);
    setQuantity(1);
    setOpenSize(!openSize);
  };

  const dropdownQuantityHandler = (e) => {
    console.log('quantity', e.target.value);
    setQuantity(e.target.value);
    setOpenQuantity(!openQuantity);
  };

  return (
    <div>
      {cartActivated ? null : <span>{message}</span> }
      <br />
      Size:
      {/* size selected */}
      {size > -1 ? (
        <div className="dropdownSize">
          <button type="button" onClick={() => { dropdownMenuSizeHandler(); }}>{SKUValueArray[size].size}</button>
          {SKUValueArray && openSize
            ? (
              <ul className="menu">
                {(SKUValueArray.map((info, index) => (
                  <li key={info.id}>
                    <button type="button" className="menuItem" value={index} onClick={(e) => { dropdownSizeHandler(e); }}>{info.size}</button>
                  </li>
                )))}
              </ul>
            )
            : null}
        </div>
      ) : (
        <div className="dropdownSize">
          <button type="button" onClick={() => { dropdownMenuSizeHandler(); }}>Select Size</button>
          {SKUValueArray && openSize
            ? (

              <ul className="menu">
                {(SKUValueArray.map((info, index) => (
                  <li key={info.id}>
                    <button type="button" className="menuItem" value={index} onClick={(e) => { dropdownSizeHandler(e); }}>{info.size}</button>
                  </li>
                )))}
              </ul>

            )
            : null}
        </div>
      )}
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

      {outOfStock === true ? <span>Out of Stock</span> : <StyledButton type="button" onClick={() => { cartHandle(); }}>Add to Cart</StyledButton>}

    </div>

  );
}

export default AddToCart;

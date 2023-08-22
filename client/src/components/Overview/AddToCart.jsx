import React, { useState, useEffect, useContext } from 'react';
import Promise from 'bluebird';
import StyleQuantity from './StyleQuantity.jsx';
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
        console.log("max quantity array", maxQuantitiesArray);
        const tempArray = Array.from(Array(maxQuantitiesArray[size])).map((e, i) => i + 1);
        console.log("temp Array", tempArray);
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

  // const cartHandle = () => {
  //   if (cartActivated === false) {
  //     setMessage('select size before adding to cart');
  //   } else if (cartQuantity === 0 || cartQuantity === 'Select Quantity') {
  //     setQuantityMessage('select quantity before adding to cart');
  //   } else {
  //     setMessage('');
  //     setQuantityMessage('');
  //     console.log(`added ${cartQuantity} of ${cartSize} of ${sku} to cart`);
  //   }
  // };

  const dropdownMenuSizeHandler = () => {
    setOpenSize(!openSize);
  };

  const dropdownMenuQuantityHandler = () => {
    setOpenQuantity(!openQuantity);
  };

  const dropdownSizeHandler = (e) => {
    console.log('size', e.target.value);
    setSize(e.target.value);
    setQuantity(-1);
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

      {/* size selected */}
      {size > -1 ? (
        <div className="dropdownSize">
          <button type="button" onClick={() => { dropdownMenuSizeHandler(); }}>{SKUValueArray[size].size}</button>
          {SKUValueArray && openSize
            ? (
              <ul className="menu">
                <li>
                  <button type="button" className="menuItem" value={-1} onClick={(e) => { dropdownSizeHandler(e); }}>
                    Select Size
                  </button>
                </li>
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
                    <button type="button" className="menuItem" key={i} value={i} onClick={(e) => { dropdownQuantityHandler(e); }}>{i}</button>
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
                <li>
                  <button type="button" className="menuItem" value={-1} onClick={(e) => { dropdownQuantityHandler(e); }}>
                    Select Quantity
                  </button>
                </li>
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

      {/* {size > -1 ? (
        <div className="dropdownQuantity">
          <button type="button" onClick={() => { dropdownMenuQHandler(); }}>{SKUValueArray[size].size}</button>
          {SKUValueArray && openQ
            ? (

              <ul className="menu">
                <li>
                  <button type="button" className="menuItem" value={-1} onClick={(e) => { dropdownSizeHandler(e); }}>
                    Select Size
                  </button>
                </li>
                {(SKUValueArray.map((info, index) => (
                  <li key={info.id}>
                    <button type="button" className="menuItem" value={index} onClick={(e) => { dropdownSizeHandler(e); }}>{info.size}</button>
                  </li>
                )))}
              </ul>
            )
            : null}
        </div>
      ) : ((
        <div className="dropdownQuantity">
          <button type="button" onClick={() => { dropdownMenuQHandler(); }}>Select Size</button>
          {SKUValueArray && openQuantity
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
      ))} */}
      {/* <StyledButton type="button" onClick={() => { cartHandle(); }}>Add to cart</StyledButton> */}
    </div>
  // <div>
  //   {cartActivated ? null : <span>{message}</span> }

  //   <br />
  //   {SKUValueArray
  //     ? (
  //       <select onChange={handleSizeChange}>
  //         <option data-testid="sizeSelect" value="unselected"> Select Size </option>
  //         {(SKUValueArray.map((info, index) => (
  //           <option
  //             key={index}
  //             value={index}
  //           >
  //             {info.size}
  //           </option>
  //         )))}
  //       </select>
  //     )
  //     : null}
  //   <br />
  //   {quantityMessage}
  //   <StyleQuantity
  //     quantity={quantity}
  //     sku={sku}
  //     selectedStyle={selectedStyle}
  //     cartQuantity={cartQuantity}
  //     setCartQuantity={setCartQuantity}
  //   />

  //   <StyledButton type="button" onClick={() => { cartHandle(); }}>Add to cart</StyledButton>
  // </div>
  );
}

export default AddToCart;

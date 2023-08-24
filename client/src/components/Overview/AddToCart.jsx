import React, { useState, useEffect, useContext } from 'react';
import Promise from 'bluebird';
import DropdownQuantity from './DropdownQuantity.jsx';
import DropdownSize from './DropdownSize.jsx';
import {
  StyledButton,
} from '../../styled-components/common-elements.jsx';
import ProductInformationComponents from '../../styled-components/overviewcomponents/product-information-components.jsx';
import ThemeContext from '../ThemeContext.jsx';

function AddToCart({
  selectedStyle,
}) {
  const { theme } = useContext(ThemeContext);
  const [SKUArray, setSKUArray] = useState([]);
  const [SKUValueArray, setSKUValueArray] = useState([]);
  const [message, setMessage] = useState('');
  const [openSize, setOpenSize] = useState(false);
  const [openQuantity, setOpenQuantity] = useState(false);
  const [size, setSize] = useState(-1);
  const [quantity, setQuantity] = useState(-1);
  const [oneOutOfStock, setOneOutOfStock] = useState(false);

  // load the stylesArray with styles
  const loadSkus = () => {
    setOneOutOfStock(false);
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
      setMessage('Please select size.');
      setOpenSize(true);
      // else add to cart and reset sizee and quantity to -1
    } else if (oneOutOfStock === true) {
      setMessage('Sorry, that item is out of stock.');
      setSize(-1);
      setQuantity(-1);
      setOneOutOfStock(false);
    } else {
      setMessage(`Added ${quantity} of size ${SKUValueArray[size].size} to your cart.`);
      setSize(-1);
      setQuantity(-1);
    }
  };

  return (
    <div>
      <br />
      <span>{message}</span>
      {oneOutOfStock === true ? (
        <div>
          <ProductInformationComponents.DropdownRow>
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
              setOneOutOfStock={setOneOutOfStock}
            />

            <StyledButton $theme={theme} disabled type="button" onClick={() => { cartHandle(); }}>Sold Out</StyledButton>
          </ProductInformationComponents.DropdownRow>

        </div>
      ) : (
        <div>
          <ProductInformationComponents.DropdownRow>
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
              setOneOutOfStock={setOneOutOfStock}
            />


            <div style={{ position: 'relative', marginTop: '0px'}}>
              <StyledButton $theme={theme} type="button" onClick={() => { cartHandle(); }}>Add to Cart</StyledButton>
            </div>
          </ProductInformationComponents.DropdownRow>

        </div>
      )}

    </div>

  );
}

export default AddToCart;

/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import config from '../../../../config.js';
import { useState, useEffect, useContext } from 'react';
import ProductInformation from './ProductInformation.jsx';
import ImageGallery from './ImageGallery.jsx';

function Overview({ currentProduct, currentProductID }) {
  const [styles, setStyles] = useState({});
  const loadProduct = () => {
    const options = {
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/',
      headers: {
        Authorization: `${config.TOKEN}`,
      },
    };
    axios({
      method: 'get',
      url: `${options.url}products/${currentProductID}/styles`,
      headers: options.headers,
      responseType: 'json',
    })
      .then((response) => {
        setStyles(response.data);
      })
      .catch((error) => console.log('Error', error.message));
  };
  useEffect(loadProduct, [currentProductID]);

  return (
    <div className="container">
      <div className="half">
        <ImageGallery currentProduct={currentProduct} />
      </div>
      <div className="half">
        <ProductInformation
          currentProduct={currentProduct}
          currentProductID={currentProductID}
          styles={styles}
        />
      </div>
    </div>
  );
}

export default Overview;

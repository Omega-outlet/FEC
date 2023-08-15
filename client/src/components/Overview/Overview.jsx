/* eslint-disable import/extensions */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ProductInformation from './ProductInformation.jsx';
import ImageGallery from './ImageGallery.jsx';

function Overview({ currentProduct, currentProductID }) {
  const [styles, setStyles] = useState({});
  // get the styles of the current product
  const loadProductStyles = () => {
    const options = {
      url: '/api/product/styles',
      params: {
        currentProductID,
      },
    };
    axios({
      method: 'get',
      url: options.url,
      params: options.params,
      responseType: 'json',
    })
      .then((response) => {
        setStyles(response.data);
      })
      .catch((error) => console.log('Error', error.message));
  };
  useEffect(loadProductStyles, [currentProductID]);

  return (
    <div>
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
    </div>
  );
}

Overview.propTypes = {
  currentProduct: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    default_price: PropTypes.string,
  }),
  currentProductID: PropTypes.number,
};

Overview.defaultProps = {
  currentProduct: {
    id: '',
    name: '',
    slogan: '',
    description: '',
    category: '',
    default_price: '',
  },
  currentProductID: '',
};

export default Overview;

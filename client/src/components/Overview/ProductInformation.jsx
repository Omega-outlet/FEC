import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import StyleSelector from './StyleSelector.jsx';

function ProductInformation({
  currentProduct, currentProductID, styles, selectedStyle, setSelectedStyle,selectedStylePrice, setSelectedStylePrice
}) {
  const [stylesArray, setStylesArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedIsLoading, setSelectedIsLoading] = useState(true);

  // load the stylesArray with styles
  const loadStyles = () => {
    setSelectedIsLoading(true);

    setSelectedIsLoading(false);

  };
  useEffect(loadStyles, [currentProduct, selectedStyle]);

  return (
    <div>
      <h1>{ currentProduct.name }</h1>
      <h3>{ selectedStylePrice }</h3>
      <h3>{ currentProduct.category }</h3>
      <h3>{ currentProduct.description }</h3>

      <div className="styleSelectorContainer">
        <StyleSelector
          stylesArray={styles.results}
          selectedStyle={selectedStyle}
          setSelectedStyle={setSelectedStyle}
          selectedStylePrice={selectedStylePrice}
          setSelectedStylePrice={setSelectedStylePrice}
        />
      </div>

    </div>
  );
}

ProductInformation.propTypes = {
  currentProduct: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    default_price: PropTypes.string,
  }),
  currentProductID: PropTypes.number,
  styles: PropTypes.shape({
    product_id: PropTypes.string,
    results: PropTypes.arrayOf(
      PropTypes.shape({
        'style_id': PropTypes.number,
        'name': PropTypes.string,
        'original_price': PropTypes.string,
        'sale_price': PropTypes.string,
        'default?': PropTypes.bool,
      }),
    ),
    skus: PropTypes.shape(PropTypes.shape({
      'quantity': PropTypes.number,
      'size': PropTypes.string,
    })),
  }),
};

ProductInformation.defaultProps = {
  currentProduct: {
    id: '',
    name: '',
    slogan: '',
    description: '',
    category: '',
    default_price: '',
  },
  currentProductID: '',
  styles: {},
};

export default ProductInformation;

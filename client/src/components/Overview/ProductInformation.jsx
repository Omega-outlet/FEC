import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import OverviewContainer from '../../styled-components/overviewcomponents/overview-components.jsx';
import ProductInformationComponents from '../../styled-components/overviewcomponents/product-information-components.jsx';
import { StarView } from '../../styled-components/common-elements.jsx';
import { calculateAverage, calculateTotal } from '../RatingsAndReviews/arithmetic.js';

function ProductInformation({
  currentProduct, currentProductID, styles, selectedStyle,
  setSelectedStyle, selectedStylePrice, setSelectedStylePrice,
  selectedStyleSalePrice, setSelectedStyleSalePrice, selectedStyleName,
  setSelectedStyleName, selectedStylePhoto, setSelectedStylePhoto, mainImage, setMainImage, reviewData,
}) {
  // const [stylesArray, setStylesArray] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [selectedIsLoading, setSelectedIsLoading] = useState(true);

  // finish for style to load
  const loadStyles = () => {
    setSelectedIsLoading(true);
    setSelectedIsLoading(false);
  };
  useEffect(loadStyles, [currentProduct, selectedStyle]);

  const currentURL = window.location.href;
  const message = `This%20${currentProduct.name}%20from%20Omega%20Mart%20is%20amazing!`;
  // hard coded image URL for now
  let imageURL = '';
  if (mainImage) {
    imageURL = mainImage;
  }

  const twitterLink = `https://twitter.com/intent/tweet?text=${message}%20${currentURL}`;
  const facebookLink = `http://www.facebook.com/sharer.php?s=100&p[url]=${currentURL}`;
  // might be able to use this when we host our url
  // const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fstackoverflow.com`;
  const pinterestLink = `https://pinterest.com/pin/create/button/?&media=${imageURL}`;

  return (
      <OverviewContainer.Half>
        <h1>{ currentProduct.name }</h1>    
        {selectedStyleSalePrice ? (
          <span>
            <s>{ selectedStylePrice }</s>
            {' '}
            <span>
              <ProductInformationComponents.SaleText>
                {selectedStyleSalePrice}
              </ProductInformationComponents.SaleText>
            </span>
          </span>
        ) : (
          <span>
            { selectedStylePrice }
          </span>
        )}
        <ProductInformationComponents.Ratings>
          {reviewData ? (
            <StarView
              rating={calculateAverage(reviewData?.ratings)}
              fontSize={20}
            />
          )
            : null}
          {reviewData ? (
            <span>
              read all
              {' '}
              <a href="#ratingsComponent">
                {' '}
                {calculateTotal(reviewData.recommended)}
              </a>
              {' '}
              reviews
            </span>
          ) : null}
        </ProductInformationComponents.Ratings>
        <h3>{ currentProduct.category }</h3>
        <h3>{ currentProduct.description }</h3>
        <ProductInformationComponents.ShareButton>
          <span>share this product: </span>
          <ProductInformationComponents.TwitterButton href={twitterLink}>
            Tweet
          </ProductInformationComponents.TwitterButton>
          <ProductInformationComponents.FacebookButton href={facebookLink}>
            Share
          </ProductInformationComponents.FacebookButton>
          <ProductInformationComponents.PinterestButton href={pinterestLink}>
            Pin
          </ProductInformationComponents.PinterestButton>
        </ProductInformationComponents.ShareButton>
        <ProductInformationComponents.StyleSelectorContainer>
          <StyleSelector
            stylesArray={styles.results}
            selectedStyle={selectedStyle}
            setSelectedStyle={setSelectedStyle}
            selectedStylePrice={selectedStylePrice}
            setSelectedStylePrice={setSelectedStylePrice}
            selectedStyleSalePrice={selectedStyleSalePrice}
            setSelectedStyleSalePrice={setSelectedStyleSalePrice}
            selectedStyleName={selectedStyleName}
            setSelectedStyleName={setSelectedStyleName}
            selectedStylePhoto={selectedStylePhoto}
            setSelectedStylePhoto={setSelectedStylePhoto}
          />
        </ProductInformationComponents.StyleSelectorContainer>
        <div>
          <AddToCart selectedStyle={selectedStyle} />
        </div>
      </OverviewContainer.Half>
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

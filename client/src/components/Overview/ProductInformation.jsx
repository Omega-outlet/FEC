import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import OverviewContainer from '../../styled-components/overviewcomponents/overview-components.jsx';
import ProductInformationComponents from '../../styled-components/overviewcomponents/product-information-components.jsx';
import { StarView } from '../../styled-components/common-elements.jsx';
import { calculateAverage, calculateTotal } from '../RatingsAndReviews/arithmetic.js';
import ThemeContext from '../ThemeContext.jsx';

function ProductInformation({
  currentProduct, currentProductID, styles, selectedStyle,
  setSelectedStyle, selectedStylePrice, setSelectedStylePrice,
  selectedStyleSalePrice, setSelectedStyleSalePrice, selectedStyleName,
  setSelectedStyleName, selectedStylePhoto, setSelectedStylePhoto, mainImage, setMainImage, reviewData,
}) {
  const { theme } = useContext(ThemeContext);
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
      <div className="productInfo">
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
          share this product:&nbsp;
          <ProductInformationComponents.SocialMediaIcon $theme={theme} href={twitterLink}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" role="img" width="20px" height="20px">
              <title>Share on Twitter</title>
              <path d="M36.4 95.6c37.7 0 58.4-31.3 58.4-58.4 0-.9 0-1.8-.1-2.7 4-2.9 7.5-6.5 10.2-10.6a42 42 0 01-11.8 3.2c4.2-2.5 7.5-6.6 9-11.3-4 2.4-8.4 4.1-13 5-3.7-4-9.1-6.5-15-6.5-11.3 0-20.5 9.2-20.5 20.5 0 1.6.2 3.2.5 4.7-17.1-.9-32.2-9-42.3-21.4C10 21.1 9 24.7 9 28.4c0 7.1 3.6 13.4 9.1 17.1-3.4-.1-6.5-1-9.3-2.6v.3c0 9.9 7.1 18.2 16.5 20.1-1.7.5-3.5.7-5.4.7-1.3 0-2.6-.1-3.9-.4 2.6 8.2 10.2 14.1 19.2 14.2-7 5.5-15.9 8.8-25.5 8.8-1.7 0-3.3-.1-4.9-.3 9.3 5.9 20.1 9.3 31.6 9.3" />
            </svg>
          </ProductInformationComponents.SocialMediaIcon>
          <ProductInformationComponents.SocialMediaIcon $theme={theme} href={facebookLink}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" role="img" width="20px" height="20px">
              <title>Share on Facebook</title>
              <path d="M44.4 105V59.4H29.1V41.6h15.3V28.5C44.4 13.3 53.7 5 67.2 5c6.5 0 12.1.5 13.7.7v15.9h-9.4c-7.4 0-8.8 3.5-8.8 8.7v11.4h17.7l-2.3 17.8H62.8V105H44.4z" />
            </svg>
          </ProductInformationComponents.SocialMediaIcon>
          <ProductInformationComponents.SocialMediaIcon $theme={theme} href={pinterestLink}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" role="img" width="20px" height="20px">
              <title>Share on Pinterest</title>
              <path d="M32 103.5c-.6-5-1-12.7.2-18.1 1.1-4.9 7.4-31.4 7.4-31.4s-1.9-3.8-1.9-9.4c0-8.8 5.1-15.3 11.4-15.3 5.4 0 8 4 8 8.9 0 5.4-3.4 13.5-5.2 21-1.5 6.3 3.2 11.4 9.3 11.4C72.4 70.6 81 58.8 81 41.7 81.1 26.6 70.2 16 54.7 16c-18 0-28.5 13.5-28.5 27.4 0 5.4 2.1 11.2 4.7 14.4.5.6.6 1.2.4 1.8-.5 2-1.5 6.3-1.8 7.2-.3 1.2-.9 1.4-2.1.8-7.8-3.6-12.7-15.2-12.7-24.4C14.7 23.3 29.2 5 56.4 5c21.9 0 38.9 15.6 38.9 36.4 0 21.8-13.7 39.3-32.7 39.3-6.4 0-12.4-3.3-14.5-7.2 0 0-3.2 12-3.9 15-1.4 5.5-5.3 12.3-7.8 16.5l-4.4-1.5z" />
            </svg>
          </ProductInformationComponents.SocialMediaIcon>
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

/* eslint-disable import/extensions */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ProductInformation from './ProductInformation.jsx';
import ImageGallery from './ImageGallery.jsx';
import ExpandedView from './ExpandedView.jsx';
import OverviewContainer from '../../styled-components/overviewcomponents/overview-components.jsx';

function Overview({ currentProduct, currentProductID, reviewData }) {
  const [styles, setStyles] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [selectedStyle, setSelectedStyle] = useState({});
  const [selectedStylePrice, setSelectedStylePrice] = useState('');
  const [selectedStyleSalePrice, setSelectedStyleSalePrice] = useState('');
  const [selectedStyleName, setSelectedStyleName] = useState('');
  const [selectedStylePhoto, setSelectedStylePhoto] = useState([]);
  const [mainImage, setMainImage] = useState('');
  const [displayModal, setDisplayModal] = React.useState(false);

  const [expandedMainImage, setExpandedMainImage] = useState('');

  const loadMainImageToExpanded = () => {
    // get the thumbnails
    function getExpandedImage() {
      let didSucceed = false;
      return new Promise((resolve, reject) => {
        if (typeof mainImage !== 'undefined') {
          didSucceed = true;
        }
        if (didSucceed === true) {
          resolve(mainImage);
        } else {
          reject(new Error('Not done loading'));
        }
      });
    }

    getExpandedImage()
      .then((data) => {
        setExpandedMainImage(data);
      })
      .catch(() => { });
  };

  useEffect(loadMainImageToExpanded, [mainImage]);

  // get the styles of the current product
  const loadProductStyles = () => {
    setIsLoading(true);
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
        setSelectedStyle(response.data.results[0]);
        setIsLoading(false);
      })
      .catch((error) => console.log('Error', error.message));
  };

  useEffect(loadProductStyles, [currentProductID]);

  return (
    <div className="overview">
      <OverviewContainer.StyledOverviewContainer>
        <ImageGallery
          currentProduct={currentProduct}
          selectedStyle={selectedStyle}
          mainImage={mainImage}
          setMainImage={setMainImage}
          displayModal={displayModal}
          setDisplayModal={setDisplayModal}
        />
        <ExpandedView
          currentProduct={currentProduct}
          selectedStyle={selectedStyle}
          displayModal={displayModal}
          setDisplayModal={setDisplayModal}
          expandedMainImage={expandedMainImage}
          setExpandedMainImage={setExpandedMainImage}
        />
        <ProductInformation
          currentProduct={currentProduct}
          currentProductID={currentProductID}
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
          mainImage={mainImage}
          setMainImage={setMainImage}
          styles={styles}
          reviewData={reviewData}
        />
      </OverviewContainer.StyledOverviewContainer>
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

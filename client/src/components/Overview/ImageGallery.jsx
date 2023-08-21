import React, { useState, useEffect, useContext } from 'react';
import Promise from 'bluebird';
import ImageGalleryComponents from '../../styled-components/overviewcomponents/image-gallery-components.jsx';
import DefaultView from './DefaultView.jsx';
import DefaultThumbnails from './DefaultThumbnails.jsx';

function ImageGallery({ selectedStyle, mainImage, setMainImage, displayModal, setDisplayModal, expandedMainImage, setExpandedMainImage }) {
  return (
    <ImageGalleryComponents.DefaultContainer data-testid="imageGallery">
      <DefaultView
        selectedStyle={selectedStyle}
        mainImage={mainImage}
        setMainImage={setMainImage}
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
        expandedMainImage={expandedMainImage}
        setExpandedMainImage={setExpandedMainImage}
      />
      <DefaultThumbnails
        selectedStyle={selectedStyle}
        mainImage={mainImage}
        setMainImage={setMainImage}
        displayModal={displayModal}
        expandedMainImage={expandedMainImage}
        setExpandedMainImage={setExpandedMainImage}
      />
    </ImageGalleryComponents.DefaultContainer>
  );
}

export default ImageGallery;

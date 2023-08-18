import React, { useState, useEffect, useContext } from 'react';
import Promise from 'bluebird';
import ImageGalleryComponents from '../../styled-components/overviewcomponents/image-gallery-components.jsx';
import DefaultView from './DefaultView.jsx';
import DefaultThumbnails from './DefaultThumbnails.jsx';

function ImageGallery({ selectedStyle, mainImage, setMainImage }) {
  return (
    <ImageGalleryComponents.DefaultContainer data-testid="imageGallery">
      <DefaultView
        selectedStyle={selectedStyle}
        mainImage={mainImage}
        setMainImage={setMainImage}
      />
      <DefaultThumbnails
        selectedStyle={selectedStyle}
        mainImage={mainImage}
        setMainImage={setMainImage}
      />
    </ImageGalleryComponents.DefaultContainer>
  );
}

export default ImageGallery;

import React, { useState, useEffect, useContext } from 'react';
import Promise from 'bluebird';
import ImageGalleryComponents from '../../styled-components/overviewcomponents/image-gallery-components.jsx';
import DefaultView from './DefaultView.jsx';
import DefaultThumbnails from './DefaultThumbnails.jsx';

function ImageGallery({ selectedStyle }) {
  const [mainImage, setMainImage] = useState('');
  return (
    <ImageGalleryComponents.DefaultContainer>
      {/* <h1>Image Gallery</h1> */}
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

import React, { useState, useEffect, useContext } from 'react';
import Promise from 'bluebird';
import ImageGalleryComponents from '../../styled-components/overviewcomponents/image-gallery-components.jsx';
import DefaultView from './DefaultView.jsx';
import DefaultThumbnails from './DefaultThumbnails.jsx';

function ImageGallery({ selectedStyle }) {
  return (
    <ImageGalleryComponents.DefaultContainer>
      {/* <h1>Image Gallery</h1> */}
      <DefaultView selectedStyle={selectedStyle} />
      <DefaultThumbnails selectedStyle={selectedStyle} />
    </ImageGalleryComponents.DefaultContainer>
  );
}

export default ImageGallery;

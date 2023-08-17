import React, { useState, useEffect, useContext } from 'react';
import ImageGalleryComponents from '../../styled-components/overviewcomponents/image-gallery-components.jsx';
import PhotoThumbnail from './PhotoThumbnail.jsx';

function DefaultThumbnails({ selectedStyle }) {
  let SelectedStyleArray = selectedStyle?.photos;

  return (
    <div>
      <ImageGalleryComponents.DefaultThumbnails>
        {SelectedStyleArray ? SelectedStyleArray.map((photoObj, index) => (
          <PhotoThumbnail
            photoObj={photoObj}
            selectedStyle={selectedStyle}
          />
        )) : null}
      </ImageGalleryComponents.DefaultThumbnails>
    </div>
  );
}

export default DefaultThumbnails;

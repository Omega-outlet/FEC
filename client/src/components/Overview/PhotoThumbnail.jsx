import React, { useState, useEffect, useContext } from 'react';
import ImageGalleryComponents from '../../styled-components/overviewcomponents/image-gallery-components.jsx';

function PhotoThumbnail({
  photoObj,
  selectedStyle,
  focalItem,
  selectedStyleArray,
}) {
  return (
    <div>
      {selectedStyleArray[focalItem].url === photoObj.url
        ? (
          <ImageGalleryComponents.CurrentThumbnail
            src={photoObj.thumbnail_url}
            alt={selectedStyle.name}
            value={selectedStyle.name}
          />
        ) : (
          <ImageGalleryComponents.DefaultThumbnail
            src={photoObj.thumbnail_url}
            alt={selectedStyle.name}
            value={selectedStyle.name}
          />
        )}
    </div>
  );
}

export default PhotoThumbnail;

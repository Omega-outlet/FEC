import React, { useState, useEffect, useContext } from 'react';
import ImageGalleryComponents from '../../styled-components/overviewcomponents/image-gallery-components.jsx';

function PhotoThumbnail({ photoObj, selectedStyle }) {
  return (
    <div>
      <ImageGalleryComponents.DefaultThumbnail
        src={photoObj.thumbnail_url}
        alt={selectedStyle.name}
        value={selectedStyle.name}
        // onClick={() => { setSelectedStyle(style); }}
      />
    </div>
  );
}

export default PhotoThumbnail;

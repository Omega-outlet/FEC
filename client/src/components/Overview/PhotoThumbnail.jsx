import React, { useState, useEffect, useContext } from 'react';
import ImageGalleryComponents from '../../styled-components/overviewcomponents/image-gallery-components.jsx';

function PhotoThumbnail({ photoObj, selectedStyle }) {
  return (
    <div>
      <div>
        <ImageGalleryComponents.Thumbnail
          src={photoObj.thumbnail_url}
          alt={selectedStyle.name}
          value={selectedStyle.name}
          // onClick={() => { setSelectedStyle(style); }}
        />
        {/* <img src="https://picsum.photos/200/250" alt="Girl in a jacket" width="500" height="600" /> */}
      </div>
    </div>
  );
}

export default PhotoThumbnail;

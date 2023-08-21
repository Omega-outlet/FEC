import React, { useState, useEffect, useContext } from 'react';
import ImageGalleryComponents from '../../styled-components/overviewcomponents/image-gallery-components.jsx';

function ExpandedThumbnail({
  photoObj,
  selectedStyle,
  focalItem,
  setFocalItem,
  selectedStyleArray,
  index,
  displayModal,
  mainImage,
  setMainImage,
  handleImageClick,
  expandedMainImage,
  setExpandedMainImage,
}) {
  let altName = '';
  altName += `${selectedStyle.name} ${index}`;
  return (
    <div>

      {selectedStyleArray[focalItem]?.url === photoObj?.url
        ? (
          <ImageGalleryComponents.CurExpandedThumbnail
            src={photoObj.thumbnail_url}
            alt={altName}
            value={selectedStyle.name}
          />
        ) : (
          <ImageGalleryComponents.ExpandedThumbnail
            src={photoObj.thumbnail_url}
            alt={altName}
            value={selectedStyle.name}
            onClick={() => { handleImageClick(index); }}
          />
        )}

    </div>
  );
}

export default ExpandedThumbnail;

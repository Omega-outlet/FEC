import React, { useState, useEffect, useContext } from 'react';
import Promise from 'bluebird';
import ImageGalleryComponents from '../../styled-components/overviewcomponents/image-gallery-components.jsx';
import {
  StyledButton, ModalWrapper, Modal, ModalContent,
} from '../../styled-components/common-elements.jsx';

function ExpandedZoom({ image }) {
  const [displayZoomed, setDisplayZoomed] = useState(false);

  // const magnify = (imageURL, imageWidth, imageHeight, zoomWidth, zoomHeight) => {
  //   const zoomStrength = 2.5;
  // };

  // magnify(mainImage);
  return (
    <div>
    </div>

  );
}

export default ExpandedZoom;

import React, { useState, useEffect, useContext } from 'react';
import Promise from 'bluebird';
import ImageGalleryComponents from '../../styled-components/overviewcomponents/image-gallery-components.jsx';
import {
  StyledButton, ModalWrapper, Modal, ModalContent,
} from '../../styled-components/common-elements.jsx';

function ExpandedZoom({
  expandedMainImage, siteWidth, siteHeight, showMagnify, coordinates,
}) {
  const zoomStrength = 2.5;
  const zoomWidth = 300;
  const zoomHeight = 300;

  return (
  // tried passing parameters to styled components but it isn't working. Using CSS for now
  // <ImageGalleryComponents.ZoomedArea
  //   $showMagnify={showMagnify}
  //   $zoomStrength={zoomStrength}
  //   $zoomWidth={zoomWidth}
  //   $zoomHeight={zoomHeight}
  //   $siteWidth={siteWidth}
  //   $siteHeight={siteHeight}
  //   $coordinatesX={coordinates[0]}
  //   $coordinatesY={coordinates[1]}
  //   $expandedMainImage={expandedMainImage}
  // />
    <div style={{
      display: showMagnify ? '' : 'none',
      position: 'absolute',
      pointerEvents: 'none',
      // magnifer position
      top: `${coordinates[1] - zoomHeight / 2.5}px`,
      left: `${coordinates[0] + zoomWidth / 1.5}px`,
      backgroundImage: `url('${expandedMainImage}')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: `${siteWidth * zoomStrength}px ${siteHeight * zoomStrength}px`,
      backgroundPositionX: `${-coordinates[0] * zoomStrength + zoomWidth / 2}px`,
      backgroundPositionY: `${-coordinates[1] * zoomStrength + zoomHeight / 2}px`,
      // magnifier border
      border: '2px solid #818589',
      // magnifer dimensions
      height: `${zoomHeight}px`,
      width: `${zoomWidth}px`,

    }}
    />

  );
}

export default ExpandedZoom;

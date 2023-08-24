import React, { useState, useEffect, useContext } from 'react';
import Promise from 'bluebird';
import OverviewContainer from '../../styled-components/overviewcomponents/overview-components.jsx';
import ImageGalleryComponents from '../../styled-components/overviewcomponents/image-gallery-components.jsx';
import DefaultView from './DefaultView.jsx';
import DefaultThumbnails from './DefaultThumbnails.jsx';

function ImageGallery({
  selectedStyle,
  mainImage,
  setMainImage,
  displayModal,
  setDisplayModal,
  expandedMainImage,
  setExpandedMainImage,
}) {
  return (
    <OverviewContainer.Half>
      <ImageGalleryComponents.DefaultContainer data-testid="imageGallery">
        <DefaultView
          selectedStyle={selectedStyle}
          mainImage={mainImage}
          setMainImage={setMainImage}
          displayModal={displayModal}
          setDisplayModal={setDisplayModal}
          expandedMainImage={expandedMainImage}
          setExpandedMainImage={setExpandedMainImage}
        />
        { !displayModal && <DefaultThumbnails
          selectedStyle={selectedStyle}
          mainImage={mainImage}
          setMainImage={setMainImage}
          displayModal={displayModal}
          expandedMainImage={expandedMainImage}
          setExpandedMainImage={setExpandedMainImage}
        />}
      </ImageGalleryComponents.DefaultContainer>
    </OverviewContainer.Half>
  );
}

export default ImageGallery;

import React, { useState, useEffect, useContext } from 'react';
import Promise from 'bluebird';
import ExpandedThumbnail from './ExpandedThumbnail.jsx';
import ImageGalleryComponents from '../../styled-components/overviewcomponents/image-gallery-components.jsx';
import {
  StyledButton, ModalWrapper, Modal, ModalContent,
} from '../../styled-components/common-elements.jsx';

function ExpandedView({
  selectedStyle, mainImage, setMainImage, displayModal, setDisplayModal, expandedMainImage, setExpandedMainImage
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [thumbnails, setThumbnails] = useState([]);
  const [focalItem, setFocalItem] = useState(0);


  const loadStylesPhotos = () => {
    // get the thumbnails
    function getStylePhotos() {
      let didSucceed = false;
      return new Promise((resolve, reject) => {
        if (typeof selectedStyle !== 'undefined') {
          didSucceed = true;
        }
        if (didSucceed === true) {
          resolve(selectedStyle.photos);
        } else {
          reject(new Error('Not done loading'));
        }
      });
    }

    getStylePhotos()
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          if (expandedMainImage === data[i].url) {
            setFocalItem(i);
          }
        }
        setThumbnails(data);
      })
      .catch(() => { });
  };

  useEffect(loadStylesPhotos, [selectedStyle, expandedMainImage]);

  const handleExpandedClick = function (e) {
    setDisplayModal(true);
  };

  const handleImageClick = (photoIndex) => {
    console.log("this is the photo index clicked:", photoIndex);
    console.log(thumbnails[photoIndex].url);
    setExpandedMainImage(thumbnails[photoIndex].url);
  }

  return (
    <div>
      <ImageGalleryComponents.ModalWrapper $displaymodal={displayModal}>
        <ImageGalleryComponents.Modal $displaymodal={displayModal}>
        <div class="row">
          <div class="column1">

          {thumbnails ? thumbnails.map((photoObj, index) => (
            <ExpandedThumbnail
              photoObj={photoObj}
              focalItem={focalItem}
              setFocalItem={setFocalItem}
              selectedStyleArray={thumbnails}
              selectedStyle={selectedStyle}
              key={index}
              index={index}
              displayModal={displayModal}
              expandedMainImage={expandedMainImage}
              setExpandedMainImage={setExpandedMainImage}
              handleImageClick={handleImageClick}
            />
          )) : null}

          </div>
        <div class="column2">          <ImageGalleryComponents.ExpandedMainPhoto
            src={expandedMainImage}
            alt={selectedStyle?.name}
          /></div>
<div class="column3">          <StyledButton
            style={{ 'width': '150px' }}
            type="button"
            onClick={() => setDisplayModal(false)}
          >
            Close
          </StyledButton></div>
          </div >
        </ImageGalleryComponents.Modal>
      </ImageGalleryComponents.ModalWrapper>
    </div>


  );
}

export default ExpandedView;
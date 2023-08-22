import React, { useState, useEffect, useContext } from 'react';
import Promise from 'bluebird';
import ExpandedThumbnail from './ExpandedThumbnail.jsx';
import ExpandedZoom from './ExpandedZoom.jsx';
import ImageGalleryComponents from '../../styled-components/overviewcomponents/image-gallery-components.jsx';
import {
  StyledButton, ModalWrapper, Modal, ModalContent,
} from '../../styled-components/common-elements.jsx';
import ScrollButton from './DefaultScrollButton.jsx';

function ExpandedView({
  selectedStyle, displayModal, setDisplayModal, expandedMainImage, setExpandedMainImage,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [thumbnails, setThumbnails] = useState([]);
  const [focalItem, setFocalItem] = useState(0);
  const [siteWidth, setSiteWidth] = useState(0);
  const [siteHeight, setSiteHeight] = useState(0);
  const [displayZoomed, setDisplayZoomed] = useState(false);
  const [showMagnify, setShowMagnify] = useState(false);
  const [coordinates, setCoordinates] = useState([0, 0]);

  const loadImageDimensions = () => {
    // set width and height from the image as it displays on our browser
    const clientImg = document.getElementById('expandedMain');
    setSiteWidth(clientImg.width);
    setSiteHeight(clientImg.height);
  };

  useEffect(loadImageDimensions, [expandedMainImage, selectedStyle, displayZoomed]);

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

  const handleImageClick = (photoIndex) => {
    setExpandedMainImage(thumbnails[photoIndex].url);
  };

  const scrollLeft = () => {
    setFocalItem(focalItem - 1);
    setExpandedMainImage(thumbnails[focalItem - 1].url);
  };
  const scrollRight = () => {
    setFocalItem(focalItem + 1);
    setExpandedMainImage(thumbnails[focalItem + 1].url);
  };

  const handleMouseEnter = (e) => {
    if (displayZoomed) {
      setShowMagnify(true);
    }
  };

  // get the current position of the cursor when it is on main image
  const cursorPos = (e) => {
    const imageArea = e.currentTarget;
    const { top, left } = imageArea.getBoundingClientRect();
    // sets coordinates of cursor in the imageArea
    setCoordinates([(e.pageX - left - window.pageXOffset), (e.pageY - top - window.pageYOffset)]);
  };

  return (
    <div>
      <ImageGalleryComponents.ModalWrapper $displaymodal={displayModal}>
        <ImageGalleryComponents.Modal $displaymodal={displayModal}>
          <ImageGalleryComponents.ExpandedNormal>
            <ImageGalleryComponents.Icons>
              {thumbnails && displayZoomed === false ? thumbnails.map((photoObj, index) => (
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

            </ImageGalleryComponents.Icons>

            <ImageGalleryComponents.ExpandedImageContainer>
              {focalItem > 0 && displayZoomed === false && <ScrollButton scroll={scrollLeft} dir="left" />}

              <ImageGalleryComponents.ExpandedMainPhoto
                $displayZoomed={displayZoomed}
                id="expandedMain"
                src={expandedMainImage}
                alt={selectedStyle?.name}
                onClick={() => {
                  setDisplayZoomed(!displayZoomed);
                  setShowMagnify(!showMagnify);
                }}
                onMouseEnter={(e) => { handleMouseEnter(e); }}
                onMouseLeave={() => { setShowMagnify(false); }}
                onMouseMove={(e) => { cursorPos(e); }}
              />
              {focalItem < thumbnails.length - 1 && displayZoomed === false && <ScrollButton scroll={scrollRight} dir="right" />}

            </ImageGalleryComponents.ExpandedImageContainer>
            <ImageGalleryComponents.ExitExpanded>
              <StyledButton
                type="button"
                onClick={() => {
                  setDisplayModal(false);
                  setDisplayZoomed(false);
                  showMagnify(false);
                }}
              >
                Close
              </StyledButton>

            </ImageGalleryComponents.ExitExpanded>
          </ImageGalleryComponents.ExpandedNormal>
          <ExpandedZoom
            expandedMainImage={expandedMainImage}
            siteWidth={siteWidth}
            siteHeight={siteHeight}
            showMagnify={showMagnify}
            coordinates={coordinates}
          />
        </ImageGalleryComponents.Modal>
      </ImageGalleryComponents.ModalWrapper>
    </div>

  );
}

export default ExpandedView;

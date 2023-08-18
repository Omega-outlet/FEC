import React, { useState, useEffect, useContext } from 'react';
import Promise from 'bluebird';
import ImageGalleryComponents from '../../styled-components/overviewcomponents/image-gallery-components.jsx';
import PhotoThumbnail from './PhotoThumbnail.jsx';
import ScrollButton from './DefaultScrollButton.jsx';

function DefaultThumbnails({ selectedStyle, mainImage, setMainImage }) {
  const [focalItem, setFocalItem] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [photosArrayLength, setPhotosArrayLength] = useState(0);
  const [selectedStyleArray, setSelectedStyleArray] = useState([]);

  // console.log("array length", arrayLength);

  // const selectedStyleArray = selectedStyle?.photos;
  const loadStylesArray = () => {
    function getStylePhotosArray() {
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

    getStylePhotosArray()
      .then((data) => {
        setSelectedStyleArray(data);
        setPhotosArrayLength(data.length);
        setFocalItem(0);
      })
      .catch(() => { });
  };

  useEffect(loadStylesArray, [selectedStyle]);

  const loadNewMainImage = () => {
    function getNewMainImage() {
      let didSucceed = false;
      return new Promise((resolve, reject) => {
        if (typeof selectedStyleArray !== 'undefined') {
          didSucceed = true;
        }
        if (didSucceed === true) {
          resolve(selectedStyleArray[focalItem].url);
        } else {
          reject(new Error('Not done loading'));
        }
      });
    }

    getNewMainImage()
      .then((data) => {
        setMainImage(data);
      })
      .catch(() => { });
  };

  useEffect(loadNewMainImage, [selectedStyleArray, focalItem]);

  const scrollLeft = () => setFocalItem(focalItem - 1);
  const scrollRight = () => setFocalItem(focalItem + 1);

  return (
    <div>
      <ImageGalleryComponents.DefaultThumbnails>
        { focalItem > 0 && <ScrollButton scroll={scrollLeft} dir="left" /> }
        {selectedStyleArray ? selectedStyleArray.map((photoObj, index) => (
          <PhotoThumbnail
            photoObj={photoObj}
            selectedStyle={selectedStyle}
            key={index}
          />
        )) : null}
        { focalItem < photosArrayLength - 1 && <ScrollButton scroll={scrollRight} dir="right" /> }
      </ImageGalleryComponents.DefaultThumbnails>

    </div>
  );
}

export default DefaultThumbnails;

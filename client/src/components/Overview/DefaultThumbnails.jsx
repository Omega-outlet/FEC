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
  const [sevenStylesArray, setSevenStylesArray] = useState([]);

  const loadStylesArray = () => {
    // get the photos array of this style
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
    // update the main image of this style after each arrow key click
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
        // set the array of 7 thumbnails to be used in the scroll list
        if (focalItem - 6 <= 0) {
          setSevenStylesArray(selectedStyleArray.slice(0, 7));
          console.log("hi1")
        } else if (focalItem + 7 >= photosArrayLength) {
          setSevenStylesArray(selectedStyleArray.slice(-7));
          console.log("hi2")
        } else {
          setSevenStylesArray(selectedStyleArray.slice(focalItem, focalItem + 7));
          console.log("hi3")
        }
      })
      .catch(() => { });
  };

  useEffect(loadNewMainImage, [selectedStyleArray, focalItem]);

  const scrollLeft = () => setFocalItem(focalItem - 1);
  const scrollRight = () => setFocalItem(focalItem + 1);

  return (
    <div>
      <ImageGalleryComponents.DefaultThumbnails>
        { focalItem > 0 ? <ScrollButton scroll={scrollLeft} dir="left" /> : <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div> }
        {sevenStylesArray
          ? sevenStylesArray
            .map((photoObj, index) => (
              <PhotoThumbnail
                photoObj={photoObj}
                focalItem={focalItem}
                selectedStyleArray={selectedStyleArray}
                selectedStyle={selectedStyle}
                key={index}
                index={index}
              />
            )) : null}
        { focalItem < photosArrayLength - 1 && <ScrollButton scroll={scrollRight} dir="right" />}
      </ImageGalleryComponents.DefaultThumbnails>

    </div>
  );
}

export default DefaultThumbnails;

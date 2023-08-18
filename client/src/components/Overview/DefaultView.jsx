import React, { useState, useEffect, useContext } from 'react';
import Promise from 'bluebird';
import ImageGalleryComponents from '../../styled-components/overviewcomponents/image-gallery-components.jsx';

function DefaultView({ selectedStyle, mainImage, setMainImage }) {
  const [isLoading, setIsLoading] = useState(true);
  const getStyle = () => {
    function getMainImage() {
      setIsLoading(true);
      let didSucceed = false;
      return new Promise((resolve, reject) => {
        if (typeof selectedStyle !== 'undefined') {
          didSucceed = true;
        }
        if (didSucceed === true) {
          resolve(selectedStyle.photos[0].url);
        } else {
          reject(new Error('Not done loading'));
        }
      });
    }

    getMainImage()
      .then((data) => { setMainImage(data); })
      .catch(() => {})
      .finally(setIsLoading(false));
  };

  useEffect(getStyle, [selectedStyle]);

  return (
    <div>
      {isLoading ? null : (<ImageGalleryComponents.MainPhoto src={mainImage} />)}
    </div>

  );
}

export default DefaultView;

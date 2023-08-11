/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import ProductInformation from './ProductInformation.jsx';
import ImageGallery from './ImageGallery.jsx';

function Overview() {
  return (
    <div className="container">
      <div className="half">
        <ImageGallery />
      </div>
      <div className="half">
        <ProductInformation />
      </div>
    </div>
  );
}

export default Overview;

/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import ProductInformation from './ProductInformation.jsx';
import ImageGallery from './ImageGallery.jsx';

function Overview({ currentProduct }) {
  return (
    <div className="container">
      <div className="half">
        <ImageGallery currentProduct={currentProduct}/>
      </div>
      <div className="half">
        <ProductInformation currentProduct={currentProduct}/>
      </div>
    </div>
  );
}

export default Overview;

import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';

function ImageGallery({ currentProduct }) {
  console.log('from image', currentProduct);
  return (
    <div>
      <h1>Image Gallery</h1>
      <h2>{currentProduct.name}</h2>
    </div>
  );
}

export default ImageGallery;

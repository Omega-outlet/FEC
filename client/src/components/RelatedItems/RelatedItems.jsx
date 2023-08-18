import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

import ItemList from './ItemList.jsx';
import YourOutfitList from './YourOutfitList.jsx';

const RelatedItems = function ({currentProductID, updateProduct}) {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [outfit, setOutfit] = useState([]);

  const getRelatedProducts = () => {
    axios.get('/api/product/related', {
      params: {
        currentProductID,
      },
      responseType: 'json',
    })
      .then((response) => {
        setRelatedProducts(response.data);
      })
      .catch((error) => error.message);
  };

  const getOutfit = () => {
    let storedOutfit = localStorage.getItem('yourOutfit');
    console.log('Outfit currently stored: ', storedOutfit);
    if (storedOutfit) {
      let outfitArray = JSON.parse(storedOutfit);
      setOutfit(outfitArray);
    }
  };

  useEffect(getRelatedProducts, []);
  useEffect(getOutfit, []);

  return (
    <div>
      <center>
        <h4>Related Items</h4>
        { relatedProducts.length > 0 && <ItemList products={relatedProducts} updateProduct={updateProduct} listType="related" /> }
        <h4>Your Outfit</h4>
        <YourOutfitList products={outfit} updateProduct={updateProduct} listType="outfit" />
      </center>
    </div>
  );
};

export default RelatedItems;

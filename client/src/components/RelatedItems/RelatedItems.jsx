import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

import RelatedList from './RelatedList.jsx';
import YourOutfitList from './YourOutfitList.jsx';

const RelatedItems = function ({currentProductID, updateProduct}) {
  const [relatedProducts, setRelatedProducts] = useState([]);

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
  useEffect(getRelatedProducts, []);

  return (
    <div>
      <h4>Related Items</h4>
      { relatedProducts.length > 0 && <RelatedList products={relatedProducts} updateProduct={updateProduct} /> }
      <h4>Your Outfit</h4>
      <YourOutfitList currentProductID={currentProductID} updateProduct={updateProduct} />
    </div>
  );
};

export default RelatedItems;

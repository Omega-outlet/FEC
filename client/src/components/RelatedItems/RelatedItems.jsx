import React from 'react';
import axios from 'axios';
import { useState } from 'react';

import RelatedList from './RelatedList.jsx';
import YourOutfitList from './YourOutfitList.jsx';

const RelatedItems = function ({currentProductID, updateProduct}) {
  const [relatedProducts, setRelatedProducts] = useState([]);

  const getRelatedProducts = () => {
    axios
      .get('/api/product')
      .then((response) => {
        setCurrentProduct(response.data);
        setCurrentProductID(response.data.id);
      })
      .catch((error) => console.log('Error', error.message));
  };
  useEffect(loadFirstProduct, []);

  return (
    <div>
      <h4>Related Items</h4>
      <RelatedList currentProductID={currentProductID} updateProduct={updateProduct} />
      <h4>Your Outfit</h4>
      <YourOutfitList currentProductID={currentProductID} updateProduct={updateProduct} />
    </div>
  );
};

export default RelatedItems;

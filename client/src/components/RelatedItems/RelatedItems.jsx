import React from 'react';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';

import ItemList from './ItemList.jsx';
import OutfitContext from './OutfitContext.jsx';

const RelatedItems = function ({currentProduct, updateProduct}) {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [outfit, setOutfit] = useState([]);

  useEffect(() => {
    axios.get('/api/product/related', {
      params: {
        currentProductID: currentProduct.id,
      },
      responseType: 'json',
    })
      .then((response) => {
        setRelatedProducts(response.data);
      })
      .catch((error) => error.message);
  }, [currentProduct]);

  const getOutfit = () => {
    const storedOutfit = localStorage.getItem('yourOutfit');
    console.log('Outfit currently stored: ', storedOutfit);
    if (storedOutfit) {
      const outfitArray = JSON.parse(storedOutfit);
      setOutfit(outfitArray);
    }
  };

  // only if item doesn't already exist
  const addToOutfit = (item) => {
    const storedOutfit = localStorage.getItem('yourOutfit');
    let outfitArray = [];
    if (storedOutfit) {
      outfitArray = JSON.parse(storedOutfit);
    }
    if (!outfitArray.find((i) => i.id === item.id)) {
      outfitArray.push(item);
    }
    setOutfit(outfitArray);
    localStorage.setItem('yourOutfit', JSON.stringify(outfitArray));
  };

  const removeFromOutfit = (item) => {
    const storedOutfit = localStorage.getItem('yourOutfit');
    let outfitArray = [];
    if (storedOutfit) {
      outfitArray = JSON.parse(storedOutfit);
    }
    console.log('Item to remove: ', item);
    outfitArray = outfitArray.filter((i) => i.id !== item.id);
    console.log('New outfit array: ', outfitArray);
    setOutfit(outfitArray);
    localStorage.setItem('yourOutfit', JSON.stringify(outfitArray));
  };

  useEffect(getOutfit, []);

  return (
    <div>
      <center>
        <h3>Related Items</h3>
        { relatedProducts.length > 0 && <ItemList products={relatedProducts} updateProduct={updateProduct} listType="related" /> }
        <h3>Your Outfit</h3>
        { outfit.length === 0 && <h4>No outfit yet!</h4> }
        <OutfitContext.Provider value={{ addToOutfit, removeFromOutfit }}>
          <ItemList currentProduct={currentProduct} products={outfit} updateProduct={updateProduct} listType="outfit" />
        </OutfitContext.Provider>
      </center>
    </div>
  );
};

export default RelatedItems;

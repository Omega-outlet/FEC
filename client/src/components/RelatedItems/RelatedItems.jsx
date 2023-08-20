import React from 'react';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';

import ItemList from './ItemList.jsx';
import OutfitContext from './OutfitContext.jsx';
import { StyledButton } from '../../styled-components/common-elements.jsx';

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
      outfitArray.unshift(item);
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
    outfitArray = outfitArray.filter((i) => i.id !== item.id);
    setOutfit(outfitArray);
    localStorage.setItem('yourOutfit', JSON.stringify(outfitArray));
  };

  // added currentProduct
  useEffect(getOutfit, [currentProduct]);

  return (
    <div>
      <center>
        { relatedProducts.length === 0 ? <h3>No related items!</h3> : <h3>Related Items</h3>}
        { relatedProducts.length > 0 && <ItemList products={relatedProducts} updateProduct={updateProduct} listType="related" /> }
        { outfit.length === 0 ? <h3>No outfit yet!</h3> : <h3>Your Outfit</h3>}
        <OutfitContext.Provider value={{ removeFromOutfit }}>
          {!outfit.find((i) => i.id === currentProduct.id) && (
            <StyledButton onClick={() => addToOutfit(currentProduct)}>
              Add {currentProduct.name} to Your Outfit
            </StyledButton>
          )}
          <ItemList products={outfit} updateProduct={updateProduct} listType="outfit" />
        </OutfitContext.Provider>
      </center>
    </div>
  );
};

export default RelatedItems;

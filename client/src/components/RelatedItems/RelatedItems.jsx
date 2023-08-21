import React from 'react';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';

import ItemList from './ItemList.jsx';
import RelatedContext from './RelatedContext.jsx';
import ComparisonTable from './ComparisonTable.jsx';
import { StyledButton } from '../../styled-components/common-elements.jsx';

const RelatedItems = function ({currentProduct, updateProduct}) {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [outfit, setOutfit] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [comparedItem, setComparedItem] = useState({});

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

  const removeFromOutfit = (item, event) => {
    event.stopPropagation();
    const storedOutfit = localStorage.getItem('yourOutfit');
    let outfitArray = [];
    if (storedOutfit) {
      outfitArray = JSON.parse(storedOutfit);
    }
    outfitArray = outfitArray.filter((i) => i.id !== item.id);
    setOutfit(outfitArray);
    localStorage.setItem('yourOutfit', JSON.stringify(outfitArray));
  };

  const compareItem = (item, event) => {
    event.stopPropagation();
    //window.event.cancelBubble = true; research later: possibly necessary for IE?
    //using true/false instead of !show to allow immediate clicking on another compare button
    if (item) {
      setComparedItem(item);
      setShowTable(true);
    } else {
      setShowTable(false);
    }
  };

  useEffect(getOutfit, [currentProduct]);

  return (
    <div>
      <center>
        <RelatedContext.Provider value={{ removeFromOutfit, compareItem }}>
          { relatedProducts.length === 0 ? <h3>No related items!</h3> : <h3>Related Items</h3>}
          { relatedProducts.length > 0 && <ItemList products={relatedProducts} updateProduct={updateProduct} listType="related" /> }
          { showTable && <ComparisonTable currentProduct={currentProduct} comparedProduct={comparedItem} />}
          { outfit.length === 0 ? <h3>No outfit yet!</h3> : <h3>Your Outfit</h3>}
          {!outfit.find((i) => i.id === currentProduct.id) && (
            <StyledButton onClick={() => addToOutfit(currentProduct)}>
              Add {currentProduct.name} to Your Outfit
            </StyledButton>
          )}
          <ItemList products={outfit} updateProduct={updateProduct} listType="outfit" />
        </RelatedContext.Provider>
      </center>
    </div>
  );
};

export default RelatedItems;

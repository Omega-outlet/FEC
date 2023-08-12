import React from 'react';
import ProductCard from './ProductCard.jsx';

const YourOutfitList = function ({currentProductID, updateProduct}) {
  return (
    <div>
      <h4>No outfit yet!</h4>
      <input type="button" value="Add current item to your outfit" />
    </div>
  );
};

export default YourOutfitList;

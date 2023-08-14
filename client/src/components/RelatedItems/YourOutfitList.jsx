import React from 'react';
import ProductCard from './ProductCard.jsx';
import Carousel from '../../styled-components/related-items.jsx';

const YourOutfitList = function ({updateProduct}) {
  return (
    <div>
      <h4>No outfit yet!</h4>
      <Carousel>
        <input type="button" value="Add current item to your outfit" />
      </Carousel>
    </div>
  );
};

export default YourOutfitList;

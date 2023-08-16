import React from 'react';
import ProductCard from './ProductCard.jsx';
import Carousel from '../../styled-components/horizontal-carousel.jsx';

const YourOutfitList = function ({updateProduct}) {
  return (
    <div>
      <h5>No outfit yet!</h5>
      <Carousel>
        <input type="button" value="Add current item to your outfit" />
      </Carousel>
    </div>
  );
};

export default YourOutfitList;

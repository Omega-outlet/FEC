import React from 'react';
//import { useState } from 'react';
import ProductCard from './ProductCard.jsx';
import Carousel from '../../styled-components/related-items.jsx';

const RelatedList = function({currentProductID, updateProduct}) {
  const products = [
    {
      id: 1,
      name: 'Camo Onesie',
      slogan: 'Blend in to your crowd',
      description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
      category: 'Jackets',
      default_price: '140',
    },
    {
      id: 2,
      name: 'Bright Future Sunglasses',
      slogan: 'You\'ve got to wear shades',
      description: 'Where you\'re going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.',
      category: 'Accessories',
      default_price: '69',
    },
    {
      id: 3,
      name: 'Morning Joggers',
      slogan: 'Make yourself a morning person',
      description: 'Whether you\'re a morning person or not. Whether you\'re gym bound or not. Everyone looks good in joggers.',
      category: 'Pants',
      default_price: '40',
    },
  ];

  const prodList = products.map(
    (prod, index) => <ProductCard product={prod} position={index} key={prod.id} />,
  );

  return (
    <Carousel>
      {prodList}
    </Carousel>
  );
};

export default RelatedList;

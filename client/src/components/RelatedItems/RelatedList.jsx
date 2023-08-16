import React from 'react';
//import { useState } from 'react';
import ProductCard from './ProductCard.jsx';
import Carousel from '../../styled-components/horizontal-carousel.jsx';
import ScrollButton from './ScrollButton.jsx';
import { useRef, useState } from 'react';

const RelatedList = function({currentProductID, updateProduct}) {
  const [focalItem, setFocalItem] = useState(0);

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
    {
      id: 4,
      name: 'Onesie 2',
      slogan: 'Blend in to your crowd',
      description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
      category: 'Jackets',
      default_price: '140',
    },
    {
      id: 5,
      name: 'Future Sunglasses 2',
      slogan: 'You\'ve got to wear shades',
      description: 'Where you\'re going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.',
      category: 'Accessories',
      default_price: '69',
    },
    {
      id: 6,
      name: 'Joggers 2',
      slogan: 'Make yourself a morning person',
      description: 'Whether you\'re a morning person or not. Whether you\'re gym bound or not. Everyone looks good in joggers.',
      category: 'Pants',
      default_price: '40',
    },
    {
      id: 7,
      name: 'Future Sunglasses 3',
      slogan: 'You\'ve got to wear shades',
      description: 'Where you\'re going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.',
      category: 'Accessories',
      default_price: '69',
    },
    {
      id: 8,
      name: 'Joggers 3',
      slogan: 'Make yourself a morning person',
      description: 'Whether you\'re a morning person or not. Whether you\'re gym bound or not. Everyone looks good in joggers.',
      category: 'Pants',
      default_price: '40',
    },
  ];

  const prodList = products.filter((item, index) => index >= focalItem && index < focalItem + 4)
    .map(
      (prod) => <ProductCard product={prod} key={prod.id} />,
    );

  const scrollLeft = () => setFocalItem(focalItem - 1);
  const scrollRight = () => setFocalItem(focalItem + 1);

  return (
    <Carousel>
      { focalItem > 0 && <ScrollButton scroll={scrollLeft} dir="left" /> }
      {prodList}
      { focalItem < products.length - 4 && <ScrollButton scroll={scrollRight} dir="right" /> }
    </Carousel>
  );
};

export default RelatedList;

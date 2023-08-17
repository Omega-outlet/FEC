import { React, useState, useEffect } from 'react';
import ProductCard from './ProductCard.jsx';
import { Carousel } from '../../styled-components/horizontal-carousel.jsx';
import ScrollButton from './ScrollButton.jsx';

const RelatedList = function({products, updateProduct}) {
  const [focalItem, setFocalItem] = useState(0);

  const renderedList = products.filter((item, i) => i >= focalItem && i < focalItem + 4)
    .map((item) => <ProductCard product={item} key={item.id} />);

  const scrollLeft = () => {
    const nextItem = focalItem - 1;
    setFocalItem(nextItem);
  };

  const scrollRight = () => {
    const nextItem = focalItem + 1;
    setFocalItem(nextItem);
  };

  return (
    <Carousel>
      { focalItem > 0 && <ScrollButton scroll={scrollLeft} dir="left" /> }
      { renderedList }
      { focalItem < products.length - 4 && <ScrollButton scroll={scrollRight} dir="right" /> }
    </Carousel>
  );
};

export default RelatedList;

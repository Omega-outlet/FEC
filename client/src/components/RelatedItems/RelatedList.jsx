import { React, useState } from 'react';
import ProductCard from './ProductCard.jsx';
import Carousel from '../../styled-components/horizontal-carousel.jsx';
import ScrollButton from './ScrollButton.jsx';


const RelatedList = function({products, updateProduct}) {
  const [focalItem, setFocalItem] = useState(0);

  const prodList = products.filter((item, index) => index >= focalItem && index < focalItem + 4)
    .map((prod) => <ProductCard product={prod} key={prod.id} />);

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

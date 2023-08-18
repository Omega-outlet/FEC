import { React, useState, useContext } from 'react';
import ProductCard from './ProductCard.jsx';
import { Carousel } from '../../styled-components/horizontal-carousel.jsx';
import ScrollButton from './ScrollButton.jsx';
import { ButtonWrap } from '../../styled-components/horizontal-carousel.jsx';
import OutfitContext from './OutfitContext.jsx';

const ItemList = function({currentProduct, products, updateProduct, listType}) {
  const [focalItem, setFocalItem] = useState(0);
  const { addToOutfit } = useContext(OutfitContext);

  const outfitButton = [];
  if (listType === 'outfit') {
    outfitButton.push(
      <ButtonWrap onClick={() => addToOutfit(currentProduct)} key="1">Add current item to your outfit</ButtonWrap>,
    );
  }

  const renderedList = outfitButton.concat(
    products.filter((item, i) => i >= focalItem && i < focalItem + (listType === 'outfit' ? 3 : 4))
      .map((item) => (
        <ProductCard
          product={item}
          key={item.id}
          updateProduct={updateProduct}
          listType={listType}
        />
      )),
  );

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

export default ItemList;

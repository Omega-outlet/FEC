import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import ProductInformationComponents from '../../styled-components/overviewcomponents/product-information-components.jsx';

function styleEntry({
  style, selectedStyle, setSelectedStyle,
  selectedStyleSalePrice, setSelectedStyleSalePrice
}) {
  return (
    <div>
      <ProductInformationComponents.StyleEntryThumbnail
        src={style.photos[0].thumbnail_url}
        alt={style.name}
      />
    </div>
  );
}

export default styleEntry;

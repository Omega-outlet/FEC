import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import ProductInformationComponents from '../../styled-components/overviewcomponents/product-information-components.jsx';

function styleEntry({
  style, selectedStyle, setSelectedStyle,
  selectedStyleSalePrice, setSelectedStyleSalePrice, selectedStyleName, setSelectedStyleName
}) {
  return (

    <div>
      <ProductInformationComponents.EntryContainer>
        {selectedStyleName === style.name ? (
          <ProductInformationComponents.ClickedStyleThumbnail>
            <span>✔</span>
          </ProductInformationComponents.ClickedStyleThumbnail>
        ) : (null)}
        <ProductInformationComponents.StyleEntryThumbnail
          src={style.photos[0].thumbnail_url}
          alt={style.name}
          value={style.name}
          onClick={() => { setSelectedStyle(style); }}
        />
      </ProductInformationComponents.EntryContainer>
    </div>
  );
}

export default styleEntry;

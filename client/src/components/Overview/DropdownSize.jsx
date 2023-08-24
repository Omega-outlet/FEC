import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import ProductInformationComponents from '../../styled-components/overviewcomponents/product-information-components.jsx';
import ThemeContext from '../ThemeContext.jsx';

function DropdownSize({ size, setSize, setQuantity, openSize, setOpenSize, SKUValueArray
}) {
  const { theme } = useContext(ThemeContext);
  const dropdownMenuSizeHandler = () => {
    setOpenSize(!openSize);
  };

  const dropdownSizeHandler = (e) => {
    setSize(e.target.value);
    setQuantity(1);
    setOpenSize(!openSize);
  };

  return (
    <div>
      Size:
      {/* size selected */}
      {size > -1 ? (
        <ProductInformationComponents.Dropdown>
          <ProductInformationComponents.StyledDropdownButton type="button" onClick={() => { dropdownMenuSizeHandler(); }}>{SKUValueArray[size].size}</ProductInformationComponents.StyledDropdownButton>
          {SKUValueArray && openSize
            ? (
              <ProductInformationComponents.Menu $theme={theme}>
                {(SKUValueArray.map((info, index) => (
                  <li key={info.id}>
                    <button type="button" className="menuItem" value={index} onClick={(e) => { dropdownSizeHandler(e); }}>{info.size}</button>
                  </li>
                )))}
              </ProductInformationComponents.Menu>
            )
            : null}
        </ProductInformationComponents.Dropdown>
      ) : (
        <ProductInformationComponents.Dropdown>
          <ProductInformationComponents.StyledDropdownButton type="button" onClick={() => { dropdownMenuSizeHandler(); }}>Select Size</ProductInformationComponents.StyledDropdownButton>
          {SKUValueArray && openSize
            ? (

              <ProductInformationComponents.Menu $theme={theme}>
                {(SKUValueArray.map((info, index) => (
                  <li key={info.id}>
                    <button type="button" className="menuItem" value={index} onClick={(e) => { dropdownSizeHandler(e); }}>{info.size}</button>
                  </li>
                )))}
              </ProductInformationComponents.Menu>

            )
            : null}
        </ProductInformationComponents.Dropdown>
      )}
    </div>
  );
}

export default DropdownSize;

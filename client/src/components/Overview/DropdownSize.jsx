import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';

function DropdownSize({ size, setSize, setQuantity, openSize, setOpenSize, SKUValueArray
}) {
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
        <div className="dropdownSize">
          <button type="button" onClick={() => { dropdownMenuSizeHandler(); }}>{SKUValueArray[size].size}</button>
          {SKUValueArray && openSize
            ? (
              <ul className="menu">
                {(SKUValueArray.map((info, index) => (
                  <li key={info.id}>
                    <button type="button" className="menuItem" value={index} onClick={(e) => { dropdownSizeHandler(e); }}>{info.size}</button>
                  </li>
                )))}
              </ul>
            )
            : null}
        </div>
      ) : (
        <div className="dropdownSize">
          <button type="button" onClick={() => { dropdownMenuSizeHandler(); }}>Select Size</button>
          {SKUValueArray && openSize
            ? (

              <ul className="menu">
                {(SKUValueArray.map((info, index) => (
                  <li key={info.id}>
                    <button type="button" className="menuItem" value={index} onClick={(e) => { dropdownSizeHandler(e); }}>{info.size}</button>
                  </li>
                )))}
              </ul>

            )
            : null}
        </div>
      )}
    </div>
  );
}

export default DropdownSize;

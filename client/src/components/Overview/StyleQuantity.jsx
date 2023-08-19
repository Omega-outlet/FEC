import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';

function StyleQuantity({
  quantity
}) {
  console.log("quantity", quantity);
  const handleQuantityChange = (max) => {

  };
  return (
    <div>
      {/* <select onChange={handleQuantityChange}>
        <option value="Select Quantity"> Select Quantity </option>
        {SKUValueArray
          ? (SKUValueArray.map((info, index) => (
            <option
              key={index} value={index}>{info?.quantity}
            </option>
          )))
          : null}
      </select> */}
    </div>
  );
}

export default StyleQuantity;

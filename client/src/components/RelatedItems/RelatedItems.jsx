import React from 'react';
// import axios from 'axios';
// import { useState, useEffect, useContext } from 'react';

import RelatedList from './RelatedList.jsx';
import YourOutfitList from './YourOutfitList.jsx';

const RelatedItems = function ({currentProductID, updateProduct}) {
  return (
    <div>
      <RelatedList currentProductID={currentProductID} updateProduct={updateProduct} />
      <YourOutfitList currentProductID={currentProductID} updateProduct={updateProduct} />
    </div>
  );
};

export default RelatedItems;

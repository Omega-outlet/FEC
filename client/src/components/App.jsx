import React from 'react';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import Overview from './Overview/Overview.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';

const App = function () {
  const [currentProductID, setCurrentProductID] = useState(0);
  const [currentProduct, setCurrentProduct] = useState({});
  // get the first product in the array
  const loadFirstProduct = () => {
    axios
      .get('/api/product')
      .then((response) => {
        setCurrentProduct(response.data);
        setCurrentProductID(response.data.id);
      })
      .catch((error) => console.log('Error', error.message));
  };
  useEffect(loadFirstProduct, []);

  const updateProduct = (prodID) => {
    setCurrentProductID(prodID);
  };

  return (
    <div>
      <h1>Omega Outlet</h1>
      <Overview currentProduct={currentProduct} currentProductID={currentProductID} />
      <RelatedItems currentProductID={currentProductID} updateProduct={updateProduct} />
      <QuestionsAndAnswers currentProductID={currentProductID} />
      <RatingsAndReviews currentProductID={currentProductID} />
    </div>
  );
};

export default App;

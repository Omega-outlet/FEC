import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
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

  const updateProduct = (prodID, prod) => {
    setCurrentProductID(prodID);
    setCurrentProduct(prod);
  };

  const dummyProduct = {
    id: 40347,
    campus: 'hr-rfp',
    name: 'Slacker\'s Slacks',
    slogan: 'Comfortable for everything, or nothing',
    description: 'I\'ll tell you how great they are after I nap for a bit.',
    category: 'Pants',
    default_price: '65.00',
    created_at: '2021-08-13T14:38:44.509Z',
    updated_at: '2021-08-13T14:38:44.509Z',
  };

  return (
    <div>
      <h1>Omega Outlet</h1>
      <Overview currentProduct={currentProduct} currentProductID={currentProductID} />
      <RelatedItems currentProduct={dummyProduct} updateProduct={updateProduct} />
      <QuestionsAndAnswers currentProductID={currentProductID} />
      <RatingsAndReviews currentProductID={currentProductID} />
    </div>
  );
};

export default App;

import React from 'react';
import axios from 'axios';
import config from '../../../config.js';
import { useState, useEffect, useContext } from 'react';
import Overview from './Overview/Overview.jsx';
// import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';
// import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
// import RelatedItems from './RelatedItems/RelatedItems.jsx';

const App = function () {
  // const [currentProductID, setCurrentProductID] = useState(1);

  const [currentProduct, setCurrentProduct] = useState({});
  const loadData = () => {
    const options = {
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/',
      products: 'products',
      headers: {
        Authorization: `${config.TOKEN}`,
      },
    };
    axios({
      method: 'get',
      url: `${options.url}${options.products}`,
      headers: options.headers,
      responseType: 'json',
    })
      .then((response) => {
        setCurrentProduct(response.data[0]);
      })
      .catch((error) => console.log('Error', error.message));
  };
  useEffect(loadData, []);

  // const updateProduct = (prodID) => {
  //   setCurrentProductID(prodID);
  // };

  return (
    <div>
      <h1>Omega Outlet</h1>
      <Overview currentProduct={currentProduct} />
     {/* <RelatedItems currentProductID={currentProductID} updateProduct={updateProduct} />
      <QuestionsAndAnswers currentProductID={currentProductID} />
      <RatingsAndReviews currentProductID={currentProductID} /> */}
    </div>
  );
};

export default App;

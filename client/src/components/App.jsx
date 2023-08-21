import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Overview from './Overview/Overview.jsx';

import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';

const App = function () {
  const [currentProductID, setCurrentProductID] = useState(0);
  const [currentProduct, setCurrentProduct] = useState({});
  const [metaData, setMetaData] = React.useState('');
  /*
  only have either loadFirstProduct or loadRandomProduct and
  their respective useEffect uncommented, not both
  Either code would only load on the first render of the page
  */
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

  // get a random product from the array
  // const loadRandomProduct = () => {
  //   axios
  //     .get('/api/randomproduct')
  //     .then((response) => {
  //       setCurrentProduct(response.data);
  //       setCurrentProductID(response.data.id);
  //     })
  //     .catch((error) => console.log('Error', error.message));
  // };
  // useEffect(loadRandomProduct, []);

  const updateProduct = (prodID, prod) => {
    setCurrentProductID(prodID);
    setCurrentProduct(prod);
  };

  React.useEffect(() => {
    axios.get('/reviews/meta', {
      params: {
        product_id: currentProductID,
      },
    })
      .then((response) => setMetaData(response.data))
      .catch(() => {});
  }, [currentProductID]);

  return (
    <div>
      <h1>Omega Outlet</h1>
      <Overview
        currentProduct={currentProduct}
        currentProductID={currentProductID}
        reviewData={metaData}
      />
      <RelatedItems currentProduct={currentProduct} updateProduct={updateProduct} />
      <QuestionsAndAnswers currentProductID={currentProductID} />
      <RatingsAndReviews
        currentProductID={currentProductID}
        metaData={metaData}
        setMetaData={setMetaData}
      />
    </div>
  );
};

export default App;

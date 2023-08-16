const axios = require('axios');

module.exports = {
  // gets list of related product IDs, then gets list of products filtered by related IDs
  getRelatedProducts(req, res) {
    const options = {
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/',
      headers: {
        Authorization: `${process.env.TOKEN}`,
      },
    };
    axios({
      method: 'get',
      url: `${options.url}products/${req.query.currentProductID}/related`,
      headers: options.headers,
      responseType: 'json',
    })
      // .catch((error) => console.log('Error', error.message)),
      .then((response) => axios({
        method: 'get',
        url: `${options.url}products/`,
        headers: options.headers,
        responseType: 'json',
        transformResponse: [(data) => data.filter((item) => response.indexOf(item.id !== -1))],
      })
        .catch((error) => console.log('Error', error.message)))
      .then((result) => res.send(result))
      //update to send error code
      .catch((error) => console.log('Error', error.message));
  },
};

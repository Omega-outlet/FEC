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
      .catch((error) => console.log('Error at first axios get', error.message))
      .then((response) => {
        const relatedIDs = response.data;
        return axios({
          method: 'get',
          url: `${options.url}products/`,
          headers: options.headers,
          params: { count: 2000 },
          responseType: 'json',
          transformResponse: [function (data) {
            const allItems = JSON.parse(data);
            const relatedItems = allItems.filter((item) => relatedIDs.indexOf(item.id) !== -1);
            return JSON.stringify(relatedItems);
          }],
        })
          .catch(() => res.statusCode(500));
      })
      .then((result) => res.send(result.data))
      .catch(() => res.statusCode(500));
  },
};

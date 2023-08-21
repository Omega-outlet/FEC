const axios = require('axios');

module.exports = {
  getRatings: (req, res) => {
    const { product_id, count } = req.query;
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/', {
      params: {
        product_id,
        count,
      },
      headers: {
        Authorization: process.env.TOKEN,
      },
    })
      .then((response) => res.status(200).send(response.data))
      .catch(() => res.status(404).send());
  },
  getMetaData: (req, res) => {
    const productId = req.query.product_id;
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta/', {
      params: {
        product_id: productId,
      },
      headers: {
        Authorization: process.env.TOKEN,
      },
    })
      .then((response) => res.status(200).send(response.data))
      .catch(() => res.status(404).send());
  },
  addReview: (req, res) => {
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/', req.body, {
      headers: {
        Authorization: process.env.TOKEN,
      },
    })
      .then(() => res.status(201).send('CREATED'))
      .catch((err) => res.status(401).send(err));
  },
  // markAsHelpful: (req, res) => {
  //   console.log(req);
  // },
  // reportReview: (req, res) => {
  //   console.log(req);
  // },
};

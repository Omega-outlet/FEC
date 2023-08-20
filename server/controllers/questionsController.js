const axios = require('axios');

const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';
module.exports = {
  getQuestions: (req, res) => {
    const productId = req.query.product_id;
    const { page } = req.query;
    const { count } = req.query;
    axios.get(`${API_URL}/qa/questions/`, {
      params: {
        product_id: productId,
        page,
        count,
      },
      headers: {
        Authorization: process.env.TOKEN,
      },
    })
      .then((response) => res.status(200).send(response.data))
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: 'Failed to get question list!' });
      });
  },
  addQuestion: (req, res) => {
    const { body, name, email } = req.body;
    const productId = req.body.product_id;
    console.log(productId);
    axios.post(`${API_URL}/qa/questions`, {
      body,
      name,
      email,
      product_id: productId,
    },{
      headers: {
        Authorization: process.env.TOKEN,
      },
    })
      .then((response) => res.status(201).send(response.data))
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: 'Failed to add question!' });
      });
  },
  addAnswer: (req, res) => {
    const questionID = req.params.question_id;
    const {
      body, name, email, photos,
    } = req.body;
    axios.post(`${API_URL}/qa/questions/${questionID}/answers`, {
      body,
      name,
      email,
      photos,
    }, {
      headers: {
        Authorization: process.env.TOKEN,
      },
    })
      .then((response) => res.status(201).send(response.data))
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: 'Failed to add answer!' });
      });
  },
  updateHelpful: (req, res) => {
    const { type, id } = req.params;
    console.log(type, id);
    let endpoint;
    if (type === 'questions') {
      endpoint = `${API_URL}/qa/questions/${id}/helpful`;
    } else if (type === 'answers') {
      endpoint = `${API_URL}/qa/answers/${id}/helpful`;
    } else {
      res.status(400).send({ message: 'Wrong type!' });
      return;
    }
    axios.put(endpoint, {}, {
      headers: {
        Authorization: process.env.TOKEN,
      },
    })
      .then(() => {
        res.status(204).send();
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: 'Failed to update Helpful!' });
      });
  },
  reportQA: (req, res) => {
    const { type, id } = req.params;
    let endpoint;

    if (type === 'questions') {
      endpoint = `${API_URL}/qa/questions/${id}/report`;
    } else if (type === 'answers') {
      endpoint = `${API_URL}/qa/answers/${id}/report`;
    } else {
      res.status(400).send({ message: 'Wrong type!' });
      return;
    }
    axios.put(endpoint, {}, {
      headers: {
        Authorization: process.env.TOKEN,
      },
    })
      .then(() => {
        res.status(204).send();
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: 'Failed to report item!' });
      });
  },
};

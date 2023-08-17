import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const ProductCard = function ({ product }) {
  const [productData, setProductData] = useState({});
  const [img1, setImg1] = useState('https://picsum.photos/500/350');
  const [img2, setImg2] = useState('https://picsum.photos/500/400'); //random generated imgs for defaults
  const [salePrice, setSalePrice] = ('');

  // {product} prop holds basic product info from /products api query
  // productData holds additional info from /styles including default style and sale price
  const getProductData = () => {
    const options = {
      url: '/api/product/relatedStyle',
      params: {
        currentProductID: product.id,
      },
    };
    axios({
      method: 'get',
      url: options.url,
      params: options.params,
      responseType: 'json',
    })
      .then((response) => {
        const defaultStyle = response.data.results.find((style) => style['default?']);
        setProductData(defaultStyle);
        // check for data existing on the backend
        if (defaultStyle.photos[0].url) { setImg1(defaultStyle.photos[0].url); }
        if (defaultStyle.photos[1].url) { setImg2(defaultStyle.photos[1].url); }
        if (defaultStyle.sale_price) { setSalePrice(defaultStyle.sale_price); }
      })
      .catch((error) => console.log('Error', error.message));
  };

  useEffect(getProductData, []);

  return (
    <li>
      <table>
        <tbody>
          <tr>
            <td>
              {img1 && (
                <img src={img1} alt="default style 1" />
              )}
            </td>
          </tr>
          <tr>
            <td>
              {product.category}
            </td>
          </tr>
          <tr>
            <td>
              <strong>{product.name}</strong>
            </td>
          </tr>
          <tr>
            <td>
              <em>{product.slogan}</em>
            </td>
          </tr>
          <tr>
            <td>
              {salePrice
                ? (
                  <>
                    <em>
                      $
                      {salePrice}
                    </em>
                    <s>
                      $
                      {product.default_price}
                    </s>
                  </>
                )
                : `$${product.default_price}`}
            </td>
          </tr>
          <tr>
            <td>
              *****
            </td>
          </tr>
        </tbody>
      </table>
    </li>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    default_price: PropTypes.string.isRequired,
    slogan: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;

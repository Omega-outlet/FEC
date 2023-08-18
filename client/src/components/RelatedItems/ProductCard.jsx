import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Item, Image } from '../../styled-components/horizontal-carousel.jsx';

const ProductCard = function ({ product, updateProduct, listType }) {
  const [productData, setProductData] = useState({});
  const [img1, setImg1] = useState('https://tinyurl.com/bp78yn9f');
  const [img2, setImg2] = useState('https://tinyurl.com/2tb6ry8d'); //random imgs for defaults
  const [salePrice, setSalePrice] = useState('');
  const [hover, setHover] = useState(false);

  // {product} prop holds basic product info from /products api query
  // productData holds additional info from /styles including default style and sale price
  const getProductData = () => {
    axios.get('/api/product/relatedStyle', {
      params: {
        currentProductID: product.id,
      },
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

  const onHover = () => setHover(!hover);

  useEffect(getProductData, []);

  return (
    <Item>
      <table>
        <tbody>
          <tr>
            <td>
              {img1 && (
                <Image src={hover ? img2 : img1} alt="product image" onMouseEnter={onHover} onMouseLeave={onHover}/>
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
    </Item>
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

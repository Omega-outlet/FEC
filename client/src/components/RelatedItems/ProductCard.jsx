import React from 'react';

const ProductCard = function ({product}) {
  // product state

  return (
    <li>
      <table>
        <tbody>
          <tr>
            <td>
              <img src="https://picsum.photos/200/250" alt="random sample pic" />
            </td>
          </tr>
          <tr>
            <td>
              {product.category}
            </td>
          </tr>
          <tr>
            <td>
              <strong>{product.name}</strong><em>{product.slogan}</em>
            </td>
          </tr>
          <tr>
            <td>
              ${product.price}
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

export default ProductCard;

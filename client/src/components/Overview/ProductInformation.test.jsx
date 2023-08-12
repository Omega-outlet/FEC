/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductInformation from './ProductInformation.jsx';

describe('renders product title', () => {
  const products = [
    {
      id: 1,
      name: 'Camo Onesie',
      slogan: 'Blend in to your crowd',
      description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
      category: 'Jackets',
      default_price: '140',
    },
    {
      id: 2,
      name: 'Bright Future Sunglasses',
      slogan: 'You\'ve got to wear shades',
      description: 'Where you\'re going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.',
      category: 'Accessories',
      default_price: '69',
    }];

  const styles = {
    product_id: '1',
    results: [
      {
        style_id: 1,
        name: 'Forest Green & Black',
        original_price: '140',
        sale_price: '0',
        'default?': true,
        photos: [
          {
            thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
            url: 'urlplaceholder/style_1_photo_number.jpg',
          },
          {
            thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
            url: 'urlplaceholder/style_1_photo_number.jpg',
          },
          // ...
        ],
        skus: {
          37: {
            quantity: 8,
            size: 'XS',
          },
          38: {
            quantity: 16,
            size: 'S',
          },
          39: {
            quantity: 17,
            size: 'M',
          },
          // ...
        },
      },
      {
        style_id: 2,
        name: 'Desert Brown & Tan',
        original_price: '140',
        sale_price: '0',
        'default?': false,
        photos: [
          {
            thumbnail_url: 'urlplaceholder/style_2_photo_number_thumbnail.jpg',
            url: 'urlplaceholder/style_2_photo_number.jpg',
          },
        ],
        skus: {
          37: {
            quantity: 8,
            size: 'XS',
          },
          38: {
            quantity: 16,
            size: 'S',
          },
          39: {
            quantity: 17,
            size: 'M',
          },
        },
      }],
  };
  it('renders first product title in products array', () => {
    render(<ProductInformation
      currentProduct={products[0]}
      currentProductID={1}
      styles={styles}
    />);
    const productName = screen.getByText('Camo Onesie');
    expect(productName).toBeTruthy();
  });
  it('renders second product title in products array', () => {
    render(<ProductInformation
      currentProduct={products[1]}
      currentProductID={2}
      styles={styles}
    />);
    const productName = screen.getByText('Bright Future Sunglasses');
    expect(productName).toBeTruthy();
  });
});

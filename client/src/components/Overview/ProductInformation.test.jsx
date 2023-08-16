/**
 * @jest-environment jsdom
 */


import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ProductInformation from './ProductInformation.jsx';
import StyleEntry from './StyleEntry.jsx';
import Overview from './Overview.jsx';
// 2 products in products array
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

// product 1 with 2 styles
const styles = {
  product_id: '1',
  results: [
    {
      'style_id': 1,
      'name': 'Forest Green & Black',
      'original_price': '140',
      'sale_price': '100',
      'default?': true,
      'photos': [
        {
          thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
          url: 'urlplaceholder/style_1_photo_number.jpg',
        },
        {
          thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail2.jpg',
          url: 'urlplaceholder/style_1_photo_number.jpg',
        },
      ],
      'skus': {
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
    },
    {
      'style_id': 2,
      'name': 'Desert Brown & Tan',
      'original_price': '140',
      'sale_price': '0',
      'default?': false,
      'photos': [
        {
          thumbnail_url: 'urlplaceholder/style_2_photo_number_thumbnail.jpg',
          url: 'urlplaceholder/style_2_photo_number.jpg',
        },
      ],
      'skus': {
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
// product 2 with 3 styles
const styles2 = {
  product_id: '2',
  results: [
    {
      'style_id': 1,
      'name': 'Forest Green & Black',
      'original_price': '140',
      'sale_price': '0',
      'default?': true,
      'photos': [
        {
          thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
          url: 'urlplaceholder/style_1_photo_number.jpg',
        },
        {
          thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail2.jpg',
          url: 'urlplaceholder/style_1_photo_number.jpg',
        },
      ],
      'skus': {
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
    },
    {
      'style_id': 2,
      'name': 'Desert Brown & Tan',
      'original_price': '140',
      'sale_price': '0',
      'default?': false,
      'photos': [
        {
          thumbnail_url: 'urlplaceholder/style_2_photo_number_thumbnail.jpg',
          url: 'urlplaceholder/style_2_photo_number.jpg',
        },
      ],
      'skus': {
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
    },
    {
      'style_id': 3,
      'name': 'Ocean Blue & Gray',
      'original_price': '140',
      'sale_price': '0',
      'default?': false,
      'photos': [
        {
          thumbnail_url: 'urlplaceholder/style_3_photo_number_thumbnail.jpg',
          url: 'urlplaceholder/style_3_photo_number.jpg',
        },
      ],
      'skus': {
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

describe('Overview component', () => {
  it('Overview component contains ImageGallery component', async () => {
    render(<Overview
      currentProduct={products[0]}
      currentProductID={1}
    />);
    await waitFor(() => {
      expect(screen.getByText(/Image Gallery/i)).toBeTruthy();
    });
  });
  it('Overview component contains ProductInformation component', async () => {
    render(<Overview
      currentProduct={products[0]}
      currentProductID={1}
    />);
    await waitFor(() => {
      expect(screen.getByText(/Camo Onesie/i)).toBeTruthy();
    });
  });
});
describe('product title', () => {
  it('renders first product title in products array', async () => {
    render(<ProductInformation
      currentProduct={products[0]}
      currentProductID={1}
      styles={styles}
    />);
    await waitFor(() => {
      const productName = screen.getByText('Camo Onesie');
      expect(productName).toBeTruthy();
    });
  });
  it('renders second product title in products array', async () => {
    render(<ProductInformation
      currentProduct={products[1]}
      currentProductID={2}
      styles={styles}
    />);
    await waitFor(() => {
      const productName = screen.getByText('Bright Future Sunglasses');
      expect(productName).toBeTruthy();
    });
  });
});
describe('product description', () => {
  it('renders first product description', async () => {
    render(<ProductInformation
      currentProduct={products[0]}
      currentProductID={1}
      styles={styles}
    />);
    await waitFor(() => {
      const productDescription = screen.getByText('The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.');
      expect(productDescription).toBeTruthy();
    });
  });
  it('renders second product description', async () => {
    render(<ProductInformation
      currentProduct={products[1]}
      currentProductID={1}
      styles={styles}
    />);
    await waitFor(() => {
      const productDescription = screen.getByText('Where you\'re going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.');
      expect(productDescription).toBeTruthy();
    });
  });
});
describe('style thumbnails', () => {
  it('renders the first thumbnail of the style', async () => {
    render(<StyleEntry
      style={styles.results[0]}
    />);
    await waitFor(() => {
      const imageElement = screen.getByAltText('Forest Green & Black');
      expect(imageElement).toBeTruthy();
      expect(imageElement.src).toContain('urlplaceholder/style_1_photo_number_thumbnail.jpg');
    });
  });
  it('renders the first thumbnail of the style', async () => {
    render(<StyleEntry
      style={styles.results[1]}
    />);
    await waitFor(() => {
      const imageElement = screen.getByAltText('Desert Brown & Tan');
      expect(imageElement).toBeTruthy();
      expect(imageElement.src).toContain('urlplaceholder/style_2_photo_number_thumbnail.jpg');
    });
  });
  it('renders 2 style icons when product has 2 styles', async () => {
    render(<ProductInformation
      currentProduct={products[0]}
      currentProductID={1}
      styles={styles}
    />);
    await waitFor(() => {
      const element = screen.getAllByTestId('styleEntry');
      expect(element).toHaveLength(2);
    });
  });
  it('renders 3 style icons when product has 3 styles', async () => {
    render(<ProductInformation
      currentProduct={products[1]}
      currentProductID={2}
      styles={styles2}
    />);
    await waitFor(() => {
      const element = screen.getAllByTestId('styleEntry');
      expect(element).toHaveLength(3);
    });
  });
});
describe('render price', (done) => {
  it('renders the original price of the style', () => {
    render(<Overview currentProduct={products[0]} currentProductID={1} />);
    setTimeout(async () => {
      await waitFor(() => {
        const originalPrice = screen.getByText('140');
        expect(originalPrice).toBeTruthy();
      });
      done();
    }, 500);
  });
  it('renders the sales price of the style', () => {
    render(<Overview currentProduct={products[0]} currentProductID={1} />);
    setTimeout(async () => {
      await waitFor(() => {
        const salePrice = screen.getByText('100');
        expect(salePrice).toBeTruthy();
      });
      done();
    }, 500);
  });
});
describe('render category', () => {
  it('renders the category of the product', async () => {
    render(<Overview currentProduct={products[0]} currentProductID={1} />);
    await waitFor(() => {
      const category = screen.getByText('Jackets');
      expect(category).toBeTruthy();
    });
  });
});
describe('share anchor element "button" tests', () => {
  it('should have link to Twitter', async () => {
    render(<ProductInformation
      currentProduct={products[1]}
      currentProductID={2}
      styles={styles2}
    />);
    await waitFor(() => {
      const anchorElement = screen.getAllByRole('link')[0];
      expect(anchorElement.href).toContain('https://twitter.com/');
    });
  });
  it('should have link to Facebook', async () => {
    render(<ProductInformation
      currentProduct={products[1]}
      currentProductID={2}
      styles={styles2}
    />);
    await waitFor(() => {
      const anchorElement = screen.getAllByRole('link')[1];
      expect(anchorElement.href).toContain('http://www.facebook.com/');
    });
  });
  it('should have link to Pinterest', async () => {
    render(<ProductInformation
      currentProduct={products[1]}
      currentProductID={2}
      styles={styles2}
    />);
    await waitFor(() => {
      const anchorElement = screen.getAllByRole('link')[2];
      expect(anchorElement.href).toContain('https://pinterest.com/');
    });
  });
});

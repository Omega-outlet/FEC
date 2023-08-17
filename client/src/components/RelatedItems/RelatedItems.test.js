/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import RelatedItems from './RelatedItems.jsx';
import axios from 'axios';

jest.mock('axios')
const mockedAxios = axios;
beforeEach(() => {
  mockedAxios.get.mockImplementation((url) => {
    if (url === '/api/product/related') {
      return Promise.resolve({
        data: [
          {
            name: "Product Name",
            category: "Category",
            default_price: "$10",
            slogan: "Slogan",
            id: 1,
          },
          {
            name: "Product Name 2",
            category: "Category",
            default_price: "$10",
            slogan: "Slogan",
            id: 2,
          },
          {
            name: "Product Name 3",
            category: "Category",
            default_price: "$10",
            slogan: "Slogan",
            id: 3,
          },
          {
            name: "Product Name 4",
            category: "Category",
            default_price: "$10",
            slogan: "Slogan",
            id: 4,
          },
          {
            name: "Product Name 5",
            category: "Category",
            default_price: "$10",
            slogan: "Slogan",
            id: 5,
          },
        ],
      });
    }
    if (url === '/api/product/relatedStyle') {
      return Promise.resolve({
        data: {
          results: [
            {
              "default?": true,
              photos: [
                {
                  url: "http://example.com/image.jpg",
                },
                {
                  url: "http://example.com/image2.jpg",
                }
              ],
              sale_price: "$5",
            }
          ]
        }
      });
    }
    throw new Error("Unknown URL");
  })
})


describe('Related Items', () => {
  test('item 1 exists', async () => {
    await waitFor(() => render(<RelatedItems currentProductID={1} />));
    await waitFor(() => expect(screen.queryByText('Related Items')).toBeTruthy());
    await waitFor(() => expect(screen.queryByText('Product Name')).toBeTruthy());
    expect(mockedAxios.get).nthCalledWith(1, '/api/product/related', {
      params: {
        currentProductID: 1,
      },
      responseType: "json",
    })
    expect(mockedAxios.get).nthCalledWith(2, '/api/product/relatedStyle', {
      params: {
        currentProductID: 1,
      },
      responseType: "json",
    })
    expect(mockedAxios.get).toHaveBeenCalledTimes(5);
  });

  test('left button does not exist on page render', async () => {
    render(<RelatedItems />);
    expect(screen.querytByText('<')).toThrow();
  });

  test('right button exists on page render', () => {
    render(<RelatedItems />);
    const rightButton = screen.getByText('>');
    expect(rightButton).toBeTruthy();
  });

  test('after scrolling right, first item disappears and left button appears', () => {
    render(<RelatedItems />);
    const rightButton = screen.getByText('>');
    fireEvent.click(rightButton);
    expect(screen.getByText('Camo Onesie')).toThrow();
    expect(screen.getByText('<')).toBeTruthy();
  });
});

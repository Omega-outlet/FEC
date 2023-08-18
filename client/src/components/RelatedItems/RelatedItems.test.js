/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import RelatedItems from './RelatedItems.jsx';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios;
beforeEach(() => {
///////mock axios calls and product data///////
  mockedAxios.get.mockImplementation((url) => {
    if (url === '/api/product/related') {
      return Promise.resolve({
        data: [
          {
            name: "Product Name 1",
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
  });
///////mock localStorage and related methods///////
  class LocalStorageMock {
    constructor() {
      this.store = {};
    }

    clear() {
      this.store = {};
    }

    getItem(key) {
      return this.store[key] || null;
    }

    setItem(key, value) {
      this.store[key] = String(value);
    }

    removeItem(key) {
      delete this.store[key];
    }
  }
  global.localStorage = new LocalStorageMock;
  window.localStorage.clear();
});

//////////TEST RELATED ITEMS////////////
describe('Related Items', () => {
  test('Related items render with first product and right button on page load', async () => {
    const dummy = {
      name: "Product Name 1",
      category: "Category",
      default_price: "$10",
      slogan: "Slogan",
      id: 1,
    };
    await waitFor(() => render(<RelatedItems currentProduct={dummy} />));
    // test header and products render
    await waitFor(() => expect(screen.queryByText('Related Items')).toBeTruthy());
    await waitFor(() => expect(screen.queryByText('Product Name 1')).toBeTruthy());
    // test left button does not render
    await waitFor(() => expect(screen.queryByText('<')).toBeNull());
    // test right button renders
    await waitFor(() => expect(screen.queryByText('>')).toBeTruthy());
    // test first axios get request calls the related API
    expect(mockedAxios.get).nthCalledWith(1, '/api/product/related', {
      params: {
        currentProductID: 1,
      },
      responseType: "json",
    });
    // test second axios get request calls the relatedStyle API
    expect(mockedAxios.get).nthCalledWith(2, '/api/product/relatedStyle', {
      params: {
        currentProductID: 1,
      },
      responseType: "json",
    })
    // test axios get request is called 5 times (1 list get + 4 product style gets)
    expect(mockedAxios.get).toHaveBeenCalledTimes(5);
  });

  test('after scrolling right, first item disappears and left button appears', async () => {
    const dummy = {
      name: "Product Name 1",
      category: "Category",
      default_price: "$10",
      slogan: "Slogan",
      id: 1,
    };
    await waitFor (() => render(<RelatedItems currentProduct={dummy} />));
    // click right button to shift all items to the right
    await waitFor (() => fireEvent.click(screen.getByText('>')));
    // test first product disappears
    await waitFor (() => expect(screen.queryByText('Product Name 1')).toBeNull());
    // test left button appears
    await waitFor (() => expect(screen.queryByText('<')).toBeTruthy());
    // test right button disappears for 5 element list
    await waitFor (() => expect(screen.queryByText('>')).toBeNull());
  });
});

//////////TEST YOUR OUTFIT////////////
describe('Your Outfit', () => {
  //mock updateProduct function from parent
  const updateProduct = async (prodID, prod) => {
    await waitFor (() => render(<RelatedItems currentProductID={prodID} currentProduct={prod} />));
  };

  test('"add to outfit" and "remove from outfit buttons" behave as expected', async () => {
    const dummy = {
      name: "Product Name 1",
      category: "Category",
      default_price: "$10",
      slogan: "Slogan",
      id: 1,
    };
    const dummyString = JSON.stringify([dummy]);
    await waitFor (() => render(<RelatedItems currentProduct={dummy} updateProduct={updateProduct} />));
    await waitFor (() => expect(localStorage.getItem('yourOutfit')).toBeNull());

    // test add current item button
    await waitFor (() => fireEvent.click(screen.getByText('Add current item to your outfit')));
    await waitFor (() => expect(localStorage.getItem('yourOutfit')).toEqual(dummyString));

    // test remove item button
    await waitFor (() => fireEvent.click(screen.getByText('X')));
    await waitFor (() => expect(localStorage.getItem('yourOutfit')).toEqual('[]'));
  });
});

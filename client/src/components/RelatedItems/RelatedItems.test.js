/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RelatedItems from './RelatedItems.jsx';

describe('List item', () => {
  render(<RelatedItems />);

  test('item 1 exists', () => {
    const item = screen.getByText('Camo Onesie');
    expect(item).toBeTruthy();
  })

  test('left button does not exist on page render', () => {
    expect(screen.queryByText('<')).toBeNull();
  });

  test('right button exists on page render', () => {
    expect(screen.queryByText('>')).toBeTruthy();
  });

  test('after scrolling right, left button appears and first item disappears', () => {
    const rightButton = screen.getByText(/>/i);
    fireEvent.click(rightButton);
    expect(screen.queryByText('<')).toBeTruthy();
  })

})
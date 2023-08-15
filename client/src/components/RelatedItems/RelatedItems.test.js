/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RelatedItems from './RelatedItems.jsx';

describe('Related Items', () => {
  render(<RelatedItems />);

  test('item 1 exists', () => {
    expect(screen.getByText('Camo Onesie')).toBeTruthy();
  });

  test('left button does not exist on page render', () => {
    expect(() => screen.getByText('<').toThrow());
  });

  const rightButton = screen.getByText('>');

  test('right button exists on page render', () => {
    expect(rightButton).toBeTruthy();
  });

  test('after scrolling right, first item disappears and left button appears', () => {
    fireEvent.click(rightButton);
    expect(() => screen.getByText('Camo Onesie').toThrow());
    expect(() => screen.getByText('<').toBeTruthy());
  });
});

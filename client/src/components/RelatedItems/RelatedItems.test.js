/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RelatedItems from './RelatedItems.jsx';

describe('Related Items', () => {
  test('item 1 exists', () => {
    render(<RelatedItems />);
    expect(screen.getByText('Camo Onesie')).toBeTruthy();
  });

  test('left button does not exist on page render', () => {
    render(<RelatedItems />);
    expect(screen.getByText('<')).toThrow();
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

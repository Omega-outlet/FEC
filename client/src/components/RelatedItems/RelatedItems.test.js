/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RelatedItems from './RelatedItems.jsx';

//tests use hardcoded product ID: 40352 in App.jsx
describe('Related Items', () => {
  test('item 1 exists', async () => {
    await render(<RelatedItems />);
    await expect(screen.queryByText('Camo Onesie')).toBeTruthy();
  });

  test('left button does not exist on page render', () => {
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

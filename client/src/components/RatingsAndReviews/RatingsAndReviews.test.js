/** @jest-environment jsdom */
/* eslint-env jest */
import { render, screen } from '@testing-library/react';
import React from 'react';
import RatingsAndReviews from './RatingsAndReviews.jsx';

describe('Ratings Component', () => {
  render(<RatingsAndReviews />);
  const title = screen.getByTestId('text');

  test('Component rendered', () => {
    expect(title).toBeTruthy();
  });
});

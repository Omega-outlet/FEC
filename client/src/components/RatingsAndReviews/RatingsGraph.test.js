/** @jest-environment jsdom */
/* eslint-env jest */
import { render, screen } from '@testing-library/react';
import React from 'react';
import RatingsGraph from './RatingsGraph.jsx';

describe('Ratings Graph Component', () => {
  render(<RatingsGraph />);
  const title = screen.getByTestId('ratings-graph-component');

  test('Component rendered', () => {
    expect(title).toBeTruthy();
  });
});

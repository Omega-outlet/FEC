/** @jest-environment jsdom */
/* eslint-env jest */
import { render, screen } from '@testing-library/react';
import React from 'react';
import RatingsGraph from './RatingsGraph.jsx';
import { calculatePercentage } from './arithmetic.js';

describe('Ratings Graph Component', () => {
  const mockData = {
    1: '150', 2: '214', 3: '330', 4: '324', 5: '707',
  };
  test('Component rendered', () => {
    render(<RatingsGraph metaData={mockData} rating="5" />);
    const title = screen.getByTestId('ratings-graph-component');
    expect(title).toBeTruthy();
  });
  test('Calculate Percentage working in component', () => {
    expect(calculatePercentage(mockData, '1')).toBe(8);
  });
});

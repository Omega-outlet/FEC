/** @jest-environment jsdom */
/* eslint-env jest */
import { render, screen } from '@testing-library/react';
import React from 'react';
import ReviewList from './ReviewList.jsx';
import data from './exampleData.json';

describe('ReviewList Component', () => {
  const reviews = data.results;
  render(<ReviewList reviews={reviews} />);
  const title = screen.getByTestId('reviewList-component');

  test('Component rendered', () => {
    expect(title).toBeTruthy();
  });
});

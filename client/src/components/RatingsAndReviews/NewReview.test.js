/** @jest-environment jsdom */
/* eslint-env jest */
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import NewReview from './NewReview.jsx';

describe('NewReview Component', () => {
  render(<NewReview />);

  test('NewReview Component rendered', () => {
    expect(screen.getByTestId('newReviewForm')).toBeTruthy();
  });
});

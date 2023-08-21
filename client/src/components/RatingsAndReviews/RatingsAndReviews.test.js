/** @jest-environment jsdom */
/* eslint-env jest */
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import RatingsAndReviews from './RatingsAndReviews.jsx';

describe('Ratings Component', () => {
  const mockCurrentProductID = 40344;
  test('RatingsAndReviews Component rendered', () => {
    render(<RatingsAndReviews currentProductID={mockCurrentProductID} />);
    expect(screen.getByTestId('title')).toBeTruthy();
  });

  test('NewReview Component not rendered', () => {
    render(<RatingsAndReviews currentProductID={mockCurrentProductID} />);
    expect(screen.queryByTestId('newReviewForm')).toBeNull();
  });

  test('NewReview Component rendered after button click', () => {
    render(<RatingsAndReviews currentProductID={mockCurrentProductID} />);
    const button = screen.getByTestId('newReviewBtn');
    fireEvent.click(button);
    expect(screen.queryByTestId('newReviewForm')).toBeTruthy();
  });

  test('NewReview Component hidden after two button clicks', () => {
    render(<RatingsAndReviews currentProductID={mockCurrentProductID} />);
    const button = screen.getByTestId('newReviewBtn');
    fireEvent.click(button);
    const closeButton = screen.getByTestId('closeModal');
    fireEvent.click(closeButton);
    expect(screen.queryByTestId('newReviewForm')).toBeNull();
  });
});

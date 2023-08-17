/** @jest-environment jsdom */
/* eslint-env jest */
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import RatingsAndReviews from './RatingsAndReviews.jsx';

// describe('Ratings Component', () => {
//   render(<RatingsAndReviews />);

//   test('RatingsAndReviews Component rendered', () => {
//     expect(screen.getByTestId('title')).toBeTruthy();
//   });

//   test('New Review is not rendered', () => {
//     expect(screen.queryByTestId('newReviewForm')).toBeNull();
//   });

//   const button = screen.getByTestId('newReviewBtn');
//   fireEvent.click(button);

//   test('NewReview Component rendered', () => {
//     expect(() => screen.getByTestId('newReviewForm')).toBeTruthy();
//   });
// });

// test('NewReview Component hidden', () => {
//   fireEvent.click(button);
//   fireEvent.click(button);
//   expect(() => screen.queryByTestId('newReviewForm')).toBeNull();
// });
describe('Ratings Component', () => {
  test('RatingsAndReviews Component rendered', () => {
    render(<RatingsAndReviews />);
    expect(screen.getByTestId('title')).toBeTruthy();
  });
  test('NewReview Component not rendered', () => {
    render(<RatingsAndReviews />);
    expect(screen.queryByTestId('newReviewForm')).toBeNull();
  });
  test('NewReview Component rendered after button click', () => {
    render(<RatingsAndReviews />);
    const button = screen.getByTestId('newReviewBtn');
    fireEvent.click(button);
    expect(screen.queryByTestId('newReviewForm')).toBeTruthy();
  });
  test('NewReview Component hidden after two button clicks', () => {
    render(<RatingsAndReviews />);
    const button = screen.getByTestId('newReviewBtn');
    fireEvent.click(button);
    fireEvent.click(button);
    expect(screen.queryByTestId('newReviewForm')).toBeNull();
  });
});

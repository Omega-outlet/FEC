/** @jest-environment jsdom */
/* eslint-env jest */
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import NewReview from './NewReview.jsx';

describe('NewReview Component', () => {
  test('NewReview Component rendered', () => {
    const renderForm = jest.fn();
    render(<NewReview renderForm={renderForm} />);
    expect(screen.getByTestId('newReviewForm')).toBeTruthy();
  });
  test('handleChange changes values based on user input', () => {
    const renderForm = jest.fn();
    render(<NewReview renderForm={renderForm}/>);
    const summary = screen.getByLabelText('Review Summary:');
    const username = screen.getByLabelText('Display Name:');

    fireEvent.change(username, { target: { value: 'exampleUsername' } });
    fireEvent.change(summary, { target: { value: 'exampleSummary' } });
    expect(username.value).toBe('exampleUsername');
    expect(summary.value).toBe('exampleSummary');
  });
  test('handleSubmit handles form submission', () => {

  });
});

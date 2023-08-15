/**
 * @jest-environment jsdom
 */
/* eslint-env jest */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import QuestionsAndAnswers from './QuestionsAndAnswers';

describe('<QuestionsAndAnswers />', () => {
  it('filter questions based on search input', () => {
    const { getByPlaceholderText, queryByText } = render(<QuestionsAndAnswers />);
    const searchInput = getByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWERS...');
    // Fire an input event on the search bar with a str from the data
    fireEvent.change(searchInput, { target: { value: 'cheaper' } });
    expect(queryByText('Why is this product cheaper here than other sites?')).not.toBeNull();
    // Fire an input event on the search bar with a word not in the data
    fireEvent.change(searchInput, { target: { value: 'Eric' } });
    expect(queryByText('Why is this product cheaper here than other sites?')).toBeNull();
  });
});

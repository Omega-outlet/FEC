/**
 * @jest-environment jsdom
 */
/* eslint-env jest */
import React from 'react';
import { render, act } from '@testing-library/react';
import axios from 'axios';
import useHelpfulYes from './useHelpfulYes.jsx';

// Mocking the axios, isolate the function from its external dependencie
jest.mock('axios');
describe('useHelpfulYes', () => {
  it('should call the correct endpoint for questions type', async () => {
    axios.put.mockResolvedValue({ status: 204 });

    // This utility function helps to use hook outside of a component.
    function Test() {
      const registerHelpfulClick = useHelpfulYes();
      act(() => {
        registerHelpfulClick('questions', 1);
      });
      return null;
    }
    render(<Test />);
    expect(axios.put).toHaveBeenCalledWith('/qa/questions/1/helpful');

    // You can also add additional tests for the 'answers' and 'review' types
    // and also for the error condition.
  });
  it('should throw an error for wrong type', async () => {
    const registerHelpfulClick = useHelpfulYes();

    await expect(() => registerHelpfulClick('wrong', 123)).toThrow('Wrong type!');
  });
});

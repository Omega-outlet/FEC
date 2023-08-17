/** @jest-environment jsdom */
/* eslint-env jest */
import React from 'react';
import { calculateTotal, calculateAverage, calculateRecommended } from './arithmetic.js';

describe('test arithmetic js', () => {
  test('calculateTotal returns total number of reviews', () => {
    const ratingsObj = {
      false: '444',
      true: '1281',
    };
    expect(calculateTotal(ratingsObj)).toBe(1725);
  });
  test('calculateRecommended returns % of reviews that recommend product', () => {
    const recommendObj = {
      false: '444',
      true: '1281',
    };
    expect(calculateRecommended(recommendObj)).toBe(74);
  });
});

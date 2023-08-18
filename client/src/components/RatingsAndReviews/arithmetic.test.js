/** @jest-environment jsdom */
/* eslint-env jest */
import React from 'react';
import { calculateTotal, calculateAverage, calculateRecommended } from './arithmetic.js';

describe('test arithmetic js', () => {
  test('calculateTotal returns total number of reviews', () => {
    const recommendObj = {
      false: '444',
      true: '1281',
    };
    expect(calculateTotal(recommendObj)).toBe(1725);
  });
  test('calculateRecommended returns % of reviews that recommend product', () => {
    const recommendObj = {
      false: '444',
      true: '1281',
    };
    expect(calculateRecommended(recommendObj)).toBe(74);
  });
  test('calculateAverage returns star rating average of a product', () => {
    const ratingsObj = {
      1: '150',
      2: '214',
      3: '330',
      4: '324',
      5: '707',
    };
    expect(calculateAverage(ratingsObj)).toBe(3.7);
  });
});

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import {getSum} from './App.jsx';

describe('adds two numbers', () => {
  it('should add two numbers', () => {
    expect(getSum(1,2)).toBe(3)})
  });
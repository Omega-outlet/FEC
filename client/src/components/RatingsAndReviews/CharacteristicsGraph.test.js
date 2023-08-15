/** @jest-environment jsdom */
/* eslint-env jest */
import { render, screen } from '@testing-library/react';
import React from 'react';
import CharacteristicsGraph from './CharacteristicsGraph.jsx';

describe('Char Graph Component', () => {
  render(<CharacteristicsGraph />);
  const title = screen.getByTestId('char-graph-component');

  test('Component rendered', () => {
    expect(title).toBeTruthy();
  });
});

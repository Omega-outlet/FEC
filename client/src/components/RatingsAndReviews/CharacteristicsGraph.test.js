/** @jest-environment jsdom */
/* eslint-env jest */
import { render, screen } from '@testing-library/react';
import React from 'react';
import CharacteristicsGraph from './CharacteristicsGraph.jsx';

describe('Char Graph Component', () => {
  const descriptionArr = [
    { attribute: 'size', descArr: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'] },
    { attribute: 'width', descArr: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'] },
    { attribute: 'comfort', descArr: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'] },
    { attribute: 'quality', descArr: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'] },
    { attribute: 'length', descArr: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'] },
    { attribute: 'fit', descArr: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'] },
  ];
  const mockMetaData = {
    Comfort: { id: 135221, value: '3.3343653250773994' },
    Fit: { id: 135219, value: '3.2572533849129594' },
    Length: { id: 135220, value: '3.2960396039603960' },
    Quality: { id: 135222, value: '3.2974619289340102' },
  };

  render(<CharacteristicsGraph metaData={mockMetaData} />);
  const title = screen.getByTestId('char-graph-component');

  test('Component rendered', () => {
    expect(title).toBeTruthy();
  });
});

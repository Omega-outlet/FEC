/**
 * @jest-environment jsdom
 */
/* eslint-env jest */
import React from 'react';
import { render, act } from '@testing-library/react';
import HelpfulYesButton from './HelpfulYesButton.jsx';

describe('HelpfulYesButton', () => {
  it('renders shows initial count', () => {
    const { getByText } = render(<HelpfulYesButton initialCount={10} onHelpfulClick={() => {}} />);
    const button = getByText('Yes(10)');
    expect(button).not.toBeNull();
  });
  it('updates count when clicked', () => {
    const onHelpfulClickMock = jest.fn();
    const { getByText } = render(<HelpfulYesButton
      initialCount={10}
      onHelpfulClick={onHelpfulClickMock}
    />);
    const button = getByText('Yes(10)');
    // act() that makes sure all updates related to these “units” have been
    // processed and applied to the DOM before you make any assertions
    act(() => {
      button.click();
    });
    expect(getByText('Yes(11)')).not.toBeNull();
    expect(onHelpfulClickMock).toHaveBeenCalled();
  });
});

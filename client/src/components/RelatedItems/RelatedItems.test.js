/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import RelatedItems from './RelatedItems.jsx'


describe("List item", () => {
  const setToggle = jest.fn();
  render(<RelatedItems />);
  const item = screen.getByText("Camo Onesie");

  // Test 1
  test("item exists", () => {
      expect(item).toBeTruthy();
  })

})
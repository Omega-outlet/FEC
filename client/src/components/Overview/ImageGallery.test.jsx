/**
 * @jest-environment jsdom
 */

import React, {useState} from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import DefaultView from './DefaultView.jsx';
import DefaultThumbnails from './DefaultThumbnails.jsx';
import Data from './OverviewDummyData.js';

describe('default view', () => {
  it('renders the first photo as main image of first selected style', async () => {
    await waitFor(() => render(<DefaultView
      selectedStyle={Data.styles.results[0]}
      mainImage={Data.styles.results[0].photos[0].url}
    />));
    const style1 = screen.getByAltText('White & White');
    expect(style1).toBeTruthy();
  });
  it('on first style thumbnail, it should only have left arrow after right arrow is clicked', async () => {
    const mockSetImg = jest.fn(() => Data.styles.results[0].photos[1].url);
    await waitFor(() => render(<DefaultThumbnails
      selectedStyle={Data.styles.results[0]}
      mainImage={Data.styles.results[0].photos[0].url}
      setMainImage={mockSetImg}
    />));
    const leftButton = screen.queryByText('<');
    expect(leftButton).toBeFalsy();
    const rightButton = screen.getByText('>');
    userEvent.click(rightButton);
    await waitFor(() => expect(screen.getByText('<')).toBeTruthy());
  });
  it('should not have right arrow if on the last thumbnail', async () => {
    const mockSetImg = jest.fn(() => Data.styles.results[1].photos[1].url);
    await waitFor(() => render(<DefaultThumbnails
      selectedStyle={Data.styles.results[1]}
      mainImage={Data.styles.results[1].photos[0].url}
      setMainImage={mockSetImg}
    />));
    const rightButton = screen.queryByText('>');
    expect(rightButton).toBeTruthy();
    userEvent.click(rightButton);
    await waitFor(() => expect(screen.queryByText('>')).toBeFalsy());
  });
  it('should have both left and right arrows when not at the first or last thumbnail', async () => {
    let count = 1;
    const mockSetImg = jest.fn(() => Data.styles.results[0].photos[count++].url);
    await waitFor(() => render(<DefaultThumbnails
      selectedStyle={Data.styles.results[0]}
      mainImage={Data.styles.results[0].photos[0].url}
      setMainImage={mockSetImg}
    />));
    const rightButton = screen.queryByText('>');
    expect(rightButton).toBeTruthy();
    userEvent.click(rightButton);
    await waitFor(() => expect(screen.queryByText('>')).toBeTruthy());
    userEvent.click(rightButton);
    await waitFor(() => expect(screen.queryByText('>')).toBeTruthy());
    userEvent.click(rightButton);
    await waitFor(() => expect(screen.queryByText('>')).toBeTruthy());
    userEvent.click(rightButton);
    await waitFor(() => expect(screen.queryByText('>')).toBeTruthy());
    userEvent.click(rightButton);
    await waitFor(() => expect(screen.queryByText('>')).toBeTruthy());
    userEvent.click(rightButton);
    await waitFor(() => expect(screen.queryByText('>')).toBeTruthy());
    userEvent.click(rightButton);
    await waitFor(() => expect(screen.queryByText('>')).toBeTruthy());
    userEvent.click(rightButton);
    await waitFor(() => expect(screen.queryByText('>')).toBeTruthy());
    userEvent.click(rightButton);
    await waitFor(() => expect(screen.queryByText('>')).toBeTruthy());
    userEvent.click(rightButton);
    expect(rightButton).toBeTruthy();
    const leftButton = screen.queryByText('<');
    expect(leftButton).toBeTruthy();
  });
  it('should only show 7 thumbnails when in the middle of a list of 17 styles', async () => {
    let count = 1;
    const mockSetImg = jest.fn(() => Data.styles.results[2].photos[count++].url);
    await waitFor(() => render(<DefaultThumbnails
      selectedStyle={Data.styles.results[2]}
      mainImage={Data.styles.results[2].photos[0].url}
      setMainImage={mockSetImg}
    />));
    const rightButton = screen.queryByText('>');
    expect(rightButton).toBeTruthy();
    userEvent.click(rightButton);
    await waitFor(() => expect(screen.queryByText('>')).toBeTruthy());
    userEvent.click(rightButton);
    await waitFor(() => expect(screen.queryByText('>')).toBeTruthy());
    userEvent.click(rightButton);
    await waitFor(() => expect(screen.queryByText('>')).toBeTruthy());
    userEvent.click(rightButton);
    await waitFor(() => expect(screen.queryByText('>')).toBeTruthy());
    userEvent.click(rightButton);
    await waitFor(() => expect(screen.queryByText('>')).toBeTruthy());
    userEvent.click(rightButton);
    await waitFor(() => expect(screen.queryByText('>')).toBeTruthy());
    userEvent.click(rightButton);
    await waitFor(() => expect(screen.queryByText('>')).toBeTruthy());
    userEvent.click(rightButton);
    await waitFor(() => expect(screen.queryByText('>')).toBeTruthy());
    userEvent.click(rightButton);
    await waitFor(() => expect(screen.queryByText('>')).toBeTruthy());
    userEvent.click(rightButton);
    let imageElement = screen.getByAltText('White & Black 0');
    expect(imageElement).toBeTruthy();
    imageElement = screen.getByAltText('White & Black 1');
    expect(imageElement).toBeTruthy();
    imageElement = screen.getByAltText('White & Black 2');
    expect(imageElement).toBeTruthy();
    imageElement = screen.getByAltText('White & Black 3');
    expect(imageElement).toBeTruthy();
    imageElement = screen.getByAltText('White & Black 4');
    expect(imageElement).toBeTruthy();
    imageElement = screen.getByAltText('White & Black 5');
    expect(imageElement).toBeTruthy();
    imageElement = screen.getByAltText('White & Black 6');
    expect(imageElement).toBeTruthy();
    imageElement = screen.queryByAltText('White & Black 7');
    expect(imageElement).toBeFalsy();
  });
});

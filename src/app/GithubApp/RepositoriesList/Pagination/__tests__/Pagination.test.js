import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Pagination } from '../Pagination';
import * as utils from '../utils';

describe('Pagination', () => {
  it('Button disabled if loading prop is true', async () => {
    const { getByText, getByTestId } = render(<Pagination loading={true} />);

    expect(getByText('< Prev')).toBeTruthy();
    expect(getByText('Next >')).toBeTruthy();

    const prevButton = getByTestId('button-prev');
    expect(prevButton.disabled).toBe(true);

    const nextButton = getByTestId('button-next');
    expect(nextButton.disabled).toBe(true);
  });

  it('Prev button disabled', () => {
    const { getByTestId } = render(<Pagination loading={false} cursorBefore={null} cursorAfter="cursorAfter" />);

    const prevButton = getByTestId('button-prev');
    expect(prevButton.disabled).toBe(true);

    const nextButton = getByTestId('button-next');
    expect(nextButton.disabled).toBe(false);
  });

  it('Next button disabled', () => {
    const { getByTestId } = render(<Pagination loading={false} cursorBefore="cursorBefore" cursorAfter={null} />);

    const prevButton = getByTestId('button-prev');
    expect(prevButton.disabled).toBe(false);

    const nextButton = getByTestId('button-next');
    expect(nextButton.disabled).toBe(true);
  });

  it('Handle on click', () => {
    let dataChanged = false;

    const { getByTestId } = render(<Pagination loading={false} cursorBefore="cursorBefore" cursorAfter="cursorAfter" />);

    const spy = jest.spyOn(utils, 'enhancedFetchMore');
    spy.mockImplementation(() => {
      dataChanged = true;
    });

    const prevButton = getByTestId('button-prev');
    expect(prevButton.disabled).toBe(false);
    fireEvent.click(prevButton);
    expect(dataChanged).toBe(true);
    dataChanged = false;

    const nextButton = getByTestId('button-next');
    expect(nextButton.disabled).toBe(false);
    fireEvent.click(nextButton);
    expect(dataChanged).toBe(true);
    dataChanged = false;

    spy.mockClear();
  });
});

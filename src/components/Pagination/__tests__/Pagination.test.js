import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { Pagination } from '../Pagination';

describe('Pagination', () => {
  it('Pagination with default props', () => {
    const { getByTestId } = render(<Pagination onNextClick={() => {}} onPrevClick={() => {}} />);

    const prevButton = getByTestId('button-prev');
    expect(prevButton.disabled).toBe(true);

    const nextButton = getByTestId('button-next');
    expect(nextButton.disabled).toBe(false);
  });

  it('Pagination with click on next and prev button', () => {
    let isPrevClick = false;
    let isNextClick = false;

    const { container, getByTestId } = new render((<Pagination onPrevClick={() => (isPrevClick = true)} onNextClick={() => (isNextClick = true)} />));

    const nextButton = getByTestId('button-next');
    fireEvent.click(nextButton);
    expect(isNextClick).toBe(true);

    render(
      <Pagination
        onPrevClick={() => (isPrevClick = true)}
        onNextClick={() => (isNextClick = true)}
        isPrevDisabled={!isNextClick}
        isNextDisabled={true}
      />,
      { container },
    );

    const prevButton = getByTestId('button-prev');
    fireEvent.click(prevButton);
    expect(isPrevClick).toBe(true);
  });
});

import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { Button } from '../Button';

describe('Button', () => {
  it('Button should be render', () => {
    const { getByText } = render(<Button>Text</Button>);

    expect(getByText('Text')).toBeTruthy();
  });

  it('Button check onClick handle', () => {
    let editable = false;

    const { getByTestId } = render(
      <Button onClick={() => (editable = true)} data-testid="button-test">
        Edit
      </Button>,
    );

    const button = getByTestId('button-test');
    fireEvent.click(button);
    expect(editable).toBe(true);
  });
});

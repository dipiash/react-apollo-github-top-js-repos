import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { TextInput } from '../TextInput';

describe('TextInput', () => {
  it('Should be render and change value', () => {
    let inputValue = '';

    const { container } = render(<TextInput onChange={(e) => (inputValue = e.target.value)} />);

    const inputComponent = container.firstChild;

    fireEvent.change(inputComponent, { target: { value: 'react' } });
    expect(inputComponent.value).toBe('react');
    expect(inputValue).toBe('react');
  });
});

import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { Select } from '../Select';

describe('Select', () => {
  const options = [
    { key: 0, name: '--------' },
    { key: 1, name: 'Option 1' },
    { key: 2, name: 'Option 2' },
  ];

  it('Select disabled', () => {
    const { container: select1 } = render(<Select options={[]} />);

    expect(select1.firstChild.disabled).toBe(true);

    const { container: select2 } = render(<Select />);

    expect(select2.firstChild.disabled).toBe(true);
  });

  it('Select should be render and change value', () => {
    let selectedValue = 0;

    const { container } = render(<Select options={options} onChange={(e) => (selectedValue = e.target.value)} />);

    const selectComponent = container.firstChild;

    fireEvent.change(selectComponent, { target: { value: '1' } });
    expect(selectComponent.value).toBe('1');
    expect(selectedValue).toBe('1');
  });
});

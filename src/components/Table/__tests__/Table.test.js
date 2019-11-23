import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

import React from 'react';
import { render } from '@testing-library/react';

import { Table } from '../Table';

describe('Table', () => {
  it('Render table with default data', () => {
    const { getByText } = render(<Table />);

    expect(getByText('No data')).toBeTruthy();
  });

  it('Render table with error data', () => {
    const { getByText } = render(<Table error />);

    expect(getByText('Repositories list loading error.')).toBeTruthy();
  });

  it('Render table with full data', () => {
    const { getByText } = render(
      <Table
        error={false}
        columns={{
          key: 'Key',
          name: 'Name',
        }}
        data={[
          { key: 1, name: 'Data 1' },
          { key: 2, name: 'Data 2' },
        ]}
      />,
    );

    expect(getByText('Data 1')).toBeTruthy();
    expect(getByText('Data 2')).toBeTruthy();
  });
});

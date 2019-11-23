import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';

import { LicenseSelect } from '../LicenseSelect';

import { getListLicenses } from 'gql/query/getListLicenses';
import { wait } from 'utils/tests/await';

import licensesListMockDataSuccess from './fixtures/result.success';
import licensesListMockDataError from './fixtures/result.error';

const mocks = {
  success: [
    {
      request: {
        query: getListLicenses,
      },
      result: {
        data: licensesListMockDataSuccess,
      },
    },
  ],
  error: [
    {
      request: {
        query: getListLicenses,
      },
      result: {
        error: licensesListMockDataError,
      },
    },
  ],
};

describe('LicenseSelect', () => {
  it('success render', async () => {
    const state = {
      value: '0',
    };

    const onChange = e => {
      e.persist();
      state.value = e.target.value;
    };

    const { getByText, getByTestId } = render(
      <MockedProvider mocks={mocks.success}>
        <LicenseSelect onChange={onChange} />
      </MockedProvider>,
    );
    expect(getByText('Loading data ...')).toBeTruthy();

    const elementLoading = getByTestId('licenses-select-loading');
    expect(elementLoading.children.length).toBe(2);

    await wait(300);

    const selectElement = getByTestId('licenses-select');
    expect(selectElement).toBeTruthy();
    expect(selectElement.value).toBe('0');

    fireEvent.change(selectElement, { target: { value: 'mit' } });
    expect(selectElement.value).toBe('mit');

    expect(state.value).toBe('mit');
  });

  it('error render', async () => {
    const { getByText, getByTestId } = render(
      <MockedProvider mocks={mocks.error}>
        <LicenseSelect />
      </MockedProvider>,
    );
    expect(getByText('Loading data ...')).toBeTruthy();

    const elementLoading = getByTestId('licenses-select-loading');
    expect(elementLoading.children.length).toBe(2);

    await wait(300);

    expect(getByText('Licenses loading error.')).toBeTruthy();
  });
});

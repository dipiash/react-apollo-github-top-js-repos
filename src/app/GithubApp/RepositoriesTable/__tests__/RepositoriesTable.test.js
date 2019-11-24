import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';

import { RepositoriesTable } from '../index';

import { getListRepositories } from 'gql/query/getListRepositories';
import { getSortCondition, getLanguageCondition, getDateCondition, getLicenseCondition, getRepositoryNameCondition } from '../../utils';

import { wait } from 'utils/tests/await';

import repositoriesListMockDataSuccess from './fixtures/result.success';
import repositoriesListMockDataError from './fixtures/result.error';

const queryString = [
  getSortCondition('stars'),
  getLanguageCondition('JavaScript'),
  getDateCondition(),
  getLicenseCondition(),
  getRepositoryNameCondition,
].join(' ');
const limitItems = 10;

const mocks = {
  success: [
    {
      request: {
        query: getListRepositories,
        variables: {
          queryString,
          cursorAfter: null,
          first: limitItems,
        },
      },
      result: {
        data: repositoriesListMockDataSuccess,
      },
    },
  ],
  error: [
    {
      request: {
        query: getListRepositories,
      },
      result: {
        error: repositoriesListMockDataError,
      },
    },
  ],
};

describe('RepositoriesTable', () => {
  it('Render with success response', async () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks.success}>
        <RepositoriesTable queryString={queryString} limit={10} />
      </MockedProvider>,
    );
    expect(getByText('Loading data ...')).toBeTruthy();

    await wait(300);

    expect(getByText('lite-youtube-embed')).toBeTruthy();
  });

  it('Render error', async () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks.error}>
        <RepositoriesTable queryString={queryString} limit={10} />
      </MockedProvider>,
    );
    expect(getByText('Loading data ...')).toBeTruthy();

    await wait(300);

    expect(getByText('Repositories list loading error.')).toBeTruthy();
  });
});

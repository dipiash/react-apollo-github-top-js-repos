import React from 'react';

import { Pagination } from './Pagination';

import { Query } from 'react-apollo';
import { getListRepositories } from 'gql/query';

import { getDateSearchByCondition, getLicenseParams, getSearchNameParams } from './utils';
import { Table } from 'components/Table';
import { Loader } from 'components/Loader';
import { Error } from 'components/Error';

export const RepositoriesList = ({ license, searchName, limit }) => {
  const queryString = [
    // TODO: Can move up or to another function to create a custom filters by line
    'sort:stars-desc',
    'language:JavaScript',
    getDateSearchByCondition(),
    getLicenseParams(license),
    getSearchNameParams(searchName),
  ].join(' ');
  const limitItems = limit || 10;

  return (
    <Query
      query={getListRepositories}
      variables={{
        queryString: queryString,
        cursorAfter: null,
        first: limitItems,
      }}
      fetchPolicy="cache-and-network"
    >
      {({ data, error, loading, fetchMore }) => {
        const resultData = (data && data.search && data.search.edges) || [];

        return (
          <Loader loading={loading} data-testif="repositories-list-loading">
            <Table
              columns={{
                name: 'Name',
                stars: 'Stars',
                license: 'License',
                date: 'Date',
              }}
              data={resultData.map(listItem => {
                return {
                  key: listItem.node.id,
                  name: listItem.node.name,
                  stars: listItem.node.stargazers.totalCount,
                  license: listItem.node.licenseInfo && listItem.node.licenseInfo.name,
                  date: listItem.node.createdAt,
                };
              })}
              error={error ? <Error text="Repositories list loading error." /> : false}
            />
            <Pagination
              fetchMore={fetchMore}
              loading={loading}
              queryString={queryString}
              limit={limitItems}
              cursorBefore={data && data.search.pageInfo.hasPreviousPage && data.search.pageInfo.startCursor}
              cursorAfter={data && data.search.pageInfo.hasNextPage && data.search.pageInfo.endCursor}
            />
          </Loader>
        );
      }}
    </Query>
  );
};

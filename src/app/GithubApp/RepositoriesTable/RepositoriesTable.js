import React from 'react';
import PropTypes from 'prop-types';

import { Pagination } from './Pagination';
import { Table } from 'components/Table';
import { Loader } from 'components/Loader';
import { Error } from 'components/Error';

import { Query } from 'react-apollo';
import { getListRepositories } from 'gql/query';

export const RepositoriesTable = ({ queryString, limit }) => {
  return (
    <Query
      query={getListRepositories}
      variables={{
        queryString: queryString,
        cursorAfter: null,
        first: limit,
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
                  stars: listItem.node.stargazers && listItem.node.stargazers.totalCount,
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
              limit={limit}
              cursorBefore={data && data.search.pageInfo.hasPreviousPage && data.search.pageInfo.startCursor}
              cursorAfter={data && data.search.pageInfo.hasNextPage && data.search.pageInfo.endCursor}
            />
          </Loader>
        );
      }}
    </Query>
  );
};

RepositoriesTable.propTypes = {
  queryString: PropTypes.string.isRequired,
  limit: PropTypes.number,
};

PropTypes.defaultProps = {
  limit: 10,
};

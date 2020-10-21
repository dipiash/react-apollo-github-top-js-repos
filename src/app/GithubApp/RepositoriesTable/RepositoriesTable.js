import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { Pagination } from 'components/Pagination';
import { Table } from 'components/Table';
import { Loader } from 'components/Loader';
import { Error } from 'components/Error';

import { useQuery } from '@apollo/client';
import { getListRepositories } from 'gql/query';

import { enhancedFetchMore, getPaginationParams } from './utils';

export const RepositoriesTable = ({ queryString, limit }) => {
  const { data, error, loading, fetchMore } = useQuery(getListRepositories, {
    variables: {
      queryString: queryString,
      cursorAfter: null,
      first: limit,
    },
  });

  const resultData = useMemo(() => (data && data.search && data.search.edges) || [], [data]);

  const tableColumns = {
    name: 'Name',
    stars: 'Stars',
    license: 'License',
    date: 'Date',
  };

  const tableData = useMemo(
    () =>
      resultData.map((listItem) => ({
        key: listItem.node.id,
        name: listItem.node.name,
        stars: listItem.node.stargazers && listItem.node.stargazers.totalCount,
        license: listItem.node.licenseInfo && listItem.node.licenseInfo.name,
        date: listItem.node.createdAt,
      })),
    [resultData],
  );

  const tableError = error ? <Error text="Repositories list loading error." /> : false;

  const pageInfo = data && data.search && data.search.pageInfo;
  const paginationParams = getPaginationParams(pageInfo);

  return (
    <Loader loading={loading} data-testif="repositories-list-loading">
      <Table columns={tableColumns} data={tableData} error={tableError} />
      <Pagination
        onPrevClick={() => enhancedFetchMore({ fetchMore, queryString, cursorBefore: paginationParams.cursorBefore, limit })}
        onNextClick={() => enhancedFetchMore({ fetchMore, queryString, cursorAfter: paginationParams.cursorAfter, limit })}
        isPrevDisabled={paginationParams.isPreviousDisabled}
        isNextDisabled={paginationParams.isNextDisabled}
      />
    </Loader>
  );
};

RepositoriesTable.propTypes = {
  queryString: PropTypes.string.isRequired,
  limit: PropTypes.number,
};

PropTypes.defaultProps = {
  limit: 10,
};

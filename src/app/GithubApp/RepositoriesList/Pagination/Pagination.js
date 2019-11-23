import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'components/Button';

import { enhancedFetchMore } from './utils';

import cm from './Pagination.module.css';

export const Pagination = ({ fetchMore, loading, queryString, cursorAfter, cursorBefore, limit }) => {
  return (
    <div className={cm.PaginationWrapper}>
      <Button
        className={cm.responsiveButton}
        data-testid="button-prev"
        disabled={loading || !cursorBefore}
        onClick={() => enhancedFetchMore({ fetchMore, queryString, cursorBefore, limit })}
      >
        {'<'} Prev
      </Button>
      <Button
        className={cm.responsiveButton}
        data-testid="button-next"
        disabled={loading || !cursorAfter}
        onClick={() => enhancedFetchMore({ fetchMore, queryString, cursorAfter, limit })}
      >
        Next {'>'}
      </Button>
    </div>
  );
};

Pagination.propTypes = {
  fetchMore: PropTypes.func.isRequired,
  queryString: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  cursorAfter: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  cursorBefore: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  limit: PropTypes.number,
};

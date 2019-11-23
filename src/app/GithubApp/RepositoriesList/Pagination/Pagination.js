import React from 'react';

import {Button} from "components/Button";

import {enhancedFetchMore} from './utils';

import cm from './Pagination.module.css';

export const Pagination = ({fetchMore, loading, queryString, cursorAfter, cursorBefore, limit}) => {
    return (
        <div className={cm.PaginationWrapper}>
            <Button
                data-testid="button-prev"
                disabled={loading || !cursorBefore}
                onClick={() => enhancedFetchMore({fetchMore, queryString, cursorBefore, limit})}
            >
                {'<'} Prev
            </Button>
            <Button
                data-testid="button-next"
                disabled={loading || !cursorAfter}
                onClick={() => enhancedFetchMore({fetchMore, queryString, cursorAfter, limit})}
            >
                Next {'>'}
            </Button>
        </div>
    )
};

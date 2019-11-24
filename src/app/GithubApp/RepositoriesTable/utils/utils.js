export const enhancedFetchMore = ({ fetchMore, queryString, cursorBefore, cursorAfter, limit }) => {
  return fetchMore({
    variables: {
      queryString: queryString,
      cursorBefore: cursorBefore,
      cursorAfter: cursorAfter,
      last: cursorBefore ? limit || 10 : null,
      first: cursorAfter ? limit || 10 : null,
    },
    updateQuery: (prev, { fetchMoreResult }) => {
      if (!fetchMoreResult) return prev;

      return fetchMoreResult;
    },
  });
};

export const getPaginationParams = pageInfo => {
  let cursorBefore = null;
  let cursorAfter = null;

  let isPreviousDisabled = true;
  let isNextDisabled = true;

  if (pageInfo) {
    cursorBefore = pageInfo && pageInfo.startCursor;
    cursorAfter = pageInfo && pageInfo.endCursor;

    isPreviousDisabled = pageInfo && !pageInfo.hasPreviousPage;
    isNextDisabled = pageInfo && !pageInfo.hasNextPage;
  }

  return {
    cursorBefore,
    cursorAfter,
    isPreviousDisabled,
    isNextDisabled,
  };
};

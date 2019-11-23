export const enhancedFetchMore = ({fetchMore, queryString, cursorBefore, cursorAfter, limit}) => {
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
        }
    });
};

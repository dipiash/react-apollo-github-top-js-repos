import {gql} from 'apollo-boost';

export const getListRepositories = gql`
    query GetListRepositories($queryString: String!, $cursorAfter: String, $cursorBefore: String, $first: Int, $last: Int) {
        search(query: $queryString, first: $first, last: $last, after: $cursorAfter, before: $cursorBefore, type: REPOSITORY) {
            repositoryCount
            edges {
                node {
                    ... on Repository {
                        id
                        name
                        stargazers {
                            totalCount
                        }
                        licenseInfo {
                            name
                        }
                        updatedAt
                    }
                }
                cursor
            }
            pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
            }
        }
    }
`;

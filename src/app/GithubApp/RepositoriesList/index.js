import React from 'react';

import {RepositoriesList as DumbRepositoriesList} from './RepositoriesList';
import {Pagination} from "./Pagination";

import { Query } from "react-apollo";
import {getListRepositories} from "gql/query";

import {getDateSearchByCondition, getLicenseParams, getSearchNameParams} from "./utils";

const EnhancedRepositoriesList = ({license, searchName, limit}) => {
    const queryString = [
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
                return (
                    <>
                        <DumbRepositoriesList
                            list={data && data.search.edges.map(listItem => {
                                return ({
                                    id: listItem.node.id,
                                    name: listItem.node.name,
                                    stars: listItem.node.stargazers.totalCount,
                                    license: listItem.node.licenseInfo && listItem.node.licenseInfo.name,
                                })
                            })}
                            loading={loading}
                            error={error}
                        />
                        <Pagination
                            fetchMore={fetchMore}
                            loading={loading}
                            queryString={queryString}
                            limit={limitItems}
                            cursorBefore={data && data.search.pageInfo.hasPreviousPage && data.search.pageInfo.startCursor}
                            cursorAfter={data && data.search.pageInfo.hasNextPage && data.search.pageInfo.endCursor}
                        />
                    </>
                );
            }}
        </Query>
    );
};

export {EnhancedRepositoriesList as RepositoriesList};

import React from 'react';

import {RepositoriesList} from "./RepositoriesList";

export const GithubApp = () => {

    return (
        <>
            <RepositoriesList license={null} searchName={null} limit={10} />
        </>
    );
};

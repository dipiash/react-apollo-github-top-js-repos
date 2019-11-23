import React, {useState} from 'react';

import {RepositoriesList} from "./RepositoriesList";
import {Header} from "./Header";

export const GithubApp = () => {
    const [license, setLicense] = useState(null);

    return (
        <>
            <Header setLicense={setLicense} />
            <RepositoriesList license={license} searchName={null} limit={10} />
        </>
    );
};

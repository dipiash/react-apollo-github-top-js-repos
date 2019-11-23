import React, {useState} from 'react';
import { useDebounce } from 'use-debounce';

import {RepositoriesList} from "./RepositoriesList";
import {Header} from "./Header";

export const GithubApp = () => {
    const [license, setLicense] = useState(null);

    const [searchName, setSearchName] = useState(null);
    const [searchNameValue] = useDebounce(searchName, 300);

    return (
        <>
            <Header setLicense={setLicense} setSearchName={setSearchName} />
            <RepositoriesList license={license} searchName={searchNameValue} limit={10} />
        </>
    );
};

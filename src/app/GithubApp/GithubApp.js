import React, { useState } from 'react';
import { useDebounce } from 'use-debounce';

import { RepositoriesTable } from './RepositoriesTable';
import { Header } from './Header';

import { getDateCondition, getLanguageCondition, getLicenseCondition, getRepositoryNameCondition, getSortCondition } from './utils';

export const GithubApp = () => {
  const [license, setLicense] = useState(null);

  const [repositoryNameValue, setRepositoryName] = useState(null);
  const [repositoryName] = useDebounce(repositoryNameValue, 300);

  const queryString = [
    getSortCondition('stars', 'desc'),
    getLanguageCondition('JavaScript'),
    getDateCondition(),
    getLicenseCondition(license),
    getRepositoryNameCondition(repositoryName),
  ].join(' ');

  return (
    <>
      <Header setLicense={setLicense} setRepositoryName={setRepositoryName} />
      <RepositoriesTable queryString={queryString} limit={10} />
    </>
  );
};

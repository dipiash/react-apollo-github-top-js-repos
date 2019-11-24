import React, { useState } from 'react';
import { useDebounce } from 'use-debounce';

import { RepositoriesList } from './RepositoriesList';
import { Header } from './Header';

export const GithubApp = () => {
  const [license, setLicense] = useState(null);

  const [repositoryNameValue, setRepositoryName] = useState(null);
  const [repositoryName] = useDebounce(repositoryNameValue, 300);

  return (
    <>
      <Header setLicense={setLicense} setRepositoryName={setRepositoryName} />
      <RepositoriesList license={license} repositoryName={repositoryName} limit={10} />
    </>
  );
};

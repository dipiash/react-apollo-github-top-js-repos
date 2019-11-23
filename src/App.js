import React from 'react';

import { ApolloProvider } from '@apollo/react-hooks';

import { gqlClient } from './gql/client';
import { GithubApp } from './app/GithubApp';

function App() {
  return (
    <ApolloProvider client={gqlClient}>
      <GithubApp />
    </ApolloProvider>
  );
}

export default App;

import React from 'react';

import { ApolloProvider } from '@apollo/react-hooks';

import { gqlClient } from './gql/client';
import { GithubApp } from './app/GithubApp';

import { OnlineStatus } from 'components/OnlineStatus';

function App() {
  return (
    <OnlineStatus>
      <ApolloProvider client={gqlClient}>
        <GithubApp />
      </ApolloProvider>
    </OnlineStatus>
  );
}

export default App;

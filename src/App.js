import React from 'react';

import useOnlineStatus from '@rehooks/online-status';

import { ApolloProvider } from '@apollo/react-hooks';

import { gqlClient } from './gql/client';
import { GithubApp } from './app/GithubApp';
import { Error } from 'components/Error';

function App() {
  const onlineStatus = useOnlineStatus();

  return onlineStatus ? (
    <ApolloProvider client={gqlClient}>
      <GithubApp />
    </ApolloProvider>
  ) : (
    <Error text="No network connection. Please reload page or enable network connection." />
  );
}

export default App;

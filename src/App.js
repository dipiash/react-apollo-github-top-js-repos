import React from 'react';

import { ApolloProvider } from '@apollo/client';

import { gqlClient } from './gql/client';
import { GithubApp } from './app/GithubApp';

import { OnlineStatus } from 'components/OnlineStatus';

function App() {
  const isTokenExist = Boolean(process.env.REACT_APP_GITHUB_TOKEN || localStorage.getItem('token'));
  console.log(isTokenExist)

  const updateToken = () => {
    const token = prompt('Введите ваш personal-access-token от Github, чтобы начать взаимодействие с API');

    localStorage.setItem('token', token);
    window.location = '.';

    return null;
  };

  if (!isTokenExist) {
    updateToken();
  }

  return (
    <OnlineStatus>
      <div style={{ padding: '15px 15px 0' }}>
        Если вы введете неверный personal-access-token, то получите 401 ошибку, данные не будут загружены.
        <br />
        <br />
        <button onClick={updateToken}>Ввести personal-access-token повторно</button>
      </div>
      <ApolloProvider client={gqlClient}>
        <GithubApp />
      </ApolloProvider>
    </OnlineStatus>
  );
}

export default App;

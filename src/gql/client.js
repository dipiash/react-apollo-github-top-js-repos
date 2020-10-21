import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GITHUB_API_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  const token = process.env.REACT_APP_GITHUB_TOKEN || localStorage.getItem('token');
  console.log(token);

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const gqlClient = new ApolloClient({
  uri: process.env.REACT_APP_GITHUB_API_ENDPOINT,
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

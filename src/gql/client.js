import ApolloClient from 'apollo-boost';

export const gqlClient = new ApolloClient({
    uri: process.env.REACT_APP_GITHUB_API_ENDPOINT,
    request: (operation) => {
        const token = process.env.REACT_APP_GITHUB_TOKEN || localStorage.getItem('token');

        operation.setContext({
            headers: {
                authorization: token ? `Bearer ${token}` : ''
            }
        });
    },
});

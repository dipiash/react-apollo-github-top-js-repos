import React from 'react';

import {ApolloProvider} from "@apollo/react-hooks";

import {gqlClient} from "./gql/client";

function App() {
    return (
        <ApolloProvider client={gqlClient}>
            <div></div>
        </ApolloProvider>
    );
}

export default App;

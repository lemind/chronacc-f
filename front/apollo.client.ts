import { ApolloClient, InMemoryCache } from '@apollo/client';

const createApolloClient = () => {
  return new ApolloClient({
    uri: "/api/v1",
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.hashnode.com",
  cache: new InMemoryCache(),
});

export default client;

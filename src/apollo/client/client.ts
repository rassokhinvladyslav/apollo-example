import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

const uri = '';

if (!uri) {
  throw new Error('Missing Apollo URI');
}

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri,
  cache: new InMemoryCache({
    typePolicies: {
      Dashboard: {
        keyFields: ['id', 'isPublished'],
      },
    },
  }),
  resolvers: {},
});

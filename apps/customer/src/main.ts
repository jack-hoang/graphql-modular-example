import * as path from 'path';

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { loadFilesSync } from '@graphql-tools/load-files';

import { ApolloServerContext } from './context';
import { CustomerContext } from './CustomerContext';
import { CustomerDatasources } from './datasources';
import { environment } from './environment';
import resolvers from './resolvers';

const schemaPath = path.join(__dirname, 'schema.graphql');
const typeDefs = loadFilesSync(schemaPath);
const schema = buildSubgraphSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer<ApolloServerContext<CustomerDatasources>>({
  schema,
  introspection: environment.introspection,
});

startStandaloneServer(server, {
  context: async ({ req }) => {
    return new CustomerContext({ req, server });
  },
  listen: { port: 4002 },
}).then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Customer subgraph ready at ${url}`);
});

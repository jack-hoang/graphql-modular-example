import * as fs from 'fs';
import * as path from 'path';

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { ApolloServerContext } from './context';
import { CustomerContext } from './CustomerContext';
import { CustomerDatasources } from './datasources';
import { environment } from './environment';
import resolvers from './resolvers';

const schemaPath = path.join(__dirname, 'schema.graphql');
const schemaString = fs.readFileSync(schemaPath, 'utf8');

const server = new ApolloServer<ApolloServerContext<CustomerDatasources>>({
  typeDefs: schemaString,
  resolvers,
  introspection: environment.introspection,
});

startStandaloneServer(server, {
  context: async ({ req }) => {
    return new CustomerContext({ req, server });
  },
  listen: { port: 4002 },
}).then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`Customer subgraph ready at ${url}`);
});

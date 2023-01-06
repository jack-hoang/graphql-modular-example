import * as path from 'path';

import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginInlineTraceDisabled } from '@apollo/server/plugin/disabled';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { loadFilesSync } from '@graphql-tools/load-files';

import { ApolloServerContext } from './context';
import { CustomerDatasources } from './datasources';
import { environment } from './environment';
import resolvers from './resolvers';

const schemaPath = path.join(__dirname, 'schema.graphql');
const typeDefs = loadFilesSync(schemaPath);
const schema = buildSubgraphSchema({
  typeDefs,
  resolvers,
});

export const server = new ApolloServer<ApolloServerContext<CustomerDatasources>>({
  schema,
  introspection: environment.introspection,
  plugins: [ApolloServerPluginInlineTraceDisabled()],
});

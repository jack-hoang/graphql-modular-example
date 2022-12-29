import { readFileSync } from 'fs';
import * as path from 'path';

import { ApolloGateway } from '@apollo/gateway';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const supergraphFilePath = path.join(__dirname, './supergraph.graphql');
const supergraphSdl = readFileSync(supergraphFilePath).toString();

// Initialize an ApolloGateway instance and pass it
// the supergraph schema as a string

const gateway = new ApolloGateway({
  supergraphSdl,
});

// Pass the ApolloGateway to the ApolloServer constructor

const server = new ApolloServer({
  gateway,
});

startStandaloneServer(server).then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Supergraph ready at ${url}`);
});

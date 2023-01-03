import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { application } from './application';

const server = new ApolloServer({
  gateway: {
    async load() {
      return { executor: application.createApolloExecutor() };
    },
    onSchemaLoadOrUpdate(callback) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      callback({ apiSchema: application.schema } as any);
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      return () => {};
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    async stop() {},
  },
});

startStandaloneServer(server, {
  listen: { port: 4001 },
}).then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Account subgraph ready at ${url}`);
});

import { startStandaloneServer } from '@apollo/server/standalone';

import { CustomerContext } from './CustomerContext';
import { server } from './server';

startStandaloneServer(server, {
  context: async ({ req }) => {
    return new CustomerContext({ req, server });
  },
  listen: { port: 4002 },
}).then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Customer subgraph ready at ${url}`);
});

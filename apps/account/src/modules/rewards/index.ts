import { join } from 'path';

import { loadFilesSync } from '@graphql-tools/load-files';
import { createModule } from 'graphql-modules';

const typeDefs = loadFilesSync(join(__dirname, './typedefs/*.graphql'));
const resolvers = loadFilesSync(join(__dirname, './resolvers/*.{t,j}s'));

export const RewardsModule = createModule({
  id: 'rewards-module',
  dirname: __dirname,
  typeDefs,
  resolvers,
});

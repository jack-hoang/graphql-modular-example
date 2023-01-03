import { join } from 'path';

import { loadFilesSync } from '@graphql-tools/load-files';
import { createModule } from 'graphql-modules';

import { AccountDatasource } from './providers/AccountDatasource';

const typeDefs = loadFilesSync(join(__dirname, './typedefs/*.graphql'));
const resolvers = loadFilesSync(join(__dirname, './resolvers/*.{t,j}s'));
const providers = [AccountDatasource];

export const AccountModule = createModule({
  id: 'account-module',
  dirname: __dirname,
  typeDefs,
  resolvers,
  providers,
});

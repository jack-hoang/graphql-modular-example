import { join } from 'path';

import { loadFilesSync } from '@graphql-tools/load-files';
import { createModule } from 'graphql-modules';

import { AccountDatasource } from '../account/providers/AccountDatasource';

import { CustomerDatasource } from './providers/CustomerDatasource';

const typeDefs = loadFilesSync(join(__dirname, './typedefs/*.graphql'));
const resolvers = loadFilesSync(join(__dirname, './resolvers/*.{t,j}s'));
const providers = [AccountDatasource, CustomerDatasource];

export const CustomerModule = createModule({
  id: 'customer-module',
  dirname: __dirname,
  typeDefs,
  resolvers,
  providers,
});

import { IncomingMessage } from 'http';

import { ApolloServer } from '@apollo/server';

import { AccountDatasources, datasources } from './datasources';

class AccountContext {
  public datasources: AccountDatasources;

  constructor({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    req,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    server,
  }: {
    req: IncomingMessage;
    server: ApolloServer;
  }) {
    this.datasources = datasources();
  }
}

export { AccountContext };

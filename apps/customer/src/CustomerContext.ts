import { IncomingMessage } from 'http';

import { ApolloServer } from '@apollo/server';

import { ApolloServerContext } from './context';
import { CustomerDatasources, datasources } from './datasources';

class CustomerContext implements ApolloServerContext<CustomerDatasources> {
  public datasources: CustomerDatasources;

  constructor({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    req,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    server,
  }: {
    req: IncomingMessage;
    server: ApolloServer<ApolloServerContext<CustomerDatasources>>;
  }) {
    this.datasources = datasources();
  }
}

export { CustomerContext };

/* eslint-disable */
import * as Types from '../../../__generated__/graphql';
import * as gm from 'graphql-modules';
export namespace AccountModule {
  interface DefinedFields {
    Query: 'account';
    Account: 'id' | 'accountNumber' | 'balance' | 'rewards';
    Customer: 'id' | 'accounts';
  }

  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type Account = Pick<Types.Account, DefinedFields['Account']>;
  export type Rewards = Types.Rewards;
  export type Customer = Pick<Types.Customer, DefinedFields['Customer']>;

  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type AccountResolvers = Pick<Types.AccountResolvers, DefinedFields['Account'] | '__isTypeOf'>;
  export type CustomerResolvers = Pick<Types.CustomerResolvers, DefinedFields['Customer'] | '__isTypeOf'>;

  export interface Resolvers {
    Query?: QueryResolvers;
    Account?: AccountResolvers;
    Customer?: CustomerResolvers;
  }

  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      account?: gm.Middleware[];
    };
    Account?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      accountNumber?: gm.Middleware[];
      balance?: gm.Middleware[];
      rewards?: gm.Middleware[];
    };
    Customer?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      accounts?: gm.Middleware[];
    };
  }
}

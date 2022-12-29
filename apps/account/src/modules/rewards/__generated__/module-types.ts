/* eslint-disable */
import * as Types from '../../../__generated__/graphql';
import * as gm from 'graphql-modules';
export namespace RewardsModule {
  interface DefinedFields {
    Rewards: 'id' | 'pointsBalance';
  }

  export type Rewards = Pick<Types.Rewards, DefinedFields['Rewards']>;

  export type RewardsResolvers = Pick<Types.RewardsResolvers, DefinedFields['Rewards'] | '__isTypeOf'>;

  export interface Resolvers {
    Rewards?: RewardsResolvers;
  }

  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Rewards?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      pointsBalance?: gm.Middleware[];
    };
  }
}

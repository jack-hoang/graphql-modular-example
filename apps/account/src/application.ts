import 'reflect-metadata';

import { buildSubgraphSchema } from '@apollo/subgraph';
import { mergeResolvers } from '@graphql-tools/merge';
import { createApplication } from 'graphql-modules';

import { AccountModule } from './modules/account';
import { CustomerModule } from './modules/customer';
import { RewardsModule } from './modules/rewards';

export const application = createApplication({
  modules: [AccountModule, CustomerModule, RewardsModule],
  schemaBuilder(input) {
    return buildSubgraphSchema({
      typeDefs: input.typeDefs,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      resolvers: mergeResolvers(input.resolvers) as any,
    });
  },
});

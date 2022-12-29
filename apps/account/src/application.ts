import { createApplication } from 'graphql-modules';

import { AccountDatasources } from './datasources';
import { AccountModule } from './modules/account';
import { RewardsModule } from './modules/rewards';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace GraphQLModules {
    // This creates the context type for all resolvers
    interface GlobalContext {
      datasources: AccountDatasources;
    }
  }
}

export const application = createApplication({
  modules: [AccountModule, RewardsModule],
});

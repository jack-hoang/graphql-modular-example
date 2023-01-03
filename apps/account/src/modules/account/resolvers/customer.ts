import { AccountModule } from '../__generated__/module-types';
import { AccountDatasource } from '../providers/AccountDatasource';

export const resolvers: AccountModule.Resolvers = {
  Customer: {
    id(parent) {
      return parent.id;
    },
    accounts: async ({ id: customerId }, __, { injector }) => {
      return injector.get(AccountDatasource).getAccountsByCustomerId(customerId);
    },
  },
};

import { AccountModule } from '../__generated__/module-types';
import { AccountDatasource } from '../providers/AccountDatasource';

export const resolvers: AccountModule.Resolvers = {
  Query: {
    account: async (_, { id }, { injector }) => {
      const account = await injector.get(AccountDatasource).getAccountById(id);
      return account;
    },
  },
  Account: {
    id(parent) {
      return parent.id;
    },
    accountNumber(parent) {
      return parent.accountNumber;
    },
    balance(parent) {
      return parent.balance ?? null;
    },
    rewards(parent) {
      return parent.rewards ?? null;
    },
  },
};

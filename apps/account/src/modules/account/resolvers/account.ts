import { AccountModule } from '../__generated__/module-types';

export const resolvers: AccountModule.Resolvers = {
  Query: {
    account: async (_, { id }, ctx) => {
      const account = await ctx.datasources.accountDatasource.getAccountById(id);
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
      return { id: `${parent.id}-rewards` };
    },
  },
};

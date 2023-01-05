import { MembershipLevel } from '../../../__generated__/graphql';
import { AccountDatasource } from '../../account/providers/AccountDatasource';
import { CustomerModule } from '../__generated__/module-types';
import { CustomerDatasource } from '../providers/CustomerDatasource';

export const resolvers: CustomerModule.Resolvers = {
  Customer: {
    id(parent) {
      return parent.id;
    },
    accounts: async ({ id: customerId }, __, { injector }) => {
      return injector.get(AccountDatasource).getAccountsByCustomerId(customerId);
    },
    membershipLevel(parent) {
      return parent?.membershipLevel ?? MembershipLevel.SILVER;
    },
  },
  Query: {
    customersByLevel: async (_parent, { input }, { injector }) => {
      const customers = await injector.get(CustomerDatasource).getCustomersBylevel(input.membershipLevel);
      const edges: Array<CustomerModule.CustomersByLevelEdge> = [];
      customers.map((customer) => edges.push({ node: { customer } }));
      return {
        __typename: 'CustomersByLevelConnection',
        total: customers.length,
        edges,
      };
    },
  },
  CustomersByLevelConnection: {
    __isTypeOf(parent) {
      // eslint-disable-next-line no-console
      return parent.__typename === 'CustomersByLevelConnection';
    },
  },
  ResponseError: {
    __isTypeOf(parent) {
      // eslint-disable-next-line no-console
      return parent.__typename === 'ResponseError';
    },
  },
};

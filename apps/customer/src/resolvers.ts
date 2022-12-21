import { Resolvers } from './__generated__/resolvers-types';

const resolvers: Resolvers = {
  Query: {
    async customer(_, { id }, ctx) {
      const customer = await ctx.datasources.customerDatasource.getCustomerById(id);
      return customer;
    },
  },
};

export default resolvers;

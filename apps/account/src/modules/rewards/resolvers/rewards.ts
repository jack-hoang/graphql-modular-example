import { RewardsModule } from '../__generated__/module-types';

export const resolvers: RewardsModule.Resolvers = {
  Rewards: {
    id(parent) {
      return parent.id;
    },
    pointsBalance() {
      return Math.floor(Math.random() * 100000);
    },
  },
};

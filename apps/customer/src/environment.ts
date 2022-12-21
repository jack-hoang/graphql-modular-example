export interface Environment {
  introspection: boolean;
}

export const environment: Environment = {
  introspection: process.env.APOLLO_INTROSPECTION === 'true',
};

import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './src/modules/**/typedefs/*.graphql',
  generates: {
    './src/modules/': {
      preset: 'graphql-modules',
      presetConfig: {
        baseTypesPath: '../__generated__/graphql.ts',
        filename: '__generated__/module-types.ts',
      },
      config: {
        useIndexSignature: true,
        contextType: 'GraphQLModules.Context',
      },
      plugins: [
        {
          add: {
            content: ['/* eslint-disable */'],
          },
        },
        'typescript',
        'typescript-resolvers',
      ],
    },
  },
};
export default config;

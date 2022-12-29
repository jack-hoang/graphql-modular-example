import fs from 'fs';
import { join } from 'path';

import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchemaSync } from '@graphql-tools/load';
import { printSchemaWithDirectives } from '@graphql-tools/utils';

const typeDefs = loadSchemaSync(join(__dirname, '../../src/modules/**/typedefs/*.graphql'), {
  loaders: [new GraphQLFileLoader()],
});

const targetDirPath = 'dist/publish';

fs.mkdirSync(targetDirPath, { recursive: true });
fs.writeFileSync(`${targetDirPath}/schema.graphql`, printSchemaWithDirectives(typeDefs));

import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['src'],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        testRegext: '/__tests__/.*.test.ts',
        verbose: true,
      },
    ],
  },
};

export default jestConfig;

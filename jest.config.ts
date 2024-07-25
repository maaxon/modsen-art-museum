export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+.tsx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@api/(.*)$': '<rootDir>/src/api/$1',
    '^@type/(.*)$': '<rootDir>/src/types/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@ui/(.*)$': '<rootDir>/src/components/ui/$1',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
  },
};

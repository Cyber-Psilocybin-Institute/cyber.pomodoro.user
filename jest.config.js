module.exports = {
  roots: ['<rootDir>/tests'],
  testMatch: [
    '<rootDir>/tests/**/*.spec.ts',
    '<rootDir>/tests/**/*.test.ts'
  ],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**',
    '!**/node_modules/**',
    '!**/tests/**',
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  testEnvironment: 'node',
  clearMocks: true,
  // preset: '@shelf/jest-mongodb',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '@data/(.*)': '<rootDir>/src/data/$1',
    '@domain/(.*)': '<rootDir>/src/domain/$1',
    '@infra/(.*)': '<rootDir>/src/infra/$1',
    '@core/(.*)': '<rootDir>/src/core/$1',
    '@presentation/(.*)': '<rootDir>/src/presentation/$1',
    '@validation/(.*)': '<rootDir>/src/validation/$1',
    '@tests/(.*)': '<rootDir>/tests/$1'
  }
}

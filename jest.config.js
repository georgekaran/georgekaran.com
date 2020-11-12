module.exports = {
  testEnvironment: 'jsdom',
  roots: [
    '<rootDir>/src'
  ],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!<rootDir>/src/**/*.stories.tsx',
    '!<rootDir>/src/presentation/styles/**',
    '!<rootDir>/src/test/RouterContextMock.tsx',
    '!<rootDir>/src/data/**',
    '!<rootDir>/src/domain/**'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/'
  ],
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: [
    '<rootDir>/src/test/setup.ts'
  ],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  }
}

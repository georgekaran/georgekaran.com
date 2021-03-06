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
    '!<rootDir>/src/pages/_app.tsx',
    '!<rootDir>/src/pages/_document.tsx',
    '!<rootDir>/src/test/utils/**',
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

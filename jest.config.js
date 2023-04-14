module.exports = {
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'],
    setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
    modulePaths: ['<rootDir>/src/'],
    moduleNameMapper: {
        '@types/(.*)': '<rootDir>/src/types/$1',
        '@config/(.*)': '<rootDir>/src/config/$1',
        '@core/(.*)': '<rootDir>/src/core/$1',
        '@layout/(.*)': '<rootDir>/src/layout/$1',
        '@pages/(.*)': '<rootDir>/src/pages/$1',
        '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
    },
};

module.exports = {
    moduleFileExtensions: [
        'js',
        'jsx',
        'json',
        'vue',
    ],
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    snapshotSerializers: [
        'jest-serializer-vue',
    ],
    testMatch: [
        '**/tests/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
    ],
    testURL: 'http://localhost/',
    setupFiles: ['<rootDir>/tests/setup'], // 类似 webpack.entry
    collectCoverage: true,
    collectCoverageFrom: [
        '!src/plugins/*.(js|vue)',
        '!public/vendor/*.js',
        'src/**/*.(js|vue)',
        'public/**/*.js',
    ],
    coverageDirectory: 'coverage',
    coverageReporters: [
        'lcov',
    ],
};

module.exports = {
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.js$',
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['js'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
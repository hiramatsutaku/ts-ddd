module.exports = {
  preset: 'ts-jest',
  testMatch: ['<rootDir>/src/**/?(*.)(spec|test).ts'],
  globals: {
    'ts-jest': { diagnostics: false },
  },
};

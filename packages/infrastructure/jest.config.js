module.exports = {
  preset: 'ts-jest',
  testMatch: ['<rootDir>/src/**/?(*.)(spec|test).ts'],
  setupFiles: ['<rootDir>/jest.setup.ts'],
};

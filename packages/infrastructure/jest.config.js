module.exports = {
  preset: 'ts-jest',
  testMatch: ['<rootDir>/src/**/?(*.)(spec|test).ts'],
  setupFiles: ['<rootDir>/jest.setup.ts'],
  setupFilesAfterEnv: ['<rootDir>/jest.setupAfterEnv.ts'],
  globals: {
    'ts-jest': { diagnostics: false },
  },
};

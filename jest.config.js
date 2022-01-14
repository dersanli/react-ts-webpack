module.exports = {
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ['<rootDir>/src'],

  testEnvironment: 'jsdom',

  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: [
    '<rootDir>/jest-setup.ts'
    //'@testing-library/react/cleanup-after-each',
    //'@testing-library/jest-dom/extend-expect'
  ],

  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

  // Module file extensions for importing
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif)$': '<rootDir>/src/__mocks__/fileMock.ts'
  },
};


// "jest": {
//   "setupFilesAfterEnv": [
//     "<rootDir>/jest-setup.ts"
//   ],
//     "moduleNameMapper": {
//     "\\.(css|less)$": "identity-obj-proxy",
//       "\\.(jpg|jpeg|png|gif)$": "<rootDir>/src/__mocks__/fileMock.ts"
//   },
//   "testEnvironment": "jsdom"
// },
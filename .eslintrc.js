const standardRestrictedGlobals = require('eslint-restricted-globals');

const noRestrictedGlobals = ['error', 'isNaN', 'isFinite'].concat(standardRestrictedGlobals);
const noRestrictedGlobalsWorker = noRestrictedGlobals.filter((o) => o !== 'self');

module.exports = {
  extends: 'airbnb-base',
  env: {
    es6: true,
    browser: true,
    jest: true,
    worker: true,
    serviceworker: true,
  },
  rules: {
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-unused-vars': 'warn',
    'no-unused-expressions': 'warn',
    'no-plusplus': 'warn',
    'no-param-reassign': 'warn',
    'no-restricted-globals': noRestrictedGlobals,
    'consistent-return': 'warn',
  },
  overrides: [
    {
      files: ['sw.js'],
      rules: {
        'no-restricted-globals': noRestrictedGlobalsWorker,
      },
    },
  ],
};

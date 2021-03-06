module.exports = {
  env: {
    'react-native/react-native': true,
    es6: true,
    jest: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'react-app',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'import', 'jsx-a11y', 'react-native'],
  parser: '@typescript-eslint/parser',
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'],
      },
    ],
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'linebreak-style': 'off',
    'react/prefer-stateless-function': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    'no-underscore-dangle': 'off',
    'react/destructuring-assignment': 'warn',
    '@typescript-eslint/no-empty-interface': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/camelcase': 'off',
    camelcase: 'off',
    'react/jsx-props-no-spreading': 'off',
    'global-require': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
};

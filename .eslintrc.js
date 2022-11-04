module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', '.js', '.tsx'] },
    ],
    'react/function-component-definition': [
      'warn',
      { namedComponents: ['arrow-function'] },
    ],
  },
};

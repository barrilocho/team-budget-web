module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '.prettierrc.js'],
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'prettier',
    'airbnb/hooks',
  ],
  plugins: ['react', 'prettier'],
  rules: {
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'no-underscore-dangle': 'off',
    'react/require-default-props': [
      2,
      { forbidDefaultForRequired: false, ignoreFunctionalComponents: true },
    ],
  },
};

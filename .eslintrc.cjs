module.exports = {
  root: true,
  env: { browser: true, es2020: true, jest: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'eslint-config-prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'simple-import-sort'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['babel-polyfill', 'babel-polyfill/dist/polyfill.min.js'],
          ['helper', './utils/helper'],
          ['material-ui/DatePicker', '../custom/DatePicker'],
          ['material-ui', 'material-ui-ie10'],
          ['@components', './src/components'],
          ['@api', './src/api'],
          ['@type', './src/types'],
          ['@pages', './src/pages'],
          ['@constants', './src/constants'],
          ['@hooks', './src/hooks'],
          ['@utils', './src/utils'],
          ['@ui', './src/components/ui'],
          ['@styles', './src/styles'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
};

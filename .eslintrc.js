module.exports = {
  env: {
    node: true,
    jest: true
  },
  parserOptions: { 
    ecmaVersion: 6 
  },
  extends: ['eslint:recommended', 'google', 'prettier'], // extending recommended config and config derived from eslint-config-prettier
  plugins: ['prettier'], // activating esling-plugin-prettier (--fix stuff)
  rules: {
    'prettier/prettier': [ // customizing prettier rules (unfortunately not many of them are customizable)
      'warn',
      {
        singleQuote: true, 
        trailingComma: 'all',
      },
    ],
    eqeqeq: ['error', 'always'], // adding some custom ESLint rules
  }
};

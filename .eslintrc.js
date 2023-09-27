module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'react-app',
    'react-app/jest'
    // 'eslint-plugin-prettier'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/no-anonymous-default-export': 'off',
    'react-hooks/exhaustive-deps': 'off'
  }
}

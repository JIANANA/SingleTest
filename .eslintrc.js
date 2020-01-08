module.exports = {
  root: true,
  env: {
    node: true
  },
  "globals":{
    "describe": true,
    "it": true,
    "test": true,
    "expect": true,
    "jest":true,
    "beforeEach":true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}

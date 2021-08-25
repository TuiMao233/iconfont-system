const _ = require('lodash')

module.exports = _.merge(require('@tuimao/eslint/ts-vue@3.js'), {
  rules: {
    'import/no-unresolved': 'off'
  }
})

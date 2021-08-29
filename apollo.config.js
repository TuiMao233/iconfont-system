module.exports = {
  client: {
    service: {
      name: 'iconfont-systemsystem',
      url: 'http://localhost:4000/graphql'
    },
    includes: ['./packages/system/client/**/*.ts'],
    excludes: ['**/__tests__/**', '**/node_modules/**']
  }
}

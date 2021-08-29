// graphql.config.js
module.exports = {
  projects: {
    system: {
      schema: ['http://localhost:4000/graphql'],
      documents: ['**/*.{graphql,js,ts,jsx,tsx}'],
      extensions: {
        endpoints: {
          default: { url: 'http://localhost:4000/graphql' }
        }
      }
    }
  }
}

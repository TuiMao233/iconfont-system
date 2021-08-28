import express from 'express'
import consola from 'consola'
import { ApolloServer } from 'apollo-server-express'
import { schema, dataSources } from './graphql'

async function createServer() {
  const app = express()
  const server = new ApolloServer({ schema, dataSources: () => dataSources })
  await server.start()
  server.applyMiddleware({ app })
  await new Promise((resolve: any) => app.listen({ port: 4000 }, resolve))
  consola.success(`Server ready at http://localhost:4000${server.graphqlPath}`)
  return { app, server }
}

createServer()

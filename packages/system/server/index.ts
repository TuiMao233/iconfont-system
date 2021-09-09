import express from 'express'
import consola from 'consola'
import { ApolloServer } from 'apollo-server-express'
import { schema, dataSources } from './graphql'

async function createServer() {
  const app = express()

  const server = new ApolloServer({ schema, dataSources: () => <any>dataSources })
  await server.start()
  server.applyMiddleware({ app })
  await new Promise((resolve: any) => app.listen({ port: 5000 }, resolve))
  ;(<any>consola).silent(`Server ready at http://localhost:5000${server.graphqlPath}`)
  return { app, server }
}

createServer()

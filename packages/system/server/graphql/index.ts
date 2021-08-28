import { makeExecutableSchema } from '@graphql-tools/schema'
import { resolvers } from './resolvers'
import { typeDefs } from './type-defs'

export { resolvers } from './resolvers'
export { typeDefs } from './type-defs'
export { dataSources } from './data-sources'
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

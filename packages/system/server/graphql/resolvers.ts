import type { IResolvers } from '@graphql-tools/utils'
export const resolvers = Object.values<IResolvers>({
  group: {
    Query: {
      foo: () => 'I am foo callback data'
    }
  },
  fonts: {
    Query: {
      boo: () => 'I am boo callback data'
    }
  }
})

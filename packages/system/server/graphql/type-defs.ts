import { gql } from 'apollo-server-express'
export const typeDefs = Object.values({
  group: gql`
    # test foo data
    type Query {
      foo: String
    }
  `,
  fonts: gql`
    # test boo data
    type Query {
      boo: String
    }
  `
})

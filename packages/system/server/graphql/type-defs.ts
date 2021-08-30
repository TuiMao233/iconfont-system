import { gql } from 'apollo-server-express'
export const typeDefs = Object.values({
  group: gql`
    # test foo data
    type Query {
      foo: String
    }
  `,
  fonts: gql`
    type FontItem {
      id: ID!
      key: String!
      value: String!
      group: ID!
      createTime: Float!
      updateTime: Float!
    }
    input SearchInput {
      key: String
      groups: [ID!]
    }
    input PaginationInput {
      search: SearchInput
      limit: Int
      page: Int
    }
    type PaginationFonts {
      total: Int!
      lastPage: Int!
      list: [FontItem!]
    }
    type Query {
      fonts(options: PaginationInput): PaginationFonts
    }
    input UpdateFontInput {
      key: String
      value: String
      group: ID
    }
    input CreateFontInput {
      key: String!
      value: String!
      group: ID!
    }
    type Success {
      message: String!
      status: Boolean
    }
    type Mutation {
      updateFont(id: ID!, font: UpdateFontInput!): FontItem
      createFont(font: CreateFontInput!): FontItem
      deleteFont(id: ID!): Success
      deleteFonts(ids: [ID!]): Success
    }
  `
})

import type { IResolvers } from '@graphql-tools/utils'
import { UserInputError } from 'apollo-server-express'

import { dataSources } from './data-sources'
export const resolvers = Object.values<IResolvers>({
  group: {
    Query: {
      foo: () => 'I am foo callback data'
    }
  },
  fonts: {
    Query: {
      fonts: async (parent, { options }) => {
        return await dataSources.font.getFonts(options)
      }
    },
    Mutation: {
      updateFont: async (parent, { id, font }) => {
        if (!id) throw new UserInputError(`id 输入错误 -> '${id}'`)
        if (!font) throw new UserInputError(`font 输入错误 -> '${font}'`)
        return await dataSources.font.updateFont(id, font)
      },
      createFont: async (parent, { font }) => {
        if (!font) throw new UserInputError(`font 输入错误 -> '${font}'`)
        return await dataSources.font.createFont(font)
      }
    }
  }
})

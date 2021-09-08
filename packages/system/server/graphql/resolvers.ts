import type { IResolvers } from '@graphql-tools/utils'
import { UserInputError } from 'apollo-server-express'

import { dataSources } from './data-sources'
export const resolvers = Object.values<IResolvers>({
  group: {
    Query: {
      groups: async () => {
        return await dataSources.group.getGroups()
      }
    },
    Mutation: {
      updateGroup: async (parent, { id, group }) => {
        if (!id) throw new UserInputError(`id 输入错误 -> '${id}'`)
        if (!group) throw new UserInputError(`group 输入错误 -> '${group}'`)
        return await dataSources.group.updateGroup(id, group)
      },
      createGroup: async (parent, { group }) => {
        if (!group) throw new UserInputError(`group 输入错误 -> '${group}'`)
        return await dataSources.group.createGroup(group)
      },
      deleteGroup: async (parent, { id }) => {
        return dataSources.group.deleteGroup(id)
      }
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
      },
      deleteFont: async (parent, { id }) => {
        return dataSources.font.deleteFont(id)
      },
      deleteFonts: async (parent, { ids }) => {
        return dataSources.font.deleteFont(ids)
      }
    }
  }
})

import { FontModel } from '../mongoose'
import { pickBy } from 'lodash'
// import { MongoDataSource } from 'apollo-datasource-mongodb'
class MongoFont implements FontSources {
  async getFonts(options?: PaginationOptions) {
    const page = options?.page ?? 1
    const limit = options?.limit ?? 20
    const search = options?.search ?? {}
    const filterQuery = pickBy(
      {
        key: search.key ? new RegExp(search.key) : undefined,
        group: search.groups ? { $in: search.groups } : undefined
      },
      Boolean
    )
    const fonts = await FontModel.find(filterQuery)
      .skip((page - 1) * limit)
      .limit(limit)
    const total = await FontModel.find(filterQuery).count()
    const lastPage = total / limit
    return { total, lastPage, list: fonts }
  }
  async updateFont(id: string, fontItem: FontItem) {
    // { new: true } 返回修改后的内容
    return await FontModel.updateOne({ id }, fontItem, { new: true })
  }
  async createFont(fontItem: FontItem) {
    return await FontModel.create(fontItem)
  }
  async deleteFont(id: string) {
    return await FontModel.deleteOne({ id })
  }
  async deleteFonts(ids: string[]) {
    return await FontModel.remove({ id: { $in: ids } })
  }
}
class MongoGroup implements GroupSources {}

export const dataSources = {
  font: new MongoFont(),
  group: new MongoGroup()
}

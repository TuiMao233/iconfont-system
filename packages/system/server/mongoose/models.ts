import { createModel } from './utils'

export const FontModel = createModel<FontItem>('fonts', {
  key: { type: String, required: true },
  value: { type: String, required: true },
  group: { type: String, required: true },
  createTime: { type: Date, default: Date.now },
  updateTime: { type: Date, default: Date.now }
})

export const GroupModel = createModel<FontItem>('groups', {
  label: { type: String, required: true },
  prefix: { type: String, required: true },
  createTime: { type: Date, default: Date.now },
  updateTime: { type: Date, default: Date.now }
})

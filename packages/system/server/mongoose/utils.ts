import mongoose, { SchemaDefinition } from 'mongoose'
import autoIncrement from 'mongoose-auto-increment'

export const createModel = <T = Record<string, any>>(name: string, schema: SchemaDefinition) => {
  const _schema = new mongoose.Schema(schema)
  _schema.plugin(autoIncrement.plugin, { model: name, field: '_id' })
  const model = mongoose.model<T>(name, _schema)
  return model
}

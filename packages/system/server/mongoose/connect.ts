import mongoose from 'mongoose'
import consola from 'consola'
import autoIncrement from 'mongoose-auto-increment'

const MOGODB_URL = 'mongodb://localhost/iconfont-system'

mongoose.connect(MOGODB_URL)

mongoose.connection
  .once('open', () => (<any>consola).silent(`mongodb ready at ${MOGODB_URL}`))
  .once('close', (error) => (<any>consola).error('数据库连接失败!', error))

autoIncrement.initialize(mongoose.connection)

export { mongoose }

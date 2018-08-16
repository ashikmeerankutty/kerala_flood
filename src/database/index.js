import mongoose from 'mongoose'
import rescueSchema from './models/Rescue'
export const Connect = () => {
  mongoose.Promise = global.Promise
  return new Promise((resolve, reject) => {
    mongoose.connect(process.env.DATABASE)
    mongoose.connection.on('error', (error) => {
      reject(error)
    })
    mongoose.connection.once('open', () => {
      resolve(mongoose.connection)
    })
  })
}

export const Rescue = mongoose.model('Rescue', rescueSchema)

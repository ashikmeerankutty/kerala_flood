import { Schema } from 'mongoose'

const rescueSchema = new Schema({
  name: {
    type: 'String',
    required: 'Please supply a name',
    trim: true
  },
  phone: {
    type: String,
    required: 'Please supply a phone number',
    trim: true
  },
  description : {
    type: String,
    required: 'Please supply a phone number',
    trim: true
  },
  priority : {
    type: String,
    required: 'Please supply a priority',
    trim: true
  },
  date: {
    type: Date,
    trim: true
  }
})

export default rescueSchema

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const roomSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  privacy: {
    type: String,
    enum: ['public', 'private'],
    default: 'public', // Set a default value
  },
  user_id: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Room', roomSchema)
const mongoose = require('../db')
const Schema = mongoose.Schema

const messageSchema = new Schema({
  sendId: {
    type: String,
    required: true
  },
  receiveId: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('message', messageSchema)

const mongoose = require('../db')
const Schema = mongoose.Schema

const userSchema = new Schema({
  role: {
    type: String,
    required: true,
    default: 'student'
  },
  login_name:  {
    type: String,
    unique: true,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  name: String,
  avatar: String,
  tel: String,
  email: String,
  teacher: String,
  school: {
    type: String,
    default: '江西财经大学'
  },
  create_time: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('User', userSchema)

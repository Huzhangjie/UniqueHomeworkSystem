const mongoose = require('../db')
const Schema = mongoose.Schema

const Lev_Schema = new Schema({
  role: {
    type: String,
    required: true,
    default: 'stulevel'
  },
   login_name:  {
    type: String,
    unique: true,
    require: true
  },
  last_level:  {
    type: boolean,
    require: true
  },
  this_level: {
      type: boolean,
      require:false
  },
  points: {
      type:float,
      default:0
  },
  chage_time: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('User', Lev_Schema, 'stulevel')

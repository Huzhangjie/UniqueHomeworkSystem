const mongoose = require('../db')
const Schema = mongoose.Schema

const Masg_Schema = new Schema({
  // role: {
  //   type: String,
  //   required: true,
  //   default: 'massage'
  // },
   send_login_name:  {
     // 消息发送者的用户名
    type: String,
    // unique: true,
    require: true
  },
  recv_login_name:  {
    // 接受者用户名
    type: String, 
    // unique: true,
    require: true
  },
  content:{
      type:String,
      default:null
  },
  // legitimacy:{
  //   type:boolean,
  //   default:true
  // },
  visibility:{  
    // 是否已读 
    type: Boolean,
    default: false
  },
  send_time:{
      type:Date,
      default:Date.now
  }
})

module.exports = mongoose.model('message', Masg_Schema)
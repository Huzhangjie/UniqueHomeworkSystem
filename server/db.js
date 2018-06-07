const mongoose = require('mongoose')
// mongoose.connect('mongodb://172.20.25.37:5307/UniqueHomeworkSystem')
mongoose.connect('mongodb://127.0.0.1/UniqueHomeworkSystem')

let db = mongoose.connection

// 防止Mongoose: promise 错误
mongoose.Promise = global.Promise

db.on('error', function() {
  console.log('数据库连接错误')
})
db.on('open', function() {
  console.log('数据库连接成功')
})

// const userSchema = mongoose.Schema({
//   login_name:  {
//     type: String,
//     unique: true,
//     require: true
//   },
//   password: {
//     type: String,
//     require: true
//   },
//   create_time: Date
// });
// //根据schema生成model
// const model = {
//   User: mongoose.model('User', userSchema)
// };

// module.exports = model;

module.exports = mongoose
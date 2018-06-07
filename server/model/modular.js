// 作业模块数据库设计
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const modularSchema = new Schema({

  // 模块编号
  id:  {
    type: String,
    unique: true,
    require: true,
    index: true
  },

  // 模块名称
  modular_name: {
    type: String,
    unique: true,
    require: true
  },

  // 父模块
  parent_module: {
      type: Schema.Types.ObjectId,
      ref: 'Modular'
  },

  // 子模块
  sub_module: {
    type: Schema.Types.ObjectId,
    ref: 'Modular'
  },

  // 知识点的掌握等级
  content: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model('Modular', modularSchema, 'modular')
